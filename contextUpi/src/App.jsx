import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextprovider from './Context/UserContextProvider'





function App() {
 

  return (
   
     <UserContextprovider>
     <h1 >Hello react with mini Context Upi</h1>
   <Login/>
   <Profile/>
     </UserContextprovider>
  
  )
}

export default App
