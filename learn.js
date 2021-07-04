// switch statement Example

var num;


num = prompt("Enter The Value");

switch(parseInt(num)){


	case 2:
	document.write("One");
	break;

	case 1:
	document.write("Two");
	break;

	case 3:
	document.write("Three");
    break;

    default:
    document.write("No Data Here in this name");
    break;

}

//Switch Statement Example
var cricketer; Another Work

cricketer = prompt("Please Type Here Cricketer Name: ");

switch(cricketer){

	case "Tamim":
	case "Rahim":
	case "Shakib":
	console.log("He is a Bangladeshi Player");
	break;

	case "Dhoni":
	case "Kohli":
	case "Tendulkar":
	console.log("He is a Indian Player");
	break;

	default:
	console.log("He is not any Player");
}

//Student Search Project

function clkbtn() {

	var input = document.getElementById('std').value;
	    


	    switch(parseInt(input)){

	    	case 1:
	    	document.write('<img src= "one.jpg" style="width:100px;height:50px"><br> <h1>Roll:1</h1> <br> Name:Suranjit');


	    	default:
	    	document.write('<h1>No data Found</h1>');
	    }
}