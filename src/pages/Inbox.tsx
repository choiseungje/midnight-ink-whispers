
import React from 'react';
import { Card } from "@/components/ui/card";
import Header from '@/components/Header';
import BottomNavBar from '@/components/BottomNavBar';

const Inbox = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-midnight to-midnight pb-16">
      <Header />
      
      <main className="flex-grow p-4">
        <h2 className="text-xl font-bold text-purple-light mb-4">Inbox Messages</h2>
        <div className="space-y-4">
          <Card className="bg-midnight-light border-purple/20 p-4">
            <p className="text-gray-400 text-sm">You have no messages yet. Messages will appear here at 10:00 PM.</p>
          </Card>
        </div>
      </main>
      
      <BottomNavBar />
    </div>
  );
};

export default Inbox;
