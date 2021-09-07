import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Paket from './PaketComponent';
import PaketDetail from './PaketDetailComponent';
import Custom from './CustomComponent';
import Promo from './PromoComponent';
import Beranda from './BerandaComponent';
import Blog from './BlogComponent';
import BlogDetail from './BlogDetailComponent';
import Transaksi from './TransaksiComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchPakets, fetchCustoms, fetchIklans, fetchDetailPakets, fetchBlogs, fetchPromos, postPesanPaket, postPesanCustom, fetchPesanPakets, fetchPesanCustoms } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStatetoProps = state => {
    return {
        pakets: state.pakets,
        customs: state.customs,
        iklans: state.iklans,
        detailpakets: state.detailpakets,
        blogs: state.blogs,
        promos: state.promos,
        pesanpakets: state.pesanpakets,
        pesancustoms: state.pesancustoms
    }
}

const mapDispatchToProps = (dispatch) => ({
    postPesanPaket: (paketId, tujuanWisata, jumlahPeserta, metodePembayaran, ) => dispatch(postPesanPaket(paketId,tujuanWisata, jumlahPeserta, metodePembayaran )),
    postPesanCustom: (tujuanWisata, tanggalMulai, jumlahPeserta, kontak, metodePembayaran, hariPertama, hariKedua) => dispatch(postPesanCustom(tujuanWisata, tanggalMulai, jumlahPeserta, kontak, metodePembayaran, hariPertama, hariKedua)),
    fetchPakets: () => { dispatch(fetchPakets())},
    fetchCustoms: () => { dispatch(fetchCustoms())},
    fetchIklans: () => { dispatch(fetchIklans())},
    fetchDetailPakets: () => { dispatch(fetchDetailPakets())},
    fetchBlogs: () => { dispatch(fetchBlogs())},
    fetchPromos: () => { dispatch(fetchPromos())},
    fetchPesanPakets: () => { dispatch(fetchPesanPakets())},
    fetchPesanCustoms: () => { dispatch(fetchPesanCustoms())},
    resetCustomForm: () => { dispatch(actions.reset('pesanCustom'))}
});



class Main extends Component{

 

    componentDidMount(){
        this.props.fetchPakets();
        this.props.fetchCustoms();
        this.props.fetchIklans();
        this.props.fetchDetailPakets();
        this.props.fetchBlogs();
        this.props.fetchPromos();
        this.props.fetchPesanPakets();
        this.props.fetchPesanCustoms();
    }

    render(){

        const BerandaPage = () => {
            return(
                <Beranda pakets={this.props.pakets.pakets.filter((paket) => paket.prioritas)} 
                    paketsLoading = {this.props.pakets.isLoading}   
                    paketsErrMess = {this.props.pakets.errMess}

                    customs= {this.props.customs.customs.filter((custom) => custom.prioritas)} 
                    customsLoading = {this.props.customs.isLoading}    
                    customsErrMess = {this.props.customs.errMess}

                    iklans = {this.props.iklans.iklans.filter((iklan) => iklan.tayang)}
                    iklansLoading = {this.props.iklans.isLoading}    
                    iklansErrMess = {this.props.iklans.errMess}
                />
            );
        }

        const PaketDetailId = ({match}) =>{
            return(
                <PaketDetail pakets={this.props.pakets.pakets.filter((paket) => paket.id === parseInt(match.params.paketId,10))[0]} 
                        isLoading = {this.props.pakets.isLoading}   
                        paketsErrMess = {this.props.pakets.errMess}  

                    detailpakets = {this.props.detailpakets.detailpakets.filter(detailpaket => detailpaket.paketId === parseInt(match.params.paketId,10))}                  
                        detailpaketsErrMess = {this.props.detailpakets.errMess}
                        postPesanPaket = {this.props.postPesanPaket}

                />
                
            );
        }
        
        const BlogDetailId = ({match}) => {
            return(
                <BlogDetail blogs={this.props.blogs.blogs.filter((blog) => blog.id === parseInt(match.params.blogId,10))[0]}
                        
                    />
            )
        }

        const TransaksiPage = () =>{
            return(
            <Transaksi 
                    pesanpakets={this.props.pesanpakets.pesanpakets} isLoading={this.props.pesanpakets.isLoading} pesanpaketsError = {this.props.pesanpakets.errMess}
                    pesancustoms={this.props.pesancustoms.pesancustoms} isLoading={this.props.pesancustoms.isLoading} pesancustomsError = {this.props.pesancustoms.errMess}
            />
            )
        }

   
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/beranda" component={BerandaPage}/>
                        <Route exact path="/paket" component={() =>  <Paket pakets={this.props.pakets.pakets} isLoading={this.props.pakets.isLoading} paketError = {this.props.pakets.errMess}  /> } />
                        <Route path="/paket/:paketId" component={PaketDetailId} />
                        <Route exact path="/promo" component={() =>  <Promo promos={this.props.promos.promos} isLoading={this.props.promos.isLoading} promosError = {this.props.promos.errMess} /> } />
                        <Route exact path="/custom" component={() => <Custom postPesanCustom={this.props.postPesanCustom} resetCustomForm={this.props.resetCustomForm} />}/>
                        <Route exact path="/blog" component={() => <Blog blogs={this.props.blogs.blogs} isLoading={this.props.blogs.isLoading} blogsErrMess = {this.props.blogs.errMess}  /> } />
                        <Route path="/blog/:blogId" component={ BlogDetailId } />
                        <Route path="/transaksi" component={TransaksiPage} />
                        <Redirect to="/beranda"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)  (Main));