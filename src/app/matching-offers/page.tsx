import { ProtectedRoute } from "@/provider/protected-route/protected-route";
import { Match } from "./container/match";
import { Offers } from "./container/offers";

export default function Page() {
  return (
    <ProtectedRoute>
      <Offers />
    </ProtectedRoute>
  );
}
