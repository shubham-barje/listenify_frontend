import React from 'react';
import { Icon } from '@iconify/react';
import heroMaterial from '../assets/images/heroMaterial.mp4';
import { useNavigate  } from 'react-router-dom';
const HeroSection = () => {
    const navigate = useNavigate();

    const tryit=()=>{
        navigate("/home")
    }
    return (
        <div className="bg-black text-white w-full h-full ">
            <div className='p-4 flex justify-between items-end bg-gray-900'>
                <div className='space-x-5 flex text-2xl items-center px-3 font-bold cursor-pointer'><Icon icon="solar:headphones-round-sound-bold" height={50} width={50} />Listenify</div>
                <div className="bg-green-400 text-black p-2 px-10 rounded-full cursor-pointer font-semibold hover:bg-green-200"onClick={(e)=>{
                    e.preventDefault()
                    tryit()
                }}>Try It </div>

            </div>
            <div className='overflow-hidden flex justify-evenly items-end pb-14'>
                <div className='py-14 '>
                    <h1 className="  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome,to Listenify</h1>
                    <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The ultimate destination for audiobook lovers.
                        Dive into a world of captivating stories</p>
                </div>
                <div className='pt-10 pb-10'>
                    
                    <video className='rounded-full border-4 border-gray-200 border-opacity-30 hover:border-gray-500 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  ' autoPlay loop muted height={340} width={340} >
                        <source src={heroMaterial} type="video/mp4"></source>
                    </video>
                    
                </div>



            </div>

            <div className='w-full bg-white text-black pt-6  '>

                <div className=' text-center p-1 font-semibold text-2xl'>Why Listenify?</div>
                <div className=" overflow-hidden space-x-6 shadow-lg  pt-10 flex justify-evenly items-center m-5 ">
                    <div className='border-2 border-gray-400 rounded-2xl p-4'>
                        <Icon icon="icon-park-solid:play" className='text-center' width={80} height={80} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-400 rounded-2xl p-4'>
                        <Icon icon="material-symbols:playlist-add-check" className='text-center' width={80} height={80} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-400 rounded-2xl p-4'>
                        <Icon icon="zondicons:heart" className='text-center' width={80} height={80} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-400 rounded-2xl p-4 '>
                        <Icon icon="mdi:thunder-circle" className='text-center' width={80} height={80} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>



                </div>

            </div>

            <div className='w-full bg-black'>

            <footer className="bg-black text-white text-center p-4">
            <p>© {new Date().getFullYear()} Listnify. All rights reserved.</p>
        </footer>
hi
            </div>


        </div>




    )
}
export default HeroSection;