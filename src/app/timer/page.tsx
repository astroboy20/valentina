import { ProtectedRoute } from "@/provider/protected-route/protected-route";
import { Timer } from "./container/timer";

export default function Page() {
  return (
    <ProtectedRoute>
      <Timer />
    </ProtectedRoute>
  );
}
