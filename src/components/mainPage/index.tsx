import * as S from "./styles";
import { MainPageProps } from "./types";

const MainPage = ({ children }: MainPageProps) => {
  return (
    <S.Border>
      <S.MainContainer>
        {children}
      </S.MainContainer>
    </S.Border>

  )
}

export default MainPage;