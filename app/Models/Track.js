'use strict'

const Model = use('Model')

class Track extends Model {
  static get table () {
    return 'tracks'
  }

  static get primaryKey () {
    return 'id'
  }
}

module.exports = Track
