import gridMixin  from './mixins/grid';
import gridUnitMixin from './mixins/gridUnit';
import GridComponent from './components/Grid';
import GridUnitComponent from './components/GridUnit';

const grid = {
    ...gridMixin,
    unit: gridUnitMixin
}

const Grid = {
    ...GridComponent,
    Unit: GridUnitComponent
}

export { grid };
export default Grid;
