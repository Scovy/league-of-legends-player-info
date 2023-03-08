import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputLabel, Select, MenuItem, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';



function SearchBar(){
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f50057'
      }
    }
  });
  const [playerName, setPlayerName] = useState("");
  const [region, setRegion] = useState('eun1');
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    sessionStorage.setItem("regionStorage", region)
    navigate(`/info/${region}/${playerName}`);

  };
  const handleRegionChange = (e: any) => {
    setRegion(e.target.value);
  };

    return(
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit}>
                <div className="flex">
                  <FormControl required sx={{backgroundColor:"white"}}>
                    <InputLabel id="region-select-label" variant='standard'>Region</InputLabel>
                    <Select
                      labelId="region-select-label"
                      id="region-select"
                      inputProps={{
                        style: { color: '#fff' },
                      }}
                      value={region}
                      label="Region"
                      onChange={handleRegionChange}
                    >
                      <MenuItem value={'eun1'}>Europe East</MenuItem>
                      <MenuItem value={'euw'}>Europe West</MenuItem>
                      <MenuItem value={'na'}>North America</MenuItem>
                      <MenuItem value={'oc'}>Oceania</MenuItem>
                      <MenuItem value={'kr'}>Korea</MenuItem>
                      <MenuItem value={'jp'}>Japan</MenuItem>
                      <MenuItem value={'br'}>Brazil</MenuItem>
                      <MenuItem value={'la1'}>LAN</MenuItem>
                      <MenuItem value={'la2'}>LAS</MenuItem>
                      <MenuItem value={'ru'}>Russia</MenuItem>
                      <MenuItem value={'tr1'}>Türkiye</MenuItem>
                      <MenuItem value={'sg2'}>Singapore</MenuItem>
                      <MenuItem value={'ph2'}>Philippines</MenuItem>
                      <MenuItem value={'tw2'}>Taiwan</MenuItem>
                      <MenuItem value={'vn2'}>Vietnam</MenuItem>
                      <MenuItem value={'th2'}>Thailand</MenuItem>

                    </Select>
                    
                  </FormControl>
                  <TextField
                      
                      sx={{ backgroundColor:"white" }}
                      id="outlined-controlled"
                      label="Playername"
                      value={playerName}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon onClick={handleSubmit}/>
                          </InputAdornment>
                        )
                      }}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setPlayerName(event.target.value);
                      }}
                    />
                </div>
              </form>
            </ThemeProvider>
    )
}
export default SearchBar