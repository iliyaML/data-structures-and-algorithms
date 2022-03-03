const shufflePlaylist = (listOfSongs) => {
  let songsLength = listOfSongs.length;
  // continue the loop until we play all the songs
  while (songsLength > 0) {
    // generate a random number from 0 to songsLength-1
    let randomId = Math.floor(Math.random() * songsLength);
    console.log(listOfSongs[randomId]);

    // swap the song at randomId to the back of the list
    // decrement the size of the list (ie. consider it removed from the playlist)
    let tmp = listOfSongs[randomId];
    listOfSongs[randomId] = listOfSongs[songsLength - 1];
    listOfSongs[songsLength - 1] = tmp;
    --songsLength;
  }
};

shufflePlaylist(["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"]);
