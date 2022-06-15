import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  url: String,
  moreDetails: String,
  company_teamName: String,
  author: String,
  tags: [String],
  image: String,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
