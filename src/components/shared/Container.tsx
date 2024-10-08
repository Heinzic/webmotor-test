import { FunctionComponent, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}
 
const Container: FunctionComponent<ContainerProps> = ({children}) => {
    return ( 
        <div className="max-w-[1478px] w-100% h-100% mx-auto flex gap-[45px] mt-[20px]">
            {children}
        </div>
     );
}
 
export default Container;