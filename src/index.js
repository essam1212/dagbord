
import { createRoot } from 'react-dom/client';
import'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App';



const root = createRoot(document.getElementById('root'));
root.render( <BrowserRouter>
    <App/> 

    </BrowserRouter>
);

   
