var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
function SalmonCookieShop(minCust, maxCust, avgSale, storeName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.storeName = storeName;
  this.todaysTotal = 0;
  this.customersThisHour = function(minCust, maxCust) {
    return Math.random() * (maxCust - minCust + 1) + minCust;
  };

  this.salesThisHour = function() {
    var hourlySales = Math.floor(this.customersThisHour(this.minCust, this.maxCust) * this.avgSale);
    this.todaysTotal += hourlySales;
    return hourlySales;
  };
}

var pikePlace = new SalmonCookieShop(17, 88, 5.2, 'Pike Place');
var seaTacAirport = new SalmonCookieShop(6, 24, 1.2, 'SeaTac Airport');
var southCenter = new SalmonCookieShop(11, 38, 1.9, 'Southcenter');
var bellSquare =  new SalmonCookieShop(20, 48, 3.3, 'Bellevue Square');
var alki = new SalmonCookieShop(3, 24, 2.6, 'Alki');

var stores = [pikePlace, seaTacAirport, southCenter, bellSquare, alki];

function createNewStore(event) {
  var storeCreated = document.getElementById('newStoreForm');
  var newStore = new SalmonCookieShop(storeCreated.minCust.value, storeCreated.maxCust.value, storeCreated.avgSale.value, storeCreated.storeName.value);
  // newStore.renderStoreName();
  newStore.renderStore();
  // newStore.renderTotalSales();
  event.preventDefault();
  clearForm();
}

function clearForm() {
  var formItems = document.getElementById('newStoreForm');
  for (item in formItems) {
    formItems[item].value = '';
  }
}

var buttonSubmit = document.getElementById('createButton');
buttonSubmit.addEventListener('click', createNewStore, false);

var dataTable = document.getElementById('storeTable');
var createRow = document.createElement('tr');
dataTable.appendChild(createRow);

function printRow1() {
  var tableTitle = document.createElement('td');
  tableTitle.textContent = 'Store Sales';
  createRow.appendChild(tableTitle);
  for (hour in hours) {
    var storeHours = document.createElement('td');
    storeHours.textContent = hours[hour];
    createRow.appendChild(storeHours);
  }

  var tableTotal = document.createElement('td');
  tableTotal.textContent = 'Total';
  createRow.appendChild(tableTotal);
}

SalmonCookieShop.prototype.renderStore = function() {
  var trEl = document.createElement('tr');
  dataTable.appendChild(trEl);
  var storeTitle = document.createElement('td');
  storeTitle.textContent = this.storeName;
  trEl.appendChild(storeTitle);
  for (hour in hours) {
    var sales = document.createElement('td');
    sales.textContent = this.salesThisHour();
    trEl.appendChild(sales);
  }

  var storeDailyTotal = document.createElement('td');
  storeDailyTotal.textContent = this.todaysTotal;
  trEl.appendChild(storeDailyTotal);
};

window.onload = function() {
  printRow1();
  for (store in stores) {
    stores[store].renderStore();
  }
};
