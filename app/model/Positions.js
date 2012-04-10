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
				{ name: 'posLastTrade', type: 'float'},
				{ name: 'posPercentChange', type: 'string'},
				{ name: 'posPercentChangeClass', type: 'string'},
				{ name: 'posDollarChange', type: 'string'},
				{ name: 'posDollarChangeClass', type: 'string'}
			]
    }
});