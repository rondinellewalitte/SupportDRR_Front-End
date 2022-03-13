import { Container } from "./styles";
import support from "../../assets/support.svg";
import done from "../../assets/done.svg";
import undone from "../../assets/undone.svg";
import { useSupports } from "../../hooks/useSupports";

export function Resume() {

  const { supports } = useSupports();

  const resume = supports.reduce((acc, support) => {
    if (support.status === "2") {
      acc.done++;
      acc.total++;
    } else {
      acc.undone++;
      acc.total++;
    }

    return acc;
  }, {
    done: 0,
    undone: 0,
    total: 0,
  });


  return (
    <Container>
      <div>
        <header>
          <p>Abertos</p>
          <img src={undone} alt="Abertos" />
        </header>
        <strong>{resume.undone}</strong>
      </div>
      <div>
        <header>
          <p>Fechados</p>
          <img src={done} alt="Fechados" />
        </header>
        <strong>{resume.done}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={support} alt="Total" />
        </header>
        <strong>{resume.total}</strong>
      </div>
    </Container>
  )
}