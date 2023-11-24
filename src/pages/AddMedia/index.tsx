// ** React Imports
import { ChangeEvent, forwardRef, MouseEvent, useContext, useRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useRouter } from 'next/router'
import { AbilityContext } from 'src/layouts/components/acl/Can'


const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormMediaVideo = () => {
    const ability = useContext(AbilityContext);
    const router = useRouter()
    const { courseId } = router.query;
    console.log(courseId);

    const nombreRef = useRef<HTMLInputElement>(null);
    const [pdf, setPdf] = useState<File | null>(null);
    

    const handleUploadPDF = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            // Handle PDF upload
            setPdf(file);
        }
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
      
        const data = {
          nombreRef: nombreRef.current?.value,
          pdf,
        };
      
        console.log(JSON.stringify(data));
      };
      
    return (
        <Card>
            <CardHeader title='Agregar Videos al Curso' />
            <Divider sx={{ m: '0 !important' }} />
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                Videos del Curso
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField fullWidth label='Titulo del Video' placeholder='1.- Introduccion'
                                required
                                inputRef={nombreRef}
                                inputProps={{
                                    maxLength: 40,
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                type="file"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    accept: 'application/pdf',
                                }}
                                variant="outlined"
                                onChange={handleUploadPDF}
                                fullWidth label='Subir PDF'
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider sx={{ m: '0 !important' }} />
                <CardActions>
                    <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' >
                        Enviar
                    </Button>
                    <Button type='reset' size='large' color='secondary' variant='outlined'>
                        Reset
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}
FormMediaVideo.acl = {
    action: 'read',
    subject: 'FormMediaVideo'
  };
export default FormMediaVideo
