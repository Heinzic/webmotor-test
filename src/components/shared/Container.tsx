import { FunctionComponent, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}
 
const Container: FunctionComponent<ContainerProps> = ({children}) => {
    return ( 
        <div className="max-w-[1478px] h-100% lg:mx-auto flex justify-around gap-[45px] mt-[20px] flex-wrap lg:flex-nowrap md:mx-[10px]">
            {children}
        </div>
     );
}
 
export default Container;