import React from "react";
import { LikeIcon } from "../../assets/like";
import { useLikeCount } from "../../store/useLikeCount";

export const Card = ({ img, logo, name }) => {
    const [isLiked, setIsLiked] = React.useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div>
            <img src={img} alt="imag" />
            <div className="flex gap-[20px] mt-[8px] items-center">
                <img src={logo} alt="logo" />
                <h3 className="font-medium text-[14px] leading-[143%] text-[#0d0c22]">{name}</h3>
                <button onClick={handleLikeClick} style={{
                    color: isLiked ? "red" : "#9E9EA7", 
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                }}>
                    <LikeIcon />
                </button>
            </div>
        </div>
    )
}