import React from 'react'

const Footer = () => {
    return (
        <div className='px-10 flex w-full flex-wrap justify-around mt-20 mb-20'>
            <div className='rounded-2xl gap-8 border flex flex-col p-5 w-[300px]'>
                <a href='#'>Privacy policy</a>
                <a href='#'>Work with us</a>
                <a href='#'>Live Events</a>
                <a href='#'>Media coverage</a>
                <a href='#'>Connect with us</a>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col border rounded-3xl p-10 items-center gap-8'>
                    <input type="text" className='h-10 rounded-xl w-[400px] border px-3' placeholder='Enter your mail id' />
                    <button className='bg-[#0f0f0f] text-white font-bold px-5 h-[40px] rounded-md w-[300px]'>Subscribe to live events</button>

                </div>
                <div >
                    <button className='bg-[#b9b9b9] text-[black] mt-20 px-5 h-[40px] rounded-md w-[300px]'>Go back to main page</button>

                </div>
            </div>
        </div>
    )
}

export default Footer