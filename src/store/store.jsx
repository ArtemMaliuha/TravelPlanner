import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createUserSlice } from "./userSlice";
import { createRoutesSlice } from "./routesSlice";

export const useStore = create(
    devtools(
        persist(
            subscribeWithSelector(
                immer((...a) => ({
                    ...createUserSlice(...a),
                    ...createRoutesSlice(...a)
                }))
            ),
            {
                name: "travel-planner-storage"
            }
        )
    )
)
