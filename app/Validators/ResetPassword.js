'use strict'

const Antl = use('Antl');

class ResetPassword {
  get validateAll(){
    return true;
  }

  get rules () {
    return {
      token: 'required',
      password_confirmation: 'required|confirm'
    }
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = ResetPassword
