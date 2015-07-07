var jsonify = require('jsonify');

var jsonObject = { Name: "TEST", Age: 20 };

var jsonObjectAsString = jsonify.toJson(jsonObject);
console.log(jsonObjectAsString);

var jsonObjectFromString = jsonify.fromJson(jsonObjectAsString);
console.log(jsonObjectFromString.Name);
console.log(jsonObjectFromString.Age);