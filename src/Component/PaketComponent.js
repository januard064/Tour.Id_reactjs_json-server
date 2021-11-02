import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl'
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components'

function RenderPaket({pakets}){
    return(
                 <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }} >
        <Card className="card">
            <CardImg className="imgcard" width="100%" src={baseUrl + pakets.gambar} />
            <CardBody>
                <CardTitle>{pakets.nama}</CardTitle>
                <CardText>{pakets.deskripsiSingkat}</CardText>
                <CardSubtitle>
                    <div>
                    Rp.{pakets.biaya}
                    <Link to ={`/paket/${pakets.id}`} > <Button className="detail">Detail</Button></Link>
                    </div>
                </CardSubtitle>
            </CardBody>
        </Card>
        </FadeTransform>
    );
}


const Paket = (props) => {
    const paket = props.pakets.map((paket)  => {
        return(
            <div className="col-12 col-md-4 paket" key={paket.id}>
                <RenderPaket pakets={paket} />
            </div>
        );
    })

    if(props.isLoading){
        return(
            <div className="container">
                <div className="tengah">
                    <Loading />
                </div>
            </div>
        );
    }

    else if(props.paketError){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.paketError}</h4>
                </div>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/beranda">Beranda</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Paket</BreadcrumbItem> <hr />
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Paket Wisata</h3>
                <p>Pilih Paket Wisata Favoritmu</p>
                <hr />
            </div>
            <div className="row align-items-start">
                {paket}
            </div>
        </div>
    )
}
export default Paket;