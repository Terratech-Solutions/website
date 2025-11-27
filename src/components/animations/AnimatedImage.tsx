'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface AnimatedImageProps extends Omit<ImageProps, 'onLoad'> {
  hoverEffect?: 'zoom' | 'fade' | 'lift' | 'none';
  animateOnLoad?: boolean;
  containerClassName?: string;
}

export const AnimatedImage = ({
  hoverEffect = 'zoom',
  animateOnLoad = true,
  containerClassName = '',
  className = '',
  alt,
  ...imageProps
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getContainerClasses = () => {
    const baseClasses = 'relative overflow-hidden';
    const effectClasses = {
      zoom: 'image-zoom',
      fade: 'image-fade',
      lift: 'hover-lift',
      none: '',
    };
    const loadClass = animateOnLoad && isLoaded ? 'animate-fade-in' : '';

    return `${baseClasses} ${effectClasses[hoverEffect]} ${containerClassName} ${loadClass}`.trim();
  };

  const getImageClasses = () => {
    return `${className} transition-transform duration-500 ease-out`.trim();
  };

  return (
    <div className={getContainerClasses()}>
      <Image
        {...imageProps}
        alt={alt}
        className={getImageClasses()}
        onLoad={() => setIsLoaded(true)}
        style={{
          opacity: animateOnLoad ? (isLoaded ? 1 : 0) : 1,
          transition: 'opacity 0.6s ease-out',
        }}
      />
    </div>
  );
};

export default AnimatedImage;
