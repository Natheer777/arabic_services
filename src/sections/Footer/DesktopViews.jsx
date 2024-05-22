import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CgScreen } from "react-icons/cg";

const DesktopViewButton = () => {
  const [t] = useTranslation()
  const [desktopView, setDesktopView] = useState(false);

  const requestDesktopSite = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.match(/(iphone|ipod|ipad|android)/)) {
      const viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'width=1280');
    }
    setDesktopView(true);
  };

  return (
    <div>
      <button className='DesktopView m-1' onClick={requestDesktopSite}><h5>{t("desktop")}</h5> <CgScreen /></button>
    </div>
  );
};

export default DesktopViewButton;
