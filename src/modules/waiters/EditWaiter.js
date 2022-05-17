import {editWaiter} from './Waiters'
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {waiterEdit} from '../../store/actions/waiters'

export default function EditWaiter({oncancel, newItemWaiter}) {
  
  const [newitem, setNewitem] = useState(newItemWaiter);
  const dispatch = useDispatch();
  console.log(newitem)
  console.log(newItemWaiter)

  function changeHangler(e) {
    setNewitem({
      ...newitem,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(newitem);
    dispatch(waiterEdit(newitem))
    oncancel();
  }

  function cancelForm() {
    oncancel();
  }

  
  return (
    <form onSubmit={submitHandler}>
    <label key={newitem.id}>
      <input placeholder="Name" name="name" onChange={changeHangler} value={newitem.name}/>
    </label>
    <IconButton onClick={cancelForm} type='submit'>
      <CheckIcon />
    </IconButton>
    <IconButton onClick={cancelForm}>
      <CancelOutlinedIcon />
    </IconButton>
  </form>
  )
}
