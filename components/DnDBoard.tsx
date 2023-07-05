import { useCallback, useEffect, useMemo, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import DraggableElement from "../DraggableTaskCard";

import { TaskCardPanelProps, TaskCardProps, TaskPanelProps } from "@/types";
import { KanbanBoardData } from "@/utils/data";

const DragAndDropBoard = () => {
    const KanbanPanels = useMemo(() => ["To Do", "On Progress", "Done"], []);

    const [KanbanTask, setKanbanTask] =
        useState<TaskCardPanelProps>(KanbanBoardData);
    const removeFromList = (list: TaskCardProps[], index: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(index, 1);
        return [removed, result] as [TaskCardProps, TaskCardProps[]];
    };

    const addToList = useCallback(
        (list: TaskCardProps[], index: number, KanbanTask: TaskCardProps) => {
            const result = Array.from(list);

            result.splice(index, 0, KanbanTask);
            return result;
        },
        []
    );

    const onDragEnd = useCallback(
        (result: DropResult) => {
            if (!result.destination) {
                return;
            }

            const KanbanList: typeof KanbanTask = { ...KanbanTask };
            const sourceList = KanbanList?.[result.source.droppableId].tasks;

            console.log(sourceList);
            const [removedElement, newSourceList] = removeFromList(
                sourceList,
                result.source.index
            );

            console.log(newSourceList);
            KanbanList[result.source.droppableId].tasks = newSourceList;
            const destinationList = KanbanList[result.destination.droppableId].tasks;
            KanbanList[result.destination.droppableId].tasks = addToList(
                destinationList,
                result.destination.index,
                removedElement
            );
            setKanbanTask(KanbanList);
        },
        [KanbanTask, addToList]
    );
    return (
        <div className="px-4 md:px-6 lg:px-9    w-full   ">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid  lg:grid-cols-3   w-full gap-6">
                    {KanbanPanels.map((panel, index) => {
                        // console.log(panel);
                        // console.log(KanbanBoardData[panel]);
                        return (
                            <DraggableElement
                                panel={KanbanBoardData[panel]}
                                key={`${panel}-${index}`}
                                panelKey={panel}
                            />
                        );
                    })}
                </div>
            </DragDropContext>
        </div>
    );
};

export default DragAndDropBoard;
