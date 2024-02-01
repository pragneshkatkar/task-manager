import DashboardWrapper from "../../components/dashboard-wrapper";
import TasksColumn from "./partials/task-column";
import { TASKS } from "../../utils/globals";
import { useEffect } from "react";
import { useState } from "react";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookies"
import { DragDropContext } from "react-beautiful-dnd";

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

            const taskSourceIndex = source.index;
            const taskDestinatonIndex = destination.index;

            const [removedTask] = reorderedTasks.splice(taskSourceIndex, 1);
            reorderedTasks.splice(taskDestinatonIndex, 0, removedTask);

            setTasks(reorderedTasks)
            deleteCookie("tasks")
            setCookie("tasks", JSON.stringify(reorderedTasks))
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

    return (
        <DashboardWrapper active="Tasks">
            <DragDropContext onDragEnd={handleDragAndDrop}>
                <div className="grid grid-cols-3 gap-x-5">
                    {
                        tasks && <TasksColumn id="1" category="Added" tasks={tasks.filter((item) => item.status == "Added")} handleDragAndDrop={handleDragAndDrop} />
                    }
                    {
                        tasks && <TasksColumn id="2" category="Started" tasks={tasks.filter((item) => item.status == "Started")} handleDragAndDrop={handleDragAndDrop} />
                    }
                    {
                        tasks && <TasksColumn id="3" category="Completed" tasks={tasks.filter((item) => item.status == "Completed")} handleDragAndDrop={handleDragAndDrop} />
                    }
                </div>
            </DragDropContext>
        </DashboardWrapper>
    )
}