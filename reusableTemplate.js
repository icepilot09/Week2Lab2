var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
			return val;
		},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
			
		},

		filter : function(list, test) {
			var ar = [];
	     for (var i = 0; i < list.length; i++) {
    		if(i % 2 === 0) { // index is even
        	ar.push(list[i]);
    } 
}
return ar;
			
			// for (var i = 0; i < list.length; i++) {
			// 	var element = list[i];
			// 	if (element % 2 === 0){
			// 		return (i);
			// 		} 
				
			// 	}
			
			// for (var i = 0; i < list.length; i++){
			// 	if (i % 2 === 0) {return (i);
			// 	} 
			// }	      
			// var myEvenArray = list.filter(test);
			// return myEvenArray;
		},

		reject : function(list, test) {
			
		},

		map : function(list, iterator) {},

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {},

		every : function(list, iterator) {},

		some : function(list, iterator) {},

		contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {
			
		},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {
			if (n > array.length){
				return array;
			} else {
				if (n === undefined){
				return array[array.length -1];
			} else {
				return array.slice(array.length -n);
			}
			}
		
		},

		indexOf : function(array, target){
			for (var i = 0; i < array.length; i++) {
				var element = array[i];
				if (element === target){
					return (i);
					} 
				
				}
			return (-1);
		},

		uniq : function(array) {
			return array.filter(function(x, i) {
    			return array.indexOf(x) === i
  			})
		},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();




