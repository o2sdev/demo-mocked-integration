import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Modules.NotFoundPage.URL;

export const notFoundPage = (sdk: Sdk) => ({
    modules: {
        getNotFoundPage: (
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.NotFoundPage.Model.NotFoundPage> => {
            return sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
            });
        },
    },
});
