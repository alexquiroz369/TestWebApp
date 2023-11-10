// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
// ** Demo Components Imports
import CrmAward from 'src/views/dashboards/crm/CrmAward'
import CrmTable from 'src/views/dashboards/crm/CrmTable'
import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget'
import CrmExternalLinks from 'src/views/dashboards/crm/CrmExternalLinks'
import CrmWeeklyOverview from 'src/views/dashboards/crm/CrmWeeklyOverview'
import CrmPaymentHistory from 'src/views/dashboards/crm/CrmPaymentHistory'
import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
import CrmProjectTimeline from 'src/views/dashboards/crm/CrmProjectTimeline'
import CrmMeetingSchedule from 'src/views/dashboards/crm/CrmMeetingSchedule'
import CrmSocialNetworkVisits from 'src/views/dashboards/crm/CrmSocialNetworkVisits'
import CrmMostSalesInCountries from 'src/views/dashboards/crm/CrmMostSalesInCountries'
import CardAppleWatch from 'src/views/ui/cards/basic/CardAppleWatch'
import CoursePreviewCard from 'src/views/ui/cards/basic/CardCurse-'
import { courses } from 'src/mocks/courses'

const CrmDashboard = () => {
  
  return (
    <ApexChartWrapper>
      
      <Grid container spacing={6} className='match-height'>
    <div>
      <h1>Ultimos Cursos</h1>
      <Grid container justify-content="start" spacing={4} flex-direction="column" align-items="stretch">
        {courses.map((course) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={course.id}>
            <CoursePreviewCard
              title={course.title}
              category={course.category}
              description={course.description}
              image={course.image} 
              courseId={course.id}           />
          </Grid>
        ))}
      </Grid>
    </div>
      </Grid>
    </ApexChartWrapper>

  )
}

export default CrmDashboard
