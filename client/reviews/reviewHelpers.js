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

// Convert star/bar ratings to percentage for CSS
const ratingConverter = (rating, divisor) => {
  return rating / divisor * 100;
}

// Get total number of ratings
const getRatingTotal = (data) => {
  let ratings = 0;
  for (var key in data) {
      ratings += Number(data[key]);
  }
 return ratings;
}

// Get total number of recommends
const getRecTotal = (data) => {
  let recs = 0;
  for (var key in data) {
    recs += Number(data[key]);
  }
  return recs;
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

const charsTable = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
}

const sortRelevantReviews = (reviews) => {
  let newestReviews = reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      newestReviews.map((review, index) => { review.rank = index/4 });

  let helpfulReviews = reviews.sort((a, b) => b.helpfulness - a.helpfulness);
      helpfulReviews.map((review, index) => { review.rank += index });

  return reviews.sort((a, b) => a.rank - b.rank);
}

module.exports = {
  getAvgRating: getAvgRating,
  getRatingTotal: getRatingTotal,
  getRecTotal: getRecTotal,
  ratingConverter: ratingConverter,
  convertDate: convertDate,
  charsTable: charsTable,
  sortRelevantReviews: sortRelevantReviews
}