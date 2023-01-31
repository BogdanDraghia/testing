
import Navigation from "./Navigation";

interface LayoutInterface {
    children: JSX.Element;
  }


const Layout = ({children}:LayoutInterface)=>{
    return (
        <div>
            <Navigation/>         
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout