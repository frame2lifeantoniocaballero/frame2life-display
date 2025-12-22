import { permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
  permanentRedirect(
    "/v?v=kPuoB63w_XqauVk-sfZp7qoR9WRxoWaLSDIZVPh1G6I&m=Que%20bonito%20caminar%20detr%C3%A1s%20de%20ti"
  );
}
