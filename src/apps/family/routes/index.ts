import { Router } from 'express';
import {glob} from "glob";
import path from 'path';

export function registerRoutes(router: Router): void {
    const routes = glob.sync(path.join(__dirname, './**/*.ts'));
    routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const { register } = require(routePath) as { register: (router: Router) => void };
    register(router);
}