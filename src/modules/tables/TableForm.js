import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {tableEdit} from '../../store/actions/tables'

export default function TableForm({oncancel, edit}) {
  
  const [newitem, setNewitem] = useState();
  const dispatch = useDispatch();

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
    dispatch(tableEdit(newitem))
  }

  function cancel() {
    oncancel()
  }
  
  return (
    <form onSubmit={submitHandler}>
    <label key={edit.id}>
      {'Edit table №' + {} + 'to'}
      <input name='table' onChange={changeHangler} value={edit.table} />
    </label>
    <IconButton  type='submit'>
      <CheckIcon />
    </IconButton>
    <IconButton onClick={cancel} >
      <CancelOutlinedIcon />
    </IconButton>
  </form>
  )
}
