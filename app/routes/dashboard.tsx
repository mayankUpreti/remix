import { Outlet } from '@remix-run/react'
import { useEffect } from 'react'


const Dashboard = () => {
 
  return (
    <div>
        <h1>Heloo from dashbaord layout</h1>
        <Outlet/>
    </div>
  )
}

export default Dashboard