import React from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useSearch } from "../../service/useSearch";

export const Search = () => {
    const [input, setinput] = React.useState("");
    const debounce = useDebounce(input);
    const { data, isLoading } = useSearch(debounce);

    return (
        <div className="container">
            <input value={input} onChange={(e) => setinput(e.target.value)} className="w-[100%] rounded-[50px] py-[20px] px-[50px]" placeholder="Search..." type="text" />
            {!isLoading && data && data.length > 0 ? (
                <div>
                    {data.map((item) => (
                        <div className="w-[200px] mb-[20px]" key={item.id}>
                            <img className="w-[200px]" src={item.img} alt="imag" />
                            <div className="flex items-center gap-[15px] m">
                                <img src={item.logo} alt="logo" />
                                <h3 className="text-[#fff]">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                !isLoading && <p className="text-[30px] text-[#fff] mt-[20px]"></p>
            )}
        </div>
    )
}