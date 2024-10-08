import { FunctionComponent, ReactNode } from "react";
import Title from "../UI/Title";

interface TabTitleProps {
    children: ReactNode
    titleIndex: number
}
 
const TabTitle: FunctionComponent<TabTitleProps> = ({children, titleIndex}) => {
    return ( 
        <div className="max-w-[718px]">
            <Title size="lg">Заголовок таба {titleIndex}</Title>
            <span>{children}</span>
        </div> 
    );
}
 
export default TabTitle;