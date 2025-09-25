import { Question, SongResult, PersonalityType } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    question: "You're planning a weekend getaway. What's the itinerary?",
    answers: [
      { text: "A detailed spreadsheet with reservations and scheduled activities.", scores: { J: 2, S: 1 }, icon: '📝' },
      { text: "A cozy cabin with books, a fireplace, and no obligations.", scores: { I: 2 }, icon: '📚' },
      { text: "A road trip with a loose destination, open to wherever the wind takes you.", scores: { P: 2, E: 1 }, icon: '🚗' },
      { text: "A group trip to a vibrant city, packed with social events and new experiences.", scores: { E: 2 }, icon: '🏙️' },
    ],
  },
  {
    question: "You hear a friend is going through a tough time. How do you respond?",
    answers: [
      { text: "Offer practical solutions and a step-by-step plan to help them solve the problem.", scores: { T: 2, J: 1 }, icon: '💡' },
      { text: "Send a heartfelt message, letting them know you're there to listen and offer emotional support.", scores: { F: 2, I: 1 }, icon: '💌' },
      { text: "Show up at their door with their favorite food and a willingness to just sit with them in silence.", scores: { F: 2, S: 1 }, icon: '🤗' },
      { text: "Try to distract them with a fun activity to lift their spirits.", scores: { E: 2, P: 1 }, icon: '🎈' },
    ],
  },
  {
    question: "When reflecting on the past, you tend to focus on...",
    answers: [
      { text: "The concrete details and cherished memories of what actually happened.", scores: { S: 2 }, icon: '🖼️' },
      { text: "The patterns, symbols, and hidden meanings behind your experiences.", scores: { N: 2 }, icon: '✨' },
      { text: "The lessons learned and how they can be logically applied to the future.", scores: { T: 2 }, icon: '🧠' },
      { text: "The feelings and emotions that the memories evoke, creating a sense of nostalgia.", scores: { F: 2 }, icon: '💖' },
    ],
  },
  {
    question: "A new, complex project is assigned at work. What's your initial approach?",
    answers: [
      { text: "Break it down into smaller, manageable tasks and create a clear timeline.", scores: { J: 2, S: 1 }, icon: '📋' },
      { text: "Brainstorm all the exciting possibilities and innovative angles first.", scores: { N: 2, P: 1 }, icon: '🎨' },
      { text: "Analyze the core problem from a logical standpoint to find the most efficient solution.", scores: { T: 2 }, icon: '🧐' },
      { text: "Consider how the project will impact the team and build consensus before starting.", scores: { F: 2, E: 1 }, icon: '🤝' },
    ],
  },
  {
    question: "You're at a party. Where can you be found?",
    answers: [
      { text: "In the center of a lively group, telling stories and making new friends.", scores: { E: 2 }, icon: '🎉' },
      { text: "Having a deep, one-on-one conversation in a quieter corner.", scores: { I: 2, N: 1 }, icon: '💬' },
      { text: "Observing people and taking in the atmosphere from the sidelines.", scores: { I: 2, S: 1 }, icon: '👀' },
      { text: "Floating between groups, joining in on various conversations and activities.", scores: { E: 1, P: 2 }, icon: '🦋' },
    ],
  },
  {
    question: "How do you make important life decisions?",
    answers: [
      { text: "With a pro-and-con list, weighing the logical outcomes of each choice.", scores: { T: 2 }, icon: '⚖️' },
      { text: "By following your gut instinct and what feels right in your heart.", scores: { F: 2 }, icon: '❤️' },
      { text: "Based on past experiences and tangible evidence of what works.", scores: { S: 2 }, icon: '🕰️' },
      { text: "By exploring future possibilities and choosing the path with the most potential for growth.", scores: { N: 2 }, icon: '🔭' },
    ],
  },
  {
    question: "Your ideal home environment is...",
    answers: [
      { text: "Organized, clean, and predictable. Everything has its place.", scores: { J: 2 }, icon: '🧼' },
      { text: "Cozy, eclectic, and full of personal mementos and creative energy.", scores: { P: 2, F: 1 }, icon: '🕯️' },
      { text: "A quiet sanctuary for reading, thinking, and recharging.", scores: { I: 2 }, icon: '🤫' },
      { text: "A welcoming space that's always ready for guests and spontaneous gatherings.", scores: { E: 2 }, icon: '🥂' },
    ],
  },
  {
    question: "When listening to a new song, what catches your attention first?",
    answers: [
      { text: "The intricate metaphors and the overall story the lyrics are telling.", scores: { N: 2 }, icon: '📖' },
      { text: "The raw emotion in the singer's voice and how the song makes you feel.", scores: { F: 2 }, icon: '🎤' },
      { text: "The specific instruments, the rhythm, and the overall sound production.", scores: { S: 2 }, icon: '🎸' },
      { text: "The clever wordplay and the logical structure of the song's composition.", scores: { T: 2 }, icon: '🎼' },
    ],
  },
  {
    question: "It's a rainy Saturday with no plans. What do you do?",
    answers: [
      { text: "Finally organize that closet you've been meaning to tackle.", scores: { J: 2, S: 1 }, icon: '🧹' },
      { text: "Get lost in a daydream, a new book, or a creative project.", scores: { I: 2, N: 1 }, icon: '🎨' },
      { text: "See it as an opportunity for a spontaneous movie marathon with friends.", scores: { P: 2, E: 1 }, icon: '🍿' },
      { text: "Call up a friend to chat for hours about life and feelings.", scores: { E: 1, F: 2 }, icon: '☕' },
    ],
  },
  {
    question: "What's your relationship with rules?",
    answers: [
      { text: "They provide structure and clarity, which is comforting and efficient.", scores: { J: 2 }, icon: '🏛️' },
      { text: "They're often just suggestions, and it's fun to find creative ways around them.", scores: { P: 2 }, icon: '🤸‍♀️' },
      { text: "I question them to understand the logic and principles behind them.", scores: { T: 2, N: 1 }, icon: '🤔' },
      { text: "I consider how they impact people and believe they should be flexible for fairness.", scores: { F: 2 }, icon: '⚖️' },
    ],
  },
  {
    question: "When you're learning something new, you prefer...",
    answers: [
      { text: "A hands-on, practical approach where you can learn by doing.", scores: { S: 2 }, icon: '🛠️' },
      { text: "To understand the underlying theory and abstract concepts first.", scores: { N: 2 }, icon: '🌌' },
      { text: "A quiet place to study and absorb information on your own.", scores: { I: 2 }, icon: '📖' },
      { text: "To learn in a group, discussing and bouncing ideas off others.", scores: { E: 2 }, icon: '🗣️' },
    ],
  },
  {
    question: "A friend gives you a cryptic compliment. You are most likely to...",
    answers: [
      { text: "Analyze their word choice and tone to uncover the hidden meaning.", scores: { N: 2, I: 1 }, icon: '🕵️‍♀️' },
      { text: "Take it at face value and feel good about it.", scores: { S: 2 }, icon: '😊' },
      { text: "Overthink it for days, wondering if it was secretly an insult.", scores: { F: 2, I: 1 }, icon: '😥' },
      { text: "Laugh and ask them directly, 'What's that supposed to mean?'", scores: { E: 2, T: 1 }, icon: '😂' },
    ],
  },
  {
    question: "You're facing a creative block. What's your move?",
    answers: [
        { text: "Step away and organize my space to clear my head.", scores: { S: 1, J: 2 }, icon: '✨' },
        { text: "Look for inspiration in abstract art, poetry, or music.", scores: { N: 2, I: 1 }, icon: '🎨' },
        { text: "Talk it out with a friend to get a new perspective.", scores: { E: 2, F: 1 }, icon: '💡' },
        { text: "Experiment with wild, unconventional ideas until something clicks.", scores: { P: 2, T: 1 }, icon: '🧪' },
    ]
  },
  {
    question: "Pick a movie genre for a solo night in.",
    answers: [
        { text: "A mind-bending psychological thriller that makes you question everything.", scores: { N: 2, T: 1 }, icon: '🤯' },
        { text: "A comforting, feel-good romance with a predictable happy ending.", scores: { F: 2, S: 1 }, icon: '🥰' },
        { text: "A historical documentary based on meticulously researched facts.", scores: { S: 2, J: 1 }, icon: '📜' },
        { text: "An energetic, action-packed adventure that's pure escapism.", scores: { E: 1, P: 2 }, icon: '💥' },
    ]
  },
  {
    question: "Your carefully planned day is suddenly derailed. You feel...",
    answers: [
        { text: "Stressed and immediately start re-planning to get back on track.", scores: { J: 2 }, icon: '😩' },
        { text: "A little excited by the spontaneity and the new possibilities.", scores: { P: 2 }, icon: '🤸‍♀️' },
        { text: "Concerned about how this affects others involved.", scores: { F: 2, E: 1 }, icon: '❤️' },
        { text: "Annoyed by the inefficiency but quickly adapt with a logical pivot.", scores: { T: 2, I: 1 }, icon: '🔄' },
    ]
  },
  {
    question: "If you had a superpower, it would be...",
    answers: [
        { text: "The ability to read minds to understand people's true feelings and intentions.", scores: { N: 2, F: 1 }, icon: '🔮' },
        { text: "Super strength and durability to protect and provide for others.", scores: { S: 2, J: 1 }, icon: '🛡️' },
        { text: "Teleportation, for the ultimate freedom and to explore the world.", scores: { P: 2, E: 1 }, icon: '🌍' },
        { text: "Telekinesis, to manipulate the world with precision and logic.", scores: { T: 2, I: 1 }, icon: '🪄' },
    ]
  },
  {
    question: "What do you value most in a friendship?",
    answers: [
        { text: "Deep intellectual connection and conversations that challenge your mind.", scores: { N: 2, T: 1 }, icon: '🧠' },
        { text: "Unwavering loyalty and consistent, reliable support.", scores: { S: 2, J: 1 }, icon: '💎' },
        { text: "Shared adventures, laughter, and spontaneous fun.", scores: { E: 2, P: 1 }, icon: '🎢' },
        { text: "Emotional vulnerability and a safe space to share your deepest feelings.", scores: { F: 2, I: 1 }, icon: '💬' },
    ]
  },
  {
    question: "How do you prefer to express your affection?",
    answers: [
        { text: "Through thoughtful, carefully chosen words, written or spoken.", scores: { I: 2, F: 1 }, icon: '💌' },
        { text: "By doing acts of service and helping them with practical tasks.", scores: { S: 2, T: 1 }, icon: '🛠️' },
        { text: "With grand gestures, surprise gifts, and public declarations.", scores: { E: 2 }, icon: '🎈' },
        { text: "Quality time, shared experiences, and physical touch.", scores: { P: 1, F: 2 }, icon: '🤗' },
    ]
  },
  {
    question: "When you receive constructive criticism, your first instinct is to...",
    answers: [
        { text: "Analyze it objectively for its validity and ways to improve.", scores: { T: 2 }, icon: '🧐' },
        { text: "Feel a bit hurt personally, but try to understand their perspective.", scores: { F: 2 }, icon: '😔' },
        { text: "Compare it against established standards and past performance.", scores: { S: 2, J: 1 }, icon: '🏆' },
        { text: "See it as one possible opinion among many, and not necessarily the truth.", scores: { N: 1, P: 2 }, icon: '🤷‍♀️' },
    ]
  },
  {
    question: "Your approach to a new hobby is to...",
    answers: [
        { text: "Dive in headfirst, learn by trial and error, and see where it goes.", scores: { P: 2, S: 1 }, icon: '🏊‍♀️' },
        { text: "Research everything, buy the right gear, and follow a structured guide.", scores: { J: 2, T: 1 }, icon: '📚' },
        { text: "Find a community or class to learn with others.", scores: { E: 2 }, icon: '👯' },
        { text: "Understand the 'why' behind it and how it connects to my other interests.", scores: { N: 2, I: 1 }, icon: '💡' },
    ]
  },
  {
    question: "The perfect date involves...",
    answers: [
        { text: "A stimulating debate at a coffee shop followed by a visit to a modern art museum.", scores: { N: 2, T: 1 }, icon: '☕' },
        { text: "A spontaneous trip to the beach, ending with a bonfire and stargazing.", scores: { P: 2, F: 1 }, icon: '🌊' },
        { text: "A fancy dinner at a restaurant you've both wanted to try, with reservations made weeks ago.", scores: { J: 2, S: 1 }, icon: '🍷' },
        { text: "Going to a lively concert or a party where you can dance and be carefree together.", scores: { E: 2 }, icon: '💃' },
    ]
  },
  {
    question: "After an hour at a crowded social event, you're most likely...",
    answers: [
        { text: "Energized and scanning the room for the next person to meet.", scores: { E: 2 }, icon: '🤩' },
        { text: "Feeling drained and looking for a quiet spot or an exit strategy.", scores: { I: 2 }, icon: '🚪' },
        { text: "Engaged in a deep conversation, having tuned out the surrounding noise.", scores: { I: 1, N: 1 }, icon: '🤫' },
        { text: "Happily people-watching and observing the social dynamics.", scores: { S: 1, I: 1 }, icon: '🍿' },
    ]
  },
  {
    question: "Your vision board is filled with...",
    answers: [
        { text: "Images of travel, abstract concepts, and symbols of personal growth.", scores: { N: 2, P: 1 }, icon: '✈️' },
        { text: "Concrete goals: a specific house, a job title, a savings amount.", scores: { S: 2, J: 1 }, icon: '💰' },
        { text: "Pictures of friends and family, and quotes about love and connection.", scores: { F: 2 }, icon: '👨‍👩‍👧‍👦' },
        { text: "Blueprints, flowcharts, and diagrams for a system you want to build.", scores: { T: 2 }, icon: '📈' },
    ]
  },
  {
    question: "After a long, draining week, your 'recharge' button is...",
    answers: [
        { text: "A night out with friends to blow off steam.", scores: { E: 2 }, icon: '🥂' },
        { text: "Complete solitude with a good book or movie.", scores: { I: 2 }, icon: '📖' },
        { text: "Tidying your space and getting your life in order for the week ahead.", scores: { J: 2, S: 1 }, icon: '✨' },
        { text: "Indulging in a familiar comfort, like re-watching a favorite TV show.", scores: { F: 1, S: 2 }, icon: '🧸' },
    ]
  },
  {
    question: "What kind of gift are you more likely to give?",
    answers: [
        { text: "Something sentimental and handmade that holds a special memory.", scores: { F: 2, I: 1 }, icon: '🎁' },
        { text: "Something incredibly practical and useful that you know they need.", scores: { S: 2, T: 1 }, icon: '🔧' },
        { text: "An experience you can share together, like concert tickets.", scores: { E: 2, P: 1 }, icon: '🎟️' },
        { text: "A book or a puzzle that will challenge their mind.", scores: { N: 2, T: 1 }, icon: '🧩' },
    ]
  },
  {
    question: "If you wrote a book, it would be a...",
    answers: [
        { text: "Sprawling fantasy epic with intricate world-building and lore.", scores: { N: 2 }, icon: '🐉' },
        { text: "Heartfelt memoir exploring your personal relationships and emotional journey.", scores: { F: 2 }, icon: '✍️' },
        { text: "A non-fiction guide to improving efficiency and productivity.", scores: { T: 2, J: 1 }, icon: '✅' },
        { text: "A realistic, character-driven story based on your own life experiences.", scores: { S: 2 }, icon: '🏙️' },
    ]
  },
  {
    question: "Your phone's home screen is...",
    answers: [
        { text: "Perfectly organized into folders, with a clean, minimalist wallpaper.", scores: { J: 2 }, icon: '📁' },
        { text: "A chaotic but beautiful mess of apps, with a vibrant, artistic wallpaper.", scores: { P: 2 }, icon: '🌀' },
        { text: "A photo of your loved ones.", scores: { F: 2, S: 1 }, icon: '🥰' },
        { text: "Just the essential, functional apps. The wallpaper is the default one.", scores: { T: 2, S: 1 }, icon: '⚙️' },
    ]
  },
  {
    question: "When a friend tells you a long, rambling story, you focus on...",
    answers: [
        { text: "The underlying theme and the point they're trying to make.", scores: { N: 2 }, icon: '🎯' },
        { text: "The emotional core of the story and how they must have felt.", scores: { F: 2 }, icon: '😭' },
        { text: "The specific, factual details and the sequence of events.", scores: { S: 2 }, icon: '🔎' },
        { text: "The logical consistency of the story and whether it all adds up.", scores: { T: 2 }, icon: '✅' },
    ]
  },
  {
    question: "You find a mysterious old key. You...",
    answers: [
        { text: "Assume it's a piece of a bigger puzzle and start searching for the lock and its story.", scores: { N: 2, P: 1 }, icon: '🗺️' },
        { text: "Try to determine its practical origin—what kind of lock, what era—before doing anything.", scores: { S: 2, T: 1 }, icon: '🧐' },
        { text: "Keep it as a beautiful, sentimental object and imagine the stories it could tell.", scores: { F: 2, I: 1 }, icon: '🗝️' },
        { text: "Formulate a systematic plan to search the area for the corresponding lock.", scores: { J: 2 }, icon: '🧭' },
    ]
  },
  {
    question: "What does 'love' feel like to you?",
    answers: [
        { text: "A quiet, steady sense of home and unconditional acceptance.", scores: { I: 2, F: 1 }, icon: '🏡' },
        { text: "A thrilling, all-consuming adventure with a partner-in-crime.", scores: { E: 2, P: 1 }, icon: '💥' },
        { text: "A logical partnership built on mutual respect, trust, and shared goals.", scores: { T: 2, J: 1 }, icon: '🤝' },
        { text: "A tangible commitment shown through daily acts of service and loyalty.", scores: { S: 2, F: 1 }, icon: '💎' },
    ]
  }
];


export const SONG_MAPPING: Record<PersonalityType, Omit<SongResult, 'aiDescription'>[]> = {
  // Analysts
  INTJ: [
    { song: "Mastermind", album: "Midnights", type: 'INTJ', imageUrl: "https://picsum.photos/seed/Midnights/500/500", description: "Strategic and imaginative, you see life as a chessboard, always several steps ahead." },
    { song: "The Archer", album: "Lover", type: 'INTJ', imageUrl: "https://picsum.photos/seed/Lover/500/500", description: "You are a thoughtful planner who analyzes your own vulnerabilities and strengths with piercing insight." },
    { song: "Dear Reader", album: "Midnights", type: 'INTJ', imageUrl: "https://picsum.photos/seed/Midnights3am/500/500", description: "You are a reflective guide, seeing the patterns in life and offering cautionary, strategic advice." },
  ],
  INTP: [
    { song: "The Lakes", album: "folklore", type: 'INTP', imageUrl: "https://picsum.photos/seed/folklore/500/500", description: "With a thirst for knowledge, you're an innovative thinker, lost in a world of ideas." },
    { song: "hoax", album: "folklore", type: 'INTP', imageUrl: "https://picsum.photos/seed/folklore2/500/500", description: "You deconstruct complex emotional systems, trying to find the logic even in disillusionment." },
    { song: "So Long, London", album: "The Tortured Poets Department", type: 'INTP', imageUrl: "https://picsum.photos/seed/TTPD/500/500", description: "You analyze the slow decay of a system, seeking understanding as you quietly depart." },
  ],
  ENTJ: [
    { song: "...Ready For It?", album: "reputation", type: 'ENTJ', imageUrl: "https://picsum.photos/seed/reputation/500/500", description: "A bold and strong-willed leader, you're always ready to take charge and make things happen." },
    { song: "I Did Something Bad", album: "reputation", type: 'ENTJ', imageUrl: "https://picsum.photos/seed/reputation2/500/500", description: "You are decisive and unapologetic, taking charge and owning your powerful actions." },
    { song: "Vigilante Shit", album: "Midnights", type: 'ENTJ', imageUrl: "https://picsum.photos/seed/Midnights2/500/500", description: "You are a commander of calculated revenge, dressing for success and executing your plans flawlessly." },
  ],
  ENTP: [
    { song: "Blank Space", album: "1989 (Taylor's Version)", type: 'ENTP', imageUrl: "https://picsum.photos/seed/1989/500/500", description: "Smart and curious, you can't resist an intellectual challenge and enjoy a little playful chaos." },
    { song: "I Can Do It With a Broken Heart", album: "The Tortured Poets Department", type: 'ENTP', imageUrl: "https://picsum.photos/seed/TTPD2/500/500", description: "You are a master of intellectualizing your pain, putting on a dazzling performance while debating your own misery." },
    { song: "Now That We Don't Talk", album: "1989 (Taylor's Version)", type: 'ENTP', imageUrl: "https://picsum.photos/seed/1989FromtheVault/500/500", description: "You wittily and incisively debate the pros and cons of a new reality, finding freedom in what's unsaid." },
  ],
  
  // Diplomats
  INFJ: [
    { song: "cardigan", album: "folklore", type: 'INFJ', imageUrl: "https://picsum.photos/seed/folklore3/500/500", description: "Quiet and mystical, you are an inspiring and tireless idealist with a deep soul." },
    { song: "my tears ricochet", album: "folklore", type: 'INFJ', imageUrl: "https://picsum.photos/seed/folklore4/500/500", description: "You possess a profound understanding of emotional cause and effect, even in betrayal." },
    { song: "this is me trying", album: "folklore", type: 'INFJ', imageUrl: "https://picsum.photos/seed/folklore5/500/500", description: "You are deeply introspective, acknowledging your complex inner world and the effort it takes to connect." },
  ],
  INFP: [
    { song: "invisible string", album: "folklore", type: 'INFP', imageUrl: "https://picsum.photos/seed/folklore6/500/500", description: "Poetic and kind, you see the good in everything and everyone, always guided by your principles." },
    { song: "seven", album: "folklore", type: 'INFP', imageUrl: "https://picsum.photos/seed/folklore7/500/500", description: "You live in a world of heartfelt nostalgia and fierce loyalty, creating beautiful worlds in your mind." },
    { song: "Sweet Nothing", album: "Midnights", type: 'INFP', imageUrl: "https://picsum.photos/seed/Midnights3/500/500", description: "You find profound meaning in the quiet, simple moments of love, cherishing the sanctuary of genuine connection." },
  ],
  ENFJ: [
    { song: "Long Live", album: "Speak Now (Taylor's Version)", type: 'ENFJ', imageUrl: "https://picsum.photos/seed/SpeakNow/500/500", description: "Charismatic and inspiring, you're a natural leader, uplifting those around you." },
    { song: "You're On Your Own, Kid", album: "Midnights", type: 'ENFJ', imageUrl: "https://picsum.photos/seed/Midnights4/500/500", description: "You are a protagonist on a journey of self-discovery, inspiring others by facing challenges and creating your own light." },
    { song: "New Romantics", album: "1989 (Taylor's Version)", type: 'ENFJ', imageUrl: "https://picsum.photos/seed/1989-2/500/500", description: "You are a charismatic leader of a vibrant community, finding joy and meaning in shared experiences." },
  ],
  ENFP: [
    { song: "Paper Rings", album: "Lover", type: 'ENFP', imageUrl: "https://picsum.photos/seed/Lover2/500/500", description: "Enthusiastic and creative, you're a free spirit who can always find a reason to smile." },
    { song: "22", album: "Red (Taylor's Version)", type: 'ENFP', imageUrl: "https://picsum.photos/seed/Red/500/500", description: "You live in the moment with infectious energy, creating a world that feels happy, free, confused, and lonely in the best way." },
    { song: "Holy Ground", album: "Red (Taylor's Version)", type: 'ENFP', imageUrl: "https://picsum.photos/seed/Red2/500/500", description: "You find sacredness and excitement in your connections, seeing the potential for magic in every new beginning." },
  ],

  // Sentinels
  ISTJ: [
    { song: "Clean", album: "1989 (Taylor's Version)", type: 'ISTJ', imageUrl: "https://picsum.photos/seed/1989-3/500/500", description: "Practical and fact-minded, your reliability and dedication are your superpowers." },
    { song: "tolerate it", album: "evermore", type: 'ISTJ', imageUrl: "https://picsum.photos/seed/evermore/500/500", description: "You are dutiful and observant, meticulously noting the details of a relationship that no longer serves you." },
    { song: "The 1", album: "folklore", type: 'ISTJ', imageUrl: "https://picsum.photos/seed/folklore8/500/500", description: "You reflect on the past with a sense of practical nostalgia, acknowledging what was and what could have been." },
  ],
  ISFJ: [
    { song: "Lover", album: "Lover", type: 'ISFJ', imageUrl: "https://picsum.photos/seed/Lover3/500/500", description: "A dedicated and warm protector, you cherish the traditions and intimate details of a loving partnership." },
    { song: "New Year's Day", album: "reputation", type: 'ISFJ', imageUrl: "https://picsum.photos/seed/reputation3/500/500", description: "You find beauty in the quiet aftermath, valuing the steadfast commitment of cleaning up bottles with the one you love." },
    { song: "It's Nice To Have A Friend", album: "Lover", type: 'ISFJ', imageUrl: "https://picsum.photos/seed/Lover4/500/500", description: "Your nature is gentle and dependable, finding comfort and security in a simple, steady friendship." },
  ],
  ESTJ: [
    { song: "The Man", album: "Lover", type: 'ESTJ', imageUrl: "https://picsum.photos/seed/Lover5/500/500", description: "An excellent administrator, you're a master of managing things and people, and you know you'd be celebrated for it if things were different." },
    { song: "Look What You Made Me Do", album: "reputation", type: 'ESTJ', imageUrl: "https://picsum.photos/seed/reputation4/500/500", description: "You are an executive of your own transformation, systematically taking control of the narrative." },
    { song: "Bejeweled", album: "Midnights", type: 'ESTJ', imageUrl: "https://picsum.photos/seed/Midnights5/500/500", description: "You know your worth and command a room, making sure your value is recognized when you decide to shine." },
  ],
  ESFJ: [
    { song: "You Belong With Me", album: "Fearless (Taylor's Version)", type: 'ESFJ', imageUrl: "https://picsum.photos/seed/Fearless/500/500", description: "Extraordinarily caring and observant of social dynamics, you understand people and want to connect with them deeply." },
    { song: "Stay Stay Stay", album: "Red (Taylor's Version)", type: 'ESFJ', imageUrl: "https://picsum.photos/seed/Red3/500/500", description: "You are expressive and committed, finding joy in building a happy, harmonious life with someone." },
    { song: "I Bet You Think About Me", album: "Red (Taylor's Version)", type: 'ESFJ', imageUrl: "https://picsum.photos/seed/RedFromTheVault/500/500", description: "You are attuned to the community and social standing, making your presence unforgettably felt." },
  ],

  // Explorers
  ISTP: [
    { song: "I Know Places", album: "1989 (Taylor's Version)", type: 'ISTP', imageUrl: "https://picsum.photos/seed/1989-4/500/500", description: "Bold and practical, you're a master of your environment, always finding a clever escape route." },
    { song: "getaway car", album: "reputation", type: 'ISTP', imageUrl: "https://picsum.photos/seed/reputation5/500/500", description: "You are a master of tactical decisions, making a swift, logical exit when a situation is no longer viable." },
    { song: "So It Goes...", album: "reputation", type: 'ISTP', imageUrl: "https://picsum.photos/seed/reputation6/500/500", description: "You are cool and self-contained, navigating complex situations with a detached, observant flair." },
  ],
  ISFP: [
    { song: "august", album: "folklore", type: 'ISFP', imageUrl: "https://picsum.photos/seed/folklore9/500/500", description: "Flexible and charming, you're a true artist, living in the beauty and melancholy of the moment." },
    { song: "mirrorball", album: "folklore", type: 'ISFP', imageUrl: "https://picsum.photos/seed/folklore10/500/500", description: "You are a sensitive performer, reflecting pieces of yourself to connect with everyone around you." },
    { song: "Delicate", album: "reputation", type: 'ISFP', imageUrl: "https://picsum.photos/seed/reputation7/500/500", description: "You navigate new connections with a cautious and heartfelt vulnerability, attuned to the delicate feelings involved." },
  ],
  ESTP: [
    { song: "Cruel Summer", album: "Lover", type: 'ESTP', imageUrl: "https://picsum.photos/seed/Lover6/500/500", description: "You thrive on high-stakes energy and drama, living life with a passionate, bold intensity." },
    { song: "Style", album: "1989 (Taylor's Version)", type: 'ESTP', imageUrl: "https://picsum.photos/seed/1989-5/500/500", description: "You are effortlessly cool and action-oriented, always coming back with a timeless, captivating energy." },
    { song: "Don't Blame Me", album: "reputation", type: 'ESTP', imageUrl: "https://picsum.photos/seed/reputation8/500/500", description: "You are a thrill-seeker in love, diving headfirst into an intoxicating, all-consuming experience." },
  ],
  ESFP: [
    { song: "Shake It Off", album: "1989 (Taylor's Version)", type: 'ESFP', imageUrl: "https://picsum.photos/seed/1989-6/500/500", description: "Spontaneous and enthusiastic, you're an entertainer who makes life a party, unbothered by the critics." },
    { song: "Karma", album: "Midnights", type: 'ESFP', imageUrl: "https://picsum.photos/seed/Midnights6/500/500", description: "You are a charismatic force of nature, enjoying life and trusting that the universe will reward your good vibes." },
    { song: "We Are Never Ever Getting Back Together", album: "Red (Taylor's Version)", type: 'ESFP', imageUrl: "https://picsum.photos/seed/Red4/500/500", description: "You are an energetic and decisive performer, turning a breakup into a fun, definitive anthem." },
  ],
};