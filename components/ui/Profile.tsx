import React from 'react'
import Image from "next/image";


const Profile = () => {
  return (
        <>
            
<div className="flex items-center gap-6 tinyMobile:text-[0.9rem] mobile:text-[0.9rem] tinyMobile:items-center mobile:items-center">
    {/* <img className="w-24 h-24 rounded-full" src="/images/erick3.png" alt="Jese image" /> */}
    <div className='w-36 h-28'>
            <Image
            className='rounded-full'
             src="/images/profilePic3.jpeg" alt='Profile Picture' layout="responsive" width={300} height={300}/>

    </div>

    <div className="flex flex-col w-full leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse ">
            <span className="text-xl tinyMobile:text-[1rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-semibold ">Erick Bárcena</span>
            {/* <span className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] tinyMobile:hidden mobile:hidden mobileBig:text-[1.05rem] font-normal">11:46</span> */}
        </div>
        <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[1.05rem] font-normal py-2"> That&apos;s awesome. I think our users will really appreciate.</p>
        {/* <span className="text-lg font-normal ">Delivered</span> */}
    </div>
</div>

        </>
    )
}

export default Profile