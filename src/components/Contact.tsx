import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'Ojhashu788@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 90766 60593' },
    { icon: MapPin, label: 'Location', value: 'Delhi / Gorakhpur' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/witthashu?igsh=N2t4OGJsdzI5NHRv',
      label: 'Instagram'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1789WQNnT3/',
      label: 'Facebook'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ashutosh-ojha-5222b52a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">{item.label}</p>
                    <p className="text-white font-semibold text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-semibold text-white mb-8">Follow My Journey</h4>
            <div className="flex gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-white hover:transform hover:scale-110 shadow-lg hover:shadow-yellow-400/25"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
