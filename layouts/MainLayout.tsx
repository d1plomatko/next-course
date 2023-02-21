import Link from "next/link";
import {FC, ReactNode} from "react";


interface IProps {
    children: ReactNode,

}
const MainLayout:FC<IProps> = ({children}) => {

    return (
       <>
           <header>
               <Link href={'/'}>Home</Link>
               <Link href={'/posts'}>Posts</Link>
           </header>
           <main>
               {children}
           </main>
           <footer>footer</footer>
       </>
    )

}

export default MainLayout