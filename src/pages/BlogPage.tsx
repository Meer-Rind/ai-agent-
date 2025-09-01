import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, User } from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    title: "The Future of AI Automation: 5 Trends That Will Transform Business in 2025",
    excerpt: "Discover the cutting-edge AI automation trends that forward-thinking businesses are already implementing to stay ahead of the competition.",
    author: "Alex Rodriguez",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI Trends",
    image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const blogPosts = [
    {
      title: "How AI Chatbots Are Revolutionizing Customer Service",
      excerpt: "Learn how businesses are using AI chatbots to provide 24/7 customer support while reducing costs by up to 60%.",
      author: "Sarah Kim",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Customer Service",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Marketing Automation: From Lead Generation to Conversion",
      excerpt: "A comprehensive guide to implementing AI-powered marketing automation that increases conversion rates by 180%.",
      author: "Marcus Johnson",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Marketing",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "ROI Calculator: Measuring the Impact of Business Automation",
      excerpt: "Step-by-step guide to calculating the return on investment for your AI automation initiatives.",
      author: "Emily Chen",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Business Strategy",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "E-commerce Automation: Streamlining Online Retail Operations",
      excerpt: "How AI automation is transforming inventory management, customer service, and sales processes in e-commerce.",
      author: "Alex Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Data Processing Automation: From Raw Data to Business Insights",
      excerpt: "Transform your data processing workflows with AI automation and turn raw data into actionable business intelligence.",
      author: "Sarah Kim",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Data Analytics",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Small Business Automation: Getting Started with AI on a Budget",
      excerpt: "Practical advice for small businesses looking to implement AI automation without breaking the bank.",
      author: "Marcus Johnson",
      date: "November 30, 2024",
      readTime: "5 min read",
      category: "Small Business",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = [
    "All Articles",
    "AI Trends",
    "Customer Service",
    "Marketing",
    "Business Strategy",
    "E-commerce",
    "Data Analytics",
    "Small Business"
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Bot Agent
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with the latest AI automation trends, strategies, and case studies 
            from industry experts.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="group inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300">
              Expert insights and practical guides for AI automation success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="group bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <button className="group/btn inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 p-8">
            <TrendingUp className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with AI Automation Trends
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights, case studies, and automation strategies delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                Subscribe
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-lg opacity-30 -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;