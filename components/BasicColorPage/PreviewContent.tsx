import { getRouteByPath } from "@/constants/routes";
import colorStore from "@/store/colorStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PreviewContent() {
  const { currentColor, setCurrentColor } = colorStore();
  const currentPath = usePathname();
  const currentRoute = getRouteByPath(currentPath);

  useEffect(() => {
    setCurrentColor(currentRoute?.type === "color" ? currentRoute.color ?? "#000000" : "#000000");
  }, [currentRoute, setCurrentColor]);

  return (
    <div className={"h-full flex justify-center items-center rounded-lg"}>
      <div
        className={"h-full w-full  my-auto"}
        style={{
          backgroundColor: currentColor,
          boxShadow: `0 8px 30px #ffbe5c`
        }}
      />
    </div>

  )
}
