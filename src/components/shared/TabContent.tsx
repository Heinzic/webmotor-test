import { FunctionComponent, ReactNode } from "react";
import Title from "../UI/Title";

interface TabContentProps {
    children: ReactNode
    titleIndex: number
}
 
const TabContent: FunctionComponent<TabContentProps> = ({children, titleIndex}) => {
    return ( 
        <div className="max-w-[716px]">
            <Title size="lg">Контент таба {titleIndex}</Title>
            <span className="max-h-[367px]">{children}</span>
        </div> 
    );
}
 
export default TabContent;