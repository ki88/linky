import React, {useEffect, useState} from 'react';
import {Details} from './Details/Details';
import {linkApi} from '../../api/link';
import {createLink} from '../Create/createLink';
import {Navbar} from './Navbar/Navbar';
import {Stats} from './Stats/Stats';
import {Items} from './Items/Items';
import s from './Dashboard.module.scss';

export const Dashboard = ({match, history}) => {
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

  const onDetails = (link) => {
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
    <div className={s.dashboard}>
      <div className={s.top}>
        <Navbar onCreate={onCreate} />
        <Stats links={links} />
      </div>
      <div className={s.bottom}>
        <div className={s.links}>
          <Items links={links} activeLink={activeLink} onDetails={onDetails} />
        </div>
        <div className={s.details}>
          {activeLink &&
          <Details link={activeLink} />
          }
        </div>
      </div>
    </div>
  )
};
