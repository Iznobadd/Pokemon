import { PiClockCountdownBold } from "react-icons/pi";
import { useAllOrders } from "../../../services/order/queries";
import Loading from "../../Loading";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useState } from "react";
import { useConfirmOrder } from "../../../services/order/mutations";

const OrderTable = () => {
  const allOrders = useAllOrders();
  const confirmOrder = useConfirmOrder();

  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const toggleExpand = (orderId: string) => {
    setExpandedOrder((prev) => (prev === orderId ? null : orderId));
  };

  const confirm = (orderId: string) => {
    confirmOrder.mutate(orderId);
  };

  return (
    <div className="rounded-sm border bg-white pt-6 shadow-md px-8 pb-1">
      <h4 className="font-bold text-2xl text-gray-800 mb-6">
        Toutes les commandes
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-5 rounded-sm bg-gray-100">
          <div className="p-5">
            <h5 className="text-md font-medium uppercase text-gray-600">
              LIVRAISON
            </h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              DATE DE LA COMMANDE
            </h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              PRIX TOTAL
            </h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              STATUT
            </h5>
          </div>
          <div className="p-5 text-center">
            <h5 className="text-md font-medium uppercase text-gray-600">
              ACTIONS
            </h5>
          </div>
        </div>

        {allOrders.isLoading ? (
          <Loading />
        ) : (
          allOrders.data?.map((order) => (
            <div key={order._id}>
              <div className="grid grid-cols-5 border-b border-gray-100">
                <div className="flex items-center justify-start p-5">
                  <p className="text-md font-medium text-gray-800">
                    {order.deliveryMethod} : {order.deliveryDetails}
                  </p>
                </div>
                <div className="flex items-center justify-center p-5">
                  <p className="text-md font-medium text-gray-800">
                    {new Intl.DateTimeFormat("fr-FR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(new Date(order.createdAt))}
                  </p>
                </div>
                <div className="flex items-center justify-center p-5">
                  <p className="text-md font-medium text-gray-800">
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
                        <PiClockCountdownBold className="inline" /> En attente
                      </>
                    ) : (
                      <>
                        <IoMdCheckboxOutline className="inline" /> Confirmé
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
                  {order.status === "PENDING" && (
                    <p
                      className="text-md font-medium text-gray-800 bg-green-400 px-4 py-2 rounded-sm cursor-pointer"
                      onClick={() => confirm(order._id)}
                    >
                      Confirmer
                    </p>
                  )}
                </div>
              </div>

              {expandedOrder === order._id && order.products.length > 0 && (
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100">
                  {order.products.map((product) => (
                    <div
                      key={product.name}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-sm bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <p className="text-md font-medium text-gray-800 capitalize">
                          {product.name.replace("-", " ")} ({product.generation}
                          )
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
  );
};

export default OrderTable;
