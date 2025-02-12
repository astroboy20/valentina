import { ProtectedRoute } from "@/provider/protected-route/protected-route";
import { Match } from "./container/match";
import { Timer } from "./container/timer";

export default function Page() {
  return (
    <ProtectedRoute>
      <Timer />
    </ProtectedRoute>
  );
}
