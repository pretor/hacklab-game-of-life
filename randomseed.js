function randomSeed(numberOfSeeds, maxWidth, maxHeigth) {
	randomSeedArray = [];
	for (i = 0; i < numberOfSeeds; i++) {
		randomWidth = Math.floor(Math.random() * maxWidth);
		randomHeigth = Math.floor(Math.random() * maxHeigth);
		randomSeedArray.push([randomWidth, randomHeigth]);
	}
	return randomSeedArray;
}