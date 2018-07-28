'use strict'

const Schema = use('Schema')

class TrackSchema extends Schema {
  up () {
    this.create('tracks', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 80)
    })
  }

  down () {
    this.drop('tracks')
  }
}

module.exports = TrackSchema
