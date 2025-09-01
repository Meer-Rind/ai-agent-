import React from 'react';
import { Users, Target, Award, Zap, Brain, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Ahmed Ali",
      role: "CEO & AI Strategist",
      description: "8+ years in AI/ML with expertise in enterprise automation solutions",
      expertise: ["AI Strategy", "Machine Learning", "Business Automation"]
    },
    {
      name: "Muhammad Hasnain Muawia",
      role: "Lead Developer",
      description: "Former Google AI researcher specializing in NLP and computer vision",
      expertise: ["Deep Learning", "NLP", "Computer Vision"]
    },
    {
      name: "Muhammad Bilal",
      role: "CTO & Head of Implementation",
      description: "Automation specialist with 500+ successful AI deployments",
      expertise: ["Process Automation", "Integration", "Project Management"]
    },
    {
      name: "Muhammad Bilal",
      role: "AI Solutions Architect",
      description: "PhD in Computer Science, expert in custom AI model development",
      expertise: ["Model Development", "Data Science", "Architecture"]
    }
  ];

  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Every solution is tailored to your unique business needs and goals"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results Driven",
      description: "We measure success by the tangible value we deliver to your business"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Delivery",
      description: "Fast implementation without compromising quality or reliability"
    }
  ];

  const achievements = [
    { number: "500+", label: "Businesses Transformed" },
    { number: "50M+", label: "Tasks Automated" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Bot Agent</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're a team of AI experts, automation specialists, and business strategists dedicated to 
            transforming how businesses operate through intelligent automation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To democratize AI automation, making cutting-edge technology accessible to businesses of all sizes. 
                We believe every organization should have the power to automate repetitive tasks, gain intelligent insights, 
                and focus on what truly matters - growing their business.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Since 2020, we've helped over 500 businesses transform their operations, saving millions of hours 
                and driving unprecedented efficiency gains.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-300">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <Globe className="h-32 w-32 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center group-hover:text-cyan-300 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              World-class AI experts with a passion for business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 text-center">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Bot Agent?
            </h2>
            <p className="text-xl text-gray-300">
              We combine deep technical expertise with business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: "Proven Track Record",
                description: "500+ successful implementations across 30+ industries with measurable ROI"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Rapid Implementation",
                description: "Get your AI automation up and running in weeks, not months, with our proven methodology"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Ongoing Support",
                description: "Dedicated support team ensures your AI systems continue to perform at their best"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-cyan-400 mb-6 flex justify-center group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI automation expertise can drive your business forward.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
            Schedule a Consultation
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-lg opacity-30 -z-10"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
