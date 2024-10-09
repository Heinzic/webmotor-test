import { FunctionComponent } from "react";

interface InputProps {
    
}
 
const Input: FunctionComponent<InputProps> = () => {
    return (
        <>
            <input type="text" placeholder="Имя*" 
            className="max-w-[295px]  border-[1px] px-[19px] py-[12px] rounded-lg hover:border-[#0078EE] focus:outline-none focus:border-[#F2F0F0]"/>
        </>
    );
}
 
export default Input;