import React, {Component} from 'react';
import { Button, Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader, Col, Row, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required= (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));

export class Custom extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.postPesanCustom(values.tujuanWisata, values.tanggalMulai, values.jumlahPeserta, values.kontak, values.metodePembayaran, values.hariPertama, values.hariKedua);
        this.props.resetCustomForm();
    }

    render(){
        return(
            <div className="container">
               
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/beranda">Beranda</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Custom</BreadcrumbItem> <hr />
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Custom Perjalanan</h3>
                <p>Rencanakan Wisata Impianmu</p>
                <hr />
            </div>
                
                <div className="col-12 square2 square-lg"> 
                    <div className="rencana">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <div className="row">
                            <div className="col-7">
                            <p>Rencana Perjalanan  <hr /></p>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="tujuanWisata">Tujuan Wisata</Label>
                                    <Control.select model=".tujuanWisata" id="tujuanWisata" name="tujuanWisata"
                                        className="form-control">
                                        <option>Pulau Samosir</option>
                                        <option>Pulau Kodomo</option>
                                        <option>Pantai Kuta</option>
                                    </Control.select>
                                </Col>
                                
                            </Row>

                            <Row className="form-group">
                                <Col md={6}>
                                    <Label htmlFor="tanggalMulai">Tanggal Berangkat</Label>
                                    <Control.text model=".tanggalMulai" id="tanggalMulai" name="tanggalMulai"
                                        className="form-control"
                                        validators = {{
                                            required
                                        }}   />
                                        <Errors 
                                        className="text-danger"
                                        model=".jumlahPeserta"
                                        show="touched"
                                        messages = {{
                                            required: 'Required \n',
                                    }}
                                />
                                         
                                </Col>
                                <Col md={6}>
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
                                <Col>
                                    <Label htmlFor="kontak">Email / No. Hp</Label>
                                    <Control.text model=".kontak" id="kontak" name="kontak"
                                        className="form-control"
                                         placeholder ="Email / No. Hp"
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
                                <Col>
                                    <Label htmlFor="metodePembayaran">Metode Pembayaran</Label>
                                    <Control.select model=".metodePembayaran" id="metodePembayaran" name="metodePembayaran"
                                        className="form-control">
                                        <option>Transfer Bank</option>
                                        <option>Dana</option>
                                        <option>OVO</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            </div>
                            <div className="col-5">
                                <p>Rencana Kegiatan  <hr /></p>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="hariPertama">Hari Pertama</Label>
                                        <Control.text model=".hariPertama" id="hariPertama" name="hariPertama"
                                            placeholder="Kegiatan Hari Pertama"
                                            className="form-control"
                                            validators = {{
                                                required
                                            }}
                                        />
                                         <Errors 
                                            className="text-danger"
                                            model=".jumlahPeserta"
                                            show="touched"
                                            messages = {{
                                                required: 'Required \n',
                                        }}
                                    />
                                    </Col>
                                </Row> 
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="hariKedua">Hari Kedua</Label>
                                        <Control.text model=".hariKedua" id="hariKedua" name="hariKedua"
                                            placeholder="Kegiatan Hari Kedua"
                                            className="form-control"
                                            validators = {{
                                                required
                                            }}
                                        />
                                         <Errors 
                                            className="text-danger"
                                            model=".jumlahPeserta"
                                            show="touched"
                                            messages = {{
                                                required: 'Required \n',
                                        }}
                                    />
                                    </Col>
                                </Row> 
                            </div>
                        </div>
                        <div className="pesanCustom">
                            <Button type="submit" value="submit"> Pesan Sekarang </Button>
                        </div>
                    </LocalForm>
                </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}></ModalHeader>
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

export default Custom;
