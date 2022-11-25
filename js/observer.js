const products = document.querySelectorAll(".product")
const images = document.querySelectorAll(".image")

const observerProducts = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("product--show")
        }
    })
    console.log(entries)
}, {
    threshold: .2
})

const observerImages = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("image--show")
        }
    })
    console.log(entries)
}, {
    threshold: .15
})

products.forEach(product => {
    observerProducts.observe(product)
})

images.forEach(image => {
    observerImages.observe(image)
})