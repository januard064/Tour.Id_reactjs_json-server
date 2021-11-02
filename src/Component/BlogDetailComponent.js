import React from 'react';
import { Card, CardText, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components'

function RenderBlogDetail({blogs}){
    return(
        <React.Fragment>
             <div className="col-12">
            <img className="imgBlog" src={baseUrl +blogs.gambar} alt={blogs.nama} />
            </div> 
            <div className="col-12">
                <h5 className="center">{blogs.judul}</h5>
                <p className="center">by {blogs.nama}</p>
            </div>
            
            <Card className="card">
                <CardBody>
                    <CardText className="justify">{blogs.blog}</CardText>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}



const BlogDetail = (props) => {
    if(props.blogs != null){
        return(
            <div className="container">
                 <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/beranda">Beranda</Link> </BreadcrumbItem>
                    <BreadcrumbItem> <Link to="/blog">Blog</Link> </BreadcrumbItem> 
                    <BreadcrumbItem active>{props.blogs.judul} by {props.blogs.nama}</BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                <FadeTransform
            in
            transformProps = {{
                exitTransform: 'scale(0.5) translateX(-30%)'
            }}>
                    <RenderBlogDetail blogs ={props.blogs} />
                    </FadeTransform>
                </div>
            </div>
        );
    } else{
        return(
            <div className="container">
                <div className="tengah">
                    <Loading />
                </div>
            </div>
        );
    }
}

export default BlogDetail;