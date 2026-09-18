if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('internships-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('contact-link')) {
  document.getElementById('contact-link').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('footer').scrollIntoView({behavior: "smooth"})
  })
}