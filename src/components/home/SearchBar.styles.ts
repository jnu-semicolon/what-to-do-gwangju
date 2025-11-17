import styled from 'styled-components/native';
import { COLORS, SPACING, BORDER_RADIUS } from '@/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${SPACING.MD}px;
  padding-vertical: ${SPACING.SM}px;
  background-color: ${COLORS.BACKGROUND_LIGHT};
`;

export const SearchInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.BACKGROUND};
  border-radius: ${BORDER_RADIUS.MD}px;
  padding-horizontal: ${SPACING.MD}px;
  padding-vertical: ${SPACING.SM}px;
  gap: ${SPACING.SM}px;
`;

export const SearchIcon = styled.Text`
  font-size: 18px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: ${COLORS.TEXT_PRIMARY};
`;

export const FilterIcon = styled.Text`
  font-size: 18px;
  margin-left: ${SPACING.SM}px;
`;
