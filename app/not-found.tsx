import type { Metadata } from "next";
import ErrorPage from "@/components/ErrorPage";

export const metadata: Metadata = { title: "Page not found" };
export default function NotFound() { return <ErrorPage code={404} />; }
