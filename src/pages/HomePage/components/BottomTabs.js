import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/BottomTabs/icon_tab_route.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/BottomTabs/icon_tab_map.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/BottomTabs/icon_tab_home.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/BottomTabs/icon_tab_favorites.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/BottomTabs/icon_tab_settings.png')} style={styles.tabIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 90,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1, // 상단 경계선
    borderTopColor: '#F4F4F6', // 경계선 색상
  },
  
  // 하단메뉴에서의 전체 영역
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    paddingVertical: 8, 
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