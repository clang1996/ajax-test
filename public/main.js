getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/style.css');
    request.onreadystatechange = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.send();
};
getJS.onclick = () => {
        const request = new XMLHttpRequest()
        request.open('get', '/2.js');
        request.onreadystatechange = () => {
            const script = document.createElement('script')
            if (request.readyState === 4 && request.status === 200) {
                script.innerHTML = request.response
                document.body.appendChild(script)
            }
        }
        request.send();
    }
    //ajax可以轻量级地请求一部分网页内容
    //onerror发明早于ajax，不会去监听ajax
getHTML.onclick = () => {
    const request = new XMLHttpRequest(); //readyState = 1
    request.open('get', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send(); //readyState = 2
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            console.log(request.response)
            const text = dom.getElementsByTagName('warning')[0].textContent //getElementsByTagName得到数组
            console.log(text.trim())
        }
    }
    request.send();
};

getJSON.onclick = () => {
    console.log('hi')
    const request = new XMLHttpRequest(); //readyState = 1
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response) //并不全是object
            name.textContent = object.name
        }
    }
    request.send();
};
let n = 1;
getPAGE.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            })
            n += 1;
        }
    };
    request.send();
}