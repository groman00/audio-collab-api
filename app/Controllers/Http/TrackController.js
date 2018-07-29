'use strict'

const Database = use('Database')
const Track = use('App/Models/Track')

class TrackController {
  constructor() {
    this.table = Database.table('tracks');
  }
  async index() {
    return await Track.all()
  }
  async create({ request, response }) {

    /*
    const User = use('App/Models/User')
    const userData = request.only(['username', 'email', 'age'])
    // save and get instance back
    const user = await User.create(userData)
    */

    const track = new Track();
    track.title = 'Track ' + Date.now();
    await track.save();
    return response.status(201).json(track);
  }
}

module.exports = TrackController
