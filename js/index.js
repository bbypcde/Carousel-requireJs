/**
 * Created by SamSung on 2017/12/23.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.12.4"
    }
});
require(["jquery","Carousel"],function($,Carousel){
    var car=new Carousel();
    car.init({
        selector:'#content',
        imgDate:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        buttonType:'circle',
        btnPos:'middle',
        speed:'1000'
    });

});