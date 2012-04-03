Ext.define('PortfolioApp.model.Portfolios', {

    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'portID', type: 'string'},
				{ name: 'portName', type: 'string'},
				{ name: 'mktValue', type: 'float' },
				{ name: 'chgPercent', type: 'string' },
				{ name: 'chgPercentClass', type: 'string' },
				{ name: 'chgDollar', type: 'string' },
				{ name: 'chgDollarClass', type: 'string' },
				{ name: 'overallReturn', type: 'string' },
				{ name: 'overallReturnClass', type: 'string' }
			]
    }
});