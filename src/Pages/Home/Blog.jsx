import React from "react";

const Blog = () => {
  return (
    <div className="bg-transparent h-full lg:h-screen flex justify-center items-center mt-[100px] lg:mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase">
            Welcome to Phone Garage
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Buy and Sell Second-Hand Mobiles with Ease
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            Whether you're looking to buy a reliable used phone or sell your old
            one, Phone Garage is the go-to platform for all your mobile needs.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-transparent border shadow-md rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/400x300"
                alt="Second-Hand Mobile"
              />
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Buy Mobiles
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Browse a wide range of second-hand mobiles, all in excellent
                  condition and at unbeatable prices.
                </p>
              </div>
            </div>

            <div className="bg-transparent border shadow-md rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/400x300"
                alt="Sell Mobile"
              />
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Sell Your Mobile
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Get the best price for your old phone by listing it on our
                  platform. Selling has never been easier!
                </p>
              </div>
            </div>

            <div className="bg-transparent border shadow-md rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/400x300"
                alt="Secure Transactions"
              />
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Secure Transactions
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Buy and sell with confidence knowing that all transactions on
                  Phone Garage are secure and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
