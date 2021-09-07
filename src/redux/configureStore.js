import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Pakets } from './paketWisata';
import { Detailpakets } from './paketWisataDetail';
import { Customs } from './customWisata';
import { Blogs } from './blog';
import { Promos } from './promo';
import { Iklans } from './iklan';
import { PesanPakets } from './pesanPaket';
import { PesanCustoms } from './pesanCustom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore (
        combineReducers({
            pakets : Pakets,
            promos : Promos,
            detailpakets : Detailpakets,
            customs : Customs,
            blogs : Blogs,
            iklans : Iklans,
            pesanpakets: PesanPakets,
            pesancustoms: PesanCustoms
            // ...createForms({
            //     pesanPaket: PesanPaket,
            //     // pesanCustom: 
            // })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}