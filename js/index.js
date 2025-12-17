/**
 * Navigation Toggle Logic
 */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Open/Close Hamburger Menu
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

/**
 * Project Tab Switching Logic
 */
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.portfolio-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 1. Remove active state from all buttons
        tabs.forEach(t => t.classList.remove('active'));
        
        // 2. Hide all portfolio content sections
        contents.forEach(content => content.classList.remove('active'));

        // 3. Add active state to clicked button
        tab.classList.add('active');

        // 4. Show the section that corresponds to the button's data-id
        const targetId = tab.getAttribute('data-id');
        const targetContent = document.getElementById(targetId);
        
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

/**
 * Security Feature: Disable right-click on specific portfolio images 
 * (Optional - as a Cyber Sec specialist, this is a small functional "Easter Egg")
 */
document.querySelectorAll('.portfolio__img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // e.preventDefault(); 
        // console.log("Security feature: Image source protected.");
    });
});