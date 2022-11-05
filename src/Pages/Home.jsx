import React from 'react'
// import Cronos from '../Components/Elements/Cronos'
// import Cards from '../Components/Elements/Cards'
import Collection from '../Components/Elements/Collection'
// import Side from '../Components/Elements/Side'
import Sideb from '../Components/Utils/Sideb'



function Home() {
  return (
    <div className='home' py={8} px={4}>
         <Collection/>
         {/* <Cronos/> */}
        {/* <Side/> */}
        <Sideb/>
    </div>
  )
}

export default Home