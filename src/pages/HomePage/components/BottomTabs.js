import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/icon_tab_home.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/icon_tab_map.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/icon_tab_joabro.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/icon_tab_bookmark.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/icon_tab_settings.png')} style={styles.tabIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 가로 정렬
    alignItems: 'center', // 세로 중앙 정렬
    width: '100%',
    height: 90, // 탭바 높이
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1, // 상단 경계선
    borderTopColor: '#F4F4F6', // 경계선 색상
  },
  // 하단메뉴에서의 전체 영역
  tabItem: {
    flex: 1, // 각 탭이 동일한 너비를 갖도록
    alignItems: 'center', // 아이콘을 가로 중앙으로
    justifyContent: 'center', // 아이콘을 세로 중앙으로
    paddingVertical: 8, // 내부 패딩
  },
  // 하단메뉴 아이콘
  tabIcon: {
    display: 'flex',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    aspectRatio: 1/1,
    resizeMode: 'contain',
  },
});

export default BottomTabs;