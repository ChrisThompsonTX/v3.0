import React, { useState } from 'react';
import './index.css';

import DropdownMenu from './components/DropdownMenu';
import OSDock from './components/OSDock';
import Icon from './components/Icon';
import Window from './components/Window';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import MobileHome from './components/MobileHome';
import MobileDock from './components/MobileDock';
import MobileHeader from './components/MobileHeader';

import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import MobileAboutMe from './components/MobileAboutMe';
import MobileContact from './components/MobileContact';
import MobileResume from './components/MobileResume';
import MobileProjects from './components/MobileProjects';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="v3__mobile">
        <MobileAboutMe open={open} />
        <MobileContact open={open} />
        <MobileResume open={open} />
        <MobileProjects open={open} />
        <MobileHeader />
        <MobileHome />
        <MobileDock setOpen={setOpen} open={open}/>


      </div>
      <div className="v3__desktop">
        <Navbar>
          <NavItem title={<BoltIcon />} />
          <NavItem title={<h1>Chris Thompson</h1>}>
            <DropdownMenu setOpen={setOpen} />
          </NavItem>
          <NavItem title="View" />
          <NavItem title="Contact" />
        </Navbar>
        <div className="desktop" >
          <Icon
            name="Chicken Tinder"
            image="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/Chicken+Tinder.png"
            demo="https://lit-atoll-81167.herokuapp.com/#/"
            github="https://github.com/hkryucr/mern-ct"
            defaultPosition={{x: 20, y: 60}}
          />
          <Icon
            name="Tappd"
            image="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/Tappd.png"
            demo="https://tappd-ct.herokuapp.com/#/"
            github="https://github.com/ChrisThompsonTX/Tappd"
            defaultPosition={{x: 160, y: -59}}
          />
          <Icon
            name="WikiClicker"
            image="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/proj.png"
            demo="http://christhompson.online/WikiClicker/"
            github="https://github.com/ChrisThompsonTX/WikiClicker"
            defaultPosition={{x: 282, y: -178}}
          />
          <Icon
            name="Insta-Clone"
            image="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/instagram.png"
            demo="https://reactinstagram-c443e.web.app/"
            github=""
            defaultPosition={{x: 400, y: -297}}
          />
        <Window open={open} closeWindow={()=> setOpen(false)} />
        </div>
        <OSDock open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default App;