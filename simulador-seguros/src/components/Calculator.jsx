import React, { useState } from "react";
import { useSelector } from "react-redux";
import "animate.css";

const Calculator = () => {
  const product = useSelector((state) => state.productsPerUser);
  const [years, setYears] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setYears(e.target.value);
  };

  return (
    <div>
      {product.sku && (
        <div className="animate__animated animate__backInUp m-4 border-gray-200 border-[2px] border-solid rounded-md">
          <div className="my-6 text-center">
            <h3 className="font-semibold text-2xl">{product?.name}</h3>
            <p>{product?.sku}</p>
          </div>

          <div>
            <div className="flex justify-end flex-col lg:flex-row m-4">
              <p className="mr-16">signup_fee</p>
              <div className="flex lg:w-60 bg-gray-200 border-[1px] border-solid border-gray-300 rounded-md">
                <p className="py-1 px-2 border-r-[1px] border-solid border-gray-300">
                  UF
                </p>
                <span className="py-1 px-2">{product.costs?.signup_fee}</span>
              </div>
            </div>
            <div className="flex justify-end flex-col lg:flex-row m-4">
              <p className="mr-16">monthly</p>
              <div className="flex lg:w-60 bg-gray-200 border-[1px] border-solid border-gray-300 rounded-md">
                <p className="py-1 px-2 border-r-[1px] border-solid border-gray-300">
                  UF
                </p>
                <span className="py-1 px-2">{product.costs?.monthly}</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="m-4 flex justify-between flex-col lg:flex-row">
              <p>Years to simulate</p>
              <input
                className="lg:w-60 py-1 px-2 border-[1px] border-solid border-gray-300 rounded-md focus:outline-none resize-none"
                onChange={(e) => handleChange(e)}
                type="number"
              ></input>
            </div>
            {years < 0 && (
              <p className="text-red-600 m-4 text-right">
                Only positive numbers
              </p>
            )}
            <div className="p-4 flex justify-between flex-col lg:flex-row bg-yellow-200 rounded-b-md">
              <h4 className="font-semibold">Total cost</h4>
              <p className="lg:w-60 h-8 py-1 px-2 border-[1px] border-solid border-gray-300 bg-white rounded-md">
                {years > 0 &&
                  new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    (
                      years * 12 * product?.costs.monthly +
                      product.costs?.signup_fee
                    ).toFixed(2)
                  )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
