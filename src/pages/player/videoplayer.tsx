import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    List,
    ListItem,
    ListItemText,
    Button,
  } from "@mui/material";
  
  interface Course {
    title: string;
    description: string;
    image: string;
    videos: {
      id: number;
      title: string;
      description: string;
    }[];
  }
  
  const CoursePage = () => {
    const course = {
      title: "Curso de React",
      description: "Este curso te enseñará a crear aplicaciones web con React.",
      image: "/img/course.png",
      videos: [
        {
          id: 1,
          title: "Introducción a React",
          description: "Este video te enseñará los conceptos básicos de React.",
        },
        {
          id: 2,
          title: "Componentes de React",
          description: "Este video te enseñará a crear y utilizar componentes de React.",
        },
      ],
    };
  
    return (
      <Container>
        <Typography variant="h1">
          {course.title}
        </Typography>
  
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                sx={{
                  height: 250,
                  width: '100%',
                  marginLeft: 'auto',
                }}
                image={course.image}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {course.videos.map((video) => (
                <ListItem key={video.id}>
                  <ListItemText primary={video.title} />
                  <ListItemText secondary={video.description} />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      // Reproducir el video
                    }}
                  >
                    Reproducir
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default CoursePage;
  