Ext.define('PortfolioApp.view.Positions', {
    extend: 'Ext.List',
    xtype: 'positions',

    config: {
		title: 'Positions',
        store: 'Positions',
        fullscreen: true,
		onItemDisclosure: true,

        itemTpl: [
		
			'<h3>{posTicker}</h3>',
			'<label class="dd-pos-name">{posName}</label><br />',
			'<label class="dd-detail-label">Shares: </label><label class="dd-detail-data"><b>{posShares}</b></label><label class="dd-detail-label">Return:</label><label class="{posReturnClass}">{posReturn}%</label><br />',
			'<label class="dd-detail-label">Last:  </label><label class="dd-detail-data"><b>${posLastTrade}</b></label>',
			'<label class="dd-detail-label">Today:  </label><label class="{posDollarChangeClass}">{posDollarChange}</label>&nbsp;<label class="{posPercentChangeClass}">({posPercentChange}%)</label><br />'
        ].join('')
    }
});