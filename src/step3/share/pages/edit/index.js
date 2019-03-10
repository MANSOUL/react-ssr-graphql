import React from 'react';
import s from './index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Home extends React.Component {

  constructor(props) {
    super(props);
    // 获取到编辑项目的ID
    this.id = props.match.params.id;
  }

  handleDoneClick = () => {
    // TODO ajax同步完成操作
  }

  handleDeleteClick = () => {
    // TODO ajax同步删除操作
  }

  render() {
    return (
      <div className={s['todo-edit']}>
        <p className={s['todo-content']}>学习 SSR</p>
        <div className={s['todo-btn']}>
          <button 
            className={s['todo-btn__done']} 
            onClick={this.handleDoneClick}>完成✅</button>
          <button 
            className={s['todo-btn__delete']} 
            onClick={this.handleDeleteClick}>删除</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);