import styled from 'styled-components/native';
import { COLORS, SPACING, BORDER_RADIUS } from '@/styles/theme';

export const Container = styled.View`
  padding-horizontal: ${SPACING.MD}px;
  padding-vertical: ${SPACING.LG}px;
  background-color: ${COLORS.BACKGROUND_LIGHT};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACING.MD}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.TEXT_PRIMARY};
`;

export const ViewAllText = styled.Text`
  font-size: 14px;
  color: ${COLORS.TEXT_SECONDARY};
`;

export const CategoryList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${SPACING.SM}px;
`;

export const CategoryItem = styled.View`
  align-items: center;
  gap: ${SPACING.SM}px;
`;

export const CategoryIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: ${BORDER_RADIUS.ROUND}px;
  background-color: ${COLORS.BACKGROUND};
  justify-content: center;
  align-items: center;
`;

export const CategoryIconText = styled.Text`
  font-size: 28px;
`;

export const CategoryLabel = styled.Text`
  font-size: 12px;
  color: ${COLORS.TEXT_PRIMARY};
`;

export const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${SPACING.XS}px;
  margin-top: ${SPACING.SM}px;
`;

interface IndicatorProps {
  active?: boolean;
}

export const Indicator = styled.View<IndicatorProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${props => (props.active ? COLORS.PRIMARY : COLORS.BORDER)};
`;
