export interface Message {
  text: string;
  sender: "bot" | "user";
}

export type ChatResponse = {
  message: string;
};
