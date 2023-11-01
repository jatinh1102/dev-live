import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareersInfoService {

  constructor() { }
  careers_info: any[] = [
    { requriments: "Angular Developer", 
      position: 5, 
      Exp: "3 to 5 Yrs", 
      Job_Type: "Full-time", 
      Location: "Rajkot", 
      Description: [
        'Design and develop web applications using Angular, ensuring they are responsive, dynamic, and high-performing.',
        'Collaborate closely with the development team to transform design concepts into robust and maintainable applications that provide exceptional user experiences for clients and their customers.',
        ],
      skill: [
        'A bachelor`s degree in Computer Science, Software Engineering, or a closely related field, or a commensurate level of professional experience, is required.',
        'Proven experience as an Angular Developer with a strong portfolio showcasing your work.',
        'Proficient in Angular (Angular 2+), TypeScript, HTML5, and CSS3. ',
        'Familiarity with RESTful APIs and integration.',
        'Strong understanding of web development fundamentals and best practices.',
        'Experience with version control systems (e.g., Git).',
        'Knowledge of build tools and task runners (e.g., Webpack, Grunt).',
        'Excellent problem-solving skills and attention to detail.',
        'Ability to work effectively both independently and in a collaborative team environment.',
        'Strong communication skills to interact with team members and stakeholders.',
        ],
      Responsibility: [
        'Develop, test, and maintain responsive web applications using Angular.',
        'Collaborate with the UI/UX design team to implement visually appealing and user-friendly interfaces.',
        'Write clean, maintainable, and efficient code while following best practices and coding standards.',
        'Optimize application performance for maximum speed and scalability.',
        'Troubleshoot and debug issues as they arise and provide timely solutions.',
        'Participate in code reviews to ensure code quality and consistency within the team.',
        'Stay up-to-date with the latest industry trends and technologies to continuously improve your skills.',
        'Work closely with back-end developers to integrate front-end components with server-side logic.',
        'Implement and maintain third-party integrations and APIs.',
        ]
         },

    { requriments: "Android Developer", 
      position: 1, 
      Exp: "3 to 5 Yrs", 
      Job_Type: "Full-time", 
      Location: "Rajkot", 
      Description: [
        'We are seeking a highly skilled and Experienced Android Developer to join our mobile app development team.',
        'As an Android Developer with substantial expertise, you will play a critical role in designing, developing, and maintaining high-quality Android applications. You will collaborate with cross-functional teams, lead the development of new features, and ensure the overall quality and performance of our Android applications.',
        ],
      Responsibility : [
        'Collaborate with cross-functional teams to design, develop, and implement Android applications.',
        'Write clean, efficient, and maintainable code while adhering to coding standards and best practices.',
        'Debug and troubleshoot issues to enhance the overall performance and user experience of the apps.',
        'Participate in code reviews and provide constructive feedback to team members.',
        'Stay up-to-date with the latest developments in Android app development.',
        ],

      skill: [
        'Bachelor`s degree in Computer Science, Software Engineering, or a related field (or equivalent work experience).',
        'Proven experience with Android app development.',
        'Strong proficiency in Java or Kotlin programming languages.',
        'Familiarity with Android Studio and the Android SDK.',
        'Knowledge of RESTful API design and consumption.',
        'Experience with version control systems, such as Git.',
        'Strong problem-solving and analytical skills.',
        'Effective communication and teamwork skills.',
        'A portfolio of previous Android app projects is a plus.',

        ]
      },

    { requriments: "React Developer", 
      position: 1, 
      Exp: "3 to 5 Yrs", 
      Job_Type: "Full-time", 
      Location: "Rajkot", 
      Description: [
        'We are looking for an experienced React Developer with a proven track record of at least 3 years in building exceptional web applications. ',
        'As an Android Developer with substantial expertise, you will play a critical role in designing, developing, and maintaining high-quality Android applications. You will collaborate with cross-functional teams, lead the development of new features, and ensure the overall quality and performance of our Android applications.',
        ],
      Responsibility : [
        'Collaborate with cross-functional teams to design, develop, and implement web and mobile applications using React.',
        'Write clean, efficient, and maintainable code while adhering to coding standards and best practices.',
        'Debug and troubleshoot issues to enhance the overall performance and user experience.',
        'Participate in code reviews, providing constructive feedback to peers.',
        'Keep up-to-date with the latest developments in web and mobile technologies.',
        ],

      skill: [
        'Bachelor`s degree in Computer Science, Software Engineering, or a related field (or equivalent work experience).',
        'Proven experience with React development.',
        'Strong proficiency in JavaScript, HTML, CSS, and front-end technologies.',
        'Familiarity with state management libraries such as Redux or Mobx.',
        'Knowledge of RESTful API design and consumption.',
        'Experience with version control systems, such as Git.',
        'Strong problem-solving and analytical skills.',
        'Effective communication and collaboration skills.',
        'A portfolio of previous work and/or GitHub repository is a plus.',

        ]
      },

    { 
      requriments: "Node.js Developer", 
      position: 5, 
      Exp: "3 to 5 Yrs", 
      Job_Type: "Full-time", 
      Location: "Rajkot", 
      Description: [
        'We are seeking a skilled Node.js developer to join our dynamic and fast-paced development team. As a Node.js developer, you will be responsible for writing server-side web application logic, developing back-end components, and connecting the application with the web services.',
        'You will work closely with front-end developers to integrate their work with the Node.js application',
      ],
      skill:[
        'A bachelor`s degree in Computer Science, Software Engineering, or a closely related field, or a commensurate level of professional experience, is required.',
        'JavaScript',
        'Node.js',
        'Asynchronous Programmin',
        'API Development (RESTful)',
        'Web Technologies (HTML, CSS)',
        'Front-end Frameworks (React, Angular, Vue.js)',
        'Databases (SQL, NoSQL, mongodb)',
        'Version Control (Git)',
        'Testing (Mocha, Chai, Jest)',
        'Security (Authentication, Authorization)',
        'Performance Optimization',
        'Package Management (npm)',
        'Command Line Proficienc',
        'Debugging (DevTools, Node.js Inspector)',
        'Scalability (Horizontal, Vertical)',
        'Communication',
        'Problem-Solving',
        'CI/CD (Continuous Integration/Continuous Deployment)',
        'Design Patterns',
        'DevOps (Basic Server Configuration, Cloud Services)'
      ],
      Responsibility:[
        'Develop server-side logic using Node.js and other frameworks as necessary',
        'Write reusable, testable, and efficient code',
        'Design and implement low-latency, high-availability, and performance applications',
        'Integrate user-facing elements developed by front-end developers with server-side logic',
        'Implement security and data protection',
        'Integrate data storage solutions (databases, key-value stores, blob stores, etc.)',
        'Collaborate with other team members and stakeholders to develop high-quality software solutions',
        'Stay up-to-date with industry best practices and emerging technologies',
        'Develop efficient and scalable RESTful APIs for frontend integration',
        'Maintain technical documentation for APIs, code, and system architecture',
        'Deploy applications on cloud platforms, ensuring scalability and reliability',
        'Set up monitoring tools to track application performance and user interaction',
        'Collaborate and communicate effectively within the development team and stakeholders'
      ]
    },

    { requriments: "Software Developer", 
      position: 2, 
      Exp: "3 to 5 Yrs", 
      Job_Type: "Full-time", 
      Location: "Rajkot", 
      Description: [
        'Are you a forward-thinking and innovative Software Developer eager to take on exciting challenges and drive the future of technology? We are seeking a skilled Software Developer to join our team and play a key role in designing, developing, and maintaining software applications that power our business. ',
        'If you have a passion for coding, a knack for problem-solving, and a desire to work on cutting-edge projects, we want to hear from you.',
        ],
      skill : [
        'A bachelor`s degree in Computer Science, Software Engineering, or a closely related field, or a commensurate level of professional experience, is required.',
        'Proficiency in one or more programming languages, such as Java, Python, C++, or similar.',
        'Strong problem-solving skills and the ability to think critically and analytically.',
        'Knowledge of software development methodologies, best practices, and design patterns.',
        'Experience with database management and SQL.',
        'Familiarity with version control systems (e.g., Git).',
        'Excellent communication and collaboration skills to work effectively with cross-functional teams.',
        'A passion for continuous learning and self-improvement in the field of software development.',
        'Ability to manage multiple tasks and adapt to a fast-paced, agile development environment.',

        ],
      Responsibility: [
        'Collaborate with cross-functional teams, including product managers, designers, and other developers, to understand project goals and requirements.',
        'Design, develop, test, and maintain high-quality software applications, ensuring they meet performance and security standards.',
        'Write clean, efficient, and maintainable code following best practices and coding standards.',
        'Debug and resolve software defects and issues, ensuring timely delivery of solutions.',
        'Participate in code reviews to ensure code quality, consistency, and knowledge sharing within the team.',
        'Stay up-to-date with the latest technologies and industry trends to continuously improve your skills and contribute to innovative solutions.',
        'Work with databases and integrate third-party APIs to enhance application functionality.',
        'Assist in the documentation of software architecture, code, and technical designs.',
        'Take ownership of projects and drive them to successful completion, meeting deadlines and quality goals.',
        ]
      },

    { requriments: "UI/UX Designer", 
      position: 1, 
      Exp: "3 to 5 Yrs", 
      Job_Type: "Full-time", 
      Location: "Rajkot", 
      Description: [
        'Are you a creative and talented UI/UX Designer looking to make a meaningful impact through design? We are seeking a passionate and experienced UI/UX Designer to join our team. In this role, you will be responsible for creating user-centric designs that enhance the overall user experience and bring our digital products to life.',
        'If you have a keen eye for aesthetics, a deep understanding of user behavior, and a portfolio that showcases your design prowess, we love to hear from you.',
        ],
      Responsibility : [
        'Collaborate with cross-functional teams, including product managers, developers, and stakeholders, to define and understand project goals and user requirements.',
        'Create wireframes, user flows, and prototypes to visualize and communicate design ideas. ',
        'Design intuitive and visually appealing user interfaces for web and mobile applications.',
        'Conduct user research, usability testing, and A/B testing to gather feedback and make data-driven design decisions.',
        'Maintain a consistent and cohesive design language and ensure brand consistency across all digital touchpoints.',
        'Stay updated with industry trends and emerging design tools to continually improve the design process.',
        'Work closely with developers to ensure the successful implementation of designs, offering guidance and support throughout the development process.',
        'Advocate for the user, ensuring that all designs prioritize usability, accessibility, and a seamless user experience.',
        ],
      skill: [
        'A bachelor`s degree in Computer Science, Software Engineering, or a closely related field, or a commensurate level of professional experience, is required.',
        'Proven experience as a UI/UX Designer with a strong portfolio demonstrating your design skills.',
        'Proficiency in design and prototyping tools such as Adobe XD, Sketch, Figma, or similar.',
        'Strong understanding of user-centered design principles and best practices.',
        'Experience in conducting user research and usability testing.',
        'Knowledge of front-end development technologies (HTML, CSS, and JavaScript) and their impact on design.',
        'Excellent communication and collaboration skills to work effectively with cross-functional teams.',
        'Attention to detail and a passion for creating pixel-perfect designs.',
        'Ability to manage multiple projects and prioritize tasks effectively.',
        'Creative problem-solving skills to tackle design challenges.',

        ]
      },
    
    { requriments: "BDE ", 
      position: 1, 
      Exp: "3 to 5 Yrs", 
      Job_Type: "Full-time", 
      Location: "Rajkot", 
      Description: [
        'Are you a motivated and results-driven individual looking for an exciting opportunity in the field of business development? We are seeking a dynamic Business Development Executive to join our team. In this role, you will play a vital part in identifying and pursuing new business opportunities, nurturing client relationships, and contributing to the growth and success of our organization. ',
        'If you have a passion for sales and possess excellent communication and negotiation skills, we want to hear from you.',
        ],
      skill : [
        'Proven experience in a sales or business development role.',
        'Strong sales and negotiation skills, with a track record of meeting or exceeding sales targets.',
        'Excellent verbal and written communication abilities.',
        'A customer-centric approach and the ability to build and maintain strong client relationships.',
        'Knowledge of sales and marketing principles and strategies.',
        'Results-oriented with a strong drive to achieve and exceed goals.',
        'Ability to work independently, prioritize tasks, and manage time effectively.',
        'Proficiency in using CRM software and other sales-related tools.',
        'Self-motivated and adaptable with a positive attitude.',

        ],
      Responsibility: [
        'Identify, prospect, and develop new business opportunities by researching and targeting potential clients.',
        'Build and maintain strong client relationships through effective communication and regular follow-ups.',
        'Understand clients needs and requirements, and tailor our products or services to meet their specific objectives.',
        'Develop and execute strategic plans to achieve sales targets and revenue goals.',
        'Prepare and deliver compelling sales presentations to potential clients.',
        'Negotiate terms, close sales deals, and manage the contract signing process.',
        'Collaborate with the sales and marketing teams to develop and implement sales strategies.',
        'Keep up-to-date with industry trends and market conditions to identify emerging opportunities.',
        'Maintain accurate records of sales activities and client interactions in our CRM system.',
        'Provide feedback to the management team regarding market trends and client needs.',

        ]
      },
  ]

  ngOnInit(): void {
  }
}
