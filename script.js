
const container = document.querySelectorAll(".scroll")

console.log(container);
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('show', entry.isIntersecting)
	})
	console.log(entries);
})

container.forEach(c => {
	observer.observe(c)
})
