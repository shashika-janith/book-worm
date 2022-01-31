
export const formatNumber = (value, hasFractions = false) => {
  if (value) {
    if (typeof value === "number")
      return (value).toLocaleString('en');
    else {
      const passedNumber = parseInt(value);

      return isNaN(passedNumber) ? 0 : passedNumber.toLocaleString('en');
    }
  } else {
    return 0;
  }
}

export const convertThousands = (value) => {
  if (value) {
    if (!isNaN(value)) {
      let converted = value >= 1000 ? (value / 1000).toFixed() : value;

      return `${formatNumber(converted)}${value >= 1000 ? "K" : ""}`;
    }
  }

  return "0";
}