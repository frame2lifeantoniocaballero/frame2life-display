import { permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
  permanentRedirect(
    "/v?v=pZSo9AnQuEZnU8tAsGgcBWQtwiKU6hT9-iYltytVfKQ&m=Os%20queremos%20mucho"
  );
}
