Ext.define('PortfolioApp.controller.Main', {
    
	extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.data.JsonP',
		'Ext.Ajax',
		'PortfolioApp.store.Portfolios'
		
		],
		
		launch: function() {
			this.checkLogin();
		},
    
		config: {
			refs: {
				viewport: 'viewport',
				main: 'mainview',
				loginForm: 'loginform',
				portfolioList: 'portfolios'
				
			},
			
			control: {
				'#logoutButton': {
					tap: 'onLogoutTap'
				},
				'loginform button': {
				   tap: 'onLoginTap'
				},
				main: {
					push: 'onMainPush',
					pop: 'onMainPop'
				}        

			} //control
		},
    
		checkLogin: function() {
			
			globalToken = google.accounts.user.checkLogin(scope);

			if (globalToken.length > 0) {
				this.loadPortfolios();
			} else {
				this.loadLoginForm();
			}
			
		},
		onMainPush: function(view, item) {
			
			//Hide the Back button if navigating to the List view:
			//if (this.portfolioList)
			//	this.getMain().getNavigationBar().getBackButton().setCls('hidden');
			//else
			//	this.getMain().getNavigationBar().getBackButton().removeCls('hidden');
       
		},

		onMainPop: function(view, item) {
		   alert('pop');
		},
		
		onLoginTap: function() {
			
			//Login to Google:
			var myService = new google.gdata.finance.FinanceService('GoogleInc-financejsguide-1.0');
			globalToken = google.accounts.user.login(scope);

		},
		
		onLogoutTap: function() {
			
			google.accounts.user.logout();
			
			var t = this;
			
			Ext.Msg.alert('Logout', 'You have been logged out of Google.', 
				function() { t.goHome(); }
			);

		},		
		
		goHome: function() {
			
			// Transition to the Login View:
			if (!this.loginForm) {
				this.loginForm = Ext.create('PortfolioApp.view.Login');
			}
			
			console.log(this.getViewport().getActiveItem());
			this.getViewport().getActiveItem().setActiveItem(this.loginForm);
			this.getViewport().show();
		
		},
		 
	  loadPortfolios: function() {
			
		if (!this.main) {
			this.main = Ext.create('PortfolioApp.view.Main');
		}
		if (!this.portfolioList) {
			this.portfolioList = Ext.create('PortfolioApp.view.Portfolios');
		}
			  
		// Get the Portfolio List from Google:
		this.makeAjaxRequest(this);
		
		// Transition to the View:
		this.getViewport().getActiveItem().setActiveItem(this.main);
		this.getViewport().show();
		
	  },
	
	makeAjaxRequest: function(e) {
	
		//this.portfolioList.setMasked({
    //        xtype: 'loadmask',
    //        message: 'Loading...'
    //    });

        
		var d = [];
		
		// Google Finance Portfolio Data API Example: Retrieve all Portfolios
		var financeService = new google.gdata.finance.FinanceService('GoogleInc-financejsguide-1.0');
	
		// This callback will run when the portfolio query is complete
		var portfolioFeedCallback = function(result) {
	
	    // An array with all of the users portfolios
		var entries = result.feed.entry;

		for (var i = 0; i < entries.length; i++) {
	
			var portfolioEntry = entries[i];
			var portfolioData = portfolioEntry.getPortfolioData();
			 
			var mv = cost = today_gain = get_gain = 0.00;
			var gain = portfolioData.getGainPercentage();
			var gain_per = portfolioData.gainPercentage;
	
			if (!(typeof portfolioData.getMarketValue()  == "undefined")) {
				mv = portfolioData.getMarketValue().getMoney()[0].amount;
				today_gain = portfolioData.getDaysGain().getMoney()[0].amount;
				get_gain = portfolioData.getGain().getMoney()[0].amount;
			}
	
			if (!(typeof portfolioData.getCostBasis()  == "undefined")) 
				cost = portfolioData.getCostBasis().getMoney()[0].amount;
	
			var change = today_gain;
			var ch_per = ((today_gain / mv)*100);
		
			//Build the portfolio object:
			var port = {
				portID: portfolioEntry.id.$t,
				portName:  portfolioEntry.title.$t,
				mktValue: mv,
				chgPercent: NumberFormatted(ch_per),
				chgDollar: NumberFormatted(change),
				overallReturn: NumberFormatted(portfolioData.returnOverall * 100),
			
			};
			
			console.log(port.overallReturn);
			
			//Add this portfolio to the array:
			d[i] = port;			
		}
	
			//(Re)load the List:
			e.getPortfolioList().setData(d);
			e.getPortfolioList().refresh();
	
			
			 //this.portfolioList.setMasked(false);
			
		};
	
	
		// FinanceService methods may be supplied with an alternate callback for errors
		var handleErrorCallback = function(error) {
		  console.log(error);
		};
	
		console.log('Retrieving a list of the user portfolios...');
		
		var portfolioFeedUri = 'http://finance.google.com/finance/feeds/default/portfolios?returns=true&positions=true';
		
		financeService.getPortfolioFeed(portfolioFeedUri, portfolioFeedCallback, handleErrorCallback);
 		

	} //makeAjaxRequest
	
});



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

alert(amount);

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