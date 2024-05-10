
import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  Button, TextField, InputAdornment, IconButton, Tab, Tabs, Divider,
  createTheme, ThemeProvider
} from "@mui/material";
import {
  ArrowDropDown, ArrowDropUp, FilterList, GetApp, KeyboardArrowDown, MoreHoriz,
  NotificationsNone, PanoramaWideAngle, PentagonTwoTone, Percent, Search, Settings,
  Star
} from "@mui/icons-material";


import TopCard from "./utils/card";
import CustomTable from "./utils/customTable";

const cards = [
  {
    title: 'Total Sales',
    number: '59,690',
    color: 'rgba(191, 219, 254, 0.8)'
  },
  {
    title: 'Total Orders',
    number: '4,865',
    color: 'rgba(251, 207, 232, 0.8)'
  },
  {
    title: 'Total Custumers',
    number: '2,245',
    color: 'rgba(207, 250, 254, 0.8)'
  }
];

const secondtheme = createTheme({
  palette: {
    custom: {
      main: '#172554',
      light: '#172554',
      dark: '#172554',
      contrastText: '#000',
    }
  }
});

const theme = createTheme({
  palette: {
    custom: {
      main: '#edf2f7',
      light: '#F2F2F2',
      dark: '#E5E5E5',
      contrastText: '#4a5568',
    }
  }
});
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
      <div className="flex items-center justify-between mt-7 px-5">
        <h1 style={{ margin: '0', fontSize: '2rem', color: '#172554', fontWeight: 500}}>Viewer Demographics</h1>
        <div className="flex items-center justify-between gap-3">
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
              '& input': { fontSize: '0.9rem', height: '10px' },
              // '& label': { fontSize: '1.3rem' },
              '& .MuiFormHelperText-root': { fontSize: '1.3rem' },
            }}
          />
          <ThemeProvider theme={theme}>
            <Button
            variant="contained"
            color="custom"
            >
              <NotificationsNone />
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={secondtheme}>
            <Button
              variant='contained'
              color="custom"
              sx={{ padding: '0.8rem 0rem'}}
            >
              <PentagonTwoTone sx={{ color: '#fff'}}/>
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div>
        <Tabs
          value={selectedTab}
          // indicatorColor="#172554"
          // textColor="#172554"
          onChange={(e, newValue) => handleSelectedTab(newValue)}
        >
          <Tab label="Value comparison" icon={<PanoramaWideAngle sx={{ width: 15 }}/>}
            iconPosition="start" value={0} sx={tabStyles}
          />
          <Tab label="Avarage values" icon={<Percent sx={{ width: 15 }}/>} iconPosition="start" value={1} sx={tabStyles}/>
          <Tab label="Configure analytics" value={2} icon={<Settings sx={{ width: 15 }}/>} iconPosition="start" sx={tabStyles}/>
          <Tab label="Filter analytics" value={3}  icon={<FilterList sx={{ width: 15 }}/>} iconPosition="start" sx={ tabStyles}/>
        </Tabs>
        <Divider />
        <div className="flex justify-between py-10 pl-5 gap-7">
          <div>
            <div className="flex gap-5 mb-8">
              {
                cards.map(c =>
                  <div key={c.title}>
                    <TopCard title={c.title} number={c.number} color={c.color}/>
                  </div>
                )
              }
            </div>
            <div className="graphsnmax-w-sm rounded overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-6 mb-8">
                <div className="flex items-center gap-10 py-2">
                  <h6 className="text-blue-950 font-semibold">Sales Report</h6>
                  <div>
                    <ThemeProvider theme={theme}>
                      <Button
                      color="custom"
                      variant="contained"
                        sx={{ textTransform: 'unset'}}
                      >
                        12 months
                      </Button>

                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                      <Button
                      color="custom"
                      variant="contained"
                        sx={{ textTransform: 'unset', margin: '0 1rem'}}
                      >
                        6 months
                      </Button>

                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                      <Button
                      color="custom"
                      variant="contained"
                        sx={{ textTransform: 'unset'}}
                      >
                        30 Days
                      </Button>

                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                      <Button
                      color="custom"
                      variant="contained"
                        sx={{ textTransform: 'unset', marginLeft: '1rem'}}
                      >
                        7 Days
                      </Button>

                    </ThemeProvider>
                  </div>
                </div>
                <div>
                  <IconButton>
                    <GetApp sx={{opacity: 0.5, fontSize: '1.2rem'}}/>
                  </IconButton>
                  <IconButton>
                    <MoreHoriz sx={{ opacity: 0.5, fontSize: '1.2rem'}}/>
                  </IconButton>
                </div>
              </div>
              <p className="font-extralight text-blue-950 ml-5">Avarg per month</p>
              <div className="ml-5 flex items-center gap-2">
                <p className="text-3xl font-semibold">$38,500</p>
                <div>
                  <ArrowDropUp sx={{ color: 'green'}}/>
                  <ArrowDropDown sx={{ color: 'red'}}/>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-10 py-8">
                <div className="flex items-center gap-10 py-0">
                  <h6 className="text-blue-950 font-semibold">Orders List</h6>
                  </div>
                  <div>
                    <IconButton>
                      <FilterList sx={{ opacity: 0.5, fontSize: '1.2rem'}}/>
                    </IconButton>
                    <IconButton>
                      <GetApp sx={{ opacity: 0.5, fontSize: '1.2rem'}}/>
                    </IconButton>
                    <IconButton>
                      <MoreHoriz sx={{ opacity: 0.5, fontSize: '1.2rem'}}/>rgba(0, 0, 255, 1)
                    </IconButton>
                  </div>
              </div>
              <CustomTable />
            </div>
          </div>
          <div className=" flex flex-grow flex-col gap-8">
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-96">
              <div className="flex justify-between items-center gap-10 py-2 px-2">
                <h6 className="font-medium">Orders List</h6>
                <div>
                  <IconButton>
                    <GetApp sx={{opacity: 0.5, fontSize: '1.2rem'}}/>
                  </IconButton>
                  <IconButton>
                    <MoreHoriz sx={{opacity: 0.5, fontSize: '1.2rem'}}/>
                  </IconButton>
                </div>
              </div>
              <div className="graph-cont"></div>
            </div>
            <div
              style={{ backgroundColor: 'rgba(191, 219, 254, 0.8)'}}
              className="max-w-sm rounded overflow-hidden shadow-lg min-h-96"
            >
              <div className="flex justify-between items-center gap-10 py-3 px-2">
                <h6 className="font-medium">Monthly Sales</h6>
                <div>
                  <span
                    className=" bg-gray-200 rounded-sm py-1 px-1 text-sm text-gray-700 flex items-center justify-between gap-2">
                    January <KeyboardArrowDown sx={{ width: '20px'}} />
                  </span>
                </div>
              </div>
              <div className="graph-cont"></div>
            </div>
            <div
              style={{ backgroundColor: 'rgba(207, 250, 254, 0.8)'}}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div className="flex justify-between items-center gap-2 py-4 px-5">
                <ThemeProvider theme={theme}>
                  <Button
                    variant='contained'
                    color="custom"
                    sx={{ padding: '0.8rem 0rem'}}
                  >
                    <Star sx={{ color: 'rgba(0, 0, 255, 0.4)'}}/>
                  </Button>
                </ThemeProvider>
                <div className="m-0">
                  <p className="m-0 font-semibold">Total Orders</p>
                  <p className="text-xs">Sept 01 to Oct 01,2023</p>
                </div>
                <div>
                </div>
              </div>
              <div className="graph-cont"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;