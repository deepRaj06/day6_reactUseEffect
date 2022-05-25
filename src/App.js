import './App.css';
import Todos from './components/Todos.jsx'
import React from 'react';

function App() {

  // const[count1, setCount1] = useState(0);
  // const[count2, setCount2] = useState(0);

  // const[showComponent, setShowComponent] = useState(false);

  // fetch('https://m6g3bt.sse.codesandbox.io/todos')
  //   .then( (res) => res.json() )
  //   .then( (data) => {
  //     console.log(data);
  //   });

    // This empty array help us to print only one array
  // useEffect( () => {
  //   console.log('Inside1', count1, count2);
  // }, []);

  // useEffect( () => {
  //   console.log('Inside 1');
  // })

  // useEffect( () => {
  //   console.log('Inside 2');
  // })

  // useEffect( () => {
  //   console.log('Inside 2');
  // })

  // useEffect( () => {
  //   console.log('Inside 2');
  // })

  // console.log(3);

  // let A = () => <div>Component A</div>;
  // let B = () => <div>Component B</div>;

  return (
    <div>
      App
      <Todos></Todos>
      {/* <div 
      className='App'
      onClick={ () => setCount1(count1 + 1)}>
        Counter 1: {count1}
      </div>
      <div 
      className='App'
      onClick={ () => setCount2(count2 + 1)}>
        Counter 2: {count2}
      </div> */}
    </div>
    // <div 
    // className="App"
    // // onClick={ ()=> setCount(count + 1) }
    // onClick={ () => setShowComponent(!showComponent)}
    // >
    // {/* Hello: {count} */}
    // Hello
    // {showComponent ? <A/> : <B/> }
    // </div>
  );
}

export default App;
