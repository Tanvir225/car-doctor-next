import { FaLaptop } from "react-icons/fa";

export const Modal = ({ openModal, setOpenModal, details }) => {
  console.log(details);
  return (
    <div className="mx-auto flex  items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <FaLaptop
              size={50}
              className="border-b-2 border-primary"
            ></FaLaptop>
            <div className="flex gap-5 flex-wrap border-b-2">
              <h6 className="text-center text-sm font-medium opacity-70">
                {details?.name} |
              </h6>
              <h6 className="text-center text-sm font-medium opacity-70">
                {details?.phone}
              </h6>
              <h6 className="text-center text-sm font-medium opacity-70">
                {details?.email}
              </h6>
              <h6 className="text-center text-sm font-medium opacity-70">
                {details?.address}
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-5 flex-wrap">
                <h6 className="text-center text-sm font-medium opacity-70">
                  {details?.serviceName} |
                </h6>
                <h6 className="text-center text-sm font-medium opacity-70">
                  {details?.price}$
                </h6>
                <h6 className="text-center text-sm font-medium opacity-70">
                  Booking Date : {details?.date}$
                </h6>
              </div>
              <h6 className="text-sm font-medium opacity-70">
                {details?.message}
              </h6>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
