/**************************************************************
 * Filename: App.jsx (Your learn-react.jsx)
 * Description: 
 * This file is a "Comprehensive Learning Reference Guide" for React.
 * Each "Level" is a React Component, just like our C functions.
 * The main 'App' component renders all the levels in order.
 *
 * How to use:
 * 1. Create a new React project (e.g., with 'npm create vite@latest')
 * 2. Replace the contents of 'src/App.jsx' with this file.
 * 3. Replace the contents of 'src/App.css' with the provided CSS.
 * 4. Run 'npm run dev' and open the app in your browser.
 **************************************************************/

// --- Import React and Hooks ---
// 'React' is the core library.
// 'useState', 'useEffect', 'useContext', 'createContext' are "Hooks".
// Hooks are special functions that let you "hook into" React features.
import React, { useState, useEffect, useContext, createContext } from 'react';

// === LEVEL 1: COMPONENTS & JSX ===
// A "Component" is a piece of the UI. It's a JavaScript function
// that returns what looks like HTML.
// This "HTML" is actually "JSX" (JavaScript XML).
function Level1_BasicJSX() {
  // We use "className" in JSX instead of "class" (because "class"
  // is a reserved word in JavaScript).
  const myName = "Ayoub";

  return (
    <div className="level-container">
      <h2 className="level-title">Level 1: Components & JSX</h2>
      
      {/* This is a JSX comment. */}
      <p>Hello! This is a React Component.</p>
      
      <h3 className="concept-title">What is JSX?</h3>
      <p>
        JSX lets you write HTML-like code inside JavaScript.
        It's cleaner than creating elements manually.
      </p>

      <h3 className="concept-title">Using JavaScript in JSX</h3>
      <p>
        You can use curly braces {'{}'} to embed any JavaScript expression.
      </p>
      <p>My name is: <strong>{myName}</strong></p>
      <p>2 + 2 equals: <strong>{2 + 2}</strong></p>
    </div>
  );
}


// === LEVEL 2: PROPS ===
// "Props" (properties) are how you pass data from a 
// Parent component down to a Child component.
// This makes components reusable.

// Child Component: It receives 'props' as an argument.
function ProfileCard(props) {
  // We access the data using dot notation (props.name, props.title)
  return (
    <div className="profile-card">
      <img src={`https://i.pravatar.cc/60?u=${props.name}`} alt={`${props.name}'s profile`} />
      <div>
        <strong>{props.name}</strong>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

// Parent Component
function Level2_Props() {
  return (
    <div className="level-container">
      <h2 className="level-title">Level 2: Props</h2>
      <p>Props are used to pass data to child components, making them reusable.</p>
      
      {/* We "pass" props just like HTML attributes. */}
      <ProfileCard name="Alice" title="Software Engineer" />
      <ProfileCard name="Bob" title="Product Manager" />
    </div>
  );
}


// === LEVEL 3: STATE & EVENTS ===
// "State" is data that can change over time.
// When state changes, React *automatically re-renders* the component.
// We use the 'useState' hook to create a state variable.

function Level3_StateAndEvents() {
  // --- The 'useState' Hook ---
  // 1. 'count' is our state variable (the current value).
  // 2. 'setCount' is the *only* function we can use to update 'count'.
  // 3. (0) is the initial (default) value.
  const [count, setCount] = useState(0);

  // --- Event Handlers ---
  // These are functions that run when a user does something.
  function increment() {
    // We use the 'setCount' function to update the state.
    // React will then re-render this component.
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="level-container">
      <h2 className="level-title">Level 3: State & Events</h2>
      
      <h3 className="concept-title">Using 'useState'</h3>
      <p>
        'State' is memory for a component. When it changes, the component updates.
      </p>
      <p>Current Count: <strong>{count}</strong></p>

      {/* --- Events --- */}
      {/* 'onClick' is an event. We pass it the *name* of the
          function we want to run when it's clicked. */}
      <button onClick={increment}>Increment (+)</button>
      <button onClick={decrement} className="secondary">Decrement (-)</button>
    </div>
  );
}


// === LEVEL 4: RENDERING LISTS ===
// You can't use a normal 'for' loop in JSX.
// Instead, you use the JavaScript '.map()' method on an array.

function Level4_RenderingLists() {
  // An array of data (e.g., from a database or API)
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <div className="level-container">
      <h2 className="level-title">Level 4: Rendering Lists</h2>
      <p>We use the <code>.map()</code> array method to render lists.</p>
      
      <h3 className="concept-title">User List:</h3>
      <ul>
        {/* .map() loops over each 'user' in the 'users' array
          and returns a new JSX element for each one.
          
          **IMPORTANT:** You *must* provide a unique 'key' prop
          for each item in a list. This helps React identify
          which items have changed, been added, or removed.
        */}
        {users.map((user) => (
          <li key={user.id} className="list-item">
            ID: {user.id}, Name: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


// === LEVEL 5: CONDITIONAL RENDERING ===
// How to show or hide components based on a condition.

function Level5_ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible(!isVisible); // Set it to the opposite of what it is
  }

  return (
    <div className="level-container">
      <h2 className="level-title">Level 5: Conditional Rendering</h2>
      <button onClick={toggleVisibility} className="secondary">
        Toggle Visibility
      </button>

      {/* --- Method 1: Ternary Operator --- */}
      {/* (condition ? <show_if_true> : <show_if_false>) */}
      <h3 className="concept-title">1. Ternary Operator</h3>
      {isVisible ? (
        <p>✅ This text is visible.</p>
      ) : (
        <p>❌ This text is hidden.</p>
      )}

      {/* --- Method 2: Logical && Operator --- */}
      {/* (condition && <show_if_true>) */}
      {/* This is a shortcut if you don't need an 'else'. */}
      <h3 className="concept-title">2. Logical && Operator</h3>
      {isVisible && (
        <div className="profile-card">
          <p>You can only see me if 'isVisible' is true.</p>
        </div>
      )}
    </div>
  );
}


// === LEVEL 6: HANDLING FORMS ===
// In React, we create "controlled components" by linking
// an input's value directly to a 'useState' variable.

function Level6_Forms() {
  // A state variable to hold the value of the input
  const [name, setName] = useState("");

  // This function runs on *every single keystroke*
  function handleInputChange(event) {
    // We update our state to match what's in the input box
    setName(event.target.value);
  }

  function handleSubmit(event) {
    // This stops the browser from refreshing the page (default form behavior)
    event.preventDefault();
    alert(`Hello, ${name}!`);
    setName(""); // Clear the input after submit
  }

  return (
    <div className="level-container">
      <h2 className="level-title">Level 6: Forms (Controlled Components)</h2>
      
      {/* 'onSubmit' runs when the form is submitted (e.g., pressing Enter) */}
      <form onSubmit={handleSubmit}>
        <h3 className="concept-title">Enter your name:</h3>
        
        <input
          type="text"
          placeholder="Your Name"
          // 1. The 'value' is *controlled* by our 'name' state
          value={name}
          // 2. 'onChange' updates the state on every keystroke
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Current state: {name}</p>
    </div>
  );
}


// === LEVEL 7: THE 'useEffect' HOOK ===
// The 'useEffect' hook lets you run code in response to
// the component's lifecycle. (e.g., when it first loads,
// or when a state variable changes).
// This is used for "side effects" like fetching data,
// timers, or changing the document title.

function Level7_UseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // --- Example 1: Run when 'count' state changes ---
  // The 'dependency array' [count] tells React:
  // "Run this effect *only* when 'count' changes."
  useEffect(() => {
    // This is the "effect"
    document.title = `Count is ${count}`;
    
    // Optional: Cleanup function
    // This runs *before* the effect runs again, or when the component unmounts.
    return () => {
      // console.log("Cleaning up previous effect...");
    };
  }, [count]); // <-- The Dependency Array

  // --- Example 2: Run only ONCE (on component "mount") ---
  // An empty array [] means "run this once when the
  // component first loads, and never run it again."
  // This is perfect for fetching initial data.
  useEffect(() => {
    // We'll simulate fetching data from an API
    setTimeout(() => {
      setData("✅ Data successfully fetched!");
    }, 2000); // 2 seconds
  }, []); // <-- Empty Dependency Array

  return (
    <div className="level-container">
      <h2 className="level-title">Level 7: The `useEffect` Hook</h2>
      <p>
        This hook runs "side effects" (like API calls or title changes)
        in response to renders.
      </p>
      
      <h3 className="concept-title">Example 1: Update Title on State Change</h3>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>(Check your browser tab's title!)</p>
      
      <h3 className="concept-title">Example 2: Fetch Data on Load</h3>
      {data ? <p>{data}</p> : <p>Loading data...</p>}
    </div>
  );
}


// === LEVEL 8: LIFTING STATE UP ===
// What if two components need to share the *same* state?
// You "lift" the state up to their closest common parent.

// Child 1: Just displays the count
function Display({ count }) {
  return <p>Current Count: <strong>{count}</strong></p>;
}

// Child 2: A button that *changes* the count
function IncrementButton({ onIncrement }) {
  // This child doesn't know *what* 'onIncrement' does,
  // it just knows to call it when clicked.
  return <button onClick={onIncrement}>Increment (+)</button>;
}

// Parent Component
function Level8_LiftingStateUp() {
  // The Parent component *owns* the state.
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="level-container">
      <h2 className="level-title">Level 8: Lifting State Up</h2>
      <p>
        To share state between components, we hold the state in their
        common parent and pass it down as props.
      </p>
      
      {/* 1. Pass the *state value* down to the Display.
        2. Pass the *state function* down to the Button.
      */}
      <Display count={count} />
      <IncrementButton onIncrement={handleIncrement} />
    </div>
  );
}


// === LEVEL 9: 'useContext' (Context API) ===
// "Prop drilling" is when you pass a prop through many
// layers of components that don't even use it.
// "Context" lets you "teleport" data to any component
// deep in the tree without passing it manually.

// 1. Create the Context
// This is like creating a "channel" for our theme.
const ThemeContext = createContext('light'); // 'light' is the default

function Level9_UseContext() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // 2. Provide the Context
  // We wrap the parent in a 'Provider'. Any component
  // inside this wrapper can now access the 'value'.
  return (
    <ThemeContext.Provider value={theme}>
      <div className="level-container">
        <h2 className="level-title">Level 9: The `useContext` Hook</h2>
        <p>Context avoids "prop drilling" for global data like themes or user info.</p>
        <button onClick={toggleTheme} className="secondary">Toggle Theme</button>
        
        {/* This component is "deep" inside */}
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

// A component nested deep inside
function ThemedComponent() {
  // 3. Consume the Context
  // The 'useContext' hook finds the nearest Provider
  // and gives us its 'value'.
  const theme = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    border: `1px solid ${theme === 'light' ? '#333' : '#fff'}`,
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px'
  };

  return (
    <div style={style}>
      <p>This component's theme is: <strong>{theme}</strong></p>
      <p>It read this from context without any props!</p>
    </div>
  );
}


// === The Main "App" Component ===
// This is the main component that renders all our levels.
// It's just like the 'main()' function in C.
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>My React Learning Guide</h1>
      <p style={{ textAlign: 'center' }}>
        A guide inspired by our <code>leran.c</code> file.
      </p>
      
      {/* We render each Level component here */}
      <Level1_BasicJSX />
      <Level2_Props />
      <Level3_StateAndEvents />
      <Level4_RenderingLists />
      <Level5_ConditionalRendering />
      <Level6_Forms />
      <Level7_UseEffect />
      <Level8_LiftingStateUp />
      <Level9_UseContext />
      
      <div className="level-container">
        <h2 className="level-title">Next Steps</h2>
        <p>
          You've learned the core of React! From here, you can explore:
        </p>
        <ul>
          <li><strong>React Router:</strong> For multi-page applications.</li>
          <li><strong>Data Fetching:</strong> Using 'fetch' inside 'useEffect' to get real API data.</li>
          <li><strong>State Management:</strong> Tools like Redux or Zustand for complex, global state.</li>
        </ul>
      </div>
    </div>
  );
}

// We export the 'App' component so 'main.jsx' can render it.
export default App;