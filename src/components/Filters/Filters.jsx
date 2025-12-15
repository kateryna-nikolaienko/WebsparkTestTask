import './Filters.scss';

import { ReactComponent as GridIcon } from './icons/grid.svg';
import { ReactComponent as ListIcon } from './icons/list.svg';

function Filters({ view, onViewChange }) {
  return (
    <div className="filters">
      <button
        type="button"
        className={`filters__btn ${view === 'grid' ? 'filters__btn--active' : ''
          }`}
        onClick={() => onViewChange('grid')}
        aria-label="Grid view"
      >
        <GridIcon className="filters__icon" />
      </button>

      <button
        type="button"
        className={`filters__btn filter__btn-list ${view === 'list' ? 'filters__btn--active' : ''
          }`}
        onClick={() => onViewChange('list')}
        aria-label="List view"
      >
        <ListIcon className="filters__icon" />
      </button>
    </div>
  );
}

export default Filters;
