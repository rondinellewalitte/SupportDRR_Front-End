import { useEffect } from "react";
import { api } from "../../services/api"

import { Container } from "./styles";

export function SupportsTable() {

  useEffect(() => {
    api.get('/supports')
      .then(data => console.log(data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>Comentario</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rondinelle Walitte Pedro de Jesus</td>
            <td>Slack</td>
            <td>Curso top!</td>
            <td className="open">Aberto</td>
          </tr>
          <tr>
            <td>Rondinelle Walitte Pedro de Jesus</td>
            <td>Slack</td>
            <td>Curso top!</td>
            <td className="open" >Aberto</td>
          </tr>
          <tr>
            <td>Rondinelle Walitte Pedro de Jesus</td>
            <td>Slack</td>
            <td>Curso top!</td>
            <td className="close">Fechado</td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
}