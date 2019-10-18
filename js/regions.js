const REGIONS_PAGE_CONFIG = {
    rows: [{
        charts: [{
            player: 'all',
            query: {
                queryType: 'plays',
                query: queries.raw.province.plays,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'CA'
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
                chartSubType: 'CA'
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
                chartSubType: 'CA'
            }
        }
    ]}, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'plays',
                query: queries.raw.province.plays,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'GB'
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
                chartSubType: 'GB'
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
                chartSubType: 'GB'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'plays',
                query: queries.raw.province.plays,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'ZA'
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
                chartSubType: 'ZA'
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
                chartSubType: 'ZA'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'plays',
                query: queries.raw.province.plays,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'BR'
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
                chartSubType: 'BR'
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
                chartSubType: 'BR'
            }
        }]
    }, {
        charts: [{
            player: 'all',
            query: {
                queryType: 'plays',
                query: queries.raw.province.plays,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'RU'
            }
        }, {
            player: 'matt',
            query: {
                queryType: 'best',
                query: queries.raw.province.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'RU'
            }
        }, {
            player: 'chris',
            query: {
                queryType: 'best',
                query: queries.raw.province.best,
            },
            sheet: SHEETS.raw,
            chart: {
                chartType: 'geo',
                chartSubType: 'RU'
            }
        }]
    }]
};

google.charts.setOnLoadCallback(function() {
    drawConfiguredCharts(REGIONS_PAGE_CONFIG);
});