import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UpdateReview from "../../Pages/Reviews/UpdateReview";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://service-review-server-side-topaz.vercel.app/services/${params.id}`)
            },
            {
                path: '/updatereview/:id:',
                element: <UpdateReview></UpdateReview>
            }
        ]
    }
])

export default router;