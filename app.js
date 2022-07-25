const nav = document.querySelector('nav');
const header = document.querySelector('header');

const options = {
    rootMargin: '-10px'
}

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('change-navbar')
        } else {
            nav.classList.add('change-navbar')
        }
    })
}, options)

observer.observe(header)