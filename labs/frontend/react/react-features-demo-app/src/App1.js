import logo from './logo.svg';
import './App.css';

// 01: React Fist App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 02: Creating and nesting components 
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// 03: Writing markup with JSX 

// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <AboutPage />
//     </div>
//   );
// }

// 04: Adding styles and Displaying Data

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <Profile />
//     </div>
//   );
// }

// 05: Rendering Lists

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <ShoppingList />
//     </div>
//   );
// }

// 06: Responding to events 

// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// 07: Updating the screen with useState

// import { useState } from 'react';

// function MyButton() {
//   console.log("Rendering MyButton Component...");
//   let [counter, setCounter] = useState({count: 0, msg: "Hi"});
//   // let count = 0;

//   // 0
//   // 0 + 1
//   // 1 + 1
//   function handleClick(e) {

//     // counter.count = counter.count + 1;

//     setCounter({...counter, count: counter.count + 1});
//     // count = count + 1;
//     console.log(e.target);
//     console.log(counter);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {counter.count} times
//     </button>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />    
//     </div>
//   );
// }

// 08: Sharing data between components

// import { useState } from 'react';

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }














export default App;
