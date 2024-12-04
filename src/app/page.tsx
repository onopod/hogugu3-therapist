import MenuIcon from "@mui/icons-material/Menu";
import SpaIcon from '@mui/icons-material/Spa';
import { AppBar, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';


export default function Home() {
  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={8}>
          test
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <MenuIcon />
          <SpaIcon />
        </AppBar>
      </Box>
      <div>hello</div>
    </>

  );
}
