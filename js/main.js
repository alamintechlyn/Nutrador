// product slider

var swiper = new Swiper(".pf-product-slide", {
    slidesPerView: 4,
    loop:true,
    navigation: {
        nextEl: ".pf-next",
        prevEl: ".pf-prev",
    },
    breakpoints: {
 

        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4, 
            spaceBetween: 25,
        }
    }
});


// product slider

var swiper = new Swiper(".pf-shop-solution", {
    slidesPerView: 4,
    loop:true,
    navigation: {
        nextEl: ".pf-next",
        prevEl: ".pf-prev",
    },
    breakpoints: {
 

        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4, 
            spaceBetween: 25,
        }
    }
});
// review slider

var swiper = new Swiper(".pf-rivew-slider", {
    slidesPerView: 4,
    loop:true,
    navigation: {
        nextEl: ".pf-next",
        prevEl: ".pf-prev",
    },
    breakpoints: {
 

        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4, 
            spaceBetween: 25,
        }
    }
});
// feedback slider

var swiper = new Swiper(".pf-feedback-slider", {
    slidesPerView: 3,
    loop:true,
    navigation: {
        nextEl: ".pf-next",
        prevEl: ".pf-prev",
    },
    breakpoints: {
 

        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3, 
            spaceBetween: 25,
        }
    }
});

// bundle slider

var swiper = new Swiper(".pf-bundle-slider", {
    slidesPerView: 2,
    loop:true,
    navigation: {
        nextEl: ".pf-next",
        prevEl: ".pf-prev",
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1, 
            spaceBetween: 20,
        },

        1280: {
            slidesPerView: 2, 
            spaceBetween: 25,
        }
    }
});


// faq section js
document.addEventListener('DOMContentLoaded', () => {

    const accordions = document.querySelectorAll('.pf-accordian-card');

 
    if (accordions.length > 0) {
        const firstAccordion = accordions[0];
        const firstContent = firstAccordion.querySelector('.pf-sub-acc');
        firstAccordion.classList.add('active');
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }

   
    document.querySelectorAll('.pf-head').forEach(head => {
        head.addEventListener('click', () => {
            const parentCard = head.parentElement;
            const content = parentCard.querySelector('.pf-sub-acc');

            if (parentCard.classList.contains('active')) {
                content.style.maxHeight = null;
                parentCard.classList.remove('active');
            } else {
                document.querySelectorAll('.pf-accordian-card').forEach(card => {
                    card.classList.remove('active');
                    card.querySelector('.pf-sub-acc').style.maxHeight = null;
                });
                parentCard.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});



// product details page

var swiper = new Swiper(".myProductSwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".myProductSwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  

//   prouct details isotp

$(document).ready(function() {
    var $container = $('.pf-text-area').isotope({
        itemSelector: 'p',
        layoutMode: 'fitRows'
    });


    $('.details').addClass('active').show();


    $('.btns ul li').click(function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: '.' + filterValue });

        $('.btns ul li').removeClass('active');
        $(this).addClass('active');

        $('.pf-text-area p').removeClass('active').hide();
        $('.pf-text-area .' + filterValue).addClass('active').show();
    });
});


const btns = document.querySelectorAll(".btns ul li");
btns[0].classList.add("active")

btns.forEach(function(button) {
    button.addEventListener("click", function() {
        btns.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});



// benifet section accordian
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.pf-section-accordian');

    if (accordions.length > 1) {
        accordions[1].classList.add('active');
        accordions[1].querySelector('.pf-accordian-open').style.maxHeight = accordions[1].querySelector('.pf-accordian-open').scrollHeight + 'px';
        accordions[1].querySelector('.icon-plus').style.display = 'none';
        accordions[1].querySelector('.icon-minus').style.display = 'block';
    }

    accordions.forEach(accordion => {
        accordion.querySelector('.pf-accrdians').addEventListener('click', function() {
            const isActive = accordion.classList.contains('active');

            accordions.forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.pf-accordian-open').style.maxHeight = '0';
                acc.querySelector('.icon-plus').style.display = 'block';
                acc.querySelector('.icon-minus').style.display = 'none';
            });

            if (!isActive) {
                accordion.classList.add('active');
                accordion.querySelector('.pf-accordian-open').style.maxHeight = accordion.querySelector('.pf-accordian-open').scrollHeight + 'px';
                accordion.querySelector('.icon-plus').style.display = 'none';
                accordion.querySelector('.icon-minus').style.display = 'block';
            }
        });
    });
});



// choose section isotop


$(document).ready(function(){
  // Initialize Isotope
  var $grid = $('.pf-choose-section .isotope-grid').isotope({
    itemSelector: '.pf-choose-section .isotope-grid .pf-col-lg-6',
    layoutMode: 'fitRows'
  });

  // Filter items on tab click
  $('.pf-choose-section .pf-tabs').on('click', 'h4', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    // Show/hide content based on filter
    $('.pf-choose-section .isotope-grid .pf-col-lg-6').hide(); // Hide all
    $(filterValue).show(); // Show filtered
  });

  // Add active class to clicked tab
  $('.pf-choose-section .pf-tabs h4').on('click', function(){
    $('.pf-choose-section .pf-tabs h4').removeClass('active');
    $(this).addClass('active');
  });
});



