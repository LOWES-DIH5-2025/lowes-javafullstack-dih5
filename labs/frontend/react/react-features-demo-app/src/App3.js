import logo from './logo.svg';
import './App.css';


// 01: Responding to events 

// function Toolbar({ onPlayMovie, onUploadImage }) {

//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function handleOnClickPlayButton() {
//   alert('Playing!');
// }

// function handleOnClickUploadImageButtion() {
//   alert('Upload Image!');
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// 02: State - Storing Data at Component Level
// State - component-specific memory
// Hooks - special functions that let your components use React features
// useState - Hook lets you declare a state variable

// import { useState } from 'react';

// const sculptureList = [{
//   name: 'Homenaje a la Neurocirugía',
//   artist: 'Marta Colvin Andrade',
//   description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
//   url: 'https://i.imgur.com/Mx7dA2Y.jpg',
//   alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
// }, {
//   name: 'Floralis Genérica',
//   artist: 'Eduardo Catalano',
//   description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
//   url: 'https://i.imgur.com/ZF6s192m.jpg',
//   alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
// }, {
//   name: 'Eternal Presence',
//   artist: 'John Woodrow Wilson',
//   description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
//   url: 'https://i.imgur.com/aTtVpES.jpg',
//   alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
// }, {
//   name: 'Moai',
//   artist: 'Unknown Artist',
//   description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
//   url: 'https://i.imgur.com/RCwLEoQm.jpg',
//   alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
// }, {
//   name: 'Blue Nana',
//   artist: 'Niki de Saint Phalle',
//   description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
//   url: 'https://i.imgur.com/Sd1AgUOm.jpg',
//   alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
// }, {
//   name: 'Ultimate Form',
//   artist: 'Barbara Hepworth',
//   description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
//   url: 'https://i.imgur.com/2heNQDcm.jpg',
//   alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
// }, {
//   name: 'Cavaliere',
//   artist: 'Lamidi Olonade Fakeye',
//   description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
//   url: 'https://i.imgur.com/wIdGuZwm.png',
//   alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
// }, {
//   name: 'Big Bellies',
//   artist: 'Alina Szapocznikow',
//   description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
//   url: 'https://i.imgur.com/AlHTAdDm.jpg',
//   alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
// }, {
//   name: 'Terracotta Army',
//   artist: 'Unknown Artist',
//   description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
//   url: 'https://i.imgur.com/HMFmH6m.jpg',
//   alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
// }, {
//   name: 'Lunar Landscape',
//   artist: 'Louise Nevelson',
//   description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
//   url: 'https://i.imgur.com/rN7hY6om.jpg',
//   alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
// }, {
//   name: 'Aureole',
//   artist: 'Ranjani Shettar',
//   description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
//   url: 'https://i.imgur.com/okTpbHhm.jpg',
//   alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
// }, {
//   name: 'Hippos',
//   artist: 'Taipei Zoo',
//   description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
//   url: 'https://i.imgur.com/6o5Vuyu.jpg',
//   alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
// }];

// function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);
//   const hasNext = index < sculptureList.length - 1;

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// function App() {
//   return (
//     <Gallery />
//   );
// }

// 03: State as a snapshot 

// import { useState } from 'react';

// function Form() {
//   const [to, setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{' '}
//         <select
//           value={to}
//           onChange={e => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <br/>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <br/>
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <Form />
//   );
// }


// 04: Queueing a series of state updates - Bad Design

// import { useState } from 'react';

// function Counter() {
//   const [score, setScore] = useState(0);

//   function increment() {
//     setScore(score + 1);
//   }

//   return (
//     <>
//       <button onClick={() => increment()}>+1</button>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <h1>Score: {score}</h1>
//     </>
//   )
// }

// 04: Queueing a series of state updates - Good Design

// import { useState } from 'react';

// function Counter() {
//   const [score, setScore] = useState(0);

//   function increment() {
//     setScore(s => s + 1);
//   }

//   return (
//     <>
//       <button onClick={() => increment()}>+1</button>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <h1>Score: {score}</h1>
//     </>
//   )
// }

// function App() {
//   return (
//     <Counter />
//   );
// }


// 05: Updating objects in state

// import { useState } from 'react';

// function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img
//         src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }

// function App() {
//   return (
//     <Form />
//   );
// }

// 06: Updating arrays in state

import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketList() {
  console.log("BucketList called...");
  const [list, setList] = useState(
    initialList
  );

  function handleToggle(artworkId, nextSeen) {
    setList(list.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <BucketList />
  );
}














export default App;
