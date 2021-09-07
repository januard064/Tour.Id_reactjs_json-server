import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardSubtitle, CardImgOverlay,
    Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderBerandaPaket({item, isLoading, errMess}){

    if(isLoading){
        return (
            <Loading />
        );
    }

    else if(errMess){
        return(
            <h4>{errMess}</h4>
        );
    }
    else if(item != null){
    return(
        <Card className="cardBeranda">
            
                <CardImg className="imgcardBeranda" src={baseUrl + item.gambar} />
                <CardImgOverlay >
                    <div className="squareBeranda col-12">
                    <CardTitle>{item.nama}</CardTitle>
                    <CardSubtitle>{item.durasi}</CardSubtitle>
                    </div>
                </CardImgOverlay>
          
        </Card>
    );

}
    
}

function RenderBerandaCustom({item, isLoading, errMess}){
    if(isLoading){
        return (
            <Loading />
        );
    }

    else if(errMess){
        return(
            <h4>{errMess}</h4>
        );
    }
    else {
    return(
        <Card className="cardBeranda">
            
                <CardImg className="imgcardBeranda" src={baseUrl + item.gambar} />
                <CardImgOverlay >
                    <div className="squareBeranda col-12">
                    <CardTitle>{item.nama}</CardTitle>
                    <CardSubtitle>{item.destinasi}</CardSubtitle>
                    </div>
                </CardImgOverlay>
          
        </Card>
    );
    }
}


const Beranda = (props) => {
    const paket = props.pakets.map((paket)  => {
        return(
            <div className="col-12 col-md-4 paket" key={paket.id}>
                <RenderBerandaPaket item={paket} isLoading={props.paketsLoading} errMess={props.customsErrMess} />
            </div>
        );
    })

    if(props.paketsLoading){
        return(
            <div className="container">
                <div className="tengah">
                <Loading />
            </div>
            </div>
        );
    }

    else if(props.paketsErrMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.paketsErrMess}</h4>
                </div>
            </div>
        );
    }

    

    const custom = props.customs.map((custom)  => {
        return(
            <div className="col-12 col-md-4 paket" key={custom.id}>
                <RenderBerandaCustom item={custom} isLoading={props.customsLoading} errMess={props.customsErrMess} />
            </div>
        );
    })



    function RenderCarousel() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    // State for Animation
    const [animating, setAnimating] = React.useState(false);
  
    // Sample items for Carousel
    const items = props.iklans
  
    // Items array length
    const itemLength = items.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data[;]
    const carouselItemData = items.map((item) => {
        return (
            
            <CarouselItem
                key={baseUrl + item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >   
                <Card className="cardIklan">
                <CardImg className="iklan" src={baseUrl + item.gambar} alt={item.nama} />
                    <CardImgOverlay >
                    <div className="squareIklan col-4">
                    <CardText className="justify">{item.nama} <br /> {item.iklan}</CardText>
                    
                    </div>
                </CardImgOverlay>
                </Card>
            </CarouselItem>
        );
    });
  
    return (
        <div style={{
            display: 'block'
        }}>
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
    );
}





    return(
        <div className="container">
            <div>
                <div className="col-12">
                   
                    <RenderCarousel />
                </div>
            </div>
            <div>
                <div className="col-12 beranda">
                    <h3>Paket Wisata</h3>
                    <p>Pilih Paket Wisata Favoritmu</p>
                    <hr />
                </div>
                <div className="row align-items-start">
                    {paket}
                </div>
            </div>
            <div>
                <div className="col-12 beranda">
                    <h3>Custom Wisata</h3>
                    <p>Rencanakan Wisata Impianmu</p>
                    <hr />
                </div>
                <div className="row align-items-start">
                    {custom}
                </div>
            </div>
        </div>
    )
}






export default Beranda;