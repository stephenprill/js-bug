let songs = [
  { title: "Poor Song", artist: "Yeah Yeah Yeahs", length: 111 },
  { title: "Glowing", artist: "D.A.", length: 109 },
  { title: "17", artist: "Youth Lagoon", length: 120 }
];


// Generate a song template for each song in the songs array.
songs.forEach( song => {
  generateView(document.getElementById('song').innerHTML, song, 'songs');
});

// Generate a template that displays the total length of every song.
generateView(document.getElementById('playlist').innerHTML, {
  length: getLength(songs)
}, 'footer');
