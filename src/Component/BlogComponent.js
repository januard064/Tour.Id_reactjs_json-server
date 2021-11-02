import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderBlog({blogs}){
    return(
        <FadeTransform
            in
            transformProps = {{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
        <Card className="card">
            <CardImg className="imgcard" height="300px" width="100%" src={baseUrl +blogs.gambar} />
            <CardBody>
                <CardTitle>{blogs.judul}</CardTitle>
                <CardText>by {blogs.nama}</CardText>
                <CardText className="justify">{blogs.blog.substring(0, 200)} <Link className="selengkapnya" to ={`/blog/${blogs.id}`} > Baca selengkapnya</Link></CardText>
                
            </CardBody>
        </Card>
        </FadeTransform>
    );
}


const Blog = (props) => {
    const blog = props.blogs.map((blog)  => {
        return(
            <div className="col-12 col-md-6  paket" key={blog.id}>
                <RenderBlog blogs={blog} />
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
        )
    }

    else if(props.blogsErrMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.blogsErrMess}</h4>
                </div>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/beranda">Beranda</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Blog</BreadcrumbItem> <hr />
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Blog</h3>
                <p>Berbagi Cerita Petualanganmu</p>
                <hr />
            </div>
            <div className="row align-items-start">
                {blog}

            </div>
        </div>
    )
}
export default Blog;