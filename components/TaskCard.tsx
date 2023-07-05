import { TaskCardProps } from "@/types";
import { Icons, Images } from "@/utils";
import Image from "next/image";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export type TaskProps = {
    task: TaskCardProps;
    index: number;
};
const TaskCard: React.FC<TaskProps> = ({ task, index }) => {
    const priorityBgColor =
        task.priority.toString() === "low"
            ? "rgba(223,168,116,.2)"
            : task.priority.toString() === "medium"
                ? "rgba(251, 203, 24, .2)"
                : task.priority.toString() === "high"
                    ? "rgba(216,114,125,.1)"
                    : "rgba(131,194,157,.2)";
    const priorityColor =
        task.priority.toString() === "low"
            ? "D58D49"
            : task.priority.toString() === "medium"
                ? "FBCB18"
                : task.priority.toString() === "high"
                    ? "D8727D"
                    : "68B266";

    return (
        <Draggable draggableId={task._task_id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        className="p-4 md:p-6 bg-white rounded-2xl"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div className={`flex mb-1 items-center justify-between`}>
                            <span
                                className={`rounded-md text-xs px-1.5 text-center py-1 font-medium `}
                                style={{
                                    backgroundColor: `${priorityBgColor}`,
                                    color: `#${priorityColor}`,
                                }}
                            >
                                {task.priority}
                            </span>
                            <Image
                                src={Icons.THREE_DOT}
                                className="w-4 h-1   "
                                alt="three dots"
                            />
                        </div>
                        <h1 className="text-xl mb-1 capitalize font-bold text-Heading ">
                            {task.heading}
                        </h1>
                        <p className="text-start text-Typography text-sm">
                            {task?.description}
                        </p>
                        {task?.image && (
                            <div className="w-full mt-2">
                                <Image
                                    src={task?.image}
                                    alt="taskcard_image"
                                    className="w-full"
                                />
                            </div>
                        )}
                        <div className="flex items-center mt-5 justify-between">
                            <div className="flex">
                                {task.assignees?.map((assign, index) => {
                                    return (
                                        <Image
                                            key={index}
                                            src={assign}
                                            className="-mr-2 w-7 h-8 "
                                            alt={`BOY${index}_IMAGE`}
                                        />
                                    );
                                })}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={Icons.TASKCARD_MESSAGE_ICON}
                                        alt="TASKCARD_MESSAGE_ICON"
                                        className=""
                                    />
                                    <span className="text-Typography font-medium text-xs xxl:text-sm">{`${task.comments} comments`}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={Icons.TASKCARD_FILE_ICON}
                                        alt="TASKCARD_FILE_ICON"
                                        className=""
                                    />
                                    <span className="text-Typography font-medium  text-xs xxl:text-sm">{`${task.files} files`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Draggable>
    );
};

export default TaskCard;
