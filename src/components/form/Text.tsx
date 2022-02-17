import * as S from "./styled";
interface PropsText {
  children: string;
  onChange: any;
}
export default function Text({ children, onChange }: PropsText) {
  return <S.Container onChange={onChange} value={children ?? ""} />;
}
