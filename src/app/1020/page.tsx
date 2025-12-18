import { permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
  permanentRedirect(
    "/v?v=kK89FqpwzTQMFDExXbqksR9dzboRK5HkjwOk3G6ozKY&m=Amigas%20de%20elecci%C3%B3n%2C%20hermanas%20de%20coraz%C3%B3n"
  );
}
