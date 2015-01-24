// Functions adapted from lodash

function baseRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function shuffle(collection) {
  var index = -1,
      length = collection.length,
      result = Array(length);

  while (++index < length) {
    var rand = baseRandom(0, index);
    if (index != rand) {
      result[index] = result[rand];
    }
    result[rand] = collection[index];
  }
  return result;
}
    
function sample(collection, n) {
  var length = collection.length;
  return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
  var result = shuffle(collection);
  result.length = Math.min(n < 0 ? 0 : (+n || 0), result.length);
  return result;
}

module.exports = {
  baseRandom: baseRandom,
  shuffle: shuffle,
  sample: sample
};