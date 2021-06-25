const errorMessages = {
  internalError: 'This is not your fault, we have had a system problem, please try again later',
  invalidBody: 'Invalid request payload received',
};

// Written in PT because it will be the message to be displayed to the user on the front end
const validationErrors = {
  invalidEmail: 'E-mail inválido',
};

module.exports = { errorMessages, validationErrors };
