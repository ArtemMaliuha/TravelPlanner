import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createUserSlice } from "./userSlice";

export const useStore = create(
    devtools(
        persist(
            subscribeWithSelector(
                immer((...a) => ({
                    ...createUserSlice(...a)
                }))
            ),
            {
                name: "routes-storage"
            }
        )
    )
)
