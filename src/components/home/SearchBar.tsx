import React from 'react';
import * as S from './SearchBar.styles';

const SearchBar = () => {
  return (
    <S.Container>
      <S.SearchInputContainer>
        <S.SearchIcon>🔍</S.SearchIcon>
        <S.Input placeholder="검색을 하랑께 (동네, 이벤트. etc..)" />
      </S.SearchInputContainer>
      <S.FilterIcon>☰</S.FilterIcon>
    </S.Container>
  );
};

export default SearchBar;
