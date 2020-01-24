import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import moment from 'moment';
import {linkApi} from '../../../api/link';
import copy from 'copy-text-to-clipboard';
import s from './Details.module.scss';
import {PieChart} from './PieChart/PieChart';
import {TimeChart} from './TimeChart/TimeChart';

export const Details = ({link}) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch();

    async function fetch() {
      const stats = await linkApi.getStats(link.sid);
      setStats(stats);
    }
  }, [link.sid]);

  const onCopy = () => copy(`localhost:3002/${link.sid}`);

  return (
    <div className={s.details}>
      <div className={s.created}>
        Created {moment.unix(link.created).format('MMM D, hh:mm a')}
        <span className={s.div}>|</span>
        <span className={s.user}>{link.user}</span>
      </div>
      <div className={s.url}>
        {link.url}
      </div>
      <div className={s.info}>
        <span className={s.sid}>
          localhost:3002/{link.sid}
        </span>
        <span onClick={onCopy} className={s.btnAction}>Copy</span>
      </div>
      {stats &&
      <div className={s.stats}>
        <div className={s.total}>
          <div>
            <span className={s.value}>{link.stats.total}</span>
            <i className={classNames(s.icon, 'fal fa-chart-bar')} />
          </div>
          Total Clicks
        </div>
        <div className={s.timeChart}>
          <TimeChart data={stats} />
        </div>
        <div className={s.pieCharts}>
          <div className={s.left}>
            <PieChart title={'Referrers'} data={link.stats.byReferrer} />
          </div>
          <div className={s.right}>
            <PieChart title={'Locations'} data={link.stats.byCountry} />
          </div>
        </div>
      </div>
      }
    </div>
  )
};
