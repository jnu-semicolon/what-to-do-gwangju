import styled from 'styled-components/native';
import { COLORS, SPACING, BORDER_RADIUS } from '@/styles/theme';

export const Container = styled.View`
  background-color: ${COLORS.BACKGROUND_LIGHT};
  border-radius: ${BORDER_RADIUS.MD}px;
  margin-bottom: ${SPACING.MD}px;
  overflow: hidden;
  shadow-color: ${COLORS.TEXT_PRIMARY};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: ${COLORS.BACKGROUND};
`;

export const ImagePlaceholder = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.BACKGROUND_GREY};
  justify-content: center;
  align-items: center;
`;

export const ImageText = styled.Text`
  font-size: 14px;
  color: ${COLORS.TEXT_TERTIARY};
`;

export const HeartIcon = styled.Text`
  position: absolute;
  top: ${SPACING.SM}px;
  right: ${SPACING.SM}px;
  font-size: 20px;
`;

export const Badge = styled.View`
  position: absolute;
  top: ${SPACING.SM}px;
  left: ${SPACING.SM}px;
  background-color: ${COLORS.PRIMARY};
  padding-horizontal: ${SPACING.SM}px;
  padding-vertical: ${SPACING.XS}px;
  border-radius: ${BORDER_RADIUS.SM}px;
`;

export const BadgeText = styled.Text`
  font-size: 10px;
  color: ${COLORS.TEXT_WHITE};
  font-weight: 600;
`;

export const ImageOverlay = styled.View`
  position: absolute;
  bottom: ${SPACING.SM}px;
  left: ${SPACING.SM}px;
  right: ${SPACING.SM}px;
`;

export const DateText = styled.Text`
  font-size: 12px;
  color: ${COLORS.TEXT_WHITE};
  margin-bottom: ${SPACING.XS}px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const VenueText = styled.Text`
  font-size: 12px;
  color: ${COLORS.TEXT_WHITE};
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const ContentContainer = styled.View`
  padding: ${SPACING.MD}px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.TEXT_PRIMARY};
  margin-bottom: ${SPACING.XS}px;
`;

export const LocationText = styled.Text`
  font-size: 14px;
  color: ${COLORS.TEXT_SECONDARY};
  margin-bottom: ${SPACING.SM}px;
`;

interface StatusTextProps {
  statusColor: string;
}

export const StatusText = styled.Text<StatusTextProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.statusColor};
  margin-bottom: ${SPACING.SM}px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  gap: ${SPACING.MD}px;
`;

export const DetailItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${SPACING.XS}px;
`;

export const DetailIcon = styled.Text`
  font-size: 12px;
`;

export const DetailText = styled.Text`
  font-size: 12px;
  color: ${COLORS.TEXT_SECONDARY};
`;
