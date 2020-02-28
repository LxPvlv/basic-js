module.exports = (
  str,
  {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|"
  }
) =>
  new Array(repeatTimes || 1)
    .fill(
      String(str) +
        new Array(additionRepeatTimes || 1)
          .fill(String(addition))
          .join(additionSeparator)
    )
    .join(separator);
