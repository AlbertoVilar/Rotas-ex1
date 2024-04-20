import { Link } from "react-router-dom";
import ButtonPgHome from "../../../components/ButtonPgHome/inex";
import Card from "../../../components/Card";
import '../../../components/Card/styles.css'


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