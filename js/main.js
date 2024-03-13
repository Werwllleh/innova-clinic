/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/_accordion.js":
/*!*****************************************!*\
  !*** ./src/js/components/_accordion.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion__question-field');
  if (accordions.length) {
    accordions.forEach(function (accordion) {
      var accHeader = accordion.querySelector('.accordion__question-header');
      var accBody = accordion.querySelector('.accordion__question-answer');
      var accContent = accordion.querySelector('.accordion__question-answer-body');
      accHeader.addEventListener('click', function (e) {
        e.preventDefault();
        accordion.classList.toggle("opened");
        if (accordion.classList.contains("opened")) {
          accBody.style.maxHeight = "".concat(accContent.clientHeight, "px");
        } else {
          accBody.style.maxHeight = "0px";
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_feedback-card.js":
/*!*********************************************!*\
  !*** ./src/js/components/_feedback-card.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function debounce(func) {
  var _this = this;
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, timeout);
  };
}
document.addEventListener('DOMContentLoaded', function () {
  var cardList = document.querySelectorAll('.feedback-card');
  if (cardList.length) {
    var check = function check(card) {
      var wrapper = card.querySelector('.feedback-card__text-wrap');
      var box = wrapper.closest('.feedback-card__text-box');
      box.classList.remove('feedback-card__text-box--cut');
      setTimeout(function () {
        if (wrapper.offsetHeight > 186) {
          box.classList.add('feedback-card__text-box--cut');
        } else {
          box.classList.remove('feedback-card__text-box--cut');
        }
      });
    };
    var checkCards = function checkCards() {
      cardList.forEach(function (card) {
        check(card);
      });
    };
    var resizeCheck = debounce(function () {
      return checkCards();
    });
    window.addEventListener('resize', function () {
      resizeCheck();
    });
    window.onload = function () {
      checkCards();
    };
    cardList.forEach(function (card) {
      var btn = card.querySelector('.feedback-card__text-more');
      btn.addEventListener('click', function () {
        card.classList.add('feedback-card__text-box--expanded');
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_footer.js":
/*!**************************************!*\
  !*** ./src/js/components/_footer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var footerButtons = document.querySelectorAll('.second__level-information');
  if (footerButtons.length) {
    footerButtons.forEach(function (footerButton, index) {
      footerButton.children[0].addEventListener('click', function (e) {
        e.preventDefault();
        footerButton.children[0].classList.toggle("active");
        if (footerButton.children[0].classList.contains("active")) {
          footerButton.children[1].style.maxHeight = "".concat(footerButton.children[1].children[0].clientHeight, "px");
        } else {
          footerButton.children[1].style.maxHeight = "0px";
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_form.js":
/*!************************************!*\
  !*** ./src/js/components/_form.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modals */ "./src/js/components/_modals.js");



var formList = document.querySelectorAll('form');
var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var validateGroup = function validateGroup(group, isValid) {
  var input = group.querySelector('.form-group__field');
  if (isValid) {
    input.classList.remove('form-group__field-error');
    group.classList.add('form-group--validated');
  } else {
    input.classList.add('form-group__field-error');
    group.classList.remove('form-group--validated');
  }
};
if (formList.length) {
  formList.forEach(function (form) {
    var groupList = form.querySelectorAll('.form-group');
    groupList.forEach(function (group) {
      var input = group.querySelector('.form-group__field');
      if (input.name === 'name') {
        input.addEventListener('input', function () {
          var isValid = validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(input.value, {
            min: 3
          });
          validateGroup(group, isValid);
        });
      } else if (input.name === 'phone') {
        input.addEventListener('input', function () {
          // const isValid = validator.isMobilePhone('+' + input.value.replace(/\D+/g, ''), 'ru-RU')
          var isValid = validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(input.value, {
            min: 18
          });
          validateGroup(group, isValid);
        });
      } else if (input.name === 'email') {
        input.addEventListener('input', function () {
          var isValid = validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(input.value);
          if (emailRegex.test(input.value)) {
            input.classList.remove('form-group__field-error');
            validateGroup(group, isValid);
          } else {
            input.classList.add('form-group__field-error');
          }
        });
      }
    });
  });
}
var submittedForms = document.querySelectorAll('.modal-contacts__form');
var getConsultForm = document.querySelectorAll('.get-consult__form');
if (getConsultForm.length) {
  getConsultForm.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Отправляем форму с проверкой
      // ...
      if (form.elements['email'] && form.elements['email'].value !== '') {
        if (form.elements['phone'] && form.elements['phone'].value.length !== 18 || !emailRegex.test(form.elements['email'].value)) {
          return;
        } else {
          Object(_modals__WEBPACK_IMPORTED_MODULE_2__["openModal"])('#modal-success');
        }
      } else {
        if (form.elements['phone'] && form.elements['phone'].value.length !== 18) {
          return;
        } else {
          Object(_modals__WEBPACK_IMPORTED_MODULE_2__["openModal"])('#modal-success');
        }
      }
    });
  });
}
if (submittedForms.length) {
  submittedForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Отправляем форму с проверкой
      // ...
      if (form.elements['email'] && form.elements['email'].value !== '') {
        if (form.elements['phone'] && form.elements['phone'].value.length !== 18 || !emailRegex.test(form.elements['email'].value)) {
          return;
        } else {
          Object(_modals__WEBPACK_IMPORTED_MODULE_2__["openModal"])('#modal-success');
        }
      } else {
        if (form.elements['phone'] && form.elements['phone'].value.length !== 18) {
          return;
        } else {
          Object(_modals__WEBPACK_IMPORTED_MODULE_2__["openModal"])('#modal-success');
        }
      }
    });
  });
}

// Phone mask
var phoneInputsList = document.querySelectorAll('input[type="tel"]');
if (phoneInputsList.length) {
  phoneInputsList.forEach(function (phoneInput) {
    Object(imask__WEBPACK_IMPORTED_MODULE_1__["default"])(phoneInput, {
      mask: '+{7} (000) 000-00-00'
    });
  });
}

/***/ }),

/***/ "./src/js/components/_map.js":
/*!***********************************!*\
  !*** ./src/js/components/_map.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");
/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/plugins/thumbnail */ "./node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js");
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery/plugins/zoom */ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");


// Plugins


document.addEventListener('DOMContentLoaded', function () {
  var mapGalleries = document.querySelectorAll('.mapGallery');
  if (mapGalleries.length) {
    mapGalleries.forEach(function (mapGallery) {
      Object(lightgallery__WEBPACK_IMPORTED_MODULE_0__["default"])(mapGallery, {
        plugins: [lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_2__["default"], lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_1__["default"]],
        licenseKey: 'your_license_key',
        speed: 300
      });
    });
  }
  var mapSwitchBtns = document.querySelectorAll('.map__info-placebtn');
  var mapInfoBlock = document.querySelector('.map__info-content');
  var mapMobileButtons = document.querySelectorAll('.map__info-btn-mobile');
  var mapMobile = document.querySelector('.map-inner');
  var closeMapMobile = document.querySelectorAll('.close-map');
  if (mapMobileButtons.length) {
    mapMobileButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (btn.getAttribute('data-place') === 'place1') {
          mapMobile.classList.add('show-map');
          document.body.classList.add('noscroll');
        }
        if (btn.getAttribute('data-place') === 'place2') {
          mapMobile.classList.add('show-map');
          document.body.classList.add('noscroll');
        }
      });
    });
  }
  if (closeMapMobile.length) {
    closeMapMobile.forEach(function (closeMapBtn) {
      closeMapBtn.addEventListener('click', function (e) {
        e.preventDefault();
        mapMobile.classList.remove('show-map');
        document.body.classList.remove('noscroll');
      });
    });
  }
  if (mapSwitchBtns.length) {
    mapSwitchBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (btn.getAttribute('data-place') === 'place1') {
          mapSwitchBtns[0].classList.add('active');
          mapSwitchBtns[1].classList.remove('active');
          mapInfoBlock.children[0].classList.add('show');
          mapInfoBlock.children[1].classList.remove('show');
        }
        if (btn.getAttribute('data-place') === 'place2') {
          mapSwitchBtns[1].classList.add('active');
          mapSwitchBtns[0].classList.remove('active');
          mapInfoBlock.children[1].classList.add('show');
          mapInfoBlock.children[0].classList.remove('show');
        }
      });
    });
  }
  var places = {
    place1: [{
      lat: 56.138666,
      lon: 47.216191
    }],
    place2: [{
      lat: 56.126088,
      lon: 47.230198
    }]
  };
  function init() {
    var map = new ymaps.Map('mapInner', {
      center: [56.138666, 47.216191],
      zoom: 14,
      controls: []
    });
    var activeCategory = "place1";
    var showCategory = function showCategory(category) {
      map.geoObjects.removeAll();
      map.behaviors.disable('scrollZoom');
      places[category].forEach(function (item) {
        var placemark = new ymaps.Placemark([item.lat, item.lon], {}, {
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './images/icons/map-place.svg',
          // Размеры метки.
          iconImageSize: [57, 73],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-29, -68]
        });
        map.geoObjects.add(placemark);
      });
      activeCategory = category;
    };
    if (mapSwitchBtns.length) {
      mapSwitchBtns.forEach(function (button) {
        button.addEventListener('click', function () {
          var category = button.getAttribute('data-place');
          showCategory(category);
        });
      });
    }
    if (mapMobileButtons.length) {
      mapMobileButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var category = button.getAttribute('data-place');
          showCategory(category);
        });
      });
    }
    showCategory(activeCategory);
  }
  var mapElem = document.querySelector('#mapInner');
  if (mapElem) {
    ymaps.ready(init);
  }
});

/***/ }),

/***/ "./src/js/components/_mobile-menu.js":
/*!*******************************************!*\
  !*** ./src/js/components/_mobile-menu.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.header__mobile-button--menu');
  var menu = document.querySelector('.mobile-menu');
  var search = document.querySelector('.mobile-menu__nav-link-search');
  var notFound = document.querySelector('.mobile-menu-search__answer-notfound');
  var notFoundSpan = document.querySelector('.mobile-menu-search__answer-notfound span');
  var searchPanel = document.querySelector('.mobile-menu__panel--search');
  var searchPanelInput = document.querySelector('.mobile-menu-search__input input');
  var searchPanelCancel = document.querySelector('.mobile-menu-search__cancel');
  var searchPanelClean = document.querySelector('.mobile-menu-search__input--clean');
  var mobileAnswer = document.querySelector('.mobile-menu-search__answer--body .nav__search-answer');
  var mobileServicesBtn = document.querySelector('.mobile-services-button');
  var mobileServicesBtnBack = document.querySelector('.mobile-menu-services__back-button');
  var mobileServicesPanel = document.querySelector('.mobile-menu-services');
  if (mobileServicesBtnBack) {
    mobileServicesBtnBack.addEventListener('click', function (e) {
      e.preventDefault();
      mobileServicesPanel.classList.remove('show');
    });
  }
  if (mobileServicesBtn) {
    mobileServicesBtn.addEventListener('click', function (e) {
      e.preventDefault();
      mobileServicesPanel.classList.add('show');
    });
  }
  if (search) {
    search.addEventListener('click', function (e) {
      e.preventDefault();
      searchPanel.classList.add('active');
    });
  }
  if (searchPanelCancel) {
    searchPanelCancel.addEventListener('click', function (e) {
      e.preventDefault();
      searchPanelInput.value = '';
      searchPanel.classList.remove('active');
      searchPanelClean.classList.remove('show');
      mobileAnswer.classList.remove('active');
      notFound.classList.remove('show');
    });
  }
  if (searchPanelInput) {
    searchPanelInput.addEventListener('input', function (e) {
      if (searchPanelInput.value === '') {
        searchPanelClean.classList.remove('show');
        mobileAnswer.classList.remove('active');
        notFound.classList.remove('show');
      } else if (searchPanelInput.value.toLocaleLowerCase() === 'не найдено') {
        notFound.classList.add('show');
        mobileAnswer.classList.remove('active');
        notFoundSpan.innerHTML = searchPanelInput.value;
      } else {
        notFound.classList.remove('show');
        searchPanelClean.classList.add('show');
        mobileAnswer.classList.add('active');
      }
    });
  }
  if (searchPanelClean) {
    searchPanelClean.addEventListener('click', function (e) {
      e.preventDefault();
      searchPanelInput.value = '';
      searchPanelClean.classList.remove('show');
      mobileAnswer.classList.remove('active');
      notFound.classList.remove('show');
    });
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      if (menuBtn.classList.contains('header__mobile-button--menu-show')) {
        menuBtn.classList.remove('header__mobile-button--menu-show');
        menu.classList.remove('mobile-menu--show');
        searchPanel.classList.remove('active');
        mobileServicesPanel.classList.remove('show');
        notFound.classList.remove('show');
        searchPanelInput.value = '';
        setTimeout(function () {
          menu.style.display = '';
          document.body.classList.remove('is-locked');
        }, 300);
      } else {
        menu.style.display = 'flex';
        menuBtn.classList.add('header__mobile-button--menu-show');
        document.body.classList.add('is-locked');
        setTimeout(function () {
          menu.classList.add('mobile-menu--show');
        });
      }
    });
  }
  var subMenuList = document.querySelectorAll('.mobile-menu__nav-link-arrow');
  if (subMenuList.length) {
    subMenuList.forEach(function (submenu) {
      submenu.addEventListener('click', function () {
        submenu.closest('.mobile-menu__nav-elem').classList.toggle('mobile-menu__nav-elem--expanded');
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_modals.js":
/*!**************************************!*\
  !*** ./src/js/components/_modals.js ***!
  \**************************************/
/*! exports provided: openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
// Open modal
var getScrollbarWidth = function getScrollbarWidth() {
  // Creating invisible container
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  var inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};
var modalLinks = document.querySelectorAll('[data-modal]');
if (modalLinks.length) {
  modalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var isModalMobileOnly = link.dataset.modalMobile;
      if (isModalMobileOnly && window.innerWidth > 1024) {
        return;
      }
      if (link.dataset.modal === 'doctor' && window.innerWidth < 1024) {
        return;
      }
      var modalId = "#modal-".concat(link.dataset.modal);
      openModal(modalId);
    });
  });
}
var header = document.querySelector('header');
var appointmentConsultationBtn = document.querySelector('.appointment-consultation-btn');

// Open modal
var openModal = function openModal(modalId) {
  var modal = document.querySelector(modalId);
  var otherShownModal = document.querySelector('.modal--shown');
  if (!modal) {
    console.warn("Modal ".concat(modalId, " does not exist!"));
    return;
  }
  if (otherShownModal) {
    closeModal(otherShownModal);
  } else {
    document.body.classList.add('is-locked');
    showBackdrop();
  }
  if (appointmentConsultationBtn) {
    appointmentConsultationBtn.style.right = "".concat(Number(window.getComputedStyle(appointmentConsultationBtn).right.replace('px', '')) + getScrollbarWidth(), "px");
  }
  modal.classList.add('modal--show');
  document.body.style.paddingRight = getScrollbarWidth() + 'px';
  if (!header.classList.contains('header--scroll')) {
    header.style.right = "".concat(getScrollbarWidth(), "px");
  } else {
    header.style.right = "".concat(Number(window.getComputedStyle(header).right.replace('px', '')) + getScrollbarWidth(), "px");
  }
  setTimeout(function () {
    modal.classList.add('modal--shown');
  });
};

// Close modal
function closeModal() {
  var isModalFromModal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var modal = document.querySelector('.modal--shown');
  if (!modal) return;
  modal.classList.remove('modal--shown');
  if (!isModalFromModal) hideBackdrop();
  setTimeout(function () {
    modal.classList.remove('modal--show');
    document.body.style.paddingRight = '';
    header.style.right = '';
    if (appointmentConsultationBtn) {
      appointmentConsultationBtn.style.right = '';
    }
    if (!isModalFromModal) {
      document.body.classList.remove('is-locked');
    }
  }, 350, modal);
}

// Close on Close btn click
var closeButtons = document.querySelectorAll('.js-modal-close');
if (closeButtons.length) {
  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      return closeModal();
    });
  });
}

// Close on Escape
document.body.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}, false);

// Show backdrop
var showBackdrop = function showBackdrop() {
  var backdrop = document.querySelector('.modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    document.body.appendChild(backdrop);
    backdrop.addEventListener('click', function () {
      return closeModal();
    });
    backdrop.classList.add('modal-backdrop');
    setTimeout(function () {
      backdrop.classList.add('modal-backdrop--show');
    });
  }
};

// Hide backdrop
var hideBackdrop = function hideBackdrop() {
  var backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('modal-backdrop--show');
    setTimeout(function () {
      backdrop.remove();
    }, 350);
  }
};

// Modal Filter
var filterFormList = document.querySelectorAll('.modal-filter__form');
if (filterFormList.length) {
  filterFormList.forEach(function (form) {
    var selectList = form.querySelectorAll('select');
    form.addEventListener('reset', function () {
      form.classList.add('reset');
      selectList.forEach(function (select) {
        var defaultValue = select.querySelector('option').value;
        select.slim.setSelected(defaultValue);
      });
      form.classList.remove('modal-filter__form--touched');
      setTimeout(function () {
        form.classList.remove('reset');
      }, 100);
    });
    form.addEventListener('change', function () {
      return form.classList.add('modal-filter__form--touched');
    });
  });
}

// const modalWindows = document.querySelectorAll('.modal__window ');
//
// const throttle = (func, limit) => {
// 	let lastFunc
// 	let lastRan
// 	return function() {
// 		const context = this
// 		const args = arguments
// 		if (!lastRan) {
// 			func.apply(context, args)
// 			lastRan = Date.now()
// 		} else {
// 			clearTimeout(lastFunc)
// 			lastFunc = setTimeout(function() {
// 				if ((Date.now() - lastRan) >= limit) {
// 					func.apply(context, args)
// 					lastRan = Date.now()
// 				}
// 			}, limit - (Date.now() - lastRan))
// 		}
// 	}
// }
//
// if (modalWindows.length) {
//
// // код будет срабатывать раз в 1 секунду
// 	document.addEventListener('scroll', throttle(function() {
// 		return (
// 			modalWindows.forEach((modalWindow) => {
// 				if (pageYOffset > 0) {
// 					modalWindow.classList.add('dark-theme');
// 				} else {
// 					modalWindow.classList.remove('dark-theme');
// 				}
// 			})
// 		)
// 	}, 600))
// }

/***/ }),

/***/ "./src/js/components/_section-certificate-slider.js":
/*!**********************************************************!*\
  !*** ./src/js/components/_section-certificate-slider.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");



document.addEventListener('DOMContentLoaded', function () {
  var certificates = document.querySelectorAll('.section-certificate-slider__content');
  if (certificates.length) {
    certificates.forEach(function (certificate) {
      new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"](certificate, {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
        slidesPerView: "auto",
        grabCursor: true,
        navigation: {
          prevEl: '.section-certificate-slider__nav .slider-nav__btn--prev',
          nextEl: '.section-certificate-slider__nav .slider-nav__btn--next'
        },
        breakpoints: {
          320: {
            spaceBetween: 16
          },
          640: {
            spaceBetween: 30
          }
        },
        on: {
          init: function init() {
            var lgItems = document.querySelectorAll('.section-certificate-slider__content .swiper-wrapper');
            if (lgItems.length) {
              lgItems.forEach(function (lgItem) {
                Object(lightgallery__WEBPACK_IMPORTED_MODULE_2__["default"])(lgItem, {
                  selector: '.section-certificate-slider__elem'
                });
              });
            }
          }
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_section-doctor-about.js":
/*!****************************************************!*\
  !*** ./src/js/components/_section-doctor-about.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var moreBtn = document.querySelector('.section-doctor-about__more-btn');
  var doctorTexts = document.querySelectorAll('.section-doctor-about__text-wrap p');
  var lettersToCut = 300;
  if (doctorTexts.length) {
    doctorTexts.forEach(function (doctorText, index) {
      if (index >= 3) {
        doctorText.style.display = 'none';
      }
    });
  }
  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      moreBtn.classList.add('hidden');
      doctorTexts.forEach(function (doctorText, index) {
        if (doctorText.style.display === 'none') {
          doctorText.style.display = 'block';
        }
      });
      // const container = moreBtn.closest('.section-doctor-about__text-box')
      // container.classList.add('section-doctor-about__text-box--expanded')
    });
  }
});

/***/ }),

/***/ "./src/js/components/_section-doctor-feedback.js":
/*!*******************************************************!*\
  !*** ./src/js/components/_section-doctor-feedback.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixitup */ "./node_modules/mixitup/dist/mixitup.js");
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixitup__WEBPACK_IMPORTED_MODULE_0__);

var doctorFeedbackList = document.querySelector('.section-doctor-feedback__list');
if (doctorFeedbackList) {
  var btnList = document.querySelectorAll('.section-doctor-feedback__filter-btn');
  btnList.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!btn.classList.contains('section-doctor-feedback__filter-btn--current')) {
        var currentBtn = document.querySelector('.section-doctor-feedback__filter-btn--current');
        currentBtn.classList.remove('section-doctor-feedback__filter-btn--current');
        btn.classList.add('section-doctor-feedback__filter-btn--current');
      }
    });
  });
  var containerEl = document.querySelector('.section-doctor-feedback__list');
  mixitup__WEBPACK_IMPORTED_MODULE_0___default()(containerEl, {
    load: {
      sort: 'date:desc'
    }
  });
}

/***/ }),

/***/ "./src/js/components/_section-other-doctors.js":
/*!*****************************************************!*\
  !*** ./src/js/components/_section-other-doctors.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

document.addEventListener('DOMContentLoaded', function () {
  var slider = null;
  var initSlider = function initSlider() {
    if (window.innerWidth > 768) {
      if (slider) {
        slider.destroy(true, true);
        slider = null;
      }
    } else {
      if (!slider) {
        slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.section-other-doctors__slider', {
          slidesPerView: 1.2,
          spaceBetween: 8
        });
      }
    }
  };
  initSlider();
  window.addEventListener('resize', function () {
    initSlider();
  });
});

/***/ }),

/***/ "./src/js/components/_section-portfolio-doctor.js":
/*!********************************************************!*\
  !*** ./src/js/components/_section-portfolio-doctor.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


document.addEventListener('DOMContentLoaded', function () {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.section-portfolio-doctor__slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"]],
    navigation: {
      prevEl: '.section-portfolio-doctor .slider-nav__btn--prev',
      nextEl: '.section-portfolio-doctor .slider-nav__btn--next'
    },
    noSwipingSelector: 'img-comparison-slider',
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 8
      },
      640: {
        slidesPerView: 1.8,
        spaceBetween: 30
      },
      720: {
        slidesPerView: 2.5,
        spaceBetween: 40
      }
    }
  });
});

/***/ }),

/***/ "./src/js/components/_section-portfolio-slider.js":
/*!********************************************************!*\
  !*** ./src/js/components/_section-portfolio-slider.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var sliders = document.querySelectorAll('.section-portfolio-slider__slider');
sliders.forEach(function (slider) {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"](slider, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    slidesPerView: 3,
    spaceBetween: 40,
    noSwipingSelector: 'img-comparison-slider',
    pagination: {
      el: slider.closest('.tabs__content').querySelector('.slider-nav__pagination'),
      type: 'progressbar',
      progressbarFillClass: 'slider-nav__pagination-fill'
    },
    navigation: {
      prevEl: slider.closest('.tabs__content').querySelector('.section-portfolio-slider .slider-nav__btn--prev'),
      nextEl: slider.closest('.tabs__content').querySelector('.section-portfolio-slider .slider-nav__btn--next')
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 8
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      564: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.6,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});

/***/ }),

/***/ "./src/js/components/_select.js":
/*!**************************************!*\
  !*** ./src/js/components/_select.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.umd.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  var selectList = document.querySelectorAll('.select');
  if (selectList.length) {
    selectList.forEach(function (select) {
      var selectEl = new slim_select__WEBPACK_IMPORTED_MODULE_0___default.a({
        select: select,
        settings: {
          showSearch: false
        },
        events: {
          afterChange: function afterChange(newVal) {
            var form = select.closest('form');
            if (form && !form.classList.contains('reset')) {
              var event = new Event('change');
              form.dispatchEvent(event);
            }
          }
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_simple-tabs.js":
/*!*******************************************!*\
  !*** ./src/js/components/_simple-tabs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var tabBoxList = document.querySelectorAll('.simple-tabs');
  if (tabBoxList.length) {
    tabBoxList.forEach(function (tabBox) {
      var tabButtonList = tabBox.querySelectorAll('.simple-tabs__button');
      tabButtonList.forEach(function (button) {
        button.addEventListener('click', function () {
          if (button.classList.contains('.simple-tabs__button--active')) return;
          var currentButton = tabBox.querySelector('.simple-tabs__button--active');
          currentButton.classList.remove('simple-tabs__button--active');
          button.classList.add('simple-tabs__button--active');
          var currentContent = tabBox.querySelector('.simple-tabs__content--active');
          currentContent.classList.remove('simple-tabs__content--active');
          var content = tabBox.querySelector("#".concat(button.dataset.content));
          content.classList.add('simple-tabs__content--active');
        });
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_tabs.js":
/*!************************************!*\
  !*** ./src/js/components/_tabs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var tabBoxList = document.querySelectorAll('.tabs');
  if (tabBoxList.length) {
    tabBoxList.forEach(function (tabBox) {
      var tabButtonList = tabBox.querySelectorAll('.tabs__button');
      tabButtonList.forEach(function (button) {
        button.addEventListener('click', function () {
          if (button.classList.contains('.tabs__button--active')) return;
          var currentButton = tabBox.querySelector('.tabs__button--active');
          currentButton.classList.remove('tabs__button--active');
          button.classList.add('tabs__button--active');
          var currentContent = tabBox.querySelector('.tabs__content--active');
          currentContent.classList.remove('tabs__content--active');
          var content = tabBox.querySelector("#".concat(button.dataset.content));
          content.classList.add('tabs__content--active');
        });
      });
    });
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _old__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./old */ "./src/js/old.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_form */ "./src/js/components/_form.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_select */ "./src/js/components/_select.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_modals */ "./src/js/components/_modals.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_accordion */ "./src/js/components/_accordion.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_footer */ "./src/js/components/_footer.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_footer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_map */ "./src/js/components/_map.js");
/* harmony import */ var _components_simple_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_simple-tabs */ "./src/js/components/_simple-tabs.js");
/* harmony import */ var _components_simple_tabs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_simple_tabs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/_tabs */ "./src/js/components/_tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/_mobile-menu */ "./src/js/components/_mobile-menu.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_feedback_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/_feedback-card */ "./src/js/components/_feedback-card.js");
/* harmony import */ var _components_feedback_card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_feedback_card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_section_doctor_about__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/_section-doctor-about */ "./src/js/components/_section-doctor-about.js");
/* harmony import */ var _components_section_doctor_about__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_section_doctor_about__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_section_certificate_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/_section-certificate-slider */ "./src/js/components/_section-certificate-slider.js");
/* harmony import */ var _components_section_portfolio_doctor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/_section-portfolio-doctor */ "./src/js/components/_section-portfolio-doctor.js");
/* harmony import */ var _components_section_portfolio_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/_section-portfolio-slider */ "./src/js/components/_section-portfolio-slider.js");
/* harmony import */ var _components_section_other_doctors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/_section-other-doctors */ "./src/js/components/_section-other-doctors.js");
/* harmony import */ var _components_section_doctor_feedback__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/_section-doctor-feedback */ "./src/js/components/_section-doctor-feedback.js");



















/***/ }),

/***/ "./src/js/old.js":
/*!***********************!*\
  !*** ./src/js/old.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fancybox */ "./node_modules/fancybox/dist/js/jquery.fancybox.cjs.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fancybox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");




document.addEventListener('DOMContentLoaded', function () {
  fancybox__WEBPACK_IMPORTED_MODULE_2___default.a.bind('[data-fancybox="gallery"]', {
    hideScrollbar: false
  });
  var background = document.querySelector('.bg');
  var bodyMain = document.querySelector('body');
  var header = document.querySelector('.header');

  /*==============HEADER==========*/
  function headerWatcher() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (window.scrollY < 0.1) {
      header.classList.remove('header--scroll');
    } else {
      header.classList.add('header--scroll');
    }
    requestAnimationFrame(headerWatcher);
  }
  if (header) {
    headerWatcher();
  }
  var search = document.querySelector('.js-search-btn');
  var inputMenu = document.querySelector('.nav__search');
  var navLinks = document.querySelector('.header__nav-links');
  var inputSearchClear = document.querySelector('.search-input-clear');
  var inputSearch = document.querySelector('.nav__search-input');
  var inputSearchAnswer = document.querySelector('.nav__search-answer');
  var notFoundAnswer = document.querySelector('.nav__search-notfound');
  if (search) {
    search.addEventListener('click', function (e) {
      e.preventDefault();
      // header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      header.classList.toggle('darkBg');
      search.classList.toggle('active');
      inputMenu.classList.toggle('active');
      navLinks.classList.toggle('hidden');
      background.classList.toggle('blackout');
      bodyMain.classList.toggle('noscroll');
      notFoundAnswer.classList.remove('active');
      inputSearch.value = '';
      inputSearch.focus();
      if (inputSearchAnswer.classList.contains('active')) {
        inputSearchAnswer.classList.remove('active');
        inputSearchClear.classList.remove('active');
        notFoundAnswer.classList.remove('active');
        inputSearch.value = '';
      }
    });
    inputSearch.addEventListener('input', function (e) {
      if (inputSearch.value === 'Не найдено') {
        notFoundAnswer.classList.add('active');
        inputSearchAnswer.classList.remove('active');
        document.querySelector('.answer__notfound-text-value').innerHTML = inputSearch.value;
      } else if (inputSearch.value.length >= 1) {
        inputSearchClear.classList.add('active');
        inputSearchAnswer.classList.add('active');
        notFoundAnswer.classList.remove('active');
      } else {
        inputSearchClear.classList.remove('active');
        inputSearchAnswer.classList.remove('active');
        notFoundAnswer.classList.remove('active');
      }
    });
    inputSearchClear.addEventListener('click', function () {
      inputSearchAnswer.classList.remove('active');
      inputSearch.value = '';
      inputSearchClear.classList.remove('active');
      notFoundAnswer.classList.remove('active');
      inputSearch.focus();
    });
    background.addEventListener('click', function () {
      inputSearch.value = '';
      inputSearchClear.classList.remove('active');
      search.classList.remove('active');
      inputMenu.classList.remove('active');
      navLinks.classList.remove('hidden');
      background.classList.remove('blackout');
      search.classList.remove('active');
      inputSearchAnswer.classList.remove('active');
      bodyMain.classList.remove('noscroll');
      notFoundAnswer.classList.remove('active');
    });
  }

  /*=============/HEADER==========*/

  /*=============SUB-MENU==========*/
  var menuLinks = document.querySelectorAll('.header__nav-link');
  var arrow = document.querySelectorAll('.menu-arrow');
  if (menuLinks.length) {
    for (var i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("mouseenter", showSub, false);
      menuLinks[i].addEventListener("mouseleave", hideSub, false);
    }
  }
  function showSub(e) {
    if (this.children.length > 1) {
      this.children[0].style.color = "#337AE0";
      this.children[0].classList.add('open-menu');
      this.children[1].style.visibility = "visible";
      this.children[1].style.opacity = "1";
      background.classList.add('blackout');
    } else {
      return false;
    }
  }
  function hideSub(e) {
    if (this.children.length > 1) {
      this.children[0].style.color = "#3A3C40";
      this.children[0].classList.remove('open-menu');
      this.children[1].style.visibility = "hidden";
      this.children[1].style.opacity = "0";
      background.classList.remove('blackout');
    } else {
      return false;
    }
  }

  /*=============SUB-MENU==========*/

  /*=============SLIDERS==========*/
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.stocks__slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    // Optional parameters
    // slidesPerView: 3,
    // spaceBetween: 40,
    direction: 'horizontal',
    loop: false,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    // And if we need scrollbar
    scrollbar: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 8
      },
      // when window width is >= 640px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      564: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.6,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.doctors__slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: false,
    height: 'auto',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    // And if we need scrollbar
    scrollbar: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 8
      },
      // when window width is >= 640px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2.4
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.feedback__slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    // Optional parameters
    loop: false,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    // And if we need scrollbar
    scrollbar: false,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 8,
        centeredSlides: false
      },
      564: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        centeredSlides: false
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false
      },
      992: {
        slidesPerView: 2.2,
        spaceBetween: 40
      },
      1450: {
        slidesPerView: 2.8,
        centeredSlides: true,
        spaceBetween: 40
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.portfolio__slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    noSwipingSelector: 'img-comparison-slider',
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 8
      },
      640: {
        slidesPerView: 1.8,
        spaceBetween: 30
      },
      720: {
        slidesPerView: 2.5,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.map__info-slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    // Optional parameters

    direction: 'horizontal',
    loop: false,
    // If we need pagination
    pagination: false,
    // Navigation arrows
    navigation: {
      prevEl: '.map-slider-button-prev',
      nextEl: '.map-slider-button-next'
    },
    // And if we need scrollbar
    scrollbar: false,
    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 4
      },
      768: {
        slidesPerView: 3.4,
        spaceBetween: 10
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.equipment__slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    spaceBetween: 40,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    // And if we need scrollbar
    scrollbar: false
  });

  /*============/SLIDERS==========*/

  var questions = document.querySelectorAll('.qa__question-checkbox');
  if (questions.length) {
    questions.forEach(function (question) {
      question.addEventListener('click', function (e) {
        var field = e.currentTarget.parentNode.parentNode;
        var input = e.currentTarget;
        var answer = e.currentTarget.parentNode.parentNode.children[1];
        answer.classList.toggle('active');
        if (input.checked === true) {
          answer.style.maxHeight = "".concat(field.clientHeight, "px");
        } else {
          answer.style.maxHeight = "0px";
        }
      });
    });
  }
  var contentWrapper = document.querySelectorAll('.feedback__slide-text p');
  var lettersToCut = 230;
  var cutTextFeedback = function cutTextFeedback() {
    if (window.innerWidth <= 564) {
      contentWrapper.forEach(function (slideText) {
        var originalText = slideText.innerHTML;
        var endOriginalText = originalText.substring(lettersToCut);
        originalText = originalText.substring(0, lettersToCut);
        slideText.innerHTML = originalText;
        var moreText = document.createElement('span');
        moreText.innerHTML = endOriginalText;
        slideText.appendChild(moreText);
        moreText.style.display = "none";
        var readMoreLink = document.createElement('span');
        readMoreLink.classList.add('link-read-more');
        readMoreLink.innerHTML = "<span>...</span>\u0427\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E";
        slideText.appendChild(readMoreLink);
        readMoreLink.addEventListener("click", function (e) {
          e.preventDefault();
          moreText.style.display = "inline";
          readMoreLink.style.display = "none";
        });
      });
    }
  };
  if (contentWrapper.length) {
    window.addEventListener('resize', function () {
      cutTextFeedback();
    });
    cutTextFeedback();
  }
  var bannerControlPlay = document.querySelector('.banner__plan-play');
  if (bannerControlPlay) {
    bannerControlPlay.addEventListener('click', function () {
      var video = document.querySelector('.banner__plan-video');
      bannerControlPlay.classList.toggle('active');
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  if (lazyVideos.length) {
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var img_comparison_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! img-comparison-slider */ "./node_modules/img-comparison-slider/dist/index.js");
/* harmony import */ var img_comparison_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(img_comparison_slider__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map