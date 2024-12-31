import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/From/LogIn";
import Register from "../Pages/From/Register";
import Marathons from "../Pages/Marathons";
import AddMarathons from "../Pages/AddMarathons";
import MarathonsList from "../Pages/MarathonsList";
import ApplyList from "../Pages/ApplyList";
import AboutUs from "../Components/AboutUs/AboutUs";
import MarathonsDetails from "../Components/MarathonsDetails/MarathonsDetails";
import Update from "../Components/Update/Update";
import RegistrationForm from "../Components/MarathonsDetails/RegistrationForm";
import Error from "../Pages/Error";
import PrivateRoute from "../Components/Provider/PrivateRoute";
import RegisterFrom from "../Components/Update/RegisterFrom";
import HomeMarathonDetails from "../Components/HomeMarathonDetails/HomeMarathonDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://assignment-11-server-zeta-seven.vercel.app/addMarathonLimit'),
            },
            
            {
                path:'/Login',
                element: <LogIn></LogIn>,
            },
            {
                path:'/Register',
                element: <Register></Register>,
            },
            {
                path:'/Marathons',
                element: <PrivateRoute><Marathons></Marathons></PrivateRoute>,
                loader: () => fetch('http://assignment-11-server-zeta-seven.vercel.app/addMarathon'),
            },
            {
                path:'/AddMarathons',
                element: <PrivateRoute><AddMarathons></AddMarathons></PrivateRoute>,
            },
            {
                path:'/MarathonsList',
                element: <PrivateRoute><MarathonsList></MarathonsList></PrivateRoute>,
              
            },
            {
                path:'/ApplyList',
                element: <PrivateRoute><ApplyList></ApplyList></PrivateRoute>,
               
            },
            {
                path:'/AboutUs',
                element: <AboutUs></AboutUs>,
            },
            {
                path:'/RegisterFrom/:id',
                element: <RegistrationForm></RegistrationForm>,
                loader: ({params}) => fetch(`http://assignment-11-server-zeta-seven.vercel.app/addMarathon/${params.id}`),
            },
            {
                path:'/MarathonsDetails/:id',
                element: <PrivateRoute><MarathonsDetails></MarathonsDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://assignment-11-server-zeta-seven.vercel.app/addMarathon/${params.id}`),
            },
            {
                path:'/HomeMarathonDetails/:id',
                element: <PrivateRoute><HomeMarathonDetails></HomeMarathonDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://assignment-11-server-zeta-seven.vercel.app/addMarathon/${params.id}`),
            },
            {
                path:'/Update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://assignment-11-server-zeta-seven.vercel.app/addMarathon/${params.id}`),
            },
           
            {
                path:'/UpdateRegister/:id',
                element: <RegisterFrom></RegisterFrom>,
                loader: ({params}) => fetch(`http://assignment-11-server-zeta-seven.vercel.app/application/${params.id}`),
            },
        ]
    },
]);

export default router;