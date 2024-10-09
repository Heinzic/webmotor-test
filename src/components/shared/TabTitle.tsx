import { FunctionComponent, ReactNode } from "react";
import Title from "../UI/Title";
import useWindowDimensions from "../hooks/useWindowDimension";

interface TabTitleProps {
    children: ReactNode
    titleIndex: number
}
 
const TabTitle: FunctionComponent<TabTitleProps> = ({children, titleIndex}) => {

    const {width} = useWindowDimensions()

    return ( 
        <div className="max-w-[718px]">
            <div className="flex justify-between">
                <Title size="lg">Заголовок таба {titleIndex}</Title>
                {width <1024 && <button>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="group-hover:fill-white" x="27" width="27" height="27" rx="5" transform="rotate(90 27 0)" fill="#0078EE"/>
                        <g clip-path="url(#clip0_346_4328)">
                        <path className="group-hover:stroke-[#0078EE]" d="M12 9L17 13.5L12 18" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_346_4328">
                        <rect width="19" height="19" fill="white" transform="matrix(0 1 -1 0 23 4)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>}
            </div>
            <span>{children}</span>
        </div> 
    );
}
 
export default TabTitle;