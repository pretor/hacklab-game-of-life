var rules = function(cell, count) {
	// if (cell > 0) {
 //        alive = count === 2 || count === 3 ? 1 : 0;
 //    }  
   
 //    else{
 //        if(count === 7) {alive = 2;}
 //        else {alive = count === 3 ? 1 : 0;}
 //    }
 //    return alive;
	var cell = cell;
	var count = count;
	this.process = function() {
		for (var key in rulesArray) {
			for (var obj in key) {
				console.log(obj);
			}
		}
		return 1;
	}

}

