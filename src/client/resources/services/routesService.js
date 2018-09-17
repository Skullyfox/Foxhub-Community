
import Home, { fetchData as HomeFetch } from './../../components/pages/Home/Home.jsx';
import Docs, { fetchData as DocsFetch } from './../../components/pages/Docs/Docs.jsx';
const routes = [    ,{
    path: '/',
    exact: true,
    component: Home,
    fetchFn: HomeFetch,
    authLevel: 'public'
},    {
    path: '/docs',
    component: Docs,
    fetchFn: DocsFetch,
    authLevel: 'public'
},];

export default routes;
