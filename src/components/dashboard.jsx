import { 
  Drawer, List, ListItem, ListItemButton, ListItemText, Accordion,
  AccordionDetails, AccordionSummary, ListItemIcon, Divider, Box, Typography, Avatar,
  Badge,
} from "@mui/material";
import { Dashboard, Assessment, DonutSmall, DescriptionOutlined, Notifications,
  ExpandMore, Circle } from '@mui/icons-material';

import Content from "./content";


const DashboardComponent = () => {
  return (
    <div className="flex">
    <Drawer 
          // open={open}
          variant='permanent'
          // onClose={toggleDrawer}
          anchor='left'
          sx={{
            width: '60%',
            maxWidth: '220px',
            overflowX: 'hidden',
            '& .MuiDrawer-paper': {
              width: '60%',
              maxWidth: '280px',
              overflowX: 'hidden',
              // backgroundColor: '#000'
            }
          }}
          className="bg-indigo-950"
        >
          <Box sx={{ display: 'flex', padding: '1rem 2rem 0', margin: '1rem 0', alignItems: 'center', gap: '1rem'}}>
            <Avatar />
            <Typography>Droitdash</Typography>
          </Box>
          <nav aria-label="main nav links">
            <List>
              <Accordion sx={{ boxShadow: 'none', border: 'none', '&:before': { display: 'none' } }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  // sx={{ margin: '0'}}
                  style={{ margin: '0'}}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ margin: '0', padding: '0' }}
                    >
                      <ListItemIcon>
                        <Dashboard />
                      </ListItemIcon>
                      <ListItemText sx={{ marginLeft: '-1rem'}}>
                          <Typography variant='body1'>
                            Dashboard
                          </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ margin: '0', padding: '0'}}
                    >
                      <ListItemIcon>
                        <Assessment />
                      </ListItemIcon>
                      <ListItemText sx={{ marginLeft: '-1rem'}}>
                          <Typography variant='body1'>
                            Key Metrics
                          </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
                <Divider />
              </Accordion>
              <Accordion
              defaultExpanded
                sx={{ boxShadow: 'none', border: 'none', '&:before': { display: 'none' } }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ margin: '0'}}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ margin: '0', padding: '0' }}
                    >
                      <ListItemIcon>
                        <DonutSmall />
                      </ListItemIcon>
                      <ListItemText sx={{ marginLeft: '-1rem'}}>
                          <Typography variant='body1'>
                            Analytics
                          </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0}}>
                  <nav aria-label="secondary mailbox folders">
                    <List sx={{ paddingTop: '0', paddingLeft: '2rem'}}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText>
                            <Circle
                            sx={{ width: '10px', marginRight: '10px', position: 'relative', top: '5px'}}
                            color="primary"
                            />
                            All analytics
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText>
                            <Circle
                            sx={{ width: '10px', marginRight: '10px', position: 'relative', top: '5px'}}
                            color="secondary"
                            />
                            Favorites analytics
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText>
                            <Circle
                              sx={{ width: '10px', marginRight: '10px', position: 'relative', top: '5px'}}
                              color="success"
                            />
                            New analytics
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </AccordionDetails>
                <Divider />
              </Accordion>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DescriptionOutlined />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>
                          Documents
                        </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Notifications />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant='body1'>
                        Notification
                        <Badge color="primary" badgeContent={26} sx={{ marginLeft: '5rem'}}/>
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
            </List>
          </nav>
        </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p:2, margin: '1rem 5rem' }}
      >
        <Content />
      </Box>
    </div>
  );
}
 
export default DashboardComponent;