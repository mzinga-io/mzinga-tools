import { Banner, Check } from 'mzinga/components';
import React from 'react';

import './index.scss';

const baseClass = 'before-dashboard';

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner type="success">
        <Check />
        <strong>MZinga is completely free and open-source.</strong> If you like what we're doing,{' '}
        <a href="https://github.com/mzinga-io/mzinga-core" target="_blank">
          leave us a star on GitHub!
        </a>
      </Banner>
    </div>
  );
};

export default BeforeDashboard;
