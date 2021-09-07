import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchPakets = () => (dispatch) => {
    dispatch( paketsLoading(true));

    return fetch(baseUrl + 'paketWisata')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(pakets => dispatch(addPakets(pakets)))
    .catch(error => dispatch(paketsFailed(error.message)))
}

export const paketsLoading = () => ({
    type: ActionTypes.PAKET_LOADING
});

export const paketsFailed = (errmess) => ({
    type: ActionTypes.PAKET_FAILED,
    payload: errmess
});

export const addPakets = (pakets) => ({
    type: ActionTypes.ADD_PAKET,
    payload: pakets
});



// CUSTOM

export const fetchCustoms = () => (dispatch) => {
    dispatch( customsLoading(true));

    return fetch(baseUrl + 'customWisata')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(customs => dispatch(addCustoms(customs)))
    .catch(error => dispatch(customsFailed(error.message)))
}

export const customsLoading = () => ({
    type: ActionTypes.CUSTOM_LOADING
});

export const customsFailed = (errmess) => ({
    type: ActionTypes.CUSTOM_FAILED,
    payload: errmess
});

export const addCustoms = (customs) => ({
    type: ActionTypes.ADD_CUSTOM,
    payload: customs
});

// DETAIL PAKET
export const fetchDetailPakets = () => (dispatch) => {

    return fetch(baseUrl + 'paketWisataDetail')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(detailpakets => dispatch(addDetailPaket(detailpakets)))
    .catch(error => dispatch(detailPaketFailed(error.message)))
}

export const detailPaketFailed = (errmess) => ({
    type: ActionTypes.PAKETDETAIL_FAILED,
    payload: errmess
});

export const addDetailPaket = (detailpakets) => ({
    type: ActionTypes.ADD_PAKETDETAIL,
    payload: detailpakets
});



// IKLAN
export const fetchIklans = () => (dispatch) => {
    dispatch( iklansLoading(true));

    return fetch(baseUrl + 'iklan')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(iklans => dispatch(addIklans(iklans)))
    .catch(error => dispatch(iklansFailed(error.message)))
}

export const iklansLoading = () => ({
    type: ActionTypes.IKLAN_LOADING
});

export const iklansFailed = (errmess) => ({
    type: ActionTypes.IKLAN_FAILED,
    payload: errmess
});

export const addIklans = (iklans) => ({
    type: ActionTypes.ADD_IKLAN,
    payload: iklans
});



// BLOG
export const fetchBlogs = () => (dispatch) => {
    dispatch( blogsLoading(true));

    return fetch(baseUrl + 'blog')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(blogs => dispatch(addBlogs(blogs)))
    .catch(error => dispatch(blogsFailed(error.message)))
}

export const blogsLoading = () => ({
    type: ActionTypes.BLOG_LOADING
});

export const blogsFailed = (errmess) => ({
    type: ActionTypes.BLOG_FAILED,
    payload: errmess
});

export const addBlogs = (blogs) => ({
    type: ActionTypes.ADD_BLOG,
    payload: blogs
});




// PROMOS
export const fetchPromos = () => (dispatch) => {
    dispatch( promosLoading(true));

    return fetch(baseUrl + 'promo')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMO_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMO_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMO,
    payload: promos
});



export const postPesanPaket = (paketId, tujuanWisata, jumlahPeserta, metodePembayaran, pembayaran) => dispatch =>{
    const newPesanPaket = {
        paketId: paketId,
        tujuanWisata: tujuanWisata,
        jumlahPeserta: jumlahPeserta,
        metodePembayaran: metodePembayaran,
        pembayaran: pembayaran
    };
    newPesanPaket.tanggalpesan = new Date().toISOString();

    return fetch(baseUrl + "pesanPaket", {
        method: "POST",
        body: JSON.stringify(newPesanPaket),
        headers: {
            "Content-Type" : "application/json"
        },
        credentials: "same-origin"
    })
    .then(
        response => {
            if(response.ok){
                return response;
            } else {
                var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
                error.response = response;
                throw error;
            }
        },
        error => {
            throw error;
        }    
        )
        .then(response => response.json())
        // .then(response =>  alert("Transaksi Anda Telah Sukses" + JSON.stringify(response)))
        .catch(error => {
            console.log('Pesanan', error.message);
            alert('Pesanan Gagal' + error.message);
        });
    
};




export const postPesanCustom = (tujuanWisata, tanggalMulai, jumlahPeserta, kontak, metodePembayaran, hariPertama, hariKedua) => dispatch =>{
    const newPesanCustom = {
        tujuanWisata: tujuanWisata,
        tanggalMulai: tanggalMulai,
        jumlahPeserta: jumlahPeserta,
        kontak: kontak,
        metodePembayaran: metodePembayaran,
        hariPertama: hariPertama,
        hariKedua: hariKedua
    };
    newPesanCustom.tanggalpesan = new Date().toISOString();

    return fetch(baseUrl + "pesanCustom", {
        method: "POST",
        body: JSON.stringify(newPesanCustom),
        headers: {
            "Content-Type" : "application/json"
        },
        credentials: "same-origin"
    })
    .then(
        response => {
            if(response.ok){
                return response;
            } else {
                var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
                error.response = response;
                throw error;
            }
        },
        error => {
            throw error;
        }    
        )
        .then(response => response.json())
        // .then(response =>  alert("Transaksi Anda Telah Sukses" + JSON.stringify(response)))
        .catch(error => {
            console.log('Pesanan', error.message);
            alert('Pesanan Gagal' + error.message);
        });
    
};




//PESAN PAKET
export const fetchPesanPakets= () => (dispatch) => {
    dispatch( pesanPaketsLoading(true));

    return fetch(baseUrl + 'pesanPaket')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(pesanpakets => dispatch(addPesanPakets(pesanpakets)))
    .catch(error => dispatch(pesanPaketsFailed(error.message)))
}

export const pesanPaketsLoading = () => ({
    type: ActionTypes.PESANPAKET_LOADING
});

export const pesanPaketsFailed = (errmess) => ({
    type: ActionTypes.PESANPAKET_FAILED,
    payload: errmess
});

export const addPesanPakets = (pesanpakets) => ({
    type: ActionTypes.ADD_PESANPAKET,
    payload: pesanpakets
});



//PESAN CUSTOM
export const fetchPesanCustoms= () => (dispatch) => {
    dispatch( pesanCustomsLoading(true));

    return fetch(baseUrl + 'pesanCustom')
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error(`Error ${response.status}  :  ${response.statusText} `);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }    )
    .then(response => response.json())
    .then(pesancustoms => dispatch(addPesanCustomss(pesancustoms)))
    .catch(error => dispatch(pesanCustomsFailed(error.message)))
}

export const pesanCustomsLoading = () => ({
    type: ActionTypes.PESANCUSTOM_LOADING
});

export const pesanCustomsFailed = (errmess) => ({
    type: ActionTypes.PESANCUSTOM_FAILED,
    payload: errmess
});

export const addPesanCustomss = (pesancustoms) => ({
    type: ActionTypes.ADD_PESANCUSTOM,
    payload: pesancustoms
});

