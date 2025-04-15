
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

enum RefinementStage {
  DRAFT = 'draft',
  REFINED = 'refined',
  FINAL = 'final'
}

const MessageEditor = () => {
  const [message, setMessage] = useState('');
  const [refinedMessage, setRefinedMessage] = useState('');
  const [currentStage, setCurrentStage] = useState<RefinementStage>(RefinementStage.DRAFT);
  const { toast } = useToast();

  const simulateRefinement = (text: string) => {
    // Simulate AI refinement of the text (in a real app, this would call an AI service)
    const refinedText = text.trim();
    return refinedText;
  };

  const handleDraftComplete = () => {
    if (!message.trim()) {
      toast({
        title: "Message is empty",
        description: "Please enter a message to refine.",
        variant: "destructive"
      });
      return;
    }
    
    const refined = simulateRefinement(message);
    setRefinedMessage(refined);
    setCurrentStage(RefinementStage.REFINED);
    toast({
      title: "Message refined",
      description: "Your message has been refined and is ready for review."
    });
  };

  const handleSendMessage = () => {
    if (!refinedMessage.trim()) return;
    
    setCurrentStage(RefinementStage.FINAL);
    toast({
      title: "Message scheduled",
      description: "Your message will be delivered at 10:00 PM."
    });
    
    // In a real app, this would schedule the message to be sent at 10 PM
    setTimeout(() => {
      setMessage('');
      setRefinedMessage('');
      setCurrentStage(RefinementStage.DRAFT);
    }, 3000);
  };

  const handleEditDraft = () => {
    setCurrentStage(RefinementStage.DRAFT);
  };

  return (
    <Card className="bg-midnight-light border-purple/20 p-5 rounded-xl shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-purple-light mb-2">
          {currentStage === RefinementStage.DRAFT ? 'Compose Your Message' : 
           currentStage === RefinementStage.REFINED ? 'Review Refined Message' : 
           'Message Scheduled'}
        </h2>
        <p className="text-sm text-gray-400">
          {currentStage === RefinementStage.DRAFT ? 'Your message will be refined before sending.' : 
           currentStage === RefinementStage.REFINED ? 'This is how your message will appear to the recipient.' :
           'Your message has been scheduled for delivery.'}
        </p>
      </div>

      {currentStage === RefinementStage.DRAFT && (
        <div className="space-y-4">
          <Textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[150px] bg-midnight border-purple/30 focus:border-purple"
          />
          <Button 
            onClick={handleDraftComplete}
            className="bg-purple hover:bg-purple-dark text-white"
          >
            Refine Message
          </Button>
        </div>
      )}

      {currentStage === RefinementStage.REFINED && (
        <div className="space-y-4">
          <div className="p-4 bg-midnight rounded-lg border border-purple/30 min-h-[150px]">
            <p className="text-white">{refinedMessage}</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleEditDraft}
              variant="outline"
              className="border-purple/30 text-purple-light hover:bg-purple/10"
            >
              Edit Draft
            </Button>
            <Button 
              onClick={handleSendMessage}
              className="bg-purple hover:bg-purple-dark text-white"
            >
              Schedule for 10 PM
            </Button>
          </div>
        </div>
      )}

      {currentStage === RefinementStage.FINAL && (
        <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
          <div className="rounded-full bg-purple/20 p-4 mb-4">
            <Clock className="h-10 w-10 text-purple-light" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Message Scheduled</h3>
          <p className="text-gray-400 text-center mb-4">
            Your message will be delivered at 10:00 PM tonight.
          </p>
          <Button 
            onClick={() => setCurrentStage(RefinementStage.DRAFT)}
            className="bg-purple hover:bg-purple-dark text-white"
          >
            Compose New Message
          </Button>
        </div>
      )}
    </Card>
  );
};

export default MessageEditor;
