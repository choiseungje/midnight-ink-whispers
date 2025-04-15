
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus } from "lucide-react";
import Header from '@/components/Header';
import BottomNavBar from '@/components/BottomNavBar';

const Friends = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-midnight to-midnight pb-16">
      <Header />
      
      <main className="flex-grow p-4">
        <h2 className="text-xl font-bold text-purple-light mb-4">Friends</h2>
        
        <Card className="bg-midnight-light border-purple/20 p-6 mb-4 flex flex-col items-center justify-center">
          <div className="rounded-full bg-purple/20 p-4 mb-4">
            <Users className="h-8 w-8 text-purple-light" />
          </div>
          <p className="text-gray-300 text-center mb-4">Connect with friends to send anonymous messages</p>
          <Button className="bg-purple hover:bg-purple-dark text-white">
            <Plus className="h-4 w-4 mr-2" /> Add Friends
          </Button>
        </Card>
      </main>
      
      <BottomNavBar />
    </div>
  );
};

export default Friends;
