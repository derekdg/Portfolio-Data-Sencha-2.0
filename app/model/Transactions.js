Ext.define('PortfolioApp.model.Transactions', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'tranID', type: 'string'},
				{ name: 'tranType', type: 'string'},
				{ name: 'tranDate', type: 'string'},
				{ name: 'tranPrice', type: 'string'},
				{ name: 'tranShares', type: 'float' }
			]
    }
});