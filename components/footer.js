import footer from "./footer.module.scss";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Footer = ({}) => {
  return (
    <>
      <div className={` bg-light`}>
        <Container>
          <p className={`m-0 text-center text-dark ${footer.content}`}>
            ５ちゃんねるのご利用は利用者各位のご判断にお任せしています｜
            <br />
            5ch.netにおけるコンテンツの権利はLoki Technology, Inc.
            に帰属します。
            <br />
            <br />
            コンテンツの無断複写、転載を禁じます。
          </p>
        </Container>
      </div>
    </>
  );
};
export default Footer;
