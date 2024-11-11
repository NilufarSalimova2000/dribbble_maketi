import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
    return (
        useQuery({
            queryKey: ["product"],
            queryFn: () => {
                return request.get("/products").then((res) => res.data)
            }
        })
    )
}