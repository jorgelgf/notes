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
      <div title="Author Jorge Gurgel">{title}</div>
      <img title="View/adc notes" src={info} alt={info} />
      <img title="Save note current" src={save} alt={save} />
      <div title="Exit" className="exit">
        {exit}
      </div>
    </S.Container>
  );
}
