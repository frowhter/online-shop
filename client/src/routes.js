import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CATALOG_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";
import Catalog from "./pages/Catalog";
import ProductDetailed from "./pages/ProductDetailed";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: CATALOG_ROUTE,
        element: <Catalog/>
    },
    {
        path: PRODUCT_ROUTE,
        element: <ProductPage/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        element: <ProductDetailed/>
    },
]