clear();

let usersList = ["admin", "broker","guest1", "guest2", "super_user"];
helloAdmin(usersList);

function helloAdmin(userRoles){
	for (let userRole=0; userRole<userRoles.length; userRole++)
		{
			user = userRoles[userRole];
			if (user == "admin"){
				console.log(`Hello ${user.toUpperCase()}, would you like to see a status report?`);
			}
			else{
				console.log(`Hello ${user.toUpperCase()}, thank you for logging in again.`);
			}
		}
}
