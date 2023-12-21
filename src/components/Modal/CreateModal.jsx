import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/UseAuth";
const CreateModal = ({ closeModal, isOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    const task = {
      title: data?.title,
      descriptions: data?.descriptions || "no-descriptions",
      deadlines: data?.data?.deadlines || "no-deadlines",
      priority: data?.priority,
      email: user?.email,
    };
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Create a new Task
                </Dialog.Title>
                <div className="mt-2 ">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <label className="block w-full font-medium">Title</label>
                    <input
                      className="border w-full ps-3 rounded-md p-1 focus:outline-none focus:border-rose-200"
                      {...register("title", { required: true })}
                    />
                    {errors.title && (
                      <span className="text-rose-500">
                        This field is required
                      </span>
                    )}

                    <label className="block w-full font-medium ">
                      Descriptions
                    </label>
                    <input
                      className="border w-full ps-3 rounded-md p-1 focus:outline-none focus:border-rose-200"
                      {...register("descriptions", { required: true })}
                    />

                    <label className="block w-full font-medium ">
                      Deadlines
                    </label>
                    <input
                      type="date"
                      className="border w-full ps-3 rounded-md p-1 focus:outline-none focus:border-rose-200"
                      {...register("deadlines", { required: true })}
                    />
                    <label className="block w-full font-medium mb-1">
                      Priority
                    </label>
                    <select
                      {...register("priority")}
                      className="border w-full ps-3 rounded-md p-1 focus:outline-none focus:border-rose-200"
                    >
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
                    </select>
                    <hr className="mt-8 " />

                    <button
                      type="submit"
                      className="w-full bg-rose-400 p-1 rounded-md font-bold text-white text-lg"
                    >
                      {loading ? (
                        <TbFidgetSpinner
                          className="m-auto animate-spin"
                          size={24}
                        />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateModal;
