const errorMessages = {
  internalError: 'This is not your fault, we have had a system problem, please try again later',
  invalidBody: 'Invalid request payload received',
};

// Written in PT because it will be the message to be displayed to the user on the front end
const validationErrors = {
  invalidEmail: 'E-mail inválido',
  invalidCPF: 'CPF inválido',
  invalidCNPJ: 'CNPJ inválido',
};

module.exports = { errorMessages, validationErrors };
