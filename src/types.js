import { string, number, arrayOf, oneOf } from 'prop-types';

export const repoInsightsTypes = {
  additions: number,
  commits: number,
  deletions: number,
  id: string,
  issues: number,
  name: string,
  prs: number
};

export const columnsTypes = arrayOf(oneOf(Object.keys(repoInsightsTypes)));
