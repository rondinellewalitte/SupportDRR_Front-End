
import { decode } from 'html-entities';

import closeimg from "../../assets/close.svg"

import { Container } from "./styles";
import { useSupports } from "../../hooks/useSupports";

export function SupportsTable() {

  const { supports, closeSupport } = useSupports();

  async function handleEndSupport(id_response: string, id: number) {
    await closeSupport({ id_response, id });
  }


  const result = supports.filter((dados) => {
    return dados.status === "1";
  });

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
          {result.map(support => {
            return (
              <tr key={support.id}>
                <td>{support.name}</td>
                <td>{support.course}</td>
                <td>{decode(decode(support.support)).replace(/(<([^>]+)>)/ig, '')}</td>
                <td className={"status_" + support.status}>
                  <button onClick={() => handleEndSupport(support.id_response, support.id)} type="button">
                    <span>Fechar</span>
                    <img src={closeimg} alt="Fechar" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  );
}