let routes = [{
        path: '/',
        name: 'Home',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'HOME',
            issearch: false
        },
        component: () => import('../pages/Home.js'),
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'Profile',
            issearch: false
        },
        component: () => import('../pages/profile.js'),
    },
    {
        path: '/selectmember',
        name: 'selectmember',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'Select Member',
            issearch: true
        },
        component: () => import('../pages/selectmember.js'),
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'About',
            issearch: false
        },
        component: () => import('../pages/about.js'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'Login',
            issearch: false
        },
        component: () => import('../pages/login.js'),
    },
    {
        path: '/listdoctor',
        name: 'listdoctor',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'เลือก หมอในสังกัด',
            issearch: true
        },
        component: () => import('../pages/listdoctor.js'),
    },
    {
        path: '/listvolunteer',
        name: 'listvolunteer',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'เลือก อาสาสมัครในสังกัด',
            issearch: true
        },
        component: () => import('../pages/listvolunteer.js'),
    },
    {
        path: '/listpatients',
        name: 'listpatients',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'รายชื่อคนไข้',
            issearch: true
        },
        component: () => import('../pages/listpatients.js'),
    },
    {
        path: '/patientinfo',
        name: 'patientinfo',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'ข้อมูลคนไข้',
            issearch: true
        },
        component: () => import('../pages/patientinfo.js'),
    },
    {
        path: '/patientcolor',
        name: 'patientcolor',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'ข้อมูล 7 สี',
            issearch: true
        },
        component: () => import('../pages/patientcolor.js'),
    },
    {
        path: '/regpatient',
        name: 'regpatient',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'ลงทะเบียนคนไข้',
            issearch: true
        },
        component: () => import('../pages/regpatient.js'),
    },
    {
        path: '/addpatientinfo',
        name: 'addpatientinfo',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'เพิ่มข้อมูลการตรวจ',
            issearch: true
        },
        component: () => import('../pages/addpatientinfo.js'),
    },
    {
        path: '/calendarmeet',
        name: 'calendarmeet',
        meta: {
            layout: 'mainlayout',
            auth: false,
            title: 'เพิ่มข้อมูลนัดหมาย',
            issearch: true
        },
        component: () => import('../pages/calendarmeet.js'),
    },
    {
        path: '*',
        redirect: '/'
    },
];

export default routes;