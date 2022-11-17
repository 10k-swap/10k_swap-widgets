import { AccountInterface } from 'starknet';
import { Connector } from './base';
import { EventType, EventHandler } from 'get-starknet';
export interface InjectedConnectorOptions {
    id: string;
}
export declare class InjectedConnector extends Connector<InjectedConnectorOptions> {
    private _wallet?;
    constructor(options: InjectedConnectorOptions);
    available(): boolean;
    ready(): Promise<boolean>;
    connect(): Promise<AccountInterface>;
    disconnect(): Promise<void>;
    account(): Promise<AccountInterface>;
    id(): string;
    name(): string;
    on(event: EventType, callback: EventHandler): void;
    off(event: EventType, callback: EventHandler): void;
    private ensureWallet;
}
export declare function getInstalledInjectedConnectors(): InjectedConnector[];
export declare const isWalletObj: (key: string, wallet: any) => boolean;
