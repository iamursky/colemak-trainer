import { generate } from "random-words";

export function generateWord(): string {
  return generate({ exactly: 1, join: " " });
}
