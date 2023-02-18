import {
    createBrowserRouter,
    Routes,
    Route,
    Link,
    NavLink,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import { Navbar } from './Components/NavBar/Navbar'
import { CreatePost } from './Pages/CreatePost/CreatePost'
import { Home } from './Pages/Home/Home'
import { UserInfo } from './Pages/UserInfo/UserInfo'
import { Question } from './Pages/Question/Question'
import { Login } from './Pages/Member/Login'
import { Logout } from './Pages/Logout/Logout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='create-post' element={<CreatePost />} />
            <Route path='question' element={<Question />} />
            <Route path='user-info' element={<UserInfo />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
