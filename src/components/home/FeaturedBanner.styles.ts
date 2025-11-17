import styled from 'styled-components/native';
import { COLORS, SPACING, BORDER_RADIUS } from '@/styles/theme';

export const Container = styled.View`
  padding-horizontal: ${SPACING.MD}px;
  padding-vertical: ${SPACING.MD}px;
  background-color: ${COLORS.BACKGROUND_LIGHT};
`;

export const BannerImage = styled.View`
  width: 100%;
  height: 180px;
  background-color: #2d5016;
  border-radius: ${BORDER_RADIUS.MD}px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const BannerText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${COLORS.TEXT_WHITE};
  letter-spacing: 2px;
`;

export const IndicatorContainer = styled.View`
  position: absolute;
  bottom: ${SPACING.MD}px;
  right: ${SPACING.MD}px;
  background-color: rgba(0, 0, 0, 0.3);
  padding-horizontal: ${SPACING.SM}px;
  padding-vertical: ${SPACING.XS}px;
  border-radius: ${BORDER_RADIUS.SM}px;
`;

export const IndicatorText = styled.Text`
  font-size: 12px;
  color: ${COLORS.TEXT_WHITE};
`;
