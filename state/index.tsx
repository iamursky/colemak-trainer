import type { IGlobalState, IGlobalStateContext } from "./types";

import { EGlobalStateAction } from "./types";
import { generateText } from "@/lib/generate-text";
import { ReactNode, createContext, useMemo, useReducer, useContext, useCallback } from "react";
import { reducer } from "./reducer";

const INITIAL_GLOBAL_STATE = createState();

const INITIAL_GLOBAL_STATE_CONTEXT: IGlobalStateContext = {
  state: INITIAL_GLOBAL_STATE,
  dispatch: () => {},
};

const StateContext = createContext<IGlobalStateContext>(INITIAL_GLOBAL_STATE_CONTEXT);

export function GlobalStateProvider({
  children,
  initialState = INITIAL_GLOBAL_STATE,
}: {
  children: ReactNode;
  initialState?: IGlobalState;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
}

export function useGlobalState() {
  const { state, dispatch } = useContext(StateContext);

  // prettier-ignore
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    dispatch({ type: EGlobalStateAction.KeyDown, payload: e });
  }, [dispatch]);

  // prettier-ignore
  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    dispatch({ type: EGlobalStateAction.KeyUp, payload: e });
  }, [dispatch]);

  // prettier-ignore
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    dispatch({ type: EGlobalStateAction.KeyPress, payload: e });
  }, [dispatch]);

  return useMemo(
    () => ({ state, handleKeyDown, handleKeyUp, handleKeyPress }),
    [state, handleKeyDown, handleKeyUp, handleKeyPress]
  );
}

export function createState(text: string = generateText()): IGlobalState {
  return {
    chars: text.split(""),
    index: 0,
    key: text[0],
    keyStates: {},
    text,
  };
}
