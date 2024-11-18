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

