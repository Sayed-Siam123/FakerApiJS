
const faker = require('faker');

const data = { 
    users: [],
    posts: [], 
}
// Create 100 users
for (let i = 1; i <= 50; i++) {
  data.users.push({ 
      id: i, 
      name: faker.name.firstName()+" "+faker.name.lastName(),
      email: faker.internet.email(), 
    })
}

for (let i = 1; i <= 50; i++) {
    data.posts.push({ 
        id: i, 
        title: faker.name.title(),
        posts: faker.lorem.sentence(), 
      })
  }

module.exports = function() {
    return data
  }