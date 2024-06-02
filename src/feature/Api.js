import React, { useState } from 'react'
import axios from 'axios'



const Api = () => {
  const [image,setImage] = useState([]);

const handleImg= async()=>{
  try {
    const Product = await axios.get("https://picsum.photos/v2/list");
    const data = Product.data;
  setImage(data);

  }
 catch(error){
  console.log('Error');
 }
}
  return (
    <div>
      <button className='bg-green-300 m-6 px-6 py-4' onClick={handleImg}>Get Images</button>
    <div>
{image.map((element,i)=>{
return  <img key={i} src={element.download_url} alt='data' height={300} width={300} className='rounded-md inline-block m-5'/>

})};
    </div>
    </div>
  )
}

export default Api
