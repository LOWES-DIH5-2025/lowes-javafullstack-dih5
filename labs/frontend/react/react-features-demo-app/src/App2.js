import './App.css';

// 01: React Nested Components
// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }

// function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Gallery />
//     </div>
//   );
// }

// 02: Writing markup with JSX 

// function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <TodoList />
//     </div>
//   );
// }

// 03: Adding styles and Displaying Data with JS in JSX

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <TodoList />
//     </div>
//   );
// }

// 04: Passing props to the components

// function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//       <Avatar
//         size={200}
//         person={{
//           name: 'asdlfjaldfkjadf',
//           imageId: 'YfeOqp2'
//         }} 
//       />
//     </Card>
//   );
// }

// function Card({ children }) {
//   console.log(children);

//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// function Avatar({person, size}) {
//   console.log(person);

//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function getImageUrl(person, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     size +
//     '.jpg'
//   );
// }

// function App() {
//   return (
//     <div>
//       <Profile />
//     </div>
//   );
// }

// 05: Conditional Rendering

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {/* {name} {isPacked && '✔'}  */}

//       {name} {isPacked ? '✔' : 'X'}
//     </li>
//   );
// }

// function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// function App() {
//   return (
//     <div>
//       <PackingList />
//     </div>
//   );
// }

// 05: Rendering Lists

//  const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];

// function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//     </article>
//   );
// }

// function getImageUrl(person) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     's.jpg'
//   );
// }

// function App() {
//   return (
//     <div>
//       <List />
//     </div>
//   );
// }

// 06: Keeping components pure - Bad Design
 
// let guest = 0;

// function Cup() {
//   // Bad: changing a preexisting variable!
//   console.log(guest);
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// function TeaSet() {
//   return (
//     <>
//       <Cup /> 
//       <Cup />
//       <Cup />
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <TeaSet />
//     </div>
//   );
// }

// 06: Keeping components pure - Good Design
 
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

function App() {
  return (
    <div>
      <TeaSet />
    </div>
  );
}















export default App;
