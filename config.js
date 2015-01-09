rulesArray = {
	1: {
		'condition': 2,		//Broj celija
		'conop': '<',		//Operator
		'priority': 1,		//Prioritet
		'state': 1,		//Stanje (0=mrtva, 1=ziva, 2=crna)
		'result': 0,		//Dobijena celija
		'color': '000000'	//Boja celije
	},
	2: {
		'condition': 2,
		'conop': '=',
		'priority': 2,
		'state': 1,
		'result': 1,
		'color': '00ff00'
	},
	3: {
		'condition': 3,
		'conop': '=',
		'priority': 3,
		'state': 1,
		'result': 1,
		'color': '0000ff'
	},
	4: {
		'condition': 3,
		'conop': '>',
		'priority': 4,
		'state': 1,
		'result': 0,
		'color': '000000'
	},
	5: {
		'condition': 3,
		'conop': '=',
		'priority': 5,
		'state': 0,
		'result': 1,
		'color': '00ff00'
	},
	6: {
		'condition': 7,
		'conop': '=',
		'priority': 6,
		'state': 1,
		'result': 2,
		'color': 'ffffff'
	},
	7: {
		'condition': 3,
		'conop': '=',
		'priority': 7,
		'state': 2,
		'result': 2,
		'color': 'ffffff'
	},
	8: {
		'condition': 5,
		'conop': '>',
		'priority': 8,
		'state': 2,
		'result': 1,
		'color': 'ff0000'
	},
	9: {
		'condition': 5,
		'conop': '<',
		'priority': 9,
		'state': 1,
		'result': 1,
		'color': 'ff5959'
	},
	10: {
		'condition': 2,
		'conop': '=',
		'priority': 10,
		'state': 2,
		'result': 1,
		'color': 'ff5959'
	},
	11: {
		'condition': 4,
		'conop': '=',
		'priority': 12,
		'state': 1,
		'result': 1,
		'color': '5959ff'
	},
	12: {
		'condition': 4,
		'conop': '=',
		'priority': 13,
		'state': 2,
		'result': 1,
		'color': '59ff59'
	}
};
