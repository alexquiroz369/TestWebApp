// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import StepperAlternativeLabel from 'src/views/forms/form-wizard/StepperAlternativeLabel'
import StepperVerticalWithNumbers from 'src/views/forms/form-wizard/StepperVerticalWithNumbers'
import StepperLinearWithValidation from 'src/views/forms/form-wizard/StepperLinearWithValidation'
import StepperVerticalWithoutNumbers from 'src/views/forms/form-wizard/StepperVerticalWithoutNumbers'
import { useContext } from 'react'
import { AbilityContext } from 'src/layouts/components/acl/Can'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormCreateCourse from 'src/views/forms/form-layouts/FormLayoutCreateCourse'
import { courses } from 'src/mocks/courses'
import CoursePreviewEdit from 'src/views/ui/cards/basic/CardCourseEdit'

const showCourses = () => {
    const ability = useContext(AbilityContext);

    return (
        <DatePickerWrapper>
            <Typography variant='h4' mb={2}>Todos los Cursos</Typography>
            <Grid container justify-content="start" spacing={4} flex-direction="column" align-items="stretch">
                {courses.map((course) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={course.id}>
                        <CoursePreviewEdit
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
        </DatePickerWrapper>
    )
}
showCourses.acl = {
    action: 'read',
    subject: 'show-courses'
};

export default showCourses