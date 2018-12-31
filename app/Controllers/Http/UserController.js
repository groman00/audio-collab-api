'use strict'

// const Factory = use('Factory')
const User = use('App/Models/User')

class UserController {
  // async login ({ request, auth }) {
  //   const { email, password } = request.all()
  //   await auth.attempt(email, password)
  //   return 'Logged in successfully'
  // }
  async all() {
    // const users = await Database.table('users')
    // return response.status(201).json(users);
    return await User.all()
  }
  // async create () {
  //   const usersArray = await Factory
  //     .model('App/Models/User')
  //     .createMany(5)

  //   return usersArray;
  // }
  show ({ auth, params }) {
    console.log('show')
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return response.status(201).json(auth.user);
  }
}

module.exports = UserController
