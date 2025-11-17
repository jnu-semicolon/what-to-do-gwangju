import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const eventData = [
  { id: '1', title: '국립아시아문화전당', image: require('../../../../assets/eventlist/event_card.png') },
  { id: '2', title: '다른 이벤트', image: require('../../../../assets/eventlist/event_card.png') }, // 예시 이미지 추가
  { id: '3', title: '세 번째 이벤트', image: require('../../../../assets/eventlist/event_card.png') }, // 예시 이미지 추가
];

const EventList = () => {
  return (
    <View style={styles.container}>
      {/* 헤더: 내 주변 이벤트 */}
      <Text style={styles.title}>내 주변 이벤트</Text>

      {/* 이벤트 카드 가로 스크롤 */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {eventData.map((event) => (
          <TouchableOpacity key={event.id} style={styles.eventCard}>
            <Image source={event.image} style={styles.cardImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F9F9F9',
    paddingBottom: 20, // 하단 탭바와의 간격
  },
  // 헤더 텍스트 스타일
  title: {
    color: '#1C1C1C',
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: -0.408,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  // 스크롤뷰 내부 콘텐츠 스타일
  scrollViewContent: {
    paddingHorizontal: 16, // 스크롤뷰 내부 좌우 패딩
  },
  // 개별 이벤트 카드 스타일
  eventCard: {
    width: 342,
    height: 176,
    flexShrink: 0,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'lightgray',
    marginRight: 16, // 카드 간 간격
    overflow: 'hidden', // 이미지가 둥근 모서리를 따르도록
  },
  // 카드 이미지 스타일
  cardImage: {
    width: '100%',
    height: '100%', // 카드가 꽉 차도록
    resizeMode: 'cover', // 이미지가 카드 영역을 채우도록
  },
});

export default EventList;