import { routes } from './routes';

export const config = {
    tabs: [
        ...(<any>routes).tabs
    ],
    modals: [
        ...(<any>routes).modals
    ]
};
