
import { useState } from "react";
import { Button, TextField, InputAdornment, IconButton, Tab, Tabs, Divider } from "@mui/material";
import { ArrowDropDown, ArrowDropUp, FilterList, GetApp, MoreHoriz, Notifications, PanoramaWideAngle, Percent, Search, Settings } from "@mui/icons-material";
import TopCard from "./utils/card";
import CustomTable from "./utils/customTable";

const cards = [
  {
    title: 'Total Sales',
    number: '59,690',
    color: ''
  },
  {
    title: 'Total Orders',
    number: '4,865',
    color: ''
  },
  {
    title: 'Total Custumers',
    number: '2,245',
    color: ''
  }
];

function Content() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = (value) => setSelectedTab(value);

  const tabStyles = {
    // fontSize: '1rem',
    textTransform: 'unset',
    paddingBottom: '0',
  };

  return (
    <>
      <div className="top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1 style={{ margin: '0', fontSize: '2rem', color: '#172554', fontWeight: 500}}>Viewer Demographics</h1>
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
              // margin: '0.5rem 0',
              // fontSize: '1.6rem',
              // '& input': { fontSize: '1.3rem' },
              // '& label': { fontSize: '1.3rem' },
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
        <Tabs
          value={selectedTab}
          // indicatorColor="#172554"
          // textColor="#172554"
          onChange={(e, newValue) => handleSelectedTab(newValue)}
        >
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
            <div className="flex justify-between gap-5">
              {
                cards.map(c =>
                  <div key={c.title}>
                    <TopCard title={c.title} number={c.number}/>
                  </div>
                )
              }
            </div>
            <div className="graphs">
              <div className="flex items-center justify-between px-10">
                <div className="flex items-center gap-10 py-4">
                <h6>Sales Report</h6>
                <div>
                  <Button>
                    12 months
                  </Button>
                  <Button>
                    6 months
                  </Button>
                  <Button>
                    30 Days
                  </Button>
                  <Button>
                    7 Days
                  </Button>
                </div>
                </div>
                <div>
                  <GetApp />
                  <MoreHoriz />
                </div>
              </div>
              <p>Avarg per month</p>
              <div>
                <p>$38,500</p>
                <ArrowDropUp />
                <ArrowDropDown />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between px-10">
                <div className="flex items-center gap-10 py-4">
                <h6>Orders list</h6>
                </div>
                <div>
                  <FilterList />
                  <GetApp />
                  <MoreHoriz />
                </div>
              </div>
              <CustomTable />
            </div>
          </div>
          <div className=" flex flex-grow flex-col">
            <div>
              <div className="flex items-center justify-between px-10">
                <div className="flex items-center gap-10 py-4">
                <h6>Orders list</h6>
                </div>
                <div>
                  <GetApp />
                  <MoreHoriz />
                </div>
              </div>
              <div className="graph-cont"></div>
            </div>
            <div className="second"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;