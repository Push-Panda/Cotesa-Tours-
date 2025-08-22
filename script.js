document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu with Overlay and Icon Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector("#main-nav ul");
  const navLinks = document.querySelectorAll("#main-nav ul li a");
  const navOverlay = document.getElementById("nav-overlay");

  function toggleNavMenu() {
    if (!navToggle || !navMenu || !navOverlay) return;
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
    navToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
    navToggle.setAttribute("aria-expanded", navMenu.classList.contains("active"));
  }

  function closeNavMenu() {
    if (!navMenu || !navOverlay || !navToggle) return;
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    navToggle.textContent = "☰";
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleNavMenu();
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", closeNavMenu);
  });

  if (navOverlay) {
    navOverlay.addEventListener("click", closeNavMenu);
  }

  document.addEventListener("click", (e) => {
    if (navMenu && navOverlay && navToggle && !navMenu.contains(e.target) && e.target !== navToggle) {
      closeNavMenu();
    }
  });

  // FAQ Accordion
  function initializeAccordion() {
    const accordions = document.querySelectorAll('.accordion');
    if (!accordions.length) return;

    accordions.forEach(btn => {
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener('click', function() {
        const isActive = this.classList.toggle('active');
        this.setAttribute("aria-expanded", isActive);
        const panel = this.nextElementSibling;
        if (panel) {
          panel.style.maxHeight = isActive ? `${panel.scrollHeight}px` : null;
        }
      });
    });
  }
  initializeAccordion();

  // Interactive Map
  function initializeMap() {
    if (typeof L === "undefined") return;

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

    const contactMap = L.map('contact-map').setView([-1.305, 36.917], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(contactMap);
    L.marker([-1.305, 36.917]).addTo(contactMap)
      .bindPopup('<b>Cotesa Tours Office</b><br>804 Ruiru, Nairobi, Kenya');
  }
  initializeMap();

  // Search and Filter
  function initializeSearchFilter() {
    const searchForm = document.getElementById('tour-search');
    const cards = document.querySelectorAll('.card-section .card');
    if (!searchForm || !cards.length) return;

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const typeFilter = document.getElementById('filter-type').value;
      const priceFilter = document.getElementById('filter-price').value;

      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const type = card.dataset.type;
        const price = card.dataset.price;

        const matchesSearch = !searchTerm || title.includes(searchTerm);
        const matchesType = !typeFilter || type === typeFilter;
        const matchesPrice = !priceFilter || price === priceFilter;

        card.style.display = matchesSearch && matchesType && matchesPrice ? 'block' : 'none';
      });
    });
  }
  initializeSearchFilter();

  // Booking Form Submission (Placeholder)
  function initializeBookingForm() {
    const bookingForm = document.querySelector('.booking-form');
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Booking submitted! You will receive a confirmation email with your e-ticket.');
    });
  }
  initializeBookingForm();

  // Newsletter Form Submission (Placeholder)
  function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
    });
  }
  initializeNewsletterForm();
});
