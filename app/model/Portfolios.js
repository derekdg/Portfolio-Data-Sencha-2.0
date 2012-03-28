Ext.define('PortfolioApp.model.Portfolios', {

    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'portID', type: 'int'},
				{ name: 'portName', type: 'string'},
				{ name: 'mktValue', type: 'float' },
				{ name: 'chgPercent', type: 'float' },
				{ name: 'chgDollar', type: 'float' },
				{ name: 'overallReturn', type: 'float' }
			]
    }
});