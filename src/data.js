export const allProjects = [
    {
        id: 1,
        title: 'Designing a new website',
        description: 'This is a project to design a new website for a company',
        goal: '1000',
        image: 'https://via.placeholder.com/200x150',
        is_open: true,
        date_created:"2020-03-20T14:22:23.382748Z",
        owner:1
    },
    {
        id: 2,
        title: 'Creating a new app',
        description: 'This is a project to create a new app for a company',
        goal: '1000',
        image: 'https://via.placeholder.com/200x150',
        is_open: true,
        date_created:"2020-03-20T14:22:23.382748Z",
        owner:1
    },
    {
        id: 3,
        title: 'Designing another website',
        description: 'This is another project to design a new website for a company',
        goal: '1000',
        image: 'https://via.placeholder.com/200x150',
        is_open: true,
        date_created:"2020-03-20T14:22:23.382748Z",
        owner:1
    },
    {
        id: 4,
        title: 'Creating another new app',
        description: 'This is a project to create another new app for a company',
        goal: '1000',
        image: 'https://via.placeholder.com/200x150',
        is_open: true,
        date_created:"2020-03-20T14:22:23.382748Z",
        owner:1
    }
]
export const oneProject =
    {
        id:1,
        title:"Project One",
        description:"The first project.",
        goal:150,
        image:"https://via.placeholder.com/300.jpg",
        is_open:false,
        date_created:"2020-03-20T14:22:23.382748Z",
        owner:1,
        pledges: [
            {
                id:1,
                amount:100,
                comment:"A comment for the pledge",
                anonymous:false,
                supporter:3,
                project_id:1,
            },  
        ],
    }