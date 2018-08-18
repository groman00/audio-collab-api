/**
 * Example: https://blog.pusher.com/build-rest-apis-in-adonis-4-0/
 */

'use strict'

const fs = use('fs')
const Database = use('Database')
// todo: remove Drive provider
// const Drive = use('Drive')
const Track = use('App/Models/Track')
const Helpers = use('Helpers')

const readFile = Helpers.promisify(fs.readFile)

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
    const fileLocation = Helpers.tmpPath('audio');
    const fileName = `track_${now}.wav`;

    track.title = `New Track ${now}`;

    // track.location = `${fileLocation}/${fileName}`;

    track.location = `http://localhost:3333/file/${fileName}`

    // todo: add track audio location
    // Create audio table?
    const audio = request.file('audio', {
      // types: ['audio/wav'],
      // size: '100mb'
    })

    await audio.move(fileLocation, { name: fileName })

    if (!audio.moved()) {
      console.log(audio.error());
      return response.status(500).json({
        error: audio.error()
      });
    }

    await track.save();
    return response.status(201).json(track);
  }
  async getOne({ request, response }) {
    const track = await Track.find(request.params.id);
    return response.json(track);
  }
  async getFile({ request, response }) {
    const filename = request.params.filename;
    response.header('Content-type', 'audio/wav')
    return await readFile(`${Helpers.tmpPath('audio')}/${filename}`);
  }
}

module.exports = TrackController
