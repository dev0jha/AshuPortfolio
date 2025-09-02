import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Camera, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Awards Won' },
    { icon: Heart, number: '5', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center w-full">
            About Me
          </h2>

          <div className="flex justify-center mb-12">
            <div className="relative">
              <img
                src="/About.webp"
                alt="Ashutosh Ojha"
                className="rounded-lg shadow-2xl w-full max-w-md h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-lg shadow-xl">
                <Camera size={32} className="text-gray-900" />
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Hello, I'm Ashutosh Ojha, an India-based photographer with over five years of experience transforming everyday moments into unforgettable art. My journey began with a love for visual storytelling—capturing emotion, personality, and meaning in each image. I specialize in portrait, landscape, event, and nature photography, always striving to create frames that do more than record the scene: they evoke feeling, spark imagination, and quietly tell a story.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              As the founder of SoftFrame Production, I lead a creative team dedicated to developing unique and soulful visual experiences for every client. Whether I'm photographing an intimate portrait or a vibrant event, my craft is a blend of technical skill, creative exploration, and genuine connection. Every photograph is more than a memory—it's a piece of art designed to inspire and endure.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:transform hover:scale-105"
                  style={{ backgroundColor: 'oklch(85.2% 0.199 91.936)' }}
                >
                  <stat.icon size={32} className="text-gray-900 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
