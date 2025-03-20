
import React from 'react';
import { Users } from 'lucide-react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Siddharth Samal',
      role: 'Founding CTO',
      avatarInitials: 'SS',
      gradientColors: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    },
    {
      name: 'Kaashan Panjwani',
      role: 'Founding Product Lead',
      avatarInitials: 'KP',
      gradientColors: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    },
    {
      name: 'Aryan Patil',
      role: 'Founding SDE',
      avatarInitials: 'AP',
      gradientColors: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    },
    {
      name: 'Prisha Sharma',
      role: 'PM Intern',
      avatarInitials: 'PS',
      gradientColors: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-50 text-blue-600 animate-fade-in">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Our Visionaries</span>
          </div>
          
          <h2 className="heading-lg mb-6 animate-fade-in">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in">
            The brilliant minds behind iPersona working to transform how enterprises make decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              avatarInitials={member.avatarInitials}
              gradientColors={member.gradientColors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
