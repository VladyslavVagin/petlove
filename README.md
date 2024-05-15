<font size="36">**PetLove App**</font> - An application for searching a new house for pets and for people who looking for a new small friend in their life. App consist of 6 public pages, 2 private pages (with two sub pages Favorites and Viewed) and pages for login and registration user:
**PUBLIC PAGES**
- Home -  this page will appear first when you load the app, and if user will logout from his profile. There are main title with hero image.
- News - page with list of news about animals, pets with search bar and pagination. For click "Read more" will open new blank of browser with new's web resource.
- Friends - Page with list of companies` contacts which help our pets a lot.
- Find pet - Page with list of existing pets, with pagination and search-filter-bar where user can filter list of animals by various parameters like type, gender, location, price, popularity, species and keyword.
- Registration page - Page with form for register new user.
- Login page - Page for login user to app.
- 404 Page - if will be wrong URL, user transfer to 404 page. This page have button for go to Home page.
  
**PRIVATE PAGES**
  - Profile - Page with information about user, with list of pets of current user, with list of Favorites and Viewed pets. On this page user can change avatar and/or other information about him and Logout from app. For creating new pet user can go to page Add-pet. When user Logout he will transfer to Home page. By default on Profile page will be shown Favorites list of user's pets.
  - Add-pet - Page with form for creating new pet of current user. After succesfull creating user will transfer to Profile page.
In header user can register, login , change palitra of app and navigate by nav.menu.

**App created by using:** React.js, Redux, Redux-Persist, Redux Toolkit, JavaScript, Styled-Components, Axios, Formik + Yup, React-hook-form, React-select, Material UI
Application was created by "Mobile First" approach with 3 breakpoints 375px, 768px and 1280px. From 320px to 375px responsive design. All images also adaptive due to screen resolution and size of screen. All images in webp format.

**Layout** - https://www.figma.com/file/puMNfZVg4YI8UZoJ1QiLLi/Petl%F0%9F%92%9Bve?type=design&node-id=55838-750&mode=design&t=Xg1IwIcKebTl5xGs-0

**Backend** - https://petlove.b.goit.study/api-docs/

**Tech.requirements (in Ukrainian language)** - https://docs.google.com/spreadsheets/d/1DmQUeGZy_oaXN6yn69ORLzou1ZQRyTMlrAqPSit_clw/edit#gid=1134921873

**General requirements**
The layout should be responsive, except for mobile devices as follows:
- mobile: (from 320px - fluid; from 375px - adaptive)
- tablet: from 768px;
- desktop: from 1280px

It should include:
- adherence to semantics according to HTML5 standards
- fonts connected
- optimized sizes of vector and raster graphics
- ensured support for displaying images for retina screens
- optimized loading of static images
- all icons connected through a sprite
- added display of the page's favicon
