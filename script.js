
const container = document.querySelectorAll(".scroll")

console.log(container);
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('show', entry.isIntersecting)
	})
}, {
	threshold: 0.2
})

container.forEach(c => {
	observer.observe(c)
})
