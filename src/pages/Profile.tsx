
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, LogOut } from "lucide-react";
import Header from '@/components/Header';
import BottomNavBar from '@/components/BottomNavBar';

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-midnight to-midnight pb-16">
      <Header />
      
      <main className="flex-grow p-4">
        <h2 className="text-xl font-bold text-purple-light mb-4">Profile</h2>
        
        <Card className="bg-midnight-light border-purple/20 p-6 mb-4">
          <div className="flex flex-col items-center mb-6">
            <div className="rounded-full bg-purple/20 p-6 mb-3">
              <User className="h-12 w-12 text-purple-light" />
            </div>
            <h3 className="text-xl font-semibold text-white">Anonymous User</h3>
            <p className="text-gray-400">Your identity is protected</p>
          </div>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full border-purple/30 text-purple-light justify-start">
              <Settings className="h-4 w-4 mr-2" /> Settings
            </Button>
            <Button variant="outline" className="w-full border-purple/30 text-purple-light justify-start">
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>
        </Card>
      </main>
      
      <BottomNavBar />
    </div>
  );
};

export default Profile;
