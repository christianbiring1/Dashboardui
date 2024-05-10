
import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  Button, TextField, InputAdornment, IconButton, Tab, Tabs, Divider,
  createTheme, ThemeProvider, Paper, Typography, Avatar, AvatarGroup
} from "@mui/material";
import {
  ArrowDropDown, ArrowDropUp, Circle, FilterList, GetApp, KeyboardArrowDown, MoreHoriz,
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

    const revenueData = [
      { month: 'Jan', revenue: 1000, consultationFees: 2000 },
      { month: 'Feb', revenue: 1500, consultationFees: 2500 },
      { month: 'Mar', revenue: 2000, consultationFees: 1100 },
      { month: 'Apr', revenue: 2500, consultationFees: 1400 },
      { month: 'May', revenue: 2000, consultationFees: 2600 },
      { month: 'Jun', revenue: 1000, consultationFees: 800 },
      { month: 'Jul', revenue: 3000, consultationFees: 1000 },
      { month: 'Aug', revenue: 2000, consultationFees: 500 },
      { month: 'Sept', revenue: 3000, consultationFees: 900 },
      { month: 'Oct', revenue: 2700, consultationFees: 300 },
      { month: 'Nov', revenue: 3000, consultationFees: 1500 },
      { month: 'Dec', revenue: 2200, consultationFees: 1000 },
    ];

     const feeData = [
  { day: 1, fee: 500 },
  { day: 2, fee: 800 },
  { day: 3, fee: 300 },
  { day: 4, fee: 1000 },
  { day: 5, fee: 950 },
  { day: 6, fee: 1200 },
  { day: 7, fee: 1100 },
  { day: 8, fee: 800 },
  { day: 9, fee: 1000 },
  { day: 10, fee: 1600 },
  { day: 11, fee: 1500 }
];

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
                <div className="ml-5 flex items-center gap-2 mb-10">
                  <p className="text-3xl font-semibold">$38,500</p>
                <div>
                  <ArrowDropUp sx={{ color: 'green'}}/>
                  <ArrowDropDown sx={{ color: 'red'}}/>
                </div>
              </div>
              <div>
                <ResponsiveContainer width="95%" height={200}>
                  <BarChart data={revenueData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
                    <CartesianGrid stroke='#ccc' strokeWidth={0} />
                    <XAxis dataKey="month" tick={{fontSize: 12}}/>
                    <YAxis tick={{fontSize: 12}}/>
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar barSize={25} type="monotone" dataKey="revenue" fill='rgba(128, 128, 128, 0.5)'/>
                  </BarChart>
                </ResponsiveContainer>
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
                      <MoreHoriz sx={{ opacity: 0.5, fontSize: '1.2rem'}}/>
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
              <div className="">
                <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
                  <CartesianGrid stroke='transparent' strokeWidth={0.5} />
                  <XAxis dataKey="month" tick={{fontSize: 12}}/>
                  <YAxis tick={{fontSize: 12}}/>
                  {/* <Tooltip /> */}
                  {/* <Legend /> */}
                  <Line type="monotone" dataKey="revenue" stroke="#006cff" name='eCommerce' dot={false}/>
                  <Line type="monotone" dataKey="consultationFees" stroke="#f43f1c" name="Consultation Fees" dot={false}/>
                </LineChart>
              </ResponsiveContainer>
              <div className="flex justify-center items-center my-8">
                <span className="px-1 text-sm font-semibold"><Circle sx={{ width: 5}}/>10%</span>
                <span className="px-1 text-sm font-semibold"><Circle sx={{ width: 5}}/>20%</span>
                <span className="px-1 text-sm font-semibold"><Circle sx={{ width: 5}}/>40%</span>
                <span className="px-1 text-sm font-semibold"><Circle sx={{ width: 5}}/>60%</span>
                <span className="px-1 text-sm font-semibold"><Circle sx={{ width: 5}}/>80%</span>
                {/* <span className="px-1 text-sm font-semibold"><Circle sx={{ width: 5}}/>10%</span> */}
              </div>
              </div>
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
              <p className="font-extralight text-blue-950 ml-5">Avarg per month</p>
                <div className="ml-5 flex items-center gap-2 mb-10">
                  <p className="text-3xl font-semibold">$38,500</p>
                  <div>
                    <Paper elevation={3} variant="outlined" sx={{ px: 1, backgroundColor: '#34d399' }}> {/* Customize padding as needed */}
                      <Typography variant="body1" sx={{ fontSize: '13px', color: '#fff'}}>
                        3,200$
                      </Typography>
                    </Paper>
                  </div>
                  </div>
              <div className="graph-cont">
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={feeData} margin={{ top: 20, right: 0, left: -10, bottom: 5 }}>
                    <CartesianGrid stroke='#ccc' strokeWidth={0.3} />
                    <XAxis dataKey="day" tick={{ fontSize: 12}}/>
                    <YAxis type="number" domain={[0, 1800]} tick={{ fontSize: 12}}/>
                    <Tooltip />
                    <Area type="monotone" dataKey="fee" stroke="#f43f1c" fill="url(#colorUv)" />
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="15%" stopColor="#f43f1c" stopOpacity={0.5} />
                        <stop offset="85%" stopColor="#f43f1c" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div
              style={{ backgroundColor: 'rgba(207, 250, 254, 0.8)'}}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div className="flex justify-between items-center gap-1 py-4 px-5">
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
                <AvatarGroup
                  // sx={{ width: '20%'}}
                >
                  <Avatar alt="Remy Sharp" src="https://picsum.photos/id/64/200/300"  sx={{ width: 20, height: 20}}/>
                  <Avatar alt="Travis Howard" src="https://picsum.photos/id/64/200/300" sx={{ width: 20, height: 20}}/>
                  <Avatar alt="Agnes Walker" src="https://picsum.photos/id/64/200/300" sx={{ width: 20, height: 20}}/>
                </AvatarGroup>
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