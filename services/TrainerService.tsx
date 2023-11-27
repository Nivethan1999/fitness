"use server";
import { revalidateTag } from "next/cache";
import axios from "axios";
import { getServerSession } from "next-auth";
// import { authOptions } from "./Auth";
import User from "@/models/User";
import { redirect } from "next/navigation";
import Exercise from "@/models/Exercise";
import WorkoutProgram from "@/models/WorkoutProgram";

export async function createUser(prevState: any, formData: FormData) {
    try {
      const session = await getServerSession();
      const newClient = {
        userId: 0,
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        personalTrainerId: Number(session?.user?.id),
        accountType: "Client",
      };
      const url = "https://afefitness2023.azurewebsites.net/api/Users";
      await axios.post(url, newClient, {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
          Accept: "application/json",
        },
      });
      revalidateTag("clients");
      return { message: "Client created successfully", success: true };
    } catch (error) {
      return { message: `Failed with error: ${error}`, success: false };
    }
  }

  export async function createWorkoutProgram(prevState: any, formData: FormData) {
    try {
      const session = await getServerSession();
      const newWorkoutProgram = {
        workoutProgramId: 0,
        name: formData.get("name"),
        description: formData.get("description"),
        exercises: [],
        personalTrainerId: Number(session?.user?.id),
        clientId: Number(formData.get("clientId")),
      };
      const url = "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms";
      await axios.post(url, newWorkoutProgram, {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
          Accept: "application/json",
        },
      });
      revalidateTag("trainerWorkoutPrograms");
      revalidateTag("clientWorkoutPrograms");
      return { message: "Workout program created successfully", success: true };
    } catch (error) {
      return { message: `Failed with error: ${error}`, success: false };
    }
  }

  // export async function checkSession() {
  //   const session = await getServerSession();
  //   if (session === null || session === undefined) redirect("/api/auth/signin");
  //   return { role: session?.user?.role, name: session?.user?.name };
  // }

  export async function getAllClients() {
    const session = await getServerSession();
    const url = "https://afefitness2023.azurewebsites.net/api/Users/Clients";
    try {
      const response = await fetch(url, {
        next: { tags: ["clients"] },
        method: "GET",
        headers: { Authorization: `Bearer ${session?.user?.token}` },
      });
  
      const data: User[] = await response.json();
      return { data };
    } catch (error) {
      return { error: error };
    }
  }

  export async function getAllExercises() {
    try {
      const session = await getServerSession();
      const url = "https://afefitness2023.azurewebsites.net/api/Exercises/";
      const response = await fetch(url, {
        next: { tags: ["exercises"] },
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      const data: Exercise[] = await response.json();
      return { data };
    } catch (error) {
      return { error: Error };
    }
  }

  export async function getTrainerWorkoutPrograms() {
    try {
      const session = await getServerSession();
      const url =
        "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/trainer/";
      const response = await fetch(url, {
        next: { tags: ["trainerWorkoutPrograms"] },
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      const data: WorkoutProgram[] = await response.json();
      return { data };
    } catch (error) {
      return { error: Error };
    }
  }

  export async function addExercise(prevState: any, formData: FormData) {
    try {
      const session = await getServerSession();
      const exerciseToAdd = {
        name: formData.get("name"),
        description: formData.get("description"),
        sets: Number(formData.get("sets")),
        repetitions: Number(formData.get("repetitions")),
        time: formData.get("time"),
      };
      const url =
        "https://afefitness2023.azurewebsites.net/api/Exercises/Program/" +
        formData.get("workoutProgram");
      const response = await axios.post(url, exerciseToAdd, {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
          Accept: "application/json",
        },
      });
      console.log(response);
      revalidateTag("trainerWorkoutPrograms");
      revalidateTag("clientWorkoutPrograms");
      return { message: "Exercise added successfully", success: true };
    } catch (error) {
      console.log(error);
      return { message: `Failed with error: ${error}`, success: false };
    }
  }