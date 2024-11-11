import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLikeCount = create(
    persist(
        (set) => ({
            data: [],
            addLike: (newData) =>
                set((state) => {
                    return {...state, data: [...state.data, newData]};
                })
        }),
        {name: "likes"}
    )
)