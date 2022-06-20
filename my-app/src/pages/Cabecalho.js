import Styles from "../pages/Cabecalho.module.css";

function Cabecalho() {
  return (
    <div className={Styles.cabecalho}>
      <section className={Styles.h1}>
      <h1>Hospedagem de Sites</h1>
      </section>
    </div>
  );
}

export default Cabecalho;