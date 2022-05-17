async function handleSignin(){  // async: 비동기 데이터 주고받기가 완료될때까지 기다린 후 다음 라인을 실행

    const signupData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById("floatingPassword").value
    }

    const response = await fetch('http://127.0.0.1:5000/signup',{  // awiat: fetch가 되돌아오길 기다림
        method:'POST',
        body:JSON.stringify(signupData)
    })
    console.log(response)
}