import { permanentRedirect } from "next/navigation";

// Esta página no renderiza nada: solo redirige
export default function Page() {
  permanentRedirect(
    "/v?v=QbzbVb1gKM571o3khcYYOb5YJ_9-N8JrAVe07WRyVbM&m=Con%20cari%C3%B1o%20para%20un%20amigo%20que%20durar%C3%A1%20toda%20la%20vida"
  );
}
