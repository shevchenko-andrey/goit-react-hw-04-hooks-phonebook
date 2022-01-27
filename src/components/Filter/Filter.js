import PropTypes from 'prop-types';

import { FilterDescription, FilterContact, Input } from './Filter.styled';
function Filter({ value, onChange }) {
  return (
    <FilterContact>
      <FilterDescription>Find contact by name</FilterDescription>
      <Input value={value} onChange={onChange} />
    </FilterContact>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
