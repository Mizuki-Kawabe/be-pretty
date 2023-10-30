"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered 
      sx={{
        "& button":{color:"#18181b"},
        // "& button:hover":{color:"#ea580b"},
        // "& button:focus":{color:"#ea580b"},
        "& button.Mui-selected":{color:"#ea580b"},
        "& .MuiTabs-indicator":{backgroundColor:"#ea580b"}
      }}
      >
        <Tab label="SkinCare" />
        <Tab label="Makeup" />
      </Tabs>
    </Box>
  );
}