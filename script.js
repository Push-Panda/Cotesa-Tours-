document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu with Overlay and Icon Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector("#main-nav ul");
  const navLinks = document.querySelectorAll("#main-nav ul li a");
  const navOverlay = document.getElementById("nav-overlay");

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
    navToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navOverlay.classList.remove("active");
      navToggle.textContent = "☰";
    });
  });

  navOverlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    navToggle.textContent = "☰";
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && e.target !== navToggle) {
      navMenu.classList.remove("active");
      navOverlay.classList.remove("active");
      navToggle.textContent = "☰";
    }
  });

  // FAQ Accordion
  document.querySelectorAll('.accordion').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Interactive Map
  if (typeof L !== "undefined") {
    const map = L.map('map').setView([-1.286389, 36.817223], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const destinations = [
      { name: 'Maasai Mara', coords: [-1.41, 35.14], popup: 'Home of the Great Migration and Big Five safaris.' },
      { name: 'Diani Beach', coords: [-4.32, 39.58], popup: 'Pristine beaches and vibrant marine life.' },
      { name: 'Mount Kenya', coords: [-0.15, 37.31], popup: 'Africa’s second-highest peak, perfect for hiking.' },
      { name: 'Amboseli', coords: [-2.65, 37.26], popup: 'Stunning views of Kilimanjaro and elephant herds.' },
      { name: 'Lamu', coords: [-2.27, 40.90], popup: 'Historic Swahili culture and serene beaches.' }
    ];

    destinations.forEach(dest => {
      L.marker(dest.coords).addTo(map)
        .bindPopup(`<b>${dest.name}</b><br>${dest.popup}`);
    });

    // Contact Map
    const contactMap = L.map('contact-map').setView([-1.305, 36.917], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(contactMap);
    L.marker([-1.305, 36.917]).addTo(contactMap)
      .bindPopup('<b>Cotesa Tours Office</b><br>804 Ruiru, Nairobi, Kenya');
  }

  // Search and Filter
  const searchForm = document.getElementById('tour-search');
  const cards = document.querySelectorAll('.card-section .card');
  if (searchForm && cards.length) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const typeFilter = document.getElementById('filter-type').value;
      const priceFilter = document.getElementById('filter-price').value;

      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const type = card.dataset.type;
        const price = card.dataset.price;

        const matchesSearch = searchTerm ? title.includes(searchTerm) : true;
        const matchesType = typeFilter ? type === typeFilter : true;
        const matchesPrice = priceFilter ? price === priceFilter : true;

        card.style.display = matchesSearch && matchesType && matchesPrice ? 'block' : 'none';
      });
    });
  }

  // Booking Form Submission (Placeholder)
  const bookingForm = document.querySelector('.booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Booking submitted! You will receive a confirmation email with your e-ticket.');
    });
  }

  // Newsletter Form Submission (Placeholder)
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
    });
  }
});
