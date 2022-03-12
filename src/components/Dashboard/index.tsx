import { Resume } from "../Resume";
import { SupportsTable } from "../SupportsTable";
import { Container } from "./styles";


export function Dashboard() {
  return (
    <Container>
      <Resume />
      <SupportsTable />
    </Container>
  );
}