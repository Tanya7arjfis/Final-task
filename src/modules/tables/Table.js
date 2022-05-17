import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { addTable, deleteTable } from '../../store/actions/tables';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TableForm from './TableForm';
import Tablenumber from './Tablenumber'


export default function Table() {
  const tables = useSelector((state) => state.tables)

  console.log(tables)
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState('false');
  function handlertoggleForm() {
    setShowForm(!showForm);
    console.log(showForm)
  }

  function cancel() {
    handlertoggleForm()
  }


  function onhandlerAdd() {
    // e.preventDefault();
    const id = tables.length + 1;
    console.log(tables.length)
    dispatch(addTable(id))
  }

  const [edit, setEdit] = useState({});
   
  
  function editWaiter(item) {
    console.log(item)
    
    setEdit(item)
    handlertoggleForm()
    // onClick={(e) => editWaiter(item)} 
   }

  return (
    <>
      <div className="tables">
        {tables.map((item) => {
          // <Tablenumber key={item.id} table={item.table}  />
          return (
            <div key={item.id} className="table-info">
              <div className="table-number">
                {item.table}
              </div>
              <IconButton onClick={(e) => editWaiter(item)}>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => dispatch(deleteTable(item.id))}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          )
        })
        
        }
        <div>
          <IconButton onClick={onhandlerAdd}>
            <AddCircleIcon />
          </IconButton>
        </div>
        {!showForm ? <TableForm oncancel={cancel} edit={editWaiter}/> : undefined}
        {/* <TableForm/> */}
      </div>
     
    </>
  )
}
