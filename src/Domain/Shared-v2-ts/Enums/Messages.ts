/* eslint-disable no-shadow */
/* eslint-disable max-len */
export enum ErrorMessages {
  InternalError = 'Tivemos um erro interno, favor tentar novamente mais tarde',
  InvalidUser = 'Email ou senha inválidos',
  NotFound = 'Não encontramos o item que tentou editar',
  ExpiredSession = 'Sua sessão expirou, favor logar novamente',
}

export enum ErrorTypes {
  ValidationError = 'ValidationError',
  CustomError = 'CustomError',
}

// Written in PT because it will be the message to be displayed to the user on the front end
export enum ValidationErrors {
  InvalidEmail = 'E-mail inválido',
  InvalidCPF = 'CPF inválido',
  InvalidCNPJ = 'CNPJ inválido',
  EmptyOwnerName = 'Favor preencher o primeiro nome do dono',
  InvalidZapNumberFormat = 'O número de celular deve conter somente os números, no formato 5531987654321',
}

export enum ResponseMessages {
  LoginOK = 'Logado com sucesso',
  UpdateSuccess = 'Sua edição foi feita com sucesso!',
  ValidSession = 'Sessão válida',
  Created = 'Operação realizada com sucesso!',
  Deleted = 'Operação realizada com sucesso!',
}
