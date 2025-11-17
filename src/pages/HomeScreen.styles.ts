import styled from 'styled-components/native';
import { COLORS, SPACING } from '@/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.BACKGROUND};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const scrollContent = {
  paddingBottom: SPACING.LG,
};
