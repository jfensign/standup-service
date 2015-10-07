// Generated by CoffeeScript 1.10.0
(function() {
  var AuthConfig;

  AuthConfig = (function() {
    function AuthConfig(auth_endpoint, secret, client_id) {
      if (auth_endpoint == null) {
        auth_endpoint = 'https://token-service.mybluemix.net/api/token-service/auth';
      }
      if (secret == null) {
        secret = 'dev-secret';
      }
      if (client_id == null) {
        client_id = 'client1';
      }
      this.endpoint = auth_endpoint;
      this.secret = secret;
      this.client_id = client_id;
    }

    return AuthConfig;

  })();

  module.exports = new AuthConfig(process.env.AUTH_ENDPOINT, process.env.AUTH_CLIENT_SECRET, process.env.AUTH_CLIENT_ID);

}).call(this);
