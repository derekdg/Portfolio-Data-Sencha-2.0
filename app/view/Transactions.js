Ext.define('PortfolioApp.view.Transactions', {
    extend: 'Ext.List',
    xtype: 'transactions',

    config: {
        title: 'Transactions',
        store: 'Transactions',
        fullscreen: true,

        itemTpl: [
			'<label class="dd-pos-sym">{tranType} {tranShares} shares on {tranDate} @ ${tranPrice}</label>'
            
        ].join('')
    }
});