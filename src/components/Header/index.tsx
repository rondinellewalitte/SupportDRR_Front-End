import logoImg from "../../assets/logo.svg"

import { Container, Content } from "./styles";


export function Header() {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Support DRR" />
        <h1>SuportesDRR Tataui 2022</h1>
        <button type="button" onClick={() => window.location.reload()}>Obter + Suportes</button>
      </Content>
    </Container>
  )
}