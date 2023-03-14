import type { IGlobalState, TStateAction } from "./types";

import { createState } from "@/state";
import { EGlobalStateAction } from "./types";

export function reducer(state: IGlobalState, action: TStateAction) {
  switch (action.type) {
    default:
      return state;

    case EGlobalStateAction.Reset:
      return createState();

    case EGlobalStateAction.KeyDown:
      return {
        ...state,
        keyStates: {
          ...state.keyStates,
          [action.payload.key]: true,
        },
      };

    case EGlobalStateAction.KeyUp:
      return {
        ...state,
        keyStates: {
          ...state.keyStates,
          [action.payload.key]: false,
        },
      };

    case EGlobalStateAction.KeyPress:
      if (state.key !== action.payload.key) return state;

      const index = Math.min(state.index + 1, state.text.length);

      if (index >= state.text.length) return createState();
      else return { ...state, index, key: state.text[index] };
  }
}
