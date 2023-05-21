let guestUser = {
    "contacts": [],
    "tasks": [],
    "categories": []
};

guestUser.contacts = [
    {
        "name": "Anton Mayer",
        "email": "antom@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-0",
        "tasks": []
    }
    ,
    {
        "name": "Anja Schulz",
        "email": "schulz@hotmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-1",
        "tasks": []
    }
    ,
    {
        "name": "David Eisenberg",
        "email": "davidberg@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-2",
        "tasks": []
    }
    ,
    {
        "name": "Benedict Ziegler",
        "email": "benedict@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-3",
        "tasks": []
    }
    ,
    {
        "name": "Eva Fischer",
        "email": "eva@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-4",
        "tasks": []
    }
    ,
    {
        "name": "Emmanuel Mauer",
        "email": "emmanuelMa@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-5",
        "tasks": []
    }
    ,
    {
        "name": "Marcel Bauer",
        "email": "bauer@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-6",
        "tasks": []
    }
    ,
    {
        "name": "Tatjana Wolf",
        "email": "wolf@gmail.com",
        "phone": "+49 1111 111 11 1",
        "color": "bg-7",
        "tasks": []
    }
];

guestUser.tasks = [
    {
        "title": "Website redesign",
        "description": "Modify the contents of the main website...",
        "dueDate": "2023-05-16",
        "prio": 0,
        "category": { name: "Design", color: 0 },
        "assignedTo": guestUser.contacts.slice(0, 3),
        "subtasks": [
            { name: "Edit start page", done: false },
            { name: "Update pictures", done: false }
        ],
        "boardColumn": "board-column-todo"
    }
    ,
    {
        "title": "Call potential clients",
        "description": "Make the product presentation to prospective buyers",
        "dueDate": "2023-05-06",
        "prio": 2,
        "category": { name: "Sales", color: 3 },
        "assignedTo": guestUser.contacts.slice(-4),
        "subtasks": [],
        "boardColumn": "board-column-progress"
    }
    ,
    {
        "title": "Accounting invoices",
        "description": "Write open invoices for customer",
        "dueDate": "2023-05-10",
        "prio": 1,
        "category": { name: "Backoffice", color: 15 },
        "assignedTo": guestUser.contacts.slice(2),
        "subtasks": [],
        "boardColumn": "board-column-feedback"
    }
    ,
    {
        "title": "Video cut",
        "description": "Edit the new company video",
        "dueDate": "2023-05-11",
        "prio": 1,
        "category": { name: "Media", color: 7 },
        "assignedTo": guestUser.contacts.slice(-1),
        "subtasks": [],
        "boardColumn": "board-column-feedback"
    }
    ,
    {
        "title": "Social media strategy",
        "description": "Develop an ad campaign for brand positioning",
        "dueDate": "2023-05-05",
        "prio": 0,
        "category": { name: "Marketing", color: 12 },
        "assignedTo": guestUser.contacts.slice(3, 5),
        "subtasks": [
            { name: "Brainstorming", done: true },
            { name: "User survey", done: true },
            { name: "Develop ads", done: true }
        ],
        "boardColumn": "board-column-done"
    }
];

guestUser.categories = [
    { name: "Backoffice", color: 15 },
    { name: "Design", color: 0 },
    { name: "Marketing", color: 12 },
    { name: "Media", color: 7 },
    { name: "Sales", color: 3 }
];