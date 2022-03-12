import { Container } from "./styles";
import support from "../../assets/support.svg";
import done from "../../assets/done.svg";
import undone from "../../assets/undone.svg";

export function Resume() {
  return (
    <Container>
      <div>
        <header>
          <p>Abertos</p>
          <img src={undone} alt="Abertos" />
        </header>
        <strong>500</strong>
      </div>
      <div>
        <header>
          <p>Fechados</p>
          <img src={done} alt="Fechados" />
        </header>
        <strong>500</strong>
      </div>
      <div>
        <header>
          <p>Suportes</p>
          <img src={support} alt="Total" />
        </header>
        <strong>1000</strong>
      </div>
    </Container>
  )
}