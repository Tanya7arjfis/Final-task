import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addWaiter} from '../../store/actions/waiters';
import {setWaiter, editWaiter} from './Waiters';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

export default function FormWaiter({oncancel}) {
  const [item, setItem] = useState({
    name: '',
    avatar: '',
  }); 

  
  const dispatch = useDispatch();

  function changeHangler(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    })
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(item);
    dispatch(addWaiter(item));
    oncancel();
  }

  function cancelForm() {
    oncancel();
  }
 

  return (
    <form onSubmit={submitHandler} className="add-waiter">
      <label>
        {/* <input placeholder="Name" name="name" onChange={changeHangler}/> */}
        <TextField
        // helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Name"
        name="name" onChange={changeHangler}
      />
      </label>

      <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
       <Button variant="contained" type='submit'>save</Button>
       <Button variant="contained" onClick={cancelForm}>cancel</Button>
      {/* <button type='submit'>save</button>
      <button onClick={cancelForm}>cancel</button> */}
    </form>
  )
}
