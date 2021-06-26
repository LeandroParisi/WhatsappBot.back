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

const defaultErrorsDict = {
  'email must be unique': 'E-mail já cadastrado em nosso sistema',
  'ownerCpf must be unique': 'CPF já cadastrado em nosso sistema',
  'cnpj must be unique': 'CNPJ já cadastrado em nosso sistema',
  'whatsappNumber must be unique': 'Número de whatsapp já cadastrado em nosso sistema, é necessário ter um número único para cada estabelecimento',
  'whatsappId must be unique': 'Número de whatsapp já cadastrado em nosso sistema, é necessário ter um número único para cada estabelecimento',
};

module.exports = { errorMessages, validationErrors, defaultErrorsDict };
