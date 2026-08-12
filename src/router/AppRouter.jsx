import { useEffect, useState } from 'react';
import DetailModal from '../components/DetailModal';
import HomePage from '../pages/HomePage';
import DestinationsPage from '../pages/DestinationsPage';
import JourneysPage from '../pages/JourneysPage';
import EventsPage from '../pages/EventsPage';
import SonTrangPage from '../pages/SonTrangPage';

function currentRoute() { return window.location.hash.replace(/^#\/?/, '').split('/')[0] || 'home'; }

export default function AppRouter() {
  const [route, setRoute] = useState(currentRoute); const [selected, setSelected] = useState(null);
  useEffect(() => { const sync = () => { setRoute(currentRoute()); window.scrollTo(0, 0); }; window.addEventListener('hashchange', sync); return () => window.removeEventListener('hashchange', sync); }, []);
  const props = { onSelect: setSelected };
  const page = route === 'destinations' ? <DestinationsPage {...props} /> : route === 'journeys' ? <JourneysPage {...props} /> : route === 'events' ? <EventsPage {...props} /> : route === 'son-trang' ? <SonTrangPage /> : <HomePage {...props} />;
  return <><div className="route-transition" key={route}>{page}</div><DetailModal item={selected} onClose={() => setSelected(null)} /></>;
}
