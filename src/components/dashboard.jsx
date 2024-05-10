import { 
  Drawer, List, ListItem, ListItemButton, ListItemText, Accordion,
  AccordionDetails, AccordionSummary, ListItemIcon, Divider, Box, Typography, Avatar,
  Badge,
} from "@mui/material";
import { Dashboard, Assessment, DonutSmall, DescriptionOutlined, Notifications,
  ExpandMore, Circle, 
  ArrowForward} from '@mui/icons-material';

import Content from "./content";

const iconStyles = {
  color: '#ecfdf5',
}


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
            fontSize: '1.6rem',
            '& .MuiDrawer-paper': {
              width: '60%',
              maxWidth: '280px',
              overflowX: 'hidden',
              backgroundColor: '#172554',
              color: '#ecfdf5',
            }
          }}
          className="sidebar"
        >
          <Box sx={{ display: 'flex', padding: '1rem 2rem 0', margin: '1rem 0', alignItems: 'center', gap: '1rem'}}>
            <Avatar />
            <p className="text-xl font-semibold">Droitdash</p>
          </Box>
          <nav aria-label="main nav links">
            <List>
              <Accordion sx={{
                boxShadow: 'none', border: 'none', '&:before': { display: 'none' },
                backgroundColor: '#172554', color: '#ecfdf5' }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: '#ecfdf5'}}/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ margin: '0' }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ margin: '0', padding: '0' }}
                    >
                      <ListItemIcon>
                        <Dashboard sx={ iconStyles }/>
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
                      sx={{
                          borderRadius: '8px',
                          margin: '0',
                          paddingLeft: '0',
                          '&:hover': {
                            backgroundColor: 'rgba(203, 213, 224, 0.3)',
                            borderRadius: '8px'
                          }
                        }}
                    >
                      <ListItemIcon>
                        <Assessment sx={ iconStyles }/>
                      </ListItemIcon>
                      <ListItemText sx={{ marginLeft: '-1rem'}}>
                          <Typography variant='body1'>
                            Key Metrics
                          </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
                <Divider sx={{ backgroundColor: '#737373'}}/>
              </Accordion>
              <Accordion
              defaultExpanded
                sx={{ boxShadow: 'none', border: 'none', '&:before': { display: 'none' },
                backgroundColor: '#172554', color: '#ecfdf5'}}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: '#ecfdf5'}} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ margin: '0'}}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ margin: '0', padding: '0' }}
                    >
                      <ListItemIcon>
                        <DonutSmall sx={ iconStyles }/>
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
                        <ListItemButton 
                        sx={{
                          borderRadius: '8px',
                          '&:hover': {
                            backgroundColor: 'rgba(203, 213, 224, 0.3)',
                            borderRadius: '8px'
                          }
                        }}
                        >
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
                        <ListItemButton
                          component="a" href="#simple-list"
                          sx={{
                          borderRadius: '8px',
                          '&:hover': {
                            backgroundColor: 'rgba(203, 213, 224, 0.3)',
                            borderRadius: '8px'
                          }
                        }}
                        >
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
                        <ListItemButton
                          sx={{
                          borderRadius: '8px',
                          '&:hover': {
                            backgroundColor: 'rgba(203, 213, 224, 0.3)',
                            borderRadius: '8px'
                          }
                        }}
                          component="a" href="#simple-list"
                        >
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
                <Divider sx={{ backgroundColor: '#737373'}}/>
              </Accordion>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DescriptionOutlined sx={ iconStyles }/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>
                          Documents
                        </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                          borderRadius: '8px',
                          '&:hover': {
                            backgroundColor: 'rgba(203, 213, 224, 0.3)',
                            borderRadius: '8px'
                          }
                        }}
                  >
                    <ListItemIcon>
                      <Notifications sx={ iconStyles }/>
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
          <div className="mx-5 my-20 max-w-sm rounded shadow-lg card-content" style={{ backgroundColor: 'rgba(203, 213, 224, 0.3)'}}>
            <div className="flex items-center justify-between mb-8">
              <Avatar src="https://picsum.photos/id/64/200/300"/>
              <ArrowForward />
            </div>
            <p className="text-xl text-gray-300 font-semibold">WPR Pascal</p>
            <p className="text-gray-400 text-sm mt-2">random@gmail.com</p>
          </div>
        </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, padding: '1rem 0.5rem 1rem 4rem' }}
        className="bg-neutral-100"
      >
        <Content />
      </Box>
    </div>
  );
}
 
export default DashboardComponent;