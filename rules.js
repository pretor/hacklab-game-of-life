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
		// for (var key in rulesArray) {
		// 	for (var obj in key) {
								
		// 	}
		// }
		// return 1;
	}
	
	this.conditionCheck = function() {
		var keyArray = [];
		for (var key in rulesArray) {
			console.log(rulesArray[key].state);

			if (rulesArray[key].state == cell) {
				continue;
			}
	
			switch (rulesArray[key].conop) {
				case '<': {
					if (rulesArray[key].condition < count) {
						keyArray.push(rulesArray[key]);
					}
				}
				case '=': {
					if (rulesArray[key].condition = count) {
						keyArray.push(rulesArray[key]);
					}
				}
				case '>': {
					if (rulesArray[key].condition > count) {
						keyArray.push(rulesArray[key]);
					}
				}
			}
		}
		var asd = priorityCheck(keyArray);
		return rulesArray[asd].state;

	}
	this.priorityCheck = function(keyArray) {
		var maxkey = keyArray[0];
		for (var i in keyArray) {
			if (rulesArray[keyArray[i]].priority > rulesArray[maxkey].priority){
				maxkey = keyArray[i];
			}
		}
		return maxkey;
	}
}