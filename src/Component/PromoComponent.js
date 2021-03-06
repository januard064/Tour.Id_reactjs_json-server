import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components'
import { Link } from 'react-router-dom';

export class SuccessPromo extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false,

        };
        this.toggleModal = this.toggleModal.bind(this);
    }
     toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return(
            <div>
            <Button onClick={this.toggleModal} className="detail">Gunakan</Button>
           

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}></ModalHeader>
                <ModalBody>
                <div className="Col-12 succes">
                    <i  class="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
                    </div>
                    <div className="col-12">
                    <p className="center">Transaksi Berhasil <br/> Anda telah menikmati diskon dari kami. <br/> Terima kasih</p>
                    </div>
                </ModalBody>               
            </Modal>
            </div>
        )
    }

}


function RenderPaket({promos}){
    return(
        <FadeTransform 
        in 
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card className="card" >
            <CardImg className="imgcard" height="150px" width="200px" src={baseUrl +promos.gambar} />
            <CardBody>
                <CardTitle>{promos.nama}</CardTitle>
                <CardText>
                <div>
                     Nikmati Perjalanan dengan diskon {promos.diskon} <SuccessPromo />
                </div>
                </CardText>
            </CardBody>
        </Card>
        </FadeTransform>
    );
}


const Promo = (props) => {
    const promo = props.promos.map((promo)  => {
        return(
            <div className="col-12 col-md-6 paket" key={promo.id}>
                <RenderPaket promos={promo} />
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

    else if(props.promosError){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.promosError}</h4>
                </div>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="beranda">Beranda</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Promo</BreadcrumbItem> <hr />
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Promo</h3>
                <p>Promo Menarik Saat Ini</p>
                <hr />
            </div>
            <div className="row align-items-start">
                {promo}
            </div>
        </div>
    )
}

export default Promo;