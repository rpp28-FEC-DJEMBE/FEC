(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_reviews_Reviews_jsx"],{

/***/ "./client/questions/addedPhotos.jsx":
/*!******************************************!*\
  !*** ./client/questions/addedPhotos.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var AddedPhotos = _ref => {
  var {
    photos
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "photo-list"
  }, photos.map((photo, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      key: i,
      src: photo,
      className: "answer-img"
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddedPhotos);

/***/ }),

/***/ "./client/questions/answerPhotos.jsx":
/*!*******************************************!*\
  !*** ./client/questions/answerPhotos.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var AnswerPhotos = _ref => {
  var {
    files,
    updatePhotos
  } = _ref;

  if (files.length < 5) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "upload-btn",
      htmlFor: "upload-photo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      id: "upload-photo",
      type: "file",
      accept: "image/*",
      onChange: e => updatePhotos(e)
    }), "Upload Photos");
  } else {
    return null;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerPhotos);

/***/ }),

/***/ "./client/reviews/AddReview.jsx":
/*!**************************************!*\
  !*** ./client/reviews/AddReview.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _questions_answerPhotos_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions/answerPhotos.jsx */ "./client/questions/answerPhotos.jsx");
/* harmony import */ var _questions_addedPhotos_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questions/addedPhotos.jsx */ "./client/questions/addedPhotos.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AddReview = props => {
  var [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var [recommend, setRecommend] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [characteristics, setChars] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  var [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [photos, setPhotos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  var charsEntry = e => {
    var {
      characteristics
    } = props.metaData;
    var chars = Object.keys(characteristics);

    var handleCharEntry = e => {
      var nam = e.target.name;
      var val = Number(e.target.value);
      setChars(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [nam]: val
      }));
    }; // using chars table from helper file


    return chars.map(char => {
      var charId = characteristics[char].id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "review-chars",
        key: charId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, char), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "review-chars-entry"
      }, _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_2__.charsTable[char].map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: index,
        onClick: e => handleCharEntry(e)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "radio",
        name: charId,
        value: index + 1
      }), option))));
    });
  };

  var reviewBodyCount = () => {
    if (body.length < 50) {
      return "Minimum required characters left: ".concat(50 - body.length);
    }

    return "Minimum reached";
  };

  if (!props.show) {
    return null;
  }

  var missingFieldsAlert = () => {
    var template = "You must enter the following:";

    if (rating === 0) {
      template += "\n      - Overall Rating*";
    }

    if (recommend === null) {
      template += "\n      - Do you recommend this product?*";
    }

    if (Object.keys(characteristics).length !== Object.keys(props.metaData.characteristics).length) {
      template += "\n      - Characteristics*";
    }

    if (body.length < 50) {
      template += "\n      - Review Body*";
    }

    if (name === '') {
      template += "\n      - What is your nickname*";
    }

    if (email === '') {
      template += "\n      - Your email*";
    }

    if (template !== "You must enter the following:") {
      alert(template);
    }
  };

  var addPhotos = e => {
    var file = e.target.files[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bji3bjas");
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "post",
      url: "https://api.cloudinary.com/v1_1/hrrpp28fec/image/upload",
      data: formData
    }).then(data => {
      setPhotos(prevState => prevState.concat([data.data.url]));
    });
  };

  var submitReview = () => {
    var postBody = {
      product_id: props.productId,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    };
    console.log('review body being posted', postBody);
    missingFieldsAlert();
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'post',
      url: "/reviews",
      data: postBody
    }).then(() => console.log("Review successfully posted")).catch(err => console.log('Error posting review'));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-modal",
    onClick: props.handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "addreview-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "review-title"
  }, " Write Your Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "exit pointer",
    onClick: props.handleClose
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "About the ", props.productName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Overall Rating*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: e => setRating(Number(e.target.value))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: "rating",
    id: "str1",
    value: "1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: e => setRating(Number(e.target.value))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: "rating",
    id: "str2",
    value: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: e => setRating(Number(e.target.value))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: "rating",
    id: "str3",
    value: "3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: e => setRating(Number(e.target.value))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: "rating",
    id: "str4",
    value: "4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: e => setRating(Number(e.target.value))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: "rating",
    id: "str5",
    value: "5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Do you recommend this product?*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-recommend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: e => setRecommend(e.target.value === 'true')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: "recommend",
    value: "true"
  }), "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: e => setRecommend(e.target.value === 'true')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: "recommend",
    value: "false"
  }), "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Characteristics*"), charsEntry(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Review Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "summary",
    type: "text",
    onChange: e => setSummary(e.target.value),
    maxLength: "60",
    placeholder: "Example: Best purchase ever!"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Review Body*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    id: "review-body",
    type: "text",
    onChange: e => setBody(e.target.value),
    maxLength: "1000",
    placeholder: "Why did you like the product or not?"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "disclaimer"
  }, reviewBodyCount())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "What is your nickname*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "nickname",
    type: "text",
    onChange: e => setName(e.target.value),
    maxLength: "60",
    placeholder: "Example: jackson11!"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "disclaimer"
  }, "For privacy reasons, do not use your full name or email address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Your email*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "email",
    type: "email",
    onChange: e => setEmail(e.target.value),
    maxLength: "60",
    placeholder: "Example: jackson11@email.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "disclaimer"
  }, "For authentication reasons, you will not be emailed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_questions_addedPhotos_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    photos: photos
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_questions_answerPhotos_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    updatePhotos: addPhotos,
    files: photos
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "answer-submit",
    onClick: () => submitReview()
  }, "Submit Review"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddReview);

/***/ }),

/***/ "./client/reviews/Breakdown.jsx":
/*!**************************************!*\
  !*** ./client/reviews/Breakdown.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RatingBreakdown_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingBreakdown.jsx */ "./client/reviews/RatingBreakdown.jsx");
/* harmony import */ var _ProductBreakdown_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductBreakdown.jsx */ "./client/reviews/ProductBreakdown.jsx");





class Breakdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: {},
      isLoaded: false
    };
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.isLoaded !== this.props.isLoaded) {
    //   this.setState({ isLoaded: this.props.isLoaded })
    // }
    if (prevProps.productId !== this.props.productId) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get("/reviews/meta?product_id=".concat(this.props.productId)).then(res => {
        this.setState({
          metaData: res.data
        });
      }).catch(err => {
        console.log('Error fetching review meta data', err);
      });
    }
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/reviews/meta?product_id=".concat(this.props.productId)).then(res => {
      this.setState({
        metaData: res.data,
        isLoaded: true
      });
    }).catch(err => {
      console.log('Error fetching review meta data', err);
    });
  }

  render() {
    var {
      ratings,
      recommended,
      characteristics
    } = this.state.metaData;

    if (!this.state.isLoaded) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "breakdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading..."));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "breakdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingBreakdown_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
        ratings: ratings,
        recommended: recommended
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductBreakdown_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
        characteristics: characteristics
      }));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breakdown);

/***/ }),

/***/ "./client/reviews/ProductBreakdown.jsx":
/*!*********************************************!*\
  !*** ./client/reviews/ProductBreakdown.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__);



var ProductBreakdown = _ref => {
  var {
    characteristics
  } = _ref;
  var chars = Object.keys(characteristics);

  if (!chars.length) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "product-breakdown"
    }, chars.map(char => {
      var slider = char === 'Comfort' || char === 'Quality' ? 'slider4' : 'slider3';
      var description = char === 'Comfort' || char === 'Quality' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "char-desc"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__.charsTable[char][0]), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__.charsTable[char][4])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "char-desc"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__.charsTable[char][0]), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__.charsTable[char][2]), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__.charsTable[char][4]));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "char-bar",
        key: characteristics[char].id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        id: "char-title"
      }, char), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        readOnly: true,
        type: "range",
        min: "1",
        max: "5",
        value: characteristics[char].value,
        className: slider
      }), description);
    }));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBreakdown);
/*
Product Breakdown (Factors)
Reviews will provide ability to give feedback on specific characteristics of the product.   The characteristics include Size, Width, Comfort, Quality, Length, and Fit.   One or more of these may be relevant for a product.  In the Reviews module, the average feedback received will be displayed for all characteristics which apply to the product.
Feedback for characteristics will be on a 5 point scale.  The range of this scale will depend on the characteristic in question.  For example, Size can range from (1) “too small” to (5) “too big”, with the middle option (3) being “perfect”.  Using the same 5 point scale for Quality, however, the scale would range from (1) “poor” to (5) “great”.
Regardless of what the range of the scale represents, the 5 point scale will display the same for all of the characteristics of the product.  Each will appear as a grey bar similar to the rating breakdown.  Above the bar, a label will state the characteristic.  Below the bar, the meaning of the lowest selection (1) and the highest selection (5) will appear.   On the bar, a single icon will appear representing the average value received via reviews submitted.  The icon should appear horizontally from the left edge of the bar such that it represents the average input for the characteristic.  For example, if the average is 5, the icon should appear all the way to the right.  An average of 3 should appear in the middle.

*/

/***/ }),

/***/ "./client/reviews/RatingBars.jsx":
/*!***************************************!*\
  !*** ./client/reviews/RatingBars.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__);



var RatingBars = _ref => {
  var {
    ratings
  } = _ref;
  var total = _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1___default().getRatingTotal(ratings);
  var emptyBar = {
    '--width': "0%"
  };
  var stars = [5, 4, 3, 2, 1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rating-bars"
  }, stars.map(star => {
    var barWidth = ratings[star] ? {
      '--width': "".concat(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1___default().ratingConverter(ratings[star], total), "%")
    } : emptyBar;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rating-bar",
      key: star
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, star, " stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      readOnly: true,
      type: "range",
      min: "1",
      max: "5",
      value: "1",
      className: "star-slider",
      style: barWidth
    }));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingBars);

/***/ }),

/***/ "./client/reviews/RatingBreakdown.jsx":
/*!********************************************!*\
  !*** ./client/reviews/RatingBreakdown.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RatingStars_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatingStars.jsx */ "./client/reviews/RatingStars.jsx");
/* harmony import */ var _RatingBars_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingBars.jsx */ "./client/reviews/RatingBars.jsx");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3__);





var RatingBreakdown = _ref => {
  var {
    ratings,
    recommended
  } = _ref;
  var [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ratings);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setStar(ratings);
  }, [ratings]);

  if (Object.keys(ratings).length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rating-breakdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Rating Breakdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rating-stars"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingStars_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      rating: 0
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "0% of reviews recommend this product"));
  }

  var starAverage = _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default().getAvgRating(ratings);
  var totalRecs = _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default().getRecTotal(recommended);
  var recommendPct = Math.round(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default().ratingConverter(recommended['true'], totalRecs));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rating-breakdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rating-stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    id: "star-average"
  }, starAverage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingStars_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    rating: starAverage,
    size: 30
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, recommendPct, "% of reviews recommend this product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingBars_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    ratings: ratings
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingBreakdown);

/***/ }),

/***/ "./client/reviews/RatingStars.jsx":
/*!****************************************!*\
  !*** ./client/reviews/RatingStars.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RatingStars = _ref => {
  var {
    rating,
    size
  } = _ref;
  var starStyle = {
    display: 'inline-block',
    fontFamily: 'Times',
    lineHeight: 1,
    fontSize: "".concat(size, "px")
  };
  var starPercent = _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_1___default().ratingConverter(rating, 5);
  var percent = {
    '--percent': "".concat(starPercent, "%")
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "stars",
    style: _objectSpread(_objectSpread({}, starStyle), percent)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingStars);

/***/ }),

/***/ "./client/reviews/ReviewList.jsx":
/*!***************************************!*\
  !*** ./client/reviews/ReviewList.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReviewTile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewTile.jsx */ "./client/reviews/ReviewTile.jsx");
/* harmony import */ var _SortOptions_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortOptions.jsx */ "./client/reviews/SortOptions.jsx");
/* harmony import */ var _AddReview_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddReview.jsx */ "./client/reviews/AddReview.jsx");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_5__);







class ReviewList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      showAdd: false,
      count: 2,
      sorting: 'relevant'
    };
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    if (e.target.value === 'helpful') {
      var helpfulReviews = this.props.reviews.sort((a, b) => b.helpfulness - a.helpfulness);
      this.setState({
        sorting: 'helpful'
      });
    }

    if (e.target.value === 'relevant') {
      (0,_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_5__.sortRelevantReviews)(this.props.reviews);
      this.setState({
        sorting: 'relevant'
      });
    }

    if (e.target.value === 'newest') {
      var newestReviews = this.props.reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      this.setState({
        sorting: 'newest'
      });
    }
  }

  handleMoreReviews() {
    this.setState(prevState => ({
      count: prevState.count += 2
    }));
  }

  handleAddReview() {
    if (!this.state.showAdd) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get("/reviews/meta?product_id=".concat(this.props.productId)).then(res => {
        this.setState({
          metaData: res.data,
          showAdd: true
        });
      }).catch(err => {
        console.log('Error fetching review meta data', err);
      });
    }
  }

  handleClose() {
    this.setState({
      showAdd: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.productId !== this.props.productId) {
      this.setState({
        count: 2,
        sorting: 'relevant'
      });
    }
  }

  render() {
    var display = this.props.reviews.slice(0, this.state.count);
    var tiles = this.props.reviews.length ? display.map((review, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewTile_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
        key: index,
        review: review
      });
    }) : "There are currently no reviews for this product.\n    Be the first to leave a review!";
    var moreReviews = display.length >= this.props.reviews.length ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "review-btn",
      onClick: this.handleMoreReviews
    }, "More Reviews");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "review-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SortOptions_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
      reviews: this.props.reviews,
      handleSort: this.handleSort,
      sorting: this.state.sorting
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "review-list"
    }, tiles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "review-buttons"
    }, moreReviews, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "review-btn",
      onClick: this.handleAddReview
    }, "Add A Review +"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddReview_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
      show: this.state.showAdd,
      productId: this.props.productId,
      handleClose: this.handleClose,
      metaData: this.state.metaData,
      productName: this.props.productName
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewList);

/***/ }),

/***/ "./client/reviews/ReviewPhotoModal.jsx":
/*!*********************************************!*\
  !*** ./client/reviews/ReviewPhotoModal.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ReviewPhotoModal = props => {
  var [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var modal = !show ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-modal",
    onClick: () => setShow(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "picture-modal",
    src: props.url,
    alt: props.id,
    onClick: e => e.stopPropagation()
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: props.url,
    alt: props.id,
    className: "review-photo pointer",
    onClick: () => setShow(true)
  }), modal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewPhotoModal);

/***/ }),

/***/ "./client/reviews/ReviewTile.jsx":
/*!***************************************!*\
  !*** ./client/reviews/ReviewTile.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RatingStars_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatingStars.jsx */ "./client/reviews/RatingStars.jsx");
/* harmony import */ var _ReviewPhotoModal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewPhotoModal.jsx */ "./client/reviews/ReviewPhotoModal.jsx");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3__);





class ReviewTile extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.review.helpfulness,
      helpfulClicked: false,
      showBody: false
    };
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleHelpful() {
    if (!this.state.helpfulClicked) {
      this.setState(prevState => {
        return {
          helpfulness: prevState.helpfulness + 1,
          helpfulClicked: true
        };
      });
    }
  }

  handleShowMore() {
    this.setState({
      showBody: true
    });
  }

  render() {
    var {
      review
    } = this.props;
    var body = review.body.length > 250 && !this.state.showBody ? review.body.substr(0, 250) + '...' : review.body;
    var showMore = body === review.body ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      className: "pointer",
      onClick: this.handleShowMore
    }, "Show more");
    var recommend;
    var response;
    var photos; // display if a recommendation is present in the data

    if (review.recommend) {
      recommend = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u2713 I recommend this product");
    } // display if a response is present in the data


    if (review.response) {
      response = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "response"
      }, "Response from seller: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, this.props.review.response));
    } // if a review has photos, render an image and hidden modal until clicked


    if (review.photos.length) {
      photos = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "review-photos"
      }, review.photos.map(image => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewPhotoModal_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
        url: image.url,
        id: image.id,
        key: image.id
      })));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "review-tile"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "review-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "tile-stars"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingStars_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      rating: review.rating
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "user tile-user"
    }, review.reviewer_name, ", ", _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default().convertDate(review.date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "review-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, review.summary), body, showMore, recommend, response, photos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "review-footer"
    }, "Helpful? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      className: "pointer",
      onClick: this.handleHelpful
    }, "Yes"), " ", review.helpfulness, " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      className: "pointer"
    }, "Report")));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewTile);
/*
Each review will be displayed on a single tile within the list.  The tile will display the following information:

Star Rating - This will be the rating given to the product by this individual review..  The rating will be displayed in the format of solid or outlined stars, where the solid stars represent the review score.  A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

Date of review - The date the review was written should appear in the format “Month DD, YYYY”

Review Summary - Reviews submitted will have a one sentence summary. This single sentence will be capped at 60 characters.  On the review tile, this summary will appear in bold font above the full review.

Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product.
The text submitted as part of the review will be between 50 and 1000 characters long.
Users should be able to submit up to 5 images along with a single review.
By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.
Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window.

Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review.  If the reviewer does not recommend the product, nothing will display here.

Reviewer name - The username for the reviewer will appear.  Only the username will appear. No email addresses or other personal information will display.  However, if the user’s email is associated with a sale in the system then next to the username the text “Verified Purchaser” will appear.

Response to Review - Our internal sales team has the ability to respond to any reviews written.  If the review has a corresponding response, this should appear below the reviewer name.  The response should be preceded by the text “Response from seller”, and should be visually distinguished from the rest of the review.

Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful.  At the bottom of the review tile the text “Was this review helpful?” will precede two links “Yes (#)” and “No (#)”.   Following “Yes” and “No” will be the count of users that have selected that button.  Clicking either link should cast a vote for that selection.
A user on the site does not need to be logged in to provide feedback on helpfulness.
A user can provide feedback on any review.  However, they can only make one submission for each review. If the user selects either “Yes” or “No” for a review, they should not be able to select another option again for that review.

*/

/***/ }),

/***/ "./client/reviews/Reviews.jsx":
/*!************************************!*\
  !*** ./client/reviews/Reviews.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReviewList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewList.jsx */ "./client/reviews/ReviewList.jsx");
/* harmony import */ var _Breakdown_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Breakdown.jsx */ "./client/reviews/Breakdown.jsx");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviewHelpers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







class Reviews extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isLoaded: false
    };
  }

  getReviews() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var response = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get("/reviews/?count=100&sort=relevant&product_id=".concat(_this.props.productId));
        var reviews = response.data;
        return reviews;
      } catch (err) {
        console.log('Error fetching review data');
      }
    })();
  }

  getMetaData() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        var response = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get("/reviews/meta?product_id=".concat(_this2.props.productId));
        var metaData = response.data;
        return metaData;
      } catch (err) {
        console.log('Error fetching review meta data');
      }
    })();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.getReviews().then(data => {
        this.setState({
          reviews: (0,_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_4__.sortRelevantReviews)(data.results),
          productId: Number(data.product)
        });
      });
    }
  }

  componentDidMount() {
    this.getReviews().then(data => {
      this.setState({
        reviews: (0,_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_4__.sortRelevantReviews)(data.results),
        productId: Number(data.product),
        isLoaded: true
      }); // return this.getMetaData()
    }); // .then((metaData) => {
    //   this.setState({
    //     metaData: metaData,
    //     isLoaded: true
    //   })
    //   console.log('metadata', metaData)
    // })
  }

  render() {
    if (!this.state.isLoaded) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "ratings-reviews"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading..."));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ratings-reviews"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        id: "rr-title"
      }, "Ratings and Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "rr-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Breakdown_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
        productId: this.props.productId,
        metaData: this.state.metaData,
        isLoaded: this.state.isLoaded
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewList_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
        reviews: this.state.reviews,
        handleSort: this.handleSort,
        productId: this.props.productId,
        productName: this.props.productName
      })));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

/***/ }),

/***/ "./client/reviews/SortOptions.jsx":
/*!****************************************!*\
  !*** ./client/reviews/SortOptions.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var SortOptions = props => {
  var reviewNumber = props.reviews.length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sort-options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, reviewNumber, " reviews, sorted by "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: props.sorting,
    onChange: e => props.handleSort(e)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "relevant"
  }, "relevance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "helpful"
  }, "helpful"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "newest"
  }, "newest")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortOptions);

/***/ }),

/***/ "./client/reviews/reviewHelpers.js":
/*!*****************************************!*\
  !*** ./client/reviews/reviewHelpers.js ***!
  \*****************************************/
/***/ ((module) => {

// Get average rating for stars to nearest 0.25
var getAvgRating = data => {
  var total = 0;
  var ratings = 0;

  for (var key in data) {
    total += Number(key) * Number(data[key]);
    ratings += Number(data[key]);
  }

  var average = total / ratings;
  return (Math.round(average * 4) / 4).toFixed(2);
}; // Convert star/bar ratings to percentage for CSS


var ratingConverter = (rating, divisor) => {
  return rating / divisor * 100;
}; // Get total number of ratings


var getRatingTotal = data => {
  var ratings = 0;

  for (var key in data) {
    ratings += Number(data[key]);
  }

  return ratings;
}; // Get total number of recommends


var getRecTotal = data => {
  var recs = 0;

  for (var key in data) {
    recs += Number(data[key]);
  }

  return recs;
}; // Convert date to MONTH/DD/YYYY format


var convertDate = date => {
  var months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  var month = months[date.slice(5, 7)];
  var day = date.slice(8, 10);
  var year = date.slice(0, 4);
  return "".concat(month, " ").concat(day, ", ").concat(year);
};

var charsTable = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};

var sortRelevantReviews = reviews => {
  var newestReviews = reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  newestReviews.map((review, index) => {
    review.rank = index / 4;
  });
  var helpfulReviews = reviews.sort((a, b) => b.helpfulness - a.helpfulness);
  helpfulReviews.map((review, index) => {
    review.rank += index;
  });
  return reviews.sort((a, b) => a.rank - b.rank);
};

module.exports = {
  getAvgRating: getAvgRating,
  getRatingTotal: getRatingTotal,
  getRecTotal: getRecTotal,
  ratingConverter: ratingConverter,
  convertDate: convertDate,
  charsTable: charsTable,
  sortRelevantReviews: sortRelevantReviews
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcXVlc3Rpb25zL2FkZGVkUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcXVlc3Rpb25zL2Fuc3dlclBob3Rvcy5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3Jldmlld3MvQWRkUmV2aWV3LmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcmV2aWV3cy9CcmVha2Rvd24uanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1Byb2R1Y3RCcmVha2Rvd24uanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1JhdGluZ0JhcnMuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1JhdGluZ0JyZWFrZG93bi5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3Jldmlld3MvUmF0aW5nU3RhcnMuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1Jldmlld0xpc3QuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1Jldmlld1Bob3RvTW9kYWwuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1Jldmlld1RpbGUuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1Jldmlld3MuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL1NvcnRPcHRpb25zLmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcmV2aWV3cy9yZXZpZXdIZWxwZXJzLmpzIl0sIm5hbWVzIjpbIkFkZGVkUGhvdG9zIiwicGhvdG9zIiwibWFwIiwicGhvdG8iLCJpIiwiQW5zd2VyUGhvdG9zIiwiZmlsZXMiLCJ1cGRhdGVQaG90b3MiLCJsZW5ndGgiLCJlIiwiQWRkUmV2aWV3IiwicHJvcHMiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJ1c2VTdGF0ZSIsInJlY29tbWVuZCIsInNldFJlY29tbWVuZCIsImNoYXJhY3RlcmlzdGljcyIsInNldENoYXJzIiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJib2R5Iiwic2V0Qm9keSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInNldFBob3RvcyIsImNoYXJzRW50cnkiLCJtZXRhRGF0YSIsImNoYXJzIiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUNoYXJFbnRyeSIsIm5hbSIsInRhcmdldCIsInZhbCIsIk51bWJlciIsInZhbHVlIiwicHJldlN0YXRlIiwiY2hhciIsImNoYXJJZCIsImlkIiwiY2hhcnNUYWJsZSIsIm9wdGlvbiIsImluZGV4IiwicmV2aWV3Qm9keUNvdW50Iiwic2hvdyIsIm1pc3NpbmdGaWVsZHNBbGVydCIsInRlbXBsYXRlIiwiYWxlcnQiLCJhZGRQaG90b3MiLCJmaWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJjb25jYXQiLCJzdWJtaXRSZXZpZXciLCJwb3N0Qm9keSIsInByb2R1Y3RfaWQiLCJwcm9kdWN0SWQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVDbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsInByb2R1Y3ROYW1lIiwiQnJlYWtkb3duIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiaXNMb2FkZWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJyZXMiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwicmF0aW5ncyIsInJlY29tbWVuZGVkIiwiUHJvZHVjdEJyZWFrZG93biIsInNsaWRlciIsImRlc2NyaXB0aW9uIiwiUmF0aW5nQmFycyIsInRvdGFsIiwiaGVscGVyIiwiZW1wdHlCYXIiLCJzdGFycyIsInN0YXIiLCJiYXJXaWR0aCIsIlJhdGluZ0JyZWFrZG93biIsInNldFN0YXIiLCJ1c2VFZmZlY3QiLCJzdGFyQXZlcmFnZSIsInRvdGFsUmVjcyIsInJlY29tbWVuZFBjdCIsIk1hdGgiLCJyb3VuZCIsIlJhdGluZ1N0YXJzIiwic2l6ZSIsInN0YXJTdHlsZSIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwic3RhclBlcmNlbnQiLCJwZXJjZW50IiwiUmV2aWV3TGlzdCIsInNob3dBZGQiLCJjb3VudCIsInNvcnRpbmciLCJoYW5kbGVNb3JlUmV2aWV3cyIsImJpbmQiLCJoYW5kbGVBZGRSZXZpZXciLCJoYW5kbGVTb3J0IiwiaGVscGZ1bFJldmlld3MiLCJyZXZpZXdzIiwic29ydCIsImEiLCJiIiwiaGVscGZ1bG5lc3MiLCJzb3J0UmVsZXZhbnRSZXZpZXdzIiwibmV3ZXN0UmV2aWV3cyIsIkRhdGUiLCJwYXJzZSIsImRhdGUiLCJzbGljZSIsInRpbGVzIiwicmV2aWV3IiwibW9yZVJldmlld3MiLCJSZXZpZXdQaG90b01vZGFsIiwic2V0U2hvdyIsIm1vZGFsIiwiUmV2aWV3VGlsZSIsImhlbHBmdWxDbGlja2VkIiwic2hvd0JvZHkiLCJoYW5kbGVIZWxwZnVsIiwiaGFuZGxlU2hvd01vcmUiLCJzdWJzdHIiLCJzaG93TW9yZSIsInJlc3BvbnNlIiwiaW1hZ2UiLCJyZXZpZXdlcl9uYW1lIiwiUmV2aWV3cyIsImdldFJldmlld3MiLCJnZXRNZXRhRGF0YSIsInJlc3VsdHMiLCJwcm9kdWN0IiwiU29ydE9wdGlvbnMiLCJyZXZpZXdOdW1iZXIiLCJnZXRBdmdSYXRpbmciLCJrZXkiLCJhdmVyYWdlIiwidG9GaXhlZCIsInJhdGluZ0NvbnZlcnRlciIsImRpdmlzb3IiLCJnZXRSYXRpbmdUb3RhbCIsImdldFJlY1RvdGFsIiwicmVjcyIsImNvbnZlcnREYXRlIiwibW9udGhzIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwiU2l6ZSIsIldpZHRoIiwiQ29tZm9ydCIsIlF1YWxpdHkiLCJMZW5ndGgiLCJGaXQiLCJyYW5rIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFB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QUFDZnRCLGNBQVksRUFBRUEsWUFEQztBQUVmTSxnQkFBYyxFQUFFQSxjQUZEO0FBR2ZDLGFBQVcsRUFBRUEsV0FIRTtBQUlmSCxpQkFBZSxFQUFFQSxlQUpGO0FBS2ZLLGFBQVcsRUFBRUEsV0FMRTtBQU1mMUgsWUFBVSxFQUFFQSxVQU5HO0FBT2ZvRixxQkFBbUIsRUFBRUE7QUFQTixDQUFqQixDIiwiZmlsZSI6ImNsaWVudF9yZXZpZXdzX1Jldmlld3NfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFkZGVkUGhvdG9zID0gKHtwaG90b3N9KSA9PiB7XG5cbiAgcmV0dXJuIChcblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG90by1saXN0XCI+XG4gICAgICB7cGhvdG9zLm1hcCgocGhvdG8sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpfSBzcmM9e3Bob3RvfSBjbGFzc05hbWU9XCJhbnN3ZXItaW1nXCI+PC9pbWc+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRlZFBob3RvczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBbnN3ZXJQaG90b3MgPSAoe2ZpbGVzLCB1cGRhdGVQaG90b3N9KSA9PiB7XG5cbiAgaWYgKGZpbGVzLmxlbmd0aCA8IDUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCIgaHRtbEZvcj1cInVwbG9hZC1waG90b1wiPlxuICAgICAgICA8aW5wdXQgaWQ9XCJ1cGxvYWQtcGhvdG9cIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17KGUpPT4gdXBkYXRlUGhvdG9zKGUpfT48L2lucHV0PlxuICAgICAgICBVcGxvYWQgUGhvdG9zPC9sYWJlbD5cbiAgICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyUGhvdG9zOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBjaGFyc1RhYmxlIH0gZnJvbSAnLi9yZXZpZXdIZWxwZXJzLmpzJztcbmltcG9ydCBBbnN3ZXJQaG90b3MgZnJvbSAnLi4vcXVlc3Rpb25zL2Fuc3dlclBob3Rvcy5qc3gnO1xuaW1wb3J0IEFkZGVkUGhvdG9zIGZyb20gJy4uL3F1ZXN0aW9ucy9hZGRlZFBob3Rvcy5qc3gnO1xuXG5jb25zdCBBZGRSZXZpZXcgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVjb21tZW5kLCBzZXRSZWNvbW1lbmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjaGFyYWN0ZXJpc3RpY3MsIHNldENoYXJzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwaG90b3MsIHNldFBob3Rvc10gPSB1c2VTdGF0ZShbXSk7XG5cblxuICBjb25zdCBjaGFyc0VudHJ5ID0gKGUpID0+IHtcbiAgICBsZXQgeyBjaGFyYWN0ZXJpc3RpY3MgfSA9IHByb3BzLm1ldGFEYXRhO1xuICAgIGxldCBjaGFycyA9IE9iamVjdC5rZXlzKGNoYXJhY3RlcmlzdGljcyk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFyRW50cnkgPSAoZSkgPT4ge1xuICAgICAgbGV0IG5hbSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgICBsZXQgdmFsID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldENoYXJzKHByZXZTdGF0ZSA9PiAoey4uLnByZXZTdGF0ZSwgW25hbV06IHZhbH0pKVxuICAgIH1cblxuICAgIC8vIHVzaW5nIGNoYXJzIHRhYmxlIGZyb20gaGVscGVyIGZpbGVcbiAgICByZXR1cm4gY2hhcnMubWFwKGNoYXIgPT4ge1xuICAgICAgbGV0IGNoYXJJZCA9IGNoYXJhY3RlcmlzdGljc1tjaGFyXS5pZDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXZpZXctY2hhcnMnIGtleT17Y2hhcklkfT5cbiAgICAgICAgICA8bGFiZWw+e2NoYXJ9PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3LWNoYXJzLWVudHJ5Jz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hhcnNUYWJsZVtjaGFyXS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcblxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBvbkNsaWNrPXtlID0+IGhhbmRsZUNoYXJFbnRyeShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPXtjaGFySWR9IHZhbHVlPXtpbmRleCArIDF9PjwvaW5wdXQ+e29wdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICkpXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmV2aWV3Qm9keUNvdW50ID0gKCkgPT4ge1xuICAgIGlmIChib2R5Lmxlbmd0aCA8IDUwKSB7XG4gICAgICByZXR1cm4gYE1pbmltdW0gcmVxdWlyZWQgY2hhcmFjdGVycyBsZWZ0OiAkezUwIC0gYm9keS5sZW5ndGh9YDtcbiAgICB9XG4gICAgcmV0dXJuIGBNaW5pbXVtIHJlYWNoZWRgO1xuICB9XG5cbiAgaWYgKCFwcm9wcy5zaG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG5cbiAgbGV0IG1pc3NpbmdGaWVsZHNBbGVydCA9ICgpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBgWW91IG11c3QgZW50ZXIgdGhlIGZvbGxvd2luZzpgXG4gICAgaWYgKHJhdGluZyA9PT0gMCkge1xuICAgICAgdGVtcGxhdGUgKz0gYFxuICAgICAgLSBPdmVyYWxsIFJhdGluZypgXG4gICAgfVxuICAgIGlmIChyZWNvbW1lbmQgPT09IG51bGwpIHtcbiAgICAgIHRlbXBsYXRlICs9IGBcbiAgICAgIC0gRG8geW91IHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q/KmBcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYXJhY3RlcmlzdGljcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhwcm9wcy5tZXRhRGF0YS5jaGFyYWN0ZXJpc3RpY3MpLmxlbmd0aCkge1xuICAgICAgdGVtcGxhdGUgKz0gYFxuICAgICAgLSBDaGFyYWN0ZXJpc3RpY3MqYFxuICAgIH1cbiAgICBpZiAoYm9keS5sZW5ndGggPCA1MCkge1xuICAgICAgdGVtcGxhdGUgKz0gYFxuICAgICAgLSBSZXZpZXcgQm9keSpgXG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnJykge1xuICAgICAgdGVtcGxhdGUgKz0gYFxuICAgICAgLSBXaGF0IGlzIHlvdXIgbmlja25hbWUqYFxuICAgIH1cbiAgICBpZiAoZW1haWwgPT09ICcnKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBgXG4gICAgICAtIFlvdXIgZW1haWwqYFxuICAgIH1cblxuICAgIGlmICh0ZW1wbGF0ZSAhPT0gYFlvdSBtdXN0IGVudGVyIHRoZSBmb2xsb3dpbmc6YCkge1xuICAgICAgYWxlcnQodGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZFBob3RvcyA9IChlKSA9PiB7XG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSlcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwiYmppM2JqYXNcIilcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9ocnJwcDI4ZmVjL2ltYWdlL3VwbG9hZFwiLFxuICAgICAgZGF0YTogZm9ybURhdGFcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRQaG90b3MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5jb25jYXQoW2RhdGEuZGF0YS51cmxdKSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc3VibWl0UmV2aWV3ID0gKCkgPT4ge1xuICAgIGxldCBwb3N0Qm9keSA9IHtcbiAgICAgIHByb2R1Y3RfaWQ6IHByb3BzLnByb2R1Y3RJZCxcbiAgICAgIHJhdGluZzogcmF0aW5nLFxuICAgICAgc3VtbWFyeTogc3VtbWFyeSxcbiAgICAgIGJvZHk6IGJvZHksXG4gICAgICByZWNvbW1lbmQ6IHJlY29tbWVuZCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBwaG90b3M6IHBob3RvcyxcbiAgICAgIGNoYXJhY3RlcmlzdGljczogY2hhcmFjdGVyaXN0aWNzXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ3JldmlldyBib2R5IGJlaW5nIHBvc3RlZCcsIHBvc3RCb2R5KTtcbiAgICBtaXNzaW5nRmllbGRzQWxlcnQoKTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogYC9yZXZpZXdzYCxcbiAgICAgIGRhdGE6IHBvc3RCb2R5XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhgUmV2aWV3IHN1Y2Nlc3NmdWxseSBwb3N0ZWRgKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ0Vycm9yIHBvc3RpbmcgcmV2aWV3JykpXG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jldmlldy1tb2RhbCcgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xvc2V9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jldmlldy1jb250ZW50JyBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkcmV2aWV3LWhlYWRlcic+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncmV2aWV3LXRpdGxlJz4gV3JpdGUgWW91ciBSZXZpZXc8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdleGl0IHBvaW50ZXInIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsb3NlfT5YPC9kaXY+XG4gICAgICAgICAgPGgzPkFib3V0IHRoZSB7cHJvcHMucHJvZHVjdE5hbWV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cbiAgICAgICAgICA8bGFiZWw+T3ZlcmFsbCBSYXRpbmcqPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1zdGFyc1wiPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17ZSA9PiBzZXRSYXRpbmcoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhdGluZ1wiIGlkPVwic3RyMVwiIHZhbHVlPVwiMVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtlID0+IHNldFJhdGluZyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmF0aW5nXCIgaWQ9XCJzdHIyXCIgdmFsdWU9XCIyXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2UgPT4gc2V0UmF0aW5nKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYXRpbmdcIiBpZD1cInN0cjNcIiB2YWx1ZT1cIjNcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17ZSA9PiBzZXRSYXRpbmcoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhdGluZ1wiIGlkPVwic3RyNFwiIHZhbHVlPVwiNFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtlID0+IHNldFJhdGluZyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmF0aW5nXCIgaWQ9XCJzdHI1XCIgdmFsdWU9XCI1XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+RG8geW91IHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q/KjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jldmlldy1yZWNvbW1lbmQnID5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2UgPT4gc2V0UmVjb21tZW5kKChlLnRhcmdldC52YWx1ZSA9PT0gJ3RydWUnKSl9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J3JlY29tbWVuZCcgdmFsdWU9J3RydWUnPjwvaW5wdXQ+WWVzPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17ZSA9PiBzZXRSZWNvbW1lbmQoKGUudGFyZ2V0LnZhbHVlID09PSAndHJ1ZScpKX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0ncmVjb21tZW5kJyB2YWx1ZT0nZmFsc2UnPjwvaW5wdXQ+Tm88L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsPkNoYXJhY3RlcmlzdGljcyo8L2xhYmVsPlxuICAgICAgICAgICAge2NoYXJzRW50cnkoKX1cbiAgICAgICAgICA8bGFiZWw+UmV2aWV3IFN1bW1hcnk8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXZpZXctdGV4dCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJzdW1tYXJ5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZSA9PiBzZXRTdW1tYXJ5KGUudGFyZ2V0LnZhbHVlKX0gbWF4TGVuZ3RoPVwiNjBcIiBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IEJlc3QgcHVyY2hhc2UgZXZlciFcIj5cbiAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsPlJldmlldyBCb2R5KjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jldmlldy10ZXh0Jz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cInJldmlldy1ib2R5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZSA9PiBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKX0gbWF4TGVuZ3RoPVwiMTAwMFwiIHBsYWNlaG9sZGVyPVwiV2h5IGRpZCB5b3UgbGlrZSB0aGUgcHJvZHVjdCBvciBub3Q/XCI+XG4gICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPntyZXZpZXdCb2R5Q291bnQoKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsPldoYXQgaXMgeW91ciBuaWNrbmFtZSo8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXZpZXctdGV4dCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJuaWNrbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IG1heExlbmd0aD1cIjYwXCIgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrc29uMTEhXCI+XG4gICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPkZvciBwcml2YWN5IHJlYXNvbnMsIGRvIG5vdCB1c2UgeW91ciBmdWxsIG5hbWUgb3IgZW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+WW91ciBlbWFpbCo8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXZpZXctdGV4dCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gbWF4TGVuZ3RoPVwiNjBcIiBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IGphY2tzb24xMUBlbWFpbC5jb21cIj5cbiAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+Rm9yIGF1dGhlbnRpY2F0aW9uIHJlYXNvbnMsIHlvdSB3aWxsIG5vdCBiZSBlbWFpbGVkPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxBZGRlZFBob3RvcyBwaG90b3M9e3Bob3Rvc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgIDxBbnN3ZXJQaG90b3MgdXBkYXRlUGhvdG9zPXthZGRQaG90b3N9IGZpbGVzPXtwaG90b3N9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItc3VibWl0XCIgb25DbGljaz17KCkgPT4gc3VibWl0UmV2aWV3KCl9PlN1Ym1pdCBSZXZpZXc8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRSZXZpZXc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmF0aW5nQnJlYWtkb3duIGZyb20gJy4vUmF0aW5nQnJlYWtkb3duLmpzeCc7XG5pbXBvcnQgUHJvZHVjdEJyZWFrZG93biBmcm9tICcuL1Byb2R1Y3RCcmVha2Rvd24uanN4JztcblxuY2xhc3MgQnJlYWtkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1ldGFEYXRhOiB7fSxcbiAgICAgIGlzTG9hZGVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAvLyBpZiAocHJldlByb3BzLmlzTG9hZGVkICE9PSB0aGlzLnByb3BzLmlzTG9hZGVkKSB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkZWQ6IHRoaXMucHJvcHMuaXNMb2FkZWQgfSlcbiAgICAvLyB9XG4gICAgaWYocHJldlByb3BzLnByb2R1Y3RJZCAhPT0gdGhpcy5wcm9wcy5wcm9kdWN0SWQpe1xuICAgICAgYXhpb3MuZ2V0KGAvcmV2aWV3cy9tZXRhP3Byb2R1Y3RfaWQ9JHt0aGlzLnByb3BzLnByb2R1Y3RJZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXRhRGF0YTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgcmV2aWV3IG1ldGEgZGF0YScsIGVycik7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zLmdldChgL3Jldmlld3MvbWV0YT9wcm9kdWN0X2lkPSR7dGhpcy5wcm9wcy5wcm9kdWN0SWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWV0YURhdGE6IHJlcy5kYXRhLFxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIHJldmlldyBtZXRhIGRhdGEnLCBlcnIpO1xuICAgICAgfSlcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHJhdGluZ3MsIHJlY29tbWVuZGVkLCBjaGFyYWN0ZXJpc3RpY3MgfSA9IHRoaXMuc3RhdGUubWV0YURhdGE7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJicmVha2Rvd25cIj5cbiAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmVha2Rvd24nPlxuICAgICAgICAgIDxSYXRpbmdCcmVha2Rvd24gcmF0aW5ncz17cmF0aW5nc30gcmVjb21tZW5kZWQ9e3JlY29tbWVuZGVkfS8+XG4gICAgICAgICAgPFByb2R1Y3RCcmVha2Rvd24gY2hhcmFjdGVyaXN0aWNzPXtjaGFyYWN0ZXJpc3RpY3N9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFrZG93bjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2hhcnNUYWJsZSB9IGZyb20gJy4vcmV2aWV3SGVscGVycy5qcyc7XG5cbmNvbnN0IFByb2R1Y3RCcmVha2Rvd24gPSAoe2NoYXJhY3RlcmlzdGljc30pID0+IHtcbiAgbGV0IGNoYXJzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyaXN0aWNzKVxuXG4gIGlmICghY2hhcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWJyZWFrZG93bic+XG4gICAgICAgIHtcbiAgICAgICAgICBjaGFycy5tYXAoKGNoYXIpID0+IHtcbiAgICAgICAgICAgIGxldCBzbGlkZXIgPSAoY2hhciA9PT0gJ0NvbWZvcnQnIHx8IGNoYXIgPT09ICdRdWFsaXR5JykgPyAnc2xpZGVyNCcgOiAnc2xpZGVyMyc7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSAoY2hhciA9PT0gJ0NvbWZvcnQnIHx8IGNoYXIgPT09ICdRdWFsaXR5JykgP1xuICAgICAgICAgICAgICA8ZGl2IGlkPSdjaGFyLWRlc2MnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57Y2hhcnNUYWJsZVtjaGFyXVswXX08L2xhYmVsPiA8bGFiZWw+e2NoYXJzVGFibGVbY2hhcl1bNF19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDogPGRpdiBpZD0nY2hhci1kZXNjJz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD57Y2hhcnNUYWJsZVtjaGFyXVswXX08L2xhYmVsPiA8bGFiZWw+e2NoYXJzVGFibGVbY2hhcl1bMl19PC9sYWJlbD4gPGxhYmVsPntjaGFyc1RhYmxlW2NoYXJdWzRdfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhci1iYXInIGtleT17Y2hhcmFjdGVyaXN0aWNzW2NoYXJdLmlkfT5cbiAgICAgICAgICAgICAgICA8cCBpZD0nY2hhci10aXRsZSc+e2NoYXJ9PC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWFkT25seSB0eXBlPVwicmFuZ2VcIiBtaW49XCIxXCIgbWF4PVwiNVwiIHZhbHVlPXtjaGFyYWN0ZXJpc3RpY3NbY2hhcl0udmFsdWV9IGNsYXNzTmFtZT17c2xpZGVyfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RCcmVha2Rvd247XG5cbi8qXG5Qcm9kdWN0IEJyZWFrZG93biAoRmFjdG9ycylcblJldmlld3Mgd2lsbCBwcm92aWRlIGFiaWxpdHkgdG8gZ2l2ZSBmZWVkYmFjayBvbiBzcGVjaWZpYyBjaGFyYWN0ZXJpc3RpY3Mgb2YgdGhlIHByb2R1Y3QuICAgVGhlIGNoYXJhY3RlcmlzdGljcyBpbmNsdWRlIFNpemUsIFdpZHRoLCBDb21mb3J0LCBRdWFsaXR5LCBMZW5ndGgsIGFuZCBGaXQuICAgT25lIG9yIG1vcmUgb2YgdGhlc2UgbWF5IGJlIHJlbGV2YW50IGZvciBhIHByb2R1Y3QuICBJbiB0aGUgUmV2aWV3cyBtb2R1bGUsIHRoZSBhdmVyYWdlIGZlZWRiYWNrIHJlY2VpdmVkIHdpbGwgYmUgZGlzcGxheWVkIGZvciBhbGwgY2hhcmFjdGVyaXN0aWNzIHdoaWNoIGFwcGx5IHRvIHRoZSBwcm9kdWN0LlxuRmVlZGJhY2sgZm9yIGNoYXJhY3RlcmlzdGljcyB3aWxsIGJlIG9uIGEgNSBwb2ludCBzY2FsZS4gIFRoZSByYW5nZSBvZiB0aGlzIHNjYWxlIHdpbGwgZGVwZW5kIG9uIHRoZSBjaGFyYWN0ZXJpc3RpYyBpbiBxdWVzdGlvbi4gIEZvciBleGFtcGxlLCBTaXplIGNhbiByYW5nZSBmcm9tICgxKSDigJx0b28gc21hbGzigJ0gdG8gKDUpIOKAnHRvbyBiaWfigJ0sIHdpdGggdGhlIG1pZGRsZSBvcHRpb24gKDMpIGJlaW5nIOKAnHBlcmZlY3TigJ0uICBVc2luZyB0aGUgc2FtZSA1IHBvaW50IHNjYWxlIGZvciBRdWFsaXR5LCBob3dldmVyLCB0aGUgc2NhbGUgd291bGQgcmFuZ2UgZnJvbSAoMSkg4oCccG9vcuKAnSB0byAoNSkg4oCcZ3JlYXTigJ0uXG5SZWdhcmRsZXNzIG9mIHdoYXQgdGhlIHJhbmdlIG9mIHRoZSBzY2FsZSByZXByZXNlbnRzLCB0aGUgNSBwb2ludCBzY2FsZSB3aWxsIGRpc3BsYXkgdGhlIHNhbWUgZm9yIGFsbCBvZiB0aGUgY2hhcmFjdGVyaXN0aWNzIG9mIHRoZSBwcm9kdWN0LiAgRWFjaCB3aWxsIGFwcGVhciBhcyBhIGdyZXkgYmFyIHNpbWlsYXIgdG8gdGhlIHJhdGluZyBicmVha2Rvd24uICBBYm92ZSB0aGUgYmFyLCBhIGxhYmVsIHdpbGwgc3RhdGUgdGhlIGNoYXJhY3RlcmlzdGljLiAgQmVsb3cgdGhlIGJhciwgdGhlIG1lYW5pbmcgb2YgdGhlIGxvd2VzdCBzZWxlY3Rpb24gKDEpIGFuZCB0aGUgaGlnaGVzdCBzZWxlY3Rpb24gKDUpIHdpbGwgYXBwZWFyLiAgIE9uIHRoZSBiYXIsIGEgc2luZ2xlIGljb24gd2lsbCBhcHBlYXIgcmVwcmVzZW50aW5nIHRoZSBhdmVyYWdlIHZhbHVlIHJlY2VpdmVkIHZpYSByZXZpZXdzIHN1Ym1pdHRlZC4gIFRoZSBpY29uIHNob3VsZCBhcHBlYXIgaG9yaXpvbnRhbGx5IGZyb20gdGhlIGxlZnQgZWRnZSBvZiB0aGUgYmFyIHN1Y2ggdGhhdCBpdCByZXByZXNlbnRzIHRoZSBhdmVyYWdlIGlucHV0IGZvciB0aGUgY2hhcmFjdGVyaXN0aWMuICBGb3IgZXhhbXBsZSwgaWYgdGhlIGF2ZXJhZ2UgaXMgNSwgdGhlIGljb24gc2hvdWxkIGFwcGVhciBhbGwgdGhlIHdheSB0byB0aGUgcmlnaHQuICBBbiBhdmVyYWdlIG9mIDMgc2hvdWxkIGFwcGVhciBpbiB0aGUgbWlkZGxlLlxuXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vcmV2aWV3SGVscGVycy5qcyc7XG5cblxuY29uc3QgUmF0aW5nQmFycyA9ICh7cmF0aW5nc30pID0+IHtcbiAgbGV0IHRvdGFsID0gaGVscGVyLmdldFJhdGluZ1RvdGFsKHJhdGluZ3MpO1xuICBsZXQgZW1wdHlCYXIgPSB7ICctLXdpZHRoJzogYDAlYCB9O1xuICBsZXQgc3RhcnMgPSBbNSwgNCwgMywgMiwgMV1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmctYmFycyc+XG4gICAge1xuICAgICAgc3RhcnMubWFwKChzdGFyKSA9PiB7XG4gICAgICAgIGxldCBiYXJXaWR0aCA9IChyYXRpbmdzW3N0YXJdKSA/IHsgJy0td2lkdGgnOiBgJHtoZWxwZXIucmF0aW5nQ29udmVydGVyKHJhdGluZ3Nbc3Rhcl0sIHRvdGFsKX0lYCB9IDogZW1wdHlCYXI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nLWJhcicga2V5PXtzdGFyfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e3N0YXJ9IHN0YXJzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHkgdHlwZT1cInJhbmdlXCIgbWluPVwiMVwiIG1heD1cIjVcIiB2YWx1ZT0nMScgY2xhc3NOYW1lPVwic3Rhci1zbGlkZXJcIiBzdHlsZT17YmFyV2lkdGh9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ0JhcnM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhdGluZ1N0YXJzIGZyb20gJy4vUmF0aW5nU3RhcnMuanN4JztcbmltcG9ydCBSYXRpbmdCYXJzIGZyb20gJy4vUmF0aW5nQmFycy5qc3gnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL3Jldmlld0hlbHBlcnMuanMnO1xuXG5jb25zdCBSYXRpbmdCcmVha2Rvd24gPSAoe3JhdGluZ3MsIHJlY29tbWVuZGVkfSkgPT4ge1xuICBjb25zdCBbc3Rhciwgc2V0U3Rhcl0gPSB1c2VTdGF0ZShyYXRpbmdzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4geyBzZXRTdGFyKHJhdGluZ3MpIH0sIFtyYXRpbmdzXSk7XG5cbiAgaWYoT2JqZWN0LmtleXMocmF0aW5ncykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmctYnJlYWtkb3duJz5cbiAgICAgIDxwPlJhdGluZyBCcmVha2Rvd248L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nLXN0YXJzJz5cbiAgICAgICAgPGgyPjA8L2gyPlxuICAgICAgICA8UmF0aW5nU3RhcnMgcmF0aW5nPXswfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPjAlIG9mIHJldmlld3MgcmVjb21tZW5kIHRoaXMgcHJvZHVjdDwvcD5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBsZXQgc3RhckF2ZXJhZ2UgPSBoZWxwZXIuZ2V0QXZnUmF0aW5nKHJhdGluZ3MpO1xuICBsZXQgdG90YWxSZWNzID0gaGVscGVyLmdldFJlY1RvdGFsKHJlY29tbWVuZGVkKTtcbiAgbGV0IHJlY29tbWVuZFBjdCA9IE1hdGgucm91bmQoaGVscGVyLnJhdGluZ0NvbnZlcnRlcihyZWNvbW1lbmRlZFsndHJ1ZSddLCB0b3RhbFJlY3MpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmctYnJlYWtkb3duJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmctc3RhcnMnPlxuICAgICAgICA8cCBpZD0nc3Rhci1hdmVyYWdlJz57c3RhckF2ZXJhZ2V9PC9wPlxuICAgICAgICA8UmF0aW5nU3RhcnMgcmF0aW5nPXtzdGFyQXZlcmFnZX0gc2l6ZT17MzB9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e3JlY29tbWVuZFBjdH0lIG9mIHJldmlld3MgcmVjb21tZW5kIHRoaXMgcHJvZHVjdDwvcD5cbiAgICAgIDxSYXRpbmdCYXJzIHJhdGluZ3M9e3JhdGluZ3N9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nQnJlYWtkb3duOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vcmV2aWV3SGVscGVycy5qcyc7XG5cblxuY29uc3QgUmF0aW5nU3RhcnMgPSAoe3JhdGluZywgc2l6ZX0pID0+IHtcbiAgbGV0IHN0YXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBmb250RmFtaWx5OiAnVGltZXMnLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgIGZvbnRTaXplOiBgJHtzaXplfXB4YCxcbiAgfVxuXG4gIGxldCBzdGFyUGVyY2VudCA9IGhlbHBlci5yYXRpbmdDb252ZXJ0ZXIocmF0aW5nLCA1KTtcbiAgbGV0IHBlcmNlbnQ9IHsgJy0tcGVyY2VudCc6IGAke3N0YXJQZXJjZW50fSVgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhcnMnIHN0eWxlPXt7Li4uc3RhclN0eWxlLCAuLi5wZXJjZW50fX0+PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nU3RhcnM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmV2aWV3VGlsZSBmcm9tICcuL1Jldmlld1RpbGUuanN4JztcbmltcG9ydCBTb3J0T3B0aW9ucyBmcm9tICcuL1NvcnRPcHRpb25zLmpzeCc7XG5pbXBvcnQgQWRkUmV2aWV3IGZyb20gJy4vQWRkUmV2aWV3LmpzeCc7XG5pbXBvcnQgeyBzb3J0UmVsZXZhbnRSZXZpZXdzIH0gZnJvbSAnLi9yZXZpZXdIZWxwZXJzLmpzJztcblxuY2xhc3MgUmV2aWV3TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvcHMucHJvZHVjdElkLFxuICAgICAgc2hvd0FkZDogZmFsc2UsXG4gICAgICBjb3VudDogMixcbiAgICAgIHNvcnRpbmc6ICdyZWxldmFudCdcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVNb3JlUmV2aWV3cyA9IHRoaXMuaGFuZGxlTW9yZVJldmlld3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFkZFJldmlldyA9IHRoaXMuaGFuZGxlQWRkUmV2aWV3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNvcnQgPSB0aGlzLmhhbmRsZVNvcnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVNvcnQoZSkge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ2hlbHBmdWwnKSB7XG4gICAgICBsZXQgaGVscGZ1bFJldmlld3MgPSB0aGlzLnByb3BzLnJldmlld3Muc29ydCgoYSwgYikgPT4gYi5oZWxwZnVsbmVzcyAtIGEuaGVscGZ1bG5lc3MpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29ydGluZzogJ2hlbHBmdWwnXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ3JlbGV2YW50Jykge1xuICAgICAgc29ydFJlbGV2YW50UmV2aWV3cyh0aGlzLnByb3BzLnJldmlld3MpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29ydGluZzogJ3JlbGV2YW50J1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICduZXdlc3QnKSB7XG4gICAgICBsZXQgbmV3ZXN0UmV2aWV3cyA9IHRoaXMucHJvcHMucmV2aWV3cy5zb3J0KChhLCBiKSA9PiBEYXRlLnBhcnNlKGIuZGF0ZSkgLSBEYXRlLnBhcnNlKGEuZGF0ZSkpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc29ydGluZzogJ25ld2VzdCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW9yZVJldmlld3MoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCArPSAyLFxuICAgIH0pKVxuICB9XG5cbiAgaGFuZGxlQWRkUmV2aWV3KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93QWRkKSB7XG4gICAgICBheGlvcy5nZXQoYC9yZXZpZXdzL21ldGE/cHJvZHVjdF9pZD0ke3RoaXMucHJvcHMucHJvZHVjdElkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1ldGFEYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICBzaG93QWRkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIHJldmlldyBtZXRhIGRhdGEnLCBlcnIpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZDogZmFsc2UgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmKHByZXZQcm9wcy5wcm9kdWN0SWQgIT09IHRoaXMucHJvcHMucHJvZHVjdElkKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb3VudDogMixcbiAgICAgICAgc29ydGluZzogJ3JlbGV2YW50J1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnByb3BzLnJldmlld3Muc2xpY2UoMCwgdGhpcy5zdGF0ZS5jb3VudClcbiAgICBsZXQgdGlsZXMgPSAodGhpcy5wcm9wcy5yZXZpZXdzLmxlbmd0aCkgPyAoZGlzcGxheS5tYXAoKHJldmlldywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8UmV2aWV3VGlsZSBrZXk9e2luZGV4fSByZXZpZXc9e3Jldmlld30gLz5cbiAgICB9KSkgOiBgVGhlcmUgYXJlIGN1cnJlbnRseSBubyByZXZpZXdzIGZvciB0aGlzIHByb2R1Y3QuXG4gICAgQmUgdGhlIGZpcnN0IHRvIGxlYXZlIGEgcmV2aWV3IWA7XG4gICAgbGV0IG1vcmVSZXZpZXdzID0gKGRpc3BsYXkubGVuZ3RoID49IHRoaXMucHJvcHMucmV2aWV3cy5sZW5ndGgpID8gbnVsbCA6XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncmV2aWV3LWJ0bicgb25DbGljaz17dGhpcy5oYW5kbGVNb3JlUmV2aWV3c30+TW9yZSBSZXZpZXdzPC9idXR0b24+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXZpZXctY29udGFpbmVyJz5cbiAgICAgICAgPFNvcnRPcHRpb25zIHJldmlld3M9e3RoaXMucHJvcHMucmV2aWV3c30gaGFuZGxlU29ydD17dGhpcy5oYW5kbGVTb3J0fSBzb3J0aW5nPXt0aGlzLnN0YXRlLnNvcnRpbmd9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jldmlldy1saXN0Jz5cbiAgICAgICAgICB7dGlsZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3LWJ1dHRvbnMnPlxuICAgICAgICAgIHttb3JlUmV2aWV3c31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncmV2aWV3LWJ0bicgb25DbGljaz17dGhpcy5oYW5kbGVBZGRSZXZpZXd9PkFkZCBBIFJldmlldyArPC9idXR0b24+XG4gICAgICAgICAgPEFkZFJldmlld1xuICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93QWRkfVxuICAgICAgICAgICAgcHJvZHVjdElkPXt0aGlzLnByb3BzLnByb2R1Y3RJZH1cbiAgICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgbWV0YURhdGE9e3RoaXMuc3RhdGUubWV0YURhdGF9XG4gICAgICAgICAgICBwcm9kdWN0TmFtZT17dGhpcy5wcm9wcy5wcm9kdWN0TmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJldmlld1Bob3RvTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCBtb2RhbCA9ICghc2hvdykgPyBudWxsIDpcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3LW1vZGFsJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0ncGljdHVyZS1tb2RhbCcgc3JjPXtwcm9wcy51cmx9IGFsdD17cHJvcHMuaWR9IG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0vPlxuICAgIDwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPGltZyBzcmM9e3Byb3BzLnVybH0gYWx0PXtwcm9wcy5pZH0gY2xhc3NOYW1lPSdyZXZpZXctcGhvdG8gcG9pbnRlcicgb25DbGljaz17KCkgPT4gc2V0U2hvdyh0cnVlKX0vPlxuICAgICAge21vZGFsfVxuICAgIDwvbGk+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdQaG90b01vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi9SYXRpbmdTdGFycy5qc3gnO1xuaW1wb3J0IFJldmlld1Bob3RvTW9kYWwgZnJvbSAnLi9SZXZpZXdQaG90b01vZGFsLmpzeCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vcmV2aWV3SGVscGVycy5qcyc7XG5cbmNsYXNzIFJldmlld1RpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVscGZ1bG5lc3M6IHRoaXMucHJvcHMucmV2aWV3LmhlbHBmdWxuZXNzLFxuICAgICAgaGVscGZ1bENsaWNrZWQ6IGZhbHNlLFxuICAgICAgc2hvd0JvZHk6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlSGVscGZ1bCA9IHRoaXMuaGFuZGxlSGVscGZ1bC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2hvd01vcmUgPSB0aGlzLmhhbmRsZVNob3dNb3JlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVIZWxwZnVsKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5oZWxwZnVsQ2xpY2tlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVscGZ1bG5lc3M6IHByZXZTdGF0ZS5oZWxwZnVsbmVzcyArIDEsXG4gICAgICAgICAgaGVscGZ1bENsaWNrZWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNob3dNb3JlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Qm9keTogdHJ1ZSB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgcmV2aWV3IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBib2R5ID0gKHJldmlldy5ib2R5Lmxlbmd0aCA+IDI1MCAmJiAhdGhpcy5zdGF0ZS5zaG93Qm9keSkgPyByZXZpZXcuYm9keS5zdWJzdHIoMCwyNTApICsgJy4uLicgOiByZXZpZXcuYm9keTtcbiAgICBsZXQgc2hvd01vcmUgPSAoYm9keSA9PT0gcmV2aWV3LmJvZHkpID8gbnVsbCA6IDx1IGNsYXNzTmFtZT0ncG9pbnRlcicgb25DbGljaz17dGhpcy5oYW5kbGVTaG93TW9yZX0+U2hvdyBtb3JlPC91PlxuICAgIGxldCByZWNvbW1lbmQ7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIGxldCBwaG90b3M7XG5cbiAgICAvLyBkaXNwbGF5IGlmIGEgcmVjb21tZW5kYXRpb24gaXMgcHJlc2VudCBpbiB0aGUgZGF0YVxuICAgIGlmIChyZXZpZXcucmVjb21tZW5kKSB7XG4gICAgICByZWNvbW1lbmQgPSA8cD4mIzEwMDAzOyBJIHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q8L3A+XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBpZiBhIHJlc3BvbnNlIGlzIHByZXNlbnQgaW4gdGhlIGRhdGFcbiAgICBpZiAocmV2aWV3LnJlc3BvbnNlKSB7XG4gICAgICByZXNwb25zZSA9IDxwIGNsYXNzTmFtZT0ncmVzcG9uc2UnPlJlc3BvbnNlIGZyb20gc2VsbGVyOiA8YnI+PC9icj4gPGVtPnt0aGlzLnByb3BzLnJldmlldy5yZXNwb25zZX08L2VtPjwvcD5cbiAgICB9XG5cbiAgICAvLyBpZiBhIHJldmlldyBoYXMgcGhvdG9zLCByZW5kZXIgYW4gaW1hZ2UgYW5kIGhpZGRlbiBtb2RhbCB1bnRpbCBjbGlja2VkXG4gICAgaWYgKHJldmlldy5waG90b3MubGVuZ3RoKSB7XG4gICAgICBwaG90b3MgPSAgPHVsIGNsYXNzTmFtZT0ncmV2aWV3LXBob3Rvcyc+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldmlldy5waG90b3MubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdQaG90b01vZGFsIHVybD17aW1hZ2UudXJsfSBpZD17aW1hZ2UuaWR9IGtleT17aW1hZ2UuaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3LXRpbGUnPlxuICAgICAgICA8ZGl2IGlkPSdyZXZpZXctaGVhZGVyJz5cbiAgICAgICAgICA8ZGl2IGlkPSd0aWxlLXN0YXJzJz5cbiAgICAgICAgICAgIDxSYXRpbmdTdGFycyByYXRpbmc9e3Jldmlldy5yYXRpbmd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd1c2VyIHRpbGUtdXNlcic+e3Jldmlldy5yZXZpZXdlcl9uYW1lfSwge2hlbHBlci5jb252ZXJ0RGF0ZShyZXZpZXcuZGF0ZSl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0ncmV2aWV3LWJvZHknPlxuICAgICAgICAgIDxoND57cmV2aWV3LnN1bW1hcnl9PC9oND5cbiAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICB7c2hvd01vcmV9XG4gICAgICAgICAge3JlY29tbWVuZH1cbiAgICAgICAgICB7cmVzcG9uc2V9XG4gICAgICAgICAge3Bob3Rvc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J3Jldmlldy1mb290ZXInPlxuICAgICAgICAgIEhlbHBmdWw/IDx1IGNsYXNzTmFtZT0ncG9pbnRlcicgb25DbGljaz17dGhpcy5oYW5kbGVIZWxwZnVsfT5ZZXM8L3U+IHtyZXZpZXcuaGVscGZ1bG5lc3N9IHwgPHUgY2xhc3NOYW1lPSdwb2ludGVyJz5SZXBvcnQ8L3U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld1RpbGU7XG5cbi8qXG5FYWNoIHJldmlldyB3aWxsIGJlIGRpc3BsYXllZCBvbiBhIHNpbmdsZSB0aWxlIHdpdGhpbiB0aGUgbGlzdC4gIFRoZSB0aWxlIHdpbGwgZGlzcGxheSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uOlxuXG5TdGFyIFJhdGluZyAtIFRoaXMgd2lsbCBiZSB0aGUgcmF0aW5nIGdpdmVuIHRvIHRoZSBwcm9kdWN0IGJ5IHRoaXMgaW5kaXZpZHVhbCByZXZpZXcuLiAgVGhlIHJhdGluZyB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgZm9ybWF0IG9mIHNvbGlkIG9yIG91dGxpbmVkIHN0YXJzLCB3aGVyZSB0aGUgc29saWQgc3RhcnMgcmVwcmVzZW50IHRoZSByZXZpZXcgc2NvcmUuICBBIHRvdGFsIG9mIDUgc3RhcnMgc2hvdWxkIGFsd2F5cyBhcHBlYXIsIGFuZCB0aGUgYW1vdW50IGZpbGxlZCBpbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgYXZlcmFnZSBzY29yZS5cblRoZSB2aXN1YWwgZm9yIHJhdGluZyBzaG91bGQgYmUgcmVwcmVzZW50YXRpdmUgb2YgdXAgdG8gYSBxdWFydGVyIG9mIGEgcmV2aWV3IHBvaW50LiAgRm9yIGV4YW1wbGUsIGlmIHRoZSBhdmVyYWdlIGlzIDMuOCwgdGhpcyBzaG91bGQgZGlzcGxheSBhcyAzwr4gc29saWQgc3RhcnMgYW5kIDHCvCBvdXRsaW5lZCBzdGFycy5cblxuRGF0ZSBvZiByZXZpZXcgLSBUaGUgZGF0ZSB0aGUgcmV2aWV3IHdhcyB3cml0dGVuIHNob3VsZCBhcHBlYXIgaW4gdGhlIGZvcm1hdCDigJxNb250aCBERCwgWVlZWeKAnVxuXG5SZXZpZXcgU3VtbWFyeSAtIFJldmlld3Mgc3VibWl0dGVkIHdpbGwgaGF2ZSBhIG9uZSBzZW50ZW5jZSBzdW1tYXJ5LiBUaGlzIHNpbmdsZSBzZW50ZW5jZSB3aWxsIGJlIGNhcHBlZCBhdCA2MCBjaGFyYWN0ZXJzLiAgT24gdGhlIHJldmlldyB0aWxlLCB0aGlzIHN1bW1hcnkgd2lsbCBhcHBlYXIgaW4gYm9sZCBmb250IGFib3ZlIHRoZSBmdWxsIHJldmlldy5cblxuUmV2aWV3IEJvZHkgLSBUaGUgcmV2aWV3IGJvZHkgd2lsbCBiZSBhIGZyZWUtZm9ybSBtdWx0aW1lZGlhIGlucHV0IHdoZXJlIHRoZSB1c2VyIGNhbiBzdWJtaXQgdGV4dCBhbmQgaW1hZ2VzIHJlZ2FyZGluZyB0aGVpciBleHBlcmllbmNlIHdpdGggdGhlIHByb2R1Y3QuXG5UaGUgdGV4dCBzdWJtaXR0ZWQgYXMgcGFydCBvZiB0aGUgcmV2aWV3IHdpbGwgYmUgYmV0d2VlbiA1MCBhbmQgMTAwMCBjaGFyYWN0ZXJzIGxvbmcuXG5Vc2VycyBzaG91bGQgYmUgYWJsZSB0byBzdWJtaXQgdXAgdG8gNSBpbWFnZXMgYWxvbmcgd2l0aCBhIHNpbmdsZSByZXZpZXcuXG5CeSBkZWZhdWx0IHRoZSBmaXJzdCAyNTAgY2hhcmFjdGVycyBvZiB0aGUgcmV2aWV3IHNob3VsZCBkaXNwbGF5LiAgSWYgdGhlIHJldmlldyBpcyBsb25nZXIgdGhhbiAyNTAgY2hhcmFjdGVycywgYmVsb3cgdGhlIGJvZHkgYSBsaW5rIHJlYWRpbmcg4oCcU2hvdyBtb3Jl4oCdIHdpbGwgYXBwZWFyLiAgVXBvbiBjbGlja2luZyB0aGlzIGxpbmssIHRoZSByZXZpZXcgdGlsZSBzaG91bGQgZXhwYW5kIGFuZCB0aGUgcmVzdCBvZiB0aGUgcmV2aWV3IHNob3VsZCBkaXNwbGF5LlxuQW55IGltYWdlcyB0aGF0IHdlcmUgc3VibWl0dGVkIGFzIHBhcnQgb2YgdGhlIHJldmlldyBzaG91bGQgYXBwZWFyIGFzIHRodW1ibmFpbHMgYmVsb3cgdGhlIHJldmlldyB0ZXh0LiBVcG9uIGNsaWNraW5nIGEgdGh1bWJuYWlsLCB0aGUgaW1hZ2Ugc2hvdWxkIG9wZW4gaW4gYSBtb2RhbCB3aW5kb3csIGRpc3BsYXlpbmcgYXQgZnVsbCByZXNvbHV0aW9uLiAgVGhlIG9ubHkgZnVuY3Rpb25hbGl0eSBhdmFpbGFibGUgd2l0aGluIHRoaXMgbW9kYWwgc2hvdWxkIGJlIHRoZSBhYmlsaXR5IHRvIGNsb3NlIHRoZSB3aW5kb3cuXG5cblJlY29tbWVuZCAtIElmIHRoZSByZXZpZXdlciByZWNvbW1lbmRzIGJ1eWluZyB0aGUgcHJvZHVjdCwgdGhlIHRleHQg4oCcSSByZWNvbW1lbmQgdGhpcyBwcm9kdWN04oCdIGFuZCBhIGNoZWNrbWFyayBpY29uIHdpbGwgZGlzcGxheSBiZWxvdyB0aGUgcmV2aWV3LiAgSWYgdGhlIHJldmlld2VyIGRvZXMgbm90IHJlY29tbWVuZCB0aGUgcHJvZHVjdCwgbm90aGluZyB3aWxsIGRpc3BsYXkgaGVyZS5cblxuUmV2aWV3ZXIgbmFtZSAtIFRoZSB1c2VybmFtZSBmb3IgdGhlIHJldmlld2VyIHdpbGwgYXBwZWFyLiAgT25seSB0aGUgdXNlcm5hbWUgd2lsbCBhcHBlYXIuIE5vIGVtYWlsIGFkZHJlc3NlcyBvciBvdGhlciBwZXJzb25hbCBpbmZvcm1hdGlvbiB3aWxsIGRpc3BsYXkuICBIb3dldmVyLCBpZiB0aGUgdXNlcuKAmXMgZW1haWwgaXMgYXNzb2NpYXRlZCB3aXRoIGEgc2FsZSBpbiB0aGUgc3lzdGVtIHRoZW4gbmV4dCB0byB0aGUgdXNlcm5hbWUgdGhlIHRleHQg4oCcVmVyaWZpZWQgUHVyY2hhc2Vy4oCdIHdpbGwgYXBwZWFyLlxuXG5SZXNwb25zZSB0byBSZXZpZXcgLSBPdXIgaW50ZXJuYWwgc2FsZXMgdGVhbSBoYXMgdGhlIGFiaWxpdHkgdG8gcmVzcG9uZCB0byBhbnkgcmV2aWV3cyB3cml0dGVuLiAgSWYgdGhlIHJldmlldyBoYXMgYSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlLCB0aGlzIHNob3VsZCBhcHBlYXIgYmVsb3cgdGhlIHJldmlld2VyIG5hbWUuICBUaGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHByZWNlZGVkIGJ5IHRoZSB0ZXh0IOKAnFJlc3BvbnNlIGZyb20gc2VsbGVy4oCdLCBhbmQgc2hvdWxkIGJlIHZpc3VhbGx5IGRpc3Rpbmd1aXNoZWQgZnJvbSB0aGUgcmVzdCBvZiB0aGUgcmV2aWV3LlxuXG5SYXRpbmcgSGVscGZ1bG5lc3MgLSBBbnkgdXNlciBvbiB0aGUgc2l0ZSB3aWxsIGhhdmUgdGhlIGFiaWxpdHkgdG8gcHJvdmlkZSBmZWVkYmFjayBvbiB3aGV0aGVyIHJldmlld3MgYXJlIGhlbHBmdWwuICBBdCB0aGUgYm90dG9tIG9mIHRoZSByZXZpZXcgdGlsZSB0aGUgdGV4dCDigJxXYXMgdGhpcyByZXZpZXcgaGVscGZ1bD/igJ0gd2lsbCBwcmVjZWRlIHR3byBsaW5rcyDigJxZZXMgKCMp4oCdIGFuZCDigJxObyAoIynigJ0uICAgRm9sbG93aW5nIOKAnFllc+KAnSBhbmQg4oCcTm/igJ0gd2lsbCBiZSB0aGUgY291bnQgb2YgdXNlcnMgdGhhdCBoYXZlIHNlbGVjdGVkIHRoYXQgYnV0dG9uLiAgQ2xpY2tpbmcgZWl0aGVyIGxpbmsgc2hvdWxkIGNhc3QgYSB2b3RlIGZvciB0aGF0IHNlbGVjdGlvbi5cbkEgdXNlciBvbiB0aGUgc2l0ZSBkb2VzIG5vdCBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBwcm92aWRlIGZlZWRiYWNrIG9uIGhlbHBmdWxuZXNzLlxuQSB1c2VyIGNhbiBwcm92aWRlIGZlZWRiYWNrIG9uIGFueSByZXZpZXcuICBIb3dldmVyLCB0aGV5IGNhbiBvbmx5IG1ha2Ugb25lIHN1Ym1pc3Npb24gZm9yIGVhY2ggcmV2aWV3LiBJZiB0aGUgdXNlciBzZWxlY3RzIGVpdGhlciDigJxZZXPigJ0gb3Ig4oCcTm/igJ0gZm9yIGEgcmV2aWV3LCB0aGV5IHNob3VsZCBub3QgYmUgYWJsZSB0byBzZWxlY3QgYW5vdGhlciBvcHRpb24gYWdhaW4gZm9yIHRoYXQgcmV2aWV3LlxuXG4qLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi9SZXZpZXdMaXN0LmpzeCc7XG5pbXBvcnQgQnJlYWtkb3duIGZyb20gJy4vQnJlYWtkb3duLmpzeCc7XG5pbXBvcnQgeyBzb3J0UmVsZXZhbnRSZXZpZXdzIH0gZnJvbSAnLi9yZXZpZXdIZWxwZXJzLmpzJztcblxuY2xhc3MgUmV2aWV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXZpZXdzOiBbXSxcbiAgICAgIGlzTG9hZGVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJldmlld3MoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL3Jldmlld3MvP2NvdW50PTEwMCZzb3J0PXJlbGV2YW50JnByb2R1Y3RfaWQ9JHt0aGlzLnByb3BzLnByb2R1Y3RJZH1gKVxuICAgICAgbGV0IHJldmlld3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgcmV0dXJuIHJldmlld3M7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyByZXZpZXcgZGF0YScpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0TWV0YURhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL3Jldmlld3MvbWV0YT9wcm9kdWN0X2lkPSR7dGhpcy5wcm9wcy5wcm9kdWN0SWR9YCk7XG4gICAgICBsZXQgbWV0YURhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgcmV0dXJuIG1ldGFEYXRhO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgcmV2aWV3IG1ldGEgZGF0YScpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmKHByZXZQcm9wcy5wcm9kdWN0SWQgIT09IHRoaXMucHJvcHMucHJvZHVjdElkKXtcbiAgICAgIHRoaXMuZ2V0UmV2aWV3cygpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICByZXZpZXdzOiBzb3J0UmVsZXZhbnRSZXZpZXdzKGRhdGEucmVzdWx0cyksXG4gICAgICAgICAgcHJvZHVjdElkOiBOdW1iZXIoZGF0YS5wcm9kdWN0KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFJldmlld3MoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmV2aWV3czogc29ydFJlbGV2YW50UmV2aWV3cyhkYXRhLnJlc3VsdHMpLFxuICAgICAgICBwcm9kdWN0SWQ6IE51bWJlcihkYXRhLnByb2R1Y3QpLFxuICAgICAgICBpc0xvYWRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICAgIC8vIHJldHVybiB0aGlzLmdldE1ldGFEYXRhKClcbiAgICB9KVxuICAgIC8vIC50aGVuKChtZXRhRGF0YSkgPT4ge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIG1ldGFEYXRhOiBtZXRhRGF0YSxcbiAgICAvLyAgICAgaXNMb2FkZWQ6IHRydWVcbiAgICAvLyAgIH0pXG4gICAgLy8gICBjb25zb2xlLmxvZygnbWV0YWRhdGEnLCBtZXRhRGF0YSlcbiAgICAvLyB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmF0aW5ncy1yZXZpZXdzXCI+XG4gICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmdzLXJldmlld3MnPlxuICAgICAgICAgIDxoMyBpZD0ncnItdGl0bGUnPlJhdGluZ3MgYW5kIFJldmlld3M8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyci1jb250ZW50Jz5cbiAgICAgICAgICAgIDxCcmVha2Rvd24gcHJvZHVjdElkPXt0aGlzLnByb3BzLnByb2R1Y3RJZH0gbWV0YURhdGE9e3RoaXMuc3RhdGUubWV0YURhdGF9IGlzTG9hZGVkPXt0aGlzLnN0YXRlLmlzTG9hZGVkfS8+XG4gICAgICAgICAgICA8UmV2aWV3TGlzdCByZXZpZXdzPXt0aGlzLnN0YXRlLnJldmlld3N9IGhhbmRsZVNvcnQ9e3RoaXMuaGFuZGxlU29ydH0gcHJvZHVjdElkPXt0aGlzLnByb3BzLnByb2R1Y3RJZH0gICAgcHJvZHVjdE5hbWU9e3RoaXMucHJvcHMucHJvZHVjdE5hbWV9Lz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3czsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTb3J0T3B0aW9ucyA9IChwcm9wcykgPT4ge1xuICBsZXQgcmV2aWV3TnVtYmVyID0gcHJvcHMucmV2aWV3cy5sZW5ndGg7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc29ydC1vcHRpb25zJz5cbiAgICAgIDxsYWJlbD57cmV2aWV3TnVtYmVyfSByZXZpZXdzLCBzb3J0ZWQgYnkgPC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgdmFsdWU9e3Byb3BzLnNvcnRpbmd9IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuaGFuZGxlU29ydChlKX0gPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdyZWxldmFudCc+cmVsZXZhbmNlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9J2hlbHBmdWwnPmhlbHBmdWw8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbmV3ZXN0Jz5uZXdlc3Q8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ydE9wdGlvbnM7IiwiLy8gR2V0IGF2ZXJhZ2UgcmF0aW5nIGZvciBzdGFycyB0byBuZWFyZXN0IDAuMjVcbmNvbnN0IGdldEF2Z1JhdGluZyA9IChkYXRhKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGxldCByYXRpbmdzID0gMDtcbiAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRvdGFsICs9IE51bWJlcihrZXkpICogTnVtYmVyKGRhdGFba2V5XSk7XG4gICAgICByYXRpbmdzICs9IE51bWJlcihkYXRhW2tleV0pO1xuICB9XG5cbiBsZXQgYXZlcmFnZSA9IHRvdGFsL3JhdGluZ3M7XG4gcmV0dXJuIChNYXRoLnJvdW5kKGF2ZXJhZ2UgKiA0KSAvIDQpLnRvRml4ZWQoMilcbn1cblxuLy8gQ29udmVydCBzdGFyL2JhciByYXRpbmdzIHRvIHBlcmNlbnRhZ2UgZm9yIENTU1xuY29uc3QgcmF0aW5nQ29udmVydGVyID0gKHJhdGluZywgZGl2aXNvcikgPT4ge1xuICByZXR1cm4gcmF0aW5nIC8gZGl2aXNvciAqIDEwMDtcbn1cblxuLy8gR2V0IHRvdGFsIG51bWJlciBvZiByYXRpbmdzXG5jb25zdCBnZXRSYXRpbmdUb3RhbCA9IChkYXRhKSA9PiB7XG4gIGxldCByYXRpbmdzID0gMDtcbiAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHJhdGluZ3MgKz0gTnVtYmVyKGRhdGFba2V5XSk7XG4gIH1cbiByZXR1cm4gcmF0aW5ncztcbn1cblxuLy8gR2V0IHRvdGFsIG51bWJlciBvZiByZWNvbW1lbmRzXG5jb25zdCBnZXRSZWNUb3RhbCA9IChkYXRhKSA9PiB7XG4gIGxldCByZWNzID0gMDtcbiAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICByZWNzICs9IE51bWJlcihkYXRhW2tleV0pO1xuICB9XG4gIHJldHVybiByZWNzO1xufVxuXG4vLyBDb252ZXJ0IGRhdGUgdG8gTU9OVEgvREQvWVlZWSBmb3JtYXRcbmNvbnN0IGNvbnZlcnREYXRlID0gKGRhdGUpID0+IHtcbiAgY29uc3QgbW9udGhzID0ge1xuICAgIFwiMDFcIjpcIkphbnVhcnlcIixcbiAgICBcIjAyXCI6XCJGZWJydWFyeVwiLFxuICAgIFwiMDNcIjpcIk1hcmNoXCIsXG4gICAgXCIwNFwiOlwiQXByaWxcIixcbiAgICBcIjA1XCI6XCJNYXlcIixcbiAgICBcIjA2XCI6XCJKdW5lXCIsXG4gICAgXCIwN1wiOlwiSnVseVwiLFxuICAgIFwiMDhcIjpcIkF1Z3VzdFwiLFxuICAgIFwiMDlcIjpcIlNlcHRlbWJlclwiLFxuICAgIFwiMTBcIjpcIk9jdG9iZXJcIixcbiAgICBcIjExXCI6XCJOb3ZlbWJlclwiLFxuICAgIFwiMTJcIjpcIkRlY2VtYmVyXCJcbiAgfVxuXG4gIGxldCBtb250aCA9IG1vbnRoc1tkYXRlLnNsaWNlKDUsNyldO1xuICBsZXQgZGF5ID0gZGF0ZS5zbGljZSg4LDEwKTtcbiAgbGV0IHllYXIgPSBkYXRlLnNsaWNlKDAsNCk7XG5cbiAgcmV0dXJuIGAke21vbnRofSAke2RheX0sICR7eWVhcn1gXG59XG5cbmNvbnN0IGNoYXJzVGFibGUgPSB7XG4gIFNpemU6IFsnQSBzaXplIHRvbyBzbWFsbCcsICfCvSBhIHNpemUgdG9vIHNtYWxsJywgJ1BlcmZlY3QnLCAnwr0gYSBzaXplIHRvbyBiaWcnLCAnQSBzaXplIHRvbyB3aWRlJ10sXG4gIFdpZHRoOiBbJ1RvbyBuYXJyb3cnLCAnU2xpZ2h0bHkgbmFycm93JywgJ1BlcmZlY3QnLCAnU2xpZ2h0bHkgd2lkZScsICdUb28gd2lkZSddLFxuICBDb21mb3J0OiBbJ1VuY29tZm9ydGFibGUnLCAnU2xpZ2h0bHkgdW5jb21mb3J0YWJsZScsICdPaycsICdDb21mb3J0YWJsZScsICdQZXJmZWN0J10sXG4gIFF1YWxpdHk6IFsnUG9vcicsICdCZWxvdyBhdmVyYWdlJywgJ1doYXQgSSBleHBlY3RlZCcsICdQcmV0dHkgZ3JlYXQnLCAnUGVyZmVjdCddLFxuICBMZW5ndGg6IFsnUnVucyBTaG9ydCcsICdSdW5zIHNsaWdodGx5IHNob3J0JywgJ1BlcmZlY3QnLCAnUnVucyBzbGlnaHRseSBsb25nJywgJ1J1bnMgbG9uZyddLFxuICBGaXQ6IFsnUnVucyB0aWdodCcsICdSdW5zIHNsaWdodGx5IHRpZ2h0JywgJ1BlcmZlY3QnLCAnUnVucyBzbGlnaHRseSBsb25nJywgJ1J1bnMgbG9uZyddLFxufVxuXG5jb25zdCBzb3J0UmVsZXZhbnRSZXZpZXdzID0gKHJldmlld3MpID0+IHtcbiAgbGV0IG5ld2VzdFJldmlld3MgPSByZXZpZXdzLnNvcnQoKGEsIGIpID0+IERhdGUucGFyc2UoYi5kYXRlKSAtIERhdGUucGFyc2UoYS5kYXRlKSk7XG4gICAgICBuZXdlc3RSZXZpZXdzLm1hcCgocmV2aWV3LCBpbmRleCkgPT4geyByZXZpZXcucmFuayA9IGluZGV4LzQgfSk7XG5cbiAgbGV0IGhlbHBmdWxSZXZpZXdzID0gcmV2aWV3cy5zb3J0KChhLCBiKSA9PiBiLmhlbHBmdWxuZXNzIC0gYS5oZWxwZnVsbmVzcyk7XG4gICAgICBoZWxwZnVsUmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IHsgcmV2aWV3LnJhbmsgKz0gaW5kZXggfSk7XG5cbiAgcmV0dXJuIHJldmlld3Muc29ydCgoYSwgYikgPT4gYS5yYW5rIC0gYi5yYW5rKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEF2Z1JhdGluZzogZ2V0QXZnUmF0aW5nLFxuICBnZXRSYXRpbmdUb3RhbDogZ2V0UmF0aW5nVG90YWwsXG4gIGdldFJlY1RvdGFsOiBnZXRSZWNUb3RhbCxcbiAgcmF0aW5nQ29udmVydGVyOiByYXRpbmdDb252ZXJ0ZXIsXG4gIGNvbnZlcnREYXRlOiBjb252ZXJ0RGF0ZSxcbiAgY2hhcnNUYWJsZTogY2hhcnNUYWJsZSxcbiAgc29ydFJlbGV2YW50UmV2aWV3czogc29ydFJlbGV2YW50UmV2aWV3c1xufSJdLCJzb3VyY2VSb290IjoiIn0=