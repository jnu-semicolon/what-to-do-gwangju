import styled from 'styled-components/native';
import { COLORS, SPACING } from '@/styles/theme';

export const Container = styled.View`
  padding-horizontal: ${SPACING.MD}px;
  padding-vertical: ${SPACING.LG}px;
  background-color: ${COLORS.BACKGROUND_LIGHT};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.TEXT_PRIMARY};
  margin-bottom: ${SPACING.MD}px;
`;

export const EventsList = styled.View`
  gap: ${SPACING.MD}px;
`;
