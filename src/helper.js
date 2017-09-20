function randomCount (arr) {
	return function(){
		return arr[Math.floor(Math.random() * arr.length)];
	}
}

const counter = [100, 125, 325, 599, 850, 789];

export const randomCounter = randomCount(counter);


