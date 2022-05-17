import MenuList from './MenuList';
import MenuForm from './MenuForm';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Menu() {

  const [showForm, setShowForm] = useState('false');
  function handlertoggleForm() {
    setShowForm(!showForm);
  }
  
  function cancel() {
    handlertoggleForm()
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Menu</th>
            <th>Price, ₴</th>
          </tr>
          <MenuList />
        </tbody>
      </table>
      <Button variant="outlined" onClick={handlertoggleForm}>new dish</Button>
      {/* <button onClick={handlertoggleForm}>new dish</button> */}
      {!showForm ? <MenuForm oncancel={cancel} /> : undefined}
    </>
  )
}

