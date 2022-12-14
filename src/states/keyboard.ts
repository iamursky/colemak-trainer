import zustand from "zustand";

export interface IKeyboardState {
  keyStates: Record<string, boolean>;

  handleKeyDown(e: KeyboardEvent): void;
  handleKeyUp(e: KeyboardEvent): void;
}

export const useKeyboard = zustand<IKeyboardState>((set) => ({
  keyStates: {},

  handleKeyDown(e) {
    set((state) => ({ ...state, [e.key]: true }));
  },

  handleKeyUp(e) {
    set((state) => ({ ...state, [e.key]: false }));
  },
}));
