google.charts.load('current', { 'packages': ['corechart', 'table', 'treemap'], 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' });

function createChartContainer(id) {
    var containerTemplate = `
    <div id="${id}">
    </div>`

    return containerTemplate;
}

function createCard(headerText, cardBody) {
    var cardTemplate = `
    <div class="card text-center">
       <h5 class="card-header">${headerText}</h5>
       <div class="card-body">
           ${cardBody}
       </div>
   </div>
    `
    return cardTemplate;
}

function createColumnSpan(span, innerHTML) {
    var columnSpanTemplate = `<div class="col-sm-${span}">${innerHTML}</div>`;
    return columnSpanTemplate;
}

function createRow(rowId) {
    var rowTemplate = `<div id=${rowId} class="row"></div>`;
    return rowTemplate;
}

function generateSheetUrl(sheet, query) {
    var encodedQuery = encodeURIComponent(query)
    var baseUrl = 'https://docs.google.com/spreadsheets/d/15GvI7R-jYSa8otjgYDNLhIRVh4P5JFjwKtx193o4skM';
    var url = `${baseUrl}/gviz/tq?gid=${sheet.gid}&headers=${sheet.headerCount}&tq=` + encodedQuery;
    return url;
}

function getChartOptions(queryType) {
    var chartOptions = { ...DEFAULT_GEO_CHART_OPTIONS };
    switch (queryType) {
        case 'identificationPercentage':
            chartOptions.colorAxis.minValue = 0;
            chartOptions.colorAxis.maxValue = 1;
            chartOptions.colorAxis.values = DEFAULT_GEO_VALUES;
            chartOptions.colorAxis.colors = DEFAULT_GEO_COLORS;
            break;
        case 'perfects':
            chartOptions.colorAxis.minValue = 0;
            chartOptions.colorAxis.maxValue = 5000;
            chartOptions.colorAxis.colors = ['darkred', 'darkred', 'orangered', 'orangered', 'white', 'white', 'lightyellow', 'yellow', 'blue'];
            chartOptions.colorAxis.values = [0, 500, 501, 2500, 2501, 4989, 4990, 4999, 5000];
            break;
        case 'average':
        case 'best':
        case 'worst':
            chartOptions.colorAxis.minValue = 0;
            chartOptions.colorAxis.maxValue = 5000;
            chartOptions.colorAxis.values = DEFAULT_GEO_VALUES;
            chartOptions.colorAxis.colors = DEFAULT_GEO_COLORS;
            break;
        case 'plays':
            chartOptions.colorAxis.minValue = null;
            chartOptions.colorAxis.maxValue = null;
            chartOptions.colorAxis.colors = ['#f4f1fa', '#6e47b8'];
            chartOptions.colorAxis.values = null;
            break;
        case 'identified':
            chartOptions.colorAxis.minValue = 0;
            chartOptions.colorAxis.maxValue = null;
            chartOptions.colorAxis.colors = ['white', '#b6d7a8', '#109618'];
            chartOptions.colorAxis.values = null;
            break;
        case 'misidentified':
            chartOptions.colorAxis.minValue = 0;
            chartOptions.colorAxis.maxValue = null;
            chartOptions.colorAxis.colors = ['white', '#e67c73', '#dc3912'];
            chartOptions.colorAxis.values = null;
            break;
    }

    return chartOptions;
}

function drawConfiguredCharts(config) {
    for (var rowIndex = 0; rowIndex < config.rows.length; rowIndex++) {
        var rowConfig = config.rows[rowIndex];

        var rowId = `row-${rowIndex}`;
        var row = createRow(rowId);
        document.getElementById('main_content').innerHTML += row;

        for (var chartIndex = 0; chartIndex < rowConfig.charts.length; chartIndex++) {
            var configItem = rowConfig.charts[chartIndex];
            var player = configItem.player;

            var chartContainerId = `${rowId}-chart-${chartIndex}`;
            var chartContainer = createChartContainer(chartContainerId);

            var cardHeaderText = `${player} - ${configItem.query.queryType}`
            var card = createCard(cardHeaderText, chartContainer);

            var columnSpan = createColumnSpan(12 / rowConfig.charts.length, card);

            document.getElementById(rowId).innerHTML += columnSpan;

            runQueryAndDrawChart(configItem, player, chartContainerId);
        }
    }
}

function runQueryAndDrawChart(configItem, player, chartContainerId) {
    var query = configItem.query.query;
    var sheetsQuery = new google.visualization.Query(generateSheetUrl(configItem.sheet, query[player]));
    sheetsQuery.send(function (response) {
        handleQueryResponse(response, configItem.query, configItem.chart, chartContainerId);
    });
}

// todo: query config shouldn't be needed - instead base it on some chart config
function handleQueryResponse(response, queryConfig, chartConfig, containerId) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();  

    var options;
    if (chartConfig.chartType === 'geo') {
        options = getChartOptions(queryConfig.queryType);
        options.region = chartConfig.chartSubType;

        if (chartConfig.chartSubType !== 'world') {
            options.resolution = RESOLUTIONS.PROVINCES;
            options.datalessRegionColor = '#F5F5F5';
        }
    } else if (chartConfig.chartType === 'table') {
        options = { showRowNumber: true, width: '100%', height: '100%', page: 'enable', pageSize: 20 };
    }

    drawChart(chartConfig.chartType, data, options, containerId);
}

function drawChart(chartType, data, options, elementId) {
    if (chartType === 'geo') {
        var chart = new google.visualization.GeoChart(document.getElementById(elementId));
        chart.draw(data, options);
    } else if (chartType === 'table') {
        var table = new google.visualization.Table(document.getElementById(elementId));
        table.draw(data, options);
    }
}
