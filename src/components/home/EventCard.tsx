import React from 'react';
import * as S from './EventCard.styles';

interface EventCardProps {
  title: string;
  location: string;
  status: string;
  statusColor: string;
  distance: string;
  admission: string;
  date?: string;
  venue?: string;
  badge?: string;
  imageUrl?: string;
}

const EventCard = ({
  title,
  location,
  status,
  statusColor,
  distance,
  admission,
  date,
  venue,
  badge,
}: EventCardProps) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImagePlaceholder>
          <S.ImageText>이미지</S.ImageText>
        </S.ImagePlaceholder>
        <S.HeartIcon>❤️</S.HeartIcon>
        {badge && (
          <S.Badge>
            <S.BadgeText>{badge}</S.BadgeText>
          </S.Badge>
        )}
        {date && venue && (
          <S.ImageOverlay>
            <S.DateText>{date}</S.DateText>
            <S.VenueText>{venue}</S.VenueText>
          </S.ImageOverlay>
        )}
      </S.ImageContainer>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.LocationText>{location}</S.LocationText>
        <S.StatusText statusColor={statusColor}>{status}</S.StatusText>
        <S.DetailsContainer>
          <S.DetailItem>
            <S.DetailIcon>📍</S.DetailIcon>
            <S.DetailText>{distance}</S.DetailText>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailIcon>📋</S.DetailIcon>
            <S.DetailText>{admission}</S.DetailText>
          </S.DetailItem>
        </S.DetailsContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default EventCard;
