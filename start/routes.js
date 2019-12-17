'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/user', 'UserController.store');
Route.post('/session', 'SessionController.store');
Route.post('/passwords', 'ForgotPasswordController.store');


