export const buildCardTPL = data => {
    try {
        const output = data.reduce((previous, user) => {
            return `${previous}
            <figure class="card__user--image">
                <img src="${user.image}" alt="User image" class="user__image">
            </figure>
            <h1 class="card__user--name">${user.name}</h1>
            <p class="card__user--handle">${user.user}</p>
            <div class="card__user--action">
                <button class="btn__follow">${user.action}</button>
                <button class="btn__action">
                    <i class="fa-solid fa-arrow-up-from-line"></i>
                </button>
                <button class="btn__action">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>
            </div>
            <div class="card__user--links">
                <a href=${user.links.instagram} target="_blank" class="link__icon">
                    <i class="fa-brands fa-linkedin"></i>
                </a>        
                <a href="" class="link__icon">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="${user.links.linkedIn}" target="_blank" class="link__icon">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>`;
        }, '');
        return `<article class="card__user">${output}</article>`;
    } catch (e) {
        console.log('Hubo un fallo con el TPL');
    }
}
