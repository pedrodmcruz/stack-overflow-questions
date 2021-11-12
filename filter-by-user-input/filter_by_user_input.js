//
// URL:
//


const tags = document.querySelectorAll('.tags');

filter.addEventListener('keyup', () => {
    const value = filter.value;

    tags.forEach(tag => {
        // if (tag.textContent.includes(value))
        if (tag.textContent.indexOf(value) !== -1) { //faster
            tag.parentElement.hidden = false;
        } else {
            tag.parentElement.hidden = true;
        }
    })
})

// filter.addEventListener('keyup', ()=> {
//     const query = RegExp(filter.value, 'i');
//     const data = document.querySelectorAll(".tags");
//     data.forEach(p => {
//         const thumb = p.parentElement;
//         const array = p.innerHTML.replace(/ /g, '');
//         const tags = array.split('#');
//         tags.splice(0,1);
//         const results = tags.filter(tag => {
//             return query.exec(tag);
//         });
        
//         if (results == 0) {
//             thumb.hidden = true;
//         } else {
//             thumb.hidden = false;
//         }
//     });
// })





