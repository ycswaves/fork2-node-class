module.exports = function(obj, parent) {
  var constructor = (typeof obj.initialize === 'undefined')?
                    function(){} : obj.initialize;

  //implement inheritance
  if (typeof parent !== 'undefined') {

    //implement inheritance
    constructor.prototype = new parent();
    constructor.prototype.constructor = constructor;
    constructor.prototype.constructor.__super__ = parent;

    //implement 'super'
    constructor.prototype.super = function() {
      var argsArr = Array.prototype.slice.call(arguments, 1);

      if(typeof parent.prototype[arguments[0]] === 'function'){
        return parent.prototype[arguments[0]].apply(this, argsArr);
      }
    }
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


