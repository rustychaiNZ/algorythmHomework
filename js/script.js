console.log('Algorythm Homework');

var employees = ['Peter' , 'Lucy' , 'Alice' , 'Bryan'];
var bestEmployee = 0;

var projectA = [80 , 75 , 93 , 62];
var projectB = [53 , 81 , 90 , 60];
var projectC = [69 , 72 , 93 , 60];
var projectAverage = [];

for(i=0; i<=3; i++) {
	// This part of the loop adds each of the employees projects and finds the mean
	var projectAverage = ((projectA[i] + projectB[i] + projectC[i]) / 3).toFixed(2);

	document.getElementById('averagePerformance').innerHTML += employees[i] + ': ' + projectAverage + '% <b>average performance</b> <br>';
	
	if(bestEmployee < projectAverage) {
		bestEmployee = projectAverage[i];
		var listIndex = i;
	}
	document.getElementById('outstandingEmployee').innerHTML = bestEmployee[i];
} 

// for(j=0; j<=3; j++) {
// 	// if(bestEmployee < projectAverage) {
// 	// 	bestEmployee = projectAverage[i];
// 	// 	var listIndex = i;
// 	// }
// 	// document.getElementById('outstandingEmployee').innerHTML = bestEmployee[i];
// }


