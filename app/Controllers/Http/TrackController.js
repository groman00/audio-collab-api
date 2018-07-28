'use strict'

const Database = use('Database')

class TrackController {
  async index({ response }) {
    const tracks = await Database.table('tracks').select('*');
    return response.json(tracks);
  }
}

module.exports = TrackController
