import type { TransferStatus } from "./transfer-status.js";

export interface LedgerEntry {
  transferId: string;
  timestamp: string; // ISO 8601 — sort key de la tabla Ledger (AWS-3)
  status: TransferStatus;
  fromAccountId: string;
  toAccountId: string;
  amount: number; // entero en centavos, nunca float (ADR-007)
  coelsaId?: string; // presente solo cuando status === "LIQUIDADO"
  reason?: string; // presente solo cuando status === "REVERTIDO"
  receiptKey?: string; // key del PDF en S3 (nunca una URL) -- lo agrega la Lambda de pdf-receipt via DynamoDB Streams, puede tardar unos segundos en aparecer
}
