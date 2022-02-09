import KnexConnectionFactory from './Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'

const knex = KnexConnectionFactory.Create()

function teste() {
  knex('users').then((r) => console.log(r))
}

teste()
