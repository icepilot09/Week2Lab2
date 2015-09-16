var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
			return val;
		},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
			 if (Array.isArray(list)) {
             for (var i = 0; i < list.length; i++)
                 iterator(list[i], i, list);
            } else if (list instanceof Object) {
             for (var key in list)
                 iterator(list[key], key, list);
         } else if (list === null) {
             return list;}
		},

		filter : function(list, test) {
			var evens = [];
			var odds = [];
			for (var i = 0; i < list.length; i++) {
				if (test(list[i]) === true){
					evens.push(list[i])
				} else {
					odds.push(list[i])
				}
			}
			return evens;
			return odds;
		},

		reject : function(list, test) {
				var evens = [];
				var odds = [];
				for (var i = 0; i < list.length; i++) {
				if (test(list[i]) !== true){
					evens.push(list[i])
				} else {
					odds.push(list[i])
				}
			}
			return evens
			return odds
		},
		
		map : function(list, iterator) {
			var arr = [];
			for (var i = 0; i < list.length; i++) {
				arr.push(iterator(list[i]));
			}
			return arr;
		},
		
		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
			if (accumulator === undefined){
				accumulator = list[0];
			}
			for (var i = 0; i < list.length; i++) {
				accumulator = iterator(list[i],accumulator);
			
			}
			return accumulator;
		},

		every : function(list, iterator) {
			if (iterator === undefined){
				iterator = library.identity;
			}
			for (var i = 0; i < list.length; i++) {
				if(!iterator(list[i])){
					return false;
				}
			} 
			 return true;
		},
		
		some : function(list, iterator) {
			if(iterator === undefined){
				iterator = library.identity;
			}
			for (var i = 0; i < list.length; i++) {
				if(iterator(list[i])){
					return true;
				}
			}
			return false;
		},

		contains : function(list, target) {
			if(target === undefined){
				target = library.indexOf;
			}
			for (var i = 0; i < list.length; i++) {
				if(!target(list[i]))
					return false;
				}
			
			return true;
		},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {
			return obj;
		},

		defaults : function(obj) {
			return obj;
		},

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
			// var arr = [];
			// for (var i = 0; i < array.length; i++) {
			// 	if (library.indexOf(arr,array[i]) === -1);
			// 	arr.push(array[i])
				
			// }
			// return arr
			return array.filter(function(x, i) {
    			return array.indexOf(x) === i
  			})
		},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {
			var ret = [];
			for (var i = 0; i < nestedArray.length; i++) {
				if(Array.isArray(nestedArray[i])){
					ret = ret.concat(flatten(nestedArray[i]));
				}
				else {
					ret.push(nestedArray[i]);
				}
			}
			return ret;
		},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {	
			var hasBeenCalled = false;
			return  function(){
				if(hasBeenCalled === false){
				hasBeenCalled = true;
				func()
				} 
			} 
		},

		memoize : function(func) {
			
		},

		delay : function(func, wait) {
			var myVar = setTimeout(5)
			return myVar;
		}
		
	}

})();




