Ext.define('PortfolioApp.view.Main', {
    
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
    	'PortfolioApp.view.Portfolios',
			'PortfolioApp.view.Positions'
    ],
		
    config: {
      autoDestroy: false,
      navigationBar: {
			      title: 'Google Portfolios',
					  docked: 'top',
					  defaults: {
						iconMask: true
      },
      items: [
            {
               	xtype: 'button',
                id: 'logoutButton',
                text: 'Logout',
								//iconCls: 'delete',
                align: 'right',
                hideAnimation: Ext.os.is.Android ? false : {
                    type: 'fadeOut',
                    duration: 200
                },
                showAnimation: Ext.os.is.Android ? false : {
                    type: 'fadeIn',
                    duration: 200
                },
            }
          ]
      },

      items: [
          { 
          	xtype: 'portfolios'
          }
          
      ]
    }
});
