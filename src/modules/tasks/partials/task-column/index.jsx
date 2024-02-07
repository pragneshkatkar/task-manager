import { useState } from "react";
import Input from "../../../../components/input";
import TaskCard from "../task-card";
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { useEffect } from "react";
import Button from "../../../../components/button";

export default function TasksColumn(props){
    const {tasks, handleDragAndDrop, category, id} = props

    const [_tasks, setTasks] = useState(tasks)

    const [sorting, setSorting] = useState("Ascending")

    useEffect(() => {
        setTasks(tasks)
    }, [tasks])

    const onChangeSearchInput = (e) => {
        const query = e.target.value.toLowerCase()
        const temp = tasks
        const filteredTasks = temp.filter((item) => item.name.toLowerCase().includes(query))
        setTasks(filteredTasks)
    }
    const searchInputAttrs = {
        attrs: {
            placeholder: "Search here",
            onChange: onChangeSearchInput
        },
        additionalClasses: "flex-grow"
    }

    const onClickSortButton = () => {
        const temp = _tasks
        let sortedTasks
        if(sorting == "Ascending"){
            setSorting("Descending")
            sortedTasks = temp.sort((a, b) => a.name.localeCompare(b.name))
        } else{
            setSorting("Ascending")
            sortedTasks = temp.sort((a, b) => b.name.localeCompare(a.name))
        }
        setTasks(sortedTasks)
    }
    
    return (
            <Droppable droppableId={id} type="group">
                {
                    (provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-100 rounded-sm flex flex-col gap-4 px-2 py-4">
                            <div className="flex items-center gap-x-2">
                                <p className="text-base text-gray-700 uppercase font-semibold">{category}</p>
                                <Input {...searchInputAttrs}/>
                                <Button leftIcon="sort" text={sorting} attrs={{onClick: onClickSortButton}}/>
                            </div>
                            {
                                _tasks.map((item, key) => (
                                    <Draggable draggableId={item.id} key={item.id} index={item.srno}>
                                        {
                                            (provided, snapshot) => (
                                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <TaskCard {...item}/>
                                                </div>
                                            )
                                        }
                                    </Draggable>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
    )
}