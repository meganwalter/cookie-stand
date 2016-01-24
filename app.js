
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
function SalmonCookieShop(minCust, maxCust, avgSale, storeName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.storeName = storeName;
  this.todaysTotal = 0;
  this.storeList = document.createElement('ul');
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
var section = document.getElementById('storeSales');

SalmonCookieShop.prototype.renderStoreName = function() {
  var storeName = document.createElement('h2');
  storeName.textContent = this.storeName;
  section.appendChild(storeName);
  section.appendChild(this.storeList);
};

SalmonCookieShop.prototype.renderHourlySales = function() {
  for (hour in hours) {
    var sales = document.createElement('li');
    sales.textContent = hours[hour] + ': ' + stores[store].salesThisHour();
    this.storeList.appendChild(sales);
  }
};

SalmonCookieShop.prototype.renderTotalSales = function() {
  var storeDailyTotal = document.createElement('li');
  storeDailyTotal.textContent = 'Total: ' + stores[store].todaysTotal;
  this.storeList.appendChild(storeDailyTotal);
};

for (store in stores) {
  stores[store].renderStoreName();
  stores[store].renderHourlySales();
  stores[store].renderTotalSales();
}
