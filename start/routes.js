'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/api/v1/users', 'UserController.all')
// .middleware('auth')
Route.post('/api/v1/users', 'UserController.create')
// Route.get('/api/v1/users/:id', 'UserController.show').middleware('auth')


Route.get('/api/v1/tracks', 'TrackController.index')
Route.post('/api/v1/tracks', 'TrackController.create')
Route.get('/api/v1/tracks/:id', 'TrackController.getOne')

Route.get('/file/:filename', 'TrackController.getFile')

// wildcard route
Route.any('*', ({ view }) => view.render('welcome'))


// Route.on('/').render('welcome')

