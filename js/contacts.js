function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
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

// Map

function initMap() {
    let uluru = { lat: 49.9942021, lng: 36.2274025 };
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 5, center: uluru });
    let marker = new google.maps.Marker({ position: uluru, map: map });
}

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