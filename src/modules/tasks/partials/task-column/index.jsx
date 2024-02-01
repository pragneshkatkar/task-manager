import TaskCard from "../task-card";
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

export default function TasksColumn(props){
    const {tasks} = props
    
    return (
        <DragDropContext onDragEnd={() => {}}>
            <Droppable droppableId="droppable" type="group">
                {
                    (provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-100 rounded-md flex flex-col gap-4 p-4">
                            {
                                tasks.map((item, key) => (
                                    <Draggable draggableId={item.name} key={key} index={key}>
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
        </DragDropContext>
    )
}