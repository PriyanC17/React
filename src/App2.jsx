import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

function App() {
  const [count, setCount] = useState(0)
  let handleCLick = () =>{
    console.log("Clicked!!!");
  }
  return (
    <>
      <h1>Material UI Demo</h1>
      <Alert severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert><br/>
      <Alert severity="error">
        Delete options is given
      </Alert><br/>
      <Button variant='contained' onClick={handleCLick} color='secondary' startIcon={<DeleteIcon />}>Click Me!!</Button>&nbsp;&nbsp;
      <Button variant='outlined' size='small' disabled endIcon={<SendIcon />}>Click Me!!</Button>
    </>
  )
}

export default App
