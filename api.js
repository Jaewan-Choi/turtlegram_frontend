const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"

async function handleSignup(){  // async: 비동기 데이터 주고받기가 완료될때까지 기다린 후 다음 라인을 실행

    const signupData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById("floatingPassword").value
    }

    const response = await fetch(`${backend_base_url}/signup`,{
        method:'POST',
        body:JSON.stringify(signupData)
    })

    response_json = await response.json()

    if (response.status == 200){
        window.location.replace(`${frontend_base_url}/login.html`);
    }else{
        alert(response.status)
    }
}

async function handleLogin(){

    const loginData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById('floatingPassword').value
    }


    const response = await fetch(`${backend_base_url}/login`,{
        method:'POST',
        body:JSON.stringify(loginData)
    })

    response_json = await response.json()
    localStorage.setItem("token", response_json.token)

}


async function getName(){

    const response = await fetch(`${backend_base_url}/getuserinfo`,{
        headers:{
            'Authorization':localStorage.getItem("token")
        }
    })
    response_json = await response.json()

    const username = document.getElementById("username")
    username.innerText = response_json.email
}


async function postArticle(title, content){

    const articleData = {
        title : title,
        content : content,
    }

    const response = await fetch(`${backend_base_url}/article`,{
        method:'POST',
        headers:{
            'Authorization':localStorage.getItem("token")},
        body:JSON.stringify(articleData)

    })
    response_json = await response.json()

    if (response.status == 200){
        window.location.replace(`${frontend_base_url}/`)
    } else {
        alert(response.status)
    }
}


async function getArticles(){
    const response = await fetch(`${backend_base_url}/article`,{
        method:'GET',
    })
    response_json = await response.json()

    return response_json.articles
}
