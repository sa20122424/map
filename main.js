let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]
let body = document.querySelector('body')
data.forEach(e => {
    if (e > 50) {
        let div = document.createElement('div')
        let p = document.createElement('p')
        div.append(p)
        p.textContent = e
        body.append(div)
        console.log(body);
           p.style.background = "red"
           p.style.textAlign = "center"
             p.style.color = "yellow"

    } else {
        let div1 = document.createElement('div')
        let p = document.createElement('p')
        div1.append(p)
         p.style.textAlign = "center"
         p.style.color = "yellow"
        p.textContent = e
        p.style.background = "green"
        body.append(div1)
        console.log(body);
        
    }
});
