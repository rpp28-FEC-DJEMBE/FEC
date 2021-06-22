
// currency formatter
const toCurrency = (number) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  return formatter.format(Number(number));
}


module.exports = {
  toCurrency: toCurrency
}
