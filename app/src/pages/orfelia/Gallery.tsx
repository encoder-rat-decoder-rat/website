import React, { lazy, Suspense, useState, useEffect } from "react";
import OrfeliaGalleryPhotos from "./GalleryPhotos";
import Loading from "../../components/Loading";
import "./Gallery.css";

const GalleryPhoto = lazy(() => import('./GalleryPhoto'));

const OrfeliaGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handlePhotoClick = (src: string) => {
    setSelectedPhoto(src);
  };

  const closeOverlay = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const galleryPhotos = OrfeliaGalleryPhotos.map((photo) => (
    <Suspense
      fallback={<Loading />}
      key={photo.src}
    >
      <GalleryPhoto src={photo.src} alt={photo.alt} onClick={handlePhotoClick}/>
    </Suspense>
  ))

  return (
    <div>
      <div className="container">
        <h1>
          Gallery
        </h1>
      </div>
      <ul className="gallery">
        {galleryPhotos}
      </ul>
      <br />
      <br />
      <br />
      <br />
      {selectedPhoto && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content">
            <img src={selectedPhoto} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
}

export default OrfeliaGallery;