"use server";
import { revalidateTag } from "next/cache";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./Auth";
import User from "@/models/User";
import { redirect } from "next/navigation";

export async function createUser(prevState: any, formData: FormData) {
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

  export async function checkSession() {
    const session = await getServerSession(authOptions);
    if (session === null || session === undefined) redirect("/api/auth/signin");
    return { role: session?.user?.role, name: session?.user?.name };
  }

  export async function getAllClients() {
    const session = await getServerSession(authOptions);
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