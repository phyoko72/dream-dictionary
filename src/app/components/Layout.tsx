import {ReactNode} from "react"
import Nav from "./Nav"
import UpBtn from "./UpBtn"

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className="min-h-screen w-full mt-10 lg:mt-52 mb-3">
            <div className=" w-[90%] md:w-3/4 m-auto text-center">
                <Nav />
                {children}
            </div>
            <UpBtn />
        </div>
    )
}
