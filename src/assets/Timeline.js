const timeLineElements = [
  {
    id: 1,
    company: "Amrita Vishwa Vidyaapetham",
    location: "Kollam,India",
    role: "Bachelor's Degree",
    date: "2010-2014",
    type: "college",
    skills: "Electronics and Communication",
    activity: [],
  },
  {
    id: 2,
    company: "COGNIZANT TECHNOLOGY SOLUTIONS",
    location: "Coimbatore,India",
    role: "Software Developer",
    date: "2014-2020",
    type: "work",
    skills:
      "Angular, ASP.Net, MVC, SQL, TypeScript, JSON, AJAX, Entity Framework, GIT, NHibernate, MSSQL, HTML, Bootstrap, TFS, IIS, Service Now and SSRS",
    activity:["Designed and developed a web application using TypeScript, HTML, CSS, Bootstrap, and SQL","Utilized SSRS for automating repetitive monthly reports, resulting in a 50% reduction in the number of reports","Designed and created tables and stored procedures using SQL Server"]
    ,
  },

  // {
  //   id: 4,
  //   company: "COGNIZANT TECHNOLOGY SOLUTIONS",
  //   location: "Coimbatore,India",
  //   type: "work",
  //   role: "Application Support and Maintenance/Team Member",
  //   date: "2019-2020",
  //   skills: "ASP.Net, MVC, WCF, ORACLE, IREPORT, MS Access, XML, MYSQL, JIRA and Service Now",
  //   activity: ['Coordinate with teams and resolve all complex applications and system issues,Ensuring effective front end and back-end functionality of application',"Implementation of application performance improvements by coordinating with the development team, internal users and the customers."],
  // },
  {
    id: 6,
    company: "SIG24 CHARITABLE TRUST,Catchafire and VolunteerMatch",
    location: "Remote",
    type: "work",
    role: "Freelance Developer",
    date: "2022-Present",
    skills:
      [`Mongo DB, Express JS, React JS, Node JS, Redux, GitHub, Tailwind CSS, JavaScript ,Framer Motion and REST API.`],
    activity: ["provide freelance and pro bono web development services to nonprofit organizations, focusing on enhancing digital presence, optimizing websites, managing content, and improving user experience by developing full-stack applications with React.js, Node.js, Express.js, and MongoDB, while utilizing tools like Docker, Jenkins, and GitHub to streamline development and deployment processes"]
  },
  // {
  //   id: 6,
  //   company: "Catchafire",
  //   location: "Remote",
  //   type: "work",
  //   role: "Web Application Developer/Adviser",
  //   date: "2025-Present",
  //   skills:
  //     [`Next JS,React and Contentful`],
  //   activity: ["Contributed to developing a Next.js and React-based web application for a nonprofit organization."]
  // },
  
];

export default timeLineElements.reverse();
