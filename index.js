module.exports = function(obj, parent) {
  var constructor = (typeof obj.initialize === 'undefined')?
                    function(){} : obj.initialize;

  if (typeof parent !== 'undefined') {
    constructor.prototype = new parent();
    constructor.prototype.constructor = constructor;
  }

  for (var method in obj) {
    if (method !== 'initialize') {
      constructor.prototype[method] = obj[method];
    }
  }

  return constructor;
};


