const charImg = document.querySelectorAll('.container-img img');
const bgChar = document.querySelectorAll('.container-char');

charImg.forEach( item => {
    item.addEventListener('click' , ()=>{
        item.classList.forEach(p =>{
            if(p == 'ripat'){
                bgChar.forEach(m => {
                    m.classList.forEach(l=>{
                        if( l == 'container-ripat'){
                            m.classList.toggle('activee')
                            setTimeout(() => {
                                m.style.opacity= 1;
                            }, 300);
                        }
                    })
                })
            }else if ( p == 'salman'){
                bgChar.forEach(m => {
                    m.classList.forEach(l=>{
                        if( l == 'container-salman'){
                            m.classList.toggle('activee')
                            setTimeout(() => {
                                m.style.opacity= 1;
                            }, 300);
                        }
                    })
                })

            }else if ( p == 'abitama'){
                bgChar.forEach(m => {
                    m.classList.forEach(l=>{
                        if( l == 'container-abitama'){
                            m.classList.toggle('activee')
                            setTimeout(() => {
                                m.style.opacity= 1;
                            }, 300);
                        }
                    })
                })
            }else if ( p == 'aul'){
                bgChar.forEach(m => {
                    m.classList.forEach(l=>{
                        if( l == 'container-aul'){
                            m.classList.toggle('activee')
                            setTimeout(() => {
                                m.style.opacity= 1;
                            }, 300);
                        }
                    })
                })
            }else if ( p == 'nanda'){
                bgChar.forEach(m => {
                    m.classList.forEach(l=>{
                        if( l == 'container-nanda'){
                            m.classList.toggle('activee')
                            setTimeout(() => {
                                m.style.opacity= 1;
                            }, 300);
                        }
                    })
                })

            }
        })
    })
})


bgChar.forEach( m =>{
    m.addEventListener('click' , () =>{
        console.log(m)
        m.style.opacity= 0;
        setTimeout(() => {
        m.classList.toggle('activee')
            }, 600);
    })
})