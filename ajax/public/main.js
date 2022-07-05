getCSS .onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET','/style.css');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const response = request.response;
        const style = document.createElement('style');
        style.innerText = response;
        document.head.appendChild(style);
      } else {
        console.error('something wrong');
      }
    }
  }
  /* request.onload = () => {
    const response = request.response;
    const style = document.createElement('style');
    style.innerText = response;
    document.head.appendChild(style);
  }
  request.onerror =() =>{
    console.error('something wrong');
  } */
  request.send();
}

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/2.js');
  request.onload = () =>{
    const js = document.createElement('script');
    js.innerText = request.response;
    document.body.appendChild(js);
  }
  request.onerror = () => {
    console.error('something error');
  }
  request.send();
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/3.html');
  request.onload = () =>{
    const html = document.createElement('div');
    html.innerHTML = request.response;
    document.body.appendChild(html);
  }
  request.onerror = () => {
    console.error('something error');
  }
  request.send();
}

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
    if(request.readyState === 4){
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const content = dom.getElementsByTagName('warning')[0].textContent;
        console.log(content.trim());
      } else {
        console.error('something error');
      }
    }
  }
  request.send();
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/5.json');
  request.onreadystatechange = () => {
    if(request.readyState === 4 && (request.status >=200 && request.status < 300)){
      const response = request.response;
      console.log(response);
      console.log(JSON.parse(response));
    }
  }
  request.send();
}
let page = 1;
getNextPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET',`/page${page+1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >=200 && request.status < 300) {
      const jsonArr = JSON.parse(request.response);
      for (const item of jsonArr) {
        const li = document.createElement('li');
        li.textContent = item.id;
        jsonList.querySelector('ul').appendChild(li);
      }
      page++;
    }
  }
  request.send(); 
}