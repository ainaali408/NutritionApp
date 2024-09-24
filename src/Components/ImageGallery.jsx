import React from 'react'
// https://as1.ftcdn.net/v2/jpg/02/48/92/96/1000_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg

function ImageGallery() {
  return (
    <div className=' pt-6'> 

    <div className="grid grid-cols-2  ">
    {/* Left Column */}
    <div className="col-span-1 p-3  border-blue-500 ">
      <img
        src="https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className=" border-2 border-gray-400 rounded-lg lg:w-[700px] lg:h-[400px] sm:w-[350px] sm:h-[270px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
      />
    </div>
  
    {/* Right Column */}
    <div className="col-span-1 grid p-2 grid-rows-2 ">
      <div className="row-span-1 ">
        <img
          src="https://www.foodiesfeed.com/wp-content/uploads/2023/09/healthy-food.jpg"
          alt=""
          className="border-2 border-gray-400 rounded-lg lg:w-[400px] lg:h-[200px] sm:w-[200px] sm:h-[133px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="row-span-1">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/48/92/96/1000_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg"
          alt=""
          className=" border-2 border-gray-400 rounded-lg  lg:w-[400px] lg:h-[200px] sm:w-[200px] sm:h-[133px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  </div>
  
    </div>
  
  
  )
}

export default ImageGallery