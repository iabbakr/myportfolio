const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

/* --- Tab Logic --- */
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.portfolio-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from buttons and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active to current button
        tab.classList.add('active');

        // Show matching content
        const targetId = tab.getAttribute('data-id');
        document.getElementById(targetId).classList.add('active');
    });
});