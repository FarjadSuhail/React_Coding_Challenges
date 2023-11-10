import React, { useState } from 'react';
import PassingProps from './Components/PassingProps';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import { Button, Flex } from 'antd';
import './App.css';


function App() {
  const name = 'John';
  const age = 45;

  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  const btnClick = () =>{
    setisLoggedIn(!isLoggedIn);
  }

  return (
    <>
    <Flex
    vertical
    gap="small"
    style={{
      width: '7%',
    }}
  ></Flex>
      {/* <header className="App-header">
        <h1>Conditional Rendering.</h1>
        
      </header> */}
      {/* <PassingProps name={name} age={age} /> */}
      {/* <Navigation /> */}
      {!isLoggedIn && <Button onClick={btnClick} type="primary" block>
      Login
    </Button>}
    {isLoggedIn && <Button onClick={btnClick} danger>
      Logout
    </Button>}

      {!isLoggedIn && <div className='center'>
      <Login />
      </div>
}
{isLoggedIn && <Navigation />}
    </>
  );
}

export default App;
