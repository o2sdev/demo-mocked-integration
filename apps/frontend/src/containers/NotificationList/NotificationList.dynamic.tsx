'use client';

import dynamic from 'next/dynamic';

// an intermediary component is required for the dynamic import to work propertly with server components
// @see https://github.com/vercel/next.js/issues/61066
export const NotificationListDynamic = dynamic(() =>
    import('./NotificationList.client').then((module) => module.NotificationListPure),
);
