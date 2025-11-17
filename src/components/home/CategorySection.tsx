import React from 'react';
import * as S from './CategorySection.styles';

const CATEGORIES = [
  { id: 'performance', icon: '🎉', label: '공연' },
  { id: 'restaurant', icon: '🍚', label: '밥집' },
  { id: 'cafe', icon: '☕', label: '카페' },
  { id: 'exhibition', icon: '🖼️', label: '전시' },
] as const;

const CategorySection = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Categories</S.Title>
        <S.ViewAllText>View All</S.ViewAllText>
      </S.Header>
      <S.CategoryList>
        {CATEGORIES.map(category => (
          <S.CategoryItem key={category.id}>
            <S.CategoryIcon>
              <S.CategoryIconText>{category.icon}</S.CategoryIconText>
            </S.CategoryIcon>
            <S.CategoryLabel>{category.label}</S.CategoryLabel>
          </S.CategoryItem>
        ))}
      </S.CategoryList>
      <S.IndicatorContainer>
        <S.Indicator active />
        <S.Indicator active />
        <S.Indicator />
      </S.IndicatorContainer>
    </S.Container>
  );
};

export default CategorySection;
