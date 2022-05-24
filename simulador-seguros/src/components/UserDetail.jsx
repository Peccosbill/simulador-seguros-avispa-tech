import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "animate.css";
import { getProductsPerUser } from "../redux/actions";

const UserDetail = () => {
  const detailUser = useSelector((state) => state.detailUser);
  const dispatch = useDispatch();

  return (
    <div>
      {detailUser.tax_ref && (
        <div className="animate__animated animate__backInUp m-4 border-gray-200 border-[2px] border-solid rounded-md">
          <div className="flex flex-col items-center justify-center my-6">
            <h3 className="font-semibold text-2xl">{detailUser.name}</h3>
            <p>{detailUser.address}</p>
          </div>
          <div className="my-4 p-4">
            <p>RUT</p>
            <p className="p-1 bg-gray-200 border-gray-300 border-solid border-[1px] rounded-md">
              {detailUser.tax_ref}
            </p>
          </div>
          <div>
            <h4 className="bg-yellow-200 py-2 px-4 font-semibold">Contracted insurance</h4>
            {detailUser.products.length > 0 ? detailUser.products?.map((product, i) => (
              <button
                key={i}
                onClick={() => dispatch(getProductsPerUser(detailUser.id, i))}
                className="flex flex-col w-full p-4 border-gray-200 border-y-[1px] border-solid hover:bg-blue-400 hover:text-white ease-in duration-100"
              >
                <h5>{product.sku}</h5>
                <p className="font-bold">{product.name}</p>
              </button>
            )) : <p className="p-4">You haven't contracted insurance yet</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
