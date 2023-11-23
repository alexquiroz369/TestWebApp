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
import CoursePreviewCard from 'src/views/ui/cards/basic/CardCurse-'
import FormEditCourse from 'src/views/forms/form-layouts/FormEditCourse'

const editCourse = () => {
  const ability = useContext(AbilityContext);

  return (
    <DatePickerWrapper>
      <FormEditCourse></FormEditCourse>
    </DatePickerWrapper>
  )
}
editCourse.acl = {
  action: 'read',
  subject: 'edit-courses'
};

export default editCourse
