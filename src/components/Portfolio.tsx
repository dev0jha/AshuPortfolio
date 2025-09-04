import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Lazy Image Component
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', onClick }) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src && !imageSrc) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setHasError(true);
      };
      img.src = src;
    }
  }, [isInView, src, imageSrc]);

  return (
    <div ref={imgRef} className={`relative ${className}`} onClick={onClick}>
      {imageSrc && !hasError && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Camera size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">Failed to load</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Lazy Video Component
interface LazyVideoProps {
  src: string;
  className?: string;
  onClick?: () => void;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, className = '', onClick }) => {
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src && !videoSrc) {
      setVideoSrc(src);
    }
  }, [isInView, src, videoSrc]);

  return (
    <div ref={videoRef} className={`relative ${className}`} onClick={onClick}>
      {videoSrc && !hasError && (
        <video
          src={videoSrc}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          controls
          preload="metadata"
          muted
          loop
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Camera size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">Failed to load video</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [currentSectionMedia, setCurrentSectionMedia] = useState<string[]>([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('Concert');

  const portfolioCategories = [
    { id: 'travel', name: 'Travel' },
    { id: 'concert', name: 'Concert' },
    { id: 'food', name: 'Food' },
    { id: 'models', name: 'Models' },
    { id: 'wedding', name: 'Wedding' }
  ];

  const portfolioData = {
    'Travel': {
      images: [
        "./Travel/Travel.webp",
        "./Travel/Travel2.webp",
        "./Travel/Travel7.webp",
        "./Travel/Travel3.webp",
        "./Travel/Travel1.webp",
        "./Travel/Travel4.webp",
        "./Travel/Travel5.webp",
         "./Travel/Travel6.webp",
      ]
    },
    'Concert': {
      images: [
        "./Concert/1.webp",
        "./Concert/Akhil.webp",
        "./Concert/Parmishh.webp",
        "./Concert/Kanika.webp",
        "./Concert/Shilpa.webp",
        "./Concert/Parmish.webp",
        "./Concert/Akhil2.webp",
        "./Concert/Kanika2.webp",
      ]
    },
    'Food': {
      images: [
        "./Food/Food1.webp",
        "./Food/Food2.webp",
        "./Food/Food3.webp",
        "./Food/Food4.webp",
        "./Food/Food5.webp",
        "./Food/Food6.webp",
        "./Food/Food7.webp",
        "./Food/Food8.webp",
      ]
    },
    'Models': {
      images: [
        "./Freelance/Freelance1.webp",
        "./Freelance/Freelance2.webp",
        "./Freelance/Freelance7.webp",
        "./Freelance/Freelance4.webp",
        "./Freelance/Freelance5.webp",
        "./Freelance/Freelance6.webp",
        "./Freelance/Freelance3.webp",
        "./Freelance/Freelance8.webp",
      ]
    },
    'Wedding': {
      images: [
        "./Wedding/Wedding1.webp",
        "./Wedding/WeddingV.webm",
        "./Wedding/Wedding3.webp",
        "./Wedding/Wedding4.webp",
        "./Wedding/Wedding5.webp",
        "./Wedding/Wedding6.webp",
        "./Wedding/Wedding2.webp",
        "./Wedding/Wedding8.webp",
      ]
    }
  };

  const openPreview = useCallback((media: string, sectionMedia: string[], index: number) => {
    setSelectedMedia(media);
    setCurrentSectionMedia(sectionMedia);
    setCurrentMediaIndex(index);
  }, []);

  const closePreview = useCallback(() => {
    setSelectedMedia(null);
    setCurrentSectionMedia([]);
    setCurrentMediaIndex(0);
  }, []);

  const navigateMedia = useCallback((direction: 'prev' | 'next') => {
    if (currentSectionMedia.length === 0) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentMediaIndex === 0 ? currentSectionMedia.length - 1 : currentMediaIndex - 1;
    } else {
      newIndex = currentMediaIndex === currentSectionMedia.length - 1 ? 0 : currentMediaIndex + 1;
    }

    setCurrentMediaIndex(newIndex);
    setSelectedMedia(currentSectionMedia[newIndex]);
  }, [currentMediaIndex, currentSectionMedia]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;

      if (e.key === 'Escape') {
        closePreview();
      } else if (e.key === 'ArrowLeft') {
        navigateMedia('prev');
      } else if (e.key === 'ArrowRight') {
        navigateMedia('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, navigateMedia, closePreview]);

  const currentMedia = portfolioData[activeTab as keyof typeof portfolioData]?.images || [];

  return (
    <>
      <section id="portfolio" className="min-h-screen bg-black text-white">
        {/* Header */}
        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
              Portfolio
            </h1>

            <div className="flex-wrap justify-center gap-1 bg-gray-900/50 p-1 rounded-lg inline-flex">
              {portfolioCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.name)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 text-sm md:text-base ${
                    activeTab === category.name
                      ? 'text-black shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={activeTab === category.name ? { backgroundColor: 'oklch(85.2% 0.199 91.936)' } : {}}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {currentMedia.map((item, index) => {
              const isVideo = item.match(/\.(mp4|webm|mov)$/i);

              return (
                <div
                  key={`${activeTab}-${index}`}
                  className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => openPreview(item, currentMedia, index)}
                >
                  <div className="aspect-square relative">
                    {isVideo ? (
                      <LazyVideo
                        src={item}
                        className="w-full h-full"
                      />
                    ) : (
                      <LazyImage
                        src={item}
                        alt={`${activeTab} media ${index + 1}`}
                        className="w-full h-full"
                      />
                    )}

                    {!isVideo && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                            <Camera size={24} className="text-white" />
                          </div>
                          <p className="text-white font-medium">View Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 pb-16">
            <a
              href="https://drive.google.com/drive/folders/1jNTDzI-tQQ1h8B-0mCEtyb_ijiJNd36e?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-black"
              style={{ backgroundColor: 'oklch(85.2% 0.199 91.936)', boxShadow: '0 0 20px oklch(85.2% 0.199 91.936 / 0.3)' }}
            >
              <Camera size={20} />
              View My Work
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Modal Preview */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <button
            onClick={closePreview}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia('prev');
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
            aria-label="Previous media"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia('next');
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
            aria-label="Next media"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative max-w-6xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.match(/\.(mp4|webm|mov)$/i) ? (
              <video
                src={selectedMedia}
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                controls
                autoPlay
                muted
                loop
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Preview"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
              {currentMediaIndex + 1} / {currentSectionMedia.length}
            </div>
          </div>

          <div className="absolute bottom-6 right-6 text-white/50 text-sm hidden md:block">
            Use ← → keys to navigate • ESC to close
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
