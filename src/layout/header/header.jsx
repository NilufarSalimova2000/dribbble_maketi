import React from "react";
import Logo from "../../assets/logo.svg"


export const Header = () => {
    
    return (
        <header>
            <div className="pt-[14px] pb-[16px] bg-[#0d0c22]">
                <div className="container">
                    <p className="font-normal text-[13px] leading-[130%] text-center text-[#fff]">📚 LAST CHANCE TO REGISTER FOR THE JOB GUARANTEED 8-WEEK Product Design Career Preparation course! 
                        <a className="font-medium text-[#ea4c89]" href="#"> Sign up now!</a>
                    </p>
                </div>
            </div>
            <div className="py-[20px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-[32px] items-center">
                            <img src={Logo} alt="logo" />
                            <div className="flex gap-[31px]">
                                <a className="font-medium text-[#6e6d7a] text-[14px] leading-[143%]" href="#">Inspiration</a>
                                <a className="font-medium text-[#6e6d7a] text-[14px] leading-[143%]" href="#">Find Work</a>
                                <a className="font-medium text-[#6e6d7a] text-[14px] leading-[143%]" href="#">Learn Design</a>
                                <a className="font-medium text-[#6e6d7a] text-[14px] leading-[143%]" href="#">Go Pro</a>
                                <a className="font-medium text-[#6e6d7a] text-[14px] leading-[143%]" href="#">Hire Designers</a>
                            </div>
                        </div>
                        <div className="flex gap-[20px] items-center">
                        <button>Like count: </button>
                            <a className="font-normal block text-[16px] leading-[175%] text-center text-[#6e6d7a]" href="#">Sign in</a>
                            <button className="font-medium text-[#fff] text-[14px] leading-[143%] py-[10px] px-[16px] rounded-[8px] bg-[#ea4c89]">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}