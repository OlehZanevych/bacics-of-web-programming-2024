import Users from "../users";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style.css'
import AddUser from "../add-user";
import Menu from "../menu";

const MainPage = () => {
    return (
        <div className='main-page'>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/add-user' element={<AddUser/>}></Route>
                    <Route path='*' element={<Users/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage;