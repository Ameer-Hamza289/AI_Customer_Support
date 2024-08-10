"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import axios from "axios";
import { getCookie } from "cookies-next";
interface FormType {
  name: string;
  email: string;
  password: string;
}
const emailSchema = z.string().email();
const passwordSchema = z.string().min(8);

export default function AuthPage() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (type: "sign-up" | "login") => {
    console.log(`${type} clicked`);
    console.log(formData);

    const cookie = getCookie("jwt");
    console.log("jwt:", cookie);
    const response = await axios.post("/api/auth/signup", formData);
    if (response.status == 200) {
      router.push("/");
    }
  };

  return (
    <>
      <button className="bg-green-600 p-2 rounded">Back</button>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            Sign Up
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 text-black bg-gray-200 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 text-black bg-gray-200 rounded border border-gray-300"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 text-black bg-gray-200 rounded border border-gray-300"
            />
            {error && <p className="my-3 text-red-900 text-sm text">{error}</p>}

            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();

                  const passwordResult = passwordSchema.safeParse(
                    formData.password
                  );
                  const emailResult = emailSchema.safeParse(formData.email);
                  if (!passwordResult.success) {
                    setError("Invalid Password. Min length 8.");
                  } else if (!emailResult.success) {
                    setError("Invalid email");
                  } else {
                    setFormData({ name: "", email: "", password: "" });
                    error && setError("");
                    handleSubmit("login");
                  }
                }}
                className="w-full p-3 text-white bg-green-600 rounded hover:bg-gray-950"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
