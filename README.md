#  React Learning Guide (Vite)

This repository contains a comprehensive React component (`src/App.jsx`) designed as a hands-on reference guide for learning the React library.

## About This Project

This guide is structured into distinct "Levels," each encapsulated in its own React Component. This approach demonstrates React's component-based architecture while providing a clear, logical progression from fundamentals to more advanced hooks.

All concepts are demonstrated with clear, commented code examples, all visible on a single, scrollable page.

---

### Core Concepts Covered in `src/App.jsx`

This file covers the essential building blocks of modern React.

**Topics Covered:**
* **Level 1: Components & JSX**
    * The structure of a React Component.
    * What JSX is and how to embed JavaScript `{expressions}`.

* **Level 2: Props**
    * Passing data from a parent to a child component.
    * Creating reusable components.

* **Level 3: State & Events (useState)**
    * What "state" is and why it's used.
    * The `useState` hook for component memory.
    * Handling user events like `onClick`.

* **Level 4: Rendering Lists**
    * Using the `.map()` array method to render dynamic lists of data.
    * The importance of the `key` prop for performance.

* **Level 5: Conditional Rendering**
    * How to show or hide JSX based on a condition.
    * Using the Ternary Operator (`? :`) and Logical AND (`&&`).

* **Level 6: Handling Forms (Controlled Components)**
    * Linking `input` values to state to create "controlled components".
    * Handling form `onSubmit` events.

* **Level 7: The `useEffect` Hook**
    * Handling "side effects" like API calls or `document.title` changes.
    * Running code on component mount (`[]` dependency array).
    * Running code in response to state changes (`[dependency]` array).

* **Level 8: Lifting State Up**
    * The core pattern for sharing state between sibling components by "lifting" it to their closest common parent.

* **Level 9: The `useContext` Hook**
    * How to avoid "prop drilling" (passing props through many layers).
    * How to provide and consume global data (like a theme or user).

---

##  Getting Started

This project was bootstrapped with **[Vite](https://vitejs.dev/)**.

### Prerequisites

You must have **[Node.js](https://nodejs.org/)** installed on your computer (which includes `npm`).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ayoubabbadi/learn-react.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd learn-react
    ```

3.  **Install all dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  **Open in your browser:**
    * Open the `http://localhost:5173` (or similar) URL shown in your terminal to see the live application.
    * The page will automatically reload as you make changes to the code.

---

##  Project File Structure

A brief overview of the key files in this project:

* **`README.md`**
    * This file. The project's documentation.
* **`package.json`**
    * Lists all project dependencies (like `react` and `react-dom`) and `npm` scripts.
* **`src/`** (The "Source" folder)
    * **`App.jsx`**
        * **The main learning file.** Contains all the "Level" components and explanations.
    * **`App.css`**
        * The stylesheet used to make the learning guide clean and readable.
    * **`main.jsx`**
        * The entry point of the application. This file finds the `root` element in `index.html` and renders the `<App />` component inside it.
