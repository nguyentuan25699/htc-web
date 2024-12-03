import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { ImageList } from "src/components/pages/Gallery/Gallery.type";
import "./ModalPreviewImage.css";

type Props = { images: ImageList[]; initialIndex: number };

const ModalPreviewImage: React.FC<Props> = ({ images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLImageElement>(null);

  const handleSelect = (selectedIndex: number) => {
    setCurrentIndex(selectedIndex);
  };

  useEffect(() => {
    if (activeThumbnailRef.current && thumbnailContainerRef.current) {
      activeThumbnailRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, activeThumbnailRef.current]);

  return (
    <div className="modal-preview-container">
      <Carousel activeIndex={currentIndex} onSelect={handleSelect} controls={true} indicators={false} interval={null}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="image-preview" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="carousel-index">
        <span>
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      <div
        className="thumbnail-list"
        ref={thumbnailContainerRef}
        style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "8px 0" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setCurrentIndex(index)}
            ref={currentIndex === index ? activeThumbnailRef : null}
            className={`thumbnail ${currentIndex === index ? "active-thumbnail" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalPreviewImage;
