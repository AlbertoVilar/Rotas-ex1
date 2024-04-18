import "./styles.css";

type Props = {
    text : string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ButtonPgHome({text} : Props) {
  return (
    <div className="btn-home model-containers">
        <button className="btn-model">{text}</button>
    </div>
  );
}