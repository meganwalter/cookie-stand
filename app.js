
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var pikePlace = {
  minCust: 17,
  maxCust: 88,
  avgSale: 5.2,
  storeName: 'Pike Place',
};
var seaTacAirport = {
  minCust: 6,
  maxCust: 24,
  avgSale: 1.2,
  storeName: 'SeaTac Airport',
};
var southCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 1.9,
  storeName: 'Southcenter',
};
var bellSquare = {
  minCust: 20,
  maxCust: 48,
  avgSale: 3.3,
  storeName: 'Bellevue Square',
};
var alki = {
  minCust: 3,
  maxCust: 24,
  avgSale: 2.6,
  storeName: 'Alki',
};
var stores = [pikePlace, seaTacAirport, southCenter, bellSquare, alki];
var section = document.getElementById('storeSales');

function render() {
  for (store in stores) {

    var storeName = document.createElement('h2');
    storeName.textContent = stores[store].storeName;
    var storeList = document.createElement('ul');

    stores[store].customersThisHour = function(minCust, maxCust) {
      return Math.random() * (maxCust - minCust + 1) + minCust;
    };

    stores[store].salesThisHour = function() {
      return Math.floor(stores[store].customersThisHour(stores[store].minCust, stores[store].maxCust) * stores[store].avgSale);
    };

    for (hour in hours) {
      var sales = document.createElement('li');
      sales.textContent = hours[hour] + ': ' + stores[store].salesThisHour();
      storeList.appendChild(sales);
    }

    section.appendChild(storeName);
    section.appendChild(storeList);
  }
};

render();
