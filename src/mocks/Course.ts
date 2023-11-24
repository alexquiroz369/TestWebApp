interface Section {
  title: string;
  videos: Video[];
}

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}
interface Module {
  title: string;
  description: string;
}
export class Course {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  instructors: string[];
  content: Module[];
  duration: string;
  rating: number;
  pdFile: string;
  sections: Section[];

  constructor(
    id: string,
    title: string,
    category: string,
    description: string,
    image: string,
    rating: number,
    pdFile: string,
    instructors: string[] = [],
    content: Module[] = [],
    duration: string = "",
    sections: Section[] = []
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.pdFile = pdFile;
    this.instructors = instructors;
    this.content = content;
    this.duration = duration;
    this.sections = sections;
  }
}
