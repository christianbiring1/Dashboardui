
import { useState } from "react";
import { Button, TextField, InputAdornment, IconButton, Tab, Tabs, Divider } from "@mui/material";
import { FilterList, Notifications, PanoramaWideAngle, Percent, Search, Settings } from "@mui/icons-material";
import TopCard from "./utils/card";

function Content() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = (value) => setSelectedTab(value);

  const tabStyles = {
    fontSize: '1.3rem',
    textTransform: 'unset',
    paddingBottom: '0',
  };

  return (
    <>
      <div className="top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1 style={{ margin: '0', fontSize: '2rem', fontFamily: 'Manrope'}}>Viewer Demographics</h1>
        <div className="flex items-center justify-between">
          <TextField
            fullWidth
            id="email"
            name="email"
            // label="Email"
            placeholder="Type Keywords for search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{
              margin: '0.5rem 0',
              fontSize: '1.6rem',
              '& input': { fontSize: '1.3rem' },
              '& label': { fontSize: '1.3rem' },
              '& .MuiFormHelperText-root': { fontSize: '1.3rem' },
            }}
          />
          <IconButton>
            <Notifications />
          </IconButton>
          <Button
            variant='contained'
            // sx={{ fontSize: '1rem', padding: '0.5rem 1rem', borderRadius: '2.5rem', textTransform: 'unset' }}
          >
            icon
          </Button>
        </div>
      </div>
      <div>
        <Tabs value={selectedTab} onChange={(e, newValue) => handleSelectedTab(newValue)}>
          <Tab label="Value comparison" icon={<PanoramaWideAngle />}
            iconPosition="start" value={0} sx={tabStyles}
          />
          <Tab label="Avarage values" icon={<Percent />} iconPosition="start" value={1} sx={tabStyles}/>
          <Tab label="Configure analytics" value={2} icon={<Settings />} iconPosition="start" sx={tabStyles}/>
          <Tab label="Filter analytics" value={3}  icon={<FilterList />} iconPosition="start" sx={ tabStyles}/>
        </Tabs>
        <Divider />
        <div className="flex justify-between py-10 px-5">
          <div>
            <TopCard />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Content;