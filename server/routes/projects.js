import express from "express";

import {
  getProjects,
  getProjectsBySearch,
  getProjectsByCreator,
  getProject,
  createProject,
  // updatePost,
  // likePost,
  // commentPost,
  // deletePost,
} from "../controllers/projects.js";

const router = express.Router();
import auth from "../middleware/auth.js";

// router.get('/creator', getProjectsByCreator);
router.get("/search", getProjectsBySearch);
router.get("/", getProjects);
router.get("/:id", getProject);

router.post("/", auth, createProject);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);
// router.post('/:id/commentPost', commentPost);

export default router;
