import React from 'react';
import {Link} from 'react-router-dom';
import s from './index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Home extends React.Component {

  render() {
    return (
      <div className={s['todo-list']}>
        <h1 className={s['todo-header']}>SSR Todo</h1>
        <div className={s['todo-bar']}>
          <Link className={s['todo-bar__new']} to="/create">新建</Link>
        </div>
        <ul className={s['todo-ls']}>
          <li className={s['todo-item']}>
            <p className={s['todo-item__content']}>学习SSR</p><Link className={s['todo-item__edit']} to="/edit/abcd">编辑</Link>
          </li>
          <li className={s['todo-item']}>
            <p className={s['todo-item__content']}>学习SSR</p><Link className={s['todo-item__edit']} to="/edit/abcd">编辑</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(Home);