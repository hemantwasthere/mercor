import { TaskCardPanelProps, TaskCardProps } from "@/types";
import { CardImages, Icons, Images } from "../constants";
import { v4 as uuidV4 } from "uuid";

export const menus = [
  { name: "Home", link: "/dashboard", icon: Icons.HOME },
  { name: "Messages", link: "/user", icon: Icons.MESSAGES },
  { name: "Tasks", link: "/saved", icon: Icons.TASKS },
  { name: "Members", link: "/giftcard", icon: Icons.MEMBERS },
  { name: "Settings", link: "/messages", icon: Icons.SETTINGS },
];
export const myProjects = [
  { name: "Mobile App", link: "mobile", color: "7AC555" },
  { name: "Website Redesign ", link: "website", color: "FFA500" },
  { name: "Design System ", link: "Design", color: "E4CCFD" },
  { name: "Wireframes ", link: "wireframes", color: "76A5EA" },
];

export const KanbanPanels: string[] = ["To Do", "On Progress", "Done"];

export const KanbanBoardData: TaskCardPanelProps = {
  "To Do": {
    _id: uuidV4(),
    isTodo: true,
    title: "To Do",
    tasks: [
      {
        _task_id: uuidV4(),
        heading: "Brainstorming",
        description:
          "Brainstorming brings team members' diverse experience into play. ",
        priority: "low",
        assignees: [Images.BOY1_IMAGE, Images.BOY2_IMAGE, Images.BOY3_IMAGE],
        comments: 12,
        files: 0,
        // images: [], //there card be multiple image in card css implementation left
        // image: CardImages.Image1,
      },
      {
        _task_id: uuidV4(),
        heading: "Research",
        description:
          "User research helps you to create an optimal product for users.",
        priority: "high",
        assignees: [Images.BOY1_IMAGE, Images.BOY2_IMAGE, Images.BOY3_IMAGE],
        comments: 10,
        files: 3,
        // images: [], //there card be multiple image in card css implementation left
        // image: CardImages.Image1,
      },
      {
        _task_id: uuidV4(),
        heading: "Wireframes",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        priority: "high",
        assignees: [Images.BOY1_IMAGE, Images.BOY2_IMAGE, Images.BOY3_IMAGE],
        comments: 2,
        files: 5,
        // images: [], //there card be multiple image in card css implementation left
        image: CardImages.Image1,
      },
    ],
  },

  "On Progress": {
    _id: uuidV4(),
    isTodo: false,
    title: "On Progress",
    tasks: [
      {
        _task_id: uuidV4(),
        heading: "Brainstorming",
        description:
          "Brainstorming brings team members' diverse experience into play. ",
        priority: "low",
        assignees: [Images.BOY1_IMAGE, Images.BOY2_IMAGE, Images.BOY3_IMAGE],
        comments: 12,
        files: 0,
        // images: [], //there card be multiple image in card css implementation left
        image: CardImages.Image1,
      },
      {
        _task_id: uuidV4(),
        heading: "Onboarding Illustrations ",
        priority: "low",
        assignees: [Images.BOY1_IMAGE, Images.BOY2_IMAGE, Images.BOY3_IMAGE],
        comments: 10,
        files: 3,
        // images: [], //there card be multiple image in card css implementation left
        image: CardImages.Image1,
      },
      {
        _task_id: uuidV4(),
        heading: "Moodboard",
        priority: "low",
        assignees: [Images.BOY1_IMAGE, Images.BOY2_IMAGE, Images.BOY3_IMAGE],
        comments: 10,
        files: 3,
        // images: [], //there card be multiple image in card css implementation left
        image: CardImages.Image2,
      },
    ],
  },

  Done: {
    _id: uuidV4(),
    isTodo: false,
    title: "Done",
    tasks: [
      {
        _task_id: uuidV4(),
        heading: "Mobile App Design",
        priority: "completed",
        assignees: [Images.BOY1_IMAGE, Images.BOY2_IMAGE, Images.BOY3_IMAGE],
        comments: 12,
        files: 0,
        // images: [], //there card be multiple image in card css implementation left
        image: CardImages.mobileImage,
      },
    ],
  },
};
