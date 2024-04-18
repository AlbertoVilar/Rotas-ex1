import "./styles.css";

type Props = {
  name : string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Card({name} : Props) {
  return (
    
      <div className="container-card model-containers ">
        <section className="home-card">
          <h3>{name}</h3>
        </section>
      </div>
    
  );
}
