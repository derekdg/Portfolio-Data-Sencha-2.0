Ext.define('PortfolioApp.model.Positions', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
				{ name: 'posID', type: 'int'},
				{ name: 'posTicker', type: 'string'},
				{ name: 'posShares', type: 'string'},
				{ name: 'posName', type: 'string'},
				{ name: 'posReturn', type: 'string' },
				{ name: 'posDailyDollarChange', type: 'string' },
				{ name: 'posDailyPercentChange', type: 'string' },
				{ name: 'posLast', type: 'string'}
			]
    }
});