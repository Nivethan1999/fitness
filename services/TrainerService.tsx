"use server";
import { revalidateTag } from "next/cache";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./Auth";
import User from "@/models/User";

export async function createUser(state: { message: string; success: boolean; }, formData: FormData) {
    try {
      const session = await getServerSession(authOptions);
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
      const session = await getServerSession(authOptions);
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