module.exports = function countCats(backyard) {
  return backyard.reduce(
    (allCats, places) =>
      places.reduce(
        (cats, place) => (place === "^^" ? cats + 1 : cats),
        allCats
      ),
    0
  );
};
