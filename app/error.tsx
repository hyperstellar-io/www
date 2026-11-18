"use client";
import { useEffect } from "react";
import ErrorPage from "@/components/ErrorPage";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => console.error(error), [error]);
  return <ErrorPage code={500} retry={retry} />;
}
