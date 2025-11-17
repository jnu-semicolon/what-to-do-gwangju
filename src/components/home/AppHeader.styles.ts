import styled from 'styled-components/native';
import { COLORS, SPACING } from '@/styles/theme';

export const Container = styled.View`
  padding-horizontal: ${SPACING.MD}px;
  padding-vertical: ${SPACING.SM}px;
  background-color: ${COLORS.BACKGROUND_LIGHT};
`;

export const Logo = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: ${COLORS.PRIMARY};
  letter-spacing: 1px;
`;
