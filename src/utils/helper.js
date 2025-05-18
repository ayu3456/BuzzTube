

var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];



export function generateRandomName() {

   return nameList[Math.floor( Math.random() * nameList.length )];
   

};


const messages = [
    // Motivational
    "Believe in yourself!",
    "You got this 💪",
    "Dream big. Work hard. Stay focused.",
    "Progress, not perfection.",
    "Failure is not the opposite of success; its part of success.",
  
    // Funny
    "404: Motivation not found 😂",
    "Why dont scientists trust atoms? Because they make up everything!",
    "I'm not lazy, I'm on energy-saving mode.",
    "If life gives you lemons, make lemonade... then find someone whose life gave them vodka.",
    "Coding: where coffee and confusion meet.",
  
    // Productivity
    "Focus on one thing at a time.",
    "Break it down into smaller tasks.",
    "Done is better than perfect.",
    "Start now — dont wait for the perfect moment.",
    "Take a short break, then get back to it!",
  
    // Random/Wholesome
    "You matter 🫶",
    "The world is better with you in it.",
    "Today is a great day to be kind.",
    "Someone out there is grateful for you.",
    "You're stronger than you think 💥",
  
    // Tech/Coding
    "Push it to Git, ship it to prod 🚀",
    "Fix one bug, get two free.",
    "Stack Overflow is life.",
    "Just one more semicolon...",
    "Lets refactor this later (aka never)",
  
    // Error-like messages
    "System overload: too many tabs open!",
    "Unexpected token in JSON at position 0",
    "Reminder: Save your work!",
    "Youve been coding for 3 hours straight.",
    "Are you still debugging that one issue?"
  ];
  
export function getRandomMessage() {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  }
  
