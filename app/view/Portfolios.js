
Ext.define('PortfolioApp.view.Portfolios', {
    extend: 'Ext.List',
    xtype: 'portfolios',

    config: {
        title: 'Portfolios',
        store: 'Portfolios',
        fullscreen: true,
		onItemDisclosure: true,
        itemTpl: [
			'<h3>{portName}</h3>',
			'<label class="dd-detail-label">Today:  </label><label class="{chgDollarClass}">{chgDollar}</label>&nbsp;<label class="{chgPercentClass}">({chgPercent}%)</label><br />',
			'<label class="dd-detail-label">Overall:</label><label class="{overallReturnClass}">{overallReturn}%</label>'
			
        ].join('')
    }
    
});
