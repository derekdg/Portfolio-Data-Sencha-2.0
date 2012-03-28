Ext.define('PortfolioApp.view.Main', {
    
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
        'PortfolioApp.view.Portfolios',
		
    ],
		
    config: {
        autoDestroy: false,

        navigationBar: {
      	  title: 'Google Portfolios',
		  docked: 'top',
            items: [
                {
                   	xtype: 'button',
                    id: 'logoutButton',
                    text: 'Logout',
                    align: 'right',
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    },
									
                },
                {
                   	xtype: 'button',
                    id: 'aboutButton',
                    text: 'About',
                    align: 'right',
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

        items: [
            { 
            	xtype: 'portfolios'
            }
        ]
    }
});
