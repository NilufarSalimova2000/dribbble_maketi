import React from "react";
import { useGetProducts } from "../service/query/useGetProducts";
import { Card } from "../../components/card";
import banner from "../../assets/banner.png"
import { Search } from "../../components/search/search";

export const Home = () => {
    const { data, isLoading } = useGetProducts();

    return (
        <>
            <section className="pt-[50px] pb-[120px]" style={{backgroundImage:`url(${banner})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
                <div className="container">
                    <div className="flex gap-[14px] justify-center mb-[46px]">
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Discover</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Animation</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Branding</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Illustration</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Mobile</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Print</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Product Design</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Typography</a>
                        <a className="bg-[rgba(0,0,0,0.5)] hover:bg-white font-medium text-[#fff] hover:text-[#000] text-[16px] leading-[125%] py-[16px] px-[21px] rounded-[50px]" href="#">Web Design</a>
                    </div>
                    <div className="w-[624px] text-center mx-[auto]">
                        <h1 className="w-[411px] mx-[auto] font-bold text-[#fff] text-[32px] leading-[125%] mb-[16px]">Explore the world’s leading design portfolios</h1>
                        <p className="font-normal text-[#fff] text-[16px] leading-[175%] mb-[42px]">Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
                        <Search />
                    </div>
                </div>
            </section>
            <section className="py-[100px]">
                <div className="container">
                    <div className="grid grid-cols-4 gap-[36px]">
                        {isLoading ? (
                            <h2>Loading...</h2>
                        ) : (
                            data?.map((item) => <Card key={item.id} img={item.img} logo={item.logo} name={item.name} />)
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}