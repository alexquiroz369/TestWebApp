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

const CrmDashboard = () => {

  return (
    <ApexChartWrapper>

      <Grid container className='match-height'>
        <Typography variant='h4' mb={2}>Cursos Recomendados</Typography>

        <Grid container item xs={0} sm={0} md={12} lg={12} >
        <Box
  sx={{
    '@media (max-width: 750px)': {
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
      />
    ))}
  </Carousel>
</Box>
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
                courseId={course.id} />
            </Grid>
          ))}
        </Grid>


      </Grid>
    </ApexChartWrapper>

  )
}

export default CrmDashboard
