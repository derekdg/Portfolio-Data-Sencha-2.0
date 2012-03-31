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
					title: 'Google Finance'
									
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
