clear();

let magicianNames = ["Yakoza", "Bendali", "Yoza"];

showMagicians([...magicianNames], magicianNames);

function makeGreat(magicianNames, oldArray) {
	let makeGreatMagicians = magicianNames.map(i => 'The Great ' + i);
	return [makeGreatMagicians, oldArray]
}

function showMagicians(magicianNames, oldArray)
{
	let result = makeGreat(magicianNames, oldArray);
	console.log(result[0], result[1]);
}