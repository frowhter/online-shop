import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (

            user.isAuth
            ?<Routes>
                    {authRoutes.map(({path, element}) =>
                        <Route key={path} path={path} element={element} />
                    )}
                    {publicRoutes.map(({path, element}) =>
                        <Route key={path} path={path} element={element} />
                    )}
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
            :<Routes>
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element} />
                )}
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
    );
};

export default AppRouter;