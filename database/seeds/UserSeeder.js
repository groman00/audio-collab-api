'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

// const Database = use('Database')
const Factory = use('Factory')

class UserSeeder {
  async run () {
    // const response = await Factory.model('App/Model/User').create(5)
    const user = await Factory.model('App/Models/User').create()
  }
}

module.exports = UserSeeder
