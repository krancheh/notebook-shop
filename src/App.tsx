import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import UserService from "./services/UserService";
import ItemPage from "./pages/ItemPage/ItemPage";
import { useAppDispatch } from "./store";
import { setUser } from "./store/userSlice";




const App = () => {
    const dispatch = useAppDispatch();

    const privateLoader = async (): Promise<null> => {
        // Проверка авторизации пользователя
        try {
            const { data } = await UserService.auth();
            if (data.user) {
                dispatch(setUser(data.user.firstName));
                return null;
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    };

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />} loader={privateLoader}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<ItemPage />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="signup" element={<AuthPage />} />
        </Route>
    ));

    return (
        <RouterProvider router={router} />
    )
}

export default App