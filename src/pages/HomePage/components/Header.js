import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* 로고와 지도 아이콘을 묶는 '왼쪽 컨테이너' */}
        <View style={styles.leftContainer}>
          {/* JOABRO 로고 */}
          <Image
            source={require('../../../../assets/joabro_logo.png')}
            style={styles.logo}
          />
          </View>

        {/* 알림 아이콘 */}
        <TouchableOpacity style={styles.bellButton}>
          <Image
            source={require('../../../assets/header/icon_bell.png')} // assets 경로에 맞게 수정
            style={styles.bellIcon}
          />

          {/* 알림이 있을 때 이 View를 표시합니다. */}
          <View style={styles.notificationDot} />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F9F9F9',
    // iOS 노치 부분 처리 (선택 사항, StatusBar.currentHeight는 Android만 해당)
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // 좌우 끝 정렬
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#F9F9F9',
  },
  // 왼쪽 컨테이너 (로고 + 지도 버튼)
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // JOABRO 로고 이미지
  logo: {
    width: 100,
    height: 50,
    flexShrink: 0,
    resizeMode: 'contain',
  },
  // 알림 버튼 영역
  bellButton: {
    padding: 8,
    position: 'relative',
  },
  // 알림 아이콘 이미지
  bellIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  // 알림 도트 (알림이 있을 때 표시)
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6, 
    height: 6,
    borderRadius: 3, // 원으로 만들기 (너비/높이의 절반)
    backgroundColor: '#FC353A',
  },
});

export default Header;