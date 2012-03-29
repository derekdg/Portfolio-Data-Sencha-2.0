//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

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
			xtype: 'viewport',
			layout: 'card',
			fullscreen: 'true',
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