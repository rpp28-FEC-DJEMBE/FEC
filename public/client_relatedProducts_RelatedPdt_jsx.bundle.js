(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_relatedProducts_RelatedPdt_jsx"],{

/***/ "./client/relatedProducts/Comparison.jsx":
/*!***********************************************!*\
  !*** ./client/relatedProducts/Comparison.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Comparison_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comparison.css */ "./client/relatedProducts/Comparison.css");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var {
  collectFeatures,
  combineFeatures
} = __webpack_require__(/*! ./featuresHelper */ "./client/relatedProducts/featuresHelper.js");

function Comparison(_ref) {
  var {
    productId,
    btnId,
    showComp,
    onCompaClose
  } = _ref;
  var check = "\u2713";
  var [featuresComp, setFeaturesComp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    id: [],
    name: [],
    // features: [[], []],
    featuresCombined: {
      value1: [],
      value2: [],
      featureWValue: []
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getFetures(productId, btnId);
  }, [productId, btnId]);

  var getFetures = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (currentId, btnId) {
      try {
        var featuresData1 = yield axios.get("/products/".concat(currentId));
        var featuresData2 = yield axios.get("/products/".concat(btnId));
        var features1 = collectFeatures(featuresData1.data.features);
        var features2 = collectFeatures(featuresData2.data.features);
        var featuresCombined = combineFeatures(features1, features2);
        setFeaturesComp({
          id: [currentId, btnId],
          name: [featuresData1.data.name, featuresData2.data.name],
          // features: [featuresData1.data.features, featuresData2.data.features],
          featuresCombined: featuresCombined
        });
      } catch (err) {
        throw err;
      }
    });

    return function getFetures(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (!showComp) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-testid": "comparison",
    className: "comparison-box pointer",
    onClick: onCompaClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "comparing"
  }, "COMPARING"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "comparison-name-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, featuresComp.name[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, featuresComp.name[1])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "comparison-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "product-id"
  }, productId), featuresComp.featuresCombined.value1.map((value1, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    key: i
  }, value1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "product-id"
  }, "vs"), featuresComp.featuresCombined.featureWValue.map((featureValue, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    key: i
  }, featureValue))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "product-id"
  }, btnId), featuresComp.featuresCombined.value2.map((value2, i) => {
    if (value2 === '') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        key: i,
        className: "no-show"
      }, "null");
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        key: i,
        className: "value2"
      }, value2);
    }
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comparison);

/***/ }),

/***/ "./client/relatedProducts/OutfitAddCard.jsx":
/*!**************************************************!*\
  !*** ./client/relatedProducts/OutfitAddCard.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var OutfitAddCard = _ref => {
  var {
    onAddOutfitClick
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add-outfit pointer",
    onClick: onAddOutfitClick
  }, "+ Add to Outfit");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutfitAddCard);

/***/ }),

/***/ "./client/relatedProducts/Product.jsx":
/*!********************************************!*\
  !*** ./client/relatedProducts/Product.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.css */ "./client/relatedProducts/Product.css");
/* harmony import */ var _reviews_RatingStars_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reviews/RatingStars.jsx */ "./client/reviews/RatingStars.jsx");
/* harmony import */ var _reviews_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reviews/reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviews_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reviews_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function Product(_ref) {
  var {
    overviewProductId,
    id,
    category,
    name,
    default_price,
    rating,
    cardBtn,
    onProductBtnClick,
    onOutfitBtnClick,
    onCardClick
  } = _ref;
  var [detail, setDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: '',
    sale_price: 0,
    original_price: 0,
    starAverage: 0.1
  });
  var [className, setClassName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    regular: '',
    sale: 'product-sale-price-none'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getDetail();
  }, []);

  var getDetail = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      try {
        var starAverage;
        var ratingData = yield axios.get("/reviews/meta?product_id=".concat(id));
        var ratingAvg = _reviews_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_3___default().getAvgRating(ratingData.data.ratings);
        isNaN(ratingAvg) ? starAverage = 0 : starAverage = ratingAvg;
        axios.get("/products/".concat(id, "/styles")).then(res => {
          var imgLink;

          if (!res.data.results[0].photos[0].url) {
            imgLink = "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg";
          } else {
            imgLink = res.data.results[0].photos[0].url.split('&w=')[0] + '&w=250&q=80';
          }

          setDetail({
            img: imgLink,
            sale_price: res.data.results[0].sale_price,
            original_price: res.data.results[0].original_price,
            starAverage: starAverage
          });

          if (res.data.results[0].sale_price) {
            setClassName({
              regular: "product-default-price",
              sale: "product-sale-price"
            });
          }
        }).catch(err => {
          throw err;
        });
      } catch (err) {
        throw err;
      }
    });

    return function getDetail() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onClickActionBtn = () => {
    setTimeout(() => {
      if (cardBtn === '\u2606') {
        onProductBtnClick(id);
      } else if (cardBtn === '\u2327') {
        onOutfitBtnClick(id);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "pdtCard",
    className: "product-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "compare-btn pointer",
    onClick: onClickActionBtn
  }, cardBtn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-image-div pointer",
    onClick: () => onCardClick(id, name)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "product-image",
    src: detail.img,
    loading: "lazy",
    width: "50",
    height: "50",
    alt: "".concat(id) + 'No Img'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-detail-box pointer",
    onClick: () => onCardClick(id, name)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "product-category"
  }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "product-name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: className.regular
  }, "$", detail.original_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: className.sale
  }, "  $", detail.sale_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "product-id"
  }, "id: ", id, " -OverviewId: ", overviewProductId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reviews_RatingStars_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    rating: detail.starAverage,
    size: 20
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ "./client/relatedProducts/RelatedPdt.jsx":
/*!***********************************************!*\
  !*** ./client/relatedProducts/RelatedPdt.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RelatedPdt_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedPdt.css */ "./client/relatedProducts/RelatedPdt.css");
/* harmony import */ var _OutfitAddCard_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutfitAddCard.jsx */ "./client/relatedProducts/OutfitAddCard.jsx");
/* harmony import */ var _Product_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.jsx */ "./client/relatedProducts/Product.jsx");
/* harmony import */ var _Comparison_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comparison.jsx */ "./client/relatedProducts/Comparison.jsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import React from 'react';






var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function RelatedPdt(props) {
  var [relatedPdts, setRelatedPdts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    pdt_ids: [],
    products: []
  });
  var [pdtLayOut, setPdtLayOut] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    displayFirstId: 0,
    totalItems: 0,
    pdtLeftBtn: 'pointer btn-Inactive',
    pdtRightBtn: 'pointer rightBtn btn-Inactive'
  });
  var [outfits, setOutfits] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    pdt_ids: [],
    products: []
  });
  var [outfitLayOut, setOutfitLayOut] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    displayFirstId: 0,
    totalItems: 0,
    pdtLeftBtn: 'pointer btn-Inactive',
    pdtRightBtn: 'pointer rightBtn btn-Inactive'
  });
  var [clickedId, setClickedId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.productId);
  var [btnId, setBtnId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.productId);
  var [showComp, setShowComp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var displayPdtItems = 4;
  var displayOutfitItems = displayPdtItems - 1;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getOutfits();
    getRelatedPdts(props.productId);
  }, [props.productId]);

  var parseLayout = (displayFirstId, totalItems, pdtLeftBtn, pdtRightBtn) => {
    return {
      displayFirstId: displayFirstId,
      totalItems: totalItems,
      pdtLeftBtn: pdtLeftBtn,
      pdtRightBtn: pdtRightBtn
    };
  };

  var getRelatedPdts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (id) {
      try {
        var pdt_ids = yield axios.get("/products/".concat(id, "/related"));
        var pdt_idsData = [];
        pdt_ids.data.forEach(pdt_id => {
          if (!pdt_idsData.includes(pdt_id) && pdt_id !== props.productId) {
            pdt_idsData.push(pdt_id);
          }
        });
        var pdtPromises = [];

        for (var i = 0; i < pdt_idsData.length; i++) {
          pdtPromises[i] = axios.get("/products/".concat(pdt_idsData[i]));
        }

        Promise.all(pdtPromises).then(productsData => {
          var products = productsData.map(pdtData => pdtData.data);
          var rightBtn;
          setRelatedPdts({
            pdt_ids: pdt_idsData,
            products: products
          });

          if (pdt_idsData.length > displayPdtItems - 1) {
            rightBtn = 'pointer rightBtn';
          } else {
            rightBtn = 'pointer rightBtn btn-Inactive';
          }

          setPdtLayOut(parseLayout(0, pdt_idsData.length, 'pointer btn-Inactive', rightBtn));
        }).catch(err => {
          throw err;
        });
      } catch (err) {
        throw err;
      }
    });

    return function getRelatedPdts(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getOutfits = () => {
    var savedOutfit, savedOutfitIds, rightBtn;

    if (localStorage.getItem('outfit') !== null) {
      savedOutfit = JSON.parse(localStorage.getItem('outfit'));
      savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
    } else {
      savedOutfit = [];
      savedOutfitIds = [];
    }

    setOutfits({
      pdt_ids: savedOutfitIds,
      products: savedOutfit
    });

    if (savedOutfitIds.length > displayOutfitItems - 1) {
      rightBtn = 'pointer rightBtn';
    } else {
      rightBtn = 'pointer rightBtn btn-Inactive';
    }

    setOutfitLayOut(parseLayout(0, savedOutfitIds.length, 'pointer btn-Inactive', rightBtn));
  };

  var addOutfit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (selectedId) {
      try {
        var newOutfitData = yield axios.get("/products/".concat(selectedId));
        var newOutfit = newOutfitData.data;
        var savedOutfit, savedOutfitIds;

        if (localStorage.getItem('outfit') !== null) {
          savedOutfit = JSON.parse(localStorage.getItem('outfit'));
          savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));

          if (!savedOutfitIds.includes(newOutfit.id)) {
            savedOutfit.push(newOutfit);
            savedOutfitIds.push(newOutfit.id);
          }
        } else {
          savedOutfit = [newOutfit];
          savedOutfitIds = [newOutfit.id];
        }

        localStorage.setItem('outfitId', JSON.stringify(savedOutfitIds));
        localStorage.setItem('outfit', JSON.stringify(savedOutfit));
        setOutfits({
          pdt_ids: savedOutfitIds,
          products: savedOutfit
        });

        if (outfitLayOut.displayFirstId + displayOutfitItems === savedOutfitIds.length) {
          setOutfitLayOut(parseLayout(outfitLayOut.displayFirstId, savedOutfitIds.length, 'pointer btn-Inactive', 'pointer rightBtn'));
        }
      } catch (err) {
        throw err;
      }
    });

    return function addOutfit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var removeOutfit = selectedId => {
    var savedOutfit = JSON.parse(localStorage.getItem('outfit'));
    var savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
    var toDeleteId = savedOutfitIds.indexOf(selectedId);
    savedOutfit.splice(toDeleteId, 1);
    savedOutfitIds.splice(toDeleteId, 1);
    localStorage.removeItem('outfitId');
    localStorage.setItem('outfitId', JSON.stringify(savedOutfitIds));
    localStorage.removeItem('outfit');
    localStorage.setItem('outfit', JSON.stringify(savedOutfit));
    setOutfits({
      pdt_ids: savedOutfitIds,
      products: savedOutfit
    });

    if (outfitLayOut.displayFirstId + displayOutfitItems === savedOutfitIds.length + 1) {
      setOutfitLayOut(parseLayout(outfitLayOut.displayFirstId, savedOutfitIds.length, outfitLayOut.pdtLeftBtn, 'pointer rightBtn btn-Inactive'));
    }
  };

  var slideLeft = (carousel, products, itemNum) => {
    var leftBtn, updatedLayout;

    if (carousel.displayFirstId > 0) {
      if (carousel.displayFirstId === 1) {
        leftBtn = 'pointer btn-Inactive';
      } else {
        leftBtn = 'pointer';
      }

      updatedLayout = parseLayout(carousel.displayFirstId - 1, products.pdt_ids.length, leftBtn, 'pointer rightBtn');

      if (itemNum === displayPdtItems) {
        setPdtLayOut(updatedLayout);
      } else {
        setOutfitLayOut(updatedLayout);
      }
    }
  };

  var slideRight = (carousel, products, itemNum) => {
    var rightBtn, updatedLayout;

    if (carousel.totalItems > carousel.displayFirstId + itemNum - 1) {
      if (products.pdt_ids.length > carousel.displayFirstId + itemNum) {
        rightBtn = 'pointer rightBtn';
      } else {
        rightBtn = 'pointer rightBtn btn-Inactive';
      }

      updatedLayout = parseLayout(carousel.displayFirstId + 1, products.pdt_ids.length, 'pointer', rightBtn);

      if (itemNum === displayPdtItems) {
        setPdtLayOut(updatedLayout);
      } else {
        setOutfitLayOut(updatedLayout);
      }
    }
  };

  var onProductBtnClick = btnId => {
    console.log('onProductBtnClick', btnId);
    setShowComp(true);
    setBtnId(btnId);
  };

  var onCompaClose = () => {
    setShowComp(false);
  };

  var onAddOutfitClick = () => {
    addOutfit(props.productId);
  };

  var onOutfitBtnClick = btnId => {
    removeOutfit(btnId);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-testid": "relatedPdt",
    onClick: onCompaClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "related-product-widget"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "related-product-header"
  }, "RELATED PRODUCTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "related-product-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: pdtLayOut.pdtLeftBtn,
    onClick: () => slideLeft(pdtLayOut, relatedPdts, displayPdtItems)
  }, '\u1438'), relatedPdts.products.slice(pdtLayOut.displayFirstId, pdtLayOut.displayFirstId + displayPdtItems).map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Product_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    key: product.id,
    overviewProductId: props.productId,
    id: product.id,
    category: product.category,
    name: product.name,
    default_price: product.default_price,
    cardBtn: '\u2606',
    onProductBtnClick: onProductBtnClick,
    onCardClick: props.onCardClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: pdtLayOut.pdtRightBtn,
    onClick: () => slideRight(pdtLayOut, relatedPdts, displayPdtItems)
  }, '\u1433'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "outfit-widget"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "outfit-header"
  }, "YOUR OUTFIT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "outfit-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: outfitLayOut.pdtLeftBtn,
    onClick: () => slideLeft(outfitLayOut, outfits, displayOutfitItems)
  }, '\u1438'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OutfitAddCard_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    onAddOutfitClick: onAddOutfitClick
  }), outfits.products.slice(outfitLayOut.displayFirstId, outfitLayOut.displayFirstId + displayOutfitItems).map(outfit => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Product_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    key: outfit.id,
    overviewProductId: props.productId,
    id: outfit.id,
    category: outfit.category,
    name: outfit.name,
    default_price: outfit.default_price,
    cardBtn: '\u2327',
    onOutfitBtnClick: onOutfitBtnClick,
    onCardClick: props.onCardClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: outfitLayOut.pdtRightBtn,
    onClick: () => slideRight(outfitLayOut, outfits, displayOutfitItems)
  }, '\u1433'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comparison_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    productId: props.productId,
    btnId: btnId,
    showComp: showComp,
    onCompaClose: onCompaClose
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedPdt);

/***/ }),

/***/ "./client/relatedProducts/featuresHelper.js":
/*!**************************************************!*\
  !*** ./client/relatedProducts/featuresHelper.js ***!
  \**************************************************/
/***/ ((module) => {

var collectFeatures = features => {
  var collectedFeatures = {
    feature: [],
    value: [],
    featureAndValue: []
  };

  for (var i = 0; i < features.length; i++) {
    var newFeatureValue = void 0;

    if (features[i].value === null) {
      newFeatureValue = "".concat(features[i].feature);
    } else {
      newFeatureValue = "".concat(features[i].feature, " ").concat(features[i].value.replace(/[^a-zA-Z ]/g, ''));
    }

    if (collectedFeatures.featureAndValue.indexOf(newFeatureValue) < 0) {
      collectedFeatures.feature.push(features[i].feature);

      if (features[i].value === null) {
        collectedFeatures.value.push(null);
        collectedFeatures.featureAndValue.push(newFeatureValue);
      } else {
        collectedFeatures.value.push(features[i].value.replace(/[^a-zA-Z ]/g, ''));
        collectedFeatures.featureAndValue.push(newFeatureValue);
      }
    }
  }

  return collectedFeatures;
};

var combineFeatures = (features1, features2) => {
  var check = "\u2713";
  var combinedFeatures = {
    value1: [],
    value2: [],
    featureWValue: []
  };
  var toDeleteIndex2 = [];

  for (var i = 0; i < features1.featureAndValue.length; i++) {
    var index2 = features2.feature.indexOf(features1.feature[i]);

    if (index2 > -1) {
      if (features2.featureAndValue[index2] === features1.featureAndValue[i]) {
        combinedFeatures.value1.push(check);
        combinedFeatures.value2.push(check);
        combinedFeatures.featureWValue.push(features1.featureAndValue[i]);
      } else {
        combinedFeatures.value1.push(features1.value[i]);
        combinedFeatures.value2.push(features2.value[i]);
        combinedFeatures.featureWValue.push(features1.feature[i]);
      }

      toDeleteIndex2.push(index2);
    } else {
      combinedFeatures.value1.push(check);
      combinedFeatures.value2.push('');
      combinedFeatures.featureWValue.push(features1.featureAndValue[i]);
    }
  }

  for (var j = 0; j < features2.featureAndValue.length; j++) {
    if (!toDeleteIndex2.includes(j)) {
      combinedFeatures.value1.push('');
      combinedFeatures.value2.push(check);
      combinedFeatures.featureWValue.push(features2.featureAndValue[j]);
    }
  }

  return combinedFeatures;
};

module.exports = {
  collectFeatures,
  combineFeatures
};

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/Comparison.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/Comparison.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".comparison-box {\n  border: solid 1px grey;\n  padding: 5px;\n  width: 40%;\n  margin: auto;\n  height: 200px;\n  overflow: auto;\n  position: fixed;\n  z-index: 10;\n  background-color: white;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.comparison-name-line {\n  display: grid;\n  grid-template-columns: auto max-content;\n  margin: 0;\n}\n\n.comparison-table {\n  display: grid;\n  grid-template-columns: auto auto max-content;\n  font-size: small;\n  line-height: 0.6;\n}\n\n.comparing {\n  font-weight: 300;\n  font-size: smaller;\n  margin: 0;\n}\n\n.value2 {\n  justify-items: end;\n}\n\n.no-show {\n  opacity: 0;\n}", "",{"version":3,"sources":["webpack://./client/relatedProducts/Comparison.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,cAAc;EACd,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,OAAO;EACP,MAAM;EACN,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ","sourcesContent":[".comparison-box {\n  border: solid 1px grey;\n  padding: 5px;\n  width: 40%;\n  margin: auto;\n  height: 200px;\n  overflow: auto;\n  position: fixed;\n  z-index: 10;\n  background-color: white;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.comparison-name-line {\n  display: grid;\n  grid-template-columns: auto max-content;\n  margin: 0;\n}\n\n.comparison-table {\n  display: grid;\n  grid-template-columns: auto auto max-content;\n  font-size: small;\n  line-height: 0.6;\n}\n\n.comparing {\n  font-weight: 300;\n  font-size: smaller;\n  margin: 0;\n}\n\n.value2 {\n  justify-items: end;\n}\n\n.no-show {\n  opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/Product.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/Product.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".add-outfit,\n.product-card {\n  /* background-color: powderblue; */\n  width: 250px;\n  height: 350px;\n  left: 50%;\n  border: solid 1px grey;\n  margin: 10px;\n}\n\n.add-outfit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.product-image-div {\n  height: 230px;\n  background-color: powderblue;\n}\n\n.product-category {\n  padding-top: 5px;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\n.product-name {\n  /* font-weight: 300; */\n  font-weight: bold;\n  font-size: medium;\n}\n\n.product-price {\n  font-weight: 300;\n  font-size: smaller;\n}\n\n.product-default-price {\n  text-decoration: line-through;\n}\n\n.product-sale-price {\n  color: red;\n}\n.product-sale-price-none {\n  opacity: 0;\n}\n\n.product-id {\n  font-weight: 300;\n  font-size: smaller;\n  color: powderblue;\n}\n\n.product-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  box-sizing: border-box;\n}\n\n.product-detail-box {\n  width: 100%;\n  height: 120px;\n  font-size: small;\n  line-height: 0.4;\n  padding-left: 5px;\n}\n\n.card-btn {\n  position: absolute;\n  z-index: 9;\n  margin-left: 210px;\n  font-family: system-ui;\n  font-size: x-large;\n  /* background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255, 1) 90%); */\n  background-image: radial-gradient(rgba(255,255,255,1), rgba(255,255,255,0) 50%);\n}\n", "",{"version":3,"sources":["webpack://./client/relatedProducts/Product.css"],"names":[],"mappings":"AAAA;;EAEE,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,gGAAgG;EAChG,+EAA+E;AACjF","sourcesContent":[".add-outfit,\n.product-card {\n  /* background-color: powderblue; */\n  width: 250px;\n  height: 350px;\n  left: 50%;\n  border: solid 1px grey;\n  margin: 10px;\n}\n\n.add-outfit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.product-image-div {\n  height: 230px;\n  background-color: powderblue;\n}\n\n.product-category {\n  padding-top: 5px;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\n.product-name {\n  /* font-weight: 300; */\n  font-weight: bold;\n  font-size: medium;\n}\n\n.product-price {\n  font-weight: 300;\n  font-size: smaller;\n}\n\n.product-default-price {\n  text-decoration: line-through;\n}\n\n.product-sale-price {\n  color: red;\n}\n.product-sale-price-none {\n  opacity: 0;\n}\n\n.product-id {\n  font-weight: 300;\n  font-size: smaller;\n  color: powderblue;\n}\n\n.product-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  box-sizing: border-box;\n}\n\n.product-detail-box {\n  width: 100%;\n  height: 120px;\n  font-size: small;\n  line-height: 0.4;\n  padding-left: 5px;\n}\n\n.card-btn {\n  position: absolute;\n  z-index: 9;\n  margin-left: 210px;\n  font-family: system-ui;\n  font-size: x-large;\n  /* background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255, 1) 90%); */\n  background-image: radial-gradient(rgba(255,255,255,1), rgba(255,255,255,0) 50%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/RelatedPdt.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/RelatedPdt.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".related-product-box,\n.outfit-box {\n  border: solid 1px powderblue;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  position: relative;\n  height: 360px;\n  width: 1106px;\n}\n\n.related-product-widget,\n.outfit-widget {\n  margin: auto;\n  /* width: 1106px; */\n  width: 1000px;\n  overflow: hidden;\n}\n\n.outfit-widget {\n  padding-top: 20px;\n}\n\n.btn-Inactive {\n  opacity: 0;\n}\n\n.rightBtn {\n  z-index: 8;\n  position: absolute;\n  margin-left: 89%;\n}\n\n.related-product-box:after,\n.outfit-box:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  margin-left: 80%;\n  width: 11%;\n  height: 360px;\n\n  pointer-events: none;\n  background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255, 1) 90%);\n}\n", "",{"version":3,"sources":["webpack://./client/relatedProducts/RelatedPdt.css"],"names":[],"mappings":"AAAA;;EAEE,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,UAAU;EACV,aAAa;;EAEb,oBAAoB;EACpB,0FAA0F;AAC5F","sourcesContent":[".related-product-box,\n.outfit-box {\n  border: solid 1px powderblue;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  position: relative;\n  height: 360px;\n  width: 1106px;\n}\n\n.related-product-widget,\n.outfit-widget {\n  margin: auto;\n  /* width: 1106px; */\n  width: 1000px;\n  overflow: hidden;\n}\n\n.outfit-widget {\n  padding-top: 20px;\n}\n\n.btn-Inactive {\n  opacity: 0;\n}\n\n.rightBtn {\n  z-index: 8;\n  position: absolute;\n  margin-left: 89%;\n}\n\n.related-product-box:after,\n.outfit-box:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  margin-left: 80%;\n  width: 11%;\n  height: 360px;\n\n  pointer-events: none;\n  background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255, 1) 90%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/relatedProducts/Comparison.css":
/*!***********************************************!*\
  !*** ./client/relatedProducts/Comparison.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Comparison_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Comparison.css */ "./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/Comparison.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Comparison_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Comparison_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./client/relatedProducts/Product.css":
/*!********************************************!*\
  !*** ./client/relatedProducts/Product.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Product_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Product.css */ "./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/Product.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Product_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Product_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./client/relatedProducts/RelatedPdt.css":
/*!***********************************************!*\
  !*** ./client/relatedProducts/RelatedPdt.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_RelatedPdt_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./RelatedPdt.css */ "./node_modules/css-loader/dist/cjs.js!./client/relatedProducts/RelatedPdt.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_RelatedPdt_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_RelatedPdt_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcmVsYXRlZFByb2R1Y3RzL0NvbXBhcmlzb24uanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZWxhdGVkUHJvZHVjdHMvT3V0Zml0QWRkQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3JlbGF0ZWRQcm9kdWN0cy9Qcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcmVsYXRlZFByb2R1Y3RzL1JlbGF0ZWRQZHQuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZWxhdGVkUHJvZHVjdHMvZmVhdHVyZXNIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3Jldmlld3MvUmF0aW5nU3RhcnMuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL3Jldmlld0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3JlbGF0ZWRQcm9kdWN0cy9Db21wYXJpc29uLmNzcyIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcmVsYXRlZFByb2R1Y3RzL1Byb2R1Y3QuY3NzIiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZWxhdGVkUHJvZHVjdHMvUmVsYXRlZFBkdC5jc3MiLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3JlbGF0ZWRQcm9kdWN0cy9Db21wYXJpc29uLmNzcz8yYzhiIiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZWxhdGVkUHJvZHVjdHMvUHJvZHVjdC5jc3M/NTY0YyIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcmVsYXRlZFByb2R1Y3RzL1JlbGF0ZWRQZHQuY3NzPzUxZDEiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiY29sbGVjdEZlYXR1cmVzIiwiY29tYmluZUZlYXR1cmVzIiwiQ29tcGFyaXNvbiIsInByb2R1Y3RJZCIsImJ0bklkIiwic2hvd0NvbXAiLCJvbkNvbXBhQ2xvc2UiLCJjaGVjayIsImZlYXR1cmVzQ29tcCIsInNldEZlYXR1cmVzQ29tcCIsInVzZVN0YXRlIiwiaWQiLCJuYW1lIiwiZmVhdHVyZXNDb21iaW5lZCIsInZhbHVlMSIsInZhbHVlMiIsImZlYXR1cmVXVmFsdWUiLCJ1c2VFZmZlY3QiLCJnZXRGZXR1cmVzIiwiY3VycmVudElkIiwiZmVhdHVyZXNEYXRhMSIsImdldCIsImZlYXR1cmVzRGF0YTIiLCJmZWF0dXJlczEiLCJkYXRhIiwiZmVhdHVyZXMiLCJmZWF0dXJlczIiLCJlcnIiLCJtYXAiLCJpIiwiZmVhdHVyZVZhbHVlIiwiT3V0Zml0QWRkQ2FyZCIsIm9uQWRkT3V0Zml0Q2xpY2siLCJQcm9kdWN0Iiwib3ZlcnZpZXdQcm9kdWN0SWQiLCJjYXRlZ29yeSIsImRlZmF1bHRfcHJpY2UiLCJyYXRpbmciLCJjYXJkQnRuIiwib25Qcm9kdWN0QnRuQ2xpY2siLCJvbk91dGZpdEJ0bkNsaWNrIiwib25DYXJkQ2xpY2siLCJkZXRhaWwiLCJzZXREZXRhaWwiLCJpbWciLCJzYWxlX3ByaWNlIiwib3JpZ2luYWxfcHJpY2UiLCJzdGFyQXZlcmFnZSIsImNsYXNzTmFtZSIsInNldENsYXNzTmFtZSIsInJlZ3VsYXIiLCJzYWxlIiwiZ2V0RGV0YWlsIiwicmF0aW5nRGF0YSIsInJhdGluZ0F2ZyIsInJhdGluZ0hlbHBlciIsInJhdGluZ3MiLCJpc05hTiIsInRoZW4iLCJyZXMiLCJpbWdMaW5rIiwicmVzdWx0cyIsInBob3RvcyIsInVybCIsInNwbGl0IiwiY2F0Y2giLCJvbkNsaWNrQWN0aW9uQnRuIiwic2V0VGltZW91dCIsIlJlbGF0ZWRQZHQiLCJwcm9wcyIsInJlbGF0ZWRQZHRzIiwic2V0UmVsYXRlZFBkdHMiLCJwZHRfaWRzIiwicHJvZHVjdHMiLCJwZHRMYXlPdXQiLCJzZXRQZHRMYXlPdXQiLCJkaXNwbGF5Rmlyc3RJZCIsInRvdGFsSXRlbXMiLCJwZHRMZWZ0QnRuIiwicGR0UmlnaHRCdG4iLCJvdXRmaXRzIiwic2V0T3V0Zml0cyIsIm91dGZpdExheU91dCIsInNldE91dGZpdExheU91dCIsImNsaWNrZWRJZCIsInNldENsaWNrZWRJZCIsInNldEJ0bklkIiwic2V0U2hvd0NvbXAiLCJkaXNwbGF5UGR0SXRlbXMiLCJkaXNwbGF5T3V0Zml0SXRlbXMiLCJnZXRPdXRmaXRzIiwiZ2V0UmVsYXRlZFBkdHMiLCJwYXJzZUxheW91dCIsInBkdF9pZHNEYXRhIiwiZm9yRWFjaCIsInBkdF9pZCIsImluY2x1ZGVzIiwicHVzaCIsInBkdFByb21pc2VzIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsInByb2R1Y3RzRGF0YSIsInBkdERhdGEiLCJyaWdodEJ0biIsInNhdmVkT3V0Zml0Iiwic2F2ZWRPdXRmaXRJZHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRkT3V0Zml0Iiwic2VsZWN0ZWRJZCIsIm5ld091dGZpdERhdGEiLCJuZXdPdXRmaXQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlT3V0Zml0IiwidG9EZWxldGVJZCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmVJdGVtIiwic2xpZGVMZWZ0IiwiY2Fyb3VzZWwiLCJpdGVtTnVtIiwibGVmdEJ0biIsInVwZGF0ZWRMYXlvdXQiLCJzbGlkZVJpZ2h0IiwiY29uc29sZSIsImxvZyIsInNsaWNlIiwicHJvZHVjdCIsIm91dGZpdCIsImNvbGxlY3RlZEZlYXR1cmVzIiwiZmVhdHVyZSIsInZhbHVlIiwiZmVhdHVyZUFuZFZhbHVlIiwibmV3RmVhdHVyZVZhbHVlIiwicmVwbGFjZSIsImNvbWJpbmVkRmVhdHVyZXMiLCJ0b0RlbGV0ZUluZGV4MiIsImluZGV4MiIsImoiLCJtb2R1bGUiLCJleHBvcnRzIiwiUmF0aW5nU3RhcnMiLCJzaXplIiwic3RhclN0eWxlIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJzdGFyUGVyY2VudCIsImhlbHBlciIsInBlcmNlbnQiLCJnZXRBdmdSYXRpbmciLCJ0b3RhbCIsImtleSIsIk51bWJlciIsImF2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwicmF0aW5nQ29udmVydGVyIiwiZGl2aXNvciIsImdldFJhdGluZ1RvdGFsIiwiZ2V0UmVjVG90YWwiLCJyZWNzIiwiY29udmVydERhdGUiLCJkYXRlIiwibW9udGhzIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwiY2hhcnNUYWJsZSIsIlNpemUiLCJXaWR0aCIsIkNvbWZvcnQiLCJRdWFsaXR5IiwiTGVuZ3RoIiwiRml0Iiwic29ydFJlbGV2YW50UmV2aWV3cyIsInJldmlld3MiLCJuZXdlc3RSZXZpZXdzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInJldmlldyIsImluZGV4IiwicmFuayIsImhlbHBmdWxSZXZpZXdzIiwiaGVscGZ1bG5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFDQSxJQUFNO0FBQUNDLGlCQUFEO0FBQWtCQztBQUFsQixJQUFxQ0YsbUJBQU8sQ0FBQyxvRUFBRCxDQUFsRDs7QUFFQSxTQUFTRyxVQUFULE9BQWlFO0FBQUEsTUFBNUM7QUFBQ0MsYUFBRDtBQUFZQyxTQUFaO0FBQW1CQyxZQUFuQjtBQUE2QkM7QUFBN0IsR0FBNEM7QUFDL0QsTUFBTUMsS0FBSyxHQUFDLFFBQVo7QUFFQSxNQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ0MsK0NBQVEsQ0FDOUM7QUFDRUMsTUFBRSxFQUFFLEVBRE47QUFFRUMsUUFBSSxFQUFFLEVBRlI7QUFHRTtBQUNBQyxvQkFBZ0IsRUFBRTtBQUNoQkMsWUFBTSxFQUFFLEVBRFE7QUFFaEJDLFlBQU0sRUFBRSxFQUZRO0FBR2hCQyxtQkFBYSxFQUFFO0FBSEM7QUFKcEIsR0FEOEMsQ0FBaEQ7QUFhQUMsa0RBQVMsQ0FBRSxNQUFNO0FBQ2ZDLGNBQVUsQ0FBQ2YsU0FBRCxFQUFZQyxLQUFaLENBQVY7QUFDRCxHQUZRLEVBRU4sQ0FBQ0QsU0FBRCxFQUFZQyxLQUFaLENBRk0sQ0FBVDs7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LENBQUMscUZBQU87Ozs7QUFJeEIsaUVBQWUsNEZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUQ7QUFDNUYsWUFBK0Y7O0FBRS9GOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHdGQUFPOzs7O0FBSXhCLGlFQUFlLCtGQUFjLE1BQU0sRSIsImZpbGUiOiJjbGllbnRfcmVsYXRlZFByb2R1Y3RzX1JlbGF0ZWRQZHRfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL0NvbXBhcmlzb24uY3NzJztcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmNvbnN0IHtjb2xsZWN0RmVhdHVyZXMsIGNvbWJpbmVGZWF0dXJlc30gPSByZXF1aXJlKCcuL2ZlYXR1cmVzSGVscGVyJyk7XG5cbmZ1bmN0aW9uIENvbXBhcmlzb24gKHtwcm9kdWN0SWQsIGJ0bklkLCBzaG93Q29tcCwgb25Db21wYUNsb3NlfSkge1xuICBjb25zdCBjaGVjaz1cIlxcdTI3MTNcIjtcblxuICBjb25zdCBbZmVhdHVyZXNDb21wLCBzZXRGZWF0dXJlc0NvbXBdID0gdXNlU3RhdGUoXG4gICAge1xuICAgICAgaWQ6IFtdLFxuICAgICAgbmFtZTogW10sXG4gICAgICAvLyBmZWF0dXJlczogW1tdLCBbXV0sXG4gICAgICBmZWF0dXJlc0NvbWJpbmVkOiB7XG4gICAgICAgIHZhbHVlMTogW10sXG4gICAgICAgIHZhbHVlMjogW10sXG4gICAgICAgIGZlYXR1cmVXVmFsdWU6IFtdXG4gICAgICB9XG4gIH1cbiAgKTtcblxuICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBnZXRGZXR1cmVzKHByb2R1Y3RJZCwgYnRuSWQpO1xuICB9LCBbcHJvZHVjdElkLCBidG5JZF0pXG5cblxuICBjb25zdCBnZXRGZXR1cmVzID0gYXN5bmMgKGN1cnJlbnRJZCwgYnRuSWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmVhdHVyZXNEYXRhMSA9IGF3YWl0IGF4aW9zLmdldChgL3Byb2R1Y3RzLyR7Y3VycmVudElkfWApO1xuICAgICAgY29uc3QgZmVhdHVyZXNEYXRhMiA9IGF3YWl0IGF4aW9zLmdldChgL3Byb2R1Y3RzLyR7YnRuSWR9YCk7XG5cbiAgICAgIGxldCBmZWF0dXJlczEgPSBjb2xsZWN0RmVhdHVyZXMoZmVhdHVyZXNEYXRhMS5kYXRhLmZlYXR1cmVzKTtcbiAgICAgIGxldCBmZWF0dXJlczIgPSBjb2xsZWN0RmVhdHVyZXMoZmVhdHVyZXNEYXRhMi5kYXRhLmZlYXR1cmVzKTtcbiAgICAgIGxldCBmZWF0dXJlc0NvbWJpbmVkID0gY29tYmluZUZlYXR1cmVzKGZlYXR1cmVzMSwgZmVhdHVyZXMyKTtcblxuICAgICAgc2V0RmVhdHVyZXNDb21wKFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFtjdXJyZW50SWQsIGJ0bklkXSxcbiAgICAgICAgICBuYW1lOiBbZmVhdHVyZXNEYXRhMS5kYXRhLm5hbWUsIGZlYXR1cmVzRGF0YTIuZGF0YS5uYW1lXSxcbiAgICAgICAgICAvLyBmZWF0dXJlczogW2ZlYXR1cmVzRGF0YTEuZGF0YS5mZWF0dXJlcywgZmVhdHVyZXNEYXRhMi5kYXRhLmZlYXR1cmVzXSxcbiAgICAgICAgICBmZWF0dXJlc0NvbWJpbmVkOiBmZWF0dXJlc0NvbWJpbmVkXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG5cbiAgfVxuXG4gIGlmICghc2hvd0NvbXApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXRlc3RpZD1cImNvbXBhcmlzb25cIiBjbGFzc05hbWU9XCJjb21wYXJpc29uLWJveCBwb2ludGVyXCIgb25DbGljaz17b25Db21wYUNsb3NlfT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhcmluZ1wiPkNPTVBBUklORzwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyaXNvbi1uYW1lLWxpbmVcIj5cbiAgICAgICAgPHA+e2ZlYXR1cmVzQ29tcC5uYW1lWzBdfTwvcD5cbiAgICAgICAgPHA+e2ZlYXR1cmVzQ29tcC5uYW1lWzFdfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJpc29uLXRhYmxlXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1pZFwiPntwcm9kdWN0SWR9PC9wPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVzQ29tcC5mZWF0dXJlc0NvbWJpbmVkLnZhbHVlMS5tYXAoICh2YWx1ZTEsIGkpID0+IChcbiAgICAgICAgICAgICAgPHAga2V5PXtpfT57dmFsdWUxfTwvcD5cbiAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWlkXCI+dnM8L3A+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZmVhdHVyZXNDb21wLmZlYXR1cmVzQ29tYmluZWQuZmVhdHVyZVdWYWx1ZS5tYXAoIChmZWF0dXJlVmFsdWUsIGkpID0+IChcbiAgICAgICAgICAgICAgPHAga2V5PXtpfT57ZmVhdHVyZVZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWlkXCI+e2J0bklkfTwvcD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlc0NvbXAuZmVhdHVyZXNDb21iaW5lZC52YWx1ZTIubWFwKCAodmFsdWUyLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUyID09PSAnJykge1xuICAgICAgICAgICAgICByZXR1cm4gKDxwIGtleT17aX0gY2xhc3NOYW1lPVwibm8tc2hvd1wiPm51bGw8L3A+KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoPHAga2V5PXtpfSBjbGFzc05hbWU9XCJ2YWx1ZTJcIj57dmFsdWUyfTwvcD4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyaXNvbjtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBPdXRmaXRBZGRDYXJkID0gKHtvbkFkZE91dGZpdENsaWNrfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1vdXRmaXQgcG9pbnRlclwiIG9uQ2xpY2s9e29uQWRkT3V0Zml0Q2xpY2t9PisgQWRkIHRvIE91dGZpdDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBPdXRmaXRBZGRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0LCB7bGF6eSwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vUHJvZHVjdC5jc3MnO1xuaW1wb3J0IFJhdGluZ1N0YXJzIGZyb20gJy4uL3Jldmlld3MvUmF0aW5nU3RhcnMuanN4JztcbmltcG9ydCByYXRpbmdIZWxwZXIgZnJvbSAnLi4vcmV2aWV3cy9yZXZpZXdIZWxwZXJzLmpzJztcblxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5mdW5jdGlvbiBQcm9kdWN0ICh7b3ZlcnZpZXdQcm9kdWN0SWQsIGlkLCBjYXRlZ29yeSwgbmFtZSwgZGVmYXVsdF9wcmljZSwgcmF0aW5nLCBjYXJkQnRuLCBvblByb2R1Y3RCdG5DbGljaywgb25PdXRmaXRCdG5DbGljaywgb25DYXJkQ2xpY2t9KSB7XG4gIGNvbnN0IFtkZXRhaWwsIHNldERldGFpbF0gPSB1c2VTdGF0ZSh7XG4gICAgaW1nOiAnJyxcbiAgICBzYWxlX3ByaWNlOiAwLFxuICAgIG9yaWdpbmFsX3ByaWNlOiAwLFxuICAgIHN0YXJBdmVyYWdlOiAwLjFcbiAgfSk7XG4gIGNvbnN0IFtjbGFzc05hbWUsIHNldENsYXNzTmFtZV0gPSB1c2VTdGF0ZSh7cmVndWxhcjogJycsIHNhbGU6ICdwcm9kdWN0LXNhbGUtcHJpY2Utbm9uZSd9KTtcblxuICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBnZXREZXRhaWwoKTtcbiAgfSwgW10pXG5cbiAgY29uc3QgZ2V0RGV0YWlsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgc3RhckF2ZXJhZ2U7XG4gICAgICBjb25zdCByYXRpbmdEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAvcmV2aWV3cy9tZXRhP3Byb2R1Y3RfaWQ9JHtpZH1gKTtcbiAgICAgIGNvbnN0IHJhdGluZ0F2ZyA9IHJhdGluZ0hlbHBlci5nZXRBdmdSYXRpbmcocmF0aW5nRGF0YS5kYXRhLnJhdGluZ3MpO1xuICAgICAgaXNOYU4ocmF0aW5nQXZnKSA/IHN0YXJBdmVyYWdlID0gMCA6IHN0YXJBdmVyYWdlID0gcmF0aW5nQXZnO1xuICAgICAgYXhpb3MuZ2V0KGAvcHJvZHVjdHMvJHtpZH0vc3R5bGVzYClcbiAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICBsZXQgaW1nTGluaztcbiAgICAgICAgaWYgKCFyZXMuZGF0YS5yZXN1bHRzWzBdLnBob3Rvc1swXS51cmwpIHtcbiAgICAgICAgICBpbWdMaW5rID0gYGh0dHBzOi8vdmN1bml0ZWQuY2x1Yi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMS9Oby1pbWFnZS1hdmFpbGFibGUtMi5qcGdgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltZ0xpbmsgPSByZXMuZGF0YS5yZXN1bHRzWzBdLnBob3Rvc1swXS51cmwuc3BsaXQoJyZ3PScpWzBdICsgJyZ3PTI1MCZxPTgwJztcbiAgICAgICAgfVxuICAgICAgICBzZXREZXRhaWwoe1xuICAgICAgICAgIGltZzogaW1nTGluayxcbiAgICAgICAgICBzYWxlX3ByaWNlOiByZXMuZGF0YS5yZXN1bHRzWzBdLnNhbGVfcHJpY2UsXG4gICAgICAgICAgb3JpZ2luYWxfcHJpY2U6IHJlcy5kYXRhLnJlc3VsdHNbMF0ub3JpZ2luYWxfcHJpY2UsXG4gICAgICAgICAgc3RhckF2ZXJhZ2U6IHN0YXJBdmVyYWdlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzLmRhdGEucmVzdWx0c1swXS5zYWxlX3ByaWNlKSB7XG4gICAgICAgICAgc2V0Q2xhc3NOYW1lKHtyZWd1bGFyOiBcInByb2R1Y3QtZGVmYXVsdC1wcmljZVwiLCBzYWxlOiBcInByb2R1Y3Qtc2FsZS1wcmljZVwifSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cblxuICB9XG5cbiAgY29uc3Qgb25DbGlja0FjdGlvbkJ0biA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBpZiAoY2FyZEJ0biA9PT0gJ1xcdTI2MDYnKSB7XG4gICAgICAgIG9uUHJvZHVjdEJ0bkNsaWNrKGlkKTtcbiAgICAgIH0gZWxzZSBpZiAoY2FyZEJ0biA9PT0gJ1xcdTIzMjcnKSB7XG4gICAgICAgIG9uT3V0Zml0QnRuQ2xpY2soaWQpO1xuICAgICAgfVxuICAgIH0gKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicGR0Q2FyZFwiIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYnRuXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImNvbXBhcmUtYnRuIHBvaW50ZXJcIiBvbkNsaWNrPXtvbkNsaWNrQWN0aW9uQnRufT57Y2FyZEJ0bn08L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWRpdiBwb2ludGVyXCIgb25DbGljaz17KCkgPT4gb25DYXJkQ2xpY2soaWQsIG5hbWUpfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCIgc3JjPXtkZXRhaWwuaW1nfSBsb2FkaW5nPVwibGF6eVwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD17YCR7aWR9YCsnTm8gSW1nJ30+PC9pbWc+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1ib3ggcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IG9uQ2FyZENsaWNrKGlkLCBuYW1lKX0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtY2F0ZWdvcnlcIj57Y2F0ZWdvcnl9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57bmFtZX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lLnJlZ3VsYXJ9PiR7ZGV0YWlsLm9yaWdpbmFsX3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZS5zYWxlfT4gICR7ZGV0YWlsLnNhbGVfcHJpY2V9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1pZFwiPmlkOiB7aWR9IC1PdmVydmlld0lkOiB7b3ZlcnZpZXdQcm9kdWN0SWR9PC9wPlxuICAgICAgICA8UmF0aW5nU3RhcnMgcmF0aW5nPXtkZXRhaWwuc3RhckF2ZXJhZ2V9IHNpemU9ezIwfS8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuL1JlbGF0ZWRQZHQuY3NzJztcbmltcG9ydCBPdXRmaXRBZGRDYXJkIGZyb20gJy4vT3V0Zml0QWRkQ2FyZC5qc3gnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0LmpzeCc7XG5pbXBvcnQgQ29tcGFyaXNvbiBmcm9tICcuL0NvbXBhcmlzb24uanN4JztcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuZnVuY3Rpb24gUmVsYXRlZFBkdChwcm9wcykge1xuICBjb25zdCBbcmVsYXRlZFBkdHMsIHNldFJlbGF0ZWRQZHRzXSA9IHVzZVN0YXRlKHtwZHRfaWRzOiBbXSwgcHJvZHVjdHM6IFtdfSk7XG4gIGNvbnN0IFtwZHRMYXlPdXQsIHNldFBkdExheU91dF09IHVzZVN0YXRlKHtkaXNwbGF5Rmlyc3RJZDogMCwgdG90YWxJdGVtczogMCwgcGR0TGVmdEJ0bjogJ3BvaW50ZXIgYnRuLUluYWN0aXZlJywgcGR0UmlnaHRCdG46ICdwb2ludGVyIHJpZ2h0QnRuIGJ0bi1JbmFjdGl2ZSd9KTtcbiAgY29uc3QgW291dGZpdHMsIHNldE91dGZpdHNdID0gdXNlU3RhdGUoe3BkdF9pZHM6IFtdLCBwcm9kdWN0czogW119KTtcbiAgY29uc3QgW291dGZpdExheU91dCwgc2V0T3V0Zml0TGF5T3V0XT0gdXNlU3RhdGUoe2Rpc3BsYXlGaXJzdElkOiAwLCB0b3RhbEl0ZW1zOiAwLCBwZHRMZWZ0QnRuOiAncG9pbnRlciBidG4tSW5hY3RpdmUnLCBwZHRSaWdodEJ0bjogJ3BvaW50ZXIgcmlnaHRCdG4gYnRuLUluYWN0aXZlJ30pO1xuICBjb25zdCBbY2xpY2tlZElkLCBzZXRDbGlja2VkSWRdID0gdXNlU3RhdGUocHJvcHMucHJvZHVjdElkKTtcbiAgY29uc3QgW2J0bklkLCBzZXRCdG5JZF0gPSB1c2VTdGF0ZShwcm9wcy5wcm9kdWN0SWQpO1xuICBjb25zdCBbc2hvd0NvbXAsIHNldFNob3dDb21wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGxheVBkdEl0ZW1zID0gNDtcbiAgY29uc3QgZGlzcGxheU91dGZpdEl0ZW1zID0gZGlzcGxheVBkdEl0ZW1zIC0gMTtcblxuICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBnZXRPdXRmaXRzKCk7XG4gICAgZ2V0UmVsYXRlZFBkdHMocHJvcHMucHJvZHVjdElkKTtcbiAgfSwgW3Byb3BzLnByb2R1Y3RJZF0pXG5cbiAgY29uc3QgcGFyc2VMYXlvdXQgPSAoZGlzcGxheUZpcnN0SWQsIHRvdGFsSXRlbXMsIHBkdExlZnRCdG4sIHBkdFJpZ2h0QnRuKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXlGaXJzdElkOiBkaXNwbGF5Rmlyc3RJZCxcbiAgICAgIHRvdGFsSXRlbXM6IHRvdGFsSXRlbXMsXG4gICAgICBwZHRMZWZ0QnRuOiBwZHRMZWZ0QnRuLFxuICAgICAgcGR0UmlnaHRCdG46IHBkdFJpZ2h0QnRuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0UmVsYXRlZFBkdHMgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGR0X2lkcyA9IGF3YWl0IGF4aW9zLmdldChgL3Byb2R1Y3RzLyR7aWR9L3JlbGF0ZWRgKTtcbiAgICAgIGxldCBwZHRfaWRzRGF0YSA9IFtdO1xuICAgICAgcGR0X2lkcy5kYXRhLmZvckVhY2goIHBkdF9pZCA9PiB7XG4gICAgICAgIGlmICghcGR0X2lkc0RhdGEuaW5jbHVkZXMocGR0X2lkKSAmJiBwZHRfaWQgIT09IHByb3BzLnByb2R1Y3RJZCkge1xuICAgICAgICAgIHBkdF9pZHNEYXRhLnB1c2gocGR0X2lkKTtcbiAgICAgICAgfVxuICAgICAgfSApXG5cbiAgICAgIGxldCBwZHRQcm9taXNlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZHRfaWRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBwZHRQcm9taXNlc1tpXSA9IGF4aW9zLmdldChgL3Byb2R1Y3RzLyR7cGR0X2lkc0RhdGFbaV19YClcbiAgICAgIH1cbiAgICAgIFByb21pc2UuYWxsKHBkdFByb21pc2VzKVxuICAgICAgICAudGhlbiggKHByb2R1Y3RzRGF0YSkgPT4ge1xuICAgICAgICAgIGxldCBwcm9kdWN0cyA9IHByb2R1Y3RzRGF0YS5tYXAoIHBkdERhdGEgPT4gKHBkdERhdGEuZGF0YSkgKTtcbiAgICAgICAgICBsZXQgcmlnaHRCdG47XG4gICAgICAgICAgc2V0UmVsYXRlZFBkdHMoe3BkdF9pZHM6IHBkdF9pZHNEYXRhLCBwcm9kdWN0czogcHJvZHVjdHN9KTtcbiAgICAgICAgICBpZiAocGR0X2lkc0RhdGEubGVuZ3RoID4gZGlzcGxheVBkdEl0ZW1zIC0gMSkge1xuICAgICAgICAgICAgcmlnaHRCdG4gPSAncG9pbnRlciByaWdodEJ0bic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJpZ2h0QnRuID0gJ3BvaW50ZXIgcmlnaHRCdG4gYnRuLUluYWN0aXZlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0UGR0TGF5T3V0KHBhcnNlTGF5b3V0KDAsIHBkdF9pZHNEYXRhLmxlbmd0aCwgJ3BvaW50ZXIgYnRuLUluYWN0aXZlJywgcmlnaHRCdG4pKVxuICAgICAgICB9IClcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldE91dGZpdHMgPSAoKSA9PiB7XG4gICAgbGV0IHNhdmVkT3V0Zml0LCBzYXZlZE91dGZpdElkcywgcmlnaHRCdG47XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvdXRmaXQnKSAhPT0gbnVsbCkge1xuICAgICAgc2F2ZWRPdXRmaXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvdXRmaXQnKSk7XG4gICAgICBzYXZlZE91dGZpdElkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ291dGZpdElkJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYXZlZE91dGZpdCA9IFtdO1xuICAgICAgc2F2ZWRPdXRmaXRJZHMgPSBbXTtcbiAgICB9XG4gICAgc2V0T3V0Zml0cyh7cGR0X2lkczogc2F2ZWRPdXRmaXRJZHMsIHByb2R1Y3RzOiBzYXZlZE91dGZpdH0pO1xuICAgIGlmIChzYXZlZE91dGZpdElkcy5sZW5ndGggPiBkaXNwbGF5T3V0Zml0SXRlbXMgLSAxKSB7XG4gICAgICByaWdodEJ0biA9ICdwb2ludGVyIHJpZ2h0QnRuJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmlnaHRCdG4gPSAncG9pbnRlciByaWdodEJ0biBidG4tSW5hY3RpdmUnO1xuICAgIH1cbiAgICBzZXRPdXRmaXRMYXlPdXQocGFyc2VMYXlvdXQoMCwgc2F2ZWRPdXRmaXRJZHMubGVuZ3RoLCAncG9pbnRlciBidG4tSW5hY3RpdmUnLCByaWdodEJ0bikpXG4gIH1cblxuICBjb25zdCBhZGRPdXRmaXQgPSBhc3luYyAoc2VsZWN0ZWRJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdPdXRmaXREYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAvcHJvZHVjdHMvJHtzZWxlY3RlZElkfWApO1xuICAgICAgbGV0IG5ld091dGZpdCA9IG5ld091dGZpdERhdGEuZGF0YTtcblxuICAgICAgbGV0IHNhdmVkT3V0Zml0LCBzYXZlZE91dGZpdElkcztcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3V0Zml0JykgIT09IG51bGwpIHtcbiAgICAgICAgc2F2ZWRPdXRmaXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvdXRmaXQnKSk7XG4gICAgICAgIHNhdmVkT3V0Zml0SWRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3V0Zml0SWQnKSk7XG4gICAgICAgIGlmICghc2F2ZWRPdXRmaXRJZHMuaW5jbHVkZXMobmV3T3V0Zml0LmlkKSkge1xuICAgICAgICAgIHNhdmVkT3V0Zml0LnB1c2gobmV3T3V0Zml0KTtcbiAgICAgICAgICBzYXZlZE91dGZpdElkcy5wdXNoKG5ld091dGZpdC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVkT3V0Zml0ID0gW25ld091dGZpdF07XG4gICAgICAgIHNhdmVkT3V0Zml0SWRzID0gW25ld091dGZpdC5pZF07XG4gICAgICB9XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvdXRmaXRJZCcsIEpTT04uc3RyaW5naWZ5KHNhdmVkT3V0Zml0SWRzKSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3V0Zml0JywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRPdXRmaXQpKTtcbiAgICAgIHNldE91dGZpdHMoe3BkdF9pZHM6IHNhdmVkT3V0Zml0SWRzLCBwcm9kdWN0czogc2F2ZWRPdXRmaXR9KTtcblxuICAgICAgaWYgKG91dGZpdExheU91dC5kaXNwbGF5Rmlyc3RJZCArIGRpc3BsYXlPdXRmaXRJdGVtcyA9PT0gc2F2ZWRPdXRmaXRJZHMubGVuZ3RoKSB7XG4gICAgICAgIHNldE91dGZpdExheU91dChwYXJzZUxheW91dChvdXRmaXRMYXlPdXQuZGlzcGxheUZpcnN0SWQsIHNhdmVkT3V0Zml0SWRzLmxlbmd0aCwgJ3BvaW50ZXIgYnRuLUluYWN0aXZlJywgJ3BvaW50ZXIgcmlnaHRCdG4nKSk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmVPdXRmaXQgPSAoc2VsZWN0ZWRJZCkgPT4ge1xuXG4gICAgbGV0IHNhdmVkT3V0Zml0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3V0Zml0JykpO1xuICAgIGxldCBzYXZlZE91dGZpdElkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ291dGZpdElkJykpO1xuICAgIGxldCB0b0RlbGV0ZUlkID0gc2F2ZWRPdXRmaXRJZHMuaW5kZXhPZihzZWxlY3RlZElkKTtcbiAgICBzYXZlZE91dGZpdC5zcGxpY2UodG9EZWxldGVJZCwgMSk7XG4gICAgc2F2ZWRPdXRmaXRJZHMuc3BsaWNlKHRvRGVsZXRlSWQsIDEpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ291dGZpdElkJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ291dGZpdElkJywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRPdXRmaXRJZHMpKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnb3V0Zml0Jyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ291dGZpdCcsIEpTT04uc3RyaW5naWZ5KHNhdmVkT3V0Zml0KSk7XG4gICAgc2V0T3V0Zml0cyh7cGR0X2lkczogc2F2ZWRPdXRmaXRJZHMsIHByb2R1Y3RzOiBzYXZlZE91dGZpdH0pO1xuXG4gICAgaWYgKG91dGZpdExheU91dC5kaXNwbGF5Rmlyc3RJZCArIGRpc3BsYXlPdXRmaXRJdGVtcyA9PT0gc2F2ZWRPdXRmaXRJZHMubGVuZ3RoICsgMSkge1xuICAgICAgc2V0T3V0Zml0TGF5T3V0KHBhcnNlTGF5b3V0KG91dGZpdExheU91dC5kaXNwbGF5Rmlyc3RJZCwgc2F2ZWRPdXRmaXRJZHMubGVuZ3RoLCBvdXRmaXRMYXlPdXQucGR0TGVmdEJ0biwgJ3BvaW50ZXIgcmlnaHRCdG4gYnRuLUluYWN0aXZlJykpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNsaWRlTGVmdCA9IChjYXJvdXNlbCwgcHJvZHVjdHMsIGl0ZW1OdW0pID0+IHtcbiAgICBsZXQgbGVmdEJ0biwgdXBkYXRlZExheW91dDtcbiAgICBpZiAoY2Fyb3VzZWwuZGlzcGxheUZpcnN0SWQgPiAwKSB7XG4gICAgICBpZiAoY2Fyb3VzZWwuZGlzcGxheUZpcnN0SWQgPT09IDEpIHtcbiAgICAgICAgbGVmdEJ0biA9ICdwb2ludGVyIGJ0bi1JbmFjdGl2ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0QnRuID0gJ3BvaW50ZXInO1xuICAgICAgfVxuICAgICAgdXBkYXRlZExheW91dCA9IHBhcnNlTGF5b3V0KGNhcm91c2VsLmRpc3BsYXlGaXJzdElkIC0gMSwgcHJvZHVjdHMucGR0X2lkcy5sZW5ndGgsIGxlZnRCdG4sICdwb2ludGVyIHJpZ2h0QnRuJyk7XG4gICAgICBpZiAoaXRlbU51bSA9PT0gZGlzcGxheVBkdEl0ZW1zKSB7XG4gICAgICAgIHNldFBkdExheU91dCh1cGRhdGVkTGF5b3V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE91dGZpdExheU91dCh1cGRhdGVkTGF5b3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzbGlkZVJpZ2h0ID0gKGNhcm91c2VsLCBwcm9kdWN0cywgaXRlbU51bSkgPT4ge1xuICAgIGxldCByaWdodEJ0biwgdXBkYXRlZExheW91dDtcbiAgICBpZiAoY2Fyb3VzZWwudG90YWxJdGVtcyA+IGNhcm91c2VsLmRpc3BsYXlGaXJzdElkICsgaXRlbU51bSAtIDEpIHtcbiAgICAgIGlmIChwcm9kdWN0cy5wZHRfaWRzLmxlbmd0aCA+IGNhcm91c2VsLmRpc3BsYXlGaXJzdElkICsgaXRlbU51bSkge1xuICAgICAgICByaWdodEJ0biA9ICdwb2ludGVyIHJpZ2h0QnRuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJpZ2h0QnRuID0gJ3BvaW50ZXIgcmlnaHRCdG4gYnRuLUluYWN0aXZlJztcbiAgICAgIH1cbiAgICAgIHVwZGF0ZWRMYXlvdXQgPSBwYXJzZUxheW91dChjYXJvdXNlbC5kaXNwbGF5Rmlyc3RJZCArIDEsIHByb2R1Y3RzLnBkdF9pZHMubGVuZ3RoLCAncG9pbnRlcicsIHJpZ2h0QnRuKTtcbiAgICAgIGlmIChpdGVtTnVtID09PSBkaXNwbGF5UGR0SXRlbXMpIHtcbiAgICAgICAgc2V0UGR0TGF5T3V0KHVwZGF0ZWRMYXlvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0T3V0Zml0TGF5T3V0KHVwZGF0ZWRMYXlvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uUHJvZHVjdEJ0bkNsaWNrID0gKGJ0bklkKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ29uUHJvZHVjdEJ0bkNsaWNrJywgYnRuSWQpO1xuICAgIHNldFNob3dDb21wKHRydWUpO1xuICAgIHNldEJ0bklkKGJ0bklkKTtcbiAgfVxuXG4gIGNvbnN0IG9uQ29tcGFDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRTaG93Q29tcChmYWxzZSk7XG4gIH1cblxuICBjb25zdCBvbkFkZE91dGZpdENsaWNrID0gKCkgPT4ge1xuICAgIGFkZE91dGZpdChwcm9wcy5wcm9kdWN0SWQpO1xuICB9XG5cbiAgY29uc3Qgb25PdXRmaXRCdG5DbGljayA9IChidG5JZCkgPT4ge1xuICAgIHJlbW92ZU91dGZpdCAoYnRuSWQpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJyZWxhdGVkUGR0XCIgb25DbGljaz17b25Db21wYUNsb3NlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRlZC1wcm9kdWN0LXdpZGdldFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVsYXRlZC1wcm9kdWN0LWhlYWRlclwiPlJFTEFURUQgUFJPRFVDVFM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtcHJvZHVjdC1ib3hcIj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGR0TGF5T3V0LnBkdExlZnRCdG59XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZUxlZnQocGR0TGF5T3V0LCByZWxhdGVkUGR0cywgZGlzcGxheVBkdEl0ZW1zKX1cbiAgICAgICAgICA+eydcXHUxNDM4J308L2xhYmVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlbGF0ZWRQZHRzLnByb2R1Y3RzLnNsaWNlKHBkdExheU91dC5kaXNwbGF5Rmlyc3RJZCwgcGR0TGF5T3V0LmRpc3BsYXlGaXJzdElkICsgZGlzcGxheVBkdEl0ZW1zKS5tYXAoIHByb2R1Y3QgPT5cbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICBvdmVydmlld1Byb2R1Y3RJZD17cHJvcHMucHJvZHVjdElkfVxuICAgICAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeT17cHJvZHVjdC5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRfcHJpY2U9e3Byb2R1Y3QuZGVmYXVsdF9wcmljZX1cbiAgICAgICAgICAgICAgICAgIGNhcmRCdG49eydcXHUyNjA2J31cbiAgICAgICAgICAgICAgICAgIG9uUHJvZHVjdEJ0bkNsaWNrPXtvblByb2R1Y3RCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIG9uQ2FyZENsaWNrPXtwcm9wcy5vbkNhcmRDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwZHRMYXlPdXQucGR0UmlnaHRCdG59XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZVJpZ2h0KHBkdExheU91dCwgcmVsYXRlZFBkdHMsIGRpc3BsYXlQZHRJdGVtcyl9XG4gICAgICAgICAgPnsnXFx1MTQzMyd9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRmaXQtd2lkZ2V0XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJvdXRmaXQtaGVhZGVyXCI+WU9VUiBPVVRGSVQ8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGZpdC1ib3hcIj5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e291dGZpdExheU91dC5wZHRMZWZ0QnRufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVMZWZ0KG91dGZpdExheU91dCwgb3V0Zml0cywgZGlzcGxheU91dGZpdEl0ZW1zKX1cbiAgICAgICAgICA+eydcXHUxNDM4J308L2xhYmVsPlxuICAgICAgICAgIDxPdXRmaXRBZGRDYXJkIG9uQWRkT3V0Zml0Q2xpY2s9e29uQWRkT3V0Zml0Q2xpY2t9Lz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBvdXRmaXRzLnByb2R1Y3RzLnNsaWNlKG91dGZpdExheU91dC5kaXNwbGF5Rmlyc3RJZCwgb3V0Zml0TGF5T3V0LmRpc3BsYXlGaXJzdElkICsgZGlzcGxheU91dGZpdEl0ZW1zKS5tYXAoIG91dGZpdCA9PlxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgICAgICAgIGtleT17b3V0Zml0LmlkfVxuICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdQcm9kdWN0SWQ9e3Byb3BzLnByb2R1Y3RJZH1cbiAgICAgICAgICAgICAgICAgIGlkPXtvdXRmaXQuaWR9XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeT17b3V0Zml0LmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgbmFtZT17b3V0Zml0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0X3ByaWNlPXtvdXRmaXQuZGVmYXVsdF9wcmljZX1cbiAgICAgICAgICAgICAgICAgIGNhcmRCdG49eydcXHUyMzI3J31cbiAgICAgICAgICAgICAgICAgIG9uT3V0Zml0QnRuQ2xpY2s9e29uT3V0Zml0QnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBvbkNhcmRDbGljaz17cHJvcHMub25DYXJkQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17b3V0Zml0TGF5T3V0LnBkdFJpZ2h0QnRufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVSaWdodChvdXRmaXRMYXlPdXQsIG91dGZpdHMsIGRpc3BsYXlPdXRmaXRJdGVtcyl9XG4gICAgICAgICAgPnsnXFx1MTQzMyd9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENvbXBhcmlzb24gcHJvZHVjdElkPXtwcm9wcy5wcm9kdWN0SWR9IGJ0bklkPXtidG5JZH0gc2hvd0NvbXA9e3Nob3dDb21wfSBvbkNvbXBhQ2xvc2U9e29uQ29tcGFDbG9zZX0vPlxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxhdGVkUGR0O1xuIiwiXG5jb25zdCBjb2xsZWN0RmVhdHVyZXMgPSAoZmVhdHVyZXMpID0+IHtcbiAgbGV0IGNvbGxlY3RlZEZlYXR1cmVzID0ge1xuICAgIGZlYXR1cmU6IFtdLFxuICAgIHZhbHVlOiBbXSxcbiAgICBmZWF0dXJlQW5kVmFsdWU6IFtdXG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbmV3RmVhdHVyZVZhbHVlO1xuICAgIGlmIChmZWF0dXJlc1tpXS52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgbmV3RmVhdHVyZVZhbHVlID0gYCR7ZmVhdHVyZXNbaV0uZmVhdHVyZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdGZWF0dXJlVmFsdWUgPSBgJHtmZWF0dXJlc1tpXS5mZWF0dXJlfSAke2ZlYXR1cmVzW2ldLnZhbHVlLnJlcGxhY2UoL1teYS16QS1aIF0vZywgJycpfWA7XG4gICAgfVxuXG4gICAgaWYgKGNvbGxlY3RlZEZlYXR1cmVzLmZlYXR1cmVBbmRWYWx1ZS5pbmRleE9mKG5ld0ZlYXR1cmVWYWx1ZSkgPCAwKSB7XG4gICAgICBjb2xsZWN0ZWRGZWF0dXJlcy5mZWF0dXJlLnB1c2goZmVhdHVyZXNbaV0uZmVhdHVyZSk7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0udmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgY29sbGVjdGVkRmVhdHVyZXMudmFsdWUucHVzaChudWxsKTtcbiAgICAgICAgY29sbGVjdGVkRmVhdHVyZXMuZmVhdHVyZUFuZFZhbHVlLnB1c2gobmV3RmVhdHVyZVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3RlZEZlYXR1cmVzLnZhbHVlLnB1c2goZmVhdHVyZXNbaV0udmFsdWUucmVwbGFjZSgvW15hLXpBLVogXS9nLCAnJykpO1xuICAgICAgICBjb2xsZWN0ZWRGZWF0dXJlcy5mZWF0dXJlQW5kVmFsdWUucHVzaChuZXdGZWF0dXJlVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGVjdGVkRmVhdHVyZXM7XG59XG5cbmNvbnN0IGNvbWJpbmVGZWF0dXJlcyA9IChmZWF0dXJlczEsIGZlYXR1cmVzMikgPT4ge1xuICBjb25zdCBjaGVjaz1cIlxcdTI3MTNcIjtcbiAgbGV0IGNvbWJpbmVkRmVhdHVyZXMgPSB7XG4gICAgdmFsdWUxOiBbXSxcbiAgICB2YWx1ZTI6IFtdLFxuICAgIGZlYXR1cmVXVmFsdWU6IFtdXG4gIH07XG5cbiAgbGV0IHRvRGVsZXRlSW5kZXgyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMxLmZlYXR1cmVBbmRWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpbmRleDIgPSBmZWF0dXJlczIuZmVhdHVyZS5pbmRleE9mKGZlYXR1cmVzMS5mZWF0dXJlW2ldKVxuXG4gICAgaWYgKGluZGV4MiA+IC0xKSB7XG4gICAgICBpZiAoZmVhdHVyZXMyLmZlYXR1cmVBbmRWYWx1ZVtpbmRleDJdID09PSAoZmVhdHVyZXMxLmZlYXR1cmVBbmRWYWx1ZVtpXSkpIHtcbiAgICAgICAgY29tYmluZWRGZWF0dXJlcy52YWx1ZTEucHVzaChjaGVjayk7XG4gICAgICAgIGNvbWJpbmVkRmVhdHVyZXMudmFsdWUyLnB1c2goY2hlY2spO1xuICAgICAgICBjb21iaW5lZEZlYXR1cmVzLmZlYXR1cmVXVmFsdWUucHVzaChmZWF0dXJlczEuZmVhdHVyZUFuZFZhbHVlW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkRmVhdHVyZXMudmFsdWUxLnB1c2goZmVhdHVyZXMxLnZhbHVlW2ldKTtcbiAgICAgICAgY29tYmluZWRGZWF0dXJlcy52YWx1ZTIucHVzaChmZWF0dXJlczIudmFsdWVbaV0pO1xuICAgICAgICBjb21iaW5lZEZlYXR1cmVzLmZlYXR1cmVXVmFsdWUucHVzaChmZWF0dXJlczEuZmVhdHVyZVtpXSk7XG4gICAgICB9XG4gICAgICB0b0RlbGV0ZUluZGV4Mi5wdXNoKGluZGV4Mik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbWJpbmVkRmVhdHVyZXMudmFsdWUxLnB1c2goY2hlY2spO1xuICAgICAgY29tYmluZWRGZWF0dXJlcy52YWx1ZTIucHVzaCgnJyk7XG4gICAgICBjb21iaW5lZEZlYXR1cmVzLmZlYXR1cmVXVmFsdWUucHVzaChmZWF0dXJlczEuZmVhdHVyZUFuZFZhbHVlW2ldKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBqID0gMDsgaiA8IGZlYXR1cmVzMi5mZWF0dXJlQW5kVmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICBpZiAoIXRvRGVsZXRlSW5kZXgyLmluY2x1ZGVzKGopKSB7XG4gICAgICBjb21iaW5lZEZlYXR1cmVzLnZhbHVlMS5wdXNoKCcnKTtcbiAgICAgIGNvbWJpbmVkRmVhdHVyZXMudmFsdWUyLnB1c2goY2hlY2spO1xuICAgICAgY29tYmluZWRGZWF0dXJlcy5mZWF0dXJlV1ZhbHVlLnB1c2goZmVhdHVyZXMyLmZlYXR1cmVBbmRWYWx1ZVtqXSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gY29tYmluZWRGZWF0dXJlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbGxlY3RGZWF0dXJlcyxcbiAgY29tYmluZUZlYXR1cmVzXG59O1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL3Jldmlld0hlbHBlcnMuanMnO1xuXG5cbmNvbnN0IFJhdGluZ1N0YXJzID0gKHtyYXRpbmcsIHNpemV9KSA9PiB7XG4gIGxldCBzdGFyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgZm9udEZhbWlseTogJ1RpbWVzJyxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICBmb250U2l6ZTogYCR7c2l6ZX1weGAsXG4gIH1cblxuICBsZXQgc3RhclBlcmNlbnQgPSBoZWxwZXIucmF0aW5nQ29udmVydGVyKHJhdGluZywgNSk7XG4gIGxldCBwZXJjZW50PSB7ICctLXBlcmNlbnQnOiBgJHtzdGFyUGVyY2VudH0lYCB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3N0YXJzJyBzdHlsZT17ey4uLnN0YXJTdHlsZSwgLi4ucGVyY2VudH19PjwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1N0YXJzOyIsIi8vIEdldCBhdmVyYWdlIHJhdGluZyBmb3Igc3RhcnMgdG8gbmVhcmVzdCAwLjI1XG5jb25zdCBnZXRBdmdSYXRpbmcgPSAoZGF0YSkgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBsZXQgcmF0aW5ncyA9IDA7XG4gIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICB0b3RhbCArPSBOdW1iZXIoa2V5KSAqIE51bWJlcihkYXRhW2tleV0pO1xuICAgICAgcmF0aW5ncyArPSBOdW1iZXIoZGF0YVtrZXldKTtcbiAgfVxuXG4gbGV0IGF2ZXJhZ2UgPSB0b3RhbC9yYXRpbmdzO1xuIHJldHVybiAoTWF0aC5yb3VuZChhdmVyYWdlICogNCkgLyA0KS50b0ZpeGVkKDIpXG59XG5cbi8vIENvbnZlcnQgc3Rhci9iYXIgcmF0aW5ncyB0byBwZXJjZW50YWdlIGZvciBDU1NcbmNvbnN0IHJhdGluZ0NvbnZlcnRlciA9IChyYXRpbmcsIGRpdmlzb3IpID0+IHtcbiAgcmV0dXJuIHJhdGluZyAvIGRpdmlzb3IgKiAxMDA7XG59XG5cbi8vIEdldCB0b3RhbCBudW1iZXIgb2YgcmF0aW5nc1xuY29uc3QgZ2V0UmF0aW5nVG90YWwgPSAoZGF0YSkgPT4ge1xuICBsZXQgcmF0aW5ncyA9IDA7XG4gIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICByYXRpbmdzICs9IE51bWJlcihkYXRhW2tleV0pO1xuICB9XG4gcmV0dXJuIHJhdGluZ3M7XG59XG5cbi8vIEdldCB0b3RhbCBudW1iZXIgb2YgcmVjb21tZW5kc1xuY29uc3QgZ2V0UmVjVG90YWwgPSAoZGF0YSkgPT4ge1xuICBsZXQgcmVjcyA9IDA7XG4gIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgcmVjcyArPSBOdW1iZXIoZGF0YVtrZXldKTtcbiAgfVxuICByZXR1cm4gcmVjcztcbn1cblxuLy8gQ29udmVydCBkYXRlIHRvIE1PTlRIL0REL1lZWVkgZm9ybWF0XG5jb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlKSA9PiB7XG4gIGNvbnN0IG1vbnRocyA9IHtcbiAgICBcIjAxXCI6XCJKYW51YXJ5XCIsXG4gICAgXCIwMlwiOlwiRmVicnVhcnlcIixcbiAgICBcIjAzXCI6XCJNYXJjaFwiLFxuICAgIFwiMDRcIjpcIkFwcmlsXCIsXG4gICAgXCIwNVwiOlwiTWF5XCIsXG4gICAgXCIwNlwiOlwiSnVuZVwiLFxuICAgIFwiMDdcIjpcIkp1bHlcIixcbiAgICBcIjA4XCI6XCJBdWd1c3RcIixcbiAgICBcIjA5XCI6XCJTZXB0ZW1iZXJcIixcbiAgICBcIjEwXCI6XCJPY3RvYmVyXCIsXG4gICAgXCIxMVwiOlwiTm92ZW1iZXJcIixcbiAgICBcIjEyXCI6XCJEZWNlbWJlclwiXG4gIH1cblxuICBsZXQgbW9udGggPSBtb250aHNbZGF0ZS5zbGljZSg1LDcpXTtcbiAgbGV0IGRheSA9IGRhdGUuc2xpY2UoOCwxMCk7XG4gIGxldCB5ZWFyID0gZGF0ZS5zbGljZSgwLDQpO1xuXG4gIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YFxufVxuXG5jb25zdCBjaGFyc1RhYmxlID0ge1xuICBTaXplOiBbJ0Egc2l6ZSB0b28gc21hbGwnLCAnwr0gYSBzaXplIHRvbyBzbWFsbCcsICdQZXJmZWN0JywgJ8K9IGEgc2l6ZSB0b28gYmlnJywgJ0Egc2l6ZSB0b28gd2lkZSddLFxuICBXaWR0aDogWydUb28gbmFycm93JywgJ1NsaWdodGx5IG5hcnJvdycsICdQZXJmZWN0JywgJ1NsaWdodGx5IHdpZGUnLCAnVG9vIHdpZGUnXSxcbiAgQ29tZm9ydDogWydVbmNvbWZvcnRhYmxlJywgJ1NsaWdodGx5IHVuY29tZm9ydGFibGUnLCAnT2snLCAnQ29tZm9ydGFibGUnLCAnUGVyZmVjdCddLFxuICBRdWFsaXR5OiBbJ1Bvb3InLCAnQmVsb3cgYXZlcmFnZScsICdXaGF0IEkgZXhwZWN0ZWQnLCAnUHJldHR5IGdyZWF0JywgJ1BlcmZlY3QnXSxcbiAgTGVuZ3RoOiBbJ1J1bnMgU2hvcnQnLCAnUnVucyBzbGlnaHRseSBzaG9ydCcsICdQZXJmZWN0JywgJ1J1bnMgc2xpZ2h0bHkgbG9uZycsICdSdW5zIGxvbmcnXSxcbiAgRml0OiBbJ1J1bnMgdGlnaHQnLCAnUnVucyBzbGlnaHRseSB0aWdodCcsICdQZXJmZWN0JywgJ1J1bnMgc2xpZ2h0bHkgbG9uZycsICdSdW5zIGxvbmcnXSxcbn1cblxuY29uc3Qgc29ydFJlbGV2YW50UmV2aWV3cyA9IChyZXZpZXdzKSA9PiB7XG4gIGxldCBuZXdlc3RSZXZpZXdzID0gcmV2aWV3cy5zb3J0KChhLCBiKSA9PiBEYXRlLnBhcnNlKGIuZGF0ZSkgLSBEYXRlLnBhcnNlKGEuZGF0ZSkpO1xuICAgICAgbmV3ZXN0UmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IHsgcmV2aWV3LnJhbmsgPSBpbmRleC80IH0pO1xuXG4gIGxldCBoZWxwZnVsUmV2aWV3cyA9IHJldmlld3Muc29ydCgoYSwgYikgPT4gYi5oZWxwZnVsbmVzcyAtIGEuaGVscGZ1bG5lc3MpO1xuICAgICAgaGVscGZ1bFJldmlld3MubWFwKChyZXZpZXcsIGluZGV4KSA9PiB7IHJldmlldy5yYW5rICs9IGluZGV4IH0pO1xuXG4gIHJldHVybiByZXZpZXdzLnNvcnQoKGEsIGIpID0+IGEucmFuayAtIGIucmFuayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRBdmdSYXRpbmc6IGdldEF2Z1JhdGluZyxcbiAgZ2V0UmF0aW5nVG90YWw6IGdldFJhdGluZ1RvdGFsLFxuICBnZXRSZWNUb3RhbDogZ2V0UmVjVG90YWwsXG4gIHJhdGluZ0NvbnZlcnRlcjogcmF0aW5nQ29udmVydGVyLFxuICBjb252ZXJ0RGF0ZTogY29udmVydERhdGUsXG4gIGNoYXJzVGFibGU6IGNoYXJzVGFibGUsXG4gIHNvcnRSZWxldmFudFJldmlld3M6IHNvcnRSZWxldmFudFJldmlld3Ncbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb21wYXJpc29uLWJveCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5jb21wYXJpc29uLW5hbWUtbGluZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29tcGFyaXNvbi10YWJsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gbWF4LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbGluZS1oZWlnaHQ6IDAuNjtcXG59XFxuXFxuLmNvbXBhcmluZyB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udmFsdWUyIHtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuLm5vLXNob3cge1xcbiAgb3BhY2l0eTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY2xpZW50L3JlbGF0ZWRQcm9kdWN0cy9Db21wYXJpc29uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbXBhcmlzb24tYm94IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmNvbXBhcmlzb24tbmFtZS1saW5lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb21wYXJpc29uLXRhYmxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBtYXgtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBsaW5lLWhlaWdodDogMC42O1xcbn1cXG5cXG4uY29tcGFyaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi52YWx1ZTIge1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbn1cXG5cXG4ubm8tc2hvdyB7XFxuICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWRkLW91dGZpdCxcXG4ucHJvZHVjdC1jYXJkIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHBvd2RlcmJsdWU7ICovXFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmFkZC1vdXRmaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2R1Y3QtaW1hZ2UtZGl2IHtcXG4gIGhlaWdodDogMjMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlO1xcbn1cXG5cXG4ucHJvZHVjdC1jYXRlZ29yeSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5wcm9kdWN0LW5hbWUge1xcbiAgLyogZm9udC13ZWlnaHQ6IDMwMDsgKi9cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbi5wcm9kdWN0LXByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbi5wcm9kdWN0LWRlZmF1bHQtcHJpY2Uge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wcm9kdWN0LXNhbGUtcHJpY2Uge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnByb2R1Y3Qtc2FsZS1wcmljZS1ub25lIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wcm9kdWN0LWlkIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBjb2xvcjogcG93ZGVyYmx1ZTtcXG59XFxuXFxuLnByb2R1Y3QtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcm9kdWN0LWRldGFpbC1ib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGxpbmUtaGVpZ2h0OiAwLjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmNhcmQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk7XFxuICBtYXJnaW4tbGVmdDogMjEwcHg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSA5MCUpOyAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkgNTAlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY2xpZW50L3JlbGF0ZWRQcm9kdWN0cy9Qcm9kdWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdHQUFnRztFQUNoRywrRUFBK0U7QUFDakZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFkZC1vdXRmaXQsXFxuLnByb2R1Y3QtY2FyZCB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlOyAqL1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5hZGQtb3V0Zml0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9kdWN0LWltYWdlLWRpdiB7XFxuICBoZWlnaHQ6IDIzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcG93ZGVyYmx1ZTtcXG59XFxuXFxuLnByb2R1Y3QtY2F0ZWdvcnkge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ucHJvZHVjdC1uYW1lIHtcXG4gIC8qIGZvbnQtd2VpZ2h0OiAzMDA7ICovXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4ucHJvZHVjdC1wcmljZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG4ucHJvZHVjdC1kZWZhdWx0LXByaWNlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ucHJvZHVjdC1zYWxlLXByaWNlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5wcm9kdWN0LXNhbGUtcHJpY2Utbm9uZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucHJvZHVjdC1pZCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgY29sb3I6IHBvd2RlcmJsdWU7XFxufVxcblxcbi5wcm9kdWN0LWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucHJvZHVjdC1kZXRhaWwtYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBsaW5lLWhlaWdodDogMC40O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5jYXJkLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5O1xcbiAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwwKSwgcmdiYSgyNTUsMjU1LDI1NSwgMSkgOTAlKTsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApIDUwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yZWxhdGVkLXByb2R1Y3QtYm94LFxcbi5vdXRmaXQtYm94IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHBvd2RlcmJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzYwcHg7XFxuICB3aWR0aDogMTEwNnB4O1xcbn1cXG5cXG4ucmVsYXRlZC1wcm9kdWN0LXdpZGdldCxcXG4ub3V0Zml0LXdpZGdldCB7XFxuICBtYXJnaW46IGF1dG87XFxuICAvKiB3aWR0aDogMTEwNnB4OyAqL1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5vdXRmaXQtd2lkZ2V0IHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4uYnRuLUluYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5yaWdodEJ0biB7XFxuICB6LWluZGV4OiA4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDg5JTtcXG59XFxuXFxuLnJlbGF0ZWQtcHJvZHVjdC1ib3g6YWZ0ZXIsXFxuLm91dGZpdC1ib3g6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcXG4gIHdpZHRoOiAxMSU7XFxuICBoZWlnaHQ6IDM2MHB4O1xcblxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LDI1NSwyNTUsMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpIDkwJSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NsaWVudC9yZWxhdGVkUHJvZHVjdHMvUmVsYXRlZFBkdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7O0VBRWIsb0JBQW9CO0VBQ3BCLDBGQUEwRjtBQUM1RlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmVsYXRlZC1wcm9kdWN0LWJveCxcXG4ub3V0Zml0LWJveCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBwb3dkZXJibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgd2lkdGg6IDExMDZweDtcXG59XFxuXFxuLnJlbGF0ZWQtcHJvZHVjdC13aWRnZXQsXFxuLm91dGZpdC13aWRnZXQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgLyogd2lkdGg6IDExMDZweDsgKi9cXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3V0Zml0LXdpZGdldCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmJ0bi1JbmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucmlnaHRCdG4ge1xcbiAgei1pbmRleDogODtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1sZWZ0OiA4OSU7XFxufVxcblxcbi5yZWxhdGVkLXByb2R1Y3QtYm94OmFmdGVyLFxcbi5vdXRmaXQtYm94OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XFxuICB3aWR0aDogMTElO1xcbiAgaGVpZ2h0OiAzNjBweDtcXG5cXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSA5MCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Db21wYXJpc29uLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvZHVjdC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlbGF0ZWRQZHQuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==