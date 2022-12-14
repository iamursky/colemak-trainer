import randomWords from "random-words";
import zustand from "zustand";

export interface ITrainingState {
  text: string;
  chars: string[];
  key: string;
  index: number;

  handleKeyPress(event: KeyboardEvent): void;
  reset(): void;
}

export const useTraining = zustand<ITrainingState>((set, get) => {
  const [initialText, initialChars] = generateText();

  return {
    text: initialText,
    chars: initialChars,
    key: initialText[0],
    index: 0,

    handleKeyPress(e) {
      const state = get();

      if (state.key !== e.key) return;

      const nextIndex = Math.min(state.index + 1, state.text.length);
      if (nextIndex >= state.text.length) return state.reset();
      else set({ index: nextIndex, key: state.text[nextIndex] });
    },

    reset() {
      const [text, chars] = generateText();
      set({ text, chars, index: 0, key: text[0] });
    },
  };
});

function generateText(): [text: string, chars: string[]] {
  const text = randomWords({ exactly: 1 }).join(" ");
  const chars = Array.from(text);

  return [text, chars];
}
