import React from 'react';
import * as S from './UserProfile.styles';

const UserProfile = () => {
  return (
    <S.Container>
      <S.Avatar>
        <S.AvatarText>G</S.AvatarText>
      </S.Avatar>
      <S.InfoSection>
        <S.Nickname>닉네임입니다닉넴</S.Nickname>
        <S.LocationSection>
          <S.LocationIcon>📍</S.LocationIcon>
          <S.LocationText>북구 용봉동</S.LocationText>
        </S.LocationSection>
      </S.InfoSection>
    </S.Container>
  );
};

export default UserProfile;
