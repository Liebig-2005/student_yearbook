const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Student-Yearbook API working...");
});

app.get("/students", async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res
      .status(200)
      .json({ data: students, message: "Data retrieved successfully" });
  } catch (err) {
    res
      .status(400)
      .json({ error: err.message, message: "Failed to retrieve data" });
  }
});

app.post("/students", async (req, res) => {
  try {
    const studentData = req.body;
    const student = await prisma.student.create({
      data: studentData,
    });
    res.status(201).json({
      data: studentData,
      message: "Student created successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: "Failed to create student",
    });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const studentData = await prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!studentData) {
      return res.status(404).json({ message: "Student not found" });
    }
    res
      .status(200)
      .json({ data: studentData, message: "Student retrieved successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Failed to retrieve student",
    });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudentData = req.body;
    const studentData = await prisma.student.update({
      data: updatedStudentData,
      where: {
        id: Number(id),
      },
    });
    res
      .status(200)
      .json({ data: studentData, message: "Student updated successfully" });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "Student not found" });
    }
    res
      .status(400)
      .json({ error: err.message, message: "Failed to update student" });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const studentData = await prisma.student.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({
      data: studentData,
      message: "Student deleted successfully",
    });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(400).json({
      error: err.message,
      message: "Failed to delete student",
    });
  }
});

app.listen(3000);
