import React from 'react';
import * as S from './HomeScreen.styles';

import AppHeader from '@/components/home/AppHeader';
import UserProfile from '@/components/home/UserProfile';
import SearchBar from '@/components/home/SearchBar';
import CategorySection from '@/components/home/CategorySection';
import FeaturedBanner from '@/components/home/FeaturedBanner';
import NearbyEventsSection from '@/components/home/NearbyEventsSection';

const HomeScreen = () => {
  return (
    <S.Container>
      <S.ScrollContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={S.scrollContent}
      >
        <AppHeader />
        <UserProfile />
        <SearchBar />
        <CategorySection />
        <FeaturedBanner />
        <NearbyEventsSection />
      </S.ScrollContainer>
    </S.Container>
  );
};

export default HomeScreen;
