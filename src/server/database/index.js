const path = require('path');
const fs = require('fs');
const d3 = require('d3-dsv');

const NOW_DATE = Date.now();

function loadCsv(file) {
  const rawPrices = fs.readFileSync(path.resolve(__dirname, `${file}.csv`), 'utf8');

  const prices = d3.csvParseRows(rawPrices, (d, i) => ({
    // date: newDate(NOW_DATE - (708 - i) * 1000 * 60 * 60 * 24).toString(),
    date: NOW_DATE - (708 - i) * 1000 * 60 * 60 * 24,
    open: +d[0],
    high: +d[1],
    low: +d[2],
    close: +d[3],
  }));

  return prices;
}

function initDatabase() {
  const ricePrices = loadCsv('rice');

  const wheatPrices = loadCsv('wheat');

  const maizePrices = loadCsv('maize');

  return {
    ricePrices,
    wheatPrices,
    maizePrices
  };
}

module.exports = { initDatabase };
