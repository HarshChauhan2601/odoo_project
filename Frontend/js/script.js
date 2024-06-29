let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

$(document).ready(function () {
    $('.buttons').click(function () {
        $(this).addclass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter')
        if (filter == 'all') {
            $('.diet .box').show(400);
        } else {
            $('.diet .box').not('.' + filter).hide(200);
            $('.diet .box').filter('.' + filter).hide(400);

        }
    })
})

// Function to open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Get all modals and close buttons
var modals = document.querySelectorAll('.modal');
var closeButtons = document.querySelectorAll('.close');

// Add click event listeners to buttons to open modals
document.querySelector("[data-filter='all']").onclick = function () {
    openModal('mealModal');
};

document.querySelector("[data-filter='breakfast']").onclick = function () {
    openModal('breakfastModal');
};

document.querySelector("[data-filter='lunch']").onclick = function () {
    openModal('lunchModal');
};

document.querySelector("[data-filter='dinner']").onclick = function () {
    openModal('dinnerModal');
};

// Add click event listeners to close buttons to close modals
closeButtons.forEach(function (button) {
    button.onclick = function () {
        closeModal(button.closest('.modal'));
    };
});

// Add click event listener to window to close modal when clicking outside of it
window.onclick = function (event) {
    modals.forEach(function (modal) {
        if (event.target == modal) {
            closeModal(modal);
        }
    });
};

var swiper = new Swiper('.review-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});