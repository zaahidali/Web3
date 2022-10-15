clear();

let numbersList = [1,2,3,4,5,6,7,8,9];
new_users.length > 0 ? printOrdinalNumbers(numbersList) : console.log("We need to find some numbers!");

function printOrdinalNumbers(numbersList){
	for (let number=1; number<=numbersList.length; number++)
		{
			if (number==1){
				console.log(`${number}st`);
			}
			else if(number==2){
				console.log(`${number}nd`);
			}
			else if(number==3){
				console.log(`${number}rd`);
			}
			else{
				console.log(`${number}th`);
			}
		}
}
