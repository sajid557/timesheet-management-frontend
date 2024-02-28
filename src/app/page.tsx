"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4080/api/get-users`);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div></div>
    </main>
  );
}
