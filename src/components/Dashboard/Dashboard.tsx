import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("./worker.ts", import.meta.url));

    worker.onmessage = (event) => {
      setD(event.data);
    };

    worker.onerror = (error) => {
      console.error("Web Worker error:", error);
    };

    worker.postMessage(null);
    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{d}</div>;
}
