//  buscar variaveis no DOM 
const cardSel = document.querySelectorAll('.card');

const dataRole = document.querySelectorAll('.btn-role');

const level = document.querySelectorAll('.btn-level');

const dataLanguages = document.querySelectorAll('.btn-languages');

const btnTools = document.querySelectorAll('.btn-tools');

const frontend = document.querySelectorAll('.frontend');

const senior = document.querySelectorAll('.senior');

const junior = document.querySelectorAll('.junior');

const midweight = document.querySelectorAll('.midweight');

const fullstack = document.querySelectorAll('.fullstack');

const backend = document.querySelectorAll('.backend');

const javaScript = document.querySelectorAll('.javascript');

const css = document.querySelectorAll('.CSS');

const html = document.querySelectorAll('.HTML');

const python = document.querySelectorAll('.python');

const ruby = document.querySelectorAll('.ruby');

const sass = document.querySelectorAll('.sass');

const react = document.querySelectorAll('.react');

const vue = document.querySelectorAll('.vue');

const django = document.querySelectorAll('.django');

const ror = document.querySelectorAll('.RoR');



//  loop em cada uma das funcoes frontend backend fullstack
dataRole.forEach(item => {
    
    item.addEventListener('click', () => {
        let role = item.getAttribute("data-role");
       
        cardSel.forEach(card => {
            card.style.display = 'none';
        });
        
        if(role === 'frontend'){
            frontend.forEach(show => {
                show.style.display = 'flex';
            }); 
            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${role}<button class="cancel-btn" data-${role}="${role}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${role}<button class="cancel-btn" data-${role}="${role}"></button>`;
                document.querySelector('.filters').append(div);
            }

        }else if (role === 'fullstack') {

            console.log('click');
            fullstack.forEach(stack => {
                stack.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${role}<button class="cancel-btn" data-${role}="${role}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${role}<button class="cancel-btn" data-${role}="${role}"></button>`;
                document.querySelector('.filters').append(div);
            }

        } else if (role === 'backend') {
            console.log('yay');
            backend.forEach(back => {
                back.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${role}<button class="cancel-btn" data-${role}="${role}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${role}<button class="cancel-btn" data-${role}="${role}"></button>`;
                document.querySelector('.filters').append(div);
            }

        }else {
            cardSel.forEach(card => {
                card.style.display = 'flex';
            });
        } 
    });
});


// uso de for each para iterar em todos os niveis 
level.forEach(buttons => {
    buttons.addEventListener('click', () => {
        let lev = buttons.getAttribute("data-level");
        
        cardSel.forEach(card => {
            card.style.display = 'none';
        });
        if(lev === 'senior'){
            senior.forEach(se => {
                se.style.display = 'flex';
            }); 

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${lev}<button class="cancel-btn" data-${lev}="${lev}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${lev}<button class="cancel-btn" data-${lev}="${lev}"></button>`;
                document.querySelector('.filters').append(div);
            }

        }else if (lev === 'junior') {
            console.log('click');
            junior.forEach(ju => {
                ju.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${lev}<button class="cancel-btn" data-${lev}="${lev}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${lev}<button class="cancel-btn" data-${lev}="${lev}"></button>`;
                document.querySelector('.filters').append(div);
            }

        } else if (lev === 'midweight') {
            console.log('yay');
            midweight.forEach(mid => {
                mid.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${lev}<button class="cancel-btn" data-${lev}="${lev}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${lev}<button class="cancel-btn" data-${lev}="${lev}"></button>`;
                document.querySelector('.filters').append(div);
            }
        }else {
            cardSel.forEach(card => {
                card.style.display = 'flex'; 
            });
        }
    });
});

// loop nas linguagens de programacao
dataLanguages.forEach(button => {
    button.addEventListener('click', () => {
        let languages = button.getAttribute("data-languages");
    
        cardSel.forEach(card => {
            card.style.display = 'none';
        });
        if(languages === 'javascript'){
            javaScript.forEach(l => {
                l.style.display = 'flex';
            }); 

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${languages}<button class="cancel-btn" data-${languages}="${languages}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${languages}<button class="cancel-btn" data-${languages}="${languages}"></button>`;
                document.querySelector('.filters').append(div);
            }

            console.log('clicke');

        }else if (languages === 'CSS') {
            console.log('click');
            css.forEach(la => {
                la.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${languages}<button class="cancel-btn" data-${languages}="${languages}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${languages}<button class="cancel-btn" data-${languages}="${languages}"></button>`;
                document.querySelector('.filters').append(div);
            }

        } else if (languages === 'HTML') {
            console.log('yay');
            html.forEach(lan => {
                lan.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${languages}<button class="cancel-btn" data-${languages}="${languages}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${languages}<button class="cancel-btn" data-${languages}="${languages}"></button>`;
                document.querySelector('.filters').append(div);
            }
        }else if (languages === 'python') {
            python.forEach(py => {
                py.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${languages}<button class="cancel-btn" data-${languages}="${languages}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${languages}<button class="cancel-btn" data-${languages}="${languages}"></button>`;
                document.querySelector('.filters').append(div);
            }

        } else if (languages === 'ruby') {
            ruby.forEach(ruby => {
                ruby.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${languages}<button class="cancel-btn" data-${languages}="${languages}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${languages}<button class="cancel-btn" data-${languages}="${languages}"></button>`;
                document.querySelector('.filters').append(div);
            }
        } else {
            cardSel.forEach(card => {
                card.style.display = 'flex'; 
            });
        }
    });
});

// iteracao nos frameworks sass react ror 
btnTools.forEach(tools => {
    tools.addEventListener('click', () => {
        let dataTools = tools.getAttribute("data-tools");

        cardSel.forEach(card => {
            card.style.display = 'none';
        });
        if ( dataTools === 'sass') {
            sass.forEach(sass => {
                sass.style.display = 'flex';
            });
            
            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button>`;
                document.querySelector('.filters').append(div);
            }

        }else if (dataTools === 'react') {
            react.forEach(react => {
                react.style.display = 'flex';
            });
            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button>`;
                document.querySelector('.filters').append(div);
            }
        } else if (dataTools === 'vue') {
            vue.forEach(vue => {
                vue.style.display = 'flex';
            });
            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button>`;
                document.querySelector('.filters').append(div);
            }
        } else if (dataTools === 'django') {
            django.forEach( django => {
                django.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button>`;
                document.querySelector('.filters').append(div);
            }

        } else if (dataTools === 'RoR'){
            ror.forEach( ror => {
                ror.style.display = 'flex';
            });

            if(!document.querySelector('.inputFilter')) {
                let div = document.createElement('div');
                div.classList.add("inputFilter", "input");
                div.innerHTML = `<div class="filters">
                <div class="filter">${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button></div></div>
                <div class="clear-cont">
                    <button class="clear-btn">Clear</button>
                </div>`;
                div.addEventListener('click', cancelFilter);
                inputFilter.prepend(div);
                console.log(div);
            } else {
                let div = document.createElement('div');
                div.classList.add('filter');
                div.innerHTML = `${dataTools}<button class="cancel-btn" data-${dataTools}="${dataTools}"></button>`;
                document.querySelector('.filters').append(div);
            }

        } else {
            cardSel.forEach(card => {
                card.style.display = 'flex';
            });
        }
        console.log(dataTools);
    });
});


function cancelFilter(event) {

    let targetBtn = event.target.closest('button');

    if (!targetBtn) {
        return;
    }

    let btnAtt, btnAttValue;

    if(targetBtn.classList.contains('cancel-btn')){
        console.log('target');

        for (let att in targetBtn.dataset) {
            btnAtt = att;
            btnAttValue = targetBtn.dataset[`${att}`];
        }

        targetBtn.parentElement.remove();
        if(document.querySelector('.filters').children.length == 0) {
            document.querySelector('.inputFilter').remove();

            cardSel.forEach(card => {
                card.style.display = 'flex';
            });
        }
    }else {
        document.querySelector('.inputFilter').remove();
        cardSel.forEach(card => {
            card.style.display = 'flex';
        });
    }
}


