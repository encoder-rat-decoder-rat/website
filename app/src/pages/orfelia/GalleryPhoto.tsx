import React from "react";

interface GalleryPhotoProps {
  src: string;
  alt: string;
  onClick?: (src: string, alt: string) => void;
}

const GalleryPhoto: React.FC<GalleryPhotoProps> = ({ src, alt, onClick }) => {
  const handleClick = () => {
    if (!onClick) return;
    
    onClick(src, alt)
  }
  
  return (
    <li className="gallery-photo" onClick={handleClick}>
      <img
        src={src}
        alt={alt}
      />
    </li>
  )
}

export default GalleryPhoto