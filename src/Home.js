import React from 'react';
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='home_image' src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg' 
                    alt='' />


                    <div className='home_row'>

                        <Product 
                            id='1' 
                            title='제품1' 
                            price={700000}
                            image='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-spacegray-201911_GEO_KR_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1574901796959'
                            rating={5}
                        />

                        <Product 
                            id='2' 
                            title='제품2' 
                            price={50000}
                            image='http://openimage.interpark.com/goods_image_big/8/7/5/7/7784268757_l.jpg'
                            rating={4}
                        />       

                    </div>

                    <div className='home_row'>

                        <Product 
                            id='3' 
                            title='제품3' 
                            price={2500}
                            image='https://canary.contestimg.wish.com/api/webimage/5e6218c64a627221afab21ea-large.jpg?cache_buster=e96b201cf142b104a2b4ded522830178'
                            rating={3}
                        />

                        <Product 
                            id='4' 
                            title='제품4' 
                            price={10000}
                            image='https://openimage.interpark.com/goods_image_big/9/1/2/6/7849449126_l.jpg'
                            rating={1}
                        />       

                    </div>

                    <div className='home_row'>

                        <Product 
                            id='5' 
                            title='제품5' 
                            price={100000}
                            image='http://autoimg.danawa.com/photo/3819/model_360.png'
                            rating={5}
                        />   

                    </div>



            </div>
        </div>
    )
}

export default Home;