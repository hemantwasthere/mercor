import { TaskCardProps, TaskPanelProps } from "@/types";
import { Icons } from "@/utils";
import { StrictModeDroppable as Droppable } from "@/utils/helpers/StrictModeDroppable";
import Image from "next/image";
import React, { useState } from "react";
import TaskCard from "./TaskCard";

export type DroppableProps = {
    panel: TaskPanelProps;
    panelKey: string;
};

const DraggableTaskCard: React.FC<DroppableProps> = ({ panel, panelKey }) => {
    const totalTask = panel.tasks.length;
    const [isDraggingOverBg, setIsDraggingOverBg] = useState(false)

    const borderColor = panel.title.toString() === "To Do" ? "5030E5" : panel.title.toString() === "On Progress" ? "FFA500" : "8BC48A";

    return (
        <div className={`p-4 md:p-6 rounded-2xl lg:min-h-screen ${isDraggingOverBg ? "bg-green-200" : "bg-[#F5F5F5]"
            } `}>
            <div
                className={`flex items-center border-b-[3px]  pb-4   justify-between `}
                style={{ borderColor: `#${borderColor}` }}
            >
                <div className="flex items-center gap-3">
                    <span
                        className={` w-2 h-2 rounded-full`}
                        style={{ backgroundColor: `#${borderColor}` }}
                    ></span>
                    <span className="text-Heading text-md font-semibold">
                        {panel.title}
                    </span>
                    <span className="w-5 h-5 text-sm text-center text-Typography  bg-borderColor rounded-full ">
                        {totalTask}
                    </span>
                </div>
                {panel.isTodo && (
                    <Image
                        className="w-6 h-6  "
                        src={Icons.BLUE_ADD_SQUARE}
                        alt="BLUE_ADD_SQUARE"
                    />
                )}
            </div>
            <Droppable droppableId={panelKey}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`grid mt-4 md:mt-6 grid-cols-1 gap-6 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? setIsDraggingOverBg(true) : setIsDraggingOverBg(false)
                            }`}
                    >
                        {panel.tasks.map((task: TaskCardProps, index: number) => (
                            <TaskCard key={task._task_id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default DraggableTaskCard;
