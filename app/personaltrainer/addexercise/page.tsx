import WorkoutProgramList from "@/components/WorkoutProgramList";
import CreateWorkoutProgram from "@/components/CreateProgram";
import AddExercise from "@/components/AddExercise";
import React from 'react'
// import Layout from "@/components/Layout";
import {
  checkSession,
  getAllClients,
  getAllExercises,
  getTrainerWorkoutPrograms,
} from "@/services/TrainerService";

export default async function WorkoutProgramsPage() {
  const session = await checkSession();
  const workoutPrograms = await getTrainerWorkoutPrograms();
  const exercises = await getAllExercises();
  const clients = await getAllClients();

  return (
    // <Layout>

    <main className="flex flex-col items-center  min-h-screen p-4">
  <div className="w-full max-w-md mx-auto bg-gray-100 p-8 shadow-lg rounded-lg mb-12">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      Add exercise to existing workout program
    </h2>
    <AddExercise
      workoutPrograms={workoutPrograms.data}
      exercises={exercises.data}
    />
  </div>
</main>
// </Layout>
  );
}