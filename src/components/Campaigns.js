import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "components/ui/Title";
import { useWindowWidth} from '@react-hook/window-size';


export default function Campaigns() {
  const windowWidth = useWindowWidth()
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive:
    [
      {
        breakpoint:1280,
        settings:{
          slidesToShow:3,
        }
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          arrows:false
        }
      },
      {
        breakpoint:758,
        settings:{
          slidesToShow:1,
          arrows:false
        }
      }
  ]
  };
  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
      <Title>Kampanyalar</Title>
      </div>
      <Slider className="md:-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="px-2 block">
                <img src={banner.image} className="md:rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
