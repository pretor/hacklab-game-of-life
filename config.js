rulesArray = {
	1: {
		'condition': 2, //kolko ima okolo
		'conop': '<', //jel ima tacno ili vise ili manje?
		'priority': 0, //prioritet
		'state': 1, //trenutno stanje
		'result': 0 //koje treba da bude
	},
	2: {
		'condition': 2,
		'conop': '=',
		'priority': 1,
		'state': 1,
		'result': 1
	},
	3: {
		'condition': 3,
		'conop': '=',
		'priority': 1,
		'state': 1,
		'result': 1
	},
	4: {
		'condition': 3,
		'conop': '>',
		'priority': 1,
		'state': 1,
		'result': 0
	},
	5: {
		'condition': 3,
		'conop': '=',
		'priority': 2,
		'state': 0,
		'result': 1
	},
	6: {
		'condition': 7,
		'conop': '=',
		'priority': 1,
		'state': 1,
		'result': 2
	}
};