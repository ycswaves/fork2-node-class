module.exports = function(obj){
	if(undefined === obj.initialize){
		return function(){};
	}
  return obj.initialize;
};


