
Ext.define('PortfolioApp.view.Portfolios', {
    extend: 'Ext.List',
    xtype: 'portfolios',

    config: {
        title: 'Portfolios',
        store: 'Portfolios',
        fullscreen: true,
        itemTpl: [
			'<div>',
			'<p><label class="dd-pos-sym">{portName}</label></p>',
			'<p><label class="dd-detail-label">Overall Return:</label>',
			'<label class="dd-detail-label">{overallReturn}%</label></p>',
			//'<p class="ui-li-aside"><span>{chgDollar}</span>&nbsp;&nbsp;',
			//'<span>({chgPercent}%)</span></p>',
			'</div>'
            
        ].join('')
    }
});
