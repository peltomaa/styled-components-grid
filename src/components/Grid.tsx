import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore 
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import { BreakpointValues, HAlign, VAlign, Reverse, Wrap } from '../types';
import grid from '../mixins/grid';

export type GridProps = {
  halign?: BreakpointValues<HAlign>,
  valign?: BreakpointValues<VAlign>,
  reverse?: BreakpointValues<Reverse>,
  wrap?: BreakpointValues<Wrap>,
};

const GridComponent: React.ComponentType<GridProps> = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['halign', 'valign', 'reverse', 'wrap']
});

const Grid = styled(GridComponent) `
  display: flex;
  ${grid}
` as typeof GridComponent;

export default Grid;
