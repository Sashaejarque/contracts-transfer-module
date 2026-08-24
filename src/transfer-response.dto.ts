import type { TransferStatus } from "./transfer-status.js";

export interface TransferResponseDTO {
  transferId: string;
  status: TransferStatus;
  acceptedAt: string; // ISO 8601, asignado por el servidor
}
