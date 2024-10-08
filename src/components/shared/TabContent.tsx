import { FunctionComponent, ReactNode } from "react";
import Title from "../UI/Title";
import Button from "../UI/Button";

interface TabContentProps {
    children: ReactNode
    titleIndex: number
}
 
const TabContent: FunctionComponent<TabContentProps> = ({children, titleIndex}) => {
    return ( 
        <div className="max-w-[716px] flex flex-col snap-y">
            <Title size="lg">Контент таба {titleIndex}</Title>
            <div className="max-h-[227px] overflow-y-scroll">{children}</div>
            <Button>Кнопка действия</Button>
        </div> 
    );
}
 
export default TabContent;