console.log('Algorythm Homework');

var eName = [];
var bestEmployee = 0;

var projectA = [];
var projectB = [];
var projectC = [];
var projectAverage = [];

// Reading form data
document.getElementById('submitE').addEventListener('click', function() {
	// Records the name inputted by the user
	var individualName = document.getElementById('eName').value;
	// Records results for project A
	var projA = parseInt(document.getElementById('projectA').value);
	// Records results for project B
	var projB = parseInt(document.getElementById('projectB').value);
	// Records results for project C
	var projC = parseInt(document.getElementById('projectC').value);

	// Finds the average performance of the employee
	var projAverage = ((projA + projB + projC) / 3).toFixed(2);

	// Placing values into the array
	eName.push(individualName);
	projectA.push(projA);
	projectB.push(projB);
	projectC.push(projC);
	projectAverage.push(projAverage);
	console.log(eName, projectA, projectB, projectC, projectAverage);

	document.getElementById('employeeResults').innerHTML += '<b>' + individualName + ':</b> ' + projA + '% for project A, ' + projB + '% for project B, ' + projC + '% for project C.<br>' + '<b>Project Average:</b> ' + projAverage + '% <br>';

	// Clears the form at the end ready for next input
	document.getElementById('employeeForm').reset();
});

// Click to find who the best employee is
document.getElementById('btnBestEmployee').addEventListener('click', function(){
	// Takes the length of the 'projectAverage' array as the amount of times the function loops
	for(var i=0; i<=projectAverage.length; i++) {
		// Condition - finds the biggest figure in the projectaverage array and compares it to the best employee variable
		if(bestEmployee < projectAverage[i]){
			// changes the value of the best employee variable to the project avearge figure and includes the name of the employee that got the corresponding score
			bestEmployee = projectAverage[i] + '% ' + eName[i];
		}
	}
	document.getElementById('bestEmployee').innerHTML = bestEmployee;
});

// Click to reassign employee
// Doesen't work if employ has
document.getElementById('btnEmployeeAsignment').addEventListener('click', function(){
	
	// Clears outputs if more names are added to the array so dupilicates don't pop up
	document.getElementById('upForPromotion').innerHTML = '';
	document.getElementById('staticEmployee').innerHTML = '';
	document.getElementById('firedEmployee').innerHTML = '';

		// Loop that loops as many time as there are entries in the array
	for(var j=0; j<=projectAverage.length; j++) {
		// Find who is up for promotion
		if(90 <= projectAverage[j]) {
			document.getElementById('upForPromotion').innerHTML += eName[j] + '<br>';
		}
		// Finds who is still doing the same job
		else if(66 <= projectAverage[j]) {
			document.getElementById('staticEmployee').innerHTML += eName[j] + '<br>';
		}
		// Finds who is fired
		else if(65.99 > projectAverage[j]){
			document.getElementById('firedEmployee').innerHTML += eName[j] + '<br>';
		}
	}
});


