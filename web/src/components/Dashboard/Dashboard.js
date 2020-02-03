import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Details } from './Details/Details';
import { linkApi } from '../../api/link';
import { createLink } from '../Create/createLink';
import { Navbar } from './Navbar/Navbar';
import { Stats } from './Stats/Stats';
import { Items } from './Items/Items';
import s from './Dashboard.module.scss';

export const DashboardDumb = ({ links, activeLink, onDetails, onCreate }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={s.dashboard} data-test-id={'dashboardComponent'}>
      <div className={s.top}>
        <Navbar onCreate={onCreate} />
        <Stats links={links} />
      </div>
      <div className={s.bottom}>
        <div className={classNames(s.links, opened && s.opened)}>
          <Items links={links} activeLink={activeLink} onDetails={onDetails} />
          <div className={s.sidebarToggle} onClick={() => setOpened(!opened)}>
            <i className={`fa fa-arrow-${opened ? 'left' : 'right'}`} />
          </div>
        </div>
        <div className={s.details}>
          {activeLink && <Details link={activeLink} />}
        </div>
      </div>
    </div>
  );
};

export const Dashboard = ({ match, history }) => {
  const sid = match.params.sid;

  const [links, setLinks] = useState([]);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    fetch();

    async function fetch() {
      const links = await linkApi.getAll();
      setLinks(links);
      if (sid) {
        const activeLink = links.find(l => l.sid === sid);
        setActiveLink(activeLink);
        return;
      }
      if (links.length) {
        onDetails(links[0]);
      }
    }
  }, []);

  const onDetails = link => {
    history.push('/links/' + link.sid);
    setActiveLink(link);
  };

  const onCreate = async () => {
    const resp = await createLink();
    if (!resp) {
      return;
    }
    const link = resp.value;
    setLinks([link, ...links]);
    onDetails(link);
  };

  return (
    <DashboardDumb
      links={links}
      activeLink={activeLink}
      onCreate={onCreate}
      onDetails={onDetails}
    />
  );
};
