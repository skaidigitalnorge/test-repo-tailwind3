import { Grid } from "../../../1_Small/Base";
import { MainPicture } from "./0_MainPicture";
import { SectionTwo } from "./1_SectionTwo";

export const Product = ({ produkt }) => {
  // console.log(produkt);

  return (
    <>
      <Grid>
        {/* <MainPicture etProdukt={produkt} /> */}
        <SectionTwo etProdukt={produkt} />
        <h1></h1>
      </Grid>
    </>
  );
};
