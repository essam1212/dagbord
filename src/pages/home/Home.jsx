import Sidebar from '../../componants/sidebar/Sidebar'
import Navbar from '../../componants/navbar/Navbar'
import './home.scss'
import Widgets from '../../componants/widgets/Widgets'
import Chart from '../../componants/chart/Chart'
import Featured from '../../componants/featured/Featured'
import  List  from '../../componants/table/Table'


const Home = () => {
  
  return (
    <div className='home '>
      <Sidebar/>
      <div className="homeContainer ">
        <Navbar/>
        <div className="widgets">
          <Widgets type='user'/>
          <Widgets type='order'/>
          <Widgets type='earning'/>
          <Widgets type='balance'/>
        </div>
        <div className="charts">
        <Featured/>
          <Chart title='Last 6 Months (Revenue)' aspect={2/1}/>
          
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
            <List/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home