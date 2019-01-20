import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/create',
    exact: true,
    component: Create
  },
  {
    path: '/edit',
    exact: true,
    component: Edit
  }
]

export default routes;