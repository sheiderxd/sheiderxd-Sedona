document.getElementById("header__button--toggle").onclick = function() {open()};

function open() {
    document.getElementById("header__button--toggle").classList.toggle("header__button--open");
    document.getElementById("header__button--toggle").classList.toggle("header__button--close");
    document.getElementById("header__navigation--toggle").classList.toggle("header__navigation--open");
    document.getElementById("header__menu--toggle").classList.toggle("visually-hidden"); 
}
