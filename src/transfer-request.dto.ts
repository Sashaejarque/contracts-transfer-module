export interface TransferRequestDTO {
  transferId: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number; // entero en centavos, nunca float (ADR-007)
}
