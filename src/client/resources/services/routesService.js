
import Home, { fetchData as HomeFetch } from './../../components/pages/Home/Home.jsx';
import Sign, { fetchData as SignFetch } from './../../components/pages/Sign/Sign.jsx';

const routes = [    ,{
    path: '/',
    exact: true,
    component: Home,
    fetchFn: HomeFetch,
    authLevel: 'public'
},    {
    path: '/sign',
    exact: true,
    component: Sign,
    fetchFn: SignFetch,
    authLevel: 'public'
},];

export default routes;
