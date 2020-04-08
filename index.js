const light = document.getElementById("light");
const dark = document.getElementById("dark");

light.addEventListener('click', () => {
    document.getElementsByTagName('body')[0].classList.add('light-theme')
    document.getElementsByTagName('body')[0].classList.remove('dark-theme')
})

dark.addEventListener('click', () => {
    document.getElementsByTagName('body')[0].classList.add('dark-theme')
    document.getElementsByTagName('body')[0].classList.remove('light-theme')
})