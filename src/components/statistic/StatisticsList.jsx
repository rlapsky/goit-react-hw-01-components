import React from 'react';
import StatisticsListItem from './StatisticsListItem';
import { StatisticsListStyled } from './StatisticsListStyled';

const StatisticsList = ({statistics}) => {
    return (
      <>
        <StatisticsListStyled>
          <div className="container">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
              {statistics.map((statistic) => (
                <StatisticsListItem statistic={statistic} key={statistic.id} />
              ))}
            </ul>
          </div>
        </StatisticsListStyled>
      </>
    );
}

export default StatisticsList;