import { ProtectedRoute } from "@/provider/protected-route/protected-route";
import { Match } from "./container/match";

export default function Page() {
  return (
    <ProtectedRoute>
      <Match />
    </ProtectedRoute>
  );
}
