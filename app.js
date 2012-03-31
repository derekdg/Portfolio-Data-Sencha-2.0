//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

var authObject = {

	authToken: "",
	sessionToken: "",
	
}


Ext.application({

    name: 'PortfolioApp',
	phoneStartupScreen: 'image/phoneStart.png',
    glossOnIcon: false,

    models: ['Portfolios'],
    stores: ['Portfolios'],
    views: ['Main', 'Login'],
    controllers: ['Main'],

    launch: function() {
                
				
		PortfolioApp.view.viewport = new Ext.Panel({
			id: 'pnlViewport',
			xtype: 'viewport',
			layout: 'card',
			fullscreen: 'true',
			animation: {
                type: 'slide',
                direction: 'left'
            },
			hidden: 'true',
			items: [
				{
					xtype: 'loginform',
				},
				{
					xtype: 'mainview'
				}
			]
		});
		
		
	}
});