import ImageGallery from "react-image-gallery";

import styles from "./styles.module.scss";

const imageFolder = "/images/gallery/";

const imageNames = [
  "albany",
  "ginger1",
  "ginger2",
  "ginger3",
  "ginger4",
  "ginger5",
  "ginger6",
  "hdr1",
  "hdr2",
  "hdr3",
  "niagara1",
  "niagara2",
  "niagara3",
  "profile",
];

const images = imageNames.map((name) => {
  return {
    original: `${imageFolder}${name}_sm.jpg`,
    thumbnail: `${imageFolder}${name}_thumbnail.jpg`,
    originalAlt: `${name} reduced size picture`,
    thumbnailAlt: `${name} thumbnail picture`,
    description: name,
  };
});

export default function Gallery() {
  return (
    <div className={styles.container}>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        slideInterval={4000}
        slideDuration={1000}
        autoPlay
        showBullets
        lazyLoad
      />
    </div>
  );
}
