const UNITED_STATES_PAGE_CONFIG = {
    rows: [{
        charts: [{
            player: 'all',
            query: {
                queryType: 'average',
                query: queries.raw.province.average,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'average', 
                query: queries.raw.province.average,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'average',
                query: queries.raw.province.average,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'perfects', 
                query: queries.raw.province.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'perfects', 
                query: queries.raw.province.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'perfects',
                query: queries.raw.province.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'identified', 
                query: queries.raw.province.identified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'identified', 
                query: queries.raw.province.identified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'identified',
                query: queries.raw.province.identified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'misidentified', 
                query: queries.raw.province.misidentified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'misidentified', 
                query: queries.raw.province.misidentified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'misidentified',
                query: queries.raw.province.misidentified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'US'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'all',
                query: queries.raw.province.pivot,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'table',
            }
        }]
    }]
};


google.charts.setOnLoadCallback(function() {
    drawConfiguredCharts(UNITED_STATES_PAGE_CONFIG);
});