const but = document.getElementById('change');

async function func(name) {
    let data = {}

    // const response = await fetch(`https://codeforces-rating-predictor-two.vercel.app/get/${name}`,{mode: 'no-cors'});
    // data = await response.json();

    // console.log(data);
    data = {"prediction":1573.4168290030898,"user_data":{"avatar":"https://userpic.codeforces.org/3664768/avatar/5f67dde9290690e4.jpg","city":"Mumbai","contribution":44,"country":"India","firstName":"Om","friendOfCount":194,"handle":"DeadMan69","lastName":"Amar","lastOnlineTimeSeconds":1736675465,"maxRank":"candidate master","maxRating":1990,"organization":"Indian Institute of Information Technology, Nagpur","rank":"candidate master","rank_color":"#800080","rating":1969,"registrationTimeSeconds":1701795349,"titlePhoto":"https://userpic.codeforces.org/3664768/title/1d6b743dc7247966.jpg"}} 

    const user_data = data['user_data'];
    const prediction = data['prediction'];
    const error = ((Math.abs(user_data['rating'] - prediction) / user_data['rating']) * 100).toFixed(2);

    const container = document.querySelector('.centered-container');

    container.innerHTML = `
            <h1>Codeforces Rating Predictor</h1>
            <br>
            <div class="profile-details">
                <div class="profile-photo-container">
                    <img src="${user_data.avatar}" alt="Profile Image" class="profile-photo">
                </div>
                <div class="user-info">
                    ${user_data.rank_color === "#FF0000"
            ? `<h1 class="user-handle">
                        <span style="color: black; display: inline-block; margin: 0;">${user_data.handle[0]}</span>
                        <span style="color: red; display: inline-block; margin: 0;">${user_data.handle.slice(1)}</span>
                    </h1>`
            : `<h1 class="user-handle" style="color: ${user_data.rank_color}">${user_data.handle}</h1>`
        }
                </div>
            </div>
            <br>
            <div class="extra-buttons">
                <div class="button-wrapper">
                    <p>Expected Rating</p>
                    <button>${prediction.toFixed(2)}</button>
                </div>
                <div class="button-wrapper">
                    <p>Actual Rating</p>
                    <button>${user_data.rating}</button>
                </div>
                <div class="button-wrapper">
                    <p>Error</p>
                    <button>${error}%</button>
                </div>
            </div>
            <br><br><br>
        `;

    const footer = document.querySelector('.footer');
    footer.innerHTML = `
            <div class="social-links">
                <a href="https://github.com/OmAmar106/Codeforces-Rating-Predictor" target="_blank">
                    <i class="fab fa-github">&nbsp;&nbsp;</i>
                </a>
                <a href="https://www.linkedin.com/in/om-amar/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        `;
}

if (but) {
    but.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        func("DeadMan69");
    });
}