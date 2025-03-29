import React from 'react';
import { Code } from 'lucide-react';

function Achievements() {
  const achievements = [
    "Listed in Google's Hall of Fame for reporting a high-severity vulnerability",
    "Ranked among Yahoo's Top 10 Security Researchers",
    "Listed in Twitter's Hall of Fame for discovering critical security flaws",
    "Recognized by Fortinet for identifying CVE-2017-3125",
    "Received multiple acknowledgments from major tech companies"
  ];

  return (
    <div id="achievements" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-gray-800/30 p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-700/30 transition-all duration-300"
          >
            <Code className="text-blue-400 flex-shrink-0" />
            <p>{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;