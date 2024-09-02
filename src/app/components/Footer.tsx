"use client";

import React from 'react';
import Image from 'next/image';
import myImage from '../../../public/my.jpeg';


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe to our portfolio for update.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Home
              </a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Who We Are
              </a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Retail & E-Commerce
              </a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Information Technology
              </a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Finance & Insurance
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
        
        <div className="flex items-center justify-between">
          <a href="#">
          <Image className="w-auto h-7" src={myImage} alt="Logo" width={100} height={28} />
          </a>
          
          <div className="flex -mx-2">
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.524ZM14.783 14.006C14.187 14.006 13.674 13.481 13.674 12.834C13.674 12.189 14.187 11.663 14.783 11.663C15.38 11.663 15.893 12.189 15.893 12.834C15.893 13.481 15.38 14.006 14.783 14.006ZM9.173 14.006C8.57703 14.006 8.06403 13.481 8.06403 12.834C8.06403 12.189 8.57703 11.663 9.173 11.663C9.77 11.663 10.283 12.189 10.283 12.834C10.283 13.481 9.77 14.006 9.173 14.006Z"/>
              </svg>
            </a>

            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.553 22V12.794H16.734L17.201 9.18H13.553V6.711C13.553 5.622 13.867 4.897 15.432 4.897H17.339V1.712C16.622 1.637 15.9 1.599 15.178 1.597C12.377 1.597 10.534 3.208 10.534 6.33V9.18H7.352V12.794H10.534V22H13.553Z"/>
              </svg>
            </a>

            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 16.4181 4.86599 20.1596 8.83992 21.5C9.33993 21.595 9.51 21.2895 9.51 21.026V19.251C6.73492 19.926 6.18991 17.9669 6.18991 17.9669C5.74688 16.7907 5.15986 16.4877 5.15986 16.4877C4.32984 15.8947 5.22386 15.9067 5.22386 15.9067C6.14288 15.9747 6.6309 16.8498 6.6309 16.8498C7.42593 18.275 8.74395 17.8669 9.23696 17.6119C9.33196 17.0328 9.57797 16.6397 9.85099 16.4287C7.63191 16.2167 5.34183 15.3835 5.34183 11.5243C5.34183 10.3782 5.73385 9.463 6.38988 8.7508C6.28088 8.5378 5.93487 7.4906 6.49488 6.25839C6.49488 6.25839 7.35691 6.02039 9.49 7.37162C10.308 7.12661 11.202 7.00461 12.096 7.00161C12.99 7.00461 13.885 7.12661 14.704 7.37162C16.8371 6.02039 17.6991 6.25839 17.6991 6.25839C18.2591 7.4906 17.9121 8.5378 17.8031 8.7508C18.4591 9.463 18.8511 10.3782 18.8511 11.5243C18.8511 15.3945 16.547 16.2137 14.3169 16.4287C14.658 16.7148 14.965 17.3108 14.965 18.2229V21.015C14.965 21.2825 15.131 21.596 15.645 21.5C19.6179 20.1596 22.484 16.4181 22.484 12C22.484 6.47715 18.0069 2 12 2Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
