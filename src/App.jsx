import './App.css'
import { BrowserRouter as Router , Route , Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Home } from './Pages/index'
import { useEffect , useState } from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLine } from "react-icons/fa";
import Logo from './assets/Logo/لوغو-لغة-1جديد-01.webp'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const languages = [
  {
    code: "ar",
    name: "العربية",
    country_code: "ar",
    dir: "rtl",
  },
  {
    code: "ja",
    name: "japanese ",
    country_code: "ja",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

function App() {

  ///////////////////////////////////////////

  useEffect(() => {
    setInterval(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const elements = document.querySelectorAll(".left , .right , .hidden , .top")
  
      elements.forEach((el)=>{observer.observe(el)})

      return () => {
        elements.forEach((el) =>{observer.unobserve(el)})
      };
    });
  }, []);



  ////////////////////////////////
  const [t] = useTranslation();
  const [lan, setLan] = useState(navigator.language);
  useEffect(() => {
    setLan(navigator.language);
    i18next.changeLanguage(lan);
    if (!i18next.languages.includes(lan)) {
      i18next.changeLanguage("en");
    } else {
      i18next.changeLanguage(lan);
    }
  }, [lan]);

  ///////////////////////////////
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  // const [t] = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    // document.title = t("app_title");
  }, [currentLanguage, t]);

//////////////////////////
const [showIcons, setShowIcons] = useState(false);

const toggleIcons = () => {
  setShowIcons(!showIcons);
};
const hideIcon = () =>{
  setShowIcons(false)
}

////////////////////////////
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
}, []);
////
setTimeout(() => {
  document.querySelector(".social").style.display = "block";
}, 5000);
  return (
    <>
   
      <div className="social hidden">
        <ul onMouseEnter={toggleIcons} onClick={toggleIcons} onMouseLeave={hideIcon} style={{ cursor: "pointer" }}>
          <li className="click">
            <IoChatbubbleEllipsesOutline />
          </li>
          {showIcons && (
            <>
              <li className="line top">
                <a href="https://line.me/ti/p/IuAqVt59QV">
                  <FaLine />
                </a>
              </li>
              <li className="email top">
                <a href="mailto:contact@arabicsc.com">
                  <MdEmail />
                </a>
              </li>
              <li className="whatsapp top">
                <a href="https://wa.link/mr0gya">
                  <FaWhatsapp />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      {loading ? (
        <img className="Loading" src={Logo} alt="" />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/arabic_services/" element={<Home />} />
            </Routes>
          </Router>
        </>
       )} 
    </>
  );
}


export default App
