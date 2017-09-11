

let header_height = getComputedStyle(document.querySelector('header')).height
header_height = +header_height.substr(0, header_height.length-2)
let nav
let update_nav_color_scroll
let rgb = 255
if (window.innerWidth > 550) {
    nav = document.querySelector('nav')
    update_nav_color_scroll = () => {
        nav.style.backgroundColor = `rgba(${rgb},${rgb},${rgb},0.5)`
    }
} else {
    nav = document.querySelector('.burger')
    update_nav_color_scroll = () => {
        nav.style.color = `rgb(${rgb},${rgb},${rgb})`
    }
}
let nav_height = getComputedStyle(nav).height
nav_height = +nav_height.substr(0, nav_height.length-2)
header_height -= nav_height
nav_height *= 3
window.addEventListener('scroll', (e) => {
    if (window.pageYOffset < header_height && window.pageYOffset > header_height-nav_height) {
        rgb = 255-(255*((window.pageYOffset - header_height + nav_height)/nav_height)) | 0
        // if ((window.pageYOffset+1) - header_height + nav_height)/nav_height === 1)
        update_nav_color_scroll()
    } else if (rgb > 0 && window.pageYOffset > header_height) {
        rgb = 0
        update_nav_color_scroll()
    } else if (rgb < 255 && window.pageYOffset < header_height) {
        rgb = 255
        update_nav_color_scroll()
    }
})
let burger = document.querySelector('.burger')
burger.addEventListener('click', (e) => {
    if (burger.style.color !== '') {
        burger.style.color = ''
    } else {
        setTimeout(() => {
            update_nav_color_scroll()
        }, 350)
    }
})