// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let mealId = 0;
let neighborhoodId = 0;
let deliveryId = 0;

class Meal {

};

class Customer {
  
};

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;

    store.neighborhood.push(this);
  }
};

class Delivery {

};
