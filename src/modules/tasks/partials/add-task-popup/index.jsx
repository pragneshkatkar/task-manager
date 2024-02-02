import { useForm } from "react-hook-form"
import Modal from "../../../../components/modal"
import { validations } from "../../../../utils/validations"
import Button from "../../../../components/button"
import Input from "../../../../components/input"
import { TASKS } from "../../../../utils/globals"

export default function AddTaskPopup(props){
    const {onClose, addTask} = props

    const { register, handleSubmit, formState: { errors } } = useForm()

    const inputs = [
        {
            label: "Name",
            attrs: {
                type: "text",
                ...register("name", {
                    required: true,
                    pattern: validations.text
                }),
                form: "add-contact-form"
            },
            err: errors.name && (
                errors.name.type == "required" && "Please enter the name" ||
                errors.name.type == "pattern" && "Please enter valid name"
            )
        },
        {
            label: "Tag",
            attrs: {
                type: "text",
                ...register("tag", {
                    required: true,
                    pattern: validations.text
                }),
                form: "add-contact-form"
            },
            err: errors.tag && (
                errors.tag.type == "required" && "Please enter the tag" ||
                errors.tag.type == "pattern" && "Please enter valid tag"
            )
        },
    ]
    return (
        <Modal isOpen onClose={onClose}>
            <div className="bg-white px-5 py-8 w-[500px] rounded-xl">
                <div className="flex items-center justify-between">
                    <Button icon="close" attrs={{onClick: onClose}}/>
                </div>
                <div className="flex flex-col gap-4 mt-5">
                    <form id="add-contact-form" onSubmit={handleSubmit(addTask)}></form>
                    {
                        inputs.map((item, key) => <Input {...item} key={key} />)
                    }

                    <Button text="Add" variant="primary" attrs={{type: "submit", form: "add-contact-form"}}/>
                </div>
            </div>
        </Modal>
    )
}