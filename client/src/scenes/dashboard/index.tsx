import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLarge = `
  "a b c"
  "a b c"
  "a b c"
  "a b c"
  "d e f"
  "d e f"
  "d h f"
  "g h f"
  "g h j"
  "g h j"
`;
const gridTemplateSmall = `
 "a"
 "a"
 "a"
 "a"
 "b"
 "b"
 "b"
 "b"
 "c"
 "c"
 "c"
 "c"
 "d"
 "d"
 "d"
 "e"
 "e"
 "f"
 "f"
 "f"
 "f"
 "g"
 "g"
 "g"
 "h"
 "h"
 "h"
 "h"
 "j"
 "j"
`;
const Dashboard = () => {
  const isAboveMedium = useMediaQuery("(min-width: 1200px)");
  return (
    <Box 
      width="100%" height="100%" display="grid" gap="1.5rem"
      sx={
          isAboveMedium ?
        { 
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px,1fr))",
        gridTemplateAreas: gridTemplateLarge
      } : {
        gridAutoColumns: "1fr",
        gridAutoRows: "80px",
        gridTemplateAreas: gridTemplateSmall
      }}
    >
     <Row1/>
     <Row2/>
     <Row3/>
    </Box>
  )
}

export default Dashboard;
