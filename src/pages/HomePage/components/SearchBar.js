import React from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      {/* 검색창 본체 */}
      <View style={styles.searchInputWrapper}>
        <Image
          source={require('../../assets/icon_search.png')} // assets 경로에 맞게 수정
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="검색을 하랑께 (동네, 이벤트. etc..)"
          placeholderTextColor={'#898989'}
        />
      </View>

      {/* 필터 버튼 */}
      <TouchableOpacity style={styles.filterButton}>
        <Image
          source={require('../../assets/icon_filter.png')} // assets 경로에 맞게 수정
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 가로 정렬
    alignItems: 'center', // 세로 중앙 정렬
    paddingHorizontal: 16, // 좌우 여백
    paddingVertical: 12, // 상하 여백
    backgroundColor: '#FFFFFF',
  },
  searchInputWrapper: {
    flex: 1, // 필터 버튼을 제외한 나머지 공간 모두 차지
    flexDirection: 'row', // 검색 아이콘과 텍스트 인풋 가로 정렬
    alignItems: 'center', // 세로 중앙 정렬
    backgroundColor: '#FFFFFF',
    borderRadius: 8, // 둥근 모서리
    paddingHorizontal: 12, // 내부 좌우 여백
    height: 48, // 고정 높이
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8, // 텍스트 인풋과의 간격
  },
  textInput: {
    flex: 1, // 남은 공간 모두 차지
    fontSize: 14,
    color: Colors.textPrimary,
  },
  filterButton: {
    marginLeft: 12, // 검색창과의 간격
    padding: 12, // 터치 영역 확보 및 배경색 채우기
    backgroundColor: Colors.lightGray, // 배경색
    borderRadius: 8, // 둥근 모서리
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
});

export default SearchBar;