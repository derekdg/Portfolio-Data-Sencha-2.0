Ext.define('PortfolioApp.view.Positions', {
    extend: 'Ext.List',
    xtype: 'positions',

    config: {
        title: 'Positions',
        store: 'Positions',
        fullscreen: true,

        itemTpl: [
		
			'<h3>{posTicker}</h3>',
			'<label class="dd-pos-name">{posName}</label><br />',
			'<label class="dd-detail-label">Shares:</label><label class="dd-detail-data">{posShares}</label><label class="dd-detail-label">Return:</label><label class="{posReturnClass}">{posReturn}%</label>'
            
        ].join('')
    }
});