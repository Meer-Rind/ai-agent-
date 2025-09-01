import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

// Helper to convert YouTube URL to embed format with autoplay
function getEmbedUrl(url: string) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
  const videoId = match ? match[1] : '';
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`
    : url;
}

const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl = "https://www.youtube.com/embed/a79zDHz7gck?si=51TXIzsuHhYcwC4z" 
}) => {
  if (!isOpen) return null;

  const embedUrl = getEmbedUrl(videoUrl);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h3 className="text-xl font-bold text-white">AI Bot Agent</h3>
            <p className="text-gray-400 text-sm">See our solutions in action</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-gray-800 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/a79zDHz7gck?si=51TXIzsuHhYcwC4z&autoplay=1"
            title="YouTube video player"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-800/50 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div>
              <p className="text-white font-medium">Ready to get started?</p>
              <p className="text-gray-400 text-sm">Book a free consultation to discuss your automation needs</p>
            </div>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:scale-105"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;