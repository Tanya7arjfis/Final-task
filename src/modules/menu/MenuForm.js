import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addMenu} from '../../store/actions/menu';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

export default function MenuForm({oncancel}) {
  const [item, setItem] = useState({
    dish: '',
    price: '',
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
    dispatch(addMenu(item));
    oncancel();
  }

  function cancelForm() {
    oncancel();
  }
  
  return (
    <form onSubmit={submitHandler}>
      {/* <input onChange={changeHangler}  name='dish'>
      value={item.title}
      </input> */}
      {/* <input onChange={changeHangler} name='price' ></input> */}
      {/* <button type="submit" oncancel={cancelForm}>save</button> */}
      
      <FormControl fullWidth sx={{ p: 1 }} variant="standard" onSubmit={submitHandler}>
          
          <TextField id="standard-basic" label="" variant="standard" onChange={changeHangler} name='dish'/>
          <InputLabel htmlFor="standard-adornment-amount">TASTY</InputLabel>
          <Input  
            id="standard-adornment-amount"
            onChange={changeHangler} name='price' 
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">₴</InputAdornment>}
          />
          <Button variant="contained" type="submit" oncancel={cancelForm}>save</Button>
        </FormControl>
        
    </form>
  )
}
