import { FunctionComponent } from "react";
import Input from "../UI/Input";

interface Tab2ContentProps {
    
}
 
const Tab2Content: FunctionComponent<Tab2ContentProps> = () => {
    return (
        <form className="flex flex-col gap-[27px]">
            <Input/>
            <Input/>
            <Input/>
        </form>
    );
}
 
export default Tab2Content;