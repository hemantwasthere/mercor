import { TaskCardPanelProps, TaskCardProps, TaskPanelProps } from "@/types";
import { Icons } from "@/utils";
import { StrictModeDroppable as Droppable } from "@/utils/helpers/StrictModeDroppable";
import Image from "next/image";
import React from "react";
import TaskCard from "../TaskCard";

export type DroppableProps = {
    panel: TaskPanelProps;
    panelKey: string;
};

const DraggableElement: React.FC<DroppableProps> = ({ panel, panelKey }) => {
    const totalTask = panel.tasks.length;

    const borderColor =
        panel.title.toString() === "To Do"
            ? "5030E5"
            : panel.title.toString() === "On Progress"
                ? "FFA500"
                : "8BC48A";
    return (
        <div className="p-4 md:p-6 rounded-2xl  bg-blubBgColor  lg:min-h-screen">
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
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="grid mt-4 md:mt-6 grid-cols-1 gap-6 "
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

export default DraggableElement;
