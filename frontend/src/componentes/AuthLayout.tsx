import { Outlet } from "react-router";

import { Header } from "./Header";



export function AuthLayout(){
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}