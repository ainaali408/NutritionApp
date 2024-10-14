import React from "react";

function FrontPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="w-1/2  p-4">
            <img
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
              src="https://www.edamam.com/assets/img/v.2.0/home_page_image_4.png"
              alt=""
            />{" "}
          </div>

          <div className="w-1/2 p-4"><h1 className="text-slate-500	font-bold text-lg ">Food Recipe Lookup</h1>
          <span className="text-slate-800	">Get Free access to 120,000 nutrition base unique recipes.</span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-1/2  p-4 mt-20 ml-auto">
          <h1 className="text-slate-500	font-bold text-lg ">Recipe Search
</h1>
         <span className="text-slate-800	">

          Search over 2.3 million recipes by diets, calories and nutrient ranges
         </span>
          </div>
          <div className="w-1/2  p-4 mt-20 ml-auto">
            <img
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
              src="https://www.edamam.com/assets/img/v.2.0/home_page_image_2.png"
              alt=""
            />{" "}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2  p-4 mt-20 ml-auto">
            <img
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
              src="https://www.edamam.com/assets/img/v.2.0/home_page_image_6.png"
              alt=""
            />
          </div>
          <div className="w-1/2  p-4 mt-20 ml-auto">
          <h1 className="text-slate-500	font-bold text-lg ">Nutrition Analysis
</h1>
<span className="text-slate-800	">

          Copy/paste any food recipe and learn its nutrition details in under a second
</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default FrontPage;