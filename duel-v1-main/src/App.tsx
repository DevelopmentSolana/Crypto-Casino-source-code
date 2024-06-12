import { lazy, Suspense, useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
  Navigate
} from 'react-router-dom';
import classnames from 'classnames';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { useContainerQuery } from 'react-container-query';
import 'react-toastify/dist/ReactToastify.css';
import {
  PageSpinner,
  Box,
  Flex,
  Sidebar,
  Appbar,
  Footer,
  Chat,
  Snow,
  LightRope
} from 'components';

import dreamTowerBG from 'assets/imgs/dreamtower/bg.jpg';
import Providers from './Providers';
import GlobalStyle from './GlobalStyle';

import { useAppSelector } from 'state';
import { useAuth } from 'hooks';
// import GameContainer from "components/GameContainer";
// import dreamTowerBG from 'assets/imgs/dreamtower/bg.jpg';

const Home = lazy(() => import('./pages/Home'));
const Jackpot = lazy(() => import('./pages/Jackpot'));
// const GrandJackpot = lazy(() => import('./pages/GrandJackpot'));
const Coinflip = lazy(() => import('./pages/Coinflip'));
const DreamTower = lazy(() => import('./pages/DreamTower'));
const Help = lazy(() => import('./pages/Help'));
const Profile = lazy(() => import('./pages/Profile'));
// const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const Fair = lazy(() => import('./pages/Fair'));
const Staking = lazy(() => import('./pages/MyDuelbots/Staking'));
const ConfirmActivate = lazy(() => import('./pages/Profile/ConfirmActivate'));
// const Plinko = lazy(() => import('./pages/Plinko'));
const WagerRace = lazy(() => import('./pages/Race'));
const Crash = lazy(() => import('./pages/Crash'));

function RequireAuth({ children }: any) {
  const { isAuthenticated } = useAppSelector(state => state.user);

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <Router>
      <Providers>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="coinflip" element={<Coinflip />} />
            <Route path="jackpot" element={<Jackpot />} />
            {/* <Route path="grandjackpot" element={<GrandJackpot />} /> */}
            {/* <Route path="blackjack" element={<ComingSoon />} /> */}
            <Route path="dream-tower" element={<DreamTower />} />
            <Route path="fair" element={<Fair />} />
            <Route path="help" element={<Help />} />
            <Route path="r/:referralCode" element={<ConfirmActivate />} />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="duelbots/myduelbots"
              element={
                <RequireAuth>
                  <Staking tabIndex={0} />
                </RequireAuth>
              }
            />
            <Route
              path="duelbots/staking"
              element={
                <RequireAuth>
                  <Staking tabIndex={1} />
                </RequireAuth>
              }
            />

            {/* <Route path="plinko" element={<Plinko />} /> */}
            <Route path="daily-race" element={<WagerRace tabIndex={0} />} />
            <Route path="weekly-raffle" element={<WagerRace tabIndex={1} />} />
            <Route path="crash" element={<Crash />} />
          </Route>
        </Routes>

        <ToastContainer
          position="bottom-right"
          theme="dark"
          // autoClose={false}
          closeOnClick
        />
      </Providers>
    </Router>
  );
}

const query = {
  width_700: {
    minWidth: 700
  },
  width_800: {
    minWidth: 800
  },
  width_900: {
    minWidth: 900
  },
  width_1100: {
    minWidth: 1100
  },
  width_1300: {
    minWidth: 1300
  }
};

function Layout() {
  const [params, containerRef] = useContainerQuery(query, { width: 375 });
  const { pathname } = useLocation();

  const isHoliday = useAppSelector(state => state.user.isHoliday, shallowEqual);
  const code = useAppSelector(state => state.user.code, shallowEqual);
  const { login, logout } = useAuth();

  const getBackground = useCallback(() => {
    const urls = [
      {
        path: '/dream-tower',
        background: dreamTowerBG
      }
    ];

    return urls.find(url => url.path === pathname)?.background;
  }, [pathname]);

  // if (!authorized) return <ComingSoon setAuthorized={setAuthorized} />;
  if (code) return <></>;

  return (
    <Flex flexDirection="column">
      {isHoliday && (
        <>
          <Snow />
          <LightRope />
        </>
      )}
      <Appbar login={login} logout={logout} />

      <Flex>
        <Sidebar login={login} logout={logout} />
        <Wrapper>
          <MainContainer>
            <Box position="relative">
              <StyledBox background={getBackground()} />
              <GameContainer
                ref={containerRef}
                className={classnames(params)}
                isHoliday={isHoliday}
              >
                <Suspense fallback={<PageSpinner />}>
                  <Outlet />
                </Suspense>
              </GameContainer>
            </Box>
            <Footer />
          </MainContainer>
          <Chat />
        </Wrapper>
      </Flex>
    </Flex>
  );
}

const MainContainer = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  height: calc(100vh - 65px);
  transition: 0.5s;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    background: #141e2f;
  }
  &::-webkit-scrollbar-thumb {
    /* background: #203944; */
  }
  /* scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

const StyledBox = styled(Box)`
  ${({ background }) => background && `background-image: url(${background})`};
  /* background-size: auto; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const GameContainer = styled(Box)<{ isHoliday?: boolean }>`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 65px);
  margin: 0px auto;
  /* padding: ${({ isHoliday }) => (isHoliday ? '60px' : '30px')} 12px; */
  /* ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ isHoliday }) => (isHoliday ? '60px' : '30px')} 25px;
  } */
`;

const Wrapper = styled(Flex)`
  position: relative;

  flex: 1;
  overflow-x: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 74px;
  }
`;

export default App;
