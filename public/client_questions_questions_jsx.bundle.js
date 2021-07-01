(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_questions_questions_jsx"],{

/***/ "./client/questions/addAnswerModal.jsx":
/*!*********************************************!*\
  !*** ./client/questions/addAnswerModal.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _answerPhotos_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answerPhotos.jsx */ "./client/questions/answerPhotos.jsx");
/* harmony import */ var _addedPhotos_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addedPhotos.jsx */ "./client/questions/addedPhotos.jsx");





class AnswerModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      user: "",
      email: "",
      photos: []
    };
    this.updatePhotos = this.updatePhotos.bind(this);
  }

  submitAnswers() {
    var {
      answer,
      user,
      email
    } = this.state;
    var warning = "You are missing the following:\n";

    if (user === "") {
      warning += "- Username \n";
    }

    if (email === "") {
      warning += "- Email \n";
    }

    if (answer === "") {
      warning += "- Answer ";
    }

    if (warning !== "You are missing the following:\n") {
      alert(warning);
    } else {
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'post',
        url: "/qa/questions/".concat(this.props.question, "/answers"),
        data: {
          body: this.state.answer,
          name: this.state.user,
          email: this.state.email,
          photos: this.state.photos
        }
      }).catch(err => console.log("Error adding answer", err));
      this.props.handleClose();
    }
  }

  inputChange(stateKey) {
    var input = document.getElementById(stateKey).value;
    this.setState({
      [stateKey]: input
    });
  }

  updatePhotos(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bji3bjas");
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "post",
      url: "https://api.cloudinary.com/v1_1/hrrpp28fec/image/upload",
      data: formData
    }).then(data => {
      this.setState({
        photos: this.state.photos.concat([data.data.url])
      });
    });
  }

  closeModal() {
    this.setState({
      answer: "",
      user: "",
      email: "",
      photos: []
    });
    this.props.handleClose();
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "answer-modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "answer-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "answer-title"
    }, "Submit your Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "exit",
      onClick: () => this.closeModal()
    }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "subtitle"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, this.props.productName, " : ", this.props.questionBody)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "input-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      htmlFor: "user"
    }, "What is your nickname* "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      id: "user",
      type: "text",
      onChange: () => this.inputChange("user"),
      maxLength: "60",
      placeholder: "Example: jack543",
      value: this.state.user
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "disclaimer"
    }, "For privacy reasons, do not use your full name or email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      htmlFor: "email"
    }, "Your email* "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      id: "email",
      type: "text",
      onChange: () => this.inputChange("email"),
      maxLength: "60",
      placeholder: "Example: jack@email.com",
      value: this.state.email
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "disclaimer"
    }, "For authentication reasons, you will not be emailed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      htmlFor: "answer"
    }, "Your Answer*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      id: "answer",
      type: "text",
      onChange: () => this.inputChange("answer"),
      maxLength: "1000",
      value: this.state.answer
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_addedPhotos_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
      photos: this.state.photos
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_answerPhotos_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
      updatePhotos: this.updatePhotos,
      files: this.state.photos
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "answer-submit",
      onClick: () => this.submitAnswers()
    }, "Submit Answer"))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerModal);

/***/ }),

/***/ "./client/questions/addQuestion.jsx":
/*!******************************************!*\
  !*** ./client/questions/addQuestion.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



class AddQuestion extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      qUser: "",
      qEmail: "",
      questionInput: ""
    };
  }

  handleSubmit() {
    var {
      qUser,
      qEmail,
      questionInput
    } = this.state;
    var warning = "You are missing the following:\n";

    if (qUser === "") {
      warning += "- Username \n";
    }

    if (qEmail === "") {
      warning += "- Email \n";
    }

    if (questionInput === "") {
      warning += "- Question";
    }

    if (warning !== "You are missing the following:\n") {
      alert(warning);
    } else {
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'post',
        url: "/qa/questions",
        data: {
          name: qUser,
          email: qEmail,
          body: questionInput,
          product_id: this.props.productId
        }
      }).catch(err => console.log("Error adding question", err));
    }
  }

  inputChange(stateKey) {
    var input = document.getElementById(stateKey).value;
    this.setState({
      [stateKey]: input
    });
    console.log(this.state);
  }

  handleClosing() {
    this.setState({
      qUser: "",
      qEmail: "",
      questionInput: ""
    });
    this.props.handleClose();
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "question-modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "question-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
      className: "question-title"
    }, "Ask Your Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      onClick: () => this.handleClosing()
    }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "subtitle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "About the ", this.props.productName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "What is your nickname* "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      id: "qUser",
      type: "text",
      onChange: () => this.inputChange("qUser"),
      maxLength: "60",
      placeholder: "Example: jackson11!",
      value: this.state.quser
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "disclaimer"
    }, "For privacy reasons, do not use your full name or email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Your email*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      id: "qEmail",
      type: "text",
      onChange: () => this.inputChange("qEmail"),
      maxLength: "60",
      placeholder: "\u201CWhy did you like the product or not?\u201D",
      value: this.state.qemail
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "disclaimer"
    }, "For authentication reasons, you will not be emailed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Your Question*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
      id: "questionInput",
      type: "text",
      onChange: () => this.inputChange("questionInput"),
      maxLength: "1000",
      value: this.state.questionInput
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "question-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      onClick: () => this.handleSubmit()
    }, "Submit question"))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddQuestion);

/***/ }),

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

/***/ "./client/questions/answerEntry.jsx":
/*!******************************************!*\
  !*** ./client/questions/answerEntry.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _answerPhotoDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answerPhotoDisplay.jsx */ "./client/questions/answerPhotoDisplay.jsx");




class AnswerEntry extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: false,
      helpfulClick: false,
      helpful: this.props.answer.helpfulness
    };
  }

  handleReport() {
    if (!this.state.reported) {
      this.setState({
        reported: true
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "put",
        url: "/qa/answers/".concat(this.props.answer.answer_id, "/report")
      });
    } else {
      console.log("Already Reported");
    }
  }

  handleHelpful() {
    if (!this.state.helpfulClick) {
      this.setState(ps => {
        return {
          helpfulClick: true,
          helpful: ps.helpful + 1
        };
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "put",
        url: "/qa/answers/".concat(this.props.answer.answer_id, "/helpful")
      }).catch(err => console.log("Error: ", err));
    } else {
      console.log("Already Clicked!");
    }
  }

  convertDate(date) {
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
  }

  reportDisplay() {
    if (this.state.reported) {
      return "reported";
    } else {
      return "report";
    }
  }

  render() {
    var {
      body,
      photos,
      answerer_name,
      date
    } = this.props.answer;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "answer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "answer-display"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "a"
    }, "A:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "answer-body"
    }, body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_answerPhotoDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
      photos: photos
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "answer-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "by ", answerer_name, ", ", this.convertDate(date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Helpful? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("u", {
      onClick: () => this.handleHelpful()
    }, "Yes"), " (", this.state.helpful, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      onClick: () => this.handleReport()
    }, this.reportDisplay())));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerEntry);

/***/ }),

/***/ "./client/questions/answerPhotoDisplay.jsx":
/*!*************************************************!*\
  !*** ./client/questions/answerPhotoDisplay.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var AnswerPhotoDisplay = _ref => {
  var {
    photos
  } = _ref;

  if (photos === undefined) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "img-display"
    }, photos.map((_ref2, i) => {
      var {
        url
      } = _ref2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: url,
        key: i
      });
    }));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerPhotoDisplay);

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

/***/ "./client/questions/answersList.jsx":
/*!******************************************!*\
  !*** ./client/questions/answersList.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _expandAnswers_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandAnswers.jsx */ "./client/questions/expandAnswers.jsx");
/* harmony import */ var _answerEntry_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answerEntry.jsx */ "./client/questions/answerEntry.jsx");





class AnswersList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersList: [],
      answers: [],
      report: [],
      show: true
    };
    this.handleExpandAnswers = this.handleExpandAnswers.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.questionId !== this.props.questionId) {
      this.getAnswers();
    }
  }

  getAnswers() {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'get',
      url: "/qa/questions/".concat(this.props.questionId, "/answers"),
      params: {
        count: 50
      }
    }).then(data => {
      var sorted = data.data.results.sort((a, b) => b.helpfulness - a.helpfulness);
      this.setState({
        answersList: sorted,
        answers: sorted.slice(0, 2),
        questionId: this.props.questionId
      });
    }).catch(err => console.log("Error: ", err));
  }

  handleExpandAnswers() {
    this.setState({
      answers: this.state.answersList,
      show: false
    });
  }

  render() {
    if (this.state.answers.length === 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "answer-list"
    }, this.state.answers.map((answer, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_answerEntry_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
      answer: answer,
      key: index,
      question: this.props.question
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_expandAnswers_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
      answersList: this.state.answersList,
      seeMoreAnswers: this.handleExpandAnswers,
      show: this.state.show
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswersList);

/***/ }),

/***/ "./client/questions/expandAnswers.jsx":
/*!********************************************!*\
  !*** ./client/questions/expandAnswers.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ExpandAnswers = props => {
  if (props.answersList.length > 2 && props.show) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "expand-answers-btn",
      onClick: () => props.seeMoreAnswers()
    }, "See More Answers");
  } else {
    return null;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandAnswers);

/***/ }),

/***/ "./client/questions/moreAnsweredQuestions.jsx":
/*!****************************************************!*\
  !*** ./client/questions/moreAnsweredQuestions.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var MoreAnsweredQuestions = _ref => {
  var {
    questions,
    handleMoreAnsweredQuestions,
    searchInUse
  } = _ref;

  if (questions.length > 0 && !searchInUse) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "more-q-btn",
      onClick: () => handleMoreAnsweredQuestions()
    }, "More Answered Questions");
  } else {
    return null;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreAnsweredQuestions);

/***/ }),

/***/ "./client/questions/questionEntry.jsx":
/*!********************************************!*\
  !*** ./client/questions/questionEntry.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _answersList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answersList.jsx */ "./client/questions/answersList.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




class QuestionEntry extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClick: false,
      helpful: this.props.question.question_helpfulness
    };
  }

  updateQuestionHelpful() {
    if (!this.state.helpfulClick) {
      this.setState(ps => {
        return {
          helpfulClick: true,
          helpful: ps.helpful + 1
        };
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default()({
        method: 'put',
        url: "/qa/questions/".concat(this.props.question.question_id, "/helpful")
      }).catch(err => console.log("Error: ", err));
    } else {
      console.log("Already Clicked!");
    }
  }

  render() {
    var {
      question_body,
      question_id
    } = this.props.question;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "question-entry"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "question"
    }, "Q: ", question_body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "question-entry-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Helpful? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      onClick: () => this.updateQuestionHelpful()
    }, "Yes"), " (", this.state.helpful, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      onClick: () => this.props.handleAddAnswer(question_id, question_body)
    }, "Add Answer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_answersList_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      questionId: question_id
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionEntry);

/***/ }),

/***/ "./client/questions/questions.jsx":
/*!****************************************!*\
  !*** ./client/questions/questions.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.jsx */ "./client/questions/search.jsx");
/* harmony import */ var _questionsList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionsList.jsx */ "./client/questions/questionsList.jsx");
/* harmony import */ var _addAnswerModal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addAnswerModal.jsx */ "./client/questions/addAnswerModal.jsx");
/* harmony import */ var _addQuestion_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addQuestion.jsx */ "./client/questions/addQuestion.jsx");
/* harmony import */ var _moreAnsweredQuestions_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moreAnsweredQuestions.jsx */ "./client/questions/moreAnsweredQuestions.jsx");








class Questions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      masterQuestionsList: [],
      questions: [],
      displayQuestions: [],
      answerShow: false,
      questionShow: false,
      questionId: null,
      questionBody: "",
      searchInUse: false
    };
    this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);
    this.handleAddQClick = this.handleAddQClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMoreAnsweredQuestions = this.handleMoreAnsweredQuestions.bind(this);
  }

  handleSearch(input) {
    var {
      masterQuestionsList
    } = this.state;

    if (input.length >= 3) {
      this.setState({
        searchInUse: true,
        displayQuestions: masterQuestionsList.filter(question => question.question_body.toLowerCase().includes(input.toLowerCase()))
      });
    } else {
      this.setState({
        questions: masterQuestionsList.slice(2),
        displayQuestions: masterQuestionsList.slice(0, 2),
        searchInUse: false
      });
    }
  }

  componentDidMount() {
    this.getQuestions().then(data => this.updateState(data)).catch(err => console.log("Error: ", err));
  }

  getQuestions() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'get',
      url: '/qa/questions',
      params: {
        product_id: this.props.product.productId,
        count: 50
      }
    });
  }

  updateState(data) {
    var sorted = data.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    this.setState({
      product_id: Number(data.data.product_id),
      masterQuestionsList: sorted.slice(),
      displayQuestions: sorted.slice(0, 2),
      questions: sorted.slice(2)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.product_id !== this.props.product.productId) {
      this.getQuestions().then(data => {
        this.updateState(data);
      }).catch(err => console.log("Error: ", err));
    }
  }

  handleMoreAnsweredQuestions() {
    this.setState({
      displayQuestions: this.state.displayQuestions.concat(this.state.questions.splice(0, 4))
    });
  }

  handleAddAnswerClick(question_id, question_body) {
    if (!this.state.answerShow) {
      this.setState({
        answerShow: true,
        questionId: question_id,
        questionBody: question_body
      });
    } else {
      this.setState({
        answerShow: false,
        questionId: null,
        questionBody: ""
      });
    }
  }

  handleAddQClick() {
    if (!this.state.questionShow) {
      this.setState({
        questionShow: true
      });
    } else {
      this.setState({
        questionShow: false
      });
    }
  }

  render() {
    var {
      displayQuestions,
      answerShow,
      questionShow,
      product_id,
      questionId,
      questionBody,
      questions,
      searchInUse
    } = this.state;
    var {
      productName
    } = this.props.product;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "qaDisplay"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Questions & Answers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
      handleSearch: this.handleSearch
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_questionsList_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
      questions: displayQuestions,
      handleAddAnswer: this.handleAddAnswerClick
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_addAnswerModal_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
      show: answerShow,
      productName: productName,
      handleClose: this.handleAddAnswerClick,
      question: questionId,
      questionBody: questionBody
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_addQuestion_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
      show: questionShow,
      productId: product_id,
      productName: productName,
      handleClose: this.handleAddQClick
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_moreAnsweredQuestions_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
      questions: questions,
      searchInUse: searchInUse,
      handleMoreAnsweredQuestions: this.handleMoreAnsweredQuestions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "add-q-btn",
      onClick: () => this.handleAddQClick()
    }, "Add a question +"));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Questions);

/***/ }),

/***/ "./client/questions/questionsList.jsx":
/*!********************************************!*\
  !*** ./client/questions/questionsList.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _questionEntry_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionEntry.jsx */ "./client/questions/questionEntry.jsx");



var QuestionList = _ref => {
  var {
    questions,
    handleAddAnswer
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "question-list"
  }, questions.map((question, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_questionEntry_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    key: i,
    question: question,
    handleAddAnswer: handleAddAnswer
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionList);

/***/ }),

/***/ "./client/questions/search.jsx":
/*!*************************************!*\
  !*** ./client/questions/search.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Search = _ref => {
  var {
    handleSearch
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "qaSearch",
    type: "text",
    placeholder: "HAVE A QUESTION? SEARCH FOR ANSWERS...",
    onChange: e => {
      handleSearch(e.target.value);
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcXVlc3Rpb25zL2FkZEFuc3dlck1vZGFsLmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcXVlc3Rpb25zL2FkZFF1ZXN0aW9uLmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcXVlc3Rpb25zL2FkZGVkUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcXVlc3Rpb25zL2Fuc3dlckVudHJ5LmpzeCIsIndlYnBhY2s6Ly9mZWMvLi9jbGllbnQvcXVlc3Rpb25zL2Fuc3dlclBob3RvRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3F1ZXN0aW9ucy9hbnN3ZXJQaG90b3MuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9xdWVzdGlvbnMvYW5zd2Vyc0xpc3QuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9xdWVzdGlvbnMvZXhwYW5kQW5zd2Vycy5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3F1ZXN0aW9ucy9tb3JlQW5zd2VyZWRRdWVzdGlvbnMuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9xdWVzdGlvbnMvcXVlc3Rpb25FbnRyeS5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3F1ZXN0aW9ucy9xdWVzdGlvbnMuanN4Iiwid2VicGFjazovL2ZlYy8uL2NsaWVudC9xdWVzdGlvbnMvcXVlc3Rpb25zTGlzdC5qc3giLCJ3ZWJwYWNrOi8vZmVjLy4vY2xpZW50L3F1ZXN0aW9ucy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIkFuc3dlck1vZGFsIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJhbnN3ZXIiLCJ1c2VyIiwiZW1haWwiLCJwaG90b3MiLCJ1cGRhdGVQaG90b3MiLCJiaW5kIiwic3VibWl0QW5zd2VycyIsIndhcm5pbmciLCJhbGVydCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwicXVlc3Rpb24iLCJkYXRhIiwiYm9keSIsIm5hbWUiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbG9zZSIsImlucHV0Q2hhbmdlIiwic3RhdGVLZXkiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidGhlbiIsImNvbmNhdCIsImNsb3NlTW9kYWwiLCJyZW5kZXIiLCJzaG93IiwicHJvZHVjdE5hbWUiLCJxdWVzdGlvbkJvZHkiLCJBZGRRdWVzdGlvbiIsInFVc2VyIiwicUVtYWlsIiwicXVlc3Rpb25JbnB1dCIsImhhbmRsZVN1Ym1pdCIsInByb2R1Y3RfaWQiLCJwcm9kdWN0SWQiLCJoYW5kbGVDbG9zaW5nIiwicXVzZXIiLCJxZW1haWwiLCJBZGRlZFBob3RvcyIsIm1hcCIsInBob3RvIiwiaSIsIkFuc3dlckVudHJ5IiwicmVwb3J0ZWQiLCJoZWxwZnVsQ2xpY2siLCJoZWxwZnVsIiwiaGVscGZ1bG5lc3MiLCJoYW5kbGVSZXBvcnQiLCJhbnN3ZXJfaWQiLCJoYW5kbGVIZWxwZnVsIiwicHMiLCJjb252ZXJ0RGF0ZSIsImRhdGUiLCJtb250aHMiLCJtb250aCIsInNsaWNlIiwiZGF5IiwieWVhciIsInJlcG9ydERpc3BsYXkiLCJhbnN3ZXJlcl9uYW1lIiwiQW5zd2VyUGhvdG9EaXNwbGF5IiwidW5kZWZpbmVkIiwiQW5zd2VyUGhvdG9zIiwibGVuZ3RoIiwiZSIsIkFuc3dlcnNMaXN0IiwiYW5zd2Vyc0xpc3QiLCJhbnN3ZXJzIiwicmVwb3J0IiwiaGFuZGxlRXhwYW5kQW5zd2VycyIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0QW5zd2VycyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInF1ZXN0aW9uSWQiLCJwYXJhbXMiLCJjb3VudCIsInNvcnRlZCIsInJlc3VsdHMiLCJzb3J0IiwiYSIsImIiLCJpbmRleCIsIkV4cGFuZEFuc3dlcnMiLCJzZWVNb3JlQW5zd2VycyIsIk1vcmVBbnN3ZXJlZFF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsImhhbmRsZU1vcmVBbnN3ZXJlZFF1ZXN0aW9ucyIsInNlYXJjaEluVXNlIiwiUXVlc3Rpb25FbnRyeSIsInF1ZXN0aW9uX2hlbHBmdWxuZXNzIiwidXBkYXRlUXVlc3Rpb25IZWxwZnVsIiwicXVlc3Rpb25faWQiLCJxdWVzdGlvbl9ib2R5IiwiaGFuZGxlQWRkQW5zd2VyIiwiUXVlc3Rpb25zIiwibWFzdGVyUXVlc3Rpb25zTGlzdCIsImRpc3BsYXlRdWVzdGlvbnMiLCJhbnN3ZXJTaG93IiwicXVlc3Rpb25TaG93IiwiaGFuZGxlQWRkQW5zd2VyQ2xpY2siLCJoYW5kbGVBZGRRQ2xpY2siLCJoYW5kbGVTZWFyY2giLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2V0UXVlc3Rpb25zIiwidXBkYXRlU3RhdGUiLCJwcm9kdWN0IiwiTnVtYmVyIiwicHJldlN0YXRlIiwic3BsaWNlIiwiUXVlc3Rpb25MaXN0IiwiU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFOLFNBQTBCQyw0Q0FBMUIsQ0FBMEM7QUFDeENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFDLEVBREk7QUFFWEMsVUFBSSxFQUFDLEVBRk07QUFHWEMsV0FBSyxFQUFDLEVBSEs7QUFJWEMsWUFBTSxFQUFFO0FBSkcsS0FBYjtBQU1BLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFFREMsZUFBYSxHQUFFO0FBQ2IsUUFBTTtBQUFDTixZQUFEO0FBQVNDLFVBQVQ7QUFBZUM7QUFBZixRQUF3QixLQUFLSCxLQUFuQztBQUNBLFFBQUlRLE9BQU8sR0FBRyxrQ0FB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WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBBbnN3ZXJQaG90b3MgZnJvbSAnLi9hbnN3ZXJQaG90b3MuanN4JztcbmltcG9ydCBBZGRlZFBob3RvcyBmcm9tICcuL2FkZGVkUGhvdG9zLmpzeCc7XG5cbmNsYXNzIEFuc3dlck1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuc3dlcjpcIlwiLFxuICAgICAgdXNlcjpcIlwiLFxuICAgICAgZW1haWw6XCJcIixcbiAgICAgIHBob3RvczogW11cbiAgICB9XG4gICAgdGhpcy51cGRhdGVQaG90b3MgPSB0aGlzLnVwZGF0ZVBob3Rvcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3VibWl0QW5zd2Vycygpe1xuICAgIGNvbnN0IHthbnN3ZXIsIHVzZXIsIGVtYWlsfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgd2FybmluZyA9IFwiWW91IGFyZSBtaXNzaW5nIHRoZSBmb2xsb3dpbmc6XFxuXCJcblxuICAgIGlmICh1c2VyID09PSBcIlwiKSB7XG4gICAgICB3YXJuaW5nICs9IFwiLSBVc2VybmFtZSBcXG5cIlxuICAgIH1cbiAgICBpZiAoZW1haWwgPT09IFwiXCIpIHtcbiAgICAgIHdhcm5pbmcgKz0gXCItIEVtYWlsIFxcblwiXG4gICAgfVxuICAgIGlmIChhbnN3ZXIgPT09IFwiXCIpIHtcbiAgICAgIHdhcm5pbmcgKz0gXCItIEFuc3dlciBcIlxuICAgIH1cbiAgICBpZiAod2FybmluZyAhPT0gXCJZb3UgYXJlIG1pc3NpbmcgdGhlIGZvbGxvd2luZzpcXG5cIikge1xuICAgICAgYWxlcnQod2FybmluZylcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiBgL3FhL3F1ZXN0aW9ucy8ke3RoaXMucHJvcHMucXVlc3Rpb259L2Fuc3dlcnNgLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYm9keTp0aGlzLnN0YXRlLmFuc3dlcixcbiAgICAgICAgICBuYW1lOnRoaXMuc3RhdGUudXNlcixcbiAgICAgICAgICBlbWFpbDp0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgIHBob3Rvczp0aGlzLnN0YXRlLnBob3Rvc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgYWRkaW5nIGFuc3dlclwiLCBlcnIpKVxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRDaGFuZ2Uoc3RhdGVLZXkpe1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0YXRlS2V5KS52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtbc3RhdGVLZXldOiBpbnB1dH0pXG4gIH1cblxuICB1cGRhdGVQaG90b3MoZXZlbnQpe1xuICAgIGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKVxuICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgXCJiamkzYmphc1wiKVxuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIHVybDogXCJodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL2hycnBwMjhmZWMvaW1hZ2UvdXBsb2FkXCIsXG4gICAgICBkYXRhOiBmb3JtRGF0YVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwaG90b3M6IHRoaXMuc3RhdGUucGhvdG9zLmNvbmNhdChbZGF0YS5kYXRhLnVybF0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYW5zd2VyOlwiXCIsXG4gICAgICB1c2VyOlwiXCIsXG4gICAgICBlbWFpbDpcIlwiLFxuICAgICAgcGhvdG9zOiBbXVxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpXG4gIH1cblxuICByZW5kZXIoKXtcblxuICAgIGlmICghdGhpcy5wcm9wcy5zaG93KXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1tb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhbnN3ZXItdGl0bGVcIj5TdWJtaXQgeW91ciBBbnN3ZXI8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGl0XCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9Plg8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPiA8Yj57dGhpcy5wcm9wcy5wcm9kdWN0TmFtZX0gOiB7dGhpcy5wcm9wcy5xdWVzdGlvbkJvZHl9PC9iPjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlclwiPldoYXQgaXMgeW91ciBuaWNrbmFtZSogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmlucHV0Q2hhbmdlKFwidXNlclwiKX0gbWF4TGVuZ3RoPVwiNjBcIiBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IGphY2s1NDNcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyfT48L2lucHV0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPkZvciBwcml2YWN5IHJlYXNvbnMsIGRvIG5vdCB1c2UgeW91ciBmdWxsIG5hbWUgb3IgZW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIGVtYWlsKiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmlucHV0Q2hhbmdlKFwiZW1haWxcIil9IG1heExlbmd0aD1cIjYwXCIgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrQGVtYWlsLmNvbVwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfT48L2lucHV0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPkZvciBhdXRoZW50aWNhdGlvbiByZWFzb25zLCB5b3Ugd2lsbCBub3QgYmUgZW1haWxlZDwvcD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCI+WW91ciBBbnN3ZXIqPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImFuc3dlclwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eygpID0+IHRoaXMuaW5wdXRDaGFuZ2UoXCJhbnN3ZXJcIil9IG1heExlbmd0aD1cIjEwMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hbnN3ZXJ9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEFkZGVkUGhvdG9zIHBob3Rvcz17dGhpcy5zdGF0ZS5waG90b3N9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxBbnN3ZXJQaG90b3MgdXBkYXRlUGhvdG9zPXt0aGlzLnVwZGF0ZVBob3Rvc30gZmlsZXM9e3RoaXMuc3RhdGUucGhvdG9zfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItc3VibWl0XCIgb25DbGljaz17KCk9PnRoaXMuc3VibWl0QW5zd2VycygpfT5TdWJtaXQgQW5zd2VyPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlck1vZGFsO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQWRkUXVlc3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHFVc2VyOlwiXCIsXG4gICAgICBxRW1haWw6XCJcIixcbiAgICAgIHF1ZXN0aW9uSW5wdXQ6XCJcIlxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCgpe1xuICAgIGNvbnN0IHtxVXNlciwgcUVtYWlsLCBxdWVzdGlvbklucHV0fSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHdhcm5pbmcgPSBcIllvdSBhcmUgbWlzc2luZyB0aGUgZm9sbG93aW5nOlxcblwiXG5cbiAgICBpZiAocVVzZXIgPT09IFwiXCIpIHtcbiAgICAgIHdhcm5pbmcgKz0gXCItIFVzZXJuYW1lIFxcblwiXG4gICAgfVxuICAgIGlmIChxRW1haWwgPT09IFwiXCIpIHtcbiAgICAgIHdhcm5pbmcgKz0gXCItIEVtYWlsIFxcblwiXG4gICAgfVxuICAgIGlmIChxdWVzdGlvbklucHV0ID09PSBcIlwiKSB7XG4gICAgICB3YXJuaW5nICs9IFwiLSBRdWVzdGlvblwiXG4gICAgfVxuICAgIGlmICh3YXJuaW5nICE9PSBcIllvdSBhcmUgbWlzc2luZyB0aGUgZm9sbG93aW5nOlxcblwiKSB7XG4gICAgICBhbGVydCh3YXJuaW5nKVxuICAgIH1lbHNlIHtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIHVybDogXCIvcWEvcXVlc3Rpb25zXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogcVVzZXIsXG4gICAgICAgICAgICBlbWFpbDogcUVtYWlsLFxuICAgICAgICAgICAgYm9keTogcXVlc3Rpb25JbnB1dCxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMucHJvcHMucHJvZHVjdElkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJFcnJvciBhZGRpbmcgcXVlc3Rpb25cIiwgZXJyKSlcbiAgICAgIH1cbiAgfVxuXG4gIGlucHV0Q2hhbmdlKHN0YXRlS2V5KXtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGF0ZUtleSkudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W3N0YXRlS2V5XTogaW5wdXR9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICBoYW5kbGVDbG9zaW5nKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxVXNlcjpcIlwiLFxuICAgICAgcUVtYWlsOlwiXCIsXG4gICAgICBxdWVzdGlvbklucHV0OlwiXCJcbiAgICB9KVxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgaWYgKCF0aGlzLnByb3BzLnNob3cpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tbW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJxdWVzdGlvbi10aXRsZVwiPkFzayBZb3VyIFF1ZXN0aW9uPC9oMj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbG9zaW5nKCl9Plg8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPjxiPkFib3V0IHRoZSB7dGhpcy5wcm9wcy5wcm9kdWN0TmFtZX08L2I+PC9wPlxuICAgICAgICAgIDxsYWJlbD5XaGF0IGlzIHlvdXIgbmlja25hbWUqIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwicVVzZXJcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmlucHV0Q2hhbmdlKFwicVVzZXJcIil9IG1heExlbmd0aD1cIjYwXCIgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrc29uMTEhXCIgdmFsdWU9e3RoaXMuc3RhdGUucXVzZXJ9PjwvaW5wdXQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPkZvciBwcml2YWN5IHJlYXNvbnMsIGRvIG5vdCB1c2UgeW91ciBmdWxsIG5hbWUgb3IgZW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICA8bGFiZWw+WW91ciBlbWFpbCo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInFFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eygpID0+IHRoaXMuaW5wdXRDaGFuZ2UoXCJxRW1haWxcIil9IG1heExlbmd0aD1cIjYwXCIgcGxhY2Vob2xkZXI9XCLigJxXaHkgZGlkIHlvdSBsaWtlIHRoZSBwcm9kdWN0IG9yIG5vdD/igJ1cIiB2YWx1ZT17dGhpcy5zdGF0ZS5xZW1haWx9ID48L2lucHV0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5Gb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQ8L3A+XG4gICAgICAgICAgPGxhYmVsPllvdXIgUXVlc3Rpb24qPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJxdWVzdGlvbklucHV0XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KCkgPT4gdGhpcy5pbnB1dENoYW5nZShcInF1ZXN0aW9uSW5wdXRcIil9IG1heExlbmd0aD1cIjEwMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5xdWVzdGlvbklucHV0fT48L3RleHRhcmVhPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PnRoaXMuaGFuZGxlU3VibWl0KCl9PlN1Ym1pdCBxdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRRdWVzdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBZGRlZFBob3RvcyA9ICh7cGhvdG9zfSkgPT4ge1xuXG4gIHJldHVybiAoXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tbGlzdFwiPlxuICAgICAge3Bob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiA8aW1nIGtleT17aX0gc3JjPXtwaG90b30gY2xhc3NOYW1lPVwiYW5zd2VyLWltZ1wiPjwvaW1nPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkZWRQaG90b3M7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5zd2VyUGhvdG9EaXNwbGF5IGZyb20gJy4vYW5zd2VyUGhvdG9EaXNwbGF5LmpzeCc7XG5cbmNsYXNzIEFuc3dlckVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXBvcnRlZDogZmFsc2UsXG4gICAgICBoZWxwZnVsQ2xpY2s6IGZhbHNlLFxuICAgICAgaGVscGZ1bDogdGhpcy5wcm9wcy5hbnN3ZXIuaGVscGZ1bG5lc3NcbiAgICB9O1xuICB9O1xuXG4gIGhhbmRsZVJlcG9ydCgpe1xuICAgIGlmICghdGhpcy5zdGF0ZS5yZXBvcnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlcG9ydGVkOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcInB1dFwiLFxuICAgICAgICB1cmw6IGAvcWEvYW5zd2Vycy8ke3RoaXMucHJvcHMuYW5zd2VyLmFuc3dlcl9pZH0vcmVwb3J0YFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IFJlcG9ydGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVIZWxwZnVsKCl7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmhlbHBmdWxDbGljaykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgocHMpID0+IHtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgIGhlbHBmdWxDbGljazogdHJ1ZSxcbiAgICAgICAgICBoZWxwZnVsOiBwcy5oZWxwZnVsICsgMVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwicHV0XCIsXG4gICAgICAgIHVybDogYC9xYS9hbnN3ZXJzLyR7dGhpcy5wcm9wcy5hbnN3ZXIuYW5zd2VyX2lkfS9oZWxwZnVsYFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBDbGlja2VkIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29udmVydERhdGUoZGF0ZSl7XG4gICAgY29uc3QgbW9udGhzID0ge1xuICAgICAgXCIwMVwiOlwiSmFudWFyeVwiLFxuICAgICAgXCIwMlwiOlwiRmVicnVhcnlcIixcbiAgICAgIFwiMDNcIjpcIk1hcmNoXCIsXG4gICAgICBcIjA0XCI6XCJBcHJpbFwiLFxuICAgICAgXCIwNVwiOlwiTWF5XCIsXG4gICAgICBcIjA2XCI6XCJKdW5lXCIsXG4gICAgICBcIjA3XCI6XCJKdWx5XCIsXG4gICAgICBcIjA4XCI6XCJBdWd1c3RcIixcbiAgICAgIFwiMDlcIjpcIlNlcHRlbWJlclwiLFxuICAgICAgXCIxMFwiOlwiT2N0b2JlclwiLFxuICAgICAgXCIxMVwiOlwiTm92ZW1iZXJcIixcbiAgICAgIFwiMTJcIjpcIkRlY2VtYmVyXCJcbiAgICB9O1xuXG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2RhdGUuc2xpY2UoNSw3KV07XG4gICAgbGV0IGRheSA9IGRhdGUuc2xpY2UoOCwxMCk7XG4gICAgbGV0IHllYXIgPSBkYXRlLnNsaWNlKDAsNCk7XG5cbiAgICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWBcbiAgfTtcblxuICByZXBvcnREaXNwbGF5KCl7XG4gICAgaWYodGhpcy5zdGF0ZS5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuIFwicmVwb3J0ZWRcIlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJyZXBvcnRcIlxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2JvZHksIHBob3RvcywgYW5zd2VyZXJfbmFtZSwgZGF0ZX0gPSB0aGlzLnByb3BzLmFuc3dlclxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiYW5zd2VyXCIgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWRpc3BsYXlcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFcIj5BOjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFuc3dlci1ib2R5XCI+e2JvZHl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxBbnN3ZXJQaG90b0Rpc3BsYXkgcGhvdG9zPXtwaG90b3N9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItZm9vdGVyXCI+XG4gICAgICAgICAgICA8cD5ieSB7YW5zd2VyZXJfbmFtZX0sIHt0aGlzLmNvbnZlcnREYXRlKGRhdGUpfTwvcD5cbiAgICAgICAgICAgIDxwID5IZWxwZnVsPyA8dSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUhlbHBmdWwoKX0+WWVzPC91PiAoe3RoaXMuc3RhdGUuaGVscGZ1bH0pPC9wPlxuICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PiB0aGlzLmhhbmRsZVJlcG9ydCgpfT57dGhpcy5yZXBvcnREaXNwbGF5KCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlckVudHJ5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFuc3dlclBob3RvRGlzcGxheSA9ICh7cGhvdG9zfSkgPT4ge1xuICBpZiAocGhvdG9zID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctZGlzcGxheVwiPlxuICAgICAgICB7cGhvdG9zLm1hcCgoe3VybH0sIGkpID0+XG4gICAgICAgICAgPGltZyBzcmM9e3VybH0ga2V5PXtpfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyUGhvdG9EaXNwbGF5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFuc3dlclBob3RvcyA9ICh7ZmlsZXMsIHVwZGF0ZVBob3Rvc30pID0+IHtcblxuICBpZiAoZmlsZXMubGVuZ3RoIDwgNSkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIiBodG1sRm9yPVwidXBsb2FkLXBob3RvXCI+XG4gICAgICAgIDxpbnB1dCBpZD1cInVwbG9hZC1waG90b1wiIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXsoZSk9PiB1cGRhdGVQaG90b3MoZSl9PjwvaW5wdXQ+XG4gICAgICAgIFVwbG9hZCBQaG90b3M8L2xhYmVsPlxuICAgICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJQaG90b3M7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRXhwYW5kQW5zd2VycyBmcm9tICcuL2V4cGFuZEFuc3dlcnMuanN4JztcbmltcG9ydCBBbnN3ZXJFbnRyeSBmcm9tICcuL2Fuc3dlckVudHJ5LmpzeCc7XG5cbmNsYXNzIEFuc3dlcnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuc3dlcnNMaXN0OltdLFxuICAgICAgYW5zd2VyczpbXSxcbiAgICAgIHJlcG9ydDpbXSxcbiAgICAgIHNob3c6IHRydWVcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVFeHBhbmRBbnN3ZXJzID0gdGhpcy5oYW5kbGVFeHBhbmRBbnN3ZXJzLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmdldEFuc3dlcnMoKTtcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcbiAgICBpZihwcmV2UHJvcHMucXVlc3Rpb25JZCAhPT0gdGhpcy5wcm9wcy5xdWVzdGlvbklkKSB7XG4gICAgICB0aGlzLmdldEFuc3dlcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0QW5zd2Vycygpe1xuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDonZ2V0JyxcbiAgICAgIHVybDogYC9xYS9xdWVzdGlvbnMvJHt0aGlzLnByb3BzLnF1ZXN0aW9uSWR9L2Fuc3dlcnNgLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGNvdW50OiA1MFxuICAgICAgfVxuICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICBsZXQgc29ydGVkID0gZGF0YS5kYXRhLnJlc3VsdHMuc29ydCgoYSwgYikgPT4gYi5oZWxwZnVsbmVzcyAtIGEuaGVscGZ1bG5lc3MpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5zd2Vyc0xpc3Q6IHNvcnRlZCxcbiAgICAgICAgYW5zd2Vyczogc29ydGVkLnNsaWNlKDAsMiksXG4gICAgICAgIHF1ZXN0aW9uSWQ6IHRoaXMucHJvcHMucXVlc3Rpb25JZFxuICAgICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyKSk7XG4gIH07XG5cbiAgaGFuZGxlRXhwYW5kQW5zd2VycygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFuc3dlcnM6IHRoaXMuc3RhdGUuYW5zd2Vyc0xpc3QsXG4gICAgICBzaG93OiBmYWxzZVxuICAgIH0pXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFuc3dlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWxpc3RcIj5cbiAgICAgICAge3RoaXMuc3RhdGUuYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+XG4gICAgICAgIDxBbnN3ZXJFbnRyeVxuICAgICAgICAgIGFuc3dlcj17YW5zd2VyfVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgcXVlc3Rpb249e3RoaXMucHJvcHMucXVlc3Rpb259IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxFeHBhbmRBbnN3ZXJzXG4gICAgICAgICAgYW5zd2Vyc0xpc3Q9e3RoaXMuc3RhdGUuYW5zd2Vyc0xpc3R9XG4gICAgICAgICAgc2VlTW9yZUFuc3dlcnM9e3RoaXMuaGFuZGxlRXhwYW5kQW5zd2Vyc31cbiAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcnNMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgRXhwYW5kQW5zd2VycyA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMuYW5zd2Vyc0xpc3QubGVuZ3RoID4gMiAmJiBwcm9wcy5zaG93KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT1cImV4cGFuZC1hbnN3ZXJzLWJ0blwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNlZU1vcmVBbnN3ZXJzKCl9PlNlZSBNb3JlIEFuc3dlcnM8L3A+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZEFuc3dlcnM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTW9yZUFuc3dlcmVkUXVlc3Rpb25zID0gKHtxdWVzdGlvbnMsIGhhbmRsZU1vcmVBbnN3ZXJlZFF1ZXN0aW9ucywgc2VhcmNoSW5Vc2V9KSA9PiB7XG4gIGlmKHF1ZXN0aW9ucy5sZW5ndGggPiAwICYmICFzZWFyY2hJblVzZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vcmUtcS1idG5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb3JlQW5zd2VyZWRRdWVzdGlvbnMoKX1cbiAgICAgID5Nb3JlIEFuc3dlcmVkIFF1ZXN0aW9uczwvYnV0dG9uPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmVBbnN3ZXJlZFF1ZXN0aW9ucyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5zd2Vyc0xpc3QgZnJvbSAnLi9hbnN3ZXJzTGlzdC5qc3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgUXVlc3Rpb25FbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlbHBmdWxDbGljazogZmFsc2UsXG4gICAgICBoZWxwZnVsOiB0aGlzLnByb3BzLnF1ZXN0aW9uLnF1ZXN0aW9uX2hlbHBmdWxuZXNzXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUXVlc3Rpb25IZWxwZnVsKCl7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmhlbHBmdWxDbGljaykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgocHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWxwZnVsQ2xpY2s6IHRydWUsXG4gICAgICAgICAgaGVscGZ1bDogcHMuaGVscGZ1bCArIDFcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDoncHV0JyxcbiAgICAgIHVybDogYC9xYS9xdWVzdGlvbnMvJHt0aGlzLnByb3BzLnF1ZXN0aW9uLnF1ZXN0aW9uX2lkfS9oZWxwZnVsYCxcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBDbGlja2VkIVwiKVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3F1ZXN0aW9uX2JvZHksIHF1ZXN0aW9uX2lkfSA9IHRoaXMucHJvcHMucXVlc3Rpb25cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1lbnRyeVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInF1ZXN0aW9uXCI+UToge3F1ZXN0aW9uX2JvZHl9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tZW50cnktaGVhZGVyXCI+XG4gICAgICAgICAgICA8cD5IZWxwZnVsPyA8dSBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVF1ZXN0aW9uSGVscGZ1bCgpfT5ZZXM8L3U+ICh7dGhpcy5zdGF0ZS5oZWxwZnVsfSk8L3A+XG4gICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+IHRoaXMucHJvcHMuaGFuZGxlQWRkQW5zd2VyKHF1ZXN0aW9uX2lkLCBxdWVzdGlvbl9ib2R5KX0gPkFkZCBBbnN3ZXI8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxBbnN3ZXJzTGlzdFxuICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25faWR9ICAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uRW50cnk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2guanN4JztcbmltcG9ydCBRdWVzdGlvbnNMaXN0IGZyb20gJy4vcXVlc3Rpb25zTGlzdC5qc3gnO1xuaW1wb3J0IEFuc3dlck1vZGFsIGZyb20gJy4vYWRkQW5zd2VyTW9kYWwuanN4JztcbmltcG9ydCBBZGRRdWVzdGlvbiBmcm9tICcuL2FkZFF1ZXN0aW9uLmpzeCc7XG5pbXBvcnQgTW9yZUFuc3dlcmVkUXVlc3Rpb25zIGZyb20gJy4vbW9yZUFuc3dlcmVkUXVlc3Rpb25zLmpzeCc7XG5cbmNsYXNzIFF1ZXN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJvZHVjdF9pZDogMCxcbiAgICAgIG1hc3RlclF1ZXN0aW9uc0xpc3Q6IFtdLFxuICAgICAgcXVlc3Rpb25zOiBbXSxcbiAgICAgIGRpc3BsYXlRdWVzdGlvbnM6IFtdLFxuICAgICAgYW5zd2VyU2hvdzogZmFsc2UsXG4gICAgICBxdWVzdGlvblNob3c6IGZhbHNlLFxuICAgICAgcXVlc3Rpb25JZDogbnVsbCxcbiAgICAgIHF1ZXN0aW9uQm9keTogXCJcIixcbiAgICAgIHNlYXJjaEluVXNlOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVBZGRBbnN3ZXJDbGljayA9IHRoaXMuaGFuZGxlQWRkQW5zd2VyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFkZFFDbGljayA9IHRoaXMuaGFuZGxlQWRkUUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW9yZUFuc3dlcmVkUXVlc3Rpb25zID0gdGhpcy5oYW5kbGVNb3JlQW5zd2VyZWRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChpbnB1dCl7XG4gICAgY29uc3Qge21hc3RlclF1ZXN0aW9uc0xpc3R9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChpbnB1dC5sZW5ndGggPj0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaEluVXNlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5UXVlc3Rpb25zOiBtYXN0ZXJRdWVzdGlvbnNMaXN0LmZpbHRlcihxdWVzdGlvbiA9PiBxdWVzdGlvbi5xdWVzdGlvbl9ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXQudG9Mb3dlckNhc2UoKSkpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlc3Rpb25zOiBtYXN0ZXJRdWVzdGlvbnNMaXN0LnNsaWNlKDIpLFxuICAgICAgICBkaXNwbGF5UXVlc3Rpb25zOiBtYXN0ZXJRdWVzdGlvbnNMaXN0LnNsaWNlKDAsMiksXG4gICAgICAgIHNlYXJjaEluVXNlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25zKClcbiAgICAudGhlbigoZGF0YSkgPT4gdGhpcy51cGRhdGVTdGF0ZShkYXRhKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycikpXG4gIH1cblxuICBnZXRRdWVzdGlvbnMoKXtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOidnZXQnLFxuICAgICAgdXJsOiAnL3FhL3F1ZXN0aW9ucycsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDp0aGlzLnByb3BzLnByb2R1Y3QucHJvZHVjdElkLFxuICAgICAgICBjb3VudDo1MFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTdGF0ZShkYXRhKXtcbiAgICBsZXQgc29ydGVkID0gZGF0YS5kYXRhLnJlc3VsdHMuc29ydCgoYSxiKSA9PiBiLnF1ZXN0aW9uX2hlbHBmdWxuZXNzIC0gYS5xdWVzdGlvbl9oZWxwZnVsbmVzcyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2R1Y3RfaWQ6IE51bWJlcihkYXRhLmRhdGEucHJvZHVjdF9pZCksXG4gICAgICBtYXN0ZXJRdWVzdGlvbnNMaXN0OiBzb3J0ZWQuc2xpY2UoKSxcbiAgICAgIGRpc3BsYXlRdWVzdGlvbnM6IHNvcnRlZC5zbGljZSgwLDIpLFxuICAgICAgcXVlc3Rpb25zOiBzb3J0ZWQuc2xpY2UoMilcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYocHJldlN0YXRlLnByb2R1Y3RfaWQgIT09IHRoaXMucHJvcHMucHJvZHVjdC5wcm9kdWN0SWQpe1xuICAgICB0aGlzLmdldFF1ZXN0aW9ucygpXG4gICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSlcbiAgICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycikpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW9yZUFuc3dlcmVkUXVlc3Rpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheVF1ZXN0aW9uczp0aGlzLnN0YXRlLmRpc3BsYXlRdWVzdGlvbnMuY29uY2F0KHRoaXMuc3RhdGUucXVlc3Rpb25zLnNwbGljZSgwLDQpKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRBbnN3ZXJDbGljayAocXVlc3Rpb25faWQsIHF1ZXN0aW9uX2JvZHkpIHtcbiAgICBpZighdGhpcy5zdGF0ZS5hbnN3ZXJTaG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5zd2VyU2hvdzogdHJ1ZSxcbiAgICAgICAgcXVlc3Rpb25JZDogcXVlc3Rpb25faWQsXG4gICAgICAgIHF1ZXN0aW9uQm9keTogcXVlc3Rpb25fYm9keVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuc3dlclNob3c6IGZhbHNlLFxuICAgICAgICBxdWVzdGlvbklkOiBudWxsLFxuICAgICAgICBxdWVzdGlvbkJvZHk6IFwiXCJcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUUNsaWNrICgpIHtcbiAgICBpZighdGhpcy5zdGF0ZS5xdWVzdGlvblNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBxdWVzdGlvblNob3c6IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBxdWVzdGlvblNob3c6ZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkaXNwbGF5UXVlc3Rpb25zLCBhbnN3ZXJTaG93LCBxdWVzdGlvblNob3csIHByb2R1Y3RfaWQsIHF1ZXN0aW9uSWQsIHF1ZXN0aW9uQm9keSwgcXVlc3Rpb25zLCBzZWFyY2hJblVzZX0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtwcm9kdWN0TmFtZX0gPSB0aGlzLnByb3BzLnByb2R1Y3Q7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxYURpc3BsYXlcIj5cbiAgICAgICAgPGgzPlF1ZXN0aW9ucyAmIEFuc3dlcnM8L2gzPlxuICAgICAgICA8U2VhcmNoXG4gICAgICAgIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9IC8+XG4gICAgICAgIDxRdWVzdGlvbnNMaXN0XG4gICAgICAgICAgcXVlc3Rpb25zPXtkaXNwbGF5UXVlc3Rpb25zfVxuICAgICAgICAgIGhhbmRsZUFkZEFuc3dlcj17dGhpcy5oYW5kbGVBZGRBbnN3ZXJDbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPEFuc3dlck1vZGFsXG4gICAgICAgICAgc2hvdz17YW5zd2VyU2hvd31cbiAgICAgICAgICBwcm9kdWN0TmFtZT17cHJvZHVjdE5hbWV9XG4gICAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQWRkQW5zd2VyQ2xpY2t9XG4gICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9uSWR9XG4gICAgICAgICAgcXVlc3Rpb25Cb2R5PXtxdWVzdGlvbkJvZHl9IC8+XG4gICAgICAgIDxBZGRRdWVzdGlvblxuICAgICAgICAgIHNob3c9e3F1ZXN0aW9uU2hvd31cbiAgICAgICAgICBwcm9kdWN0SWQ9e3Byb2R1Y3RfaWR9XG4gICAgICAgICAgcHJvZHVjdE5hbWU9e3Byb2R1Y3ROYW1lfVxuICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhhbmRsZUFkZFFDbGlja30gLz5cbiAgICAgICAgPE1vcmVBbnN3ZXJlZFF1ZXN0aW9uc1xuICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgIHNlYXJjaEluVXNlPXtzZWFyY2hJblVzZX1cbiAgICAgICAgICBoYW5kbGVNb3JlQW5zd2VyZWRRdWVzdGlvbnM9e3RoaXMuaGFuZGxlTW9yZUFuc3dlcmVkUXVlc3Rpb25zfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1xLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQWRkUUNsaWNrKCl9PkFkZCBhIHF1ZXN0aW9uICs8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFF1ZXN0aW9uRW50cnkgZnJvbSAnLi9xdWVzdGlvbkVudHJ5LmpzeCc7XG5cbmNvbnN0IFF1ZXN0aW9uTGlzdCA9ICh7cXVlc3Rpb25zLCBoYW5kbGVBZGRBbnN3ZXJ9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1saXN0XCI+XG4gICAgICB7cXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGkpID0+XG4gICAgICAgIDxRdWVzdGlvbkVudHJ5XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cbiAgICAgICAgICBoYW5kbGVBZGRBbnN3ZXI9e2hhbmRsZUFkZEFuc3dlcn0gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VhcmNoID0gKHtoYW5kbGVTZWFyY2h9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSAgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwicWFTZWFyY2hcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiSEFWRSBBIFFVRVNUSU9OPyBTRUFSQ0ggRk9SIEFOU1dFUlMuLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpfX0+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==