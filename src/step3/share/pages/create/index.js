import React from 'react';
import s from './index.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Home extends React.Component {

  handleInputKeyDown = (e) => {
    // 按下回车键后创建新项目
    if (e.keyCode === 13) {
      const value = e.target.value.trim();
      if (value === '') {
        return;
      }
      // TODO 进行ajax请求
    }
  }

  render() {
    return (
      <div className={s['todo-new']}>
        <input 
          className={s['todo-new__input']} 
          placeholder="输入一条新Todo"
          onKeyDown={this.handleInputKeyDown}/>
      </div>
    );
  }
}

export default withStyles(s)(Home);