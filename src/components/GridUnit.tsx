import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore 
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import { BreakpointValues, Size, Visible } from '../types';
import gridUnit from '../mixins/gridUnit';

export type GridUnitProps = {
  size?: BreakpointValues<Size>,
  visible?: BreakpointValues<Visible>,
};

const GridUnitComponent: React.ComponentType<GridUnitProps> = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['width', 'visible']
});

const GridUnit = styled(GridUnitComponent) `
  box-sizing: border-box;
  ${gridUnit}
` as typeof GridUnitComponent;


export default GridUnit;
