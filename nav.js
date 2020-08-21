const slideNav = () =>{
    const togglebar = document.querySelector('.toggle-bar-phone');
    const links = document.querySelector('.nav-links')

    togglebar.addEventListener('click',() => {
        links.classList.toggle('nav-active');
    })
}

slideNav();