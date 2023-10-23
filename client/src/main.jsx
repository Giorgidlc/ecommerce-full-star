import ReactDOM from 'react-dom/client'
import './styles/css/reset.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
    
)
