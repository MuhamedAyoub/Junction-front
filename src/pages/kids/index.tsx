
import React, { useState } from 'react';
import Image from 'next/image';
import text from '/public/images/Kids.svg';
import scratch2 from '/public/images/scratch2.svg';
import Layout from './Layout';
import item1 from '/public/images/item1.svg';
import item2 from '/public/images/item2.svg';
import item3 from '/public/images/item3.svg';
import vd from '/public/images/vd.svg'
import play from '/public/images/play.svg'

const Kids = () => {
  const videoData = [
    {
      id: 1,
      videoUrl: '../../../public/video.mp4',
      title: 'Video 1',
      description: 'Description for Video 1',
    },
    {
      id: 2,
      videoUrl: '../../../public/video.mp4',
      title: 'Video 2',
      description: 'Description for Video 2',
    },
    {
      id: 3,
      videoUrl: '../../../public/video.mp4',
      title: 'Video 3',
      description: 'Description for Video 3',
    },
    {
      id: 4,
      videoUrl: '../../../public/video.mp4',
      title: 'Video 4',
      description: 'Description for Video 4',
    },
  ];

  // Create an array of isHovered states, one for each card
  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(videoData.length).fill(false)
  );

  // Handle mouse enter event for a specific card
  const handleMouseEnter = (index:any) => {
    const updatedIsHoveredArray = [...isHoveredArray];
    updatedIsHoveredArray[index] = true;
    setIsHoveredArray(updatedIsHoveredArray);
  };

  // Handle mouse leave event for a specific card
  const handleMouseLeave = (index:any) => {
    const updatedIsHoveredArray = [...isHoveredArray];
    updatedIsHoveredArray[index] = false;
    setIsHoveredArray(updatedIsHoveredArray);
  };

  

  return (
    <>
        <Layout>
  
     <Image src={text} alt='text' className='ml-4 relative' >
  
     </Image>
     <div className='relative w-full h-[500px] my-4 ' >
   
     <div className='w-[80%]  max-w-[700px] mx-auto  md:h-[300px] h-[200px] drop-shadow shadow-xl rounded-2xl'>
  <div className='w-1/2 absolute inset-0 h-full overflow-hidden'>
    <div className='scratch1 rounded-xl'></div>
  </div>
  <div className='w-1/2 absolute right-0 h-full flex flex-col justify-start py-4 gap-12 items-center px-2'>
   <div>
   <Image src={scratch2} alt='e' className='w-[80%]' />
    <p className='my-2' >Enjoy this game in order to improve your skills Enjoy this game in order to improve your skills Enjoy this game in order to improve your skills</p>
   </div>
    <button type="submit" className="text-white   bg-pink-300 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-3xl text-sm px-8 py-2 ">JOIN</button>
  </div>
</div>





     </div>

        <div className='my-4' >
          <p className='ml-4 text-[#073946] font-medium text-2xl ' >Kids Should Have Fun</p>

          <div className='flex justify-between items-center flex-wrap px-4'>
            {videoData.map((video, i) => (
              <div
                className='w-[300px] h-[250px] bg-gray-200 shadow-xl rounded-xl'
             
                key={video.id}
              >
                {/* <Image
                 src={vd}
          
                  className='w-full '
                alt='dd'
                >

                </Image> */}
                <div className='bg-yellow-500 w-full h-[150px] flex justify-center items-center' >
                <Image src={play}  alt='aa' />
                </div>

              
                {/* <video
               
                  autoPlay={isHoveredArray[i]}
                  loop={isHoveredArray[i]}
                  muted={isHoveredArray[i]}
                  controls={!isHoveredArray[i]}
                  className='w-full h-[70%]'
                  onMouseEnter={() => handleMouseEnter(i)} // Pass the index
                  onMouseLeave={() => handleMouseLeave(i)} // Pass the index
                >
                 <source  src='../../../public/vlc-record-2023-09-30-21h26m25s-invideo-ai-1080 Revolutionizing Healthcare_ A Comprehens 2023-09-30.mp4-.mp4' type='video/mp4' />
                </video> */}
                <div className='flex flex-col items-start justify-center gap-4 p-4' >
                <h2 className='text-xl font-semibold' >{video.title}</h2>
                <p>{video.description}</p>
                </div>
            
              </div>
            ))}
          </div>

          <div></div>
        </div>
      </Layout>
    </>
  );
};

export default Kids;
