import { DefaultSession } from 'next-auth';

export * from 'next/cache';
declare module 'next/cache' {
    /**
     * Cache this `"use cache"` for a timespan defined by the `"render"` profile for a duration of roughly
     * a single page render (accounting for slow API responses when fetching page content).
     * ```
     *   stale:      1 seconds
     *   revalidate: 5 seconds
     *   expire:     5 seconds
     * ```
     *
     * This cache may be stale on clients for 1 second before checking with the server.
     * If the server receives a new request after 5 seconds, start revalidating new values in the background.
     * If this entry has no traffic for 5 seconds it will expire. The next request will recompute it.
     */
    export function unstable_cacheLife(profile: 'render'): void;
}

export * from 'next-auth';
declare module 'next-auth' {
    interface Session extends DefaultSession {
        accessToken: string;
        user?: {
            role?: string;
            customer?: {
                id: string;
                roles: string[];
                name: string;
            };
        } & DefaultSession['user'];
    }

    interface User {
        role?: string;
        password?: string | null;
        defaultCustomerId?: string;
        accessToken?: string;
    }
}

export * from 'next-auth/jwt';
declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string;
        accessTokenExpires: number;
        role?: string;
        customer?: {
            id: string;
            roles: string[];
            name: string;
        };
    }
}
