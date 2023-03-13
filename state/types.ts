import type { Dispatch } from "react";

export interface IGlobalState {
  chars: string[];
  index: number;
  key: string;
  keyStates: Record<string, boolean>;
  text: string;
}

export interface IGlobalStateContext {
  dispatch: Dispatch<TStateAction>;
  state: IGlobalState;
}

export enum EGlobalStateAction {
  Reset = "reset",
  KeyDown = "keyDown",
  KeyUp = "keyUp",
  KeyPress = "keyPress",
}

export type TGlobalStateResetAction = {
  type: EGlobalStateAction.Reset;
};

export type TGlobalStateKeyDownAction = {
  type: EGlobalStateAction.KeyDown;
  payload: KeyboardEvent;
};

export type TGlobalStateKeyUpAction = {
  type: EGlobalStateAction.KeyUp;
  payload: KeyboardEvent;
};

export type TGlobalStateKeyPressAction = {
  type: EGlobalStateAction.KeyPress;
  payload: KeyboardEvent;
};

export type TStateAction =
  | TGlobalStateResetAction
  | TGlobalStateKeyDownAction
  | TGlobalStateKeyUpAction
  | TGlobalStateKeyPressAction;
