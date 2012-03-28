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
		            ui:     'confirm'
				}		
			]
		}				    

});
