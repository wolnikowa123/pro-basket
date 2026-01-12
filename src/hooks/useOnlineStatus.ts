import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [online, setOnline] = useState(false);
  useEffect(() => {
    const check = () =>
      setOnline(new Date().getHours() >= 8 && new Date().getHours() < 20);
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);
  return online;
};
