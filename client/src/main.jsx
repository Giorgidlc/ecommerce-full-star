
import ReactDOM from 'react-dom/client'
import './styles/css/reset.css'
import { BrowserRouter } from 'react-router-dom'

import Root from './routes/root'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
)

