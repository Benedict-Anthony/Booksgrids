import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import ReadLater from './components/pages/ReadLater';
import Search from './components/pages/Search';
import AddPost from './components/pages/AddPost';
import UpdatePost from './components/pages/UpdatePost';
import Admin from './components/pages/Admin';
import UpdateProfile from './components/pages/UpdateProfile';
import SetProfile from './components/pages/SetProfile';
import Authors from './components/pages/Authors';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Home from './components/pages/Home';

import Theme from './components/UI/Theme';
import Header from "./components/Header"
import GlobalStyle from './components/UI/Global.styled';
import Detail from './components/pages/Detail';

function App() {
  return (
    < >
      <ThemeProvider theme={Theme}>

        <GlobalStyle />

        <BrowserRouter>
          <Header />
          <Routes >
            <Route path={'/'} element={<Home />} />
            <Route path={'about'} element={<About />} />
            <Route path={'detail/:slug'} element={<Detail />} />
            <Route path={'search'} element={<Search />} />
            <Route path={"authors"} element={<Authors />} />
            <Route path={"read-later"} element={<ReadLater />} />
            <Route path={"profile/:url"} element={<Profile />} />
            <Route path={"register"} element={<Register />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"admin"} element={<Admin />} />
            <Route path={"admin/profile"} element={<SetProfile />} />
            <Route path={"admin/profile-update"} element={<UpdateProfile />} />
            <Route path={"admin/addpost/"} element={<AddPost />} />
            <Route path={"admin/update/:slug"} element={<UpdatePost />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
