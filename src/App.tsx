// import React from 'react'
import Layout from './Layout'
import LoginOne from './components/Login-SignUp/LoginOne'
import LoginTwo from './components/Login-SignUp/LoginTwo'
import FinishSigninOne from './components/FinishSigningUp/FinishSigninOne'
import FinishSigningTwo from './components/FinishSigningUp/FinishSigningTwo'
import FinishSigningThree from './components/FinishSigningUp/FinishSigningThree'
import CreateProfileOne from './components/Creat-Profile/CreateProfileOne'
import CreateProfileTwo from './components/Creat-Profile/CreateProfileTwo'
import CreatProfileThree from './components/Creat-Profile/CreatProfileThree'
import CreateProfileFour from './components/Creat-Profile/CreateProfileFour'
import CreateProfileFive from './components/Creat-Profile/CreateProfileFive'
import CreateProfileSix from './components/Creat-Profile/CreateProfileSix'
import LoggedinMain from './components/Home-LoggedIn/LoggedinMain'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
        <div>
      
         {/* <Layout />  */}
           {/* <LoginOne /> */}
           {/* <LoginTwo /> */}
           {/* <FinishSigninOne /> */}
           {/* <FinishSigningTwo /> */}
           {/* <FinishSigningThree /> */}
           {/* <CreateProfileOne /> */}
           {/* <CreateProfileTwo /> */}
           {/* <CreatProfileThree /> */}
           {/* <CreateProfileFour /> */}
           {/* <CreateProfileFive /> */}
           {/* <CreateProfileSix /> */}
           {/* <LoggedinMain /> */}
           {/* <DropdownLogedin /> */}

           {/* <Link to=""> </Link> */}
           {/* import { Link } from "react-router-dom"; */}
               
               <BrowserRouter>
                         <Routes>
                              <Route path='/' element={<Layout />} />
                              <Route path='/signup' element={<LoginOne />} />
                              <Route path='/login' element={<LoginTwo />} />
                              <Route path='/finish-signup-one' element={<FinishSigninOne />} />
                              <Route path='/finish-signup-two' element={<FinishSigningTwo />} />
                              <Route path='/finish-signup-three' element={<FinishSigningThree />} />
                              <Route path='/create-profile-one' element={<CreateProfileOne />} />
                              <Route path='/create-profile-two' element={<CreateProfileTwo />} />
                              <Route path='/create-profile-three' element={<CreatProfileThree />} />
                              <Route path='/create-profile-four' element={<CreateProfileFour />} />
                              <Route path='/create-profile-five' element={<CreateProfileFive />} />
                              <Route path='/create-profile-six' element={<CreateProfileSix />} />
                              <Route path='/loggedin' element={<LoggedinMain />} />
                              
                         </Routes>
               </BrowserRouter>


          </div>

  )
}

export default App