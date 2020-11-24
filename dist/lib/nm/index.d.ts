import * as Bluebird from 'bluebird';
import { NetworkManagerTypes } from './types';
export declare class NetworkManagerError extends Error {
    code: string;
    data: any;
    message: string;
    constructor(message: any);
}
export interface Device {
    path: string;
    DeviceType: number;
}
export interface AccessPoint {
    path: string;
    Ssid: string;
}
export declare class NetworkManager extends NetworkManagerTypes {
    accessPoints: any[];
    wifiActive: boolean;
    devices: {
        wifi: Device;
    };
    constructor();
    init(): Promise<this>;
    getBus(): any;
    toggleWifi: (value: boolean) => Promise<boolean>;
    callMethod: (path?: string[] | string) => (iface?: string[] | string) => ([method, signature]: [string, string]) => (params?: any[]) => Bluebird<any>;
    getObjectProperty: ([iface, prop]: [string, string], path: any) => Promise<{
        [x: string]: any;
        path: any;
    }>;
    getWifiDevice: () => Promise<Device>;
    getDeviceStatus: (device: Device) => Promise<any>;
    connectDevice: (path: any) => Bluebird<any>;
    disconnectDevice: (path: any) => Bluebird<any>;
    activateConnection: (params: any) => Bluebird<any>;
    addConnection: (params: any) => Bluebird<any>;
    deleteConnection: (path: any) => Bluebird<any>;
    requestScan: (params: any) => Bluebird<any>;
    getActiveConnections: () => Bluebird<any>;
    getConnectionSettings: (path: any) => Promise<{
        path: any;
        settings: any;
    }>;
    connectNetwork: (network: any) => Promise<any>;
    listConnections: () => Promise<{
        path: any;
        settings: any;
    }[]>;
    forgetNetwork: (network: any) => Promise<void>;
    listNearbyNetworks: () => Promise<any[]>;
    ignoreScanStatus: (status: any) => boolean;
    getAccessPoints: (wifiDevicePath: any) => Promise<any[]>;
    getApProperties: (path: any) => Promise<[{
        [x: string]: any;
        path: any;
    }, {
        [x: string]: any;
        path: any;
    }, {
        [x: string]: any;
        path: any;
    }, {
        [x: string]: any;
        path: any;
    }, {
        [x: string]: any;
        path: any;
    }]>;
    getCurrentNetwork: () => Promise<any>;
}
