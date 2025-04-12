function initMobileMenu() {
    const hamburger = document.querySelector('.header__hamburger');
    const menu = document.querySelector('.header__menu');
    
    if (!hamburger || !menu) return; // Exit if elements don't exist
    
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        menu.setAttribute('aria-expanded', !isExpanded);
    });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);

