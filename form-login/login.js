// Step 1: Click Button - Chay vao ham login
// Step 2: Get user's information -
// Step 3: Kiem tra Email: 
        // + Sai: Thoat vong lap || Sai vong lap thi sao? (ktra kieu du lieu - validate)
        // + Dung: Kiem tra Password

const listUser = [
    {
        email: 'test@gmail.com',
        password: '123456',
    },
    {
        email: 'test1@gmail.com',
        password: '1234561',
    },
    {
        email: 'test2@gmail.com',
        password: '1234562',
    }
]

// Step2:
document.getElementById('login').onclick = function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let checkEmail = false;
    for (let user of listUser) {
        // console.log(user);
        if (user.email === email) {
            if (user.password === password) {
                alert("Login Successfully");
                // window.location = "" # Switch to a location webite
            } else {
                alert("invalid Email or Password");
            }
            checkEmail = true;
        }

    }
    if (checkEmail === false) {
        alert('Email sai');
    }
};