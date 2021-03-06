import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

function Step1() {
    const router = useRouter()
    const goToHome = () => {
        router.push('/')
    }
    const goToStep2 = () => {
        router.push('/Become_a_Host/Step2')
    }
    return (
        <div className="flex h-screen">
            <div className="relative  flex-1 w-0 hidden lg:block  bg-gradient-to-br from-secondary to-[#AC7274] opacity-55 h-full justify-center ">
                <div className="items-start pl-8 pt-4 ">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
                <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">What kind of place <br></br> will you host?</div>
            </div>

            <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-1 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="space-y-5 pt-20">
                    <button type="button" className="text-secondary w-full rounded-full bg-white border border-gray-400 hover:bg-gray-80 focus:ring-4 focus:ring-gray-200 font-medium text-lg px-5 py-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <div className="flex justify-between" >
                            <p className="font-bold text-xl space-between">Home</p>
                            <Image className="rounded items-end justify-end" src="/House.jpg" height="35" width="35" alt="House image" />
                        </div>
                    </button>

                    <button type="button" className="text-secondary  w-full  rounded-full   bg-white border border-gray-400  hover:bg-gray-80 focus:ring-4 focus:ring-gray-200 font-medium  text-lg px-5 py-4  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <div className="flex justify-between" >
                            <p className="font-bold text-xl space-between">Vacation Home</p>
                            <Image className="rounded items-end justify-end" src="/Apartment.jpg" height="35" width="35" alt="House image" />
                        </div>
                    </button>

                    <button type="button" className="text-secondary  w-full  rounded-full   bg-white border border-gray-400  hover:bg-gray-80 focus:ring-4 focus:ring-gray-200 font-medium  text-lg px-5 py-4  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <div className="flex justify-between" >
                            <p className="font-bold text-xl space-between">Cottage</p>
                            <Image className="rounded items-end justify-end" src="/PrivateRoom.jpg" height="35" width="35" alt="House image" />
                        </div>
                    </button>

                    <button type="button" className="text-secondary  w-full rounded-full   bg-white border border-gray-400  hover:bg-gray-80 focus:ring-4 focus:ring-gray-200 font-medium  text-lg px-5 py-4  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <div className="flex justify-between" >
                            <p className="font-bold text-xl space-between">Apartment</p>
                            <Image className="rounded items-end justify-end" src="/HotelRoom.jpg" height="35" width="35" alt="House image" />
                        </div>
                    </button>

                </div>

                <div className="flex pt-0 pb-7 justify-between mr-5">
                    <button onClick={goToHome} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button onClick={goToStep2} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step1