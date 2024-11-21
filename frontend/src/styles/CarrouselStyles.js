import styled from "styled-components";

export const Styledcarrousel = styled.div`
  position: relative;
  height: 400px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;


  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
