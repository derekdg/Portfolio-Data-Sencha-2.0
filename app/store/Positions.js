Ext.define('PortfolioApp.store.Positions', {
    extend: 'Ext.data.Store',
	xtype:'positionsstore',

    config: {
        model: 'PortfolioApp.model.Positions',
        sorters: 'posID'
    }
});
