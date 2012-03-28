Ext.define('PortfolioApp.store.Positions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PortfolioApp.model.Positions',
        sorters: 'posID'
    }
});
