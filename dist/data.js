// Source: supplied bilingual screens. New records marked fictional are demonstration content.
export const pair = (en,es) => ({en,es});
export const programs = [
 {id:'art',name:pair('Art Class','Clase de arte'),icon:'palette',color:'rose',source:'supplied',
  sessions:[{day:1,start:600,end:720},{day:5,start:600,end:720}],instructor:pair('Marilyn Rodriguez','Marilyn Rodriguez'),
  description:pair('Join us for a relaxing open studio session where you can explore painting, drawing, and other creative activities. All skill levels are welcome — whether you’re just starting or have years of experience, this is your space to create.','Únete a nosotros para una sesión relajante de estudio abierto donde podrás explorar la pintura, el dibujo y otras actividades creativas. Todos los niveles son bienvenidos — ya sea que estés comenzando o tengas años de experiencia, este es tu espacio para crear.')},
 {id:'yoga',name:pair('Chair Yoga','Yoga en silla'),icon:'yoga',color:'lavender',source:'supplied',
  sessions:[{day:2,start:630,end:690}],instructor:pair('Yoga 4 Philly (presented by WellCare)','Yoga 4 Philly (presentado por WellCare)'),
  description:pair('Gentle movement designed to build strength, improve balance, and bring peace of mind. Perfect for all skill levels — enjoy the benefits of yoga with the comfort and support of a chair.','Movimiento suave diseñado para aumentar la fuerza, mejorar el equilibrio y brindar paz mental. Perfecto para todos los niveles — disfruta de los beneficios del yoga con la comodidad y el apoyo de una silla.')},
 {id:'computer',name:pair('Beginner Computer Classes','Clases de computación para principiantes'),icon:'computer',color:'sky',source:'supplied',
  sessions:[{day:4,start:600,end:660}],instructor:pair('Karen Rodriguez','Karen Rodriguez'),
  description:pair('Learn the basics of using a computer in a welcoming, hands-on environment. Whether you’re new to technology or want to build confidence using the internet, email, and everyday programs, this class helps you feel comfortable and connected.','Aprenda los conceptos básicos del uso de una computadora en un entorno acogedor y práctico. Ya sea que sea nuevo en la tecnología o desee ganar confianza usando el internet, correo electrónico y programas diarios, esta clase lo ayudará a sentirse cómodo y conectado.')},
 {id:'billiards',name:pair('Billiards','Billar'),icon:'billiards',color:'mint',source:'fictional',
  sessions:[{day:2,start:780,end:840},{day:4,start:780,end:840}],
  description:pair('Enjoy a friendly game of billiards with other center members. Practice your aim, take turns, and spend a relaxed afternoon together. Equipment is provided.','Disfrute de una partida amistosa de billar con otros miembros del centro. Practique su puntería, tome turnos y pase una tarde agradable en compañía. Se proporciona el equipo.')},
 {id:'fitness',name:pair('Enhance Fitness','Acondicionamiento físico'),icon:'fitness',color:'peach',source:'supplied',
  sessions:[{day:3,start:600,end:660},{day:5,start:570,end:630}],
  description:pair('Stay active and strong with a fun, evidence-based fitness program designed for older adults. Each session includes stretching, strength training, balance work, and light cardio — all at your own pace.','Manténgase activo y fuerte con un programa divertido y comprobado diseñado para adultos mayores. Cada sesión incluye estiramientos, entrenamiento de fuerza, equilibrio y ejercicios cardiovasculares suaves — todo a su propio ritmo.')},
 {id:'garden',name:pair('Garden Therapy','Terapia de jardín'),icon:'leaf',color:'mint',source:'supplied',
  sessions:[{day:1,start:600,end:780}],
  description:pair('Plant peace, grow joy! This therapeutic gardening session helps you connect with nature, learn simple planting techniques, and enjoy peaceful time outdoors with friends.','¡Siembre paz y cultive alegría! Esta sesión de jardinería terapéutica le ayuda a conectarse con la naturaleza, aprender técnicas sencillas de siembra y disfrutar de un tiempo tranquilo al aire libre con amigos.')},
 {id:'dance',name:pair('Line Dancing','Baile en línea'),icon:'music',color:'rose',source:'fictional',
  sessions:[{day:1,start:780,end:840}],
  description:pair('Move to familiar music and learn simple steps together. Enjoy a cheerful hour of line dancing, with time to practice and take breaks whenever you need.','Muévase al ritmo de música conocida y aprenda pasos sencillos en grupo. Disfrute de una alegre hora de baile en línea, con tiempo para practicar y descansar cuando lo necesite.')},
 {id:'memory',name:pair('Memory Game','Juego de memoria'),icon:'puzzle',color:'yellow',source:'fictional',
  sessions:[{day:3,start:660,end:720}],
  description:pair('Share an hour of matching games, word puzzles, and conversation. Work together, exercise your memory, and enjoy the company of friends in a relaxed setting.','Comparta una hora de juegos de parejas, juegos de palabras y conversación. Colabore, ejercite su memoria y disfrute de la compañía de amigos en un ambiente tranquilo.')},
 {id:'pickleball',name:pair('Pickleball','Pickleball'),icon:'racket',color:'sky',source:'supplied',
  sessions:[{day:1,start:660,end:720}],
  description:pair('Get moving and have fun with pickleball — an easy-to-learn game combining tennis, badminton, and ping-pong. Great for all experience levels! Bring your energy and enjoy friendly play each week.','¡Muévase y diviértase con el pickleball! Es un juego fácil de aprender que combina tenis, bádminton y ping-pong. ¡Ideal para todos los niveles! Traiga su energía y disfrute de un juego amistoso cada semana.')},
 {id:'prayer',name:pair('Prayer Group','Grupo de oración'),icon:'sun',color:'yellow',source:'fictional',
  sessions:[{day:2,start:600,end:630}],
  description:pair('Gather for a quiet time of prayer, reflection, and encouragement. Listen, share if you wish, and connect with others in a welcoming group.','Reúnase para un momento tranquilo de oración, reflexión y ánimo. Escuche, comparta si lo desea y conéctese con otras personas en un grupo acogedor.')},
 {id:'bingo',name:pair('Senior Bingo','Bingo para mayores'),icon:'bingo',color:'lavender',source:'fictional',
  sessions:[{day:3,start:780,end:840},{day:5,start:780,end:840}],
  description:pair('Join friends for a friendly afternoon of bingo. Cards and markers are provided, and each number is called clearly. Come for the game and stay for the company.','Acompañe a sus amigos en una tarde amistosa de bingo. Se proporcionan tarjetas y fichas, y cada número se anuncia con claridad. Venga a jugar y disfrute de la compañía.')},
 {id:'walking',name:pair('Walking Group','Grupo de caminata'),icon:'walk',color:'mint',source:'fictional',
  sessions:[{day:1,start:570,end:600},{day:3,start:570,end:600},{day:5,start:570,end:600}],
  description:pair('Enjoy a gentle group walk and a chance to chat. Meet at the center entrance, wear comfortable shoes, and walk at a pace that feels right for you.','Disfrute de una caminata suave en grupo y una oportunidad para conversar. Reúnase en la entrada del centro, use zapatos cómodos y camine a un ritmo que le resulte agradable.')}
];
export const days = pair(['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']);
export const trips = [
 [1,'Center will be closed','El centro estará cerrado','home'],
 [4,'Rivers Casino Trip','Viaje al casino Rivers','billiards'],
 [5,'Senior Flea Market','Mercado de segunda mano para mayores','palette'],
 [9,'Guest Presentation','Presentación de invitados','people'],
 [11,'Museum Trip','Viaje al museo','palette'],
 [17,'Philabundance','Cajas de Comidas','meal'],
 [18,'Art Therapy','Arte terapia','palette'],
 [19,'Linvilla Orchards (Apple Picking)','Recoger Manzanas (Linvilla Orchards)','leaf'],
 [22,'Line Dancing','Baile en línea','music'],
 [25,'Hispanic Fiesta','Fiesta Hispana','music'],
 [26,'Boscov’s Trip','Viaje a Boscov’s','bus']
].map(([day,en,es,icon])=>({day,name:pair(en,es),icon}));
export const albums = [
 ['heritage','Hispanic Heritage Month','Mes de la Herencia Hispana','music','rose'],
 ['ready','Eagles','Eagles','sun','yellow'],
 ['garden','Gardening Club','Club de jardinería','leaf','mint'],
 ['casino','Casino Trip 2025','Viaje al casino 2025','billiards','lavender'],
 ['zoo','Zoo Trip 2025','Viaje al zoológico 2025','leaf','peach'],
 ['apple','Apple Picking Trip','Excursión para recoger manzanas','leaf','rose'],
 ['pickleball','Pickleball Club','Club de pickleball','racket','sky'],
 ['cooking','Cooking Class','Clase de cocina','meal','yellow'],
 ['art','Senior Art Camp','Campamento de arte para mayores','palette','lavender'],
 ['tea','Mother’s Day Tea','Fiesta de té del Día de la Madre','cup','rose'],
 ['resources','Community Resource Fair','Feria de recursos comunitarios','people','mint'],
 ['ribbon','Ribbon Cutting & Celebration','Corte de cinta y celebración','music','sky']
].map(([id,en,es,icon,color],index)=>({id,name:pair(en,es),icon,color,updated:index%3}));
export const hotMeals = [pair('Roast chicken with rice','Pollo asado con arroz'),pair('Vegetable pasta','Pasta con verduras'),pair('Baked fish with potatoes','Pescado al horno con papas'),pair('Chicken Alfredo','Pasta Alfredo con pollo'),pair('Turkey with vegetables','Pavo con verduras')];
export const coldMeals = [pair('Tuna Sandwich','Sándwich de atún'),pair('Garden Salad','Ensalada de verduras'),pair('Chicken Salad','Ensalada de pollo'),pair('Turkey Sandwich','Sándwich de Pavo'),pair('Cheese Sandwich','Sándwich de queso')];
export function mealsFor(day){return {hot:hotMeals[(day-1)%5],cold:coldMeals[(day-1)%5],hotCount:35,coldCount:5};}
export function weekday(day){return new Date(2025,8,day,12).getDay();}
export function scheduleFor(day){
 if(day===1 || weekday(day)===0 || weekday(day)===6)return [];
 const entries=programs.flatMap(p=>p.sessions.filter(s=>s.day===weekday(day)).map(s=>({...s,id:p.id,name:p.name})));
 entries.push({start:540,end:570,name:pair('Morning Coffee','Café y Charla')},{start:720,end:780,name:pair('Lunch Service','Servicio de Almuerzo')});
 return entries.sort((a,b)=>a.start-b.start);
}
