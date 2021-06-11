// Get average rating for stars to nearest 0.25
const getAvgRating = (data) => {
  let total = 0;
  let ratings = 0;
  for (var key in data) {
      total += Number(key) * Number(data[key]);
      ratings += Number(data[key]);
  }

 let average = total/ratings;
 return (Math.round(average * 4) / 4).toFixed(2)
}

// Convert star ratings to percentage for CSS
const ratingConverter = (rating) => {
  return rating / 5 * 100;
}

// Get total number of ratings
const getRatingTotal = (data) => {
  let ratings = 0;
  for (var key in data) {
      ratings += Number(data[key]);
  }
 return ratings
}

// Convert date to MONTH/DD/YYYY format
const convertDate = (date) => {
  const months = {
    "01":"January",
    "02":"February",
    "03":"March",
    "04":"April",
    "05":"May",
    "06":"June",
    "07":"July",
    "08":"August",
    "09":"September",
    "10":"October",
    "11":"November",
    "12":"December"
  }

  let month = months[date.slice(5,7)];
  let day = date.slice(8,10);
  let year = date.slice(0,4);

  return `${month} ${day}, ${year}`
}

module.exports = {
  getAvgRating: getAvgRating,
  getRatingTotal: getRatingTotal,
  ratingConverter: ratingConverter,
  convertDate: convertDate
}