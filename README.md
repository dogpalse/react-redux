# React Redux
---
 리덕스는 가장 인기 있는 상태 관리 라이브러리이다. 
 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜 관리하기에 효과적
 전역 상태이므로 컴포넌트끼리 간은 상태를 공유할 때도 효과적

### 용어 정리
1. 액샨(Action)
- 상태에 변화가 필요할 때 발생.
- 객체 형태
```javascript
action = {
    type: 'UPDATE',
    payload: {
        id: 1,
        name: 'song'
    }
}
```
2. 액션 생성 함수
- 액션을 만들어 주는 함수
```javascript
function addAction(data) = {
    return {
        type: 'UPDATE',
        data
    };
}

const addAction = data => {
    return {
        type: 'UPDATE',
        data
    };
}
```
3. 리듀서(Reducer)
- 변화를 일으키는 함수.
- 리듀서가 현재 상태 값과 액션 객체를 파라미터로 받아 상태를 변화.
- 상태를 수정하는 것이 아닌 새로운 상태로 만듬
```javascript
const initialState = {
    id: 1
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE':
            return {
                ...state,
                id: state.id + 1
            }
        default:
            return state;
    };
}
```
4. 스토어(store)
- 스토어는 애플리케이션 상태와 리듀서를 포함하며 중요한 내장함수를 포함.
- 하나의 프로젝트에는 하나의 스토어만 존재.
5. 디스패치
- 스토어의 내장 함수.
- 액션을 방생시키는 함수.
- 디스패치가 호출되면 스토어는 리듀서 함수를 발생시켜 새로운 상태를 만듬.
```javascript
dispatch(action);
```
6. 구독(Subscription)
- 스토어의 내장 함수.
- 리스터 함수를 파라미터로 받아 subscribe 함수를 호출하면 액션이 디스패치되어 상태가 업데이트될 때마다 리스너를 호출.
```javascript
const listen = () => {
    ...
};

const unsubscribe = store.subscribe(listen);
```
<br/>
### 리덕스 규칙
1. 단일 스토어
하나의 애플리케이션에는 하나의 스토어만.
2. 상태는 읽기 전용
리덕스 상태는 읽기 전용.
업데이트 과정에서 불변성을 지켜야함. (-> 내부적으로 데이터가 변경되는 것을 감지하기위해 얕은 비교를 함.)
3. 리듀서는 순수 함수
   순수 함수 : 
   1. 이전 상태와 액션 객체를 파라미터로 받음
   2. 파라미터 외에는 의존하면 안됨
   3. 이전 상태를 직접 변경하지 않고 새로운 상태 객체를 생성
   4. 같은 파라미터를 받은 리듀서는 같은 결과값을 가져야함
   