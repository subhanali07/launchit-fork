import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applySeo, getSeoForPath } from "../lib/seo";

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeo(getSeoForPath(pathname));
  }, [pathname]);

  return null;
}
