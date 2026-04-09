# Fully Responsive Wall Calendar

A high-fidelity, interactive React Wall Calendar component that achieves pixel-perfect visual parity with a real-world physical hanging wall calendar.

## ✨ Project Highlights

- **Physical Aesthetic:** Implements a layered hero section using a solid base, clipped photos, and smooth SVG masks to recreate the premium "mountain-cut" and "blue-wedge" look of a physical wall calendar.
- **Dynamic Interaction:** Supports date range selection (start and end dates) with intuitive highlighting across the calendar grid.
- **Smart Components:** Features a notes section with persistent `localStorage` integration, ensuring your reminders stay saved between sessions.
- **Pixel-Perfect Alignment:** Fine-tuned spacing, vertical/horizontal alignment, and responsive design that adapts from a side-by-side desktop layout to a mobile-optimized stack.

## 🛠️ Design Choices

- **Vanilla CSS:** Chosen over utility frameworks to maintain precise, uncompromised control over complex SVG clipping paths, grid layouts, and micro-animations.
- **date-fns:** Utilized for its comprehensive and lightweight approach to date manipulation, ensuring accurate calendar rendering and grid padding.
- **SVG for Geometry:** Leveraged SVG pathing for the hero section to ensure smooth, high-resolution curves that are difficult to achieve with standard CSS borders or clip-paths alone.
- **Component-Level Styling:** Each component has its own CSS file to ensure scoping and maintainability as the project scales.

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository** (or navigate to the project folder).
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **View the app:** Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Tech Stack

- **React 19**
- **Vite**
- **date-fns**
- **Lucide React Icons**
- **Vanilla CSS**
