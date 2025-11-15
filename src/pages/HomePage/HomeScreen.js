import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header'; // 헤더
import Profile from './components/Profile'; // 프로필
import SearchBar from './components/SearchBar'; // 검색창
import Categories from './components/Categories'; // 카테고리
import Banner from './components/Banner'; // 배너
import EventList from './components/EventList'; // 내 주변 이벤트
import BottomTabs from './components/BottomTabs'; // 하단 탭

const HomeScreen = () => {
  return (
   // SafeAreaView로 상단 노치 영역 고려
    <SafeAreaView style={styles.safeArea}>
      <Header />

      {/* scrollView : 헤더를 제외한 나머지 부분을 스크롤 가능하게 만듦 */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Profile />
        <SearchBar />
        <Categories />
        <Banner />
        <EventList />
      </ScrollView>

      <BottomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
 scrollContent: {
    paddingBottom: 80, // BottomTabs와 겹치지 않게
  },
});

export default HomeScreen;
