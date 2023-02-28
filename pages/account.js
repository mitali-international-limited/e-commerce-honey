import React from "react";

import Head from "next/head";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Account = () => {
  return (

    <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-primary mt-24">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-15 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-3xl">
          {/* Sign in section */}
          <div className="w-full p-5">
            <div className="text-left font-bold">
              <span className="text-secondary">Hony</span>Hut
            </div>
            <div className="py-8">
              <h2 className="text-3xl font-bold text-secondary mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-secondary inline-block mb-2"></div>
              {/* social login section */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-secondary rounded-full p-3 mx-2"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-secondary rounded-full p-3 mx-2"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-secondary rounded-full p-3 mx-2"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="my-3">or use your email for log in</p>
              <div className="flex flex-col items-center">
                <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-primary outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-primary outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-3/5 mb-5">
                  <label className="flex items-center text-sm mt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-2 mb-1"
                    />
                    Remember me
                  </label>
                  <Link
                    href="/forgotPass"
                    className="text-sm mt-1 cursor-pointer text-secondary"
                  >
                    Forgot your Password?
                  </Link>
                </div>

                <a
                  href="/"
                  className=" border-2 border-secondary rounded-full px-12 py-2 inline-block font-semibold hover:bg-secondary hover:text-white"
                >
                  Sign In
                </a>
                <div className=" flex ">
                  <p className="ml-2 py-4">
                    Don't you have account yet?
                    <Link
                      href="/signup"
                      className=" ml-2 px-4 py-4 text-secondary font-semibold"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* sign up section */}
          {/* <div className="w-2/5 bg-secondary text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-primary mt-24">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-15 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-3xl">
            {/* Sign in section */}
            <div className="w-full p-5">
              <div className="text-left font-bold">
                <span className="text-secondary">Hony</span>Hut
              </div>
              <div className="py-8">
                <h2 className="text-3xl font-bold text-secondary mb-2">
                  Sign in to Account
                </h2>
                <div className="border-2 w-10 border-secondary inline-block mb-2"></div>
                {/* social login section */}
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-secondary rounded-full p-3 mx-2"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-secondary rounded-full p-3 mx-2"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-secondary rounded-full p-3 mx-2"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                <p className="my-3">or use your email for log in</p>
                <div className="flex flex-col items-center">
                  <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-primary outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-primary w-3/5 p-2 flex items-center mb-3 rounded">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-primary outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-3/5 mb-5">
                    <label className="flex items-center text-sm mt-1 cursor-pointer">
                      <input
                        type="checkbox"
                        name="remember"
                        className="mr-2 mb-1"
                      />
                      Remember me
                    </label>
                    <Link
                      href="/forgotPass"
                      className="text-sm mt-1 cursor-pointer text-secondary"
                    >
                      Forgot your Password?
                    </Link>
                  </div>

                  <a
                    href="/"
                    className=" border-2 border-secondary rounded-full px-12 py-2 inline-block font-semibold hover:bg-secondary hover:text-white"
                  >
                    Sign In
                  </a>
                  <div className=" flex ">
                    <p className="ml-2 py-4">
                      Don't you have account yet?
                      <Link
                        href="/signup"
                        className=" ml-2 px-4 py-4 text-secondary font-semibold"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* sign up section */}
            {/* <div className="w-2/5 bg-secondary text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">

            <h2 className="text-3xl font-bold mb-2"> Hello</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-secondary"
            >
              Sign Up
            </a>
          </div> */}

        </div>
      </main>
    </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default Account;
