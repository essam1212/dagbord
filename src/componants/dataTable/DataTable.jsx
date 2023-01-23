import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../dataTableSrc'
import { Link } from 'react-router-dom'

const actionColumns = [
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to='/users/test' style={{ textDecoration: 'none' }}>

                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">delete</div>

                </div>
            );
        },
    },
]
const DataTable = () => {
    return (
        <div className='dataTable'>
            <div className="dataTableTitle">
                Add New User
                <Link to='/users/new' className="link">
                    Add Naw
                </Link>

            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    className='datagrid'
                    rows={userRows}
                    columns={userColumns.concat(actionColumns)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default DataTable