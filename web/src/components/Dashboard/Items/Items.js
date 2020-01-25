import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import s from './Items.module.scss';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const Items = ({links, activeLink, onDetails}) => {
  return (
    <div className={s.links}>
      <div className={s.header}>
        <div className={s.info1}>{links.length} Links</div>
        <div className={s.info2}>Clicks all time</div>
      </div>
      <div className={s.linksList}>
        {links.map((link, index) => (
          <div key={index} className={classNames(s.item, link === activeLink && s.active)} onClick={() => onDetails(link)} data-testid={`item-${link.sid}`}>
            <div className={s.date}>
              {moment.unix(link.created).format('MMM D, YYYY')}
            </div>
            <div className={s.url}>
              {link.url}
            </div>
            <div className={s.sid}>
              {baseUrl}/{link.sid}
            </div>
            <div className={s.clicks}>
              <span className={s.total}>{link.stats.total}</span> <i className={'fal fa-chart-bar'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
