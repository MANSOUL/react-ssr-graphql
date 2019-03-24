import React from 'react';
import {Link} from 'react-router-dom';
import s from './index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Home extends React.Component {

  constructor(props) {
    super(props);
    let todos;
    if (__isBrowser__) {
      todos = window.INITIAL_DATA.list.todos;
      delete window.INITIAL_DATA;
    } else {
      todos = props.staticContext.initialData.list.todos;
    }
    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className={s['todo-list']}>
        <h1 className={s['todo-header']}>SSR Todo</h1>
        <div className={s['todo-bar']}>
          <Link className={s['todo-bar__new']} to="/create">新建</Link>
        </div>
        <ul className={s['todo-ls']}>
          {
            this.state.todos.map(item => (
              <li className={s['todo-item']} key={item.id}>
                <p className={s['todo-item__content']}>{item.content}</p>
                <Link className={s['todo-item__edit']} to={`/edit/${item.id}`}>编辑</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(Home);