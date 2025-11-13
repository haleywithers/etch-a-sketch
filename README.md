# Etch-a-Sketch

A browser-based drawing application inspired by the classic Etch-a-Sketch toy. Features dynamic grid generation, multiple color modes, and full mobile touch support. Built as part of The Odin Project curriculum.

## Project Description

This is an interactive pixel art drawing tool that lets you create colorful sketches on a customizable grid. Players can choose grid sizes from 4x4 to 20x20, select different color modes (black, grey, or rainbow), and draw by hovering their mouse or dragging their finger on touch devices. The interface includes a responsive mobile menu and authentic etch-a-sketch styling.

## Features

* Dynamic grid generation with JavaScript (4x4 to 20x20 squares)
* Three color modes: black, grey, and rainbow (cycles through 5 colors)
* Random grid size generator (creates grids between 4-20 squares)
* Touch event support for mobile drawing
* Responsive mobile menu with collapsible settings
* Clear button to reset the canvas
* Precise grid rendering with CSS Grid
* Custom styling with vintage etch-a-sketch background

## Technologies Used

* HTML5
* CSS3 (Flexbox, CSS Grid, media queries)
* Vanilla JavaScript (ES6+)
* Touch Events API
* Custom web fonts (TT Norms Pro Mono)

## What I Learned

Through building this project, I developed skills in:

* **DOM Manipulation**: Creating and appending hundreds of div elements dynamically
* **CSS Grid**: Using `repeat()` and `1fr` units to create perfectly proportioned grids
* **Event Listeners**: Implementing `mouseenter` for hover effects and `touchmove` for mobile drawing
* **Grid Math**: Calculating square sizes accounting for gaps and padding with formula `(width - padding - gaps) / size`
* **Touch Events**: Using `e.touches[0]` and `document.elementFromPoint()` to track finger movement
* **String Methods**: Using `.trim()` to remove whitespace from button text content
* **Array Cycling**: Implementing color rotation with modulo operator `(index + 1) % array.length`
* **Responsive Design**: Building mobile-first layouts with CSS media queries and dropdown menus
* **Code Organization**: Extracting reusable functions like `colorSquare()` to avoid repetition
* **Debugging**: Using `console.log()` to troubleshoot event listeners and text content issues
* **Accessibility**: Learning about semantic HTML, ARIA labels, and screen reader support

## How to Run It

1. Clone or download this repository
2. Open the `index.html` file in your web browser
3. Choose a grid size (4, 8, 16, or ? for random)
4. Select a color mode (black, grey, or rainbow)
5. Draw by hovering your mouse over the canvas (or dragging your finger on mobile)
6. Click "Clear" to reset and start a new drawing

No installation or build process required - just open and draw!

## How to Use

**Desktop:**
* Click a grid size button to change canvas density
* Click a color option to switch drawing modes
* Hover your mouse over squares to draw
* Click "Clear" to reset the canvas

**Mobile:**
* Tap "Settings" to open the menu
* Select grid size and color from the dropdown
* Drag your finger across the canvas to draw
* Tap "Clear" to reset

Project completed as part of The Odin Project Foundations course.
