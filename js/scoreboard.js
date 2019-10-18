const SCOREBOARD_PAGE_CONFIG = {
    rows: [{
        charts: [{
            player: 'game',
            query: {
                queryType: 'scoreboard',
                query: queries.raw.scoreboard,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'table',
            }
        }, {
            player: 'round',
            query: {
                queryType: 'scoreboard',
                query: queries.raw.scoreboard,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'table',
            }
        }
        ]
    }]
};

google.charts.setOnLoadCallback(function () {
    drawConfiguredCharts(SCOREBOARD_PAGE_CONFIG);
});