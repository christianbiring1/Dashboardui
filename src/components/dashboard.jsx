import { 
  Drawer, List, ListItem, ListItemButton, ListItemText,
  ListItemIcon, Divider, Box, Typography, Avatar
} from "@mui/material";
import { Dashboard, Assessment, DonutSmall, DescriptionOutlined, Notifications } from '@mui/icons-material';


const DashboardComponent = () => {
  return (
    <>
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
              maxWidth: '230px',
              overflowX: 'hidden',
            }
          }}
          className='desk-sidebar'
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem 1rem 0', margin: '2rem 0'}}>
            <img src="/logo_red.png" alt="luna logo" className='dash_logo'/>
          </Box>
          <nav aria-label="main nav links">
            <List>
              {/* <NavLink to="/Component/main" className="nav_link"> */}
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>
                          Dashboard
                        </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              {/* </NavLink> */}
              {/* <NavLink to="/dashboard/admins" className="nav_link"> */}
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Assessment />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>
                          Key Metrics
                        </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DonutSmall />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>
                          Analytics
                        </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
             <Divider />
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
              {/* </NavLink> */}
              {/* <NavLink to="/dashboard/products" className="nav_link"> */}
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Notifications />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant='body1'>
                        Notification
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
            </List>
          </nav>
          <Divider />
        </Drawer>
      {/* </div> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p:2 }}
        className='dashboard_content'
      >
        <h1>Viewer Demographics</h1>
      </Box>
      </>
  );
}
 
export default DashboardComponent;