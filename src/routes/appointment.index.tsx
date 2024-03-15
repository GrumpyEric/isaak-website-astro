import { AppointmentModal } from "@/components/Modals/ApppointmentModal";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/appointment/")({
  component: AppointmentModal,
});
