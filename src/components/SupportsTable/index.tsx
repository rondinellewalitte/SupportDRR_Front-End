import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { decode } from 'html-entities';

import closeimg from "../../assets/close.svg"

import { Container } from "./styles";

interface Support {
  id: number;
  name: string;
  course: string;
  classroom: string;
  date_support: string;
  status: string;
  id_response: string;
  id_user: string;
  support: string;
}
interface IdResponse {
  id_response: string;
}

export function SupportsTable() {

  const [supports, setSupports] = useState<Support[]>([]);

  function handleEndSupport(id_response: string) {
    console.log(id_response);
  }

  useEffect(() => {
    api.get('/supports')
      .then(response => setSupports(response.data));
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
          {supports.map(support => {
            return (
              <tr key={support.id}>
                <td>{support.name}</td>
                <td>{support.course}</td>
                <td>{decode(decode(support.support)).replace(/(<([^>]+)>)/ig, '')}</td>
                <td className={"status_" + support.status}>
                  <button onClick={() => handleEndSupport(support.id_response)} type="button">
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