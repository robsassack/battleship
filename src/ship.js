const Ship = (length) => {
  const hits = Array(length).fill(false);
  const hit = (num) => {
    hits[num] = true;
  };
  const isSunk = () => {
    if (hits.includes(false)) {
      return false;
    }
    return true;
  };
  return { length, hit, isSunk };
};
module.exports = Ship;
