import { useRouter } from "next/router";
import { courses } from "src/mocks/courses";
import {
    Typography,
    Grid,
    Card,
    List,
    ListItem,
    ListItemText,
    CardMedia,
    Box,
    CardContent,
    Icon,
    Button,
} from "@mui/material";

export default function Course() {
    const router = useRouter();

    // Obtener el id del curso

    const id = router.query.id;

    // Obtener la información del curso

    // Obtener el curso correspondiente al id

    const course = courses.find((course) => course.id === id);

    if (!course) {
        return <div>Curso no encontrado</div>;
    }

    // Mostrar la información del curso

    return (
        <div>
            <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3">
                                {course.title}
                            </Typography>
                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                Categoria:
                            </Typography>
                            <Typography variant="body1">
                                {course.category}
                            </Typography>
                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                Descripcion:
                            </Typography>
                            <Typography variant="body1">
                                {course.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                sx={{
                                    height: 250,
                                    width: '100%',
                                    marginLeft: 'auto',
                                }}
                                image={course.image}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Button onClick={() => {
                    router.push("/player/videoplayer?id=" + course.id);
                }} size='large' variant='contained' sx={{ width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    Reproducir Curso
                </Button>
            </Card>

            <h2>Instructores</h2>
            <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                    <List>
                        {course.instructors.map((instructor) => (
                            <ListItem key={instructor}>
                                <ListItemText primary={instructor} style={{ fontWeight: 'bold' }} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>

            <Box>
                <h2>Contenido</h2>
                <Card sx={{ boxShadow: 3 }}>
                    <CardContent>
                        <List>
                            {course.content.map((module) => (
                                <ListItem key={module.title}>
                                    <ListItemText primary={module.title} />
                                    <ListItemText secondary={module.description} style={{ marginLeft: 10 }} />
                                </ListItem>

                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}
