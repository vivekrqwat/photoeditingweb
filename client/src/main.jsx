import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router"
import App from './App.jsx'
import Homepage from './routes/HomePage/Homepage.jsx'
import Createpage from './routes/CreatePAge/Createpage.jsx'
import PaostPage from './routes/PostPage/PaostPage.jsx'
import Authpage from './routes/Autthpage/Authpage.jsx'
import ProfilePage from './routes/Profilepage/ProfilePage.jsx'
import SearchPage from './routes/SearchPage/SearchPage.jsx'
import Layouts from './layouts/Layouts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts></Layouts>}>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/create' element={<Createpage></Createpage>}></Route>
        <Route path='/pin/:id' element={<PaostPage></PaostPage>}></Route>
        <Route path='/:usename' element={<ProfilePage></ProfilePage>}></Route>
         <Route path='/search' element={<SearchPage></SearchPage>}></Route>
  </Route>
          <Route path='/auth' element={<Authpage></Authpage>}></Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
