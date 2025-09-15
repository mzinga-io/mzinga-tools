import React from 'react';

import './index.scss';

const baseClass = 'after-dashboard';

const AfterDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <h4>GraphQL Playground</h4>
      <p>
        Did you know that MZinga gives you a complete GraphQL server too? Try the{' '}
        <a href="/api/graphql-playground" target="_blank">
          GraphQL playground
        </a>{' '}
        for this demo.
      </p>
      <h4>Talk with us</h4>
      <p>
        We're here to help! You can{' '}
        <a href="mailto:info@mzinga.io?subject=MZinga Demo" target="_blank">
          email us
        </a>{' '}
        with any questions.
      </p>
    </div>
  );
};

export default AfterDashboard;
