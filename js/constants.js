/** constants */
const mapRegions = [{
    'code': 'world',
    'label': "World"
}, {
    'code': '002',
    'label': "Africa"
}, {
    'code': '150',
    'label': "Europe"
}, {
    'code': '019',
    'label': "Americas"
}, {
    'code': '142',
    'label': "Asia"
}, {
    'code': '009',
    'label': "Oceania"
}, {
    'code': '021',
    'label': "North America"
}, {
    'code': 'US',
    'label': "US"
}];

const players = ['matt', 'chris'];

const SHEETS = {
    raw: {
        gid: '717836712',
        headerCount: 1
    }
};

const QUERY_TYPES = [
    'average',
    'best',
    'worst',
    'identificationPercentage',
    'perfects',
    'plays',
    'misidentified',
    'identified'
];

const COL = {
    RESULT_TOKEN: 'A',
    ROUND: 'B',
    PLAYER: 'C',
    DATETIME: 'D',
    SCORE: 'E',
    GUESS_LAT: 'F',
    GUESS_LNG: 'G',
    STREET_VIEW_URL: 'H',
    DATE: 'I',
    GUESS_COUNTRY: 'J',
    GUESS_SUB_AREA: 'K',
    CORRECT_COUNTRY: 'N',
    CORRECT_SUB_AREA: 'O',
    UNIQUE_GAME_ID: 'P',
};

const PLAYER = {
    GEO: 'Geoguessr',
    MATT: 'Matt Boland',
    CHRIS: 'Chrisheuer',
    MARK: 'Markimilian, Emperor',
    ERIC: 'Eric Holten'
};

const queries = {
    raw: {
        country: {
            pivot: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}), MAX(${COL.SCORE}), MIN(${COL.SCORE}) WHERE ${COL.PLAYER}!='Geoguessr' GROUP BY ${COL.CORRECT_COUNTRY} PIVOT ${COL.PLAYER}`,
            },
            best: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}`,
                matt: `SELECT ${COL.CORRECT_COUNTRY}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}`,
                chris: `SELECT ${COL.CORRECT_COUNTRY}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}`,
                eric: `SELECT ${COL.CORRECT_COUNTRY}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}`,
            },
            average: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}`,
                matt: `SELECT ${COL.CORRECT_COUNTRY}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}`,
                chris: `SELECT ${COL.CORRECT_COUNTRY}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}`,
                eric: `SELECT ${COL.CORRECT_COUNTRY}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}`,
            },
            plays: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.PLAYER}='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}`
            },
            identified: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.CORRECT_COUNTRY}=${COL.GUESS_COUNTRY} AND ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten correct
                matt: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.CORRECT_COUNTRY}=${COL.GUESS_COUNTRY} AND ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten correct
                chris: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.CORRECT_COUNTRY}=${COL.GUESS_COUNTRY} AND ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten correct
                eric: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.CORRECT_COUNTRY}=${COL.GUESS_COUNTRY} AND ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten correct
            },
            misidentified: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_COUNTRY}!=${COL.CORRECT_COUNTRY} AND ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten incorrect
                matt: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_COUNTRY}!=${COL.CORRECT_COUNTRY} AND ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten incorrect
                chris: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_COUNTRY}!=${COL.CORRECT_COUNTRY} AND ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten incorrect
                eric: `SELECT ${COL.CORRECT_COUNTRY}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_COUNTRY}!=${COL.CORRECT_COUNTRY} AND ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}`, // only counts countries you've gotten incorrect
            }
        },
        province: {
            pivot: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}), MAX(${COL.SCORE}), MIN(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA} PIVOT C`,
            },
            best: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            },
            average: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            },
            plays: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.PLAYER}='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`
            },
            identified: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
            },
            misidentified: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
            }
        },
        us: {
            pivot: {
                all: `SELECT ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}), MAX(${COL.SCORE}), MIN(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA} PIVOT C`,
            },
            best: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            },
            average: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            },
            plays: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.PLAYER}='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`
            },
            identified: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}!='${PLAYER.GEO}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.MATT}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.CHRIS}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.CORRECT_SUB_AREA}=${COL.GUESS_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.ERIC}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten correct
            },
            misidentified: {
                all: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}!='${PLAYER.GEO}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
                matt: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.MATT}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
                chris: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.CHRIS}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
                eric: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_COUNTRY}) WHERE ${COL.GUESS_SUB_AREA}!=${COL.CORRECT_SUB_AREA} AND ${COL.PLAYER}='${PLAYER.ERIC}' AND ${COL.CORRECT_COUNTRY}='United States' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`, // only counts countries you've gotten incorrect
            }
        },
        best: {
            matt: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            chris: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            eric: `SELECT ${COL.CORRECT_SUB_AREA}, MAX(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
        },
        average: {
            matt: `SELECT ${COL.CORRECT_SUB_AREA}, ${COL.CORRECT_COUNTRY}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.MATT}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            chris: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.CHRIS}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
            eric: `SELECT ${COL.CORRECT_SUB_AREA}, AVG(${COL.SCORE}) WHERE ${COL.PLAYER}='${PLAYER.ERIC}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`,
        },
        plays: {
            all: `SELECT ${COL.CORRECT_SUB_AREA}, COUNT(${COL.CORRECT_SUB_AREA}) WHERE ${COL.PLAYER}='${PLAYER.GEO}' GROUP BY ${COL.CORRECT_COUNTRY}, ${COL.CORRECT_SUB_AREA}`
        },
        scoreboard: {
            game: `SELECT A, SUM(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.RESULT_TOKEN} PIVOT ${COL.PLAYER}`,
            round: `SELECT A, SUM(${COL.SCORE}) WHERE ${COL.PLAYER}!='${PLAYER.GEO}' GROUP BY ${COL.RESULT_TOKEN} PIVOT ${COL.PLAYER}, ${COL.ROUND}`
        }
    }
};

const CHART_TYPES = ['geo', 'table'];

const DEFAULT_GEO_VALUES = [0, 1500, 2500, 3000, 4000, 4999, 5000];
const DEFAULT_GEO_COLORS = ['darkred', 'red', 'orange', 'yellow', 'yellowgreen', 'green', 'blue'];

const RESOLUTIONS = {
    COUNTRIES: 'countries',
    PROVINCES: 'provinces'
};

const DEFAULT_GEO_CHART_OPTIONS = {
    datalessRegionColor: 'black',
    backgroundColor: { fill: '#add8e6', stroke: 'black' },
    colorAxis: {
        values: DEFAULT_GEO_VALUES,
        colors: DEFAULT_GEO_COLORS
    },
    resolution: RESOLUTIONS.COUNTRIES
};