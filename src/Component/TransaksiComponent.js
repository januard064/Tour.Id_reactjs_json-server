import React from 'react';
import { Card, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

function RenderPesanPaket({pesanpakets}){
    return(
        <Card className="card" >
            <CardBody>
                <CardTitle>{pesanpakets.tujuanWisata}</CardTitle>
                <CardText>Jumlah Peserta : {pesanpakets.jumlahPeserta}</CardText>
                <div className="row"> 
                    <div className="col-12 col-md-6">
                        <CardText>Metode Pembayaran: {pesanpakets.metodePembayaran}</CardText>
                    </div>
                    <div  className="col-12 col-md-6"> 
                        <CardText>Dipesan : {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(pesanpakets.tanggalpesan))) }</CardText>
                    </div>
                </div> 
            </CardBody>
        </Card>
    );
}

function RenderPesanCustom({pesancustoms}){
    return(
        <Card className="card" >
            <CardBody>
                <CardTitle>{pesancustoms.tujuanWisata}</CardTitle>
                <CardText>Rencana Berangkat :  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(pesancustoms.tanggalMulai))) }</CardText>
                <div className="row"> 
                    <div className="col-12 col-md-6">
                        <CardText>Metode Pembayaran: {pesancustoms.metodePembayaran}</CardText>
                    </div>
                    <div  className="col-12 col-md-6"> 
                        <CardText>Dipesan : {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(pesancustoms.tanggalpesan))) }</CardText>
                    </div>
                </div> 
            </CardBody>
        </Card>
    );
}

const Transaksi = (props) => {
    
    const pesanpaket = (() => {

        if(props.isLoading){
            return(
                <div className="container">
                    <div className ="row tengah" >
                        <Loading />
                    </div>
                </div>
            );
        }

        else if(props.promosError){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.pesanpaketError}</h4>
                    </div>
                </div>
            );
        }

        else {
            return(
                <ul className="lists">
                    <Stagger in>
                        {
                            props.pesanpakets.map((pesanpaket)=>{
                                return(
                                    <Fade in>
                                        <div className="col-12 paket" key={pesanpaket.id}>
                                            <RenderPesanPaket pesanpakets={pesanpaket} />
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </Stagger>
                </ul>
            )
        }
        
    })()

    const pesancustom = (() => {

        if(props.isLoading){
            return(
                <div className="container">
                    <div className ="row tengah" >
                        <Loading />
                    </div>
                </div>
            );
        }

        else if(props.promosError){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.pesancustomtError}</h4>
                    </div>
                </div>
            );
        }

        else {
            return(
                <ul className="lists">
                    <Stagger in>
                        {
                            props.pesancustoms.map((pesancustom)=>{
                                return(
                                    <Fade in>
                                        <div className="col-12 paket" key={pesancustom.id}>
                                            <RenderPesanCustom pesancustoms={pesancustom} />
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </Stagger>
                </ul>
            )
        }
        
    })()


    return(
        <div className="container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/beranda">Beranda</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Transaksi</BreadcrumbItem> <hr />
                </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-6 ">
                    <h5 className="center">Riwayat Paket Wisata</h5>
                    <hr />
                    <div className="row align-items-start">
                        {pesanpaket}
                    </div>
                </div>
            
            <div className="col-6 ">
                <h5 className="center">Riwayat Custom Wisata</h5>
                <hr />
                <div className="row align-items-start">
                    {pesancustom}
                </div>
            </div>
            </div>
        </div>
    )
}


export default Transaksi;