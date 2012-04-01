
Ext.define('PortfolioApp.view.Portfolios', {
    extend: 'Ext.List',
    xtype: 'portfolios',

    config: {
        title: 'Portfolios',
        store: 'Portfolios',
        fullscreen: true,
        itemTpl: [
		
			//'<h3>{portName}</h3>',
			//'<h4>Today: {chgDollar} ({chgPercent}%)</h4>',
			//'<h4>Return: {overallReturn}%</h4>'
			
			'<h3>{portName}</h3>',
			'<label class="dd-detail-label">Today:  </label><label class="{chgDollarClass}">{chgDollar}</label>&nbsp;<label class="{chgPercentClass}">({chgPercent}%)</label><br />',
			'<label class="dd-detail-label">Overall:</label><label class="{overallReturnClass}">{overallReturn}%</label>'


		
			/*'<div class="ui-btn-inner ui-li ui-corner-top">',
				'<div class="ui-btn-text">',
						'<p class="ui-li-aside ui-li-desc">',
							'<span class="dd-per-loss">{chgDollar}</span>',
							'<span class="dd-per-loss">({chgPercent}%)</span>',
						'</p>',
						'<p class="ui-li-desc">',
							'<label class="dd-pos-sym">{portName}</label>',
						'</p>',
						'<p class="ui-li-desc">',
							'<label class="dd-detail-label">Overall Return:</label>',
							'<label class="dd-per-loss">{overallReturn}%</label>',
						'</p>',
				'</div>',
			'</div>' */
		
			//'<div>',
			//'<p><label class="dd-pos-sym">{portName}</label></p>',
			//'<p><label class="dd-detail-label">Overall Return:</label>',
			//'<label class="dd-detail-label">{overallReturn}%</label></p>',
				//'<p class="ui-li-aside"><span>{chgDollar}</span>&nbsp;&nbsp;',
				//'<span>({chgPercent}%)</span></p>',
			//'</div>'
            
        ].join('')
    }
});
