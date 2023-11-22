// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
// ** Demo Components Imports

import CoursePreviewCard from 'src/views/ui/cards/basic/CardCurse-'
import { courses } from 'src/mocks/courses'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { width } from '@mui/system'
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';

const CrmDashboard = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <ApexChartWrapper>

      <Grid container className='match-height'>
        <Typography variant='h4' mb={2}>Cursos Recomendados</Typography>

        <Grid container justify-content="start" spacing={4} flex-direction="column" align-items="stretch">
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              '@media (max-width: 1080px)': {
                width: '100%',
                overflowX: 'auto',
              },
            }}
          >
            <Carousel
              autoPlay={true}
              dynamicHeight={false}
              showStatus={false}
              showThumbs={true}
              showIndicators={false}
              infiniteLoop={true}
              interval={2000}
            >
              {courses.map((course) => (
                <CoursePreviewCard
                  key={course.id}
                  title={course.title}
                  category={course.category}
                  description={course.description}
                  image={course.image}
                  courseId={course.id}
                  value={course.rating}
                />

              ))}
            </Carousel>
          </Box>
          </Grid>
        </Grid>

        <Typography variant='h4' mb={2}>Ultimos Cursos</Typography>
        <Grid container justify-content="start" spacing={4} flex-direction="column" align-items="stretch">
          {courses.map((course) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={course.id}>
              <CoursePreviewCard
                title={course.title}
                category={course.category}
                description={course.description}
                image={course.image}
                courseId={course.id}
                value={course.rating}
              />
            </Grid>
          ))}
        </Grid>


      </Grid>
    </ApexChartWrapper>

  )
}

export default CrmDashboard
