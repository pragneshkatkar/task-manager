import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal(props){
    const {onClose, children, isOpen} = props
    return (
        <Transition as={Fragment} appear show={isOpen}>
            <Dialog onClose={onClose}>
                <Transition.Child as={Fragment} enter="duration-150" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="black-opacity" onClick={onClose}></div>
                </Transition.Child>
                <div className="fixed inset-0 z-30 overflow-y-auto">
                    <div className="min-h-full flex items-center justify-center">
                        <Transition.Child as={Fragment} enter="duration-150" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="overflow-y-auto">
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}