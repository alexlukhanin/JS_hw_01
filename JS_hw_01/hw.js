"use strict"

// 1st task

let admin, name = "John";

admin = name;
console.log(admin);

// 2nd task
console.log("\nTask2");

let login, password;

login = "Admin";
password = "TheMaster";

console.log("Who's there?");

if (login == "Admin") {
	console.log("Password?");

	if (password == "TheMaster") {
		console.log("Welcome!");
	} else if (password == "Cancel") {
		console.log("Canceled.");
	} else {
		console.log("Wrong password");
	}
} else if (login == "Cancel") {
	console.log("Canceled.");
} else {
	console.log("I don't know you");
}

// Task3
console.log("\nTask3");

login = "Admin";
password = "123456";

console.log("Who's there?");

switch (login) {
case "Admin": {
	console.log("Password?");
	
	switch (password) {
	case "TheMaster": {
		console.log("Welcome?");
		break;
	}

	case "Cancel": {
		console.log("Canceled.");
		break;
	}

	default: {
		console.log("Wrong password");
	}

	}
	break;
}

case "Cancel": {
	console.log("Canceled.");
	break;
}

default: {
	console.log("I don't know you");
}

}
