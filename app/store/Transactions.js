Ext.define('PortfolioApp.store.Transactions', {
    extend: 'Ext.data.Store',
	xtype:'transactionsstore',

    config: {
        model: 'PortfolioApp.model.Transactions',
        sorters: 'tranID'
    }
});
