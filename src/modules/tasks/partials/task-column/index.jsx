import TaskCard from "../task-card";
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

export default function TasksColumn(props){
    const {tasks, handleDragAndDrop, category, id} = props
    
    return (
            <Droppable droppableId={id} type="group">
                {
                    (provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-100 rounded-sm flex flex-col gap-4 px-2 py-4">
                            <p className="text-base text-gray-700 uppercase font-semibold">{category}</p>
                            {
                                tasks.map((item, key) => (
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