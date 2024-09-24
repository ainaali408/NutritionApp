import React,{useState,useEffect} from 'react'

function RecipeImgGallery() {
    const images = [
        'https://as1.ftcdn.net/v2/jpg/02/48/92/96/1000_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg',
        'https://as1.ftcdn.net/v2/jpg/02/14/59/76/1000_F_214597666_odIOod5vprmRQzloYZSZ3Vzexb2Ixfgb.jpg',
        'https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://www.foodiesfeed.com/wp-content/uploads/2023/09/healthy-food.jpg',
        'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/01/foods_to_eat_to_lose_weight.jpeg'
      ];
    
      // State to keep track of the current image index
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      // Function to change image
      const changeImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
      useEffect(() => {
        const interval = setInterval(changeImage, 3000); // 3000 ms = 3 seconds
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, []);
    
  return (
    <div className="w-full h-64">
    {/* Image Display */}
  
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"

      />
    </div>

   
  )
}

export default RecipeImgGallery