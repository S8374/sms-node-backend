import { Types } from "mongoose";

export enum WalletProtocol {
  TRC20 = "TRC20",
  ERC20 = "ERC20",
  BEP20 = "BEP20",
}

export interface IWallet {
  user: Types.ObjectId;       // reference to user
  walletPassword?: string;    // optional initially
  balance: number;            // default 0
  walletAddress?: string;     // optional
  protocol?: WalletProtocol;  // optional
  createdAt?: Date;
  updatedAt?: Date;
}
