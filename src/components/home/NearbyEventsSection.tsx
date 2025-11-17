import React from 'react';
import * as S from './NearbyEventsSection.styles';
import EventCard from './EventCard';

const MOCK_EVENTS = [
  {
    id: '1',
    title: '전남대학교 JOB FESTA',
    location: '용봉동',
    status: 'Opens Tomorrow',
    statusColor: '#F44336',
    distance: '50m',
    admission: '무료 입장 가능',
    date: '2025. 10. 30. 목',
    venue: '전남대학교 5·18광장',
    badge: '오픈런 EVENT',
  },
  {
    id: '2',
    title: '국립아시아문화전당',
    location: '광산동',
    status: '7:00 ~ 20:00',
    statusColor: '#4CAF50',
    distance: '2.2km',
    admission: '무료 입장 가능',
    date: undefined,
    venue: undefined,
    badge: undefined,
  },
];

const NearbyEventsSection = () => {
  return (
    <S.Container>
      <S.Title>내 주변 행사</S.Title>
      <S.EventsList>
        {MOCK_EVENTS.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            status={event.status}
            statusColor={event.statusColor}
            distance={event.distance}
            admission={event.admission}
            date={event.date}
            venue={event.venue}
            badge={event.badge}
          />
        ))}
      </S.EventsList>
    </S.Container>
  );
};

export default NearbyEventsSection;
