import { PiClockCountdownBold } from "react-icons/pi";
import { useMyOrders } from "../../services/order/queries";
import Loading from "../Loading";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useState } from "react";

const Orders = () => {
  const myOrders = useMyOrders();
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const toggleExpand = (orderId: string) => {
    setExpandedOrder((prev) => (prev === orderId ? null : orderId));
  };
  return (
    <section className="col-span-2 p-8 border border-gray-600 rounded bg-gray-500/70">
      <h2 className="mb-4 font-bold text-2xl text-center">My Orders</h2>
      <div className="rounded-sm pt-6 px-8 pb-1">
        <div className="flex flex-col">
          <div className="grid grid-cols-5 rounded-sm bg-gray-800">
            <div className="p-5">
              <h5 className="text-md font-medium uppercase text-white-600">
                ORDER ID
              </h5>
            </div>
            <div className="p-5 text-center">
              <h5 className="text-md font-medium uppercase text-white-600">
                ORDER DATE
              </h5>
            </div>
            <div className="p-5 text-center">
              <h5 className="text-md font-medium uppercase text-white-600">
                TOTAL AMOUNT
              </h5>
            </div>
            <div className="p-5 text-center">
              <h5 className="text-md font-medium uppercase text-white-600">
                STATUS
              </h5>
            </div>
            <div className="p-5 text-center">
              <h5 className="text-md font-medium uppercase text-white-600">
                ACTIONS
              </h5>
            </div>
          </div>

          {myOrders.isLoading ? (
            <Loading />
          ) : myOrders.data?.length === 0 ? (
            <div className="text-center text-white">
              <p className="text-xl font-medium">You have no orders yet</p>
            </div>
          ) : (
            myOrders.data?.map((order) => (
              <div key={order._id}>
                <div className="grid grid-cols-5 border-b border-gray-800">
                  <div className="flex items-center justify-start p-5">
                    <p className="text-md font-medium text-white">
                      {order._id}
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-5">
                    <p className="text-md font-medium text-white">
                      {new Intl.DateTimeFormat("fr-FR", {
                        dateStyle: "short",
                        timeStyle: "short",
                      }).format(new Date(order.createdAt))}
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-5">
                    <p className="text-md font-medium text-white">
                      ${order.totalAmount}
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-5">
                    <p
                      className={`text-md flex items-center justify-center gap-2 font-medium text-gray-800 rounded-sm px-4 py-2 ${
                        order.status === "PENDING"
                          ? "bg-yellow-400"
                          : "bg-green-400"
                      }`}
                    >
                      {order.status === "PENDING" ? (
                        <>
                          <PiClockCountdownBold className="inline" /> Pending
                        </>
                      ) : (
                        <>
                          <IoMdCheckboxOutline className="inline" /> Confirmed
                        </>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-5 gap-4">
                    <p
                      className="text-md font-medium text-gray-800 bg-gray-300 px-4 py-2 rounded-sm cursor-pointer"
                      onClick={() => toggleExpand(order._id)}
                    >
                      {expandedOrder === order._id ? "Réduire" : "Détails"}
                    </p>
                  </div>
                </div>

                {expandedOrder === order._id && order.products.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800">
                    {order.products.map((product) => (
                      <div
                        key={product.name}
                        className="flex items-center justify-between p-4 rounded-sm bg-gray-600/70"
                      >
                        <div className="flex items-center gap-4">
                          <p className="text-md font-medium text-white capitalize">
                            {product.name.replace("-", " ")} (
                            {product.generation})
                          </p>
                        </div>
                        <p
                          className={`text-md p-2 font-medium rounded text-gray-800 ${
                            product.shiny ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          {product.shiny ? "SHINY" : "NON SHINY"}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Orders;
