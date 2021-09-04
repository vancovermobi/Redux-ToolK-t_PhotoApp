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
