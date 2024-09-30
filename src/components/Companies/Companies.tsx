import SpaceX from "../../assets/images/Companies/SpaceX.png";
import Nasa from "../../assets/images/Companies/NASA.png";
import Astroscale from "../../assets/images/Companies/Astroscale.png";
import Boeing from "../../assets/images/Companies/Boeing.png";

import {
  AstroscaleLink,
  BoeingLink,
  CompaniesContainer,
  NasaLink,
  SpaceXLink,
} from "./Companies.styled";

export const Companies = () => {
  return (
    <CompaniesContainer>
      <SpaceXLink
        to="https://www.spacex.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`${SpaceX}`} alt="Space Girl" />
      </SpaceXLink>

      <BoeingLink
        to="https://www.boeing.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`${Boeing}`} alt="Space Girl" />
      </BoeingLink>

      <NasaLink
        to="https://www.nasa.gov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`${Nasa}`} alt="Space Girl" />
      </NasaLink>
      <AstroscaleLink
        to="https://www.nasa.gov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`${Astroscale}`} alt="Space Girl" />
      </AstroscaleLink>
    </CompaniesContainer>
  );
};
