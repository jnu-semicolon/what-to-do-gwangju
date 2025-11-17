import React from 'react';
import * as S from './FeaturedBanner.styles';

const FeaturedBanner = () => {
  return (
    <S.Container>
      <S.BannerImage>
        <S.BannerText>용비봉무</S.BannerText>
        <S.IndicatorContainer>
          <S.IndicatorText>1/20</S.IndicatorText>
        </S.IndicatorContainer>
      </S.BannerImage>
    </S.Container>
  );
};

export default FeaturedBanner;
