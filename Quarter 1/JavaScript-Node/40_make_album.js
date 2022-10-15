clear();

printAlbumInfo();
function makeAlbum(artistName, albumTitle, ...args){
	let artistInfo = {
		name: artistName,
		album: albumTitle,
		noOfTracks: args[0]
	}
	return artistInfo	
}

function printAlbumInfo()
{
	console.log(makeAlbum("Arjit Singah", "Gumrah", 5));
	console.log(makeAlbum("Atif Aslam", "Bepanah", 2));
	console.log(makeAlbum("Illenium", "Future"));

}