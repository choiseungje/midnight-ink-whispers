
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Bot, Send } from "lucide-react";

interface AIAssistantProps {
  onSuggestionSelect: (suggestion: string) => void;
}

const AIAssistant = ({ onSuggestionSelect }: AIAssistantProps) => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: 'Hi! I can help you craft your message. What would you like to say?' }
  ]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    // Add user message to conversation
    setConversation(prev => [...prev, { role: 'user', content: userInput }]);
    
    // Simulate AI response (in a real app, this would call an AI service)
    setTimeout(() => {
      const aiResponses = [
        "That's a good start. How about phrasing it this way: \"" + userInput.trim() + "\"",
        "Consider adding more specific details to make your message clearer.",
        "Your message sounds good! Would you like to make it more formal or keep it casual?",
        "I suggest: \"" + userInput.trim() + "\". Click to use this suggestion."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setConversation(prev => [...prev, { role: 'ai', content: randomResponse }]);
    }, 1000);
    
    setUserInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="bg-midnight-light border-purple/20 p-5 rounded-xl shadow-lg flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-purple-light mb-2">AI Message Assistant</h2>
        <p className="text-sm text-gray-400">Let me help you craft the perfect message.</p>
      </div>
      
      <div className="flex-grow overflow-y-auto mb-4 space-y-3 max-h-[260px]">
        {conversation.map((message, index) => (
          <div 
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] message-bubble message-transition ${
              message.role === 'user' ? 'bg-purple/80 text-white' : 'bg-midnight text-gray-300'
            } rounded-lg`}>
              {message.role === 'ai' && (
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="h-4 w-4 text-purple-light" />
                  <span className="text-purple-light text-xs font-medium">Assistant</span>
                </div>
              )}
              <p className="text-sm">{message.content}</p>
              
              {message.role === 'ai' && message.content.includes("\"") && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 text-xs text-purple-light hover:text-purple hover:bg-purple/10"
                  onClick={() => {
                    const suggestion = message.content.match(/"([^"]+)"/)?.[1] || '';
                    if (suggestion) onSuggestionSelect(suggestion);
                  }}
                >
                  Use this suggestion
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <Textarea
          placeholder="Ask the AI for help..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[60px] bg-midnight border-purple/30 focus:border-purple text-sm"
        />
        <Button
          onClick={handleSendMessage}
          className="bg-purple hover:bg-purple-dark text-white self-end"
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default AIAssistant;
