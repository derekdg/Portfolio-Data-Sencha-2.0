Ext.define('PortfolioApp.model.Positions', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'posID', type: 'string'},
				{ name: 'posTicker', type: 'string'},
				{ name: 'posShares', type: 'float'},
				{ name: 'posName', type: 'string'},
				{ name: 'posReturn', type: 'float' },
				{ name: 'posReturnClass', type: 'string' },
				{ name: 'posDailyDollarChange', type: 'float' },
				{ name: 'posDailyPercentChange', type: 'float' },
				{ name: 'posLast', type: 'float'}
			]
    }
});