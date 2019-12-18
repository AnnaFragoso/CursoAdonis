'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/user', 'UserController.store');
Route.post('/session', 'SessionController.store');
Route.post('/passwords', 'ForgotPasswordController.store');
Route.put('/passwords', 'ForgotPasswordController.update');
Route.get('/files/:id', 'FileController.show');

Route.group(() => {
  Route.post('/files', 'FileController.store');

  Route.resource('projects', 'ProjectController').apiOnly();
  Route.resource('project.tasks', 'TaskController').apiOnly();
}).middleware(['auth']);



