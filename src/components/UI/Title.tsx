import { FunctionComponent, ReactNode } from "react";

interface TitleProps {
    children: ReactNode
    size: 'lg' | 'md'
}
 
const Title: FunctionComponent<TitleProps> = ({children, size}) => {

    const titleSize = {
        lg: 'text-[32px]',
        md: 'text-[24px]'
    }

    return ( 
        <h1 className={titleSize[size]}>
            {children}
        </h1>
     );
}
 
export default Title;