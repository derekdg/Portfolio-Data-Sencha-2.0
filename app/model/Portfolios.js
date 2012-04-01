Ext.define('PortfolioApp.model.Portfolios', {

    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'portID', type: 'int'},
				{ name: 'portName', type: 'string'},
				{ name: 'mktValue', type: 'float' },
				{ name: 'chgPercent', type: 'float' },
				{ name: 'chgPercentClass', type: 'string' },
				{ name: 'chgDollar', type: 'float' },
				{ name: 'chgDollarClass', type: 'string' },
				{ name: 'overallReturn', type: 'float' },
				{ name: 'overallReturnClass', type: 'string' }
			]
    }
});