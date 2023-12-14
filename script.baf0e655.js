// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/images/pets-katrine.png":[function(require,module,exports) {
module.exports = "./pets-katrine.de121ba2.png";
},{}],"src/images/pets-jennifer.png":[function(require,module,exports) {
module.exports = "./pets-jennifer.1571bcc0.png";
},{}],"src/images/pets-sophia.png":[function(require,module,exports) {
module.exports = "./pets-sophia.b8c67d12.png";
},{}],"src/images/pets-woody.png":[function(require,module,exports) {
module.exports = "./pets-woody.943f8e1c.png";
},{}],"src/images/pets-scarlet.png":[function(require,module,exports) {
module.exports = "./pets-scarlet.dae21684.png";
},{}],"src/images/pets-timmy.png":[function(require,module,exports) {
module.exports = "./pets-timmy.2b5c8741.png";
},{}],"src/images/pets-freddie.png":[function(require,module,exports) {
module.exports = "./pets-freddie.33b867e4.png";
},{}],"src/images/pets-charly.png":[function(require,module,exports) {
module.exports = "./pets-charly.d3a10f84.png";
},{}],"src/script.js":[function(require,module,exports) {
"use strict";

var _petsKatrine = _interopRequireDefault(require("./images/pets-katrine.png"));
var _petsJennifer = _interopRequireDefault(require("./images/pets-jennifer.png"));
var _petsSophia = _interopRequireDefault(require("./images/pets-sophia.png"));
var _petsWoody = _interopRequireDefault(require("./images/pets-woody.png"));
var _petsScarlet = _interopRequireDefault(require("./images/pets-scarlet.png"));
var _petsTimmy = _interopRequireDefault(require("./images/pets-timmy.png"));
var _petsFreddie = _interopRequireDefault(require("./images/pets-freddie.png"));
var _petsCharly = _interopRequireDefault(require("./images/pets-charly.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu__body');
  var menuBtn = document.querySelector('.menu__icon');
  var body = document.body;
  var menuLinks = document.querySelectorAll('.menu__link');
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    });
  });
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: '30px'
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px'
      }
    }, {
      breakpoint: 380,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var openModalLinks = document.querySelectorAll('.slider__btn');
  openModalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var dataIndex = this.getAttribute('data-index');
      loadData(dataIndex);
      openModal();
    });
  });
  var petsData = {
    "img": _petsKatrine.default,
    "name": "Katrine",
    "type": "Cat",
    "breed": "British Shorthair",
    "age": "6 month",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations."
  };
  var jenniferData = {
    "img": _petsJennifer.default,
    "name": "Jennifer",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months"
  };
  var sophiaData = {
    "img": _petsSophia.default,
    "name": "Sophia",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month"
  };
  var woodyData = {
    "img": _petsWoody.default,
    "name": "Woody",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months"
  };
  var scarlettData = {
    "img": _petsScarlet.default,
    "name": "Scarlett",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months"
  };
  var timmyData = {
    "img": _petsTimmy.default,
    "name": "Timmy",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months"
  };
  var freddieData = {
    "img": _petsFreddie.default,
    "name": "Freddie",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months"
  };
  var charlyData = {
    "img": _petsCharly.default,
    "name": "Charly",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years"
  };
  function loadData(index) {
    var data = getDataByIndex(index);
    var modalImg = document.querySelector('#modalImg');
    var modalTitle = document.querySelector('#modalTitle');
    var modalType = document.querySelector('#modalType');
    var modalBreed = document.querySelector('#modalBreed');
    var modalAge = document.querySelector('#modalAge');
    var modalDescr = document.querySelector('#modalDescr');
    modalImg.src = data.img;
    modalTitle.innerText = data.name;
    modalType.innerText = data.type;
    modalBreed.innerText = data.breed;
    modalAge.innerText = data.age;
    modalDescr.innerText = data.description;
  }
  function getDataByIndex(index) {
    var dataObjects = [petsData, jenniferData, woodyData, sophiaData, timmyData, charlyData, scarlettData, freddieData];
    if (index >= 0 && index < dataObjects.length) {
      return dataObjects[index];
    } else {
      return {};
    }
  }
  function openModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'flex';
  }
  var closeModalBtn = document.querySelector('#closeBtnModal');
  var modal = document.querySelector('#modal');
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', outsideClick);
  function closeModal() {
    modal.style.display = 'none';
  }
  function outsideClick(e) {
    if (e.target === modal) {
      closeModal();
    }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var sliderContainer = document.querySelector('.slider__pets');
  var itemsPerPage = 8;
  var currentPage = 1;
  var totalItems = sliderContainer.querySelectorAll('.slider__item').length;
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  function updatePagination() {
    var paginationBtns = document.querySelectorAll('.pagination__btn');
    paginationBtns.forEach(function (btn, index) {
      if (index === 2) {
        btn.textContent = currentPage;
      } else if (index === 0) {
        btn.disabled = currentPage === 1;
      } else if (index === 1) {
        btn.disabled = currentPage === 1;
      } else if (index === 3) {
        btn.disabled = currentPage === totalPages;
      } else if (index === 4) {
        btn.disabled = currentPage === totalPages;
      }
    });
  }
  function goToPage(page) {
    currentPage = page;
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var items = sliderContainer.querySelectorAll('.slider__item');
    items.forEach(function (item, index) {
      item.style.display = index >= startIndex && index < endIndex ? 'flex' : 'none';
    });
    updatePagination();
  }
  function handlePaginationClick(e) {
    var action = e.target.dataset.action;
    if (action === 'prev' && currentPage > 1) {
      goToPage(currentPage - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      goToPage(currentPage + 1);
    } else if (action === 'first') {
      goToPage(1);
    } else if (action === 'last') {
      goToPage(totalPages);
    }
  }
  function createPagination() {
    var paginationContainer = document.createElement('div');
    paginationContainer.classList.add('btns__container');
    var prevBtn = document.createElement('button');
    prevBtn.classList.add('pagination__btn');
    prevBtn.textContent = '<';
    prevBtn.addEventListener('click', handlePaginationClick);
    prevBtn.dataset.action = 'prev';
    var firstBtn = document.createElement('button');
    firstBtn.classList.add('pagination__btn');
    firstBtn.textContent = '<<';
    firstBtn.addEventListener('click', handlePaginationClick);
    firstBtn.dataset.action = 'first';
    var currentPageBtn = document.createElement('button');
    currentPageBtn.classList.add('pagination__btn', 'current-page');
    currentPageBtn.textContent = currentPage;
    var lastBtn = document.createElement('button');
    lastBtn.classList.add('pagination__btn');
    lastBtn.textContent = '>>';
    lastBtn.addEventListener('click', handlePaginationClick);
    lastBtn.dataset.action = 'last';
    var nextBtn = document.createElement('button');
    nextBtn.classList.add('pagination__btn');
    nextBtn.textContent = '>';
    nextBtn.addEventListener('click', handlePaginationClick);
    nextBtn.dataset.action = 'next';
    paginationContainer.appendChild(firstBtn);
    paginationContainer.appendChild(prevBtn);
    paginationContainer.appendChild(currentPageBtn);
    paginationContainer.appendChild(nextBtn);
    paginationContainer.appendChild(lastBtn);
    return paginationContainer;
  }
  var pagination = createPagination();
  sliderContainer.appendChild(pagination);
  goToPage(currentPage);
});
document.addEventListener('DOMContentLoaded', function () {
  var emailLink = document.querySelector('.contacts__link');
  var emailIcon = document.querySelector('.contacts__icon img');
  var phoneLink = document.querySelector('.phone__link');
  var phoneIcon = document.querySelector('.phone__item .contacts__icon img');
  var locationLink = document.querySelector('.location__text');
  var locationLinkSecond = document.querySelector('.location__text-second');
  emailLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('mailto:melissa180lily@gmail.com', '_blank');
  });
  emailIcon.addEventListener('click', function () {
    window.open('mailto:melissa180lily@gmail.com', '_blank');
  });
  phoneLink.addEventListener('click', dialPhoneNumber);
  phoneIcon.addEventListener('click', dialPhoneNumber);
  function dialPhoneNumber(event) {
    event.preventDefault();
    window.location.href = phoneLink.getAttribute('href');
  }
  phoneIcon.addEventListener('click', function () {
    window.location.href = 'tel:+380934993516';
  });
  locationLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://www.google.com/maps/place/1+Central+Street+Boston', '_blank');
  });
  locationLinkSecond.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://www.google.com/maps/@51.4424571,0.0009427,17z?entry=ttu', '_blank');
  });
});
},{"./images/pets-katrine.png":"src/images/pets-katrine.png","./images/pets-jennifer.png":"src/images/pets-jennifer.png","./images/pets-sophia.png":"src/images/pets-sophia.png","./images/pets-woody.png":"src/images/pets-woody.png","./images/pets-scarlet.png":"src/images/pets-scarlet.png","./images/pets-timmy.png":"src/images/pets-timmy.png","./images/pets-freddie.png":"src/images/pets-freddie.png","./images/pets-charly.png":"src/images/pets-charly.png"}],"C:/Users/Mariia/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5276" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/Mariia/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/script.js"], null)
//# sourceMappingURL=/script.baf0e655.js.map