import React from 'react';
import { StatisticsListItemStyled } from './StatisticsListItemStyled';

const StatisticsListItem = ({statistic}) => {
    return (
      <>
        <StatisticsListItemStyled key={statistic.id}>
          <span className="label">{statistic.label}</span>
          <span className="percentage">{statistic.percentage}%</span>
        </StatisticsListItemStyled>
      </>
    );
}

export default StatisticsListItem;