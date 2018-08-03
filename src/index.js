import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const data = [
  {
    id: '5b635734e5442e1e7862932e',
    name: 'Noel Reyes',
    issues: 16,
    prs: 43,
    commits: 138,
    additions: 32500,
    deletions: 39699
  },
  {
    id: '5b635734c8ec9fd090551f2e',
    name: 'Eve House',
    issues: 96,
    prs: 59,
    commits: 551,
    additions: 14711,
    deletions: 91612
  },
  {
    id: '5b63573417e0bad1525a78ba',
    name: 'Bryant Cantrell',
    issues: 16,
    prs: 41,
    commits: 528,
    additions: 74180,
    deletions: 55380
  },
  {
    id: '5b635734277a8c5445c38730',
    name: 'Lea Clarke',
    issues: 59,
    prs: 52,
    commits: 138,
    additions: 91697,
    deletions: 16948
  },
  {
    id: '5b635734731c94621c0ac19f',
    name: 'Marian Baker',
    issues: 62,
    prs: 15,
    commits: 398,
    additions: 90392,
    deletions: 36581
  },
  {
    id: '5b63573430f93235a996cafc',
    name: 'Britt Rodriquez',
    issues: 26,
    prs: 89,
    commits: 356,
    additions: 42494,
    deletions: 78176
  },
  {
    id: '5b6357340c130c6dc7aa1360',
    name: 'Holman Hart',
    issues: 30,
    prs: 33,
    commits: 921,
    additions: 54498,
    deletions: 47073
  },
  {
    id: '5b635734f8f680bd63741853',
    name: 'Francesca Mayo',
    issues: 55,
    prs: 54,
    commits: 337,
    additions: 74462,
    deletions: 6603
  },
  {
    id: '5b6357342f450a04ec65d38f',
    name: 'Fry Beach',
    issues: 70,
    prs: 57,
    commits: 230,
    additions: 84352,
    deletions: 17742
  },
  {
    id: '5b6357348de10804dd7a3176',
    name: 'Casey Odom',
    issues: 22,
    prs: 19,
    commits: 573,
    additions: 17968,
    deletions: 698
  }
];

ReactDOM.render(<App data={data} />, document.getElementById('root'));
