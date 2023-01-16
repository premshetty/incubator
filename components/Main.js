import React from 'react'
import classes from './style.module.css'
const Card = ({ img, heading, para, linkedin }) => {
    return <div className='flex flex-col items-center text-center min-w-[300px]'>
        <img src={img ?? "/place.svg"} className='h-40' alt="" />
        <a href={linkedin} className='font-[500] text-2xl text-[#0000007a]'>{heading ?? " Access to VC"}</a>
        <p className='text-[black] text-md'>{para ?? "Get Access to angels and VCs at incubator"}</p>
    </div>
}
const Main = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2  '>

                <div style={{ backgroundImage: `url('/banner.jpg')` }} className='flex flex-col gap-8 px-3 md:px-10 py-10 md:py-0 md:h-[90vh] col-span-2'>
                    <h1 className='text-[72px] font-bold md:w-[40%]'>Main banner with image Leadership</h1>
                    <p className='text-2xl font-[400] md:w-[40%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className='bg-[#0f0f0f] text-white font-bold px-5 h-[40px] rounded-md w-[150px]'>Button</button>
                </div>

            </div>
            <div className='flex flex-col items-center gap-3 mt-10 px-3 md:px-10'>

                <h1 id='perks' className='text-[42px] font-bold mt-12'>Perks and Benefits at incubator </h1>
                <div className={`flex  w-full justify-around ${classes.cardcontainer}  gap-20  overflow-x-scroll`}>
                    <Card img="/money.svg" heading='Access to VC' para='Get Access to angels and VCs at incubator' />
                    <Card img="/indurstry.svg" heading='Access to VC' para='Get Access to angels and VCs at incubator' />
                    <Card img="/coworking.svg" heading='Access to VC' para='Get Access to angels and VCs at incubator' />
                </div>
                <h1 id='advisory' className='text-[42px] font-bold mt-10'>Advisory at Incubator</h1>
                <div className={`flex  w-full justify-around ${classes.cardcontainer}  gap-20 overflow-x-scroll`}>
                    <Card img="/avatar.svg" heading='Davesh Manocha' linkedin='https://www.linkedin.com/in/daveshmanocha/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Mansi Agarwal' linkedin='https://www.linkedin.com/in/dr-mansi-aggarwal-527a8322/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Nav Khosla' linkedin='https://www.linkedin.com/in/navjeewan-khosla-9184191/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Mohit Khullar' linkedin='https://www.linkedin.com/in/mohitkhullar1/' para=' INSEAD-VOH-MEDDO' />
                </div>
                <h1 id='mentor' className='text-[42px] font-bold mt-10'>Mentors at Incubator</h1>
                <div className={`flex  w-full justify-around ${classes.cardcontainer}  gap-20 overflow-x-scroll`}>
                    <Card img="/avatar.svg" heading='Vinayak Burman' linkedin='https://www.linkedin.com/in/vinayak-burman-91ab9419/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Abhay Vohra' linkedin='https://www.linkedin.com/in/abhay-vohra-63b98971/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Rohit MA' linkedin='https://www.linkedin.com/in/rohitoncloud9/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Manu Bhandari' linkedin='https://www.linkedin.com/in/manubhandari/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Sauarv Chawla' linkedin='https://www.linkedin.com/in/sauravchawlaokaygo/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Tarun Agrawal' linkedin='https://www.linkedin.com/in/aggarwaltarun/' para=' INSEAD-VOH-MEDDO' />

                </div>
                <h1 id='indurstry' className='text-[42px] font-bold mt-10'>Indurstry Partners at Incubator</h1>
                <div className={`flex  w-full justify-around ${classes.cardcontainer}  gap-20 overflow-x-scroll`}>
                    <Card img="/avatar.svg" heading='Prof. Stephen Chick' linkedin='https://www.linkedin.com/in/stephen-chick-34b168/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Shashi Reddy' linkedin='https://www.linkedin.com/in/sashireddi/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Visalakshmi Chandmouli' linkedin='https://www.linkedin.com/in/visalakshi-chandramouli-b8501819/' para=' INSEAD-VOH-MEDDO' />
                    <Card img="/avatar.svg" heading='Dr. Naveen Nishchal' linkedin='https://www.linkedin.com/in/navnishchal/' para=' INSEAD-VOH-MEDDO' />

                </div>
                <hr className='h-[4px] px-10 bg-black w-full ' />
                <h1 id='about' className='text-[42px] font-bold mt-10'>About Incubator</h1>
                <p className='w-[80%] text-center text-xl text-[#000000be]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button className='bg-[#0f0f0f] text-white font-bold px-5 h-[40px] rounded-md w-[150px]'>Download pdf</button>
                <h1 id='howitworks' className='text-[42px] font-bold mt-10'>How it works</h1>
                <div className='flex flex-col justify-center md:flex-row items-center  md:justify-around w-full'>
                    <div>
                        <img src="/form.svg" className='h-[100px]' alt="" />
                        <p>Application (Fill form)</p>
                    </div>
                    <div className='flex gap-4 flex-col md:flex-row items-center'><p className='md:h-[2px] h-[50px] w-[2px]  md:w-[50px] bg-[black]'></p><p className='text-xl rotate-90 md:rotate-0 font-bold '>{">"}</p> </div>
                    <div>
                        <img src="/review.svg" className='h-[100px]' alt="" />
                        <p>Review and Selection</p>
                    </div>
                    <div className='flex gap-4 flex-col md:flex-row items-center'><p className='md:h-[2px] h-[50px] w-[2px]  md:w-[50px] bg-[black]'></p><p className='text-xl rotate-90 md:rotate-0 font-bold '>{">"}</p> </div>
                    <div>
                        <img src="/meetings.svg" className='h-[100px]' alt="" />
                        <p>Meeting with domain expert</p>
                    </div>
                    <div className='flex gap-4 flex-col md:flex-row items-center'><p className='md:h-[2px] h-[50px] w-[2px]  md:w-[50px] bg-[black]'></p><p className='text-xl rotate-90 md:rotate-0 font-bold '>{">"}</p> </div>
                    <div>
                        <img src="/calender.svg" className='h-[100px]' alt="" />
                        <p>Main event in April 2023</p>
                    </div>
                    <div className='flex gap-4 flex-col md:flex-row items-center'><p className='md:h-[2px] h-[50px] w-[2px]  md:w-[50px] bg-[black]'></p><p className='text-xl rotate-90 md:rotate-0 font-bold '>{">"}</p> </div>
                    <div>
                        <img src="/case.svg" className='h-[100px]' alt="" />
                        <p>Winner onboarded</p>
                    </div>
                </div>
                <h1 id='apply' className='text-[42px] font-bold mt-10'>Apply Now</h1>
                <button className='bg-[#0f0f0f] text-white font-bold px-5 h-[40px] rounded-md w-[150px]'>Fill a form</button>
                <p className='text-2xl'>Fill a form and apply  at incubator</p>
                <div className='flex flex-wrap gap-10 justify-center  w-full mt-10'>
                    <img src="/linkedin.png" className='h-[50px]' alt="" />
                    <img src="/yt.png" className='h-[50px]' alt="" />
                    <img src="/fb.png" className='h-[50px]' alt="" />
                    <img src="/insta.png" className='h-[50px]' alt="" />
                    <img src="/whatsapp.png" className='h-[50px]' alt="" />
                </div>
            </div>
        </>
    )
}

export default Main