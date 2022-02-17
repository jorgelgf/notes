import * as S from "./style";

interface PropsLayout {
  children: any;
}

export default function Layout({ children }: PropsLayout) {
  return <S.Container>{children}</S.Container>;
}
