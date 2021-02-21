import ImageGallery from "react-image-gallery";

import styles from "./styles.module.scss";

const images = [
  {
    original: "/images/gallery/albany.jpg",
    thumbnail: "/images/gallery/albany_sm.jpg",
  },
  {
    original: "/images/gallery/ginger1.jpg",
    thumbnail: "/images/gallery/ginger1_sm.jpg",
  },
  {
    original: "/images/gallery/ginger2.jpg",
    thumbnail: "/images/gallery/ginger2_sm.jpg",
  },
  {
    original: "/images/gallery/ginger3.jpg",
    thumbnail: "/images/gallery/ginger3_sm.jpg",
  },
  {
    original: "/images/gallery/ginger4.jpg",
    thumbnail: "/images/gallery/ginger4_sm.jpg",
  },
  {
    original: "/images/gallery/ginger5.jpg",
    thumbnail: "/images/gallery/ginger5_sm.jpg",
  },
  {
    original: "/images/gallery/ginger6.jpg",
    thumbnail: "/images/gallery/ginger6_sm.jpg",
  },
  {
    original: "/images/gallery/hdr1.jpg",
    thumbnail: "/images/gallery/hdr1_sm.jpg",
  },
  {
    original: "/images/gallery/hdr2.jpg",
    thumbnail: "/images/gallery/hdr2_sm.jpg",
  },
  {
    original: "/images/gallery/hdr3.jpg",
    thumbnail: "/images/gallery/hdr3_sm.jpg",
  },
  {
    original: "/images/gallery/niagara1.jpg",
    thumbnail: "/images/gallery/niagara1_sm.jpg",
  },
  {
    original: "/images/gallery/niagara2.jpg",
    thumbnail: "/images/gallery/niagara2_sm.jpg",
  },
  {
    original: "/images/gallery/niagara3.jpg",
    thumbnail: "/images/gallery/niagara3_sm.jpg",
  },
  {
    original: "/images/gallery/profile.jpg",
    thumbnail: "/images/gallery/profile_sm.jpg",
  },
  {
    original: "/images/gallery/house.jpg",
    thumbnail: "/images/gallery/house_sm.jpg",
  },
  {
    original: "/images/gallery/moon.jpg",
    thumbnail: "/images/gallery/moon_sm.jpg",
  },
];

export default function Gallery() {
  return (
    <div className={styles.container}>
      <ImageGallery items={images} showPlayButton={false} showBullets />
    </div>
  );
}
