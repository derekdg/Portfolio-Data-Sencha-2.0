Ext.define('PortfolioApp.view.Positions', {
    extend: 'Ext.List',
    xtype: 'positions',

    config: {
        title: 'Positions',
        store: 'Positions',
        fullscreen: true,
        itemTpl: [
			'<div>',
			'<p><label class="dd-pos-sym">{posTicker}</label></p>',
			'<p><label class="dd-detail-label">{posName}</label></p>',
			'<p><label class="dd-detail-label">Shares:</label></p>',
			'<label class="dd-detail-label">{posShares}</label></p>',
			//'<p class="ui-li-aside"><span>{chgDollar}</span>&nbsp;&nbsp;',
			//'<span>({chgPercent}%)</span></p>',
			'</div>'
            
        ].join('')
    }
});
