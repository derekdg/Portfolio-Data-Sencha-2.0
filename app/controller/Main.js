Ext.define('PortfolioApp.controller.Main', {
    
	extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.data.JsonP',
		'Ext.Ajax',
		'Ext.JSON',
		'PortfolioApp.store.Portfolios',
		'PortfolioApp.store.Positions'
	],
		
	launch: function() {
		this.checkLogin();
	},
    
	config: {
		
		refs: {
			pnl: '#pnlViewport',
			login: '#loginbutton',
			main: 'mainview',
			loginForm: 'loginform',
			portfolioList: 'portfolios',
			positionList: 'positions',
			positionStore: 'positionsstore'
		},
		
		control: {
			'#logoutButton': {
				tap: 'onLogoutTap'
			},
			'portfolios': {
				disclose: 'showPositions'
			}

		}
	},


	checkLogin: function() {
	
		authObject.authToken = getParameterByName("token");
		
		if (authObject.authToken.length > 0) {
			
			//Hide the login button:
			this.getLogin().hide();
			
			Ext.Viewport.setMasked({
				xtype: 'loadmask',
				message: 'Loading...'
			});
			
			if (authObject.sessionToken.length > 0) { 

				this.getPortfolioData(); 
			}
			else { this.getSessionToken(authObject);  }
			
		}

	},
			
	showPositions: function(list, record) {
		
		if (!this.positionList) {
			this.positionList = Ext.create('PortfolioApp.view.Positions');
		}

		Ext.Viewport.setMasked({
			xtype: 'loadmask',
			message: 'Loading...'
		});

		//this.getPositionData(record.data.portID);
		this.getPositionData(record);
	},
	
	getSessionToken: function(authObject) {
		
		var $this = this;
		
		Ext.Ajax.request({
			url: 'http://derekdg.com/Portfolio-Data-Sencha-2.0/app/controller/AuthSubSessionToken.php',
			method: 'GET',
			params: {
				token: authObject.authToken
			},
			success: function(response){
				authObject.sessionToken = response.responseText.substring( response.responseText.indexOf("=")+1 ).trim();
				$this.getPortfolioData(authObject);
			}
		});	
	
	},

	getPortfolioData: function(authObject) {

		var $this = this;
		
		Ext.Ajax.request({
			url: 'http://derekdg.com/Portfolio-Data-Sencha-2.0/app/controller/GetPortfolioData.php',
			method: 'GET',
				params: {
					token: authObject.sessionToken
			  },
			callback: function(response) {
			},
				success: function(response, opts) {
				$this.loadPortfolios(Ext.JSON.decode(response.responseText));
			},
			failure: function(response, opts) {
				console.log('FAILURE (getPortfolioData): ' + response.status);
			}
		});
	
	},

	getPositionData: function(record) {
	
		var $this = this;
		
		Ext.Ajax.request({
			url: 'http://derekdg.com/Portfolio-Data-Sencha-2.0/app/controller/GetPositionData.php',
			method: 'GET',
			params: {
					token: authObject.sessionToken,
					portfolio_id: record.data.portID
			 },
			callback: function(response) {
			},
				success: function(response, opts) {
				$this.loadPositions(record, Ext.JSON.decode(response.responseText));

			},
			failure: function(response, opts) {
				console.log('FAILURE (getPositionData): ' + response.status);
			}
		});
	
	},
		 
	loadPortfolios: function(jData) {

		if (!this.main) {
			this.main = Ext.create('PortfolioApp.view.Main');
		}
						
		//Add the MAIN to the viewport:
		Ext.Viewport.add({
			xtype: 'mainview'
		});
		
		Ext.Viewport.setActiveItem(this.main);

		// Get the Portfolio List from Google:
		this.bindPortfolios(this, jData);
		
	},
	  
	loadPositions: function(record, jData) {
		
		var $this = this;
		var d = [];
		var entries = jData.feed.entry;
		
		this.getPositionList().getStore().removeAll();
		this.getPositionList().getStore().sync();
		
		for (var i = 0; i < entries.length; i++) {
			
			var positionEntry = entries[i];
			var positionData = positionEntry.gf$positionData;

			//Build the portfolio object:
			var pos = {
				posID: positionEntry.id.$t,
				posTicker: positionEntry.gf$symbol.symbol,
				posName:  positionEntry.title.$t,
				posShares: positionData.shares,
				posReturn: NumberFormatted(positionData.gainPercentage * 100),
				posReturnClass: GetGainLossClass(positionData.gainPercentage * 100)
			};

			d[i] = pos;			
		
		} //for

		//(Re)load the List:
		this.getPositionList().setData(d);
		this.getPositionList().refresh();

		//Remove the mask:
		Ext.Viewport.setMasked(false);
		
		this.getMain().push(this.positionList, {data: record});	
		
		Ext.Viewport.setActiveItem(3);
	
  },	  
	
	bindPortfolios: function(e, jData) {
	
		var $this = this;
	
		var d = [];
		
		var entries = jData.feed.entry;
		
		for (var i = 0; i < entries.length; i++) {
			
			var portfolioEntry = entries[i];
			var portfolioData = portfolioEntry.gf$portfolioData;

			var mv = cost = today_gain = get_gain = 0.00;
			var gain_per = portfolioData.gainPercentage;
	
			if (!(typeof portfolioData.gf$marketValue  == "undefined")) {
				mv = portfolioData.gf$marketValue.gd$money[0].amount;
				today_gain = portfolioData.gf$daysGain.gd$money[0].amount;
				get_gain = portfolioData.gf$gain.gd$money[0].amount;
			}
	
			if (!(typeof portfolioData.gf$costBasis  == "undefined")) 
				cost = portfolioData.gf$costBasis.gd$money[0].amount;
	
			var change = today_gain;
			var ch_per = ((today_gain / mv)*100);
		
			//Build the portfolio object:
			var port = {
				portID: portfolioEntry.id.$t,
				portName:  portfolioEntry.title.$t,
				mktValue: mv,
				chgPercent: NumberFormatted(ch_per, true),
				chgPercentClass: GetGainLossClass(ch_per),
				chgDollar: NumberFormatted(change, true),
				chgDollarClass: GetGainLossClass(change),
				overallReturn: NumberFormatted(portfolioData.returnOverall * 100, true),
				overallReturnClass: GetGainLossClass(portfolioData.returnOverall * 100)
			};

			d[i] = port;			
		}
	
			//(Re)load the List:
			e.getPortfolioList().setData(d);
			e.getPortfolioList().refresh();
	
			//Remove the mask:
			Ext.Viewport.setMasked(false);
	
	},

	onLogoutTap: function() {
		
		var $this = this;
		
		Ext.Ajax.request({
			url: 'http://derekdg.com/Portfolio-Data-Sencha-2.0/app/controller/AuthSubRevokeToken.php',
			method: 'GET',
			params: {
				token: authObject.sessionToken
			},
			success: function(response){
				authObject.sessionToken = "";
				Ext.Msg.alert('Logout', 'You have been logged out of Google.', 
					function() { $this.goHome(); }
				);
			}
		});	
	
	},		
		
	goHome: function() {
		
		Ext.Viewport.remove({
			xtype: 'mainview'
		});
		
		this.getLogin().show();
		Ext.Viewport.setActiveItem(0);
	
	}
	
});


/////////////////////////////////////////
// MISC Functions;
/////////////////////////////////////////
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function handleInfo(data) {
    var response = eval(data.currentTarget.responseText);

    alert('Target: ' + response.Target + "\n" +
          'Scope: ' + response.Scope + "\n" +
          'Secure: ' + response.Secure);
}

//Function to return a blank if a value is null.
function valueOrDefault(val, def) {
    if (def == undefined) def = "N/A";
    return val == undefined ? def : val;
}

function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;

}

function GetGainLossClass(amount) {
	var c = '';
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	if(i < 0) { cl = 'dd-per-loss'; } else { cl = 'dd-per-gain'; }
	return cl;
}

function FormatDate(dt) {

	var d;
	var curr_date = dt.getDate();
	var curr_month = dt.getMonth();
	curr_month = curr_month + 1;
	var curr_year = dt.getFullYear();
	d = curr_month + '/'+ curr_date + '/'+ curr_year;
	return d;

}

function NumberFormatted(amount, bpre) {

	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; } else { if(bpre) { minus = '+'; } }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return addCommas(s);

}