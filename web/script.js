// document.addEventListener('DOMContentLoaded', function() {
//     const album = document.querySelector('.album');

//     album.addEventListener('click', function() {
//         this.classList.toggle('paused-animation');
//     });


//     album.addEventListener('mouseenter', function() {
//         this.classList.add('paused-animation');
//     });

//     album.addEventListener('mouseleave', function() {
//         this.classList.remove('paused-animation');
//     });
// });


// document.getElementById('lightbulb').addEventListener('click', function() {
//     lightbulb.classList.toggle('active');
// });
let iterationCount = 1;

document.addEventListener('DOMContentLoaded', function() {
    const lightbulb = document.getElementById('lightbulb');
    const wrappers = document.querySelectorAll('.album-wrapper');
    const date = document.getElementById('date-wrapper');
    const lights = document.querySelectorAll('.light-wrapper');
    const da1ta = document.querySelectorAll('.da1ta-wrapper');
    const da2ta = document.querySelectorAll('.da2ta-wrapper');
    const sale1 = document.getElementById('sale1-wrapper');
    const sale2 = document.getElementById('sale2-wrapper');
    const color = document.querySelectorAll('.color-wrapper');

    let isLightOn = false; // 用于跟踪动画是否正在播放

    lightbulb.addEventListener('click', function() {
        if (isLightOn) {
            // 关闭所有动画
            wrappers.forEach(img => {
                img.style.animationPlayState = 'paused';
            });
            date.style.animationPlayState = 'paused';
        } else {
            // 打开所有动画
            wrappers.forEach((img, index) => {
                img.style.animation = `album${index + 1}animation0 2s 1,album${index + 1}animation1 ${index%4 + 11}s infinite 2s`;
                img.style.animationPlayState = 'running';
            });
            date.style.animation  = `date1 2s 1,date2 10s infinite 2s`;
            date.style.animationPlayState = 'running';
            lights.forEach((lig, index) => {
                lig.style.animation = `light${index + 1}animation0 2s 1,light${index + 1}animation1 10s infinite 2s`;
                lig.style.animationPlayState = 'running';
            });
        }
        isLightOn = !isLightOn; // 切换状态
    });
    
    wrappers.forEach( wrapper => {
        let isclick = true;
        wrapper.addEventListener('click', function() {
            if (isclick){
                wrappers.forEach(w => {
                    w.style.animationPlayState = 'paused';
                    //记录当前大小位置透明度    
                    const currentTransform1 = window.getComputedStyle(w).transform;
                    const currentOpacity1 = window.getComputedStyle(w).opacity;
                    w.style.removeProperty('animation');
                    w.style.transform = currentTransform1;
                    w.style.opacity = currentOpacity1;
                });
                date.style.animationPlayState = 'paused';
                //记录当前大小位置透明度    
                const dateTransform = window.getComputedStyle(date).transform;
                const dateOpacity = window.getComputedStyle(date).opacity;
                date.style.removeProperty('animation');
                date.style.transform = dateTransform;
                date.style.opacity = dateOpacity;
                lights.forEach(lig => {
                    lig.style.animationPlayState = 'paused';
                    //记录当前大小位置透明度    
                    const ligTransform = window.getComputedStyle(lig).transform;
                    const ligOpacity = window.getComputedStyle(lig).opacity;
                    lig.style.removeProperty('animation');
                    lig.style.transform = ligTransform;
                    lig.style.opacity = ligOpacity;    
                    lig.style.animation = 'ligfade 2s ease forwards';
                });
                
                for (let i = 0; i < wrappers.length; i++) {
                    const w = wrappers[i];
                    const c = color[i];
                    
                    if (w === this) {
                        if ((i+1) > 4) {
                            w.style.animation = 'outstand2 2s ease forwards';
                            lightbulb.style.animation = 'lightanimation1 2s ease forwards';
                            if(i==4||i==5){
                                date.style.animation = `datebig4 2s ease forwards`;
                            }else if( i==6||i==7){
                                date.style.animation = `datebig5 2s ease forwards`;
                            }else{
                                date.style.animation = `datebig6 2s ease forwards`;
                            }
                            for(let g =0 ;g <10 ; g++ ){
                                const d1 = da1ta[g];
                                const d2 = da2ta[g];
                                if(g==i){
                                    d1.style.animation = 'da1tar1 2s ease forwards';
                                    d2.style.animation = 'da2tar1 2s ease forwards';
                                }else{
                                    d1.style.animation = 'da1tar0 2s ease forwards';
                                    d2.style.animation = 'da2tar0 2s ease forwards';
                                }
                            }
                            sale1.style.animation = 'sale1r0 2s ease forwards';
                            sale2.style.animation = 'sale2r0 2s ease forwards';
                            c.style.animation = 'colorr0 2s ease forwards';
                            
                        } else {
                            w.style.animation = 'outstand1 2s ease forwards';
                            lightbulb.style.animation = 'lightanimation2 2s ease forwards';
                            date.style.animation = 'date4 2s ease forwards';
                            if(i==3){
                                date.style.animation = `datebig3 2s ease forwards`;
                            }else{
                                date.style.animation = `datebig${ i+1 } 2s ease forwards`;
                            }
                            for(let g =0 ;g <10 ;g++ ){
                                const d1 = da1ta[g];
                                const d2 = da2ta[g];
                                if(g==i){
                                    d1.style.animation = 'da1tal1 2s ease forwards';
                                    d2.style.animation = 'da2tal1 2s ease forwards';
                                }else{
                                    d1.style.animation = 'da1tal0 2s ease forwards';
                                    d2.style.animation = 'da2tal0 2s ease forwards';
                                }
                            }
                            sale1.style.animation = 'sale1l0 2s ease forwards';
                            sale2.style.animation = 'sale2l0 2s ease forwards';
                            c.style.animation = 'colorl0 2s ease forwards';
                        }
                        
                        
                        
                    } else {
                        w.style.animation = 'fade 2s ease forwards';
                        
                    }
                    
                }
                

                isclick = false;
                }
                else{
                    wrappers.forEach(w => {
                        const currentTransform2 = window.getComputedStyle(w).transform;
                        const currentOpacity2 = window.getComputedStyle(w).opacity;
                        w.style.removeProperty('animation');
                        w.style.transform = currentTransform2;
                        w.style.opacity = currentOpacity2;
                    });
                        
                    for (let i = 0; i < wrappers.length; i++) {
                        const w = wrappers[i];
                        const c = color[i];
                        
                        if ((i+1) > 4) {
                            w.style.animation = `album${i + 1}remake 2s 1,album${i + 1}animation1 ${i%4 + 11}s infinite 2s`;
                            if(w==this){
                                lightbulb.style.animation = 'lightanimation3 2s ease forwards';
                                if(i==4||i==5){
                                    date.style.animation = `datesmall4 2s ease forwards,date2 10s infinite 2s`;
                                }else if( i==6||i==7){
                                    date.style.animation = `datesmall5 2s ease forwards,date2 10s infinite 2s`;
                                }else{
                                    date.style.animation = `datesmall6 2s ease forwards,date2 10s infinite 2s`;
                                }
                                for(let g =0 ;g <10 ; g++ ){
                                    const d1 = da1ta[g];
                                    const d2 = da2ta[g];
                                    if(g==i){
                                        d1.style.animation = 'da1tar3 2s ease forwards';
                                        d2.style.animation = 'da2tar3 2s ease forwards';
                                    }else{
                                        d1.style.animation = 'da1tar2 2s ease forwards';
                                        d2.style.animation = 'da2tar2 2s ease forwards';
                                    }
                                }
                                sale1.style.animation = 'sale1r1 2s ease forwards';
                                sale2.style.animation = 'sale2r1 2s ease forwards';
                                c.style.animation = 'colorr1 2s ease forwards';
                            }
                        } else {
                            w.style.animation = `album${i + 1}remake 2s 1,album${i + 1}animation1 ${i%4 + 11}s infinite 2s`;
                            if(w==this){
                                lightbulb.style.animation = 'lightanimation4 2s ease forwards';
                                if(i==3){
                                    date.style.animation = `datesmall3 2s ease forwards,date2 10s infinite 2s`;
                                }else{
                                    date.style.animation = `datesmall${ i+1 } 2s ease forwards,date2 10s infinite 2s`;
                                }
                                for(let g =0 ;g <10 ;g++ ){
                                    const d1 = da1ta[g];
                                    const d2 = da2ta[g];
                                    if(g==i){
                                        d1.style.animation = 'da1tal3 2s ease forwards';
                                        d2.style.animation = 'da2tal3 2s ease forwards';
                                    }else{
                                        d1.style.animation = 'da1tal2 2s ease forwards';
                                        d2.style.animation = 'da2tal2 2s ease forwards';
                                    }
                                }
                                sale1.style.animation = 'sale1l1 2s ease forwards';
                                sale2.style.animation = 'sale2l1 2s ease forwards';
                                c.style.animation = 'colorl1 2s ease forwards';
                            }
                            
                            
                        }
                        lights.forEach((lig,index) => {   
                            lig.style.animation = `light${index + 1}animation0 2s 1,light${index + 1}animation1 10s infinite 2s`;
                            lig.style.animationPlayState = 'running';
                        });
                    }
                    isclick = ture;

                }
            
            
            
        });
            
        wrapper.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
    
        wrapper.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });

        
    });

});
