import React from 'react';
import Counter from '../basic/components/Counter';

/**
 * 클래스 컴포넌트의 장점
 * 컴포넌트의 상태가 변경되어도 render 함수만 실행되기 때문에 함수 컴포넌트보다 효율적이다.
 * render 함수만 실행해서 class의 멤버 변수들이 초기화되지않음
 */

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    // useEffect처럼 컴포넌트가 처음 보여질때 호출되는 componentDidMount
    console.log('컴포넌트가 마운트 되었음!');
  }

  componentWillUnmount() {
    // useEffect에서 반환했던 청소하는 콜백함수
    console.log('컴포넌트가 곧 언마운트될 예정임!');
  }

  render() {
    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
        </div>
        <div className='counters'>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

// 클래스 컴포넌트의 장점
// 함수 컴포넌트는 무언가 변경이 될때마다 함수 전체가 다 호출되니까 리액트에서 제공하는 useState나 useCallback useMemo와 같은 훅을 사용함
// 상태가 변경될 때 마다 render 함수만 호출이 된다. useCallback이나 useMemo와 같은 별도의 처리를 해주지 않아도 된다.
// 클래스의 객체지향 프로그래밍으로 클라이언트 사이드에서 복잡한 일을 해야한다면 상속을 이용해서 무언가를 해야한다면 클래스를 요긴하게 쓸 수 있다.
// 그러나 지금 대세는 함수형 컴포넌트로 가고 있는 시대이다. 함수가 전부 호출되어서 성능이 살짝 걱정되는 부분이 있긴하지만 워낙 useEffect, useCallback, useMemo 와 같은 훅이 잘 되어있기 때문에
// 또 리액트 팀에서 내부적으로 컴포넌트들을 재사용할 수 있는 방법들을 컴파일 했을 때 값이 변경이 되지 않았다면 다시 렌더링되지 않도록 만드는 방법들을 고안하고 있으므로 크게 걱정할 필요는 없다.
