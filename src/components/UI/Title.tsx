import { FunctionComponent, ReactNode } from "react";
import useWindowDimensions from "../hooks/useWindowDimension";

interface TitleProps {
    children: ReactNode
    size: 'lg' | 'md'
}
 
const Title: FunctionComponent<TitleProps> = ({children, size}) => {

    const {width} = useWindowDimensions()

    const titleSize = width > 1023? {
        lg: 'text-[32px]',
        md: 'text-[24px]'
    }:
    {
        lg: 'text-[22px]',
        md: 'text-[20px]',
    };

    return ( 
        <h1 className={titleSize[size]}>
            {children}
        </h1>
     );
}


 
export default Title;