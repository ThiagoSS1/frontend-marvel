import axios from 'axios';

const url = 'https://api-marvel-thiagoss.herokuapp.com/users';

axios.get(url).then(response => console.log(response)).catch(error => console.log(error))
    
    // populate(data) 

    //     document.querySelector('.table tbody').innerHTML = ''; // limpandos os dados

    //     data.forEach(item => { // carregando os dados novos
    //         const tr = `<tr>
    //                 <td>${item.id}</td>
    //                 <td>${item.name}</td>
    //                 <td><img width="100" src ="${item.thumbnail.path}.${item.thumbnail.extension}"{</td>
    //             </tr>`;

    //         document.querySelector('.table tbody').innerHTML += tr;
    //     });

    // setPagination(totalItems) 
    //     const pages = Math.ceil(totalItems / 100);

    //     document.querySelector('.pagination').innerHTML = '';

    //     for (let i = 1; i <= pages; i++) {
    //         const li = `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
    //         document.querySelector('.pagination').innerHTML += li;

    //         for (let link of document.getElementsByClassName('page-link')) {
    //             link.addEventListener('click', (event) => {
    //                 event.preventDefault();

    //                 const page = event.target.dataset.page;
    //                 this.offset = (parseInt(page) - 1) * 100;
    //                 this.getCharacters();
    //             });
    //         }
    //     }

