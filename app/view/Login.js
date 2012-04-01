Ext.define('PortfolioApp.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
		
    config: 
		{
    	scrollable: false,
    	title: 'My Portfolios',
    	padding: '30 10 10 10',	// top right bottom left
			items: [
				{
					xtype: 'titlebar',
					docked: 'top',
					title: 'Google Finance',
					items: [
						{
							xtype: 'button',
							id: 'aboutButton',
							text: 'About',
							align: 'right',
							//iconCls: 'info',
							hideAnimation: Ext.os.is.Android ? false : {
								type: 'fadeOut',
								duration: 200
							},
							showAnimation: Ext.os.is.Android ? false : {
								type: 'fadeIn',
								duration: 200
							},
							handler: function () {
			
									// Basic alert:
									Ext.Msg.show({
											title: 'About Site',
											cls: 'home',
											message: '<p>This mobile site is a proof-of-concept, playground, etc. for accessing Google Portfolio data.</p><p>It was built using the <a href="http://www.sencha.com/" target="foo">Sencha Touch (2.0)</a> framwork and utilizes the Google Finance API to display portfolio/position/transaction data</p> ',
											buttons: Ext.MessageBox.OK,
											fn: Ext.emptyFn,
											midWidth: 300
									});
							} //handler
						}					
					]
									
				},
				{
		            xtype:  'button',
					id:		'loginbutton',
		            text:   'Login with Google',
		            ui:     'confirm',
		            handler: function() {
		            	window.location="https://www.google.com/accounts/AuthSubRequest?next=http%3A%2F%2Fderekdg.com%2FPortfolio-Data-Sencha-2.0%2Findex.html&scope=http%3A%2F%2Ffinance.google.com%2Ffinance%2Ffeeds%2F&session=1&secure=0";
		            }
				}		
			]
		}				    

});
