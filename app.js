//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>


/*Ext.setup({
    onReady: function() {
        Ext.Viewport.add({
            xtype: 'loginform',
            html: 'Hello world!'
        });
    }
});*/

Ext.application({

    name: 'PortfolioApp',

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
		//PortfolioApp.view.viewport.hide();

		
			/*var mainPanel = Ext.create('Ext.Container', {
				fullscreen: true,
				scrollable: false,
				layout: {
							type: 'vbox',
							align: 'stretch'
						},
				items: [
					{
						flex: 1,
						xclass: 'PortfolioApp.view.Main'
					}
				]
			});*/
    	        
			/*var loginPanel = Ext.create('Ext.Container', {
				fullscreen: true,
				scrollable: false,
				layout: {
							type: 'vbox',
							align: 'stretch'
						},
				items: [
					{
						flex: 1,
						xclass: 'PortfolioApp.view.Login'
					}
				]
			});
		if (checkLogin) {
		
			alert('logged in');
			 Ext.Viewport.add(mainPanel);
		} else {
			alert('NOT logged in');
			Ext.Viewport.add(loginPanel);
		}*/
    }
});

function checkLogin() {

	globalToken = google.accounts.user.checkLogin(scope);
			alert(globalToken);
			if (globalToken.length > 0) {
				return true;
			} else {
				return false;
			}

}