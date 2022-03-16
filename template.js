console.log(cats);


let section=document.getElementById('allCats');



Promise.all([getTemplate('./create template.hbs'),getTemplate('./template.hbs')])
    .then(([templateResource,templateSrc])=>{

        Handlebars.registerPartial('cat',templateSrc);
        let createTemp=Handlebars.compile(templateResource);
        section.innerHTML=createTemp({cats});

        let allButtons=document.querySelectorAll("button");
        let buttons=Array.from(allButtons);

        buttons.forEach(button=>{
            button.addEventListener('click',function (event) {
                let details=event.target.parentElement.querySelector('div')
                details.style.display='block';
            })
        })

})

function getTemplate(getTemp) {
    return fetch(getTemp).then((r)=>r.text());
}