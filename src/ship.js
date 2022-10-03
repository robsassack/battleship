const Ship = (length) => {
  const hits = Array(length).fill(false);
  const hit = (num) => {
    if (num >= length || num < 0) {
      throw new Error('Invalid hit index');
    }
    hits[num] = true;
  };
  const isSunk = () => {
    if (hits.includes(false)) {
      return false;
    }
    return true;
  };
  return {
    length, hit, hits, isSunk,
  };
};
module.exports = Ship;
