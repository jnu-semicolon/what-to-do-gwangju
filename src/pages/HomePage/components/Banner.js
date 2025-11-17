import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/banner.png')}
        style={styles.imageBackground}
      >
        {/* 페이지네이션 */}
        <View style={styles.paginationWrapper}>
          <Text style={styles.paginationText}>1/20</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 16, // 좌우 여백
    borderRadius: 12, // 둥근 모서리
  },
  // 배경 이미지
  imageBackground: {
    width: '100%', // 부모 컨테이너 너비에 맞춤
    height: 180,
    justifyContent: 'flex-end', // 페이지네이션 텍스트를 하단으로
    alignItems: 'flex-end', // 페이지네이션 텍스트를 우측으로
  },
  // 페이지네이션 래퍼
  paginationWrapper: {
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    margin: 10, // 우하단 여백
  },
  // 페이지네이션 텍스트
  paginationText: {
    color: '#FFFFFF', // 흰색 텍스트
    fontSize: 12,
  },
});

export default Banner;