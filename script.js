const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-container');
const closeModal = document.querySelector('.icon-cancel');

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('modal-container-active');
    console.log('add');
});

closeModal.addEventListener('click', () => {
    modalBg.classList.remove('modal-container-active');
    console.log('remove');
});


document.addEventListener('click', (e) => {
    if(e.target === modalBg) {
        modalBg.classList.remove('modal-container-active');
    }
});


const navSlide = () => {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkfade 1.2s ease forwards ${index / 7 + 0}s`;
            }
            
        });

        burger.classList.toggle('toggle');

    });

    
    
};

navSlide();