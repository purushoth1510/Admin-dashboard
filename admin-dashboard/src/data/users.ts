export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive";
}

export const users: User[] = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun.kumar@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Meera Iyer",
    email: "meera.iyer@example.com",
    role: "Editor",
    status: "Active",
  },
];
