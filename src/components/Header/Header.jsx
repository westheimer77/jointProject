import { Container } from "../Container/Container";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.Header}>
      <Container>
        <div>
          <p className={s.dsadas}>About</p>
          <p className={s.dsadas}>Home</p>
          <p className={s.dsadas}>Call</p>
          <p className={s.dsadas}>Another</p>
        </div>
      </Container>
    </div>
  );
};
