import { ProtectedRoute } from "@/provider/protected-route/protected-route";
import { GetStarted } from "./container/get-started";

export default function Page() {
  return (
    <>
      <ProtectedRoute>
        <GetStarted />
      </ProtectedRoute>
    </>
  );
}
