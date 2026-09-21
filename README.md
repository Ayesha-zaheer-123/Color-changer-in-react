#  Color Changer

A simple and fun React app that lets you change the background color of the entire page with a single click, using a set of colorful buttons fixed at the bottom of the screen.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)


##  Preview

A full-screen background that smoothly transitions between colors, with a floating button bar at the bottom to pick your favorite shade.

##  Features

-  Change the entire page's background color instantly
-  Simple one-click color buttons (Red, Green, Purple, Pink, Olive)
-  Smooth color transition animation
-  Responsive button bar that wraps on smaller screens
-  Styled entirely with Tailwind CSS utility classes

##  Tech Stack

- **React** (Hooks: `useState`)
- **Tailwind CSS** (utility-first styling)
- **Vite** (build tool)

##  Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Ayesha-zaheer-123/color-changer.git
   ```

2. Navigate to the project folder
   ```bash
   cd color-changer
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` (or the URL shown in your terminal)

##  Project Structure

```
color-changer/
├── node_modules/
├── src/
│   ├── App.jsx
│   ├── Background.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

##  How It Works

1. The app keeps track of the current background color using React state (`useState`).
2. Buttons at the bottom of the screen each represent a color option.
3. Clicking a button calls the `click()` function, which updates the state with the selected color.
4. The `<div>` covering the whole screen reads this state and updates its `backgroundColor` style .


##  Author

**Ayesha Zaheer**

