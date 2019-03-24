// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let mealId = 0;
let customerId = 0;
let neighborhoodId = 0;
let deliveryId = 0;

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;

    store.meals.push(this);
  };

  
};

class Customer {
  constructor(name, neighborhoodId) {
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;

    store.customers.push(this);
  }
};

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;

    store.neighborhood.push(this);
  };

  deliveries() {
    
  };
};

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = ++deliveryId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;

    store.deliveries.push(this);
  };

  meal() {
    return store.meals.find(function(meal) {
      return meal.id === this.mealId;
    });
  };

  customer() {
    return store.customers.find(function(customer) {
      return customer.id === this.customerId;
    });
  };

  neighorhood() {
    return store.neighborhoods.find(function(neighborhood) {
      return neighborhood.id === this.neighborhoodId;
    });
  };
  
};
