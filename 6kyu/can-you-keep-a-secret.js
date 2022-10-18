//my solution:
function createSecretHolder(secret) {
    return {
      getSecret() {
        return secret
      },
      setSecret(newSecret) {
        return secret = newSecret
      }
    }
}

//cw solution which i think is more proper:
function createSecretHolder(secret) {
    var _secret = secret;
    return {
      setSecret: function(s) {
        _secret = s;
      },
      getSecret: function() {
        return _secret;
      }
    };
}
