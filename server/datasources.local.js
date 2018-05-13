module.exports = {
    DataAPI: {
    name: "DataAPI",
    baseURL: "https://api.github.com",
    crud: false,
    connector: "rest",
    operations: [
      {
        template: {
          method: "GET",
          url: "https://api.github.com",
          headers: {
            accept: "application/json"
          }
        },
        functions: {
          getUser: [
          ]
        }
      }
    ]
  }
}


// https://github.com/strongloop/loopback-datasource-juggler/issues/658