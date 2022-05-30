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
        path: '*',
        redirect: '/'
    },
];

export default routes;