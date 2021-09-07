import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader, Col, Row, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const required= (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));


export class PesanForm extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false,
            isModalOpenS: false

        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModalS = this.toggleModalS.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    // handleSubmit(values){
    //     alert('Current State is :' + JSON.stringify(values));
    // }

    toggleModalS(){
        this.setState({
            isModalOpenS: !this.state.isModalOpenS
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.toggleModalS();
        this.props.postPesanPaket(this.props.paketId, this.props.tujuanWisata, values.jumlahPeserta, values.metodePembayaran);
    }

    render(){
        return(
            <div>
                <Button onClick={this.toggleModal}>
                    Pesan Sekarang
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Pesan Sekarang</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >

                                <Row className="form-group">
                                    <Col md={12}>
                                        <Label htmlFor="jumlahPeserta">Jumlah Peserta</Label>
                                        <Control.text model=".jumlahPeserta" id="jumlahPeserta" name="jumlahPeserta"
                                            placeholder="Jumlah Peserta"
                                            className="form-control"
                                            validators = {{
                                                required, isNumber
                                            }}
                                        />
                                        <Errors 
                                            className="text-danger"
                                            model=".jumlahPeserta"
                                            show="touched"
                                            messages = {{
                                                required: 'Required \n',
                                                isNumber: 'Must Number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Label htmlFor="metodePembayaran">Metode Pembayaran</Label>
                                        <Control.select model=".metodePembayaran" id="metodePembayaran" name="metodePembayaran"
                                            className="form-control">
                                            <option>Transfer Bank</option>
                                            <option>Dana</option>
                                            <option>OVO</option>
                                        </Control.select>
                                    </Col>
                                </Row>


                                {/* <Button className="pesanPaket" onClick={this.toggleModalS}> Pesan Sekarang </Button> */}
                                <Button className="pesanPaket" type="submit" value="submit" > Pesan Sekarang </Button>
                            
                            </LocalForm>
                        </ModalBody>               
                </Modal>

                <Modal isOpen={this.state.isModalOpenS} toggle={this.toggleModalS}>
                    <ModalHeader toggle={this.toggleModalS}></ModalHeader>
                        <ModalBody>
                        <div className="Col-12 succes">
                            <i  class="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
                            </div>
                            <div className="col-12">
                            <p className="center">Transaksi Berhasil <br/> Kami akan melanjutkan melalui email/telepon. <br/> Terima kasih</p>
                            </div>
                        </ModalBody>               
                </Modal>

            </div>
        )
    }

}


function RenderPaket({pakets}){
    if(pakets != null){
        return (
            <div className="col-12 col-md-5">
                <Card className="card">
                    <CardImg className="imgcard" width="100%" src={baseUrl + pakets.gambar} />
                    <CardBody>
                        <CardTitle>
                        {pakets.nama} <p className="detail2">Rp.{pakets.biaya}</p>                                     
                        </CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    } else{
        return(
            <div></div>
        );
    }
}


function RenderDetailPaket({detailpakets, postPesanPaket, paketId, tujuanWisata}){
    if(detailpakets != null){
        return(
            <div className="col-12 col-md-7">
                {detailpakets.map((detailpaket) => {
                    return(
                        <React.Fragment>
                            <p>{detailpaket.deskripsi}</p>
                            <div>
                                <span class="fa fa-plus-circle" aria-hidden="true"></span> {detailpaket.durasi}
                                <p className="subketerangan">{detailpaket.deskripsiDurasi}</p>
                            </div>

                            <div>
                                <span class="fa fa-plus-circle" aria-hidden="true"></span> Penginapan
                                <div className="subketerangan">
                                 <img className="imgHotel" src={baseUrl + detailpaket.gambar} alt={detailpaket.nama}/>   
                                <p className="subketeranganHotel">{detailpaket.hotel}</p>
                                </div>
                               
                            </div>

                            <div>
                                <span class="fa fa-plus-circle" aria-hidden="true"></span> Transportasi
                                <p className="subketerangan">{detailpaket.transportasi}</p>
                            </div>

                            <div>
                                <span class="fa fa-plus-circle" aria-hidden="true"></span> Asuransi
                                <p className="subketerangan">{detailpaket.asuransi}</p>
                            </div>

                            <PesanForm paketId={paketId} tujuanWisata={detailpaket.nama} postPesanPaket={postPesanPaket} />
                            
                        </React.Fragment>
                      
                    );
                })}
                
            </div>
            
            
               
              
       
        );
    } else{
        return(<div>kosong</div>);
    }
}

const PaketDetail = (props) => {
    if(props.isLoading){
        return (
            <div className="tengah">
            <Loading />
            </div>
        )
    }
    else if(props.detailpaketsErrMess){
        return(
            <h4>{props.detailpaketsErrMess}</h4>
        )
    }
    else if(props.pakets != null){
        return(
            <div className="container">
                 <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/beranda">Beranda</Link> </BreadcrumbItem>
                    <BreadcrumbItem> <Link to="/paket">Paket</Link> </BreadcrumbItem> 
                    <BreadcrumbItem active>{props.pakets.nama}</BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="col-12">
                    <h3>{props.pakets.nama}</h3>
                </div>
                <div className="row">
                    <RenderPaket pakets ={props.pakets} />
                    <RenderDetailPaket detailpakets = {props.detailpakets} paketId={props.pakets.id} tujuanWisata={props.pakets.nama} postPesanPaket={props.postPesanPaket} />
                </div>
            </div>
        );
    } else{
        return(
            <div>kosong</div>
        );
    }
}



export default PaketDetail;