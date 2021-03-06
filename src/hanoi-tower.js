module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const perSecond = turnsSpeed / (60 * 60) ;
  return { turns, seconds: turns / perSecond };
};