if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

$(document).ready(function () {
    let isMobile = {
        Android: function () { return navigator.userAgent.match(/Android/i); },
        BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
        iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
        Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
        any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    };
    let body = document.querySelector('body');
    if (isMobile.any()) {
        body.classList.add('touch');
        let arrow = document.querySelectorAll('.arrow');
        for (i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i].previousElementSibling;
            let subMenu = arrow[i].nextElementSibling;
            let thisArrow = arrow[i];

            thisLink.classList.add('parent');
            arrow[i].addEventListener('click', function () {
                subMenu.classList.toggle('open');
                thisArrow.classList.toggle('active');
            });
        }
    } else {
        body.classList.add('mouse');
    }
    // Если на пк оставить стрелки,закомментируем проверку if
});


let searchForm = document.querySelector('.actions-header__form');
let searchLink = document.querySelector('.search__iccon');

searchLink.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.add('active');
    searchLink.classList.add('active');
})

searchForm.addEventListener("mouseout", function (e) {
    e.preventDefault();
    searchForm.classList.remove('active');
    searchLink.classList.remove('active');
})

let burgerHeader = document.querySelector('.nav-toggle');
let header = document.querySelector('.header');

burgerHeader.addEventListener("click", function (event) {
    event.preventDefault();
    burgerHeader.classList.toggle('_active');
    header.classList.toggle('active');
})

// Form
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    form.addEventListener('submit', formSend);
  
    function formSend(_x) {
      return _formSend.apply(this, arguments);
    }
  
    function _formSend() {
      _formSend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var error, formData, response, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                error = formValidate(form);
                formData = new FormData(form);
  
                if (!(error === 0)) {
                  _context.next = 20;
                  break;
                }
  
                form.classList.add('sending');
                _context.next = 7;
                return fetch('../sendmail.php', {
                  method: 'POST',
                  body: formData
                });
  
              case 7:
                response = _context.sent;
  
                if (!response.ok) {
                  _context.next = 18;
                  break;
                }
  
                _context.next = 11;
                return response.json();
  
              case 11:
                result = _context.sent;
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.add('sending');
                _context.next = 20;
                break;
  
              case 18:
                alert('Ошибка');
                form.classList.remove('sending');
  
              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _formSend.apply(this, arguments);
    }
  
    function formValidate(form) {
      var error = 0;
      var formReq = document.querySelectorAll('.req');
  
      for (var index = 0; index < formReq.length; index++) {
        var input = formReq[index];
        formRemoveError(input);
  
        if (input.classList.contains('email')) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
      }
  
      return error;
    }
  
    function formAddError(input) {
      input.parentElement.classList.add('error');
      input.classList.add('error');
    }
  
    function formRemoveError(input) {
      input.parentElement.classList.remove('error');
      input.classList.remove('error');
    } // Функция теста email
  
  
    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  });

// More cards

let btnMore = document.querySelector('.product__btnShow');
let hidddenCards = document.querySelectorAll('.product__column_hidden');

btnMore.addEventListener("click", function(){
    hidddenCards.forEach(function(item){
        item.classList.remove('product__column_hidden');
    });
})

// Seo text

let seoBtn = document.querySelector('.seo__more');
let seoText = document.querySelector('.seo__text');

seoBtn.addEventListener("click", function(){
    seoText.classList.add('active');
})

$(function(){
    let header = $("#header"),
        introH = $("#intro").innerHeight();
        scrolloffsize = $(window).scrollTop();

        checkScroll(scrolloffsize,introH);

        $(window).on("scroll resize", function(){
            introH = $("#intro").innerHeight();
            scrolloffsize = $(this).scrollTop();

            checkScroll(scrolloffsize,introH);
        });

        function checkScroll(scrolloffsize,introH){
            if(scrolloffsize > introH){
                header.addClass("fixed");
            }

            else{
                header.removeClass("fixed");
            }
        };
})
