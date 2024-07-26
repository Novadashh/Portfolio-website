const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // On mount
    if (theme) {
        document.body.classList.add(theme);
        if (theme === 'light-mode') {
            document.querySelector('.hero').style.backgroundImage = "url('hero-light.jpg')";
        }
    }

    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        const heroSection = document.querySelector('.hero');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
            heroSection.style.backgroundImage = "url('/hero-light.jpg')";
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
            heroSection.style.backgroundImage = "url('/heros.jpg')";
        }
    };

    // Events
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', handleThemeToggle);
    });
};

export default darkMode;
