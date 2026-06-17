# Nusa Education - Official Website

This is the official website for **Nusa Education**, a creative digital partner helping businesses, institutions, and communities grow through technology, design, and relevant digital strategies.

The project is built with a modern, high-performance stack:
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** SVG/Lucide React

---

## 🚀 Guidelines for Running Locally

Follow these steps to set up and run the project on your local machine.

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18.17 or newer)
- **npm** (comes with Node.js) or **pnpm**/**yarn**

### 2. Installation
Open your terminal, navigate to the project directory, and install the required dependencies:

```bash
# Using npm (recommended for this project)
npm install

# Or using yarn
yarn install
```

### 3. Running the Development Server
Once the packages are installed, start the local development server:

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

### 4. Viewing the Project
After the server starts successfully, open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

*(Note: If you have another project running on port 3000, Next.js will automatically try the next available port, like `http://localhost:3001`.)*

---

## 📂 Project Structure

- `app/` - Contains the main Next.js application routing and pages (`page.tsx`, `layout.tsx`, `globals.css`).
- `components/` - Contains reusable UI components (e.g., `Navbar.tsx`, `Hero.tsx`).
- `public/` - Static assets like images and icons (e.g., `hero-person-1.png`).

## 🛠️ Common Commands

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production deployment.
- `npm run start`: Runs the built production application locally.
- `npm run lint`: Runs ESLint to check for code issues.

## ⚠️ Troubleshooting
- **"Cannot find module" Type Errors:** If your code editor shows cached type errors (e.g., looking for a non-existent `src/` folder), delete the `.next` folder and restart your development server (`npm run dev`). Then, restart your editor's TypeScript server.
