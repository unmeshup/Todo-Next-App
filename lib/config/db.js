import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Unmeshup:7304754412@cluster0.1jlshsq.mongodb.net/todo-app"
  );
  console.log("DB Connected");
};
