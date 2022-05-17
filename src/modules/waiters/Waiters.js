import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import Box from '@mui/material/Box';
import { deleteWaiter } from "../../store/actions/waiters";
import FormWaiter from "./FormWaiter";
import EditWaiter from './EditWaiter';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';




export default function Waiters() {
  const waiters = useSelector((state) => state.waiters);
  
  // const [objArr, setObjArr] = useState(waiters);
  
  const dispatch = useDispatch();

  // const [editId, setEditId] = useState(null);

  const [showForm, setShowForm] = useState('false');
  function handlertoggleForm() {
    setShowForm(!showForm);
    console.log(showForm)
  }

  function cancel() {
    handlertoggleForm()
  }


  const [editForm, setEditForm] = useState('false');
  function showEditForm() {
    setEditForm(!editForm)
  }

  function cancelEditForm() {
    showEditForm()
  }

  // function editWaiter(id) {
    
  //   dispatch(setEditId(id));
  //   console.log(id)
  //   console.log(waiters)
  //   const editWaiter = waiters.filter((item) => Number(item.id) === waiter.id);
  //   console.log(editWaiter);
  //   const {name} = editWaiter
  //   console.log(editWaiter[0].name)
  // }

  function editWaiter(item) {
    console.log(item)
    
    // const toChangename = item.name
    // console.log(toChangename)


  }
  

  return (
    <>
      <Button variant="outlined" onClick={handlertoggleForm}>new waiter</Button>
      {/* <button onClick={handlertoggleForm}>new waiter</button> */}
      {!showForm ? <FormWaiter oncancel={cancel}/> : undefined}
      <Box sx={{ pl: 2 }}>
        <h2>List of waiters</h2>
        {waiters.map((item) => {
          return (
            <Box key={item.id} sx={{ mb: 1 }}>
              <img src={`${item.avatar}`} className='waiter-avatar' />
              <li className="waiter-name">
                {item.name}
              </li>
              <IconButton onClick={showEditForm}>
              {/* {!showForm ? <FormWaiter onedit={cancel}/> : undefined} */}
                <EditIcon/>
              </IconButton>
              <IconButton onClick={() => dispatch(deleteWaiter(item.id))}>
                <DeleteIcon />
              </IconButton>
              {!editForm ?  <EditWaiter newItemWaiter={item} oncancel={cancelEditForm} /> : undefined}
            </Box>
          )
        })
        }
        
      </Box>
    </>
  )
}
