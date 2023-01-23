import './new.scss'
import Sidbar from '../../componants/sidebar/Sidebar'
import Navpar from '../../componants/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';
const Naw = ({inputs,title}) => {
const [file, setFile] = useState("");

  return (
    <div className='new'>
      <Sidbar/>
      <div className="newContainer">
        <Navpar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left ">
            <img src={file? URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right ">
            <form className='x' >
              <div className="formInput">
                <label htmlFor="file">
                  image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                </div>
                {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Naw