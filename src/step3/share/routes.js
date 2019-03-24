import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';
import { fetchTodos } from './api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    fetchInitialData: (...args) => fetchTodos(...args)
  },
  {
    path: '/create',
    exact: true,
    component: Create
  },
  {
    path: '/edit/:id',
    exact: true,
    component: Edit
  }
]

export default routes;