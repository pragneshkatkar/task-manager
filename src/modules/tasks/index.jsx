import DashboardWrapper from "../../components/dashboard-wrapper";
import TasksColumn from "./partials/task-column";
import { TASKS } from "../../utils/globals";
import { useEffect } from "react";
import { useState } from "react";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookies"
import { DragDropContext } from "react-beautiful-dnd";
import useToggle from "../../utils/hooks/toggle"
import Button from "../../components/button"
import AddTaskPopup from "./partials/add-task-popup";

export default function Tasks() {

    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        let storedTasks = getCookie("tasks")
        if (storedTasks == null) {
            setCookie("tasks", JSON.stringify(TASKS))
            setTasks(TASKS)
        } else {
            setTasks(JSON.parse(storedTasks))
        }
    }, [])

    const handleDragAndDrop = (results) => {
        const { source, destination, type, draggableId } = results;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        if (type === "group") {
            let reorderedTasks = [...tasks];

            let status = "Added"
            if(destination.droppableId == "2"){
                status = "Started"
            } else if(destination.droppableId == "3"){
                status = "Completed"
            }
            let updatedArray = reorderedTasks.map(task => {
                if (task['id'] === draggableId) {
                    return { ...task, status: status };
                }
                return task;
            });

            if(source.droppableId == destination.droppableId){
                const storeSourceIndex = source.index;
                const storeDestinatonIndex = destination.index;

                const [removedStore] = updatedArray.splice(storeSourceIndex, 1);
                updatedArray.splice(storeDestinatonIndex, 0, removedStore);
            }

            setTasks(updatedArray)
            setCookie("tasks", JSON.stringify(updatedArray))
            return
        }
        const itemSourceIndex = source.index;
        const itemDestinationIndex = destination.index;

        const taskSourceIndex = tasks.findIndex(
            (task) => task.id === source.droppableId
        );
        const taskDestinationIndex = tasks.findIndex(
            (task) => task.id === destination.droppableId
        );

        const newSourceItems = [...tasks[taskSourceIndex].items];
        const newDestinationItems =
            source.droppableId !== destination.droppableId
                ? [...tasks[taskDestinationIndex].items]
                : newSourceItems;

        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

        const newTasks = [...tasks];

        newTasks[taskSourceIndex] = {
            ...tasks[taskSourceIndex],
            items: newSourceItems,
        };
        newTasks[taskDestinationIndex] = {
            ...tasks[taskDestinationIndex],
            items: newDestinationItems,
        };

        setTasks(newTasks);

    }

    const {isTrue: isAddTaskPopupShown, setTrue: showAddTaskPopup, setFalse: closeAddTaskPopup} = useToggle()

    const onClickAddTask = () => {
        showAddTaskPopup()
    }

    const addTask = (data) => {
        const taskCount = TASKS.length + 1
        const newTask = {
            id: `task-${taskCount}`,
            name: data.name,
            tag: data.tag,
            code: "CN2",
            status: "Added",
            srno: taskCount
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
        closeAddTaskPopup()
        setCookie("tasks", JSON.stringify(newTasks))
    }

    return (
        <>
            <DashboardWrapper active="Tasks">
                <div className="flex items-center py-4">
                    <Button text="Add new task" attrs={{onClick: onClickAddTask}}/>
                </div>
                <DragDropContext onDragEnd={handleDragAndDrop}>
                    <div className="grid grid-cols-3 gap-x-5">
                        {
                            tasks && <TasksColumn id="1" category="Added" tasks={tasks.filter((item) => item.status == "Added").reverse()} handleDragAndDrop={handleDragAndDrop} />
                        }
                        {
                            tasks && <TasksColumn id="2" category="Started" tasks={tasks.filter((item) => item.status == "Started").reverse()} handleDragAndDrop={handleDragAndDrop} />
                        }
                        {
                            tasks && <TasksColumn id="3" category="Completed" tasks={tasks.filter((item) => item.status == "Completed").reverse()} handleDragAndDrop={handleDragAndDrop} />
                        }
                    </div>
                </DragDropContext>
            </DashboardWrapper>

            {
                isAddTaskPopupShown && <AddTaskPopup onClose={closeAddTaskPopup} addTask={addTask}/>
            }
        </>
    )
}