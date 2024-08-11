export interface Message {
  text: string;
  sender: "assistant" | "user";
}
export interface ChatRequest {
  message: string;
}
export interface ChatResponse {
  message: string;
}
export interface ErrorResponse {
  error: string;
  details?: any;
}