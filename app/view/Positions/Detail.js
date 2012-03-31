Ext.define('PortfolioApp.view.Positions.Detail', {

	extend: 'Ext.Container',
	xtype: 'position',

	config: {

		layout: 'vbox',
		scrollable: 'vertical',

		items: [
			{
				xtype: 'positionsInfo'
			},
			{
				xtype: 'list',
				store: 'Positions',

				scrollable: false,

				items: [
					{
						xtype: 'listitemheader',
						cls: 'dark',
						html: 'Positions'
					}
				],

				itemTpl: [
					'{posName}'
				]
			}
		]

	}
});
