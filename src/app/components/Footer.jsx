import {FaPhoneAlt ,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
import { IoMail  } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";

export default function Footer() {
  return (
    <>

    <div className="bg-gray-950 text-white w-full py-10">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-around gap-10 sm:gap-0">
        {/* Quick Link Section */}
        <div className="flex flex-col gap-4 ml-4 sm:ml-0">
          <h1 className="font-semibold text-2xl">Quick Link</h1>
          <div>
            <p className="mt-2">Home</p>
            <p className="mt-2">About Us</p>
            <p className="mt-2">Services</p>
            <p className="mt-2">FAQs</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4 ml-4 sm:ml-0">
          <h1 className="font-semibold text-2xl">Contact Us</h1>
          <div>
            <p className="flex gap-2 mt-2">
              <FaPhoneAlt className="mt-1" /> CALL Us: +91 96918 15989
            </p>
            <p className="flex gap-2 mt-3">
              <IoMail className="mt-1" /> Email: info@thesislogix.in
            </p>
          </div>
        </div>

        {/* Open Hours Section */}
        <div className="flex flex-col gap-4 ml-4 sm:ml-0">
          <h1 className="font-semibold text-2xl">Open Hours</h1>
          <div>
            <p>Mon-Sat: 8am - 5pm</p>
            <p className="mt-3">Sunday: CLOSED</p>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="flex flex-col gap-4 ml-4 sm:ml-0">
          <h1 className="font-semibold text-2xl">Stay Updated</h1>
          <p className="w-[19rem]">Subscribe to our newsletter for the latest updates and academic tips.</p>
          <div className="flex gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 text-black rounded-md w-full sm:w-auto"
            />
            <button className="border bg-gray-700 px-4 py-2 hover:bg-red-600 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-around items-center mt-10 gap-4 sm:gap-0">
        <p>2025 © All rights reserved by ThesisLogix</p>
        <p>Design & Develop By ****</p>
        <div className="flex gap-4 text-2xl">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
    </div>




    
    </>
  )
}
