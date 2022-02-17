import * as S from "./style";
interface PropsHeader {
  title: string;
  info: string;
  save: string;
  exit: string;
}
export default function Header({ title, info, save, exit }: PropsHeader) {
  return (
    <S.Container>
      <div>{title}</div>
      <img src={info} alt={info} />
      <img src={save} alt={save} />
      <div>{exit}</div>
    </S.Container>
  );
}
