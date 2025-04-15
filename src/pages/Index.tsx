
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavBar from '@/components/BottomNavBar';
import MessageEditor from '@/components/MessageEditor';
import MessagePreview from '@/components/MessagePreview';
import AIAssistant from '@/components/AIAssistant';

const Index = () => {
  const [draftMessage, setDraftMessage] = useState('');

  const handleSuggestionSelect = (suggestion: string) => {
    setDraftMessage(suggestion);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-midnight to-midnight pb-16">
      <Header />
      
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 space-y-6">
            <MessageEditor />
            <MessagePreview message={draftMessage} />
          </div>
          
          <div className="lg:col-span-6">
            <AIAssistant onSuggestionSelect={handleSuggestionSelect} />
          </div>
        </div>
      </main>
      
      <BottomNavBar />
      
      <footer className="text-center py-4 text-gray-500 text-xs hidden lg:block">
        <p>Anonymous messaging • All messages sent at 10:00 PM</p>
      </footer>
    </div>
  );
};

export default Index;
