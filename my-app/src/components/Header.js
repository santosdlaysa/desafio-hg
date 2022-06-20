import logo from '../img/hostgator-logo.svg';
import Styles from "../components/Header.module.css";

function App() {
  return (
    <div className={Styles.App}>
      <header className={Styles.Appheader}>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
