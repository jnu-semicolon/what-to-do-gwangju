import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const categoryData = [
  { id: '1', name: '공연', icon: require('../../../../assets/category/icon_category_performance.png') },
  { id: '2', name: '밥집', icon: require('../../../../assets/category/icon_category_food.png') },
  { id: '3', name: '카페', icon: require('../../../../assets/category/icon_category_cafe.png') },
  { id: '4', name: '전시', icon: require('../../../../assets/category/icon_category_exhibition.png') },
  { id: '5', name: '체험', icon: require('../../../../assets/category/icon_category_exhibition.png') }, // 이미지 나중에 교체 
  { id: '6', name: '축제', icon: require('../../../../assets/category/icon_category_exhibition.png') },
  { id: '7', name: '스포츠', icon: require('../../../../assets/category/icon_category_exhibition.png')},
  { id: '8', name: '팝업', icon: require('../../../../assets/category/icon_category_exhibition.png') },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      {/* 헤더: Categories / View All */}
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* 카테고리 아이템 가로 스크롤 */}
      <ScrollView
        horizontal={true} // 가로 스크롤 활성화
        showsHorizontalScrollIndicator={false} // 스크롤바 숨기기
        contentContainerStyle={styles.scrollViewContent} // 스크롤뷰 내부 콘텐츠 스타일
      >
        {categoryData.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.iconWrapper}>
              <Image source={category.icon} style={styles.categoryIcon} />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
        {/* Figma에서 점 3개 표시된 부분은 DotsIndicator 라이브러리를 사용하거나 직접 구현 */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // 위쪽 여백
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row', // 가로 정렬
    justifyContent: 'space-between', // 양쪽 끝으로
    alignItems: 'center', // 세로 중앙 정렬
    paddingHorizontal: 16, // 좌우 여백
    marginBottom: 12, // 스크롤 목록과의 간격
  },
  title: {
    color: '#1C1C1C',
    fontFamily: 'Inter',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: -0.408,
  },
  viewAllText: {
    color: '#007AFF',
    textAlign: 'right',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: -0.408,
  },
  scrollViewContent: {
    paddingHorizontal: 16, // 스크롤뷰 내부 좌우 패딩
    paddingBottom: 20, // 점 인디케이터 공간 확보 (필요시)
  },
  // 각 카테고리 아이템과 텍스트를 포함하는 칸
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 60,
  },
  // 아이콘을 감싸는 원형 배경
  iconWrapper: {
    width: 67,
    height: 66,
    flexShrink: 0,
    borderRadius: 28, // 원형
    backgroundColor: '#FFFFFF',
    strokeWidth: 0.719,
    stroke: '#F4F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8, // 텍스트와의 간격
  },
  // 카테고리 아이콘 그림
  categoryIcon: {
    width: 30,
    height: 39,
    flexShrink: 0,
    aspectRatio: 10/13,
    resizeMode: 'contain',
  },
  // 카테고리 텍스트 스타일
  categoryText: {
    width: 81,
    height: 17,
    flexShrink: 0,
    color: '#000000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: -0.408,
    textAlign: 'center',
  },
});

export default Categories;