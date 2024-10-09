import { FunctionComponent, ReactNode } from "react";
import Title from "../UI/Title";
import Button from "../UI/Button";

interface TabContentProps {
    children: ReactNode
    titleIndex: number
}
 
const TabContent: FunctionComponent<TabContentProps> = ({children, titleIndex}) => {
    return ( 
        <div className="md:max-w-[718px] flex flex-col snap-y grow gap-[10px] bg-[#F2F0F0] px-[20px] py-[25px]">
            <Title size="lg">Контент таба {titleIndex}</Title>
            <div className="max-h-[227px] overflow-y-scroll">{children}</div>
            <Button>Кнопка действия</Button>
        </div> 
    );
}
 
export default TabContent;