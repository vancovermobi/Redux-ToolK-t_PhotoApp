# Giới thiệu Project thực tế : Photo App

## Mục tiêu:
Xây dựng một Project mini đơn giản 
để ứng dụng kiến thức phân tích Redux vào Project ReactJS.

- Đơn giản , không quá phức tạp.
- Tập trung nhiều vào `Redux` với `Redux Toolkit`.
- Sử dụng toàn bộ là `Hooks`.
- Học sử dụng UI lib: `Reactstrap`.
- Học cách sử dụng form: `Formik`.
- Học cách tổ chức API (optional).

## Project này biuld cái gì ?

`PHOTO APP`
- App đơn giản để quản lý hình ảnh yêu thích , được chọn lựa từ https://picsum.photos/
- CRUD operators
- Gồm có 2 trang:
    + `Home`: listing + view + delete
    + `AddEdit`: dùng để tạo mới + sửa thông tin của một photo.
- Mỗi photo gồm: `title` + `categoryId` + `imageUrl`
- Các chức năng:
    + Render danh sách photo yêu thích
    + Lọc photo theo category
    + Thêm mới một photo
    + Chỉnh sửa một photo
    + Remove một photo
    + Persist dữ liệu khi reload browser
    + Random photo ngẫu nhiên từ https://picsum.photo/.
    + Hiển thị danh sách photo https://picsum.photo/ để lựa chọn.

## Công nghệ sử dụng trong Project này :
- ReactJS (CRA) : npx create-react-app my-app --template redux 
- Redux ( Redux Toolkit)  :  npm install @reduxjs/toolkit  || yarn add @reduxjs/toolkit
- Form management: Formik :  npm install formik --save     || yarn add formik 
- Routings: React Router  :  npm install react-router-dom || styled-components
- UI lib : Reactstrap     :  npm install --save reactstrap react react-dom
- Redux-Persist
- SCSS : npm i --save-dev node-sass
- Select : npm i react-select react-redux
- Yup : npm i -s yup
=> npm i --save-dev node-sass react-router-dom reactstrap formik @reduxjs/toolkit redux

## Bạn sẽ học được gì từ Project này:
- Tổ chức folder, files trong thực tế.
- Sử dụng Redux tốt hơn với Redux Toolkit.
- Biết cách tạo các custom field trong `Formik`.
- Thiết kế Routings trong ReactJS App
- Sử dụng một thư viện UI bên ngoài để làm UI cho nhanh.

## Tổ chức folder
src
|__assets
|  |__images
|  |__styles ( global styles)
|
|__components (shared components) 
|
|__features
   |__Photo
      |__components
      |  |__PhotoList
      |  |__PhotoCard
      |  |__PhotoForm
      |
      |__pages
      |  |__MainPage
      |  |__AddEditPage
      |  
      |__photoSlide.js
      |__index.js

## Tổ chức Routings
- Sử dụng kỹ thuật lazy load components.
- load theo __features

//App.js
function App() {
  return (
    <BrowserRouters>
      <Switch>
        <Route path="/photos" component={ Photo } />
        <Route path="/user" component={ User } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouters>
  );
}
 ## Custom Field
 - Cầu nối giữa UI Control và Formik.
 - UI Control là một Controlled Component với Props:
   + name : tên xác định Control
   + value: giá trị của Control
   + onChange: trigger hàm này với giá trị mới khi có thay đổi
   + onBlur: xác định khi nào thì Control này bị touched

## RandomPhoto
Props
|__name
|__imageUrl
|__onImageUrlChange
|__onRandomButtonBlur

## Redux-Toolkit
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
const store = configureStore({ reducer: rootReducer })

## createReducer()
const counterReducer = createReducer(0, {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state + action.payload,	
});

## mutate data trực tiếp không cần phải immerjs(...data)
const todoReducer = createReducer([] , {
   addTodo: (state, action) =>{
       state.push(action.payload)
   }
    removeTodo: (state, action) =>{
       state.splice(action.payload , 1)
   }
})

## createAction()
const increment = createAction('counter/increment')
const action = increment(3) 
      -> return { type: 'counter/increment', payload: 3 }
console.log(increment.toString()) -> 'counter/increment'

## Các bước : Setup_Ví Dụ
=======================================
*Bước_1: setup todo slice (todoSlice.js)
======
const  todoSlice = createSlice({
     name: 'todo',
     initialState: [],
     reducers: {
          addTodo( state, action ) { state.push( action.payload ); },
          removeTodo( state, action ) { state.splice( action.payload, 1 ); },
    }
});
const { actions , reducer } = todoSlice;
export const { addTodo, removeTodo } = actions;
export default reducer;
======================================
*Bước_2: setup redux store ( store.js )
======
import { configureStore } from '@reduxjs/toolkit';
import  todoSlice from 'features/todos/todoSlice';

const store = configureStore({
      reducer: {
           todos: todoSlice,
      },
});
======================================
* Bước_3: Bind Redux Provider to App(index.js)
=======
import  { Provider } from 'react-redux';
import  store from './store';
import  App from './App';

function Main(){
    return (
          <Provider store={store}>
             <App />
          </Provider>
    )
}
======================================
*Bước_4 : Using redux in component (todo.jsx)
======
import { userDispatch , userSelector } from 'react-redux';
import { removeTodo } from 'features/todos/todoSlice';

function Todo() {
    const dispatch = userDispatch();             // Đẩy action lên reducer 
    const todoList = userSelector( state => state.todos); // lấy state từ redux Store

    const handleTodoClick = ( todo, idx ) =>{
         const action = removeTodo(idx);
         dispatch(action);
    }
    return(
          <ul>
                { toodoList.map((todo, idx) =>(
                       <li key={todo.id} onClick={ ()=> handleTodoClick( todo, idx ) }>
                             { todo.title }
                       </li>
                 )) }
          </ul>
    )
}

=================================
## Deploy ReactJS lên Surge.sh
 1. npm i -g surge
 2. npm run build
 3. folder build : surge

Cach 2: sh ./deploy-surge.sh
    

