module.exports = function createDreamTeam(members) {
  return !Array.isArray(members)
    ? false
    : members
        .filter(member => typeof member === "string")
        .map(member =>
          member
            .trim()
            .charAt(0)
            .toUpperCase()
        )
        .sort()
        .join("");
};
