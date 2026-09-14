import {
    antd,
    bootstrap,
    chat1,
    chat2,
    dht1,
    dht2,
    dht3,
    dht4,
    dht5,
    dktech,
    luanvan1,
    luanvan2,
    luanvan3,
    luanvan4,
    luanvan5,
    luanvan6,
    luanvan7,
    luanvan8,
    mailer,
    miquant,
    mongo,
    // next
    nienluan1,
    nienluan2,
    nienluan3,
    nienluan4,
    nienluan5,
    node,
    query,
    react,
    reactna,
    redis,
    redux,
    scan1,
    scan2,
    scan3,
    scan4,
    scan5,
    scan6,
    scss,
    shadcn,
    socket,
    tailwind,
    vnpt,
} from '~/assets/images';

export const lib = [
    {
        img: react,
        name: 'Reactjs',
    },
    {
        img: react,
        name: 'React Native',
    },
    // {
    //     img: next,
    //     name: 'Nextjs',
    // },
    {
        img: scss,
        name: 'SCSS',
    },
    {
        img: tailwind,
        name: 'Tailwind CSS',
    },
    {
        img: shadcn,
        name: 'Shadcn',
    },
    {
        img: antd,
        name: 'Ant Design',
    },
    {
        img: bootstrap,
        name: 'Bootstrap',
    },
    {
        img: redux,
        name: 'Redux',
    },
    {
        img: query,
        name: 'TanStack Query',
    },
    {
        img: query,
        name: 'Nodejs',
    },
    {
        img: query,
        name: 'MongoDB',
    },
    {
        img: query,
        name: 'MySQL',
    },
];

export const experiences = [
    {
        time: '05/2024 - 07/2024',
        company: 'VNPT-IT',
        address: 'My Phong Ward, Dong Thap Province',
        logo: vnpt,
        content: `<p>VNPT-IT operates in the field of research and development, integrating IT products and services to serve both the internal needs
of Vietnam Posts and Telecommunications Group (VNPT) and external clients, including international customers.</p>
</p>The knowledge and skills I have learned and applied include:</p>
<ul>
    <li> Researched and designed user interfaces in Figma based on requirements and guidance from the mentor.</li>
    <li> Was responsible for developing APIs for user management functionalities of a Social Security application using Spring Boot.</li>
    <li>
        Developed and implemented the Frontend interface using Angular based on approved Figma prototypes, ensuring
consistency between the design and the final product.
    </li>
    <li>
        Gained hands-on experience with Spring Boot, Angular, MySQL, and Microservices architecture throughout the application
development and implementation process.
    </li>
</ul>`,
    },
    {
        time: '03/2025 - 09/2025',
        company: 'DK Tech Co., Ltd.',
        address: 'Phu Thanh Ward, Ho Chi Minh City',
        logo: dktech,
        content: `
<ul>
<li>Developed and customized responsive web interfaces based on UI/UX designs and project requirements, ensuring
consistency across multiple devices.</li>
<li>
    Used WordPress to build and customize the company’s Landing Pages, focusing on translating designs into functional
interfaces, optimizing layouts, and ensuring a consistent user experience across devices.
</li>
<li>Collaborated with team members to clarify requirements, discuss implementation approaches, and propose solutions,
contributing to the timely delivery and overall quality of projects.</li>
</ul>`,
    },
    {
        time: '03/2025 - 09/2025',
        company: 'Miquant JSC',
        address: 'Cho Quan Ward, Ho Chi Minh City',
        logo: miquant,
        content: `<ul>
  <li>
    Improved and updated the company’s Landing Page interface, focusing on enhancing
    visual appeal, interactivity, and overall user experience, while ensuring responsive
    design and consistency with the product’s UI/UX direction.
  </li>

  <li>
    Implemented real-time market data synchronization using Socket.IO, enabling users
    to receive continuously updated market information without manually refreshing the page,
    while optimizing UI performance to ensure a smooth user experience for 200+ concurrent
    users monitoring over 1,100 stock symbols.
  </li>

  <li>
    Developed a market monitoring system that provides industry-specific insights for
    individual stock symbols, supporting users in monitoring and analyzing market data.
  </li>

  <li>
    Built a customizable dashboard using FlexLayout, enabling users to freely arrange,
    resize, and manage up to 6 components while maintaining real-time data synchronization
    across all dashboard components.
  </li>

  <li>
    Integrated and developed interactive ECharts visualizations for financial data analysis,
    while studying technical documentation to implement different chart types and interactions.
  </li>

  <li>
    Optimized frontend rendering and data handling to improve responsiveness and overall
    user experience.
  </li>

  <li>
    Contributed to the development of the React Native mobile application, adapting web
    features and interfaces to mobile devices while maintaining consistency in UI, workflows,
    and user experience across platforms.
  </li>

  <li>
    Participated in technical discussions with the Backend team to discuss implementation
    approaches, identify issues, and propose solutions during product development.
  </li>
</ul>`,
    },
];

export const projects = [
    {
        title: 'DEVELOPING A MOVIE TICKET BOOKING MANAGEMENT SYSTEM',
        time: '08/2024 - 11/2024',
        size: '1 (Personal Project)',
        description:
            'The Cinema Management System is designed to support managers in operating theater activities while providing convenience for customers. Customers can easily book tickets online without having to wait at the counter. Additionally, the system incorporates exclusive features for staff, such as booking tickets for customers, printing tickets, and efficiently scanning tickets.',
        imgs: [luanvan1, luanvan2, luanvan3, luanvan4, luanvan5, luanvan6, luanvan7, luanvan8],
        tech: [react, reactna, bootstrap, redux, scss, node, mongo, redis, socket, mailer],
        gits: [
            ' https://github.com/Thub2014706/luanvan-be',
            ' https://github.com/Thub2014706/luanvan-fe_admin',
            ' https://github.com/Thub2014706/luanvan-fe_customer',
            ' https://github.com/Thub2014706/luanvan-native',
        ],
    },
    {
        title: 'SILVER JEWELRY STORE WEBSITE',
        time: '12/2023 - 04/2024',
        size: '1 (Personal Project)',
        description:
            'The website supports customers in viewing detailed information about jewelry products and placing orders. They can track the status oftheir deliveries, review products, and add items to their wishlist. Administrators can manage products, categorize items, view the order list, andgenerate revenue statistics.',
        imgs: [nienluan1, nienluan2, nienluan3, nienluan4, nienluan5],
        tech: [react, bootstrap, redux, scss, node, mongo, mailer],
        gits: [
            'https://github.com/Thub2014706/backend_jewelry',
            'https://github.com/Thub2014706/website_selling_jewelry',
        ],
    },
    {
        title: "BUILDING SALES WEBSITES FOR THE COMPANY'S CLIENTS",
        time: '03/2025 - 05/2025',
        size: '3 (Company Project)',
        description:
            "This is a real project delivered to the client, where I was responsible for building the user interface according to the client's requirements. The website's main functions include sales and user account management, with features tailored specifically for the company's customers such as point accumulation, order payment using accumulated points, point transfer, user tiering, and more.",
        imgs: [dht1, dht2, dht3, dht4, dht5],
        tech: [react, antd, redux, scss, query],
        gits: [],
    },
    {
        title: 'DKCHAIN EXPLORER DASHBOARD',
        time: '06/2025 - 08/2025',
        size: '2 (Company Project)',
        description:
            'A real-world project developed at my company, where I was responsible for building the user interface of a blockchain explorer similar to BscScan. The interface displays blockchain data such as blocks, transactions, smart contracts, and tokens.',
        imgs: [scan1, scan2, scan3, scan4, scan5, scan6],
        tech: [react, tailwind, shadcn, redux, scss, query],
        gits: [],
    },
    {
        title: 'AI CHAT APP',
        time: '09/2025 - 09/2025',
        size: '2 (Company Project)',
        description:
            'Build a simple Chat App interface with features such as chatting with AI, deleting a conversation, renaming, pinning a conversation, deleting all conversations, etc.',
        imgs: [chat1, chat2],
        tech: [react, tailwind, shadcn, redux, scss, query],
        gits: [],
        link: 'https://chat-seven-tau-26.vercel.app/',
    },
];
