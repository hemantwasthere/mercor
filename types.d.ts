export interface TaskCardPanelProps {
    [key: string]: TaskPanelProps;
  }
  
  export interface TaskPanelProps {
    _id: string;
    isTodo: boolean;
    title: "To Do" | "On Progress" | "Done";
    tasks: TaskCardProps[];
  }
  
  export interface TaskCardProps {
    _task_id: string;
    heading: string;
    description?: string;
    priority: "low" | "medium" | "high" | "completed";
    assignees: string[];
    comments: number;
    files: number;
    // images: [], //there card be multiple image in card css implementation left
    image?: string;
  }
  