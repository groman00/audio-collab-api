'use strict'

const fs = require('fs');
const Database = use('Database')
const Drive = use('Drive')
const Track = use('App/Models/Track')

class TrackController {
  constructor() {
    this.table = Database.table('tracks');
  }
  async index() {
    return await Track.all()
  }
  async create({ request, response }) {
    const track = new Track();
    const now = Date.now()
    track.title = `Track ${now}`;
    // todo: add track audio location
    await Drive.put(`track_${now}.wav`, Buffer.from(request.body.audio, 'base64'));
    await track.save();
    return response.status(201).json(track);
  }
}

module.exports = TrackController
