
import React from 'react';
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface MessagePreviewProps {
  message: string;
}

const MessagePreview = ({ message }: MessagePreviewProps) => {
  return (
    <Card className="bg-midnight-light border-purple/20 p-5 rounded-xl shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-purple-light mb-2">Message Preview</h2>
        <p className="text-sm text-gray-400">This is how your message will appear to the recipient.</p>
      </div>
      
      <div className="flex flex-col space-y-4">
        <div className="message-bubble sender-message animate-slide-up">
          <p className="text-white">{message || "Your message will appear here..."}</p>
        </div>
        
        <div className="flex justify-center my-2">
          <ArrowRight className="text-purple-light h-5 w-5" />
        </div>
        
        <div className="message-bubble receiver-message animate-slide-up">
          <p className="text-gray-300">
            {message ? 
              "The recipient will see your message at 10 PM." : 
              "The recipient will see your message here after refinement."}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MessagePreview;
