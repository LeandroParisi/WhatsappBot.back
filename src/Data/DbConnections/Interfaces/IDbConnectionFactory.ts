export default interface IDbConnectionFactory<Connection> {
  Create() : Connection
}
