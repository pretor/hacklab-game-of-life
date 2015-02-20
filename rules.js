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
		//console.log("rulz niz:"+rulesArray[1].conop);
		var keyArray = [];
		for (var key in rulesArray) {
			//console.log(rulesArray[key].state);
/*
			if (rulesArray[key].state == cell) {
				continue;
			}*/
	
			switch (rulesArray[key].conop) {
				case '<': {
					if (rulesArray[key].condition < count) {
						keyArray.push(rulesArray[key]);
					}
				}
				case '=': {
					if (rulesArray[key].condition == count && rulesArray[key].state == cell) {
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
		var asd = this.priorityCheck(keyArray);
		return rulesArray[asd].result;

	}
	this.priorityCheck = function(keyArray) {
		//console.log(keyArray);
		priorityArray = [];
		for (var i in keyArray) {
			keyArray[i].priority
			priorityArray.push(keyArray[i].priority);
		}

		
		maxPriority = Math.max.apply(Math, priorityArray);
console.log(maxPriority)
		 for (var key in rulesArray) {

            if (rulesArray[key].priority == maxPriority) {
                max = parseInt(key)-1;
            }
        }
		
		//console.log(maxkey)
		//console.log(max)
		console.log(key)
		return key;
	}
}
