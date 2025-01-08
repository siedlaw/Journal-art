]
    },
    Grief: {
      scriptures: [
        "He heals the brokenhearted and binds up their wounds. - Psalm 147:3",
        "Blessed are those who mourn, for they shall be comforted. - Matthew 5:4",
        "The LORD is near to the brokenhearted and saves the crushed in spirit. - Psalm 34:18"
      ],
      artPrompts: [
        "Let your grief flow gently onto the page through soft colors and shapes. Remember that Jesus wept too, and your tears are held sacred by Him.",
        "Create a quiet garden or restful space where your grief can be held tenderly in God's presence."
      ],
      additionalPrompts: [
        "Let's pause with Psalm 147:3's promise of healing. Create a gentle space for your wounds, adding soft marks that represent God's careful bandaging of each one...",
        "Come, rest in Matthew 5:4's blessing. Draw flowing lines or shapes that express both mourning and comfort, remembering that Jesus holds space for both..."
      ]
    },
    Overwhelmed: {
      scriptures: [
        "Cast your burden on the LORD, and he will sustain you. - Psalm 55:22",
        "Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
        "When my spirit faints within me, you know my way! - Psalm 142:3"
      ],
      artPrompts: [
        "Create gentle borders on your page, making a safe space to express feeling overwhelmed. Within these borders, use colors and shapes that help release your burdens to God.",
        "Draw a simple vessel or container, then fill it with marks representing what overwhelms you. Around it, add gentle reminders of God's promise to sustain you."
      ],
      additionalPrompts: [
        "Let's rest in Matthew 11:28's invitation to come to Jesus. Create a quiet pathway that leads to rest, adding gentle marks showing how He helps carry your burdens...",
        "Take time with Psalm 55:22's promise of sustaining grace. Draw flowing lines that represent casting your cares on Him, surrounding them with reminders of His faithful support..."
      ]
    },
    Loneliness: {
      scriptures: [
        "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you. - Isaiah 41:10",
        "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. - Deuteronomy 31:8",
        "I am with you always, to the end of the age. - Matthew 28:20"
      ],
      artPrompts: [
        "Create a gentle circle in the center of your page. As you slowly fill it with color, remember God's promise to never leave you alone.",
        "Draw simple connecting lines or patterns that represent God's constant presence with you. Let each mark remind you of His faithful companionship."
      ],
      additionalPrompts: [
        "Come, explore Isaiah 41:10's promise of God's presence. Create spaces that represent strength, help, and divine companionship. Take time to fill each one with gentle reminders of His faithfulness...",
        "Let's rest in Deuteronomy 31:8's assurance. Draw a path with God going before you, adding marks that represent His accompanying presence in past, present, and future moments..."
      ]
    }
  };

  const MainPage = () => (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#ECE9E5' }}>
      <header 
        className="w-full p-8 text-white shadow-lg" 
        style={{ backgroundColor: '#7B5F75' }}
      >
        <h1 
          className="text-3xl font-bold text-center"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Faith Based Creative Journaling
        </h1>
      </header>
      
      <div className="p-8 pt-12 text-center max-w-5xl mx-auto">
        <div 
          className="rounded-lg p-6 shadow-sm text-white" 
          style={{ backgroundColor: '#3E688A' }}
        >
          <p className="text-xl leading-relaxed">
            This journaling tool by Dwell Ministries invites you to pause and connect with God. Choose an emotion and begin to draw inspiration from His Word as you reflect, create, and grow in faith.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 p-8 pt-16 pb-12 max-w-5xl mx-auto">
        {emotions.map((emotion) => (
          <button
            key={emotion}
            onClick={() => {
              setSelectedEmotion(emotion);
              setShowPrompts(true);
              setShowAdditionalPrompts(false);
            }}
            className="relative p-5 rounded-lg text-white font-medium text-lg transition-all duration-300 
                     transform hover:-translate-y-1 overflow-hidden group"
            style={{ 
              backgroundColor: '#7B5F75',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.5rem'
            }}
          >
            <div className="relative z-10">{emotion}</div>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: '#3E688A', transform: 'scale(1.1)' }}
            />
          </button>
        ))}
      </div>
    </div>
  );

  const PromptsPage = () => {
    const content = emotionContent[selectedEmotion || ''] || {
      scriptures: [],
      artPrompts: [],
      additionalPrompts: []
    };

    return (
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#ECE9E5' }}>
        <div 
          className="relative p-4 text-white shadow-md" 
          style={{ backgroundColor: '#7B5F75' }}
        >
          <button
            onClick={() => setShowPrompts(false)}
            className="absolute left-4 flex items-center p-2 rounded-lg transition-all duration-300 
                     hover:bg-opacity-80 hover:shadow-md"
            style={{ backgroundColor: '#3E688A' }}
          >
            <ChevronRight className="w-6 h-6 transform rotate-180" />
            <span className="ml-2 font-medium">Back</span>
          </button>
          <h2 
            className="text-3xl font-bold text-center py-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {selectedEmotion}
          </h2>
        </div>
        
        <div className="p-8 space-y-8 max-w-6xl mx-auto w-full">
          <div className="rounded-lg shadow-lg space-y-4 p-8 bg-white transform transition-transform duration-300 hover:scale-[1.01]"
               style={{ borderLeft: '4px solid #3E688A' }}>
            <h2 
              className="text-2xl font-semibold text-gray-800"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Scripture Verses
            </h2>
            <div className="space-y-3">
              {content.scriptures.map((scripture, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: '#ECE9E5' }}
                >
                  {scripture}
                </div>
              ))}
            </div>
          </div>

          {!showAdditionalPrompts ? (
            <div className="rounded-lg shadow-lg space-y-4 p-8 bg-white transform transition-transform duration-300 hover:scale-[1.01]"
                 style={{ borderLeft: '4px solid #3E688A' }}>
              <h2 
                className="text-2xl font-semibold text-gray-800"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Art Journaling Prompts
              </h2>
              <div className="space-y-3">
                {content.artPrompts.map((prompt, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-lg transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#ECE9E5' }}
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-lg shadow-lg space-y-4 p-8 bg-white transform transition-transform duration-300 hover:scale-[1.01]"
                 style={{ borderLeft: '4px solid #3E688A' }}>
              <h2 
                className="text-2xl font-semibold text-gray-800"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Additional Prompts
              </h2>
              <div className="space-y-3">
                {content.additionalPrompts.map((prompt, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-lg transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#ECE9E5' }}
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => setShowAdditionalPrompts(!showAdditionalPrompts)}
            className="relative w-full p-4 rounded-lg transition-all duration-300 text-white font-medium text-lg
                     overflow-hidden group"
            style={{ 
              backgroundColor: '#7B5F75',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span className="relative z-10">
              {showAdditionalPrompts ? 'Show Art Prompts' : 'Show Additional Prompts'}
            </span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ 
                backgroundColor: '#3E688A',
                transform: 'scale(1.1)'
              }}
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
      </style>
      <div className="min-h-screen" style={{ backgroundColor: '#ECE9E5' }}>
        {showPrompts ? <PromptsPage /> : <MainPage />}
      </div>
    </>
  );
};

export default JournalApp;'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface EmotionContent {
  scriptures: string[];
  artPrompts: string[];
  additionalPrompts: string[];
}

interface EmotionContentMap {
  [key: string]: EmotionContent;
}

const JournalApp = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [showPrompts, setShowPrompts] = useState<boolean>(false);
  const [showAdditionalPrompts, setShowAdditionalPrompts] = useState<boolean>(false);

  const emotions: string[] = [
    'Joy', 'Peace', 'Fear', 'Love', 'Gratitude',
    'Hope', 'Anger', 'Sadness', 'Trust', 'Doubt',
    'Courage', 'Despair', 'Grief', 'Overwhelmed', 'Loneliness'
  ];

  const emotionContent: EmotionContentMap = {
    Joy: {
      scriptures: [
        "The joy of the Lord is your strength. - Nehemiah 8:10",
        "Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory. - 1 Peter 1:8",
        "You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore. - Psalm 16:11"
      ],
      artPrompts: [
        "Gently fill your page with colors that remind you of joy. As you choose each color, pause to thank God for His gift of joy in your life, reflecting on Nehemiah's words that His joy is your strength.",
        "Create a simple landscape with a rising sun. As you draw, let each ray represent a way God's joy has illuminated your path, remembering that in His presence is fullness of joy."
      ],
      additionalPrompts: [
        "Let's enter into Nehemiah 8:10 together. Create a gentle flowing pattern from the center of your page outward, representing how God's joy becomes your strength. As you work, pause to add words or marks showing how this strength has carried you through different seasons...",
        "Take a moment to reflect on Psalm 16:11's promise of 'fullness of joy' in God's presence. Begin with a quiet space in the center of your page, and slowly add layers representing the path of life He's showing you. You might include gentle reminders of times you've experienced His joy..."
      ]
    },
    Peace: {
      scriptures: [
        "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid. - John 14:27",
        "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:7",
        "You keep him in perfect peace whose mind is stayed on you, because he trusts in you. - Isaiah 26:3"
      ],
      artPrompts: [
        "Begin with soft, peaceful strokes across your page. As you create, invite God's peace that 'surpasses understanding' to settle in your heart. Add gentle marks or words that express this divine peace.",
        "Draw a quiet space that represents resting in God's peace. While creating, meditate on Jesus's words 'My peace I give to you,' and let your marks flow from this place of rest."
      ],
      additionalPrompts: [
        "Rest here with Philippians 4:7's promise of peace that 'surpasses understanding.' Create gentle borders around your page, representing how God's peace guards your heart and mind. Within this space, express what it means to be guarded by divine peace...",
        "Come, let's explore John 14:27 together. Create two gentle spaces on your page - one representing the world's peace, another for Christ's peace. As you fill these spaces, reflect on Jesus's words 'not as the world gives.' How does His peace differ? Add words or symbols that capture this divine difference..."
      ]
    },
    Fear: {
      scriptures: [
        "For God has not given us a spirit of fear, but of power and of love and of a sound mind. - 2 Timothy 1:7",
        "When I am afraid, I put my trust in you. - Psalm 56:3",
        "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. - Psalm 23:4"
      ],
      artPrompts: [
        "Create a safe space on your page using shapes and colors that feel protective. As you draw, invite God's presence to surround your fears, remembering He has given you a spirit of power and love.",
        "Begin with darker colors representing your fears, then gently layer lighter colors over them. Let each light stroke remind you of God's promise to be with you, transforming fear into trust."
      ],
      additionalPrompts: [
        "Take a moment to rest in Psalm 56:3 where David says 'I trust in you.' Create a path of stones across your page, and with each one, pause to express a fear being placed in God's hands. Let His promises surround each step of trust you take...",
        "Let's explore how God replaces fear with His presence. Gently divide your page into three parts - fear, surrender, and trust. Take time in each space to show how His Spirit transforms anxiety into peace, letting scripture guide your journey..."
      ]
    },
    Love: {
      scriptures: [
        "We love because he first loved us. - 1 John 4:19",
        "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
        "Love bears all things, believes all things, hopes all things, endures all things. - 1 Corinthians 13:7"
      ],
      artPrompts: [
        "Let your page become a space to reflect on God's love. Begin in the center and create gentle outward flowing marks, each one representing how His love flows into different areas of your life.",
        "Draw simple connecting lines or shapes that show how God's love connects you to others. Add colors that remind you of His endless, unconditional love."
      ],
      additionalPrompts: [
        "Let's rest in 1 John 4:19's beautiful truth. Create a flowing pattern that shows how God's love came first, then gently add marks showing how His love enables you to love others...",
        "Come, explore 1 Corinthians 13:7 together. Create four gentle spaces for love that bears, believes, hopes, and endures. In each space, express how God's love demonstrates these qualities in your life..."
      ]
    },
    Gratitude: {
      scriptures: [
        "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you. - 1 Thessalonians 5:18",
        "Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! - Psalm 100:4",
        "Every good gift and every perfect gift is from above, coming down from the Father of lights. - James 1:17"
      ],
      artPrompts: [
        "Create a gentle collection of shapes, each one representing something you're thankful for. As you draw each one, pause to thank God for His faithful presence in every blessing.",
        "Let your page become a garden of gratitude. Draw simple flowers or shapes, each one expressing a different aspect of God's goodness in your life."
      ],
      additionalPrompts: [
        "Rest here in 1 Thessalonians 5:18's invitation to thankfulness. Create spaces that represent different circumstances in your life, adding gentle marks of gratitude in each one...",
        "Let's explore James 1:17 together. Create flowing lines downward, like light streaming from above. Along each beam, pause to add marks representing the good gifts God has given..."
      ]
    },
    Hope: {
      scriptures: [
        "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13",
        "But those who hope in the LORD will renew their strength. They will soar on wings like eagles. - Isaiah 40:31",
        "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11"
      ],
      artPrompts: [
        "Draw gentle rays of light breaking through clouds. As you create each ray, reflect on how God's hope illuminates your path even in shadowed times.",
        "Create a simple image of something growing or rising upward. Let each stroke represent how hope lifts your spirit toward God's promises."
      ],
      additionalPrompts: [
        "Let's rest in Romans 15:13's beautiful blessing. Create three interweaving paths - hope, joy, and peace. As you work, reflect on how the Holy Spirit weaves these gifts together...",
        "Come, explore Isaiah 40:31's promise of renewed strength. Draw a gentle ascending path, adding marks that represent waiting, hoping, and rising with eagle's wings..."
      ]
    },
    Anger: {
      scriptures: [
        "Be angry and do not sin; do not let the sun go down on your anger. - Ephesians 4:26",
        "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger. - James 1:19",
        "The Lord is merciful and gracious, slow to anger and abounding in steadfast love. - Psalm 103:8"
      ],
      artPrompts: [
        "Create a safe container for your anger using shapes and colors that feel strong. As you work, invite God's presence to help you hold this emotion with grace.",
        "Draw a simple pathway that moves from intense to gentle colors. Let each step represent how God helps you process anger with wisdom."
      ],
      additionalPrompts: [
        "Rest here in James 1:19's gentle rhythm: 'quick to listen, slow to speak, slow to anger.' Create three connected circles, each holding space for one of these invitations. As you work, let God's patient love guide your reflections...",
        "Let's enter the quiet space of Psalm 103:8, where we find God 'slow to anger and abounding in steadfast love.' Draw a vessel of your choosing, then fill it slowly with colors that represent how His mercy transforms your anger into something new..."
      ]
    },
    Sadness: {
      scriptures: [
        "The LORD is near to the brokenhearted and saves the crushed in spirit. - Psalm 34:18",
        "Blessed are those who mourn, for they shall be comforted. - Matthew 5:4",
        "You have kept count of my tossings; put my tears in your bottle. - Psalm 56:8"
      ],
      artPrompts: [
        "Let soft colors flow across your page like gentle tears. As you create, remember that God treasures every tear and holds your sadness with tender care.",
        "Draw a simple vessel that could hold your tears. Around it, add marks or colors that represent God's comforting presence in your sorrow."
      ],
      additionalPrompts: [
        "Come sit with Jesus, who understands every tear. Create a gentle garden inspired by His presence with Mary and Martha in their grief. Let each element you add represent how He meets you in your sadness, holding space for both sorrow and comfort...",
        "Let's pause in the shelter of Psalm 34:18. Draw a simple vessel for your tears, remembering that God treasures each one. Around it, add soft marks or words showing how His nearness brings healing to the brokenhearted..."
      ]
    },
    Trust: {
      scriptures: [
        "Trust in the LORD with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
        "Blessed is the man who trusts in the LORD, whose trust is the LORD. - Jeremiah 17:7",
        "He is like a tree planted by water, that sends out its roots by the stream. - Jeremiah 17:8"
      ],
      artPrompts: [
        "Create a simple tree with roots reaching toward water. Let each root represent an area where you're learning to trust God more deeply.",
        "Draw a gentle path or bridge across your page. As you create, reflect on how trusting God helps you move forward even when you can't see the whole journey."
      ],
      additionalPrompts: [
        "Let's explore Proverbs 3:5 together. Create two spaces - one for your understanding, one for God's wisdom. As you work in each space, reflect on the invitation to trust beyond what we can see...",
        "Take a moment to rest in Jeremiah 17:7-8's beautiful imagery. Draw a tree by water, adding layers that represent how trust helps you remain steady through all seasons..."
      ]
    },
    Doubt: {
      scriptures: [
        "Immediately the father of the child cried out and said, 'I believe; help my unbelief!' - Mark 9:24",
        "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach. - James 1:5",
        "Lord, I believe; help my unbelief! - Mark 9:24"
      ],
      artPrompts: [
        "Create a gentle space that holds both your questions and your faith. Use light and shadow to express how doubt and belief can exist together.",
        "Draw a simple doorway or window, representing openness to God's presence even in moments of uncertainty."
      ],
      additionalPrompts: [
        "Come, rest in Mark 9:24's honest prayer. Create a flowing pattern that expresses both belief and unbelief, remembering that God welcomes our most honest prayers...",
        "Let's explore James 1:5's invitation to ask for wisdom. Draw gentle paths that represent your questions, surrounding them with reminders of God's generous response..."
      ]
    },
    Courage: {
      scriptures: [
        "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go. - Joshua 1:9",
        "For God gave us a spirit not of fear but of power and love and self-control. - 2 Timothy 1:7",
        "I can do all things through him who strengthens me. - Philippians 4:13"
      ],
      artPrompts: [
        "Draw a simple shield or banner that represents God's presence with you. Add colors and shapes that remind you of His strength and protection.",
        "Create gentle marks that flow from small to larger movements, representing how courage grows as we trust in God's presence."
      ],
      additionalPrompts: [
        "Let's rest in Joshua 1:9's powerful promise. Create spaces that represent different places in your journey, adding gentle reminders of God's accompanying presence in each one...",
        "Take time to explore 2 Timothy 1:7's gifts of power, love, and self-control. Create three connected spaces, expressing how each gift builds your courage..."
      ]
    },
    Despair: {
      scriptures: [
        "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation. - Psalm 42:5",
        "The LORD is near to the brokenhearted and saves the crushed in spirit. - Psalm 34:18",
        "I wait for the LORD, my soul waits, and in his word I hope. - Psalm 130:5"
      ],
      artPrompts: [
        "Begin with darker colors that express your despair, then gradually add gentle points of light. Let each light represent God's presence in the darkness.",
        "Create a simple vessel that holds your heaviest feelings. Surround it with soft colors representing God's caring presence."
      ],
      additionalPrompts: [
        "Let's walk gently through Psalm 42:5's honest dialogue. Create a flowing conversation between despair and hope, adding reminders of God's faithfulness along the way...",
        "Come, rest in Psalm 34:18's promise of God's nearness. Create a space that expresses both brokenheartedness and divine comfort, letting each mark be a prayer..."
