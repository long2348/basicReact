import MyComponent from "../views/Example/MyComponent";
import Home from "../views/Home/Home";
import ListToDo from "../views/ToDo/ListToDo";
import User from "../views/User/User";
import UserDetail from "../views/User/UserDetail";
import MainFlex from "../views/Flex/MainFlex";

const router = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/job',
        element: MyComponent
    },
    {
        path: '/todo',
        element: ListToDo
    },
    {
        path: '/user',
        element: User
    },
    {
        path: '/user/:userName',
        element: UserDetail
    },
    {
        path: '/flex',
        element: MainFlex
    },
]
export default router
