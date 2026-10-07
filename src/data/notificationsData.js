const notificationsData = [
  {
    id: 1,
    title: "New Book Added",
    message: "Clean Code has been added to the library.",
    time: "2 mins ago",
    type: "success",
    read: false,
  },
  {
    id: 2,
    title: "Book Returned",
    message: "Rahul Sharma returned React for Beginners.",
    time: "20 mins ago",
    type: "info",
    read: false,
  },
  {
    id: 3,
    title: "Book Due Today",
    message: "Machine Learning Basics should be returned today.",
    time: "1 hour ago",
    type: "warning",
    read: true,
  },
  {
    id: 4,
    title: "New Member Registered",
    message: "Priya Singh joined the library.",
    time: "3 hours ago",
    type: "success",
    read: true,
  },
  {
    id: 5,
    title: "Overdue Book",
    message: "JavaScript Mastery is overdue by 3 days.",
    time: "Yesterday",
    type: "danger",
    read: false,
  },
];

export default notificationsData;