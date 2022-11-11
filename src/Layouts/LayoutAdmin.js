import { Layout } from 'antd'
import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import SignIn from '../pages/Admin/signIn'
import './LayoutAdmin.scss'

const LayoutAdmin = (props) => {
    const [menuCollapsed, setMenuCollapsed] = useState(false)
    const {Header, Content, Footer} = Layout
    const {children} = props
    const user = null

    if(!user){
        return (
          <>
           <SignIn/>
           <Routes>
               <Route path='/admin/login/*' element={<SignIn/>}/>
           </Routes>
          </>
        )
    }
}

export default LayoutAdmin