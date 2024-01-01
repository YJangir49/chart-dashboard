import { useParams } from "react-router-dom";
import { MACHINE_ROUTE_MAP } from "../../constants/routes";
import MachineData from "./MachineData";
import NotFound from "./404";

export default function MachineErrorBoundary() {
  const { machineId } = useParams();
  const isValidMachineId = MACHINE_ROUTE_MAP[machineId];
  if (isValidMachineId) {
    return <MachineData machineId={machineId} />;
  } else {
    return <NotFound />;
  }
}
