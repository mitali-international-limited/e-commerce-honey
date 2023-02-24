import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline, MdOutlinePeople } from "react-icons/md";

const signup = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-primary mt-24">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-15 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/5 max-w-3xl">
          {/* Sign in section */}
          <div className="w-full p-5">
            <div className="text-left font-bold">
              <span className="text-secondary">Hony</span>Hut
            </div>
            <div className="py-8">
              <h2 className="text-3xl font-bold text-secondary mb-2">
                Create an Account
              </h2>
              <div className="border-2 w-10 border-secondary inline-block mb-2"></div>
              {/* social login section */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-secondary rounded-full p-3 mx-2"
                >
                  <FaFacebookF className="text-md" />
                </a>
                <a
                  href="#"
                  className="border-2 border-secondary rounded-full p-3 mx-2"
                >
                  <FaInstagram className="text-md" />
                </a>
                <a
                  href="#"
                  className="border-2 border-secondary rounded-full p-3 mx-2"
                >
                  <FaGoogle className="text-md" />
                </a>
              </div>
              <p className="my-3 items-center">or</p>
              <div className="flex flex-col items-center">
                <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded-lg">
                  <MdOutlinePeople className="text-gray-400 m-1" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-primary outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded-lg">
                  <FaRegEnvelope className="text-gray-400 m-1" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-primary outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded-lg">
                  <MdLockOutline className="text-gray-400 m-1" />
                  <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    className="bg-primary outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded-lg">
                  <MdLockOutline className="text-gray-400 m-1" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Repeat Password"
                    className="bg-primary outline-none text-sm flex-1"
                  />
                </div>
                <Link
                  href="#"
                  className=" border-2 border-secondary rounded-full px-12 py-2 inline-block font-semibold hover:bg-secondary hover:text-white"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default signup;
