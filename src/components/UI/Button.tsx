import { FunctionComponent } from "react";

interface ButtonProps {
    children: string
    icon?: Element
}
 
const Button: FunctionComponent<ButtonProps> = ({children, icon}) => {
    return (
        <button className="bg-[#0078EE] h-[50px] rounded-md text-white hover:bg-blue-500 hover:transition-all duration-500">
            {children}
        </button>
    );
}
 
export default Button;