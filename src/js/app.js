let songs = [
  { title: "Poor Song", artist: "Yeah Yeah Yeahs", length: 111 },
  { title: "Glowing", artist: "D.A.", length: 109 },
  { title: "17", artist: "Youth Lagoon", length: "120" }
];

/**
 * Accumulator returns the total length of every song in the songs array.
 *
 * @param  songs  An array of song objects where each has a length property.
 * @return int    Sum of every integer from the length prop in the songs array.
 */
const getLength = (songs) => {
  let length = 0;
  songs.forEach(song => length += song.length);
  return length;
};

/**
 * Selects a template from the DOM, merges it with a data object,
 * and injects the merged template into the DOM.
 *
 * @param  template  The source where a template is defined
 * @param  data      An object no more than one level deep
 * @param  id        The id of an element where you want the template placed
 */
const generateView = (template, data, id) => {
  let dest = document.getElementById(id),
      re  = /<%([^%>]+)?%>/g,
      match;

  // The above regular expression uses the "g" flag, so this exec() method can be called
  // multiple times to find successive matches in the same string. This will match
  // multipule <% prop %> variables in a template.
  while(match = re.exec(template)) {
    template = template.replace(match[0], data[match[1].trim('')]);
  }

  // Inject the generated template into the DOM.
  dest.innerHTML = template;
};

// Generate a song template for each song in the songs array.
songs.forEach( song => {
  generateView(document.getElementById('song').innerHTML, song, 'songs');
});

// Generate a template that displays the total length of every song.
generateView(document.getElementById('playlist').innerHTML, {
  length: getLength(songs)
}, 'footer');
