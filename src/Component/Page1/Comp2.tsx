import React, { useEffect, useState } from 'react';
import { Checkbox, List, ListItem, ListItemText, Typography, Grid, Box } from '@mui/material';

const data = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success', 'rating'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
]; 
const DataCheckList: React.FC = () => {
  const [selectAllSubDepartments, setSelectAllSubDepartments] = useState<boolean[]>(
    Array(data.length).fill(false)
  );
  const [checkedItems, setCheckedItems] = useState<boolean[][]>(
    Array(data.length).fill(Array(data[0]?.sub_departments.length || 0).fill(false))
  ); 
  const [totalChecked, setTotalChecked] = useState<number>(0);
  const [subDeptCounts, setSubDeptCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => { 
    const subDeptCountsData = data.reduce((acc, item) => {
      acc[item.department] = item.sub_departments.length;
      return acc;
    }, {} as { [key: string]: number });
    setSubDeptCounts(subDeptCountsData);
  }, []);

  useEffect(() => {
    const countChecked = checkedItems.flat().filter((item) => item).length;
    setTotalChecked(countChecked);
  }, [checkedItems]);

  const handleToggle = (index: number, subIndex?: number) => {
    if (subIndex === undefined) {
      // Parent department checkbox clicked
      const updatedSelectAllSubDepartments = !selectAllSubDepartments[index];
      setSelectAllSubDepartments((prev) => {
        const updatedSelectAllSubDepartments = [...prev];
        updatedSelectAllSubDepartments[index] = !prev[index];
        return updatedSelectAllSubDepartments;
      });
      setCheckedItems((prev) => {
        const updatedCheckedItems = [...prev];
        updatedCheckedItems[index] = Array(data[index]?.sub_departments.length || 0).fill(
          updatedSelectAllSubDepartments
        );
        return updatedCheckedItems;
      });
    } else {
      // Child sub-department checkbox clicked
      setCheckedItems((prev) => {
        const updatedCheckedItems = [...prev];
        updatedCheckedItems[index][subIndex] = !updatedCheckedItems[index][subIndex];
        return updatedCheckedItems;
      });
    }
  };

  return (
    <Grid container sx={{ paddingTop: 3, margin: 2 }}>
      <Typography variant="h5" fontWeight="bold">
        Component 2
      </Typography> 
      <Box sx={{ width: '50%', backgroundColor: '#f7f6f6', marginTop:"70px", marginBottom:"50px" }}>
          {data && data.length > 0 ? (
        <div>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#f0f0f0', padding: '16px' }}>
            <Typography>Total Checked: {totalChecked}</Typography>
          </Box> 
          {data.map((item, index) => (
            <List key={index} sx={{ marginTop: 1, marginBottom: 0 }}>
               
              <ListItem>
                <Checkbox
                  checked={selectAllSubDepartments[index] || checkedItems[index].every((item) => item)}
                  indeterminate={
                    !checkedItems[index].every((item) => item) && checkedItems[index].some((item) => item)
                  }
                  onChange={() => handleToggle(index)}
                  color="primary"
                />
                <ListItemText primary={item.department}   /> 
                <Typography> ({subDeptCounts[item.department]})</Typography> 
              </ListItem>
              <List>
                {item.sub_departments.map((subDept, subIndex) => (
                  <ListItem key={subIndex} sx={{ paddingLeft: 4 }}>
                    <Checkbox
                      checked={checkedItems[index][subIndex]}
                      onChange={() => handleToggle(index, subIndex)}
                      color="primary"
                    />
                    <ListItemText primary={subDept} />
                  </ListItem>
                ))}
              </List>
            </List>
          ))}
        </div>
         ) : (
           <p>Loading data...</p>
         )} 
        </Box> 
    </Grid>
  );
};

export default DataCheckList;
