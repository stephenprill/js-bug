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
