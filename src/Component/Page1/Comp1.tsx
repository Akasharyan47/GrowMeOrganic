import React, { useState, useEffect } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 0 },
    { field: 'userId', headerName: 'User_Id', width: 70 },
    {
        field: 'title',
        headerName: 'Title',
        flex: 1 / 2,
        renderCell: (params) => (
          <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{params.value}</div>
        ),
      },
      {
        field: 'body',
        headerName: 'Body',
        flex: 1,
        renderCell: (params) => (
          <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{params.value}</div>
        ),
      },
];

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Remove form data from local storage
    localStorage.removeItem('formData');
  });

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ m: 2 }}>
        Component 1
      </Typography>
      <Paper sx={{ width: '95vw', overflowX: 'auto', position: 'relative', margin: '10px' }}>
        <Box sx={{ overflow: 'auto' }}>
          <DataGrid
            rows={posts}
            columns={columns}
            autoHeight
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8]}
          />
        </Box>
      </Paper>
    </>
  );
};

export default PostList;
