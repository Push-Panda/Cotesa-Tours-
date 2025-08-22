🌍 Cotesa Tours - Responsive Travel Website

This project is part of the Responsive Design Final Project, featuring a fully responsive tourism website for the fictional travel brand Cotesa Tours. It showcases custom layouts, a vibrant color palette, and adaptive breakpoints for desktop, tablet, and mobile devices.

📋 Table of Contents

🎯 Objective
🎨 Color System
📱 Responsive Breakpoints
🚀 Features
🛠 Technologies
📁 Project Structure
💻 Installation
🎮 Usage
🤝 Contributing
📜 License


🎯 Objective
Recreate a given large-screen mockup with creative freedom in:

Color Palette: Reflecting Kenyan landscapes and culture.
Branding: Unique identity for Cotesa Tours.
Breakpoints: Custom layouts for small (mobile) and medium (tablet) screens.

The goal is to deliver a user-friendly, accessible, and visually appealing travel website.

🎨 Color System



Purpose
Color
Hex Code
Rationale



Primary
Teal
#00BFAE
Represents trust, nature, and Kenya's coastlines.


Secondary
Yellow
#FFB400
Symbolizes optimism, warmth, and savanna sunsets.


Accent
Coral Red
#FF4E50
Adds vibrancy and highlights calls-to-action (CTAs).



All color combinations are WCAG AA compliant, verified using WebAIM Contrast Checker.


📱 Responsive Breakpoints

Large (LG) – Desktop: 3-column card layout (matches mockup).
Medium (MD) – Tablet: 2-column grid for balanced viewing.
Small (SM) – Mobile: Single-column layout with stacked cards for easy navigation.

Techniques Used:

CSS Grid for card layouts.
Flexbox for flexible navigation and forms.
Media queries for adaptive responsiveness.


🚀 Features

Interactive Map: Displays Kenya’s top destinations using Leaflet.
Search and Filter: Allows users to find tours by activity type and price range.
FAQ Accordion: Collapsible sections for quick information access.
Responsive Navigation: Hamburger menu for mobile devices with overlay.
Booking Form: Simple interface for tour reservations.
Accessibility: ARIA labels and WCAG-compliant design.


🛠 Technologies

HTML5: Semantic structure and forms.
CSS3: Custom styles, animations, and responsive design.
JavaScript: Dynamic functionality (e.g., map, accordion, search).
Leaflet: Interactive mapping library.
OpenStreetMap: Map tile provider.


📁 Project Structure
cotesa-tours/
│
├── assets/              # Images, videos, and other media
│   ├── kenya-wildlife.mp4
│   ├── maasai-mara.jpg
│   ├── diani-beach.jpg
│   ├── lamu-culture.jpg
│   ├── guide1.jpg
│   ├── guide2.jpg
│   ├── blog1.jpg
│   ├── blog2.jpg
│   └── tra-logo.png
│
├── css/                 # CSS files
│   └── style.css
│
├── js/                  # JavaScript files
│   └── script.js
│
├── index.html           # Main HTML file
├── README.md            # Project documentation


💻 Installation

Clone the Repository:
git clone https://github.com/your-username/cotesa-tours.git
cd cotesa-tours


Ensure Dependencies:

No external dependencies beyond Leaflet (loaded via CDN).
Verify internet access for map tiles from OpenStreetMap.


Open in Browser:

Double-click index.html or use a local server (e.g., live-server via Node.js).




🎮 Usage

Navigate the site on desktop, tablet, or mobile to experience responsive design.
Use the search bar to filter tours by type (e.g., Safari, Beach) and price (e.g., Budget, Luxury).
Explore the interactive map to learn about Kenyan destinations.
Book a tour or contact Cotesa Tours via the provided forms.

Note: The booking and newsletter forms currently display placeholder alerts. Replace with backend integration for live functionality.

🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit changes: git commit -m "Add feature-name".
Push to the branch: git push origin feature-name.
Submit a pull request.

Please adhere to the Contributor Covenant Code of Conduct.

📜 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms.

🙌 Acknowledgments

Inspired by the Responsive Design Final Project guidelines.
Thanks to OpenStreetMap for map data.
Color inspiration from Kenya’s natural and cultural beauty.
