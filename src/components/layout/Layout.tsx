import * as S from "./style";

interface PropsLayout {
  children: any;
  SX?: object;
}
export default function Layout({ children, SX }: PropsLayout) {
  return <S.Container style={SX}>{children}</S.Container>;
}
