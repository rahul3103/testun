class Course {
  constructor(course) {
    // Let's keep these as common keys for all the models
    /* Common Keys */
    this.uid = course.uid;
    this.name = course.name;
    this.thumbnail = course.thumbnail || course.cover_photo || null;
    this.description = course.description || null;
    this.permalink = course.permalink;
    this.relativeLink = course.relative_link;
    this.averageRating = course.avg_rating;
    /* Common Keys */
  }
}

const getEntityData = data => {
  const course = new Course(data);
  return course;
};

export default { Course, getEntityData };
