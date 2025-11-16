import ChatLayout from "@/components/page-components/chat/ChatLayout";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
   title: "Chat",
   description: "Chat with your patients and manage your conversations seamlessly with VitalCare Connect.",
   keywords: ["chat", "messages", "VitalCare Connect", "healthcare", "doctor", "patient"],
};
const layout = ({ chatList, chat }: { chatList: ReactNode; chat: ReactNode }) => {
   return <ChatLayout chat={chat} chatList={chatList} isPatient={false} />;
};

export default layout;
