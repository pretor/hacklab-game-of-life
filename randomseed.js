function randomSeed(numberOfSeeds, maxWidth, maxHeigth) {
	console.log('s')
	randomSeedArray = [];
	for (i = 0; i < numberOfSeeds; i++) {
		randomWidth = Math.floor(Math.random() * maxWidth);
		randomHeigth = Math.floor(Math.random() * maxHeigth);
		randomSeedArray.push([randomWidth, randomHeigth]);
	}
	console.log(randomSeedArray);
	return randomSeedArray;
}