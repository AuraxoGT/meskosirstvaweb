const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('expander')

      bodypadding.classList.toggle('body-pd')
    })
  }
}
showMenu('nav-toggle', 'navbar', 'body-pd')

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for (i = 0; i < linkCollapse.length; i++) {
  linkCollapse[i].addEventListener('click', function () {
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const widget = document.getElementById('discord-widget');

  navToggle.addEventListener('click', () => {
    widget.classList.toggle('widget-hidden');
    widget.classList.toggle('widget-visible');
  });
});

function showPopup(profileName) {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const title = document.getElementById('popup-title');
  const info = document.getElementById('popup-info');
  const avatar = document.getElementById('popup-avatar');
  
  // Add profile-specific information and avatars here
  switch(profileName) {
    case 'Meška':
      title.innerText = 'Meška';
      info.innerText = 'Owner of the community';
      avatar.src = 'https://cdn.discordapp.com/avatars/814534627968417813/7966e1de1c3a04065aa9b433c7a598b2.webp?size=1024&width=460&height=460';
      break;
    case 'AuraxoGT':
      title.innerText = 'AuraxoGT';
      info.innerText = 'Co-Owner and Developer of the community ';
      avatar.src = 'https://cdn.discordapp.com/avatars/959449311366766622/a_fab1d9756cd37bedd5ea81b4f2a893d4.gif?size=1024&width=460&height=460';
      break;
    case 'Retro_Drive':
      title.innerText = 'Retro_Drive';
      info.innerText = 'Head Admin responsible for other admins';
      avatar.src = 'https://cdn.discordapp.com/avatars/655728571016544277/a_031958c325e1a7b792ae41e62dab20a6.gif?size=1024&width=460&height=460';
      break;
    case 'Spixrit':
      title.innerText = 'Spixrit';
      info.innerText = 'Admin and helper in the community development';
      avatar.src = 'https://cdn.discordapp.com/avatars/640523849250766868/a_7715a77635bd630dc02190dbdd3c77a4.gif?size=1024&width=460&height=460';
      break;
    case 'Civilis':
      title.innerText = 'Civilis';
      info.innerText = 'Head moderator and caretaker of the community';
      avatar.src = 'https://cdn.discordapp.com/avatars/495602170507296778/4991a3194c2fdfc6939deb08acf0936f.webp?size=1024&width=460&height=460';
      break;
    case 'Smaqknick':
      title.innerText = 'Smaqknick';
      info.innerText = 'Head moderator and caretaker of the community';
      avatar.src = 'https://cdn.discordapp.com/avatars/305216084330545152/f497834f9d4507b3f036dae8740e3aca.webp?size=1024&width=460&height=460';
      break;
    case 'Ghosty':
      title.innerText = 'Ghosty';
      info.innerText = 'Moderator and best friend of Meška';
      avatar.src = 'https://cdn.discordapp.com/avatars/724278530581463120/7fe5d7c19cfdb69e705d8a516328d202.webp?size=1024&width=460&height=460';
      break;
    // Add more cases for other profiles
    default:
      title.innerText = profileName;
      info.innerText = 'Information about this user.';
      avatar.src = ''; // Default or placeholder avatar
  }

  // Show the popup and overlay (which will blur the background)
  popup.style.display = 'block';
  overlay.style.display = 'block';

  document.body.style.overflow = 'hidden'; // Disable scrolling when popup is visible
}

function hidePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  
  // Hide the popup and overlay
  popup.style.display = 'none';
  overlay.style.display = 'none';

  document.body.style.overflow = 'auto'; // Re-enable scrolling when popup is hidden
}
