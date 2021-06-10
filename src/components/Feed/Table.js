import React from 'react';
import "./Table.css";
import { DataGrid} from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {userRows} from '../../dummydata';

const Table = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width:90 },
    { field: 'username', headerName: 'Username', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'status',
      type: 'number',
      width: 130,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div class="action">
            <button className="userListEdit">Edit</button>
            <DeleteOutline className="userListDelete"/>
          </div>
        )
      }
    }
  ];
  
    return (
        <div className="table" style={{ height: '100%',
        width: '100%', background: "linear-gradient(0deg, #1897c1, #f9ad69)"}}>
      <DataGrid disableSelectionOnClick rows={userRows} columns={columns} pageSize={10} checkboxSelection />
    </div>
    )
}

export default Table;
