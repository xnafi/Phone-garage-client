import React from "react";

const About = () => {
  return (
    <div className="bg-transparent h-full md:h-screen grid place-items-center mt-[100px] max-w-7xl md:px-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Phone Garage
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Your Trusted Partner for Second-Hand Mobile Deals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            At Phone Garage, we are dedicated to providing a platform where you
            can buy and sell second-hand mobile phones with confidence and ease.
            Our mission is to make mobile trading accessible, affordable, and
            secure for everyone.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-lg leading-6 font-medium text-white">
                Our Story
              </h3>
              <p className="mt-4 text-base text-white">
                Phone Garage was founded with the goal of bridging the gap
                between those who want to upgrade their phones and those who are
                looking for budget-friendly options. We believe that everyone
                should have access to quality mobile devices without breaking
                the bank. Over the years, we've grown into a trusted community
                of mobile enthusiasts, providing a safe and transparent platform
                for buying and selling.
              </p>
            </div>

            <div className="bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-lg leading-6 font-medium text-white">
                Why Choose Us?
              </h3>
              <ul className="mt-4 list-disc list-inside text-base text-white">
                <li>Wide selection of quality second-hand phones.</li>
                <li>Secure and easy-to-use platform for transactions.</li>
                <li>Competitive pricing and excellent customer support.</li>
                <li>Trusted by thousands of satisfied customers.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg leading-6 font-medium text-white">
            Join Our Community
          </h3>
          <p className="mt-4 text-base text-white">
            Whether you're looking to buy, sell, or simply explore, Phone Garage
            welcomes you. Join us and experience a new way of mobile trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
