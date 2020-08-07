const faker = require('faker');

const data = { 
    deliverylist: [],
    pickuplist: [],
}
// Create 100 users
for (let i = 1; i <= 50; i++) {
  data.deliverylist.push({ 
      id: i, 
      delivery_id: "TP 10"+i,
      store: "Store "+i,
      position: i+10,
    })
}

// for (let i = 1; i <= 50; i++) {
//     data.pickuplist.push({ 
//         id: i, 
//         title: faker.name.title(),
//         posts: faker.lorem.sentence(), 
//       })
//   }

module.exports = function() {
    return data
  }