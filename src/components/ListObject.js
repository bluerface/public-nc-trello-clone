const ListObject = function (name, cards) {
  return {
    name: name,
    cards: cards || []
  };
};

module.exports = ListObject;
