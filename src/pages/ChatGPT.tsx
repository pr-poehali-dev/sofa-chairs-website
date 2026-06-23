import { ChatGPTPlaygroundPage } from "@/components/extensions/chatgpt-polza/ChatGPTPlaygroundPage";

const API_URL = "https://functions.poehali.dev/23f8b0fd-e986-44a3-b4d2-8bd899b92389";

const ChatGPT = () => {
  return <ChatGPTPlaygroundPage apiUrl={API_URL} defaultModel="openai/gpt-4o-mini" />;
};

export default ChatGPT;
