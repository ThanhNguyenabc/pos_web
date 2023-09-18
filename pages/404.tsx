import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);
  
  return <></>;
}
