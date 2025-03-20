
import React from 'react';
import Card from './Card';

interface TeamMemberProps {
  name: string;
  role: string;
  avatarInitials: string;
  gradientColors: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, avatarInitials, gradientColors }) => {
  return (
    <Card glass={true} hover={true} className="text-center p-6 animate-fade-in">
      <div className={`w-20 h-20 mx-auto rounded-full mb-4 flex items-center justify-center text-white font-semibold text-xl ${gradientColors}`}>
        {avatarInitials}
      </div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </Card>
  );
};

export default TeamMember;
