import randomWords from "random-words";

export function generateText(): string {
  return randomWords({ exactly: 1, join: " " });
}
