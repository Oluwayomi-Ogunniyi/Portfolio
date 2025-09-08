// Scroll Animation
const animatedEls = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

animatedEls.forEach(el => observer.observe(el));

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// EmailJS Contact Form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_hg1jqcy', 'template_qbwqyr3', this)
    .then(() => alert('Message Sent Successfully!'))
    .catch(() => alert('Failed to send message. Please try again later.'));
});
