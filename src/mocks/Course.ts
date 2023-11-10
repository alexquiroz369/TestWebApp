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

  constructor(
    id: string,
    title: string,
    category: string,
    description: string,
    image: string,
    instructors: string[] = [],
    content: Module[] = [],
    duration: string = ""
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.image = image;
    this.instructors = instructors;
    this.content = content;
    this.duration = duration;
  }
}
