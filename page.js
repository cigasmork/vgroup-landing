// Boots the shared motion module and the mobile menu. Replaces the DC component
// logic (componentDidMount + setMenu) from the design source.
import { init } from './apple-motion.js';

const root = document.querySelector('[data-om-root="1"]');
init(root);

const mob = root.querySelector('[data-mob="1"]');
const bars = root.querySelectorAll('[data-burger]');
let open = false;

const setMenu = (o) => {
  open = o;
  mob.style.display = o ? 'flex' : 'none';
  bars[0].style.transform = o ? 'translateY(3.5px) rotate(45deg)' : 'none';
  bars[1].style.transform = o ? 'translateY(-3px) rotate(-45deg)' : 'none';
};

window.toggleMenu = () => setMenu(!open);
window.closeMenu = () => setMenu(false);

mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
