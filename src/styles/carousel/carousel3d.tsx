import { useEffect, useRef, useState } from "react";
import { i18n as t } from '@/components/i18n/localizer';

interface Carousel3DProps {
  images: string[];
  locale: string;
}

const Carousel3D: React.FC<Carousel3DProps> = ({ images,locale }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const cellCount = images.length;

  const getTranslateZ = () => {
    return window.innerWidth < 640 ? 180 : 288;
  };



  /*
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log("Image clicked");
    setIsActive(!isActive);
  };*/

  const rotateCarousel = (newIndex: number) => {
    if (!carouselRef.current) return;

    const angle = (newIndex / cellCount) * -360;
    carouselRef.current.style.transform =
      `translateZ(-${getTranslateZ()}px) rotateY(${angle}deg)`;
  };

  const next = () => {
    setIndex((prev) => {
      const newIndex = (prev + 1) % cellCount;
      rotateCarousel(newIndex);
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      const newIndex = (prev - 1 + cellCount) % cellCount;
      rotateCarousel(newIndex);
      return newIndex;
    });
  };

 
  let startX = 0;

  const onTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
  };

  useEffect(() => {
    rotateCarousel(index);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div
        className="scene"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
      <div style={{position:"relative", textAlign:"center", top:"1px"}} >
         <strong>{t[locale].portafolioSection.projects[index]}</strong>
      </div>
      <br/>
        <div ref={carouselRef} className="carousel">
          {images.map((src, i) => (
            <div
              key={i}
              className="carousel-cell"
              style={{
                transform: `rotateY(${(360 / cellCount) * i}deg)
                            translateZ(${getTranslateZ()}px)`
              }}
            >


                {/*                 <img onClick={handleClick} style={{
        opacity: isActive ? "0.1" : "10",
        cursor: "pointer",
      }}  src={src} alt={`slide-${i}`} />
                  */}
               <img src={src} alt={`slide-${i}`} />

              {/*
                  <div style={{position:"relative"}}>
                  <h5 style={{
                  opacity: isActive ? "10" : "0.1",
                  }}>asdfsdfsfasdfsfsdfsdfsfsdf{t[locale].portafolioSection.paragraph1}</h5>
                  <a href="" >dsdfsdfasfasdfsafsafasf{t[locale].portafolioSection.projects[i]}</a>
                  </div>*/}

            </div>

          ))}
        </div>
      </div>

      <div className="controls">
        <br/>
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
};

export default Carousel3D;
