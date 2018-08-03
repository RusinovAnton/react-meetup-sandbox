import PropTypes from 'prop-types';

export const repoInsightTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  issues: PropTypes.number,
  prs: PropTypes.number,
  commits: PropTypes.number,
  additions: PropTypes.number,
  deletions: PropTypes.number
};

export const columnsTypes = PropTypes.arrayOf(PropTypes.string);

export const idType = PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  .isRequired;
