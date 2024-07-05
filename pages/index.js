// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useState } from 'react';

function Home() {
  // first count is state value varable and will be what we display
  // setCount is the updater function that will change our state varaiable
  // the zero in useState() is where we set our state varabible to a deafult value if this is not definded here then it will remain undefinded.
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // this is basically an annoymous functinion that is taking in the setCount function and updating it here instead
    // this is also where we can create a switch statement that handles all of the button functions
    setCount((prevState) => prevState + 1);
  };

  // then return JSX
  return (
    <>
      <h1>Counter</h1> {/* this is just the title */}
      <h2>{count}</h2> {/* this is the count value set at 0 */}
      <button type="button" onClick={handleClick}>Increment</button> {/* the handClick function is being called when the onClick is triggered from the button   */}
      <button type="button" onClick={() => setCount((prevState) => prevState - 1)}>Decrement</button>
      <button type="button" onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Home;
