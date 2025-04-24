import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProjects from './Components/ListProjects/ListProjects'
import CreateProject from './Components/CreateProject_1/CreateProject'

import UpdateProject from './Components/UpdateProject/UpdateProject'
import ProjectDetails from './Components/ProjectDetails/ProjectDetails'

function App() {
  return (
    <div>Task_1

{/* <MainPage/> */}
{/* <CreateProject/> */}
{/* <ProjectDetails/> */}
{/* <UpdateProject/> */}
<BrowserRouter>
      <Routes>
      <Route path='/' element={<ListProjects />} />
        <Route path='/createproject' element={<CreateProject/>}/> 
        <Route  path='/projectdetails'  element={<ProjectDetails  />}/>
       
        <Route />
        
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App