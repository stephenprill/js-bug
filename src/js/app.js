let songs = [
  { title: "Poor Song", artist: "Yeah Yeah Yeahs", length: 111 },
  { title: "Glowing", artist: "D.A.", length: 109 },
  { title: "17", artist: "Youth Lagoon", length: "120" }
];

const getLength = (songs) => {
  let length = 0;
  songs.forEach(song => length += song.length);
  return length;
}

const generateView = (template, data, id) => {
  let dest = document.getElementById(id),
      re = /<%([^%>]+)?%>/g,
      match;

  while(match = re.exec(template)) {
    template = template.replace(match[0], data[match[1].trim('')]);
  }

  return dest.innerHTML = template;
}

songs.forEach( song => {
  generateView(document.getElementById('song').innerHTML, song, 'songs');
});

generateView(document.getElementById('playlist').innerHTML, {
  length: getLength(songs)
}, 'footer');
