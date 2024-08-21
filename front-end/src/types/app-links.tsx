export interface AppLinks {
    label: string;
    baseUrl: string;
    type: string; //@Todo refactor to enum
}

export interface FooterLinks {
    title: string;
    links: AppLinks[];
}