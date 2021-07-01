(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_overview_Overview_jsx"],{

/***/ "./client/overview/CartActions.jsx":
/*!*****************************************!*\
  !*** ./client/overview/CartActions.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SelectSize_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectSize.jsx */ "./client/overview/SelectSize.jsx");
/* harmony import */ var _SelectQty_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectQty.jsx */ "./client/overview/SelectQty.jsx");




function CartActions(props) {
  // receives:
  // style={this.props.style}
  // selectedStyleId={this.props.selectedStyleId}
  var [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [orderSize, setOrderSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [orderQty, setOrderQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  var saveOrderSize = size => {
    setOrderSize(size);
  };

  var saveOrderQty = qty => {
    setOrderQty(qty);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    calcAndSetInventory(props.style.skus);
  }, [props.style]); // Only re-run the effect if props.style changes
  // multiple skus can be the same size; reduce to a distinct list of size and qty

  var calcAndSetInventory = skus => {
    if (!skus) {
      return;
    }

    var fullInventory = Array.from(Object.values(skus));

    var reducer = (accumulator, current) => {
      if (accumulator[current.size] === undefined) {
        accumulator[current.size] = current.quantity;
      } else {
        accumulator[current.size] = accumulator[current.size] + current.quantity;
      }

      return accumulator;
    };

    setInventory(fullInventory.reduce(reducer, {}));
  };

  if (!props || !inventory) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "o-cart-actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "o-cart-lists"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectSize_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      inventory: inventory,
      saveSize: saveOrderSize
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectQty_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
      inventory: inventory,
      saveQty: saveOrderQty,
      selectedSize: orderSize
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "o-cart-buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "o-add-to-bag"
    }, "Add to bag", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "o-add-to-bag-icon"
    }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "o-add-to-outfit"
    }, "\u2606")));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartActions);

/***/ }),

/***/ "./client/overview/ImageGallery.jsx":
/*!******************************************!*\
  !*** ./client/overview/ImageGallery.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


class ImageGallery extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 0,
      topImageIndex: 0,
      mainImageUrl: '',
      isLoaded: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.setImages = this.setImages.bind(this); // helpful values (not needed in state)

    this.thumbnailsToShow = 7;
  }

  componentDidMount() {
    this.setImages(this.state.selectedImageIndex);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedStyleId != this.props.selectedStyleId && this.props.stylePhotos) {
      this.setState({
        isLoaded: false
      });
      this.setImages(this.state.selectedImageIndex);
    }
  } // calculates which thumbnails to show (when there are more than the max allowed) and sets state


  setImages(selectedImageIndex) {
    // "quantize" the input - if the provided index is out of bounds, bound it
    selectedImageIndex = Math.min(Math.max(selectedImageIndex, 0), this.props.stylePhotos.length - 1); // determine the first visible image in the gallery

    var firstVisibleImage = this.state.topImageIndex;
    var lastVisibleImage = firstVisibleImage + this.thumbnailsToShow - 1;

    if (selectedImageIndex < firstVisibleImage) {
      firstVisibleImage = selectedImageIndex;
    }

    if (selectedImageIndex > lastVisibleImage) {
      firstVisibleImage = selectedImageIndex - this.thumbnailsToShow + 1;
    } // get the main image url and set state


    var mainImage = this.props.stylePhotos[selectedImageIndex].url;
    this.setState({
      selectedImageIndex: selectedImageIndex,
      topImageIndex: firstVisibleImage,
      mainImageUrl: mainImage,
      isLoaded: true
    });
  } // a single click handler for everything on the page; uses classes to determine what was clicked


  handleClick(e) {
    var classes = e.currentTarget.classList; // main image click

    if (classes.contains('o-images-main')) {
      var newMode;

      if (this.props.imageMode === 0) {
        newMode = 1; //normal --> expanded
      } // delete after zoom view is coded


      if (this.props.imageMode === 1) {
        newMode = 0; //expanded --> normal
      } // comment out until zoom view is coded
      // if (this.props.imageMode === 1) {
      //   newMode = 2; //expanded --> zoomed
      // }
      // if (this.props.imageMode === 2) {
      //   newMode = 1; //zoomed --> expanded
      // }


      this.props.setImageMode(newMode);
      return;
    } // thumbnail gallery clicks


    var newSelectedImageIndex = 0;

    if (classes.contains('o-images-thumbnail') || classes.contains('o-images-thumbnail-icon')) {
      newSelectedImageIndex = parseInt(e.currentTarget.id);
    }

    if (classes.contains('back-arrow')) {
      newSelectedImageIndex = Math.max(this.state.selectedImageIndex - 1, 0);
    }

    if (classes.contains('forward-arrow')) {
      newSelectedImageIndex = Math.min(this.state.selectedImageIndex + 1, this.props.stylePhotos.length - 1);
    }

    this.setImages(newSelectedImageIndex);
  } // renders the two versions of the thumbnail gallery (want to make this a subcomonent)


  renderThumbnailGallery() {
    if (!this.props.stylePhotos || this.props.stylePhotos.length === 1) {
      return null;
    }

    ;
    var firstVisibleImageIndex = this.state.topImageIndex;
    var lastVisibleImageIndex = firstVisibleImageIndex + this.thumbnailsToShow - 1;
    var thumbnailList;
    var imgClass;
    var isSelected; // render the thumbnail gallery
    // render the normal view - images

    if (this.props.imageMode === 0) {
      thumbnailList = this.props.stylePhotos.map((photo, index) => {
        isSelected = index === this.state.selectedImageIndex;
        imgClass = 'pointer o-images-thumbnail';

        if (isSelected) {
          imgClass = imgClass + ' ' + 'o-images-selected';
        }

        ;
        imgClass = imgClass.trim();

        if (index >= firstVisibleImageIndex && index <= lastVisibleImageIndex) {
          if (this.props.imageMode === 0) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
              key: index
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
              id: index,
              className: imgClass,
              src: photo.thumbnail_url,
              onClick: this.handleClick
            }));
          }
        }
      });
    } // render the expanded view (icons)


    if (this.props.imageMode === 1) {
      thumbnailList = this.props.stylePhotos.map((photo, index) => {
        isSelected = index === this.state.selectedImageIndex;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
          viewBox: "0 0 100 100",
          width: "100%",
          height: "100%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
          cx: "50",
          cy: "50",
          r: "35",
          className: "o-images-thumbnail-icon pointer",
          id: index,
          onClick: this.handleClick
        }), isSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
          cx: "50",
          cy: "50",
          r: "25",
          className: "o-images-thumbnail-icon selected pointer",
          id: index,
          onClick: this.handleClick
        }) : null));
      });
    } // render the forward/backward arrows


    var backArrow = null;
    var forwardArrow = null;

    if (this.props.imageMode === 0) {
      if (firstVisibleImageIndex > 0) {
        backArrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "pointer back-arrow",
          onClick: this.handleClick
        });
      }

      if (lastVisibleImageIndex < this.props.stylePhotos.length - 1) {
        forwardArrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "pointer forward-arrow",
          onClick: this.handleClick
        });
      }
    } // return elements


    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "back-arrow-container"
    }, backArrow), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, thumbnailList), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "forward-arrow-container"
    }, forwardArrow));
  }

  render() {
    if (!this.state.isLoaded) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "o-images-gallery"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading..."));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: this.props.imageMode === 0 ? "o-images" : "o-images o-expanded"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: this.props.imageMode === 0 ? "o-images-main pointer" : this.props.imageMode === 1 ? "o-images-main o-expanded pointer" : "o-images-main o-zoomed pointer",
        src: this.state.mainImageUrl,
        onClick: this.handleClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
        className: "o-images-thumbnails"
      }, this.renderThumbnailGallery()));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGallery);

/***/ }),

/***/ "./client/overview/Overview.jsx":
/*!**************************************!*\
  !*** ./client/overview/Overview.jsx ***!
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
/* harmony import */ var _ImageGallery_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageGallery.jsx */ "./client/overview/ImageGallery.jsx");
/* harmony import */ var _ProductControls_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductControls.jsx */ "./client/overview/ProductControls.jsx");
/* harmony import */ var _ProductDescription_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductDescription.jsx */ "./client/overview/ProductDescription.jsx");
/* harmony import */ var _overview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview.css */ "./client/overview/overview.css");
/* harmony import */ var _test_overview_testData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../test/overview/testData.js */ "./test/overview/testData.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









class Overview extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      productStyles: [],
      selectedStyleId: null,
      selectedStyle: null,
      imageMode: 0,
      productLoaded: false,
      styleLoaded: false,
      useMockData: false
    };
    this.setStyle = this.setStyle.bind(this);
    this.setImageMode = this.setImageMode.bind(this);
  }

  componentDidMount() {
    this.getProduct(this.props.productId);
    this.getStyles(this.props.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId != this.props.productId) {
      this.setState({
        productLoaded: false,
        styleLoaded: false
      });
      this.getProduct(this.props.productId);
      this.getStyles(this.props.productId);
    }
  }

  setStyle(styleId) {
    var style = this.state.productStyles.find(_ref => {
      var {
        style_id
      } = _ref;
      return style_id === styleId;
    });
    this.setState({
      selectedStyleId: styleId,
      selectedStyle: style
    });
  }

  getStyles(productId, getMockData) {
    var mock = getMockData || this.state.useMockData;
    var styles;
    var selectedStyle;
    var endpoint = "/products/".concat(productId, "/styles");

    try {
      if (mock) {
        // console.log('Overview: Getting mock style data');
        styles = _test_overview_testData_js__WEBPACK_IMPORTED_MODULE_6__.testDataStyles;
        this.setState({
          productStyles: styles,
          selectedStyleId: styles[0].style_id,
          selectedStyle: styles[0],
          isLoaded: true
        });
      }

      if (!mock) {
        this.getAPIData(endpoint).then(response => {
          // console.log('Overview: Received style data from the server:', response);
          styles = response.data.results;
          this.setState({
            productStyles: styles,
            selectedStyleId: styles[0].style_id,
            selectedStyle: styles[0],
            styleLoaded: true
          });
        }).catch(error => {
          console.error('Overview: Error getting style data from the server', error);
        });
      }
    } catch (error) {
      console.error('Overview: Error getting style data', error);
    }
  }

  getProduct(productId) {
    // TODO: mock product data
    var product;
    var endpoint = '/products/' + this.props.productId;
    this.getAPIData(endpoint).then(response => {
      // console.log('Overview: Received product data from the server:', response);
      product = [];
      product.push(response.data);
      this.setState({
        product: product,
        productLoaded: true
      });
    }).catch(error => {
      console.error('Overview: Error getting product data from the server', error);
    });
  }

  getAPIData(endpointUrl) {
    return _asyncToGenerator(function* () {
      try {
        var response = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(endpointUrl); // console.log('Overview: Received data from server');

        return response;
      } catch (error) {
        // console.error('Overview: Error getting data from server');
        return error;
      }
    })();
  }

  setImageMode(mode) {
    // 0: normal, 1: expanded, 2: zoomed
    this.setState({
      imageMode: mode
    });
  }

  render() {
    if (!this.state.productLoaded || !this.state.styleLoaded) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "container o-product-overview"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading..."));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "o-product-overview"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageGallery_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
        selectedStyleId: this.state.selectedStyleId,
        stylePhotos: this.state.selectedStyle.photos,
        imageMode: this.state.imageMode,
        setImageMode: this.setImageMode
      }), this.state.imageMode > 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductControls_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
        product: this.state.product,
        styles: this.state.productStyles,
        selectedStyleId: this.state.selectedStyleId,
        style: this.state.selectedStyle,
        setStyle: this.setStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductDescription_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
        product: this.state.product
      }));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);

/***/ }),

/***/ "./client/overview/ProductControls.jsx":
/*!*********************************************!*\
  !*** ./client/overview/ProductControls.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _overview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview.css */ "./client/overview/overview.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyleSelector_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyleSelector.jsx */ "./client/overview/StyleSelector.jsx");
/* harmony import */ var _CartActions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartActions.jsx */ "./client/overview/CartActions.jsx");
/* harmony import */ var _overviewUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overviewUtils.js */ "./client/overview/overviewUtils.js");
/* harmony import */ var _overviewUtils_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_overviewUtils_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reviews_RatingStars_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reviews/RatingStars.jsx */ "./client/reviews/RatingStars.jsx");
/* harmony import */ var _reviews_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reviews/reviewHelpers.js */ "./client/reviews/reviewHelpers.js");
/* harmony import */ var _reviews_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reviews_reviewHelpers_js__WEBPACK_IMPORTED_MODULE_7__);









class ProductControls extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.renderPrice = this.renderPrice.bind(this);
  } // async getStarAverage() {
  //   let starAverage = 3;
  //   // const ratingData = await axios.get(`/reviews/meta?product_id=${this.props.product[0].id}`);
  // console.log(ratingData);
  // const ratingAvg = ratingHelper.getAvgRating(ratingData.data.ratings);
  // isNaN(ratingAvg) ? starAverage = 0 : starAverage = ratingAvg;
  //   return (
  //     <React.Fragment>
  //       <RatingStars rating={starAverage} size={14} />
  //     </React.Fragment>
  //   );
  // }


  renderPrice() {
    if (this.props.style.sale_price) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "o-product-style-price"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "strikethrough"
      }, _overviewUtils_js__WEBPACK_IMPORTED_MODULE_5___default().toCurrency(this.props.style.original_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "sale"
      }, _overviewUtils_js__WEBPACK_IMPORTED_MODULE_5___default().toCurrency(this.props.style.sale_price))));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "o-product-style-price"
      }, _overviewUtils_js__WEBPACK_IMPORTED_MODULE_5___default().toCurrency(this.props.style.original_price)));
    }
  }

  render() {
    if (!this.props) {
      return null;
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "o-product-controls"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reviews_RatingStars_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
        rating: 3,
        size: 14
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "o-product-category"
      }, this.props.product[0].category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "o-product-name"
      }, this.props.product[0].name), this.renderPrice(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "o-product-style-name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "STYLE > "), this.props.style.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyleSelector_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
        styles: this.props.styles,
        selectedStyleId: this.props.selectedStyleId,
        setStyle: this.props.setStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CartActions_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
        style: this.props.style,
        selectedStyleId: this.props.selectedStyleId
      }));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductControls);

/***/ }),

/***/ "./client/overview/ProductDescription.jsx":
/*!************************************************!*\
  !*** ./client/overview/ProductDescription.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _overview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview.css */ "./client/overview/overview.css");
/* harmony import */ var _relatedProducts_featuresHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../relatedProducts/featuresHelper.js */ "./client/relatedProducts/featuresHelper.js");
/* harmony import */ var _relatedProducts_featuresHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_relatedProducts_featuresHelper_js__WEBPACK_IMPORTED_MODULE_2__);




var ProductDescription = props => {
  var renderFeatures = () => {
    var collectedFeatures = _relatedProducts_featuresHelper_js__WEBPACK_IMPORTED_MODULE_2___default().collectFeatures(props.product[0].features);
    var featuresList = collectedFeatures.featureAndValue.map((feature, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: index
      }, feature);
    });
    return featuresList;
  };

  if (!props) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "o-product-description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "o-product-description-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "o-product-description-slogan"
    }, props.product[0].slogan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "o-product-description-text"
    }, props.product[0].description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "o-product-description-features"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "o-product-description-bullets"
    }, renderFeatures())));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDescription);

/***/ }),

/***/ "./client/overview/SelectQty.jsx":
/*!***************************************!*\
  !*** ./client/overview/SelectQty.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SelectQty(props) {
  // receives:
  // inventory={inventory}
  // saveQty={saveOrderQty}
  // selectedSize={orderSize}
  var maxOrderQuantity = 15;

  var saveQty = event => {
    props.saveQty(Number(event.currentTarget.value));
  };

  var renderQtyOptions = () => {
    if (!props.selectedSize) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "0"
      }, "-");
    } else {
      var maxQty = Math.min(props.inventory[props.selectedSize], maxOrderQuantity);
      var qtyOptions = [...Array(maxQty).keys()].map(qty => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          key: qty + 1,
          value: qty + 1
        }, qty + 1);
      });
      return qtyOptions;
    }
  };

  if (!props) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      name: "qty",
      className: "o-qty-list",
      disabled: !props.selectedSize // selected={!props.selectedSize ? '0' : 1}
      ,
      onChange: saveQty
    }, renderQtyOptions()));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectQty);

/***/ }),

/***/ "./client/overview/SelectSize.jsx":
/*!****************************************!*\
  !*** ./client/overview/SelectSize.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SelectSize(props) {
  // receives:
  // inventory={inventory}
  // saveSize={saveOrderSize}
  var saveSize = event => {
    var size = event.currentTarget.value === 'Select Size' ? null : event.currentTarget.value;
    props.saveSize(size);
  };

  var renderSizeOptions = () => {
    var sizeOptions = Object.keys(props.inventory).map(size => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        key: size,
        value: size
      }, size);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      name: "size",
      className: "o-size-list",
      onChange: saveSize
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "Select Size"
    }, "Select Size"), sizeOptions));
  };

  if (!props) {
    return null; // TODO: need to handle OUT OF STOCK here or below
  } else {
    return renderSizeOptions();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectSize);

/***/ }),

/***/ "./client/overview/StyleSelector.jsx":
/*!*******************************************!*\
  !*** ./client/overview/StyleSelector.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _StyleSwatch_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleSwatch.jsx */ "./client/overview/StyleSwatch.jsx");



function StyleSelector(props) {
  if (!props) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "o-style-selector"
    }, props.styles.map(style => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyleSwatch_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
        key: style.style_id,
        styleId: style.style_id,
        photo: style.photos[0].thumbnail_url,
        isSelected: style.style_id === props.selectedStyleId,
        setStyle: props.setStyle
      });
    }));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSelector);

/***/ }),

/***/ "./client/overview/StyleSwatch.jsx":
/*!*****************************************!*\
  !*** ./client/overview/StyleSwatch.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StyleSwatch(props) {
  var onSwatchClick = () => {
    props.setStyle(props.styleId);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle-container pointer" + (props.isSelected ? ' selected' : ''),
    onClick: onSwatchClick
  }, props.isSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "material-icons"
  }, "check_circle_outline")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "circle-fill",
    src: props.photo,
    alt: "Human model wearing the product style"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSwatch);

/***/ }),

/***/ "./client/overview/overviewUtils.js":
/*!******************************************!*\
  !*** ./client/overview/overviewUtils.js ***!
  \******************************************/
/***/ ((module) => {

// currency formatter
var toCurrency = number => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(Number(number));
};

module.exports = {
  toCurrency: toCurrency
};

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

/***/ "./test/overview/testData.js":
/*!***********************************!*\
  !*** ./test/overview/testData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testDataProduct": () => (/* binding */ testDataProduct),
/* harmony export */   "testDataStyles": () => (/* binding */ testDataStyles),
/* harmony export */   "testDataSelectedStyle": () => (/* binding */ testDataSelectedStyle)
/* harmony export */ });
/* PRODUCT
- - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
var testDataProduct = [{
  "id": 22126,
  "campus": "hr-rpp",
  "name": "Heir Force Ones",
  "slogan": "A sneaker dynasty",
  "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  "category": "Kicks",
  "default_price": "99.00",
  "created_at": "2021-03-18T16:09:30.589Z",
  "updated_at": "2021-03-18T16:09:30.589Z",
  "features": [{
    "feature": "Sole",
    "value": "Rubber"
  }, {
    "feature": "Material",
    "value": "FullControlSkin"
  }, {
    "feature": "Mid-Sole",
    "value": "ControlSupport Arch Bridge"
  }, {
    "feature": "Stitching",
    "value": "Double Stitch"
  }]
}];
/* STYLES
- - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

var testDataStyles = [{
  "style_id": 123167,
  "name": "White & White",
  "original_price": "99.00",
  "sale_price": null,
  "default?": true,
  "photos": [{
    "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }],
  "skus": {
    "714558": {
      "quantity": 14,
      "size": "7"
    },
    "714559": {
      "quantity": 25,
      "size": "7.5"
    },
    "714560": {
      "quantity": 9,
      "size": "8"
    },
    "714561": {
      "quantity": 2,
      "size": "8.5"
    },
    "714562": {
      "quantity": 18,
      "size": "9"
    },
    "714563": {
      "quantity": 12,
      "size": "9.5"
    },
    "714564": {
      "quantity": 10,
      "size": "10"
    },
    "714565": {
      "quantity": 18,
      "size": "10.5"
    },
    "714566": {
      "quantity": 11,
      "size": "11"
    },
    "714567": {
      "quantity": 35,
      "size": "11.5"
    },
    "714568": {
      "quantity": 25,
      "size": "12"
    }
  }
}, {
  "style_id": 123168,
  "name": "White & Red",
  "original_price": "99.00",
  "sale_price": null,
  "default?": false,
  "photos": [{
    "thumbnail_url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }],
  "skus": {
    "714569": {
      "quantity": 14,
      "size": "7"
    },
    "714570": {
      "quantity": 25,
      "size": "7.5"
    },
    "714571": {
      "quantity": 9,
      "size": "8"
    },
    "714572": {
      "quantity": 2,
      "size": "8.5"
    },
    "714573": {
      "quantity": 18,
      "size": "9"
    },
    "714574": {
      "quantity": 12,
      "size": "9.5"
    },
    "714575": {
      "quantity": 10,
      "size": "10"
    },
    "714576": {
      "quantity": 18,
      "size": "10.5"
    },
    "714577": {
      "quantity": 11,
      "size": "11"
    },
    "714578": {
      "quantity": 35,
      "size": "11.5"
    },
    "714579": {
      "quantity": 25,
      "size": "12"
    }
  }
}, {
  "style_id": 123169,
  "name": "White & Black",
  "original_price": "99.00",
  "sale_price": null,
  "default?": false,
  "photos": [{
    "thumbnail_url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
  }],
  "skus": {
    "714580": {
      "quantity": 14,
      "size": "7"
    },
    "714581": {
      "quantity": 25,
      "size": "7.5"
    },
    "714582": {
      "quantity": 9,
      "size": "8"
    },
    "714583": {
      "quantity": 2,
      "size": "8.5"
    },
    "714584": {
      "quantity": 18,
      "size": "9"
    },
    "714585": {
      "quantity": 12,
      "size": "9.5"
    },
    "714586": {
      "quantity": 10,
      "size": "10"
    },
    "714587": {
      "quantity": 18,
      "size": "10.5"
    },
    "714588": {
      "quantity": 11,
      "size": "11"
    },
    "714589": {
      "quantity": 35,
      "size": "11.5"
    },
    "714590": {
      "quantity": 25,
      "size": "12"
    }
  }
}, {
  "style_id": 123170,
  "name": "White & Blue",
  "original_price": "99.00",
  "sale_price": null,
  "default?": false,
  "photos": [{
    "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
  }],
  "skus": {
    "714591": {
      "quantity": 14,
      "size": "7"
    },
    "714592": {
      "quantity": 25,
      "size": "7.5"
    },
    "714593": {
      "quantity": 9,
      "size": "8"
    },
    "714594": {
      "quantity": 2,
      "size": "8.5"
    },
    "714595": {
      "quantity": 18,
      "size": "9"
    },
    "714596": {
      "quantity": 12,
      "size": "9.5"
    },
    "714597": {
      "quantity": 10,
      "size": "10"
    },
    "714598": {
      "quantity": 18,
      "size": "10.5"
    },
    "714599": {
      "quantity": 11,
      "size": "11"
    },
    "714600": {
      "quantity": 35,
      "size": "11.5"
    },
    "714601": {
      "quantity": 25,
      "size": "12"
    }
  }
}];
/* SELECTED STYLE
- - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

var testDataSelectedStyle = [{
  "style_id": 123170,
  "name": "White & Blue",
  "original_price": "99.00",
  "sale_price": null,
  "default?": false,
  "photos": [{
    "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
  }, {
    "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
  }],
  "skus": {
    "714591": {
      "quantity": 14,
      "size": "7"
    },
    "714592": {
      "quantity": 25,
      "size": "7.5"
    },
    "714593": {
      "quantity": 9,
      "size": "8"
    },
    "714594": {
      "quantity": 2,
      "size": "8.5"
    },
    "714595": {
      "quantity": 18,
      "size": "9"
    },
    "714596": {
      "quantity": 12,
      "size": "9.5"
    },
    "714597": {
      "quantity": 10,
      "size": "10"
    },
    "714598": {
      "quantity": 18,
      "size": "10.5"
    },
    "714599": {
      "quantity": 11,
      "size": "11"
    },
    "714600": {
      "quantity": 35,
      "size": "11.5"
    },
    "714601": {
      "quantity": 25,
      "size": "12"
    }
  }
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/overview/overview.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/overview/overview.css ***!
  \****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* BASE STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\na[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer {\n  cursor: pointer;\n}\n\n.o-product-overview select,\n.o-product-overview button {\n  background: none;\n  box-shadow: none;\n  border-radius: 0px;\n  border: 0.1rem solid #5A5A5A;\n  padding: 1rem;\n  margin: 1rem;\n  margin-left: 0;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n\n/* LAYOUT STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\n.o-product-overview {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.o-images {\n  /* ↓ The width when the left and right are on the same row */\n  flex-basis: 50rem;\n  flex-grow: 1;\n  /* max-width: 50rem; */\n  max-width: 100%;\n  position: relative;\n}\n\n.o-product-controls {\n  /* ↓ Grow from nothing */\n  flex-basis: 0;\n  flex-grow: 999;\n  /* ↓ Wrap when the right side is smaller than this */\n  min-width: 20rem;\n\n  margin-top: 1rem;\n  margin-left: 0.8rem;\n}\n\n.o-cart-lists {\n  width: 100%;\n  display: flex;\n}\n\n.o-size-list {\n flex-grow: 1.6;\n}\n\n.o-qty-list {\n  flex-grow: 1;\n}\n\n.o-cart-buttons {\n  width: 100%;\n  display: flex;\n}\n\n.o-add-to-bag {\n  flex-grow: 10;\n  text-align: left;\n}\n\n.o-add-to-outfit {\n  flex-grow: 1;\n}\n\n.o-add-to-bag-icon {\n  float: right;\n}\n\n\n.o-product-description {\n  /* ↓ Grow from... */\n  flex-basis: 100%;\n  max-width: 1000px;\n  margin: auto;\n  margin-bottom: 3rem;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.o-product-description-text {\n  max-width: 45rem;\n  min-width: 20rem;\n}\n\n.o-images-thumbnails {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n}\n\n\n\n/* MODULE STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\n/* IMAGE GALLERY */\n\n.o-images-main {\n  width: 100%;\n  max-height: 39rem;\n  min-height: 39rem;\n  object-fit: cover;\n}\n\n.o-images-thumbnails > * {\n  margin: 0;\n  padding: 0;\n}\n\n.o-images-thumbnails ul {\n  list-style-type: none;\n}\n\n.o-images-thumbnails ul li {\n  width: 4.2rem;\n  height: 4.2rem;\n  margin: 0.6rem 0;\n}\n\n.o-images-thumbnails img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border: solid black 0.05rem;\n}\n\n.o-images nav img.o-images-selected {\n  border-color: white;\n}\n\n.o-images-thumbnails img:hover {\n  border: solid grey 0.05rem;\n}\n\n.back-arrow-container,\n.forward-arrow-container {\n  width: 100%;\n  height: 1rem;\n  text-align: center;\n}\n.back-arrow-container {\n  margin-bottom: 0.25rem;\n}\n.forward-arrow-container {\n  margin-top: -0.25re m;\n}\n\n.back-arrow,\n.forward-arrow {\n  display:inline-block;\n  border-left: 0.75rem solid transparent;\n  border-right: 0.75rem solid transparent;\n}\n\n.back-arrow {\n  border-bottom: 0.75rem solid #DBDBDB;\n}\n\n.forward-arrow {\n  border-top: 0.75rem solid #DBDBDB;\n}\n\n\n\n/* PRODUCT CONTROLS */\n\n.o-product-controls.stars {\n  margin-bottom: 1rem;\n}\n\n.o-product-category {\n  font-weight: 100;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n\n.o-product-name {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-top: 0rem;\n  margin-bottom: 0rem;\n}\n\n.o-product-style-price .strikethrough {\n  text-decoration: line-through;\n}\n\n.o-product-style-price .sale {\n  margin-left: 0.5rem;\n  color: red;\n}\n\n\n/* PRODUCT CONTROLS: STYLE SELECTOR */\n\n.o-style-selector {\n  display: flex;\n  flex-wrap: wrap;\n  width: 99%;\n  row-gap: 1.5rem;\n  column-gap: 2rem;\n\n  margin: 2rem 0rem;\n}\n\n.circle-container {\n  width: 4rem;\n  max-width: 4rem;\n  flex-grow: 1;\n  position: relative;\n}\n\n.circle {\n  background: rgba(15, 28, 63, 0.125);\n  border-radius: 50%;\n  display: block;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n  width: 100%;\n\n  -webkit-box-shadow: 0.05rem 0.05rem 0.1rem 0.05rem #3D3D3D;\n  -moz-box-shadow:    0.05rem 0.05rem 0.1rem 0.05rem #3D3D3D;\n  box-shadow:         0.05rem 0.05rem 0.1rem 0.05rem #3D3D3D;\n  /* [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */\n}\n\n.circle:hover {\n  -webkit-box-shadow: 0.1rem 0.1rem 0.25rem 0.1rem #141414;\n  -moz-box-shadow:    0.1rem 0.1rem 0.25rem 0.1rem #141414;\n  box-shadow:         0.1rem 0.1rem 0.25rem 0.1rem #141414;\n}\n\n.circle::after {\n  border-radius: inherit;\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.circle-fill {\n  height: auto;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n@supports (object-fit: cover) {\n  .circle-fill {\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n.circle-container .icon-container {\n  margin: 0;\n  padding: 0;\n  height: 1.1rem;\n  width: 1.1rem;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.8);\n  z-index: 1;\n  position: absolute;\n  left: 3rem;\n}\n\n.circle-container .icon-container .material-icons {\n  margin: 0;\n  padding: 0;\n  height: 1rem;\n  width: 1rem;\n  z-index: 2;\n  position: relative;\n  top: -0.19rem;\n  left: -0.17rem;\n}\n\n\n/* PRODUCT CONTROLS: ADD TO CART CONTROLS */\n\n\n\n\n\n/* PRODUCT DESCRIPTION */\n\n.o-product-description-slogan {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.o-product-description-features {\n  border-left: solid black 0.1rem;\n}\n\n\n.o-product-description-bullets li {\n  list-style: none;\n  line-height: 2rem;\n  margin-left: 0;\n}\n\n.o-product-description-bullets li::before {\n  content: \"\\E876\";\n  font-family: 'Material Icons';\n  position: relative;\n  left: -0.7rem;\n}\n\n\n/* STATE-RELATED STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\n/* EXPANDED VIEW STYLES */\n\n.o-images.o-expanded {\n  max-width: 100%;\n}\n\n.o-images.o-expanded nav ul li {\n  width: 1.5rem;\n  height: 1.5rem;\n  text-align: center;\n}\n\n.o-images-thumbnail-icon {\n  fill-opacity: 0.5;\n  fill: white;\n  stroke: black;\n  stroke-width: 0.35rem;\n}\n\n.o-images-thumbnail-icon.selected {\n  fill-opacity: 0.9;\n  fill: black;\n}\n", "",{"version":3,"sources":["webpack://./client/overview/overview.css"],"names":[],"mappings":"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","sourcesContent":["\n/* BASE STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\na[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer {\n  cursor: pointer;\n}\n\n.o-product-overview select,\n.o-product-overview button {\n  background: none;\n  box-shadow: none;\n  border-radius: 0px;\n  border: 0.1rem solid #5A5A5A;\n  padding: 1rem;\n  margin: 1rem;\n  margin-left: 0;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n\n/* LAYOUT STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\n.o-product-overview {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.o-images {\n  /* ↓ The width when the left and right are on the same row */\n  flex-basis: 50rem;\n  flex-grow: 1;\n  /* max-width: 50rem; */\n  max-width: 100%;\n  position: relative;\n}\n\n.o-product-controls {\n  /* ↓ Grow from nothing */\n  flex-basis: 0;\n  flex-grow: 999;\n  /* ↓ Wrap when the right side is smaller than this */\n  min-width: 20rem;\n\n  margin-top: 1rem;\n  margin-left: 0.8rem;\n}\n\n.o-cart-lists {\n  width: 100%;\n  display: flex;\n}\n\n.o-size-list {\n flex-grow: 1.6;\n}\n\n.o-qty-list {\n  flex-grow: 1;\n}\n\n.o-cart-buttons {\n  width: 100%;\n  display: flex;\n}\n\n.o-add-to-bag {\n  flex-grow: 10;\n  text-align: left;\n}\n\n.o-add-to-outfit {\n  flex-grow: 1;\n}\n\n.o-add-to-bag-icon {\n  float: right;\n}\n\n\n.o-product-description {\n  /* ↓ Grow from... */\n  flex-basis: 100%;\n  max-width: 1000px;\n  margin: auto;\n  margin-bottom: 3rem;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.o-product-description-text {\n  max-width: 45rem;\n  min-width: 20rem;\n}\n\n.o-images-thumbnails {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n}\n\n\n\n/* MODULE STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\n/* IMAGE GALLERY */\n\n.o-images-main {\n  width: 100%;\n  max-height: 39rem;\n  min-height: 39rem;\n  object-fit: cover;\n}\n\n.o-images-thumbnails > * {\n  margin: 0;\n  padding: 0;\n}\n\n.o-images-thumbnails ul {\n  list-style-type: none;\n}\n\n.o-images-thumbnails ul li {\n  width: 4.2rem;\n  height: 4.2rem;\n  margin: 0.6rem 0;\n}\n\n.o-images-thumbnails img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border: solid black 0.05rem;\n}\n\n.o-images nav img.o-images-selected {\n  border-color: white;\n}\n\n.o-images-thumbnails img:hover {\n  border: solid grey 0.05rem;\n}\n\n.back-arrow-container,\n.forward-arrow-container {\n  width: 100%;\n  height: 1rem;\n  text-align: center;\n}\n.back-arrow-container {\n  margin-bottom: 0.25rem;\n}\n.forward-arrow-container {\n  margin-top: -0.25re m;\n}\n\n.back-arrow,\n.forward-arrow {\n  display:inline-block;\n  border-left: 0.75rem solid transparent;\n  border-right: 0.75rem solid transparent;\n}\n\n.back-arrow {\n  border-bottom: 0.75rem solid #DBDBDB;\n}\n\n.forward-arrow {\n  border-top: 0.75rem solid #DBDBDB;\n}\n\n\n\n/* PRODUCT CONTROLS */\n\n.o-product-controls.stars {\n  margin-bottom: 1rem;\n}\n\n.o-product-category {\n  font-weight: 100;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n\n.o-product-name {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-top: 0rem;\n  margin-bottom: 0rem;\n}\n\n.o-product-style-price .strikethrough {\n  text-decoration: line-through;\n}\n\n.o-product-style-price .sale {\n  margin-left: 0.5rem;\n  color: red;\n}\n\n\n/* PRODUCT CONTROLS: STYLE SELECTOR */\n\n.o-style-selector {\n  display: flex;\n  flex-wrap: wrap;\n  width: 99%;\n  row-gap: 1.5rem;\n  column-gap: 2rem;\n\n  margin: 2rem 0rem;\n}\n\n.circle-container {\n  width: 4rem;\n  max-width: 4rem;\n  flex-grow: 1;\n  position: relative;\n}\n\n.circle {\n  background: rgba(15, 28, 63, 0.125);\n  border-radius: 50%;\n  display: block;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n  width: 100%;\n\n  -webkit-box-shadow: 0.05rem 0.05rem 0.1rem 0.05rem #3D3D3D;\n  -moz-box-shadow:    0.05rem 0.05rem 0.1rem 0.05rem #3D3D3D;\n  box-shadow:         0.05rem 0.05rem 0.1rem 0.05rem #3D3D3D;\n  /* [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */\n}\n\n.circle:hover {\n  -webkit-box-shadow: 0.1rem 0.1rem 0.25rem 0.1rem #141414;\n  -moz-box-shadow:    0.1rem 0.1rem 0.25rem 0.1rem #141414;\n  box-shadow:         0.1rem 0.1rem 0.25rem 0.1rem #141414;\n}\n\n.circle::after {\n  border-radius: inherit;\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.circle-fill {\n  height: auto;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n@supports (object-fit: cover) {\n  .circle-fill {\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n.circle-container .icon-container {\n  margin: 0;\n  padding: 0;\n  height: 1.1rem;\n  width: 1.1rem;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.8);\n  z-index: 1;\n  position: absolute;\n  left: 3rem;\n}\n\n.circle-container .icon-container .material-icons {\n  margin: 0;\n  padding: 0;\n  height: 1rem;\n  width: 1rem;\n  z-index: 2;\n  position: relative;\n  top: -0.19rem;\n  left: -0.17rem;\n}\n\n\n/* PRODUCT CONTROLS: ADD TO CART CONTROLS */\n\n\n\n\n\n/* PRODUCT DESCRIPTION */\n\n.o-product-description-slogan {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.o-product-description-features {\n  border-left: solid black 0.1rem;\n}\n\n\n.o-product-description-bullets li {\n  list-style: none;\n  line-height: 2rem;\n  margin-left: 0;\n}\n\n.o-product-description-bullets li::before {\n  content: \"\\E876\";\n  font-family: 'Material Icons';\n  position: relative;\n  left: -0.7rem;\n}\n\n\n/* STATE-RELATED STYLES\n- - - - - - - - - - - - - - - - - - - - - - - - */\n\n/* EXPANDED VIEW STYLES */\n\n.o-images.o-expanded {\n  max-width: 100%;\n}\n\n.o-images.o-expanded nav ul li {\n  width: 1.5rem;\n  height: 1.5rem;\n  text-align: center;\n}\n\n.o-images-thumbnail-icon {\n  fill-opacity: 0.5;\n  fill: white;\n  stroke: black;\n  stroke-width: 0.35rem;\n}\n\n.o-images-thumbnail-icon.selected {\n  fill-opacity: 0.9;\n  fill: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/overview/overview.css":
/*!**************************************!*\
  !*** ./client/overview/overview.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_overview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./overview.css */ "./node_modules/css-loader/dist/cjs.js!./client/overview/overview.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_overview_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_overview_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvb3ZlcnZpZXcvQ2FydEFjdGlvbnMuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9vdmVydmlldy9JbWFnZUdhbGxlcnkuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9vdmVydmlldy9PdmVydmlldy5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L292ZXJ2aWV3L1Byb2R1Y3RDb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L292ZXJ2aWV3L1Byb2R1Y3REZXNjcmlwdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L292ZXJ2aWV3L1NlbGVjdFF0eS5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L292ZXJ2aWV3L1NlbGVjdFNpemUuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9vdmVydmlldy9TdHlsZVNlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvb3ZlcnZpZXcvU3R5bGVTd2F0Y2guanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9vdmVydmlldy9vdmVydmlld1V0aWxzLmpzIiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZWxhdGVkUHJvZHVjdHMvZmVhdHVyZXNIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3Jldmlld3MvUmF0aW5nU3RhcnMuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9yZXZpZXdzL3Jldmlld0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZmVjLy4vdGVzdC9vdmVydmlldy90ZXN0RGF0YS5qcyIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvb3ZlcnZpZXcvb3ZlcnZpZXcuY3NzIiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9vdmVydmlldy9vdmVydmlldy5jc3M/MTI2ZCJdLCJuYW1lcyI6WyJDYXJ0QWN0aW9ucyIsInByb3BzIiwiaW52ZW50b3J5Iiwic2V0SW52ZW50b3J5IiwidXNlU3RhdGUiLCJvcmRlclNpemUiLCJzZXRPcmRlclNpemUiLCJvcmRlclF0eSIsInNldE9yZGVyUXR5Iiwic2F2ZU9yZGVyU2l6ZSIsInNpemUiLCJzYXZlT3JkZXJRdHkiLCJxdHkiLCJ1c2VFZmZlY3QiLCJjYWxjQW5kU2V0SW52ZW50b3J5Iiwic3R5bGUiLCJza3VzIiwiZnVsbEludmVudG9yeSIsIkFycmF5IiwiZnJvbSIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZXIiLCJhY2N1bXVsYXRvciIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJxdWFudGl0eSIsInJlZHVjZSIsIkltYWdlR2FsbGVyeSIsIlJlYWN0IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInNlbGVjdGVkSW1hZ2VJbmRleCIsInRvcEltYWdlSW5kZXgiLCJtYWluSW1hZ2VVcmwiLCJpc0xvYWRlZCIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldEltYWdlcyIsInRodW1ibmFpbHNUb1Nob3ciLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInNlbGVjdGVkU3R5bGVJZCIsInN0eWxlUGhvdG9zIiwic2V0U3RhdGUiLCJNYXRoIiwibWluIiwibWF4IiwibGVuZ3RoIiwiZmlyc3RWaXNpYmxlSW1hZ2UiLCJsYXN0VmlzaWJsZUltYWdlIiwibWFpbkltYWdlIiwidXJsIiwiZSIsImNsYXNzZXMiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJuZXdNb2RlIiwiaW1hZ2VNb2RlIiwic2V0SW1hZ2VNb2RlIiwibmV3U2VsZWN0ZWRJbWFnZUluZGV4IiwicGFyc2VJbnQiLCJpZCIsInJlbmRlclRodW1ibmFpbEdhbGxlcnkiLCJmaXJzdFZpc2libGVJbWFnZUluZGV4IiwibGFzdFZpc2libGVJbWFnZUluZGV4IiwidGh1bWJuYWlsTGlzdCIsImltZ0NsYXNzIiwiaXNTZWxlY3RlZCIsIm1hcCIsInBob3RvIiwiaW5kZXgiLCJ0cmltIiwidGh1bWJuYWlsX3VybCIsImJhY2tBcnJvdyIsImZvcndhcmRBcnJvdyIsInJlbmRlciIsIk92ZXJ2aWV3IiwicHJvZHVjdCIsInByb2R1Y3RTdHlsZXMiLCJzZWxlY3RlZFN0eWxlIiwicHJvZHVjdExvYWRlZCIsInN0eWxlTG9hZGVkIiwidXNlTW9ja0RhdGEiLCJzZXRTdHlsZSIsImdldFByb2R1Y3QiLCJwcm9kdWN0SWQiLCJnZXRTdHlsZXMiLCJzdHlsZUlkIiwiZmluZCIsInN0eWxlX2lkIiwiZ2V0TW9ja0RhdGEiLCJtb2NrIiwic3R5bGVzIiwiZW5kcG9pbnQiLCJ0ZXN0RGF0YVN0eWxlcyIsImdldEFQSURhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwicHVzaCIsImVuZHBvaW50VXJsIiwiYXhpb3MiLCJtb2RlIiwicGhvdG9zIiwiUHJvZHVjdENvbnRyb2xzIiwicmVuZGVyUHJpY2UiLCJzYWxlX3ByaWNlIiwidXRpbHMiLCJvcmlnaW5hbF9wcmljZSIsImNhdGVnb3J5IiwibmFtZSIsIlByb2R1Y3REZXNjcmlwdGlvbiIsInJlbmRlckZlYXR1cmVzIiwiY29sbGVjdGVkRmVhdHVyZXMiLCJmZWF0dXJlc0hlbHBlciIsImZlYXR1cmVzIiwiZmVhdHVyZXNMaXN0IiwiZmVhdHVyZUFuZFZhbHVlIiwiZmVhdHVyZSIsInNsb2dhbiIsImRlc2NyaXB0aW9uIiwiU2VsZWN0UXR5IiwibWF4T3JkZXJRdWFudGl0eSIsInNhdmVRdHkiLCJldmVudCIsIk51bWJlciIsInZhbHVlIiwicmVuZGVyUXR5T3B0aW9ucyIsInNlbGVjdGVkU2l6ZSIsIm1heFF0eSIsInF0eU9wdGlvbnMiLCJrZXlzIiwiU2VsZWN0U2l6ZSIsInNhdmVTaXplIiwicmVuZGVyU2l6ZU9wdGlvbnMiLCJzaXplT3B0aW9ucyIsIlN0eWxlU2VsZWN0b3IiLCJTdHlsZVN3YXRjaCIsIm9uU3dhdGNoQ2xpY2siLCJ0b0N1cnJlbmN5IiwibnVtYmVyIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbGxlY3RGZWF0dXJlcyIsImkiLCJuZXdGZWF0dXJlVmFsdWUiLCJyZXBsYWNlIiwiaW5kZXhPZiIsImNvbWJpbmVGZWF0dXJlcyIsImZlYXR1cmVzMSIsImZlYXR1cmVzMiIsImNoZWNrIiwiY29tYmluZWRGZWF0dXJlcyIsInZhbHVlMSIsInZhbHVlMiIsImZlYXR1cmVXVmFsdWUiLCJ0b0RlbGV0ZUluZGV4MiIsImluZGV4MiIsImoiLCJpbmNsdWRlcyIsIlJhdGluZ1N0YXJzIiwicmF0aW5nIiwic3RhclN0eWxlIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJzdGFyUGVyY2VudCIsImhlbHBlciIsInBlcmNlbnQiLCJnZXRBdmdSYXRpbmciLCJ0b3RhbCIsInJhdGluZ3MiLCJrZXkiLCJhdmVyYWdlIiwicm91bmQiLCJ0b0ZpeGVkIiwicmF0aW5nQ29udmVydGVyIiwiZGl2aXNvciIsImdldFJhdGluZ1RvdGFsIiwiZ2V0UmVjVG90YWwiLCJyZWNzIiwiY29udmVydERhdGUiLCJkYXRlIiwibW9udGhzIiwibW9udGgiLCJzbGljZSIsImRheSIsInllYXIiLCJjaGFyc1RhYmxlIiwiU2l6ZSIsIldpZHRoIiwiQ29tZm9ydCIsIlF1YWxpdHkiLCJMZW5ndGgiLCJGaXQiLCJzb3J0UmVsZXZhbnRSZXZpZXdzIiwicmV2aWV3cyIsIm5ld2VzdFJldmlld3MiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwicGFyc2UiLCJyZXZpZXciLCJyYW5rIiwiaGVscGZ1bFJldmlld3MiLCJoZWxwZnVsbmVzcyIsInRlc3REYXRhUHJvZHVjdCIsInRlc3REYXRhU2VsZWN0ZWRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUUxQjtB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VUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsUUFBUSxLQUFLLFFBQVEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUss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QUF1QiwrQ0FBK0MsZUFBZSx1QkFBdUIsZUFBZSxHQUFHLHVEQUF1RCxjQUFjLGVBQWUsaUJBQWlCLGdCQUFnQixlQUFlLHVCQUF1QixrQkFBa0IsbUJBQW1CLEdBQUcsMEhBQTBILHNCQUFzQixzQkFBc0IsR0FBRyxxQ0FBcUMsb0NBQW9DLEdBQUcseUNBQXlDLHFCQUFxQixzQkFBc0IsbUJBQW1CLEdBQUcsK0NBQStDLHdCQUF3QixrQ0FBa0MsdUJBQXVCLGtCQUFrQixHQUFHLHlJQUF5SSxvQkFBb0IsR0FBRyxvQ0FBb0Msa0JBQWtCLG1CQUFtQix1QkFBdUIsR0FBRyw4QkFBOEIsc0JBQXNCLGdCQUFnQixrQkFBa0IsMEJBQTBCLEdBQUcsdUNBQXVDLHNCQUFzQixnQkFBZ0IsR0FBRyxxQkFBcUI7QUFDM3JkO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQcUQ7QUFDNUYsWUFBNkY7O0FBRTdGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSXhCLGlFQUFlLDZGQUFjLE1BQU0sRSIsImZpbGUiOiJjbGllbnRfb3ZlcnZpZXdfT3ZlcnZpZXdfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdFNpemUgZnJvbSAnLi9TZWxlY3RTaXplLmpzeCc7XG5pbXBvcnQgU2VsZWN0UXR5IGZyb20gJy4vU2VsZWN0UXR5LmpzeCc7XG5cbmZ1bmN0aW9uIENhcnRBY3Rpb25zKHByb3BzKSB7XG5cbiAgLy8gcmVjZWl2ZXM6XG4gIC8vIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuICAvLyBzZWxlY3RlZFN0eWxlSWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRTdHlsZUlkfVxuXG4gIGNvbnN0IFtpbnZlbnRvcnksIHNldEludmVudG9yeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29yZGVyU2l6ZSwgc2V0T3JkZXJTaXplXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3JkZXJRdHksIHNldE9yZGVyUXR5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHNhdmVPcmRlclNpemUgPSAoc2l6ZSA9PiB7XG4gICAgc2V0T3JkZXJTaXplKHNpemUpO1xuICB9KTtcblxuICBjb25zdCBzYXZlT3JkZXJRdHkgPSAocXR5ID0+IHtcbiAgICBzZXRPcmRlclF0eShxdHkpO1xuICB9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FsY0FuZFNldEludmVudG9yeShwcm9wcy5zdHlsZS5za3VzKTtcbiAgfSwgW3Byb3BzLnN0eWxlXSk7IC8vIE9ubHkgcmUtcnVuIHRoZSBlZmZlY3QgaWYgcHJvcHMuc3R5bGUgY2hhbmdlc1xuXG4gIC8vIG11bHRpcGxlIHNrdXMgY2FuIGJlIHRoZSBzYW1lIHNpemU7IHJlZHVjZSB0byBhIGRpc3RpbmN0IGxpc3Qgb2Ygc2l6ZSBhbmQgcXR5XG4gIGNvbnN0IGNhbGNBbmRTZXRJbnZlbnRvcnkgPSAoc2t1cykgPT4ge1xuICAgIGlmICghc2t1cykgeyByZXR1cm4gfVxuICAgIGxldCBmdWxsSW52ZW50b3J5ID0gQXJyYXkuZnJvbShPYmplY3QudmFsdWVzKHNrdXMpKTtcbiAgICBjb25zdCByZWR1Y2VyID0gKGFjY3VtdWxhdG9yLCBjdXJyZW50KSA9PiB7XG4gICAgICBpZiAoYWNjdW11bGF0b3JbY3VycmVudC5zaXplXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yW2N1cnJlbnQuc2l6ZV0gPSBjdXJyZW50LnF1YW50aXR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjdW11bGF0b3JbY3VycmVudC5zaXplXSA9IGFjY3VtdWxhdG9yW2N1cnJlbnQuc2l6ZV0gKyBjdXJyZW50LnF1YW50aXR5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH1cbiAgICBzZXRJbnZlbnRvcnkoZnVsbEludmVudG9yeS5yZWR1Y2UocmVkdWNlciwge30pKTtcbiAgfVxuXG4gIGlmICghcHJvcHMgfHwgIWludmVudG9yeSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvLWNhcnQtYWN0aW9uc1wiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvLWNhcnQtbGlzdHNcIj5cbiAgICAgICAgICA8U2VsZWN0U2l6ZSBpbnZlbnRvcnk9e2ludmVudG9yeX0gc2F2ZVNpemU9e3NhdmVPcmRlclNpemV9IC8+XG4gICAgICAgICAgPFNlbGVjdFF0eSBpbnZlbnRvcnk9e2ludmVudG9yeX0gc2F2ZVF0eT17c2F2ZU9yZGVyUXR5fSBzZWxlY3RlZFNpemU9e29yZGVyU2l6ZX0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvLWNhcnQtYnV0dG9uc1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiby1hZGQtdG8tYmFnXCI+QWRkIHRvIGJhZzxzcGFuIGNsYXNzTmFtZT1cIm8tYWRkLXRvLWJhZy1pY29uXCI+Kzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm8tYWRkLXRvLW91dGZpdFwiPiYjOTczNDs8L2J1dHRvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydEFjdGlvbnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJbWFnZUluZGV4OiAwLFxuICAgICAgdG9wSW1hZ2VJbmRleDogMCxcbiAgICAgIG1haW5JbWFnZVVybDogJycsXG4gICAgICBpc0xvYWRlZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEltYWdlcyA9IHRoaXMuc2V0SW1hZ2VzLmJpbmQodGhpcyk7XG5cbiAgICAvLyBoZWxwZnVsIHZhbHVlcyAobm90IG5lZWRlZCBpbiBzdGF0ZSlcbiAgICB0aGlzLnRodW1ibmFpbHNUb1Nob3cgPSA3O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRJbWFnZXModGhpcy5zdGF0ZS5zZWxlY3RlZEltYWdlSW5kZXgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmKHByZXZQcm9wcy5zZWxlY3RlZFN0eWxlSWQgIT0gdGhpcy5wcm9wcy5zZWxlY3RlZFN0eWxlSWQgJiYgdGhpcy5wcm9wcy5zdHlsZVBob3Rvcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTG9hZGVkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldEltYWdlcyh0aGlzLnN0YXRlLnNlbGVjdGVkSW1hZ2VJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlcyB3aGljaCB0aHVtYm5haWxzIHRvIHNob3cgKHdoZW4gdGhlcmUgYXJlIG1vcmUgdGhhbiB0aGUgbWF4IGFsbG93ZWQpIGFuZCBzZXRzIHN0YXRlXG4gIHNldEltYWdlcyhzZWxlY3RlZEltYWdlSW5kZXgpIHtcblxuICAgIC8vIFwicXVhbnRpemVcIiB0aGUgaW5wdXQgLSBpZiB0aGUgcHJvdmlkZWQgaW5kZXggaXMgb3V0IG9mIGJvdW5kcywgYm91bmQgaXRcbiAgICBzZWxlY3RlZEltYWdlSW5kZXggPSBNYXRoLm1pbiggTWF0aC5tYXgoc2VsZWN0ZWRJbWFnZUluZGV4LCAwKSwgdGhpcy5wcm9wcy5zdHlsZVBob3Rvcy5sZW5ndGggLSAxKTtcblxuICAgIC8vIGRldGVybWluZSB0aGUgZmlyc3QgdmlzaWJsZSBpbWFnZSBpbiB0aGUgZ2FsbGVyeVxuICAgIGxldCBmaXJzdFZpc2libGVJbWFnZSA9IHRoaXMuc3RhdGUudG9wSW1hZ2VJbmRleDtcbiAgICBsZXQgbGFzdFZpc2libGVJbWFnZSA9IGZpcnN0VmlzaWJsZUltYWdlICsgdGhpcy50aHVtYm5haWxzVG9TaG93IC0gMTtcbiAgICBpZiAoc2VsZWN0ZWRJbWFnZUluZGV4IDwgZmlyc3RWaXNpYmxlSW1hZ2UpIHsgZmlyc3RWaXNpYmxlSW1hZ2UgPSBzZWxlY3RlZEltYWdlSW5kZXg7IH1cbiAgICBpZiAoc2VsZWN0ZWRJbWFnZUluZGV4ID4gbGFzdFZpc2libGVJbWFnZSkgIHsgZmlyc3RWaXNpYmxlSW1hZ2UgPSBzZWxlY3RlZEltYWdlSW5kZXggLSB0aGlzLnRodW1ibmFpbHNUb1Nob3cgKyAxOyB9XG5cbiAgICAvLyBnZXQgdGhlIG1haW4gaW1hZ2UgdXJsIGFuZCBzZXQgc3RhdGVcbiAgICBsZXQgbWFpbkltYWdlID0gdGhpcy5wcm9wcy5zdHlsZVBob3Rvc1tzZWxlY3RlZEltYWdlSW5kZXhdLnVybDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkSW1hZ2VJbmRleDogc2VsZWN0ZWRJbWFnZUluZGV4LFxuICAgICAgdG9wSW1hZ2VJbmRleDogZmlyc3RWaXNpYmxlSW1hZ2UsXG4gICAgICBtYWluSW1hZ2VVcmw6IG1haW5JbWFnZSxcbiAgICAgIGlzTG9hZGVkOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvLyBhIHNpbmdsZSBjbGljayBoYW5kbGVyIGZvciBldmVyeXRoaW5nIG9uIHRoZSBwYWdlOyB1c2VzIGNsYXNzZXMgdG8gZGV0ZXJtaW5lIHdoYXQgd2FzIGNsaWNrZWRcbiAgaGFuZGxlQ2xpY2soZSkge1xuXG4gICAgbGV0IGNsYXNzZXMgPSBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0O1xuXG4gICAgLy8gbWFpbiBpbWFnZSBjbGlja1xuICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdvLWltYWdlcy1tYWluJykpIHtcblxuICAgICAgbGV0IG5ld01vZGU7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbWFnZU1vZGUgPT09IDApIHtcbiAgICAgICAgbmV3TW9kZSA9IDE7IC8vbm9ybWFsIC0tPiBleHBhbmRlZFxuICAgICAgfVxuICAgICAgLy8gZGVsZXRlIGFmdGVyIHpvb20gdmlldyBpcyBjb2RlZFxuICAgICAgaWYgKHRoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAxKSB7XG4gICAgICAgIG5ld01vZGUgPSAwOyAvL2V4cGFuZGVkIC0tPiBub3JtYWxcbiAgICAgIH1cblxuICAgICAgLy8gY29tbWVudCBvdXQgdW50aWwgem9vbSB2aWV3IGlzIGNvZGVkXG4gICAgICAvLyBpZiAodGhpcy5wcm9wcy5pbWFnZU1vZGUgPT09IDEpIHtcbiAgICAgIC8vICAgbmV3TW9kZSA9IDI7IC8vZXhwYW5kZWQgLS0+IHpvb21lZFxuICAgICAgLy8gfVxuICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAyKSB7XG4gICAgICAvLyAgIG5ld01vZGUgPSAxOyAvL3pvb21lZCAtLT4gZXhwYW5kZWRcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMucHJvcHMuc2V0SW1hZ2VNb2RlKG5ld01vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRodW1ibmFpbCBnYWxsZXJ5IGNsaWNrc1xuICAgIGxldCBuZXdTZWxlY3RlZEltYWdlSW5kZXggPSAwO1xuXG4gICAgaWYgKCBjbGFzc2VzLmNvbnRhaW5zKCdvLWltYWdlcy10aHVtYm5haWwnKSB8fCBjbGFzc2VzLmNvbnRhaW5zKCdvLWltYWdlcy10aHVtYm5haWwtaWNvbicpICkge1xuICAgICAgbmV3U2VsZWN0ZWRJbWFnZUluZGV4ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2JhY2stYXJyb3cnKSkge1xuICAgICAgbmV3U2VsZWN0ZWRJbWFnZUluZGV4ID0gTWF0aC5tYXgodGhpcy5zdGF0ZS5zZWxlY3RlZEltYWdlSW5kZXggLSAxLCAwKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2ZvcndhcmQtYXJyb3cnKSkge1xuICAgICAgbmV3U2VsZWN0ZWRJbWFnZUluZGV4ID0gTWF0aC5taW4odGhpcy5zdGF0ZS5zZWxlY3RlZEltYWdlSW5kZXggKyAxLCB0aGlzLnByb3BzLnN0eWxlUGhvdG9zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICB0aGlzLnNldEltYWdlcyhuZXdTZWxlY3RlZEltYWdlSW5kZXgpO1xuXG4gIH1cblxuICAvLyByZW5kZXJzIHRoZSB0d28gdmVyc2lvbnMgb2YgdGhlIHRodW1ibmFpbCBnYWxsZXJ5ICh3YW50IHRvIG1ha2UgdGhpcyBhIHN1YmNvbW9uZW50KVxuICByZW5kZXJUaHVtYm5haWxHYWxsZXJ5KCkge1xuXG4gICAgaWYoIXRoaXMucHJvcHMuc3R5bGVQaG90b3MgfHwgdGhpcy5wcm9wcy5zdHlsZVBob3Rvcy5sZW5ndGggPT09IDEpIHsgcmV0dXJuIG51bGwgfTtcblxuICAgIGNvbnN0IGZpcnN0VmlzaWJsZUltYWdlSW5kZXggPSB0aGlzLnN0YXRlLnRvcEltYWdlSW5kZXg7XG4gICAgY29uc3QgbGFzdFZpc2libGVJbWFnZUluZGV4ID0gZmlyc3RWaXNpYmxlSW1hZ2VJbmRleCArIHRoaXMudGh1bWJuYWlsc1RvU2hvdyAtIDE7XG5cbiAgICBsZXQgdGh1bWJuYWlsTGlzdDtcbiAgICBsZXQgaW1nQ2xhc3M7XG4gICAgbGV0IGlzU2VsZWN0ZWQ7XG5cbiAgICAvLyByZW5kZXIgdGhlIHRodW1ibmFpbCBnYWxsZXJ5XG5cbiAgICAvLyByZW5kZXIgdGhlIG5vcm1hbCB2aWV3IC0gaW1hZ2VzXG4gICAgaWYgKHRoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAwKSB7XG4gICAgICB0aHVtYm5haWxMaXN0ID0gdGhpcy5wcm9wcy5zdHlsZVBob3Rvcy5tYXAoKHBob3RvLCBpbmRleCkgPT4ge1xuXG4gICAgICAgIGlzU2VsZWN0ZWQgPSBpbmRleCA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEltYWdlSW5kZXg7XG4gICAgICAgIGltZ0NsYXNzID0gJ3BvaW50ZXIgby1pbWFnZXMtdGh1bWJuYWlsJztcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHsgaW1nQ2xhc3MgPSBpbWdDbGFzcyArICcgJyArICdvLWltYWdlcy1zZWxlY3RlZCcgfTtcbiAgICAgICAgaW1nQ2xhc3MgPSBpbWdDbGFzcy50cmltKCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID49IGZpcnN0VmlzaWJsZUltYWdlSW5kZXggJiYgaW5kZXggPD0gbGFzdFZpc2libGVJbWFnZUluZGV4KSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGltZyBpZD17aW5kZXh9IGNsYXNzTmFtZT17aW1nQ2xhc3N9IHNyYz17cGhvdG8udGh1bWJuYWlsX3VybH0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJlbmRlciB0aGUgZXhwYW5kZWQgdmlldyAoaWNvbnMpXG4gICAgaWYgKHRoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAxKSB7XG4gICAgICB0aHVtYm5haWxMaXN0ID0gdGhpcy5wcm9wcy5zdHlsZVBob3Rvcy5tYXAoKHBob3RvLCBpbmRleCkgPT4ge1xuICAgICAgICBpc1NlbGVjdGVkID0gaW5kZXggPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJbWFnZUluZGV4O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjM1XCIgY2xhc3NOYW1lPVwiby1pbWFnZXMtdGh1bWJuYWlsLWljb24gcG9pbnRlclwiIGlkPXtpbmRleH0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgICAgeyBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICA/IDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMjVcIiBjbGFzc05hbWU9XCJvLWltYWdlcy10aHVtYm5haWwtaWNvbiBzZWxlY3RlZCBwb2ludGVyXCIgaWQ9e2luZGV4fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIClcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gcmVuZGVyIHRoZSBmb3J3YXJkL2JhY2t3YXJkIGFycm93c1xuICAgIGxldCBiYWNrQXJyb3cgPSBudWxsO1xuICAgIGxldCBmb3J3YXJkQXJyb3cgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAwKSB7XG4gICAgICBpZiAoZmlyc3RWaXNpYmxlSW1hZ2VJbmRleCA+IDApIHtcbiAgICAgICAgYmFja0Fycm93ID0gKDxpIGNsYXNzTmFtZT0ncG9pbnRlciBiYWNrLWFycm93JyBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT48L2k+KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RWaXNpYmxlSW1hZ2VJbmRleCA8IHRoaXMucHJvcHMuc3R5bGVQaG90b3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBmb3J3YXJkQXJyb3cgPSAoPGkgY2xhc3NOYW1lPSdwb2ludGVyIGZvcndhcmQtYXJyb3cnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PjwvaT4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBlbGVtZW50c1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1hcnJvdy1jb250YWluZXJcIj57YmFja0Fycm93fTwvZGl2PlxuICAgICAgICA8dWw+e3RodW1ibmFpbExpc3R9PC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J3YXJkLWFycm93LWNvbnRhaW5lclwiPntmb3J3YXJkQXJyb3d9PC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvLWltYWdlcy1nYWxsZXJ5XCI+XG4gICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAwID8gXCJvLWltYWdlc1wiIDogXCJvLWltYWdlcyBvLWV4cGFuZGVkXCJ9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbWFnZU1vZGUgPT09IDBcbiAgICAgICAgICAgICAgICA/IFwiby1pbWFnZXMtbWFpbiBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuaW1hZ2VNb2RlID09PSAxXG4gICAgICAgICAgICAgICAgICA/IFwiby1pbWFnZXMtbWFpbiBvLWV4cGFuZGVkIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgOiBcIm8taW1hZ2VzLW1haW4gby16b29tZWQgcG9pbnRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUubWFpbkltYWdlVXJsfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiby1pbWFnZXMtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyVGh1bWJuYWlsR2FsbGVyeSgpfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuL0ltYWdlR2FsbGVyeS5qc3gnO1xuaW1wb3J0IFByb2R1Y3RDb250cm9scyBmcm9tICcuL1Byb2R1Y3RDb250cm9scy5qc3gnO1xuaW1wb3J0IFByb2R1Y3REZXNjcmlwdGlvbiBmcm9tICcuL1Byb2R1Y3REZXNjcmlwdGlvbi5qc3gnO1xuXG5pbXBvcnQgJy4vb3ZlcnZpZXcuY3NzJztcbmltcG9ydCB7dGVzdERhdGFTdHlsZXN9IGZyb20gJy4uLy4uL3Rlc3Qvb3ZlcnZpZXcvdGVzdERhdGEuanMnO1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByb2R1Y3Q6IG51bGwsXG4gICAgICBwcm9kdWN0U3R5bGVzOiBbXSxcbiAgICAgIHNlbGVjdGVkU3R5bGVJZDogbnVsbCxcbiAgICAgIHNlbGVjdGVkU3R5bGU6IG51bGwsXG4gICAgICBpbWFnZU1vZGU6IDAsXG4gICAgICBwcm9kdWN0TG9hZGVkOiBmYWxzZSxcbiAgICAgIHN0eWxlTG9hZGVkOiBmYWxzZSxcbiAgICAgIHVzZU1vY2tEYXRhOiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3R5bGUgPSB0aGlzLnNldFN0eWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRJbWFnZU1vZGUgPSB0aGlzLnNldEltYWdlTW9kZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRQcm9kdWN0KHRoaXMucHJvcHMucHJvZHVjdElkKTtcbiAgICB0aGlzLmdldFN0eWxlcyh0aGlzLnByb3BzLnByb2R1Y3RJZCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYocHJldlByb3BzLnByb2R1Y3RJZCAhPSB0aGlzLnByb3BzLnByb2R1Y3RJZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RMb2FkZWQ6IGZhbHNlLFxuICAgICAgICBzdHlsZUxvYWRlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZXRQcm9kdWN0KHRoaXMucHJvcHMucHJvZHVjdElkKTtcbiAgICAgIHRoaXMuZ2V0U3R5bGVzKHRoaXMucHJvcHMucHJvZHVjdElkKTtcbiAgICB9XG4gIH1cblxuICBzZXRTdHlsZShzdHlsZUlkKSB7XG4gICAgbGV0IHN0eWxlID0gdGhpcy5zdGF0ZS5wcm9kdWN0U3R5bGVzLmZpbmQoICh7c3R5bGVfaWR9KSA9PiBzdHlsZV9pZCA9PT0gc3R5bGVJZCApO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRTdHlsZUlkOiBzdHlsZUlkLFxuICAgICAgc2VsZWN0ZWRTdHlsZTogc3R5bGVcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0eWxlcyhwcm9kdWN0SWQsIGdldE1vY2tEYXRhKSB7XG4gICAgY29uc3QgbW9jayA9IChnZXRNb2NrRGF0YSB8fCB0aGlzLnN0YXRlLnVzZU1vY2tEYXRhKTtcblxuICAgIGxldCBzdHlsZXM7XG4gICAgbGV0IHNlbGVjdGVkU3R5bGU7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgL3Byb2R1Y3RzLyR7cHJvZHVjdElkfS9zdHlsZXNgO1xuXG4gICAgdHJ5IHtcblxuICAgICAgaWYgKG1vY2spIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ092ZXJ2aWV3OiBHZXR0aW5nIG1vY2sgc3R5bGUgZGF0YScpO1xuICAgICAgICBzdHlsZXMgPSB0ZXN0RGF0YVN0eWxlcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcHJvZHVjdFN0eWxlczogc3R5bGVzLFxuICAgICAgICAgIHNlbGVjdGVkU3R5bGVJZDogc3R5bGVzWzBdLnN0eWxlX2lkLFxuICAgICAgICAgIHNlbGVjdGVkU3R5bGU6IHN0eWxlc1swXSxcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtb2NrKSB7XG4gICAgICAgIHRoaXMuZ2V0QVBJRGF0YShlbmRwb2ludClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT3ZlcnZpZXc6IFJlY2VpdmVkIHN0eWxlIGRhdGEgZnJvbSB0aGUgc2VydmVyOicsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHN0eWxlcyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBwcm9kdWN0U3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgICAgIHNlbGVjdGVkU3R5bGVJZDogc3R5bGVzWzBdLnN0eWxlX2lkLFxuICAgICAgICAgICAgICBzZWxlY3RlZFN0eWxlOiBzdHlsZXNbMF0sXG4gICAgICAgICAgICAgIHN0eWxlTG9hZGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdPdmVydmlldzogRXJyb3IgZ2V0dGluZyBzdHlsZSBkYXRhIGZyb20gdGhlIHNlcnZlcicsIGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ092ZXJ2aWV3OiBFcnJvciBnZXR0aW5nIHN0eWxlIGRhdGEnLCBlcnJvcik7XG4gICAgfVxuXG4gIH1cblxuICBnZXRQcm9kdWN0KHByb2R1Y3RJZCkge1xuXG4gICAgLy8gVE9ETzogbW9jayBwcm9kdWN0IGRhdGFcbiAgICBsZXQgcHJvZHVjdDtcbiAgICBjb25zdCBlbmRwb2ludCA9ICcvcHJvZHVjdHMvJyArIHRoaXMucHJvcHMucHJvZHVjdElkO1xuXG4gICAgdGhpcy5nZXRBUElEYXRhKGVuZHBvaW50KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnT3ZlcnZpZXc6IFJlY2VpdmVkIHByb2R1Y3QgZGF0YSBmcm9tIHRoZSBzZXJ2ZXI6JywgcmVzcG9uc2UpO1xuICAgICAgICBwcm9kdWN0ID0gW107XG4gICAgICAgIHByb2R1Y3QucHVzaChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcHJvZHVjdDogcHJvZHVjdCxcbiAgICAgICAgICBwcm9kdWN0TG9hZGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ092ZXJ2aWV3OiBFcnJvciBnZXR0aW5nIHByb2R1Y3QgZGF0YSBmcm9tIHRoZSBzZXJ2ZXInLCBlcnJvcik7XG4gICAgICB9KVxuICB9XG5cbiAgYXN5bmMgZ2V0QVBJRGF0YShlbmRwb2ludFVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChlbmRwb2ludFVybCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnT3ZlcnZpZXc6IFJlY2VpdmVkIGRhdGEgZnJvbSBzZXJ2ZXInKTtcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmVycm9yKCdPdmVydmlldzogRXJyb3IgZ2V0dGluZyBkYXRhIGZyb20gc2VydmVyJyk7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgc2V0SW1hZ2VNb2RlKG1vZGUpIHtcbiAgICAvLyAwOiBub3JtYWwsIDE6IGV4cGFuZGVkLCAyOiB6b29tZWRcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltYWdlTW9kZTogbW9kZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUucHJvZHVjdExvYWRlZCB8fCAhdGhpcy5zdGF0ZS5zdHlsZUxvYWRlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG8tcHJvZHVjdC1vdmVydmlld1wiPlxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiby1wcm9kdWN0LW92ZXJ2aWV3XCI+XG4gICAgICAgICAgPEltYWdlR2FsbGVyeVxuICAgICAgICAgICAgc2VsZWN0ZWRTdHlsZUlkPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGVJZH1cbiAgICAgICAgICAgIHN0eWxlUGhvdG9zPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGUucGhvdG9zfVxuICAgICAgICAgICAgaW1hZ2VNb2RlPXt0aGlzLnN0YXRlLmltYWdlTW9kZX1cbiAgICAgICAgICAgIHNldEltYWdlTW9kZT17dGhpcy5zZXRJbWFnZU1vZGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUuaW1hZ2VNb2RlID4gMFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IDxQcm9kdWN0Q29udHJvbHNcbiAgICAgICAgICAgICAgICBwcm9kdWN0PXt0aGlzLnN0YXRlLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt0aGlzLnN0YXRlLnByb2R1Y3RTdHlsZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTdHlsZUlkPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGVJZH1cbiAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlfVxuICAgICAgICAgICAgICAgIHNldFN0eWxlPXt0aGlzLnNldFN0eWxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8UHJvZHVjdERlc2NyaXB0aW9uIHByb2R1Y3Q9e3RoaXMuc3RhdGUucHJvZHVjdH0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9vdmVydmlldy5jc3MnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IFN0eWxlU2VsZWN0b3IgZnJvbSAnLi9TdHlsZVNlbGVjdG9yLmpzeCc7XG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnLi9DYXJ0QWN0aW9ucy5qc3gnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vb3ZlcnZpZXdVdGlscy5qcyc7XG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi4vcmV2aWV3cy9SYXRpbmdTdGFycy5qc3gnO1xuaW1wb3J0IHJhdGluZ0hlbHBlciBmcm9tICcuLi9yZXZpZXdzL3Jldmlld0hlbHBlcnMuanMnO1xuXG5cbmNsYXNzIFByb2R1Y3RDb250cm9scyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZW5kZXJQcmljZSA9IHRoaXMucmVuZGVyUHJpY2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIGFzeW5jIGdldFN0YXJBdmVyYWdlKCkge1xuICAvLyAgIGxldCBzdGFyQXZlcmFnZSA9IDM7XG4gIC8vICAgLy8gY29uc3QgcmF0aW5nRGF0YSA9IGF3YWl0IGF4aW9zLmdldChgL3Jldmlld3MvbWV0YT9wcm9kdWN0X2lkPSR7dGhpcy5wcm9wcy5wcm9kdWN0WzBdLmlkfWApO1xuICAgIC8vIGNvbnNvbGUubG9nKHJhdGluZ0RhdGEpO1xuICAgIC8vIGNvbnN0IHJhdGluZ0F2ZyA9IHJhdGluZ0hlbHBlci5nZXRBdmdSYXRpbmcocmF0aW5nRGF0YS5kYXRhLnJhdGluZ3MpO1xuICAgIC8vIGlzTmFOKHJhdGluZ0F2ZykgPyBzdGFyQXZlcmFnZSA9IDAgOiBzdGFyQXZlcmFnZSA9IHJhdGluZ0F2ZztcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAvLyAgICAgICA8UmF0aW5nU3RhcnMgcmF0aW5nPXtzdGFyQXZlcmFnZX0gc2l6ZT17MTR9IC8+XG4gIC8vICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAvLyAgICk7XG4gIC8vIH1cblxuICByZW5kZXJQcmljZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zdHlsZS5zYWxlX3ByaWNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiby1wcm9kdWN0LXN0eWxlLXByaWNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdHJpa2V0aHJvdWdoXCI+e3V0aWxzLnRvQ3VycmVuY3kodGhpcy5wcm9wcy5zdHlsZS5vcmlnaW5hbF9wcmljZSl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2FsZVwiPnt1dGlscy50b0N1cnJlbmN5KHRoaXMucHJvcHMuc3R5bGUuc2FsZV9wcmljZSl9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm8tcHJvZHVjdC1zdHlsZS1wcmljZVwiPnt1dGlscy50b0N1cnJlbmN5KHRoaXMucHJvcHMuc3R5bGUub3JpZ2luYWxfcHJpY2UpfTwvcD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvLXByb2R1Y3QtY29udHJvbHNcIj5cbiAgICAgICAgICA8UmF0aW5nU3RhcnMgcmF0aW5nPXszfSBzaXplPXsxNH0gLz5cbiAgICAgICAgICB7Lyoge3RoaXMuZ2V0U3RhckF2ZXJhZ2UoKX0gKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiby1wcm9kdWN0LWNhdGVnb3J5XCI+e3RoaXMucHJvcHMucHJvZHVjdFswXS5jYXRlZ29yeX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiby1wcm9kdWN0LW5hbWVcIj57dGhpcy5wcm9wcy5wcm9kdWN0WzBdLm5hbWV9PC9wPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclByaWNlKCl9XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiby1wcm9kdWN0LXN0eWxlLW5hbWVcIj48Yj5TVFlMRSA+IDwvYj57dGhpcy5wcm9wcy5zdHlsZS5uYW1lfTwvcD5cbiAgICAgICAgICA8U3R5bGVTZWxlY3RvciBzdHlsZXM9e3RoaXMucHJvcHMuc3R5bGVzfSBzZWxlY3RlZFN0eWxlSWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRTdHlsZUlkfSBzZXRTdHlsZT17dGhpcy5wcm9wcy5zZXRTdHlsZX0gLz5cbiAgICAgICAgICA8Q2FydEFjdGlvbnMgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IHNlbGVjdGVkU3R5bGVJZD17dGhpcy5wcm9wcy5zZWxlY3RlZFN0eWxlSWR9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENvbnRyb2xzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vb3ZlcnZpZXcuY3NzJztcbmltcG9ydCBmZWF0dXJlc0hlbHBlciBmcm9tICcuLi9yZWxhdGVkUHJvZHVjdHMvZmVhdHVyZXNIZWxwZXIuanMnO1xuXG5jb25zdCBQcm9kdWN0RGVzY3JpcHRpb24gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCByZW5kZXJGZWF0dXJlcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0ZWRGZWF0dXJlcyA9IGZlYXR1cmVzSGVscGVyLmNvbGxlY3RGZWF0dXJlcyhwcm9wcy5wcm9kdWN0WzBdLmZlYXR1cmVzKTtcbiAgICBjb25zdCBmZWF0dXJlc0xpc3QgPSBjb2xsZWN0ZWRGZWF0dXJlcy5mZWF0dXJlQW5kVmFsdWUubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PntmZWF0dXJlfTwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBmZWF0dXJlc0xpc3Q7XG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm8tcHJvZHVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvLXByb2R1Y3QtZGVzY3JpcHRpb24tdGV4dFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm8tcHJvZHVjdC1kZXNjcmlwdGlvbi1zbG9nYW5cIj57cHJvcHMucHJvZHVjdFswXS5zbG9nYW59PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm8tcHJvZHVjdC1kZXNjcmlwdGlvbi10ZXh0XCI+e3Byb3BzLnByb2R1Y3RbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm8tcHJvZHVjdC1kZXNjcmlwdGlvbi1mZWF0dXJlc1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvLXByb2R1Y3QtZGVzY3JpcHRpb24tYnVsbGV0c1wiPlxuICAgICAgICAgICAge3JlbmRlckZlYXR1cmVzKCl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERlc2NyaXB0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNlbGVjdFF0eShwcm9wcykge1xuXG4gIC8vIHJlY2VpdmVzOlxuICAvLyBpbnZlbnRvcnk9e2ludmVudG9yeX1cbiAgLy8gc2F2ZVF0eT17c2F2ZU9yZGVyUXR5fVxuICAvLyBzZWxlY3RlZFNpemU9e29yZGVyU2l6ZX1cblxuICBjb25zdCBtYXhPcmRlclF1YW50aXR5ID0gMTU7XG5cbiAgY29uc3Qgc2F2ZVF0eSA9IChldmVudCA9PiB7XG4gICAgcHJvcHMuc2F2ZVF0eShOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSkpO1xuICB9KTtcblxuICBjb25zdCByZW5kZXJRdHlPcHRpb25zID0gKCgpID0+IHtcblxuICAgIGlmICghcHJvcHMuc2VsZWN0ZWRTaXplKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIHZhbHVlPScwJz4tPC9vcHRpb24+XG4gICAgICApXG4gICAgfSBlbHNlIHtcblxuICAgICAgbGV0IG1heFF0eSA9IE1hdGgubWluKHByb3BzLmludmVudG9yeVtwcm9wcy5zZWxlY3RlZFNpemVdLCBtYXhPcmRlclF1YW50aXR5KTtcbiAgICAgIGNvbnN0IHF0eU9wdGlvbnMgPSBbLi4uQXJyYXkobWF4UXR5KS5rZXlzKCldLm1hcChxdHkgPT4ge1xuICAgICAgICByZXR1cm4gKDxvcHRpb24ga2V5PXtxdHkgKyAxfSB2YWx1ZT17cXR5ICsgMX0+e3F0eSArIDF9PC9vcHRpb24+KVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBxdHlPcHRpb25zO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBuYW1lPVwicXR5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvLXF0eS1saXN0XCJcbiAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLnNlbGVjdGVkU2l6ZX1cbiAgICAgICAgICAvLyBzZWxlY3RlZD17IXByb3BzLnNlbGVjdGVkU2l6ZSA/ICcwJyA6IDF9XG4gICAgICAgICAgb25DaGFuZ2U9e3NhdmVRdHl9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyUXR5T3B0aW9ucygpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RRdHk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU2VsZWN0U2l6ZShwcm9wcykge1xuXG4gIC8vIHJlY2VpdmVzOlxuICAvLyBpbnZlbnRvcnk9e2ludmVudG9yeX1cbiAgLy8gc2F2ZVNpemU9e3NhdmVPcmRlclNpemV9XG5cbiAgY29uc3Qgc2F2ZVNpemUgPSAoZXZlbnQgPT4ge1xuICAgIGxldCBzaXplID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gJ1NlbGVjdCBTaXplJyA/IG51bGwgOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIHByb3BzLnNhdmVTaXplKHNpemUpO1xuICB9KTtcblxuICBjb25zdCByZW5kZXJTaXplT3B0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2l6ZU9wdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy5pbnZlbnRvcnkpLm1hcChzaXplID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtzaXplfSB2YWx1ZT17c2l6ZX0+e3NpemV9PC9vcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cInNpemVcIiBjbGFzc05hbWU9XCJvLXNpemUtbGlzdFwiIG9uQ2hhbmdlPXtzYXZlU2l6ZX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nU2VsZWN0IFNpemUnPlNlbGVjdCBTaXplPC9vcHRpb24+XG4gICAgICAgICAge3NpemVPcHRpb25zfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9KTtcblxuICBpZiAoIXByb3BzKSB7XG4gICAgcmV0dXJuIG51bGw7ICAvLyBUT0RPOiBuZWVkIHRvIGhhbmRsZSBPVVQgT0YgU1RPQ0sgaGVyZSBvciBiZWxvd1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZW5kZXJTaXplT3B0aW9ucygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0U2l6ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVTd2F0Y2ggZnJvbSAnLi9TdHlsZVN3YXRjaC5qc3gnO1xuXG5mdW5jdGlvbiBTdHlsZVNlbGVjdG9yKHByb3BzKSB7XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm8tc3R5bGUtc2VsZWN0b3JcIj5cbiAgICAgICAge1xuICAgICAgICAgIHByb3BzLnN0eWxlcy5tYXAoc3R5bGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxTdHlsZVN3YXRjaFxuICAgICAgICAgICAgICBrZXk9e3N0eWxlLnN0eWxlX2lkfVxuICAgICAgICAgICAgICBzdHlsZUlkPXtzdHlsZS5zdHlsZV9pZH1cbiAgICAgICAgICAgICAgcGhvdG89e3N0eWxlLnBob3Rvc1swXS50aHVtYm5haWxfdXJsfVxuICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtzdHlsZS5zdHlsZV9pZCA9PT0gcHJvcHMuc2VsZWN0ZWRTdHlsZUlkfVxuICAgICAgICAgICAgICBzZXRTdHlsZT17cHJvcHMuc2V0U3R5bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvbmF2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlU2VsZWN0b3I7XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU3R5bGVTd2F0Y2gocHJvcHMpIHtcblxuICBjb25zdCBvblN3YXRjaENsaWNrID0gKCgpPT4ge1xuICAgIHByb3BzLnNldFN0eWxlKHByb3BzLnN0eWxlSWQpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImNpcmNsZS1jb250YWluZXIgcG9pbnRlclwiICsgKHByb3BzLmlzU2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX0gb25DbGljaz17b25Td2F0Y2hDbGlja30+XG4gICAgICB7cHJvcHMuaXNTZWxlY3RlZCA/IDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrX2NpcmNsZV9vdXRsaW5lPC9zcGFuPjwvZGl2PiA6IG51bGx9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNpcmNsZS1maWxsXCIgc3JjPXtwcm9wcy5waG90b30gYWx0PVwiSHVtYW4gbW9kZWwgd2VhcmluZyB0aGUgcHJvZHVjdCBzdHlsZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVTd2F0Y2g7XG5cblxuIiwiXG4vLyBjdXJyZW5jeSBmb3JtYXR0ZXJcbmNvbnN0IHRvQ3VycmVuY3kgPSAobnVtYmVyKSA9PiB7XG5cbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXG4gIH0pXG5cbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG51bWJlcikpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0b0N1cnJlbmN5OiB0b0N1cnJlbmN5XG59XG4iLCJcbmNvbnN0IGNvbGxlY3RGZWF0dXJlcyA9IChmZWF0dXJlcykgPT4ge1xuICBsZXQgY29sbGVjdGVkRmVhdHVyZXMgPSB7XG4gICAgZmVhdHVyZTogW10sXG4gICAgdmFsdWU6IFtdLFxuICAgIGZlYXR1cmVBbmRWYWx1ZTogW11cbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuZXdGZWF0dXJlVmFsdWU7XG4gICAgaWYgKGZlYXR1cmVzW2ldLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBuZXdGZWF0dXJlVmFsdWUgPSBgJHtmZWF0dXJlc1tpXS5mZWF0dXJlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0ZlYXR1cmVWYWx1ZSA9IGAke2ZlYXR1cmVzW2ldLmZlYXR1cmV9ICR7ZmVhdHVyZXNbaV0udmFsdWUucmVwbGFjZSgvW15hLXpBLVogXS9nLCAnJyl9YDtcbiAgICB9XG5cbiAgICBpZiAoY29sbGVjdGVkRmVhdHVyZXMuZmVhdHVyZUFuZFZhbHVlLmluZGV4T2YobmV3RmVhdHVyZVZhbHVlKSA8IDApIHtcbiAgICAgIGNvbGxlY3RlZEZlYXR1cmVzLmZlYXR1cmUucHVzaChmZWF0dXJlc1tpXS5mZWF0dXJlKTtcbiAgICAgIGlmIChmZWF0dXJlc1tpXS52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBjb2xsZWN0ZWRGZWF0dXJlcy52YWx1ZS5wdXNoKG51bGwpO1xuICAgICAgICBjb2xsZWN0ZWRGZWF0dXJlcy5mZWF0dXJlQW5kVmFsdWUucHVzaChuZXdGZWF0dXJlVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdGVkRmVhdHVyZXMudmFsdWUucHVzaChmZWF0dXJlc1tpXS52YWx1ZS5yZXBsYWNlKC9bXmEtekEtWiBdL2csICcnKSk7XG4gICAgICAgIGNvbGxlY3RlZEZlYXR1cmVzLmZlYXR1cmVBbmRWYWx1ZS5wdXNoKG5ld0ZlYXR1cmVWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsZWN0ZWRGZWF0dXJlcztcbn1cblxuY29uc3QgY29tYmluZUZlYXR1cmVzID0gKGZlYXR1cmVzMSwgZmVhdHVyZXMyKSA9PiB7XG4gIGNvbnN0IGNoZWNrPVwiXFx1MjcxM1wiO1xuICBsZXQgY29tYmluZWRGZWF0dXJlcyA9IHtcbiAgICB2YWx1ZTE6IFtdLFxuICAgIHZhbHVlMjogW10sXG4gICAgZmVhdHVyZVdWYWx1ZTogW11cbiAgfTtcblxuICBsZXQgdG9EZWxldGVJbmRleDIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlczEuZmVhdHVyZUFuZFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGluZGV4MiA9IGZlYXR1cmVzMi5mZWF0dXJlLmluZGV4T2YoZmVhdHVyZXMxLmZlYXR1cmVbaV0pXG5cbiAgICBpZiAoaW5kZXgyID4gLTEpIHtcbiAgICAgIGlmIChmZWF0dXJlczIuZmVhdHVyZUFuZFZhbHVlW2luZGV4Ml0gPT09IChmZWF0dXJlczEuZmVhdHVyZUFuZFZhbHVlW2ldKSkge1xuICAgICAgICBjb21iaW5lZEZlYXR1cmVzLnZhbHVlMS5wdXNoKGNoZWNrKTtcbiAgICAgICAgY29tYmluZWRGZWF0dXJlcy52YWx1ZTIucHVzaChjaGVjayk7XG4gICAgICAgIGNvbWJpbmVkRmVhdHVyZXMuZmVhdHVyZVdWYWx1ZS5wdXNoKGZlYXR1cmVzMS5mZWF0dXJlQW5kVmFsdWVbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tYmluZWRGZWF0dXJlcy52YWx1ZTEucHVzaChmZWF0dXJlczEudmFsdWVbaV0pO1xuICAgICAgICBjb21iaW5lZEZlYXR1cmVzLnZhbHVlMi5wdXNoKGZlYXR1cmVzMi52YWx1ZVtpXSk7XG4gICAgICAgIGNvbWJpbmVkRmVhdHVyZXMuZmVhdHVyZVdWYWx1ZS5wdXNoKGZlYXR1cmVzMS5mZWF0dXJlW2ldKTtcbiAgICAgIH1cbiAgICAgIHRvRGVsZXRlSW5kZXgyLnB1c2goaW5kZXgyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tYmluZWRGZWF0dXJlcy52YWx1ZTEucHVzaChjaGVjayk7XG4gICAgICBjb21iaW5lZEZlYXR1cmVzLnZhbHVlMi5wdXNoKCcnKTtcbiAgICAgIGNvbWJpbmVkRmVhdHVyZXMuZmVhdHVyZVdWYWx1ZS5wdXNoKGZlYXR1cmVzMS5mZWF0dXJlQW5kVmFsdWVbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgZmVhdHVyZXMyLmZlYXR1cmVBbmRWYWx1ZS5sZW5ndGg7IGorKykge1xuICAgIGlmICghdG9EZWxldGVJbmRleDIuaW5jbHVkZXMoaikpIHtcbiAgICAgIGNvbWJpbmVkRmVhdHVyZXMudmFsdWUxLnB1c2goJycpO1xuICAgICAgY29tYmluZWRGZWF0dXJlcy52YWx1ZTIucHVzaChjaGVjayk7XG4gICAgICBjb21iaW5lZEZlYXR1cmVzLmZlYXR1cmVXVmFsdWUucHVzaChmZWF0dXJlczIuZmVhdHVyZUFuZFZhbHVlW2pdKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZEZlYXR1cmVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29sbGVjdEZlYXR1cmVzLFxuICBjb21iaW5lRmVhdHVyZXNcbn07XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vcmV2aWV3SGVscGVycy5qcyc7XG5cblxuY29uc3QgUmF0aW5nU3RhcnMgPSAoe3JhdGluZywgc2l6ZX0pID0+IHtcbiAgbGV0IHN0YXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBmb250RmFtaWx5OiAnVGltZXMnLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgIGZvbnRTaXplOiBgJHtzaXplfXB4YCxcbiAgfVxuXG4gIGxldCBzdGFyUGVyY2VudCA9IGhlbHBlci5yYXRpbmdDb252ZXJ0ZXIocmF0aW5nLCA1KTtcbiAgbGV0IHBlcmNlbnQ9IHsgJy0tcGVyY2VudCc6IGAke3N0YXJQZXJjZW50fSVgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhcnMnIHN0eWxlPXt7Li4uc3RhclN0eWxlLCAuLi5wZXJjZW50fX0+PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nU3RhcnM7IiwiLy8gR2V0IGF2ZXJhZ2UgcmF0aW5nIGZvciBzdGFycyB0byBuZWFyZXN0IDAuMjVcbmNvbnN0IGdldEF2Z1JhdGluZyA9IChkYXRhKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGxldCByYXRpbmdzID0gMDtcbiAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRvdGFsICs9IE51bWJlcihrZXkpICogTnVtYmVyKGRhdGFba2V5XSk7XG4gICAgICByYXRpbmdzICs9IE51bWJlcihkYXRhW2tleV0pO1xuICB9XG5cbiBsZXQgYXZlcmFnZSA9IHRvdGFsL3JhdGluZ3M7XG4gcmV0dXJuIChNYXRoLnJvdW5kKGF2ZXJhZ2UgKiA0KSAvIDQpLnRvRml4ZWQoMilcbn1cblxuLy8gQ29udmVydCBzdGFyL2JhciByYXRpbmdzIHRvIHBlcmNlbnRhZ2UgZm9yIENTU1xuY29uc3QgcmF0aW5nQ29udmVydGVyID0gKHJhdGluZywgZGl2aXNvcikgPT4ge1xuICByZXR1cm4gcmF0aW5nIC8gZGl2aXNvciAqIDEwMDtcbn1cblxuLy8gR2V0IHRvdGFsIG51bWJlciBvZiByYXRpbmdzXG5jb25zdCBnZXRSYXRpbmdUb3RhbCA9IChkYXRhKSA9PiB7XG4gIGxldCByYXRpbmdzID0gMDtcbiAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHJhdGluZ3MgKz0gTnVtYmVyKGRhdGFba2V5XSk7XG4gIH1cbiByZXR1cm4gcmF0aW5ncztcbn1cblxuLy8gR2V0IHRvdGFsIG51bWJlciBvZiByZWNvbW1lbmRzXG5jb25zdCBnZXRSZWNUb3RhbCA9IChkYXRhKSA9PiB7XG4gIGxldCByZWNzID0gMDtcbiAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICByZWNzICs9IE51bWJlcihkYXRhW2tleV0pO1xuICB9XG4gIHJldHVybiByZWNzO1xufVxuXG4vLyBDb252ZXJ0IGRhdGUgdG8gTU9OVEgvREQvWVlZWSBmb3JtYXRcbmNvbnN0IGNvbnZlcnREYXRlID0gKGRhdGUpID0+IHtcbiAgY29uc3QgbW9udGhzID0ge1xuICAgIFwiMDFcIjpcIkphbnVhcnlcIixcbiAgICBcIjAyXCI6XCJGZWJydWFyeVwiLFxuICAgIFwiMDNcIjpcIk1hcmNoXCIsXG4gICAgXCIwNFwiOlwiQXByaWxcIixcbiAgICBcIjA1XCI6XCJNYXlcIixcbiAgICBcIjA2XCI6XCJKdW5lXCIsXG4gICAgXCIwN1wiOlwiSnVseVwiLFxuICAgIFwiMDhcIjpcIkF1Z3VzdFwiLFxuICAgIFwiMDlcIjpcIlNlcHRlbWJlclwiLFxuICAgIFwiMTBcIjpcIk9jdG9iZXJcIixcbiAgICBcIjExXCI6XCJOb3ZlbWJlclwiLFxuICAgIFwiMTJcIjpcIkRlY2VtYmVyXCJcbiAgfVxuXG4gIGxldCBtb250aCA9IG1vbnRoc1tkYXRlLnNsaWNlKDUsNyldO1xuICBsZXQgZGF5ID0gZGF0ZS5zbGljZSg4LDEwKTtcbiAgbGV0IHllYXIgPSBkYXRlLnNsaWNlKDAsNCk7XG5cbiAgcmV0dXJuIGAke21vbnRofSAke2RheX0sICR7eWVhcn1gXG59XG5cbmNvbnN0IGNoYXJzVGFibGUgPSB7XG4gIFNpemU6IFsnQSBzaXplIHRvbyBzbWFsbCcsICfCvSBhIHNpemUgdG9vIHNtYWxsJywgJ1BlcmZlY3QnLCAnwr0gYSBzaXplIHRvbyBiaWcnLCAnQSBzaXplIHRvbyB3aWRlJ10sXG4gIFdpZHRoOiBbJ1RvbyBuYXJyb3cnLCAnU2xpZ2h0bHkgbmFycm93JywgJ1BlcmZlY3QnLCAnU2xpZ2h0bHkgd2lkZScsICdUb28gd2lkZSddLFxuICBDb21mb3J0OiBbJ1VuY29tZm9ydGFibGUnLCAnU2xpZ2h0bHkgdW5jb21mb3J0YWJsZScsICdPaycsICdDb21mb3J0YWJsZScsICdQZXJmZWN0J10sXG4gIFF1YWxpdHk6IFsnUG9vcicsICdCZWxvdyBhdmVyYWdlJywgJ1doYXQgSSBleHBlY3RlZCcsICdQcmV0dHkgZ3JlYXQnLCAnUGVyZmVjdCddLFxuICBMZW5ndGg6IFsnUnVucyBTaG9ydCcsICdSdW5zIHNsaWdodGx5IHNob3J0JywgJ1BlcmZlY3QnLCAnUnVucyBzbGlnaHRseSBsb25nJywgJ1J1bnMgbG9uZyddLFxuICBGaXQ6IFsnUnVucyB0aWdodCcsICdSdW5zIHNsaWdodGx5IHRpZ2h0JywgJ1BlcmZlY3QnLCAnUnVucyBzbGlnaHRseSBsb25nJywgJ1J1bnMgbG9uZyddLFxufVxuXG5jb25zdCBzb3J0UmVsZXZhbnRSZXZpZXdzID0gKHJldmlld3MpID0+IHtcbiAgbGV0IG5ld2VzdFJldmlld3MgPSByZXZpZXdzLnNvcnQoKGEsIGIpID0+IERhdGUucGFyc2UoYi5kYXRlKSAtIERhdGUucGFyc2UoYS5kYXRlKSk7XG4gICAgICBuZXdlc3RSZXZpZXdzLm1hcCgocmV2aWV3LCBpbmRleCkgPT4geyByZXZpZXcucmFuayA9IGluZGV4LzQgfSk7XG5cbiAgbGV0IGhlbHBmdWxSZXZpZXdzID0gcmV2aWV3cy5zb3J0KChhLCBiKSA9PiBiLmhlbHBmdWxuZXNzIC0gYS5oZWxwZnVsbmVzcyk7XG4gICAgICBoZWxwZnVsUmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IHsgcmV2aWV3LnJhbmsgKz0gaW5kZXggfSk7XG5cbiAgcmV0dXJuIHJldmlld3Muc29ydCgoYSwgYikgPT4gYS5yYW5rIC0gYi5yYW5rKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEF2Z1JhdGluZzogZ2V0QXZnUmF0aW5nLFxuICBnZXRSYXRpbmdUb3RhbDogZ2V0UmF0aW5nVG90YWwsXG4gIGdldFJlY1RvdGFsOiBnZXRSZWNUb3RhbCxcbiAgcmF0aW5nQ29udmVydGVyOiByYXRpbmdDb252ZXJ0ZXIsXG4gIGNvbnZlcnREYXRlOiBjb252ZXJ0RGF0ZSxcbiAgY2hhcnNUYWJsZTogY2hhcnNUYWJsZSxcbiAgc29ydFJlbGV2YW50UmV2aWV3czogc29ydFJlbGV2YW50UmV2aWV3c1xufSIsIlxuLyogUFJPRFVDVFxuLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cbiovXG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVByb2R1Y3QgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IDIyMTI2LFxuICAgICAgICBcImNhbXB1c1wiOiBcImhyLXJwcFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIZWlyIEZvcmNlIE9uZXNcIixcbiAgICAgICAgXCJzbG9nYW5cIjogXCJBIHNuZWFrZXIgZHluYXN0eVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTm93IHdoZXJlIGRhIGJveGVzIHdoZXJlIEkga2VlcCBtaW5lPyBZb3Ugc2hvdWxkIHBlZXAgbWluZSwgbWF5YmUgb25jZSBvciB0d2ljZSBidXQgbmV2ZXIgdGhyZWUgdGltZXMuIEknbSBqdXN0IGEgc25lYWtlciBwcm8sIEkgbG92ZSBQdW1hcyBhbmQgc2hlbGwgdG9lcywgYnV0IGNhbid0IG5vdGhpbiBjb21wYXJlIHRvIGEgZnJlc2ggY3Jpc3B5IHdoaXRlIHBlYXJsXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJLaWNrc1wiLFxuICAgICAgICBcImRlZmF1bHRfcHJpY2VcIjogXCI5OS4wMFwiLFxuICAgICAgICBcImNyZWF0ZWRfYXRcIjogXCIyMDIxLTAzLTE4VDE2OjA5OjMwLjU4OVpcIixcbiAgICAgICAgXCJ1cGRhdGVkX2F0XCI6IFwiMjAyMS0wMy0xOFQxNjowOTozMC41ODlaXCIsXG4gICAgICAgIFwiZmVhdHVyZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVwiOiBcIlNvbGVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiUnViYmVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJmZWF0dXJlXCI6IFwiTWF0ZXJpYWxcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiRnVsbENvbnRyb2xTa2luXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJmZWF0dXJlXCI6IFwiTWlkLVNvbGVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiQ29udHJvbFN1cHBvcnQgQXJjaCBCcmlkZ2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVcIjogXCJTdGl0Y2hpbmdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiRG91YmxlIFN0aXRjaFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5cbi8qIFNUWUxFU1xuLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cbiovXG5cblxuZXhwb3J0IGNvbnN0IHRlc3REYXRhU3R5bGVzID0gW1xuICB7XG4gICAgICBcInN0eWxlX2lkXCI6IDEyMzE2NyxcbiAgICAgIFwibmFtZVwiOiBcIldoaXRlICYgV2hpdGVcIixcbiAgICAgIFwib3JpZ2luYWxfcHJpY2VcIjogXCI5OS4wMFwiLFxuICAgICAgXCJzYWxlX3ByaWNlXCI6IG51bGwsXG4gICAgICBcImRlZmF1bHQ/XCI6IHRydWUsXG4gICAgICBcInBob3Rvc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NDQ0MTg5Mi03OTQxNjZmMWUzYmU/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ0NDQxODkyLTc5NDE2NmYxZTNiZT9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE0NTkwNzM0MDUyLTM0NGExODcxOTYxMT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNDU5MDczNDA1Mi0zNDRhMTg3MTk2MTE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU1Mjc0MTc1LTZjYmY2ZjNiMTM3Yj9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUyNzQxNzUtNmNiZjZmM2IxMzdiP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NjAzNTM1ODE2NDEtMzdiYWRkYWIwZmEyP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2MDM1MzU4MTY0MS0zN2JhZGRhYjBmYTI/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUxJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ0Nzg3OTAyNzU4NC05ZDE3YzJjYTAzMzM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDc4NzkwMjc1ODQtOWQxN2MyY2EwMzMzP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUxJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQyMjcyODIyMTM1Ny01Nzk4MDk5M2VhOTk/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0MjI3MjgyMjEzNTctNTc5ODA5OTNlYTk5P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTAwJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4ODc3ODU3ODkzMi0wZjg0ZDMxNWZjYWU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODg3Nzg1Nzg5MzItMGY4NGQzMTVmY2FlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02NTgmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI3NDMxMDE2LTE1ZWI4MzUxNTAxOD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNzQzMTAxNi0xNWViODM1MTUwMTg/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExMDAmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM0NTUwMDE3MTk0LTVkZjc5ZWQ3ODk2Nz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDU1MDAxNzE5NC01ZGY3OWVkNzg5Njc/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMDAmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI1ODk2NjUwNzk0LTYwYWQ0ZWM0MGQwZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNTg5NjY1MDc5NC02MGFkNGVjNDBkMGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYwODU3NzkyLTIxNWY5ZTM1MzRlZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2MDg1Nzc5Mi0yMTVmOWUzNTM0ZWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY2OCZxPTgwXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJza3VzXCI6IHtcbiAgICAgICAgICBcIjcxNDU1OFwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTQsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NTlcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDI1LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI3LjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NjBcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDksXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NjFcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjguNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU2MlwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTgsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NjNcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDEyLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI5LjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NjRcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDEwLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU2NVwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTgsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjEwLjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NjZcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDExLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU2N1wiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMzUsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjExLjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NjhcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDI1LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMlwiXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9LFxuICB7XG4gICAgICBcInN0eWxlX2lkXCI6IDEyMzE2OCxcbiAgICAgIFwibmFtZVwiOiBcIldoaXRlICYgUmVkXCIsXG4gICAgICBcIm9yaWdpbmFsX3ByaWNlXCI6IFwiOTkuMDBcIixcbiAgICAgIFwic2FsZV9wcmljZVwiOiBudWxsLFxuICAgICAgXCJkZWZhdWx0P1wiOiBmYWxzZSxcbiAgICAgIFwicGhvdG9zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyMjgwNzU2LTc0YjJmNTVlNzNhYj9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDIyODA3NTYtNzRiMmY1NWU3M2FiP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjEwOTM0NzAxMTktYTNhY2RjNDMzNzRhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTIxMDkzNDcwMTE5LWEzYWNkYzQzMzc0YT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NjY4JnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3NDQ5NDgxOTc5NC05MGY5NjY0YjUzMGQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzQ0OTQ4MTk3OTQtOTBmOTY2NGI1MzBkP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUyJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2NTg3Nzc4MzIyMy00ZWJhNTEzZTI3YzY/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NjU4Nzc3ODMyMjMtNGViYTUxM2UyN2M2P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQyODc5MDAzMTI0Ni02OThkNzFiNmZlM2Y/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Mjg3OTAwMzEyNDYtNjk4ZDcxYjZmZTNmP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MDI4MjMxMjg0Ny0yOGI5NDMwNDZkYzE/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcwMjgyMzEyODQ3LTI4Yjk0MzA0NmRjMT9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTImcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDI4NzkwMDY3MDcwLTBlYmY0NDE4ZDlkOD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Mjg3OTAwNjcwNzAtMGViZjQ0MThkOWQ4P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTEyNTY2NTYxMjEtOWZmYzBjODk4YTQ5P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1MTI1NjY1NjEyMS05ZmZjMGM4OThhNDk/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNDYwNDUxOTA1NC0yMzY1YWMxMWU0MzE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjQ2MDQ1MTkwNTQtMjM2NWFjMTFlNDMxP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05NzUmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQxMDA2MDA4NzY4LWQxODFlN2Y5ZjNkOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MTAwNjAwODc2OC1kMTgxZTdmOWYzZDk/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1NjgmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDMwMzkwNDU2MDExLTI1YWM5MjQ0OTk5Yz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQzMDM5MDQ1NjAxMS0yNWFjOTI0NDk5OWM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY2OCZxPTgwXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJza3VzXCI6IHtcbiAgICAgICAgICBcIjcxNDU2OVwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTQsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NzBcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDI1LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI3LjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NzFcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDksXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NzJcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjguNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU3M1wiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTgsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NzRcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDEyLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI5LjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NzVcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDEwLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU3NlwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTgsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjEwLjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NzdcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDExLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU3OFwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMzUsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjExLjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1NzlcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDI1LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMlwiXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9LFxuICB7XG4gICAgICBcInN0eWxlX2lkXCI6IDEyMzE2OSxcbiAgICAgIFwibmFtZVwiOiBcIldoaXRlICYgQmxhY2tcIixcbiAgICAgIFwib3JpZ2luYWxfcHJpY2VcIjogXCI5OS4wMFwiLFxuICAgICAgXCJzYWxlX3ByaWNlXCI6IG51bGwsXG4gICAgICBcImRlZmF1bHQ/XCI6IGZhbHNlLFxuICAgICAgXCJwaG90b3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDI3MDI5NDItMTYxY2ViMmUzZDkxP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyNzAyOTQyLTE2MWNlYjJlM2Q5MT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Mjg1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDM0NDkzNzc1OTQtMzJkZDlhYzQ0NjdjP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAzNDQ5Mzc3NTk0LTMyZGQ5YWM0NDY3Yz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MSZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTc5Njg4NjczODUtOWY4NzdmM2YyYmNlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDU3OTY4ODY3Mzg1LTlmODc3ZjNmMmJjZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Njk2MTc4MzMyMzQtOGE2ODQzZGExNGQwP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2OTYxNzgzMzIzNC04YTY4NDNkYTE0ZDA/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNzY0JnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTg1Mjg0ODQ0My0zMDA0ZDZkYzRjZmM/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk5ODUyODQ4NDQzLTMwMDRkNmRjNGNmYz9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1NjcmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTExNDk5MDA4MTg4LWRlNDkxYmJiYWU5OD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTE0OTkwMDgxODgtZGU0OTFiYmJhZTk4P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTg4JnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMjY1MzIxNjg1MC00ZjE0MTVhMTc0ZmI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjI2NTMyMTY4NTAtNGYxNDE1YTE3NGZiP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05NzUmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE5Mzk2MzE3ODc5LTgzMzM0Y2I0MjJmOD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxOTM5NjMxNzg3OS04MzMzNGNiNDIyZjg/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3NTgzMDEwMzA3LTNmNzg5OTExYjg5Yz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNzU4MzAxMDMwNy0zZjc4OTkxMWI4OWM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1MzYmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU4MTkxMDUzLWMwM2RiMjc1N2UzZD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTgxOTEwNTMtYzAzZGIyNzU3ZTNkP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTg4OTQ3ODEzMjEtNjMwZTYzOGQwNzQyP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxODg5NDc4MTMyMS02MzBlNjM4ZDA3NDI/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTAwJnE9ODBcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNrdXNcIjoge1xuICAgICAgICAgIFwiNzE0NTgwXCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxNCxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU4MVwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMjUsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjcuNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU4MlwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOSxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU4M1wiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiOC41XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTg0XCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxOCxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU4NVwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjkuNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU4NlwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjEwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTg3XCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxOCxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTAuNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU4OFwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTEsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjExXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTg5XCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAzNSxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTEuNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjcxNDU5MFwiOiB7XG4gICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMjUsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjEyXCJcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0sXG4gIHtcbiAgICAgIFwic3R5bGVfaWRcIjogMTIzMTcwLFxuICAgICAgXCJuYW1lXCI6IFwiV2hpdGUgJiBCbHVlXCIsXG4gICAgICBcIm9yaWdpbmFsX3ByaWNlXCI6IFwiOTkuMDBcIixcbiAgICAgIFwic2FsZV9wcmljZVwiOiBudWxsLFxuICAgICAgXCJkZWZhdWx0P1wiOiBmYWxzZSxcbiAgICAgIFwicGhvdG9zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyMjcyNDU0MzE1LTRjMDFkN2FiZGY0YT9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDIyNzI0NTQzMTUtNGMwMWQ3YWJkZjRhP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Mjg1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTM5ODE4MzQtYTIzZjViNjllM2VjP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUzOTgxODM0LWEyM2Y1YjY5ZTNlYz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzEwOTEwODc4MjMtY2I2MDBhNDdhYjc5P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMTA5MTA4NzgyMy1jYjYwMGE0N2FiNzk/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02NjgmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE0NjEzODE4MDY3LWUyMDdjMzQ0MWRiMD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ2MTM4MTgwNjctZTIwN2MzNDQxZGIwP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDMxNDY2OTU4OTgtYWZkZjhjZTVkNWE4P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMzE0NjY5NTg5OC1hZmRmOGNlNWQ1YTg/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAwJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMjAyMzk4MzI2My03ZTk0YmY2YjkxM2U/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTIwMjM5ODMyNjMtN2U5NGJmNmI5MTNlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMTgxMzcyMjYzNi00NWRlMmZlNGY5YjQ/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAxODEzNzIyNjM2LTQ1ZGUyZmU0ZjliND9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3NDY0MDk4ODgwLWUzNjdiYzVkMmMwOD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDc0NjQwOTg4ODAtZTM2N2JjNWQyYzA4P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTg2ODI1OTYtZGVhOWJmODRjMjE5P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODY4MjU5Ni1kZWE5YmY4NGMyMTk/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDk4JnE9ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNDI4MTYyMzA4Ny0xYTZkZDhmODI3YzI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDQyODE2MjMwODctMWE2ZGQ4ZjgyN2MyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05NzUmcT04MFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDYyODMzODY3MDM3LTBmMDZlYWIzMWNjND9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2MjgzMzg2NzAzNy0wZjA2ZWFiMzFjYzQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI4NTAmcT04MFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwic2t1c1wiOiB7XG4gICAgICAgICAgXCI3MTQ1OTFcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDE0LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTkyXCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAyNSxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiNy41XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTkzXCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTk0XCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAyLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI4LjVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1OTVcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDE4LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCI5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTk2XCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxMixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiOS41XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTk3XCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxMCxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ1OThcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDE4LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMC41XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NTk5XCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxMSxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI3MTQ2MDBcIjoge1xuICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDM1LFxuICAgICAgICAgICAgICBcInNpemVcIjogXCIxMS41XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiNzE0NjAxXCI6IHtcbiAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAyNSxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTJcIlxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXTtcblxuXG4vKiBTRUxFQ1RFRCBTVFlMRVxuLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cbiovXG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNlbGVjdGVkU3R5bGUgPSBbXG4gICAge1xuICAgICAgICBcInN0eWxlX2lkXCI6IDEyMzE3MCxcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hpdGUgJiBCbHVlXCIsXG4gICAgICAgIFwib3JpZ2luYWxfcHJpY2VcIjogXCI5OS4wMFwiLFxuICAgICAgICBcInNhbGVfcHJpY2VcIjogbnVsbCxcbiAgICAgICAgXCJkZWZhdWx0P1wiOiBmYWxzZSxcbiAgICAgICAgXCJwaG90b3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyMjcyNDU0MzE1LTRjMDFkN2FiZGY0YT9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MjI3MjQ1NDMxNS00YzAxZDdhYmRmNGE/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yODUwJnE9ODBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1Mzk4MTgzNC1hMjNmNWI2OWUzZWM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1Mzk4MTgzNC1hMjNmNWI2OWUzZWM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMxMDkxMDg3ODIzLWNiNjAwYTQ3YWI3OT9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMTA5MTA4NzgyMy1jYjYwMGE0N2FiNzk/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02NjgmcT04MFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE0NjEzODE4MDY3LWUyMDdjMzQ0MWRiMD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNDYxMzgxODA2Ny1lMjA3YzM0NDFkYjA/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAwJnE9ODBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMzE0NjY5NTg5OC1hZmRmOGNlNWQ1YTg/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDMxNDY2OTU4OTgtYWZkZjhjZTVkNWE4P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTIwMjM5ODMyNjMtN2U5NGJmNmI5MTNlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTIwMjM5ODMyNjMtN2U5NGJmNmI5MTNlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMTgxMzcyMjYzNi00NWRlMmZlNGY5YjQ/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDE4MTM3MjI2MzYtNDVkZTJmZTRmOWI0P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDc0NjQwOTg4ODAtZTM2N2JjNWQyYzA4P2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIixcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3NDY0MDk4ODgwLWUzNjdiYzVkMmMwOD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NTAmcT04MFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsX3VybFwiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU4NjgyNTk2LWRlYTliZjg0YzIxOT9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODY4MjU5Ni1kZWE5YmY4NGMyMTk/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDk4JnE9ODBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRodW1ibmFpbF91cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNDI4MTYyMzA4Ny0xYTZkZDhmODI3YzI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNDI4MTYyMzA4Ny0xYTZkZDhmODI3YzI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk3NSZxPTgwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxfdXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NjI4MzM4NjcwMzctMGYwNmVhYjMxY2M0P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NjI4MzM4NjcwMzctMGYwNmVhYjMxY2M0P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yODUwJnE9ODBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInNrdXNcIjoge1xuICAgICAgICAgICAgXCI3MTQ1OTFcIjoge1xuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMTQsXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiN1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI3MTQ1OTJcIjoge1xuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMjUsXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiNy41XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjcxNDU5M1wiOiB7XG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5LFxuICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNzE0NTk0XCI6IHtcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDIsXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiOC41XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjcxNDU5NVwiOiB7XG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxOCxcbiAgICAgICAgICAgICAgICBcInNpemVcIjogXCI5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjcxNDU5NlwiOiB7XG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxMixcbiAgICAgICAgICAgICAgICBcInNpemVcIjogXCI5LjVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNzE0NTk3XCI6IHtcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDEwLFxuICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjEwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjcxNDU5OFwiOiB7XG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxOCxcbiAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxMC41XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjcxNDU5OVwiOiB7XG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAxMSxcbiAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI3MTQ2MDBcIjoge1xuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMzUsXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTEuNVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI3MTQ2MDFcIjoge1xuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMjUsXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMTJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICBdO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKiBCQVNFIFNUWUxFU1xcbi0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICovXFxuXFxuYVtocmVmXSwgaW5wdXRbdHlwZT0nc3VibWl0J10sIGlucHV0W3R5cGU9J2ltYWdlJ10sIGxhYmVsW2Zvcl0sIHNlbGVjdCwgYnV0dG9uLCAucG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vLXByb2R1Y3Qtb3ZlcnZpZXcgc2VsZWN0LFxcbi5vLXByb2R1Y3Qtb3ZlcnZpZXcgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzVBNUE1QTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5cXG4vKiBMQVlPVVQgU1RZTEVTXFxuLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gKi9cXG5cXG4uby1wcm9kdWN0LW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5vLWltYWdlcyB7XFxuICAvKiDihpMgVGhlIHdpZHRoIHdoZW4gdGhlIGxlZnQgYW5kIHJpZ2h0IGFyZSBvbiB0aGUgc2FtZSByb3cgKi9cXG4gIGZsZXgtYmFzaXM6IDUwcmVtO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgLyogbWF4LXdpZHRoOiA1MHJlbTsgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm8tcHJvZHVjdC1jb250cm9scyB7XFxuICAvKiDihpMgR3JvdyBmcm9tIG5vdGhpbmcgKi9cXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBmbGV4LWdyb3c6IDk5OTtcXG4gIC8qIOKGkyBXcmFwIHdoZW4gdGhlIHJpZ2h0IHNpZGUgaXMgc21hbGxlciB0aGFuIHRoaXMgKi9cXG4gIG1pbi13aWR0aDogMjByZW07XFxuXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcXG59XFxuXFxuLm8tY2FydC1saXN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5vLXNpemUtbGlzdCB7XFxuIGZsZXgtZ3JvdzogMS42O1xcbn1cXG5cXG4uby1xdHktbGlzdCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5vLWNhcnQtYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5vLWFkZC10by1iYWcge1xcbiAgZmxleC1ncm93OiAxMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5vLWFkZC10by1vdXRmaXQge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uby1hZGQtdG8tYmFnLWljb24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5cXG4uby1wcm9kdWN0LWRlc2NyaXB0aW9uIHtcXG4gIC8qIOKGkyBHcm93IGZyb20uLi4gKi9cXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uby1wcm9kdWN0LWRlc2NyaXB0aW9uLXRleHQge1xcbiAgbWF4LXdpZHRoOiA0NXJlbTtcXG4gIG1pbi13aWR0aDogMjByZW07XFxufVxcblxcbi5vLWltYWdlcy10aHVtYm5haWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIGxlZnQ6IDFyZW07XFxufVxcblxcblxcblxcbi8qIE1PRFVMRSBTVFlMRVNcXG4tIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAqL1xcblxcbi8qIElNQUdFIEdBTExFUlkgKi9cXG5cXG4uby1pbWFnZXMtbWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDM5cmVtO1xcbiAgbWluLWhlaWdodDogMzlyZW07XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm8taW1hZ2VzLXRodW1ibmFpbHMgPiAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5vLWltYWdlcy10aHVtYm5haWxzIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm8taW1hZ2VzLXRodW1ibmFpbHMgdWwgbGkge1xcbiAgd2lkdGg6IDQuMnJlbTtcXG4gIGhlaWdodDogNC4ycmVtO1xcbiAgbWFyZ2luOiAwLjZyZW0gMDtcXG59XFxuXFxuLm8taW1hZ2VzLXRodW1ibmFpbHMgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDAuMDVyZW07XFxufVxcblxcbi5vLWltYWdlcyBuYXYgaW1nLm8taW1hZ2VzLXNlbGVjdGVkIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5vLWltYWdlcy10aHVtYm5haWxzIGltZzpob3ZlciB7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMC4wNXJlbTtcXG59XFxuXFxuLmJhY2stYXJyb3ctY29udGFpbmVyLFxcbi5mb3J3YXJkLWFycm93LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJhY2stYXJyb3ctY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcbi5mb3J3YXJkLWFycm93LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAtMC4yNXJlIG07XFxufVxcblxcbi5iYWNrLWFycm93LFxcbi5mb3J3YXJkLWFycm93IHtcXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLWxlZnQ6IDAuNzVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDAuNzVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5iYWNrLWFycm93IHtcXG4gIGJvcmRlci1ib3R0b206IDAuNzVyZW0gc29saWQgI0RCREJEQjtcXG59XFxuXFxuLmZvcndhcmQtYXJyb3cge1xcbiAgYm9yZGVyLXRvcDogMC43NXJlbSBzb2xpZCAjREJEQkRCO1xcbn1cXG5cXG5cXG5cXG4vKiBQUk9EVUNUIENPTlRST0xTICovXFxuXFxuLm8tcHJvZHVjdC1jb250cm9scy5zdGFycyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uby1wcm9kdWN0LWNhdGVnb3J5IHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uby1wcm9kdWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IDByZW07XFxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbn1cXG5cXG4uby1wcm9kdWN0LXN0eWxlLXByaWNlIC5zdHJpa2V0aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uby1wcm9kdWN0LXN0eWxlLXByaWNlIC5zYWxlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4vKiBQUk9EVUNUIENPTlRST0xTOiBTVFlMRSBTRUxFQ1RPUiAqL1xcblxcbi5vLXN0eWxlLXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogOTklO1xcbiAgcm93LWdhcDogMS41cmVtO1xcbiAgY29sdW1uLWdhcDogMnJlbTtcXG5cXG4gIG1hcmdpbjogMnJlbSAwcmVtO1xcbn1cXG5cXG4uY2lyY2xlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNHJlbTtcXG4gIG1heC13aWR0aDogNHJlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyOCwgNjMsIDAuMTI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAuMDVyZW0gMC4wNXJlbSAwLjFyZW0gMC4wNXJlbSAjM0QzRDNEO1xcbiAgLW1vei1ib3gtc2hhZG93OiAgICAwLjA1cmVtIDAuMDVyZW0gMC4xcmVtIDAuMDVyZW0gIzNEM0QzRDtcXG4gIGJveC1zaGFkb3c6ICAgICAgICAgMC4wNXJlbSAwLjA1cmVtIDAuMXJlbSAwLjA1cmVtICMzRDNEM0Q7XFxuICAvKiBbaG9yaXpvbnRhbCBvZmZzZXRdIFt2ZXJ0aWNhbCBvZmZzZXRdIFtibHVyIHJhZGl1c10gW29wdGlvbmFsIHNwcmVhZCByYWRpdXNdIFtjb2xvcl07ICovXFxufVxcblxcbi5jaXJjbGU6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuMjVyZW0gMC4xcmVtICMxNDE0MTQ7XFxuICAtbW96LWJveC1zaGFkb3c6ICAgIDAuMXJlbSAwLjFyZW0gMC4yNXJlbSAwLjFyZW0gIzE0MTQxNDtcXG4gIGJveC1zaGFkb3c6ICAgICAgICAgMC4xcmVtIDAuMXJlbSAwLjI1cmVtIDAuMXJlbSAjMTQxNDE0O1xcbn1cXG5cXG4uY2lyY2xlOjphZnRlciB7XFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaXJjbGUtZmlsbCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBzdXBwb3J0cyAob2JqZWN0LWZpdDogY292ZXIpIHtcXG4gIC5jaXJjbGUtZmlsbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxufVxcblxcbi5jaXJjbGUtY29udGFpbmVyIC5pY29uLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICB3aWR0aDogMS4xcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDNyZW07XFxufVxcblxcbi5jaXJjbGUtY29udGFpbmVyIC5pY29uLWNvbnRhaW5lciAubWF0ZXJpYWwtaWNvbnMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTAuMTlyZW07XFxuICBsZWZ0OiAtMC4xN3JlbTtcXG59XFxuXFxuXFxuLyogUFJPRFVDVCBDT05UUk9MUzogQUREIFRPIENBUlQgQ09OVFJPTFMgKi9cXG5cXG5cXG5cXG5cXG5cXG4vKiBQUk9EVUNUIERFU0NSSVBUSU9OICovXFxuXFxuLm8tcHJvZHVjdC1kZXNjcmlwdGlvbi1zbG9nYW4ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm8tcHJvZHVjdC1kZXNjcmlwdGlvbi1mZWF0dXJlcyB7XFxuICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMC4xcmVtO1xcbn1cXG5cXG5cXG4uby1wcm9kdWN0LWRlc2NyaXB0aW9uLWJ1bGxldHMgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5vLXByb2R1Y3QtZGVzY3JpcHRpb24tYnVsbGV0cyBsaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTg3NlxcXCI7XFxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC0wLjdyZW07XFxufVxcblxcblxcbi8qIFNUQVRFLVJFTEFURUQgU1RZTEVTXFxuLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gKi9cXG5cXG4vKiBFWFBBTkRFRCBWSUVXIFNUWUxFUyAqL1xcblxcbi5vLWltYWdlcy5vLWV4cGFuZGVkIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLm8taW1hZ2VzLm8tZXhwYW5kZWQgbmF2IHVsIGxpIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm8taW1hZ2VzLXRodW1ibmFpbC1pY29uIHtcXG4gIGZpbGwtb3BhY2l0eTogMC41O1xcbiAgZmlsbDogd2hpdGU7XFxuICBzdHJva2U6IGJsYWNrO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjM1cmVtO1xcbn1cXG5cXG4uby1pbWFnZXMtdGh1bWJuYWlsLWljb24uc2VsZWN0ZWQge1xcbiAgZmlsbC1vcGFjaXR5OiAwLjk7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY2xpZW50L292ZXJ2aWV3L292ZXJ2aWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7aURBQ2lEOztBQUVqRDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7OztBQUdBO2lEQUNpRDs7QUFFakQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0RBQW9EO0VBQ3BELGdCQUFnQjs7RUFFaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtF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QkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7OztBQUdBO2lEQUNpRDs7QUFFakQseUJBQXlCOztBQUV6QjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLyogQkFTRSBTVFlMRVNcXG4tIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAqL1xcblxcbmFbaHJlZl0sIGlucHV0W3R5cGU9J3N1Ym1pdCddLCBpbnB1dFt0eXBlPSdpbWFnZSddLCBsYWJlbFtmb3JdLCBzZWxlY3QsIGJ1dHRvbiwgLnBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uby1wcm9kdWN0LW92ZXJ2aWV3IHNlbGVjdCxcXG4uby1wcm9kdWN0LW92ZXJ2aWV3IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM1QTVBNUE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuXFxuLyogTEFZT1VUIFNUWUxFU1xcbi0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICovXFxuXFxuLm8tcHJvZHVjdC1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uby1pbWFnZXMge1xcbiAgLyog4oaTIFRoZSB3aWR0aCB3aGVuIHRoZSBsZWZ0IGFuZCByaWdodCBhcmUgb24gdGhlIHNhbWUgcm93ICovXFxuICBmbGV4LWJhc2lzOiA1MHJlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIC8qIG1heC13aWR0aDogNTByZW07ICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vLXByb2R1Y3QtY29udHJvbHMge1xcbiAgLyog4oaTIEdyb3cgZnJvbSBub3RoaW5nICovXFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgZmxleC1ncm93OiA5OTk7XFxuICAvKiDihpMgV3JhcCB3aGVuIHRoZSByaWdodCBzaWRlIGlzIHNtYWxsZXIgdGhhbiB0aGlzICovXFxuICBtaW4td2lkdGg6IDIwcmVtO1xcblxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjhyZW07XFxufVxcblxcbi5vLWNhcnQtbGlzdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uby1zaXplLWxpc3Qge1xcbiBmbGV4LWdyb3c6IDEuNjtcXG59XFxuXFxuLm8tcXR5LWxpc3Qge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uby1jYXJ0LWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uby1hZGQtdG8tYmFnIHtcXG4gIGZsZXgtZ3JvdzogMTA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uby1hZGQtdG8tb3V0Zml0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm8tYWRkLXRvLWJhZy1pY29uIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuXFxuLm8tcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxuICAvKiDihpMgR3JvdyBmcm9tLi4uICovXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm8tcHJvZHVjdC1kZXNjcmlwdGlvbi10ZXh0IHtcXG4gIG1heC13aWR0aDogNDVyZW07XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbn1cXG5cXG4uby1pbWFnZXMtdGh1bWJuYWlscyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICBsZWZ0OiAxcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBNT0RVTEUgU1RZTEVTXFxuLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gKi9cXG5cXG4vKiBJTUFHRSBHQUxMRVJZICovXFxuXFxuLm8taW1hZ2VzLW1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAzOXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDM5cmVtO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5vLWltYWdlcy10aHVtYm5haWxzID4gKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uby1pbWFnZXMtdGh1bWJuYWlscyB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5vLWltYWdlcy10aHVtYm5haWxzIHVsIGxpIHtcXG4gIHdpZHRoOiA0LjJyZW07XFxuICBoZWlnaHQ6IDQuMnJlbTtcXG4gIG1hcmdpbjogMC42cmVtIDA7XFxufVxcblxcbi5vLWltYWdlcy10aHVtYm5haWxzIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAwLjA1cmVtO1xcbn1cXG5cXG4uby1pbWFnZXMgbmF2IGltZy5vLWltYWdlcy1zZWxlY3RlZCB7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uby1pbWFnZXMtdGh1bWJuYWlscyBpbWc6aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDAuMDVyZW07XFxufVxcblxcbi5iYWNrLWFycm93LWNvbnRhaW5lcixcXG4uZm9yd2FyZC1hcnJvdy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5iYWNrLWFycm93LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4uZm9yd2FyZC1hcnJvdy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogLTAuMjVyZSBtO1xcbn1cXG5cXG4uYmFjay1hcnJvdyxcXG4uZm9yd2FyZC1hcnJvdyB7XFxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcXG4gIGJvcmRlci1sZWZ0OiAwLjc1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjc1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYmFjay1hcnJvdyB7XFxuICBib3JkZXItYm90dG9tOiAwLjc1cmVtIHNvbGlkICNEQkRCREI7XFxufVxcblxcbi5mb3J3YXJkLWFycm93IHtcXG4gIGJvcmRlci10b3A6IDAuNzVyZW0gc29saWQgI0RCREJEQjtcXG59XFxuXFxuXFxuXFxuLyogUFJPRFVDVCBDT05UUk9MUyAqL1xcblxcbi5vLXByb2R1Y3QtY29udHJvbHMuc3RhcnMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm8tcHJvZHVjdC1jYXRlZ29yeSB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLm8tcHJvZHVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tdG9wOiAwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG59XFxuXFxuLm8tcHJvZHVjdC1zdHlsZS1wcmljZSAuc3RyaWtldGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm8tcHJvZHVjdC1zdHlsZS1wcmljZSAuc2FsZSB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLyogUFJPRFVDVCBDT05UUk9MUzogU1RZTEUgU0VMRUNUT1IgKi9cXG5cXG4uby1zdHlsZS1zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDk5JTtcXG4gIHJvdy1nYXA6IDEuNXJlbTtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxuXFxuICBtYXJnaW46IDJyZW0gMHJlbTtcXG59XFxuXFxuLmNpcmNsZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDRyZW07XFxuICBtYXgtd2lkdGg6IDRyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjgsIDYzLCAwLjEyNSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjA1cmVtIDAuMDVyZW0gMC4xcmVtIDAuMDVyZW0gIzNEM0QzRDtcXG4gIC1tb3otYm94LXNoYWRvdzogICAgMC4wNXJlbSAwLjA1cmVtIDAuMXJlbSAwLjA1cmVtICMzRDNEM0Q7XFxuICBib3gtc2hhZG93OiAgICAgICAgIDAuMDVyZW0gMC4wNXJlbSAwLjFyZW0gMC4wNXJlbSAjM0QzRDNEO1xcbiAgLyogW2hvcml6b250YWwgb2Zmc2V0XSBbdmVydGljYWwgb2Zmc2V0XSBbYmx1ciByYWRpdXNdIFtvcHRpb25hbCBzcHJlYWQgcmFkaXVzXSBbY29sb3JdOyAqL1xcbn1cXG5cXG4uY2lyY2xlOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjI1cmVtIDAuMXJlbSAjMTQxNDE0O1xcbiAgLW1vei1ib3gtc2hhZG93OiAgICAwLjFyZW0gMC4xcmVtIDAuMjVyZW0gMC4xcmVtICMxNDE0MTQ7XFxuICBib3gtc2hhZG93OiAgICAgICAgIDAuMXJlbSAwLjFyZW0gMC4yNXJlbSAwLjFyZW0gIzE0MTQxNDtcXG59XFxuXFxuLmNpcmNsZTo6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2lyY2xlLWZpbGwge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5Ac3VwcG9ydHMgKG9iamVjdC1maXQ6IGNvdmVyKSB7XFxuICAuY2lyY2xlLWZpbGwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcbn1cXG5cXG4uY2lyY2xlLWNvbnRhaW5lciAuaWNvbi1jb250YWluZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgd2lkdGg6IDEuMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAzcmVtO1xcbn1cXG5cXG4uY2lyY2xlLWNvbnRhaW5lciAuaWNvbi1jb250YWluZXIgLm1hdGVyaWFsLWljb25zIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0wLjE5cmVtO1xcbiAgbGVmdDogLTAuMTdyZW07XFxufVxcblxcblxcbi8qIFBST0RVQ1QgQ09OVFJPTFM6IEFERCBUTyBDQVJUIENPTlRST0xTICovXFxuXFxuXFxuXFxuXFxuXFxuLyogUFJPRFVDVCBERVNDUklQVElPTiAqL1xcblxcbi5vLXByb2R1Y3QtZGVzY3JpcHRpb24tc2xvZ2FuIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vLXByb2R1Y3QtZGVzY3JpcHRpb24tZmVhdHVyZXMge1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDAuMXJlbTtcXG59XFxuXFxuXFxuLm8tcHJvZHVjdC1kZXNjcmlwdGlvbi1idWxsZXRzIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uby1wcm9kdWN0LWRlc2NyaXB0aW9uLWJ1bGxldHMgbGk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU4NzZcXFwiO1xcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtMC43cmVtO1xcbn1cXG5cXG5cXG4vKiBTVEFURS1SRUxBVEVEIFNUWUxFU1xcbi0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICovXFxuXFxuLyogRVhQQU5ERUQgVklFVyBTVFlMRVMgKi9cXG5cXG4uby1pbWFnZXMuby1leHBhbmRlZCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vLWltYWdlcy5vLWV4cGFuZGVkIG5hdiB1bCBsaSB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vLWltYWdlcy10aHVtYm5haWwtaWNvbiB7XFxuICBmaWxsLW9wYWNpdHk6IDAuNTtcXG4gIGZpbGw6IHdoaXRlO1xcbiAgc3Ryb2tlOiBibGFjaztcXG4gIHN0cm9rZS13aWR0aDogMC4zNXJlbTtcXG59XFxuXFxuLm8taW1hZ2VzLXRodW1ibmFpbC1pY29uLnNlbGVjdGVkIHtcXG4gIGZpbGwtb3BhY2l0eTogMC45O1xcbiAgZmlsbDogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL292ZXJ2aWV3LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=