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

    models: ['Portfolios', 'Positions'],
    stores: ['Portfolios', 'Positions'],
    views: ['Main', 'Login'],
    controllers: ['Main'],

    launch: function() {
           
		Ext.Viewport.add({
			xtype: 'loginform'
		});
	}
});