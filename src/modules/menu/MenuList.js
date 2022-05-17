import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {deleteMenu} from '../../store/actions/menu'


export default function MenuList({handlerEdit}) {
  const menu = useSelector((state) => state.menu)
  const dispatch = useDispatch()
  console.log(menu)


  return (
    <>
      {menu.map((item) => {
        const { id, dish, price } = item;
        return (
          <tr key={id}>
            <td>{dish}</td>
            <td>{price}</td>
            <td>
            <IconButton aria-label="edit" 
            // onClick={handlerEdit}
            >
                <EditIcon /> 
            </IconButton>
            </td>
            <td>
              <IconButton aria-label="delete" onClick={() => dispatch(deleteMenu(id))}>
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        )
      })
      }
    </>
  )
}
