'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/user', 'UserController.store').validator('User');

Route.post('/session', 'SessionController.store').validator('Session');

Route.post('/passwords', 'ForgotPasswordController.store').validator('ForgotPassword');
Route.put('/passwords', 'ForgotPasswordController.update').validator('ResetPassword');

Route.get('/files/:id', 'FileController.show');

Route.group(() => {
  Route.post('/files', 'FileController.store');

  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]));
  Route.resource('project.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['projects.tasks.store'], ['Task']]]));
}).middleware(['auth']);



