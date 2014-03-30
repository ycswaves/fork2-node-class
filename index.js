module.exports = function(obj, parent) {
  var constructor = (typeof obj.initialize === 'undefined')?
                    function(){} : obj.initialize;

  //implement inheritance
  if (typeof parent !== 'undefined') {

    //implement inheritance
    constructor.prototype = new parent();
    constructor.prototype.constructor = constructor;
    constructor.__super__ = parent;

    //implement 'super'
    var currentClass = constructor;
    constructor.prototype.super = function() {
      var originalClass = constructor;
      currentClass = currentClass.__super__; // at which point current class becomes parent class
      var superFn = currentClass.prototype[arguments[0]]
        , argsArr = Array.prototype.slice.call(arguments, 1);

      if(typeof superFn === 'function'){
        var result = superFn.apply(this, argsArr); // here 'this' refers to parent of current class
        currentClass = originalClass; // to make 'this' refer back to orignal constructor
        return result;
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


