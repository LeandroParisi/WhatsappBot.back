const errorMessages = {
  internalError: 'Tivemos um erro interno, favor tentar novamente mais tarde',
  invalidUser: 'Email ou senha inválidos',
  notFound: 'Não encontramos o item que tentou editar',
  expiredSession: 'Sua sessão expirou, favor logar novamente',
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
  emptyOwnerName: 'Favor preencher o primeiro nome do dono',
  invalidZapNumberFormat: 'O número de celular deve conter somente os números, no formato 5531987654321',
};

const responseMessages = {
  loginOK: 'Logado com sucesso',
  updateSuccess: 'Sua edição foi feita com sucesso!',
  validSession: 'Sessão válida',
};

module.exports = {
  errorMessages, validationErrors, responseMessages, errorTypes,
};
