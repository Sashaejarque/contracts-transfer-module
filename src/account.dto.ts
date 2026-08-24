export interface Account {
  accountId: string;
  ownerName: string;
  balance: number; // entero en centavos, nunca float (ADR-007)
}
