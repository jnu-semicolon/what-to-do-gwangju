import styled from 'styled-components/native';
import { COLORS, SPACING, BORDER_RADIUS } from '@/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${SPACING.MD}px;
  padding-vertical: ${SPACING.MD}px;
  background-color: ${COLORS.BACKGROUND_LIGHT};
`;

export const Avatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: ${BORDER_RADIUS.ROUND}px;
  background-color: ${COLORS.BACKGROUND_GREY};
  justify-content: center;
  align-items: center;
  margin-right: ${SPACING.MD}px;
`;

export const AvatarText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${COLORS.TEXT_PRIMARY};
`;

export const InfoSection = styled.View`
  flex: 1;
`;

export const Nickname = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.TEXT_PRIMARY};
  margin-bottom: ${SPACING.XS}px;
`;

export const LocationSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${SPACING.XS}px;
`;

export const LocationIcon = styled.Text`
  font-size: 14px;
`;

export const LocationText = styled.Text`
  font-size: 14px;
  color: ${COLORS.TEXT_SECONDARY};
`;
