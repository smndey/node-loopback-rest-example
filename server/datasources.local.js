// {
//   "db": {
//     "name": "db",
//     "connector": "memory"
//   },
//   "DataAPI": {
//     "name": "DataAPI",
//     "baseURL": "https://api.github.com",
//     "crud": false,
//     "connector": "rest",
//     "operations": [
//       {
//         "template": {
//           "method": "GET",
//           "url": "${baseURL}",
//           "headers": {
//             "accept": "application/json"
//           }
//         },
//         "functions": {
//           "getUser": [
//           ]
//         }
//       }
//     ]
//   }
// }

module.exports = {
    db: {
        name: "db",
        connector: "memory"
    },
    DataAPI: {
    name: "DataAPI",
    baseURL: "https://api.github.com",
    crud: false,
    connector: "rest",
    operations: [
      {
        template: {
          method: "GET",
          url: "",
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