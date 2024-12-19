import React from "react";

interface GalleryPhotoProps {
  srcSet: string;
  alt: string;
  onClick?: (srcSet: string, alt: string) => void;
}

const GalleryPhoto: React.FC<GalleryPhotoProps> = ({ srcSet, alt, onClick }) => {
  const handleClick = () => {
    if (!onClick) return;
    
    onClick(srcSet, alt)
  }

  
  return (
    <li className="gallery-photo" onClick={handleClick}>
      <img
        srcSet={`${srcSet[0]} 1000w, ${srcSet[1]} 700w, ${srcSet[2]} 400w`}
        alt={alt}
      />
    </li>
  )
}

export default GalleryPhoto