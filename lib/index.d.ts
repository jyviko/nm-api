import * as express from 'express';
import { NetworkManager } from './nm';
declare function createHttpServer(): Promise<express.Application>;
export { createHttpServer, NetworkManager };
