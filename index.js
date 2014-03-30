module.exports = function(obj, parent) {
  var constructor = (typeof obj.initialize === 'undefined')?
                    function(){} : obj.initialize;

  //implement inheritance
  if (typeof parent !== 'undefined') {
    constructor.prototype = new parent();
    constructor.prototype.constructor = constructor;
    constructor.prototype.constructor.__super__ = parent;
  } else {
    constructor.__super__ = Object;
  }

  for (var method in obj) {
    if (method !== 'initialize') {
      constructor.prototype[method] = obj[method];
    }
  }

  return constructor;
};


