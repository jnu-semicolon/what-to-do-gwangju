import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* 'G' 아바타 */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>G</Text>
      </View>

      {/* 닉네임 및 위치 정보 */}
      <View style={styles.textContainer}>
        <Text style={styles.nickname}>닉네임입니다닉넴</Text>
        <View style={styles.locationRow}>
          <Image
            source={require('../../../../assets/profile/icon_pin.png')} // assets 경로에 맞게 수정
            style={styles.pinIcon}
          />
          <Text style={styles.locationText}>북구 용봉동</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 가로 정렬
    alignItems: 'center', // 세로 중앙 정렬
    paddingHorizontal: 16, // 좌우 여백
    paddingVertical: 12, // 상하 여백
    backgroundColor: '#F9F9F9',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26, // 원형으로 만들기 (너비/2)
    backgroundColor: '#D3D3D3', // 프로필사진 배경색
    justifyContent: 'center', // 텍스트를 세로 중앙
    alignItems: 'center', // 텍스트를 가로 중앙
    marginRight: 12, // 닉네임 텍스트와의 간격
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: -0.408,
  },
  nickname: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1C',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: -0.408,
  },
  locationRow: {
    flexDirection: 'row', // 핀 아이콘과 텍스트 가로 정렬
    alignItems: 'center', // 세로 중앙 정렬
    marginTop: 4, // 닉네임과의 간격
  },
  pinIcon: {
    width: 16,
    height: 16,
    marginRight: 4, // 텍스트와의 간격
  },
  locationText: {
    width:128,
    height:16,
    flexShrink:0,
    color: '#202020',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: -0.408,
  },
});

export default Profile;