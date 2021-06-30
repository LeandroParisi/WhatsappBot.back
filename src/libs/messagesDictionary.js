const errorMessages = {
  internalError: 'Tivemos um erro interno, favor tentar novamente mais tarde',
  invalidUser: 'Email ou senha inválidos',
  notFound: 'Não encontramos o item que tentou editar',
};

const errorTypes = {
  validationError: 'ValidationError',
  customError: 'CustomError',

};

// Written in PT because it will be the message to be displayed to the user on the front end
const validationErrors = {
  invalidEmail: 'E-mail inválido',
  invalidCPF: 'CPF inválido',
  invalidCNPJ: 'CNPJ inválido',
};

const responseMessages = {
  loginOK: 'Logado com sucesso',
  updateSuccess: 'Sua edição foi feita com sucesso!',
};

module.exports = {
  errorMessages, validationErrors, responseMessages, errorTypes,
};
