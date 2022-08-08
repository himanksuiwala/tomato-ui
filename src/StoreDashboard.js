import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getStoreData } from './features/store/userSlice'
const StoreDashboard = () => {
   const store_data = useSelector(getStoreData);
   {store_data && console.log(store_data)}
  return (
    <div>StoreDashboard</div>
  )
}

export default StoreDashboard