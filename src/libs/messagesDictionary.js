const errorMessages = {
  invalidEmail: 'Field "email" must be a valid email',
  invalidPassword: 'Field "password" must containt minimun eight characters at least one letter and one number',
  missingEmail: 'Field "email" is required',
  missingPassword: 'Field "password" is required',
  userNotFound: 'User not registered in our system',
  internalError: 'This is not your fault, we have had a system problem, please try again later',
  tokenNotFound: 'Token not found',
  invalidToken: 'Token has expired, please login again',
  characterIsFavorite: 'Character is already favorited by you',
  userIsRegistered: 'User already registered',
};

module.exports = errorMessages;
