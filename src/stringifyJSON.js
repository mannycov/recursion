// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return 'undefined';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    return stringifyArr(obj);
  } else if (typeof obj === 'object') {
    return stringifyObj(obj);
  }

};

var stringifyArr = function(obj) {
  if (obj.length === 0) {
    return '[]';
  }
  var items = _.map(obj, function(item) {
    return stringifyJSON(item);
  });
  return '[' + items + ']';
};

var stringifyObj = function(obj) {
  var items = [];
  for (var key in obj) {
    if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
      items.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  return '{' + items + '}';
};