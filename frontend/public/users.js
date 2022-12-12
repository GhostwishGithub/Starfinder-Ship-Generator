let variable = `
    <div class='container'>
    <br />
        <div class='input'>
            <br />
        <form id="login" onsubmit='LoginInput()'>
            <label for="name">user name:</label>
            <input type="text" id="username" name="name" value="Name" /><br />
            <input type="password" id="password" name="password" value="password" />
            <label for="password"></label>
            <button type="submit">Register</button>
            <button type="submit">Sign in</button>
        </form>
    </div>
    </div>
`
document.getElementById("root").insertAdjacentHTML("afterbegin", variable);

function LoginInput() {
    user.username = document.getElementById('username').value
    SaveToStorage();
}