# Apple Website Clone

This is a responsive clone of the Apple (India) website, built using HTML, CSS, and JavaScript. It replicates the visual design and layout of the official Apple site, including the navigation, hero sections, product grids, and a touch-friendly slider.

**Note:** This project is for educational purposes only.

## 🚀 Features

*   **Responsive Design:** Fully responsive layout that adapts to Desktop, Tablet, and Mobile screen sizes.
*   **Mobile Navigation:** Functional "Hamburger" menu for mobile devices with a smooth slide-in animation.
*   **Hero Sections:** Large, visually appealing hero banners showcasing featured products.
*   **Product Grid:** A grid layout displaying various Apple products (iPhone, Mac, Watch, AirPods, etc.).
*   **Image Carousel:** An interactive image slider implemented using [Swiper.js](https://swiperjs.com/) for TV+ shows or promotional content.
*   **Modern Styling:** Uses CSS Variables, Flexbox, and CSS Grid for a modern and maintainable codebase.
*   **Icons:** Utilizes [Remix Icon](https://remixicon.com/) for high-quality, scalable icons.

## 🛠️ Technologies Used

*   **HTML5:** Semantic markup for structure.
*   **CSS3:** Styling, animations, and responsive layouts.
    *   Custom Fonts (SF Pro Display)
    *   CSS Variables
    *   Media Queries
*   **JavaScript:** Interactivity and logic.
*   **Swiper.js:** A modern touch slider library.
*   **Remix Icon:** Open-source icon library.

## 📂 Project Structure

```
apple-clone/
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── fonts/              # Local font files
│   ├── images/             # Product images and icons
│   └── js/
│       └── script.js       # Main JavaScript file
├── index.html              # Main HTML file
└── README.md               # Project documentation
```

## 🔧 How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/codebysrk/apple-clone.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd apple-clone
    ```
3.  **Open `index.html`:**
    *   You can open `index.html` directly in your web browser.
    *   **Recommended:** Use a live server (like VS Code's "Live Server" extension) to ensure all assets load correctly and to avoid CORS issues if any arise (though not expected for this static setup).

## 🧩 Key Components

*   **Navigation Bar:** Sticky header with blur effect (`backdrop-filter`).
*   **Sections:** Divided into `.promo-section` (Hero), `.gridItems` (Bento-style grid), and `.slider-container`.
*   **Footer:** detailed footer with collapsible links structure (styled for desktop currently, mobile styles included in media queries).

## 👨‍💻 Credits

*   **Developed by:** [Shahrukh Khan](https://github.com/codebysrk)
*   **Design Inspiration:** [Apple](https://www.apple.com/in/)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
