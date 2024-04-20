
import { Link } from "react-router-dom";
import ButtonPgHome from "../../../components/ButtonPgHome/inex";
import Card from "../../../components/Card";



export default function HomeBody() {
  return (
    <main className="size-page">
        <Card name="Página inicial" />
      
      <Link to="/promotion">
        <ButtonPgHome text="Ver promoção" />
      </Link>
      
    </main>
  );
}
