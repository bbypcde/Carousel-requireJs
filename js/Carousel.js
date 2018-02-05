/**
 * Created by SamSung on 2017/12/23.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.12.4"
    }
});
define(["jquery"],function($)
    {
        function Carousel(){

            this.$oDiv=$('<div class="carousel-container"></div>');
            this.$oDiv1=$('<div class="carousel-img-box"> </div>');
            this.$oUl=$('<ul class="carousel-tab"> </ul>');
            this.$oSpan1=$('<span class="carousel-prev">&lt;</span>');
            this.$oSpan2=$('<span class="carousel-next">&gt;</span>');
            this.defaultOption={
                buttonType:"square",//circle square
                btnPos:"bottom",//middle bottom
                speed:"1000"
            }

        }
        Carousel.prototype.init=function(option){
                var _this=this;
                var iNow=0;
                $.extend(this.defaultOption,option);
                this.$oDiv.append(this.$oDiv1).append(this.$oUl).append(this.$oSpan1)
                    .append(this.$oSpan2);
                for(var i=0;i<this.defaultOption.imgDate.length;i++)
                {
                    var cls=(i==0)?" selected":"";
                    this.$oDiv1.append($('<img  class="'+cls+'" src="'+this.defaultOption.imgDate[i]+'" />'));
                    this.$oUl.append($('<li class="'+cls+'">'+(i+1)+'</li>'));
                }
                this.$oSpan1.addClass('carousel-prev-'+this.defaultOption.btnPos);
                this.$oSpan2.addClass('carousel-next-'+this.defaultOption.btnPos);
                $(this.defaultOption.selector).append(this.$oDiv);
                $("li",this.$oUl).on("click",function(){
                    changeImg($(this).index());
                    iNow=$(this).index();
                });
                function changeImg(idx)
                {
                    $("li",_this.$oUl).eq(idx).addClass("selected").siblings().removeClass("selected");
                    $("img",_this.$oDiv1).eq(idx).addClass("selected").siblings().removeClass("selected");
                }
                this.$oSpan1.on("click",function(){
                    iNow--;
                    if(iNow==-1)
                    {
                        iNow=_this.defaultOption.imgDate.length-1;
                    }
                    changeImg(iNow);
                });
                this.$oSpan2.on("click",function(){
                    iNow++;
                    if(iNow==_this.defaultOption.imgDate.length){
                        iNow=0;
                    }
                    changeImg(iNow);
                });
                function run()
                {
                    timer=setInterval(function(){
                        _this.$oSpan2.trigger("click");
                    },_this.defaultOption.speed);
                }
                run();
                this.$oDiv.hover(function(){
                    clearInterval(timer);
                },function(){
                    run();
                });




            };
        return Carousel;

    });
