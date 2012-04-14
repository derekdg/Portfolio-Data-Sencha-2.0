Ext.define('PortfolioApp.view.Transactions', {
    extend: 'Ext.List',
    xtype: 'transactions',

    config: {
        title: 'Transactions',
        store: 'Transactions',
        fullscreen: true,
        selectedCls: '',
        deferEmptyText: false,
        emptyText: '<div class="emptyText">You do not have any transactions associated with this Position.</div>',
        itemTpl: [
			'<label class="dd-pos-sym">{tranType} {tranShares} shares on {tranDate} @ ${tranPrice}</label>'
            
        ].join('')
    }
});