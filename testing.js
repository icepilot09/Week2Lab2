// var arr = [1,2,3,4,5,5,7,8,9]
// _.each(arr, function(item, index){
// 	console.log(item + ' : ' + index);
// });

// var property = function (key) {
//     return function (obj) {
//         return obj == null ? void 0 : obj[key];
//     };
// };
// var getLength = property('length');
// var isArrayLike = function (collection) {
//     var length = getLength(collection);
//     return typeof length == 'number' && length >= 0 && length;
// };

// var library = (function(){
// 	return {
// 		// Utility --- Complete Functions Below
// 		identity : function(val) {
// 			return val;
// 		},

		// Collections --- Complete Functions Below
		// each : function(list, iterator) {
		// 	var i, length;
        //     if (isArrayLike(list)) {
        //         for (i = 0, length = list.length; i < length; i++) {
        //             iterator(list[i], i, list);
        //         }
        //     }
        //     else {
        //         var keys = Object.keys(list);
        //         for (i = 0, length = keys.length; i < length; i++) {
        //             iterator(list[keys[i]], keys[i], list);
        //         }
        //     }
            
            
            
            
        //     var evens = [];
		// 	var odds = [];
		// 		for (var i = 0; i < list.length; i++) {
		// 		if (test(list[i]) !== true){
		// 			evens.push(list[i])
		// 		} else {
		// 			odds.push(list[i])
		// 		}
		// 	}
		// 	return evens
		// 	return odds