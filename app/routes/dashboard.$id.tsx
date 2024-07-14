
//localhost:3000/dashboard/1

import { useParams } from "@remix-run/react"

const DashboardId = () => {
    const {id}=useParams();
  return (
    <h1>Hell from  id {id}</h1>
  )
}

export default DashboardId