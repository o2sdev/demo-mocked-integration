import React from 'react';

import { CMS } from '@o2s/framework/modules';

export interface HeaderProps {
    headerData: CMS.Model.Header.Header;
    isDemoHidden?: boolean;
    children?: React.ReactNode;
}
