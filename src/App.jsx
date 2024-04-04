import './App.css'
import { BrowserRouter as Router , Route , Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Home } from './Pages/index'
import { useEffect , useState } from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
const languages = [
 {
  code :"ja",
  name :"japanese",
  country_code :"ja",
 } ,
 {
  code :"en",
  name :"japanese",
  country_code :"ja",
 } ,
 {
  code :"ar",
  name :"japanese",
  dir: "rtl",
  country_code :"ja",
 } 

]
function App() {
const [t] = useTranslation();
const [lan , setLan] = useState(navigator.language)
useEffect(() => {
  setLan(navigator.language);
  i18next.changeLanguage(lan);
  if(!i18next.language.includes(lan)) {
   i18next.changeLanguage("en")
  }else{
i18next.changeLanguage(lan)
}
},[lan]);
/////////////////////////////////
const currentLanguageCode = cookies.get("i18next") || "en";
const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

useEffect(() => {
  console.log("Setting page stuff");
  document.body.dir = currentLanguage.dir || "ltr";
  document.title = t("app_title");
}, [currentLanguage, t]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/arabic_services/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
