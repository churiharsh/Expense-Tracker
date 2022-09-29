import { useEffect, useState } from 'react'
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';


// import './App.css'
import { gapi } from 'gapi-script';
const clientId = '949936098006-hblta500v948358n1htrm7qnvlcaf49k.apps.googleusercontent.com';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    };
    gapi.load('client:auth2', initClient)

  });
  return (
    <Signin/>

  )
}

export default App
