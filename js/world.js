const WORLD_PAGE_CONFIG = {
    rows: [{
        charts: [{
            player: 'all',
            query: {
                queryType: 'average',
                query: queries.raw.country.average,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'average', 
                query: queries.raw.country.average,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'average',
                query: queries.raw.country.average,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'perfects', 
                query: queries.raw.country.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'perfects', 
                query: queries.raw.country.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'perfects',
                query: queries.raw.country.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'best',
                query: queries.raw.country.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'best', 
                query: queries.raw.country.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'best',
                query: queries.raw.country.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'mark',
            query: {
                queryType: 'best',
                query: queries.raw.country.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'identified', 
                query: queries.raw.country.identified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'identified', 
                query: queries.raw.country.identified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'identified',
                query: queries.raw.country.identified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'misidentified', 
                query: queries.raw.country.misidentified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'misidentified', 
                query: queries.raw.country.misidentified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'misidentified',
                query: queries.raw.country.misidentified,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'world'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'pivot',
                query: queries.raw.country.pivot,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'table',
            }
        }]
    }]
};

google.charts.setOnLoadCallback(function () {
    drawConfiguredCharts(WORLD_PAGE_CONFIG);
});