import './list.scss'
import Sidbar from '../../componants/sidebar/Sidebar'
import Navbar from '../../componants/navbar/Navbar'
import DataTable from '../../componants/dataTable/DataTable'
const List = () => {
  return (
    <div className='list'>
      <Sidbar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List