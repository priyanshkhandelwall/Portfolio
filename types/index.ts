export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    slug: string;
    year: number;
    image: string;
    description: string;
    techStack: string[];

    role?: string;

    liveUrl?: string;
    sourceCode?: string;
}


