const Ship = (length) => {
  const hits = Array(length).fill(false);
  const hit = (num) => {
    if (num >= length) {
      throw new Error('Hit number too big');
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
