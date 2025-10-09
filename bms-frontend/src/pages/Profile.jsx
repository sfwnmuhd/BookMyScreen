import React, { act, useState } from 'react'
import { tabs } from '../utils/constants'
import {IoIosLogOut, IoMdAdd} from "react-icons/io"
import { FaEdit } from 'react-icons/fa'
import BookingHistory from '../components/profile/BookingHistory'

const Profile = () => {

    const [activeTab, setActiveTab] = useState("Profile")
  return (
    <>
      <div className='bg-[#e5e5e5]'>
        <div className='max-w-7xl mx-auto flex flex-wrap gap-6 py-2 text-sm font-medium'>
            {
                tabs.map((tab) => (
                    <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-1 cursor-pointer ${
                        activeTab === tab ? "text-[#f74565]" : "text-gray-600 hover:text-black"
                    }`}>
                        {tab}
                    </button>
                ))
            }
        </div>
      </div>

      <div className='min-h-screen py-10 px-4 bg-gray-100'>
            <div className='max-w-6xl mx-auto'>
                {/* Profile section */}
                {
                    activeTab === "Profile" && (
                        <>
                            {/* Headers */}
                            <div className='bg-gradient-to-r from-gray-800 to-[#f74565] rounded-t-md px6 py-6 flex items-center gap6 text-white'>
                                <div className='relative w-20 h-20 border-4 border-white rounded-full flex items-center justify-center bg-white text-gray-600'>
                                    <IoMdAdd size={24}/>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-2xl font-bold'>Hi, Safwan</h2>
                                    <small className='underline cursor-pointer'>
                                        <IoIosLogOut size={20} className='inline'/>
                                        Logout
                                    </small>
                                </div>
                            </div>

                            {/* Account Details  */}
                            <div className='bg-white px-6 py-6 rounded-b-md'>
                                <h3 className='text-lg font-semibold mb-4'>Account Details</h3>
                                <div className='mb-3 flex items-center justify-between'>
                                    <p className='text-sm font-normal'>Email Address</p>
                                    <div className='flex items-center gap-4 '>
                                        <p className='text-sm'>safwan@gmail.com</p>
                                        <span className='text-green-700 bg-green-100 px-1   py-0.5 '>verified</span>
                            
                                    </div>
                                    <FaEdit className='text-pink-700'/>
                                </div>
                                <div className='mb-3 flex items-center justify-between'>
                                    <p className='text-sm font-normal'>Mobile Number</p>
                                    <div className='flex items-center gap-4 '>
                                        <p className='text-sm'>+91-7605829781</p>
                                        <span className='text-green-700 bg-green-100 px-1   py-0.5 '>verified</span>
                            
                                    </div>
                                    <FaEdit className='text-pink-700 cursor-pointer'/>
                                </div>
                            </div>

                            {/* personal Details */}
                            <div className='bg-white p-6 mt-4 rounded-md'>
                                <h3 className='text-lg font-semibold mb-4'>Personal Details</h3>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='text-sm font-normal'>First Name</label>
                                        <input type="text" value="Safwan" readOnly 
                                            className='w-full mt-1 border border-gray-200 rounded-lg px-2 py-2'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-sm font-normal'>Last Name</label>
                                        <input type="text" value="P K" readOnly 
                                            className='w-full mt-1 border border-gray-200 rounded-lg px-2 py-2'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-sm font-normal'>Birthday(Optional)</label>
                                        <input type="Date" 
                                            className='w-full mt-1 border border-gray-200 rounded-lg px-2 py-2'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-sm font-normal'>Identity(Optional)</label>
                                        <div className='flex gap-2 mt-1'>
                                            <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                                                Woman
                                            </button>
                                            <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                                                Man
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className='text-sm font-normal'>Married?(Optional)</label>
                                        <div className='flex gap-2 mt-1'>
                                            <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                                                Yes
                                            </button>
                                            <button className={`px-4 py-1 border border-gray-200 rounded-lg bg-white`}>
                                                No
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

                {/* Booking Section */}
                {
                    activeTab === "Your Orders" && <BookingHistory/>
                }
            </div>
      </div>
    </>
  )
}

export default Profile
