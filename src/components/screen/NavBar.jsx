import React from 'react'

const NavBar = (props) => {
  const show=props.show;
  const setShow=props.setShow;
  return (
   <div >
      <div className='flex h-[40px] justify-between items-center px-10 mt-5'>
        <div className=''>
            <img src="./logo.svg" alt=""  className=' w-[200px]  flex items-center '/>
        </div>
        <div className=' flex  gap-7'>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Values</a>
          <a onClick={(e)=>props.setShow(!show)} href="">Contacts</a>
        </div>
    </div>
   </div>
  )
}

export default NavBar