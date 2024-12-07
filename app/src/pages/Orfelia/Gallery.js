import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import OrfeliaGalleryPhotos from "./GalleryPhotos.js";

const OrfeliaGallery = () => { 

  return (
    <div>
      <div className="container">
        <h1>
          Gallery
        </h1>
      </div>

       <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
        <Masonry
          gutter="1em"
        >
            {
              OrfeliaGalleryPhotos.map((photo) => (
                <img
                  srcset={photo.srcset}
                  alt={photo.alt}
                  key={photo.srcset}
                />
              ))
            }
          </Masonry>
      </ResponsiveMasonry>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default OrfeliaGallery;