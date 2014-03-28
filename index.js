module.exports = function(obj){
  var constructor = (typeof obj.initialize === 'undefined')?
    function(){} : obj.initialize;
  for(var method in obj){
    if (method !== 'initialize') {
      constructor.prototype[method] = obj[method];
    };
  }
  return constructor;
};


