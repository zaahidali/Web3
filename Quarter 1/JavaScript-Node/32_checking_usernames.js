clear();

let current_users = ["admin", "broker","guest1", "guest2", "super_user", "John"];
let new_users = ['broker', "john", "peter", 'ali', 'joseph', "JOHN"];
new_users.length > 0 ? checkingUserNames(new_users) : console.log("We need to find some users!");

function checkingUserNames(userNames){
	current_users = current_users.map(toUpperCaseConverter)
	console.log(current_users);
	for (let userName=0; userName<userNames.length; userName++)
		{
			user = userNames[userName];
			if (current_users.includes(user.toUpperCase() )){
				console.log(`Hello ${user}, you need to enter a new username.`);
			}
			else{
				console.log(`Hello ${user}, username is available`);
			}
		}
}

function toUpperCaseConverter(val){
	return val.toUpperCase();
}