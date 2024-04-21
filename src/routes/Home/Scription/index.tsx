import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import ButtonPgHome from "../../../components/ButtonPgHome/inex";


export default function Scription() {
    return (
        
        <main className="size-page">
          <Card  name= "Página de inscrição"/>
          <Link to="/promotion">
            <ButtonPgHome text="Ver promoção" />
         </Link>
        </main>
     
    )
}