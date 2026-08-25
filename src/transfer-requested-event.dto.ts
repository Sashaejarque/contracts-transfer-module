export interface TransferRequestedEvent {
  transferId: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number; // entero en centavos, nunca float (ADR-007)
  requestedAt: string; // ISO 8601
}
