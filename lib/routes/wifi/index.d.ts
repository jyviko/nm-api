import { NetworkManager } from '../../nm';
declare const routes: {
    'connect-network': {
        method: string;
        handler: (nm: NetworkManager, req: any, res: any) => Promise<void>;
    };
    'list-nearby-networks': {
        method: string;
        handler: (nm: NetworkManager, req: any, res: any) => Promise<void>;
    };
    'current-network': {
        method: string;
        handler: (nm: NetworkManager, req: any, res: any) => Promise<void>;
    };
    'forget-network': {
        method: string;
        handler: (nm: NetworkManager, req: any, res: any) => Promise<any>;
    };
    'toggle-wifi': {
        method: string;
        handler: (nm: NetworkManager, req: any, res: any) => Promise<void>;
    };
    'get-wifi-active': {
        method: string;
        handler: (nm: NetworkManager, req: any, res: any) => Promise<void>;
    };
};
export default routes;
