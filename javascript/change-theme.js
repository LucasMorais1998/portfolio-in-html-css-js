const html = document.querySelector('html');
const btnChangeTheme = document.querySelector('#btn-change-theme');
let darkThemeIsActive = false;

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const ligthTheme = {
    black: getStyle(html, '--black'),
    white: getStyle(html, '--white'),
    gray: getStyle(html, '--gray: '),
    lightGray: getStyle(html, '--light-gray'),
    background: getStyle(html, '--background')
}

const darkTheme = {
    black: '#fff',
    white: '#000',
    gray: '#ddd',
    lightGray: '#222',
    background: 'linear-gradient(45deg, rgb(0, 0, 0), var(--blue))'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key]);
    });
}

btnChangeTheme.addEventListener('click', () => {

    if(!darkThemeIsActive) {
        changeColors(darkTheme);
        btnChangeTheme.classList.toggle('fa-moon');
        btnChangeTheme.classList.toggle('fa-sun');
        darkThemeIsActive = true;

    } else {
        changeColors(ligthTheme);
        btnChangeTheme.classList.toggle('fa-sun');
        btnChangeTheme.classList.toggle('fa-moon');
        darkThemeIsActive = false;
    }
});