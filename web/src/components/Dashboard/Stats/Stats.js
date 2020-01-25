import React, { useMemo } from 'react';
import s from './Stats.module.scss';
import { calcStats } from './calcStats';

export const Stats = ({ links }) => {
  const stats = useMemo(() => calcStats(links), [links]);

  return (
    <div className={s.stats}>
      <div className={s.statsList}>
        <div className={s.item}>
          <div className={s.left}>
            <div className={s.icon}>
              <i className={'fal fa-chart-bar'} />
            </div>
          </div>
          <div className={s.right}>
            <div className={s.value}>{stats.total}</div>
            <div className={s.title}>Total</div>
            <div className={s.description}>Total Clicks</div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.left}>
            <div className={s.icon}>
              <i className={'fal fa-browser'} />
            </div>
          </div>
          <div className={s.right}>
            <div className={s.value}>{stats.referrer.clicks}</div>
            <div className={s.title}>
              {stats.referrer.name === 'direct'
                ? 'Email, SMS, Direct'
                : stats.referrer.name}
            </div>
            <div className={s.description}>Top Referrer</div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.left}>
            <div className={s.icon}>
              <i className={'fal fa-map-marker-alt'} />
            </div>
          </div>
          <div className={s.right}>
            <div className={s.value}>{stats.country.clicks}</div>
            <div className={s.title}>{stats.country.code}</div>
            <div className={s.description}>Top Location</div>
          </div>
        </div>
      </div>
    </div>
  );
};
