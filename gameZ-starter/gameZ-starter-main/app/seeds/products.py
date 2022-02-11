from app.models import db, Product


# Adds a demo user, you can add other users here if you want
def seed_products():
    rpg_game_1 = Product(
        user_id=1, category_id=1,  name='Subnautica: Below Zero', image_url='https://hb.imgix.net/1f4704e13b27a961cbc190cbd81bae743696367f.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=5b97d5668efbba8245b2b302568da898', price=29.99, description='Below Zero is an underwater adventure game set on an alien ocean world. It is a new chapter in the Subnautica universe, and is currently in development by Unknown Worlds.')

    rpg_game_2 = Product(
        user_id=1, category_id=1,  name='Valheim', image_url='https://hb.imgix.net/f628cdf98b24e896de36a11a838040639dc276f5.jpg?auto=compress,format&fit=crop&h=353&w=616&s=16f4ada2b70f73282cbdb0b57b51c02f', price=19.99, description="""
        A battle-slain warrior, the Valkyries have ferried your soul to Valheim, the tenth Norse world. Besieged by creatures of chaos and ancient enemies of the gods, you are the newest custodian of the primordial purgatory, tasked with slaying Odin’s ancient rivals and bringing order to Valheim.

        Your trials begin at the disarmingly peaceful centre of Valheim, but the gods reward the brave and glory awaits. Venture forth through imposing forests and snow-capped mountains, explore and harvest more valuable materials to craft deadlier weapons, sturdier armor, viking strongholds and outposts. Build a mighty longship and sail the great oceans in search of exotic lands … but be wary of sailing too far...""")

    rpg_game_3 = Product(
        user_id=1, category_id=1,  name='Darkest Dungeon: Ancestral Edition', image_url='https://hb.imgix.net/21699ea2b3b2394e7d597ef17fc0c0970f893ea2.jpg?auto=compress,format&fit=crop&h=353&w=616&s=58e2c9b10ae822d2d0b1b1180c7d82f5', price=48.55, description='The Ancestral Edition contains the base game, the original soundtrack, and includes The Crimson Court DLC, The Shieldbreaker DLC, and The Color of Madness DLC! Buy together and save!')

    rpg_game_4 = Product(
        user_id=1, category_id=1,  name='Black Book', image_url='https://hb.imgix.net/133bdabb783240fa4131921c6686d0d949f9407a.jpg?auto=compress,format&fit=crop&h=353&w=616&s=67266773e5236e86740e6f1dc60007ee', price=16.24, description='A fusion of card-based RPGs and Adventure games, “Black Book” is a haunting tale of a young sorceress, who gave her life to serve the dark forces. Dive into the cold, yet alluring world of Slavic folktales - and uncover the secrets that hide in the darkness.')

    rpg_game_5 = Product(
        user_id=1, category_id=1,  name='Kenshi', image_url='https://hb.imgix.net/c09a95a826874f41327535261f49e9e6fbcf0ed3.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=1e55970d9d4409244ef26bb5b8ffa028', price=29.98, description='A free-roaming squad based RPG focusing on open-ended sandbox gameplay features rather than a linear story. Be a trader, a thief, a rebel, a warlord, an adventurer, a farmer, a slave, or just food for the cannibals.')

    rpg_game_6 = Product(
        user_id=1, category_id=1,  name='Loop Hero', image_url='https://hb.imgix.net/70d647ba54c4186dfcc287873f131cddc1dc9a7f.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=7a549797b4a67b5bdf1399f08f195e8f', price=8.99, description="""The Lich has thrown the world into a timeless loop and plunged its inhabitants into never ending chaos. Wield an expanding deck of mystical cards to place enemies, buildings, and terrain along each unique expedition loop for the brave hero. Recover and equip powerful loot for each class of hero for their battles and expand the survivors' camp to reinforce each adventure through the loop. Unlock new classes, new cards, and devious guardians on your quest to shatter the endless cycle of despair.""")

    rpg_game_7 = Product(
        user_id=1, category_id=1,  name='Children of Morta - Ancient Spirits', image_url='https://hb.imgix.net/8774c6883326c61abadf0de3878a4fe49c6df3bf.jpg?auto=compress,format&fit=crop&h=353&w=616&s=7c62c0490b8f93aa80fa7b0b20eacbff', price=4.99, description="""An old legend among the people of the south tells of a forbidden love between a human and a goblin. Yajouj the human became smitten with Majouj the goblin. In the legend, Majouj is taken away by force from Yajouj’s house and thrown into an endless abyss where she eventually perishes. Unbeknownst to Yajouj, he set out to find his soulmate but got lost in the bottomless abyss and lost his life in this pursuit. That’s not the end of this legend though, ultimately, their souls need to be reunited in death. A union to surpass the abyss. The souls of the two lovers are to find a way out of there.""")

    rpg_game_8 = Product(
        user_id=1, category_id=1,  name='The Falconeer - Edge of the World', image_url='https://hb.imgix.net/aed573bb696c5fecb1d96a8a2155bd43c169a231.jpg?auto=compress,format&fit=crop&h=353&w=616&s=65ccc85040b511fe8e06b64b69b11b95', price=5.99, description="""Take on epic new missions, embark on new adventures and discover stories that will lead you to spectacular new locations on the periphery of civilization, in ‘Edge of the World’, an extensive new expansion for this BAFTA nominated game.""")

    rpg_game_9 = Product(
        user_id=1, category_id=1,  name='Grim Dawn', image_url='https://hb.imgix.net/cdc5b5d8bcf4df060f75e014acf3ff0cb3a329ad.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=3dd53a182cb546a7d5cd6987c099dc44', price=24.99, description="""Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice & consequence.""")

    rpg_game_10 = Product(
        user_id=1, category_id=1,  name='Praey for the Gods', image_url='https://hb.imgix.net/434cf3edb931d03dbc8cb069df72034541e73d85.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a73659de8c50ba4d2db0620f77efb7e6', price=29.99, description="""Praey for the Gods is a boss climbing open world adventure game where you play as a lone hero sent to the edge of a dying frozen world to discover the mystery behind a never-ending winter. Arriving with only the clothes on your back, you must survive the colossal dangers that you encounter. To restore balance and reclaim the land from the brink, you will be faced with questions that not even a God knows the answer to.""")

    fps_game_1 = Product(
        user_id=1, category_id=2,  name='Shadow Warrior', image_url='https://hb.imgix.net/4eafeb441c6d5c13f72e855cbc097e650ade65e5.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=b02b088d2c4de508df318396a01f709f', price=39.99, description="""Shadow Warrior is a bold reimagining of the classic 3D Realms' shooter from independent developer Flying Wild Hog (Hard Reset) starring the legendary and quick-witted warrior Lo Wang. Combine the brute force of overwhelming firepower with the elegant precision of a katana to annihilate the merciless armies of the shadow realm in an exhilarating and visually stunning transformation of the classic first-person shooter.""")

    fps_game_2 = Product(
        user_id=1, category_id=2,  name='SUPERHOT', image_url='https://hb.imgix.net/de1031dcde6e5fe4d233f4dfd67158618c671786.jpg?auto=compress,format&fit=crop&h=353&w=616&s=29c7628ba79820042a13818ac1b7d959', price=24.99, description="""Blurring the lines between cautious strategy and unbridled mayhem, SUPERHOT is the FPS in which time moves only when you move. No regenerating health bars. No conveniently placed ammo drops. It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.""")

    fps_game_3 = Product(
        user_id=1, category_id=2,  name='Project Warlock', image_url='https://hb.imgix.net/2dc8baedb7e20f8c2d07a3ed72c53e3726a953e0.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=99d0009f350e66a2af7ddcebdff14bc8', price=24.99, description="""One man and his guns. Become a mysterious Warlock who embarks onto a dangerous mission to eradicate all evil. Put your finger on the trigger and travel through time and space to wreak havoc like in the golden days of fast paced, adrenaline-pumping first person shooters, hooking you for hours of super fun carnage. Let’s rock and roll!""")

    fps_game_4 = Product(
        user_id=1, category_id=2,  name='Wickland', image_url='https://hb.imgix.net/d0875a012da00ca79dc5e5e17c3c51bb3ac68b5e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=5783f1360973ced2800e2a121911b21a', price=9.99, description="""Wickland is an indie arena FPS game heavily inspired by classic shooters of the 90's. Morph into several different deadly beasts to use their own unique abilities, blaze through maps at insane speed to pick up power-ups and fight your friends or foes in classic maze-like arena maps, just like the good old days. Wickland is an arena FPS dedicated to PC Gamers.""")

    fps_game_5 = Product(
        user_id=1, category_id=2,  name='Collision Course', image_url='https://hb.imgix.net/f888f19021c8ce29b7cf1dcfd8b19a9501add828.jpg?auto=compress,format&fit=crop&h=353&w=616&s=bd8cd7a881521bc55e23f6ccd7e176ff', price=9.99, description="""A comet is hurtling toward earth! Sneak, scavenge and blast your way through an immersive prehistoric world filled with Humans, Dinosaurs, Droids and Mother Nature’s fury!""")

    fps_game_6 = Product(
        user_id=1, category_id=2,  name='Into the Radius VR', image_url='https://hb.imgix.net/cbcef0f4a94a780695278b4638215adf9aa18091.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=30c8b308e853115352c9e8231a1ecbc8', price=29.99, description="""
        Into the Radius is a single-player survival shooter developed exclusively for premium Virtual Reality headsets.

        Players are sent stalking through the surreal post-apocalyptic Pechorsk Radius Zone where physics-based interaction, realistic weapon handling, and moody atmosphere will get your adrenaline pumping as you struggle to survive in an unforgiving dystopian environment.

        Open-world exploration, climbing, stealth and a dynamic day/night cycle. This creepy immersive VR survival shooter is inspired by 'Roadside Picnic' (Пикник на обочине).""")

    fps_game_7 = Product(
        user_id=1, category_id=2,  name='Ziggurat', image_url='https://hb.imgix.net/838912ad1ea26642733a0d15cf9815f1e9f46668.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=490836b6e28f18cfc687187ee99b66ab', price=14.99, description="""Dungeon-Crawling First Person Shooting at its finest! Fast-paced combat! Dozens of perks, spells and enemies! Level ups! Random Dungeons! Traps! Badass bosses! Carrots! Ziggurat is the best combination of First Person Shooter and Rogue-LITE you have ever seen.""")

    fps_game_8 = Product(
        user_id=1, category_id=2,  name='Tannenberg', image_url='https://hb.imgix.net/e42b79b1e0a8a2fed80b515b333fe8bbf8b3bfdb.jpg?auto=compress,format&fit=crop&h=353&w=616&s=8c34c2d843edba377ab9a7e0130e9a80', price=19.99, description="""Tannenberg brings the massive battles of the Eastern Front in WW1 to life with 64 players fighting for control of key sectors of the battlefield, each one offering a distinct strategic advantage. Warfare between the Russian Empire, Germany, and their allies offers a fresh experience for first person shooter players and history aficionados alike.""")

    fps_game_9 = Product(
        user_id=1, category_id=2,  name='Serious Sam 3: BFE', image_url='https://hb.imgix.net/b8248b5f791bba1148b6d1ff9b0bca89dd6bde0d.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=0a7ddf876cdb178fae3527502e516acc', price=39.99, description="""Serious Sam 3: BFE is a first-person action shooter, a glorious throwback to the golden age of first-person shooters where men were men, cover was for amateurs and pulling the trigger made things go boom.""")

    fps_game_10 = Product(
        user_id=1, category_id=2,  name='Sanctum 2', image_url='https://hb.imgix.net/475963dc2914a370ee9ea8868d1f04288d242375.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=ce24118f56f4ff9498d33c900e42d843', price=14.99, description="""Sanctum 2 is the sequel to the world’s first Tower Defense/FPS hybrid game. Pick from four unique character classes and embark on a mission to protect the oxygen-producing Cores from hordes of deadly aliens who are threatened by their existence. Outfit your character exactly the way you want through the new and extensive customization system. Choose your own loadout of towers, weapons and perks, but choose wisely because you are humanity’s last defense against the unrelenting hordes set out to destroy it.""")

    platformer_game_1 = Product(
        user_id=1, category_id=3,  name='CUPHEAD', image_url='https://hb.imgix.net/0887794ec04cb0f21fc4c3bb7398b85f39ba724e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=c897c6ef29e442019ac63c00f94a4f64', price=19.99, description="""Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era: traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.""")

    platformer_game_2 = Product(
        user_id=1, category_id=3,  name='FEZ', image_url='https://hb.imgix.net/65ec7cc169f96383675958d6238dc647e2a0ba13.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=a9e8d10234c19094ac0bff68b4a77d98', price=9.99, description="""Gomez is a 2D creature living in a 2D world. Or is he? When the existence of a mysterious 3rd dimension is revealed to him, Gomez is sent out on a journey that will take him to the very end of time and space. Use your ability to navigate 3D structures from 4 distinct classic 2D perspectives. Explore a serene and beautiful open-ended world full of secrets, puzzles and hidden treasures. Unearth the mysteries of the past and discover the truth about reality and perception. Change your perspective and look at the world in a different way.""")

    platformer_game_3 = Product(
        user_id=1, category_id=3,  name='Light Fall', image_url='https://hb.imgix.net/ba0e2be8a7038a0e552013e3e15c9b6290d005eb.jpg?auto=compress,format&fit=crop&h=353&w=616&s=aee3fb6b03b6c71252875939fd3ba84c', price=14.99, description="""Explore the Forgotten World of Numbra to uncover your mysterious past and save the land and its inhabitants from an imminent threat. In this land of eternal night, you will rely on your Shadow Core to brave the many challenges and foes standing in your way. Do you have what it takes to survive in perilous Numbra?""")

    platformer_game_4 = Product(
        user_id=1, category_id=3,  name='Hollow Knight', image_url='https://hb.imgix.net/d73d29a560b20cb200d6f6d7daf935043b6edd8a.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=24ed82654ecaa67252feccb8e64f3ee5', price=14.99, description="""Hollow Knight is a classically styled 2D action adventure across a vast interconnected world. Explore twisting caverns, ancient cities and deadly wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient mysteries at the kingdom's heart.""")

    platformer_game_5 = Product(
        user_id=1, category_id=3,  name='Cave Story+', image_url='https://hb.imgix.net/336c3095400a6587df970ca384e793c04f72f1c2.jpg?auto=compress,format&fit=crop&h=353&w=616&s=faa749eb3ec6893f125e2e4702d2769f', price=14.99, description="""Arguably the most well-known indie game of all time, Cave Story features a completely original storyline wrapped with personality, mystery and hours of fast-paced fun. Cave Story is an action-adventure game from the critically acclaimed independent designer, Daisuke Amaya--or Pixel to his fans.""")

    platformer_game_6 = Product(
        user_id=1, category_id=3,  name='Caveblazers', image_url='https://hb.imgix.net/3c8f61958e5cc47ff193520d427982021f5aa4a3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0d40686f4262e5ff5c2acd33e5f4cb65', price=9.99, description="""Caveblazers is an action focused platformer roguelike set in a fantasy world. Each game is unique with procedurally generated levels to explore and a massive amount of items, weapons and equipment to discover.
        The game takes place in a recently discovered cave, said to hold "unimaginable power". You play as an adventurer setting out to explore the cave and find out what riches it holds. However, you are not the only one...""")

    platformer_game_7 = Product(
        user_id=1, category_id=3,  name='Iconoclasts', image_url='https://hb.imgix.net/60f52f65f38c5e1792464407b961305b376a6d6b.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=0c87818dac10dc001d96d830099a0607', price=19.99, description="""Robin just wants to be a mechanic and help people, but without a license she’s a sinner in Mother’s eyes. Ever since picking up her wrench, the world has been going nuts and she's wanted to bolt it back together. Now Penance is raining down on everyone she loves and One Concern agents are after her.""")

    platformer_game_8 = Product(
        user_id=1, category_id=3,  name='Celeste', image_url='https://hb.imgix.net/ff6a2c76a7b878b072beb8568ab09e7650ddf130.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=d4a1dc42c183c968f1eecc81ae226461', price=19.99, description="""Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight, hand-crafted platformer from the creators of multiplayer classic TowerFall.""")

    platformer_game_9 = Product(
        user_id=1, category_id=3,  name='LIMBO', image_url='https://hb.imgix.net/cb488feb62dd7081c8c3ffba37e4a0676d9c41b3.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=a85469150173f18ac7a263951dced875', price=9.99, description="""Uncertain of his sister's fate, a boy enters LIMBO""")

    platformer_game_10 = Product(
        user_id=1, category_id=3,  name='Ori and the Blind Forest: Definitive Edition', image_url='https://hb.imgix.net/2fee0e5d305520ea5bcf0cbc7cf1ba4e617486a3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=3d3f8bc5e4c8b83c4e7df010315ef835', price=19.99, description="""The forest of Nibel is dying. After a powerful storm sets a series of devastating events in motion, Ori must journey to find courage and confront a dark nemesis to save the forest of Nibel. “Ori and the Blind Forest” tells the tale of a young orphan destined for heroics, through a visually stunning Action-Platformer crafted by Moon Studios. Featuring hand-painted artwork, meticulously animated character performance, a fully orchestrated score and dozens of new features in the Definitive Edition, “Ori and the Blind Forest” explores a deeply emotional story about love and sacrifice, and the hope that exists in us all.""")

    horror_game_1 = Product(
        user_id=2, category_id=4,  name='OUTLAST', image_url='https://hb.imgix.net/0aecbdba963158168362be1a20738b3dfde49782.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=439ab919cada09aec467ecf1546e7dbe', price=19.99, description="""Hell is an experiment you can't survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare.""")

    horror_game_2 = Product(
        user_id=2, category_id=4,  name='Amnesia: The Dark Descent', image_url='https://hb.imgix.net/bb9881392ea885e7f288c1b3d6e579ad5593d46e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=7f76efe3771975a41e5a1bb47cacca14', price=19.99, description='The last remaining memories fade away into darkness. Your mind is a mess and only a feeling of being hunted remains. You must escape. Awake... Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core. You stumble through the narrow corridors as the distant cry is heard. It is getting closer.')

    horror_game_3 = Product(
        user_id=2, category_id=4,  name='The Forest', image_url='https://hb.imgix.net/2784f189723e79e7b6ebf8104d31cb2d3c4d60eb.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=129dd0664da138d6f114481b11d3d90e', price=19.99, description='As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.')

    horror_game_4 = Product(
        user_id=2, category_id=4,  name='Penumbra Collection', image_url='https://hb.imgix.net/f3b4c8e33b52966833eb1396f9e1fe36dcbcf8b8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=5b9ef1d8eb1ce10bf55424ea3ca69a59', price=9.99, description="""Like all good nightmares, Philip's begins with something all too real - his mother's death. The days following the funeral are characterized by nothing, save for an incessant feeling of abandonment. Until, that is, he receives a letter from a dead man.""")

    horror_game_5 = Product(
        user_id=2, category_id=4,  name='SOMA', image_url='https://hb.imgix.net/6c8dbd467f67abc27c5459b0558e64d247358e69.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=fd0923b3c1e7ad4b9e22baa63c1a5cd3', price=29.99, description="""SOMA is a sci-fi horror game from Frictional Games, the creators of Amnesia: The Dark Descent. It is an unsettling story about identity, consciousness, and what it means to be human.""")

    horror_game_6 = Product(
        user_id=2, category_id=4,  name='Amnesia: A Machine for Pigs', image_url='https://hb.imgix.net/e8b64c860a0ef501045324f3ac4f2ab13270d5f7.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=4dc30eca4f67b63ede53071f7d16d679', price=19.99, description="""From the creators of Amnesia: The Dark Descent and Dear Esther comes a new first-person horrorgame that will drag you to the depths of greed, power and madness. It will bury its snout into your ribs and it will eat your heart.""")

    horror_game_7 = Product(
        user_id=2, category_id=4,  name='Slender: The Arrival', image_url='https://hb.imgix.net/784205234e4eb9b8e8afcf6be4fe8e18b2947ddb.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=9411a587d4d6679559326d283fae9b4b', price=9.99, description="""You're on your own. No one to come for you. No one to help you. No one to hear you scream. Slender: The Arrival is the official videogame adaption of Slender Man, developed in collaboration with Eric "Victor Surge" Knudson, creator of the paranormal phenomenon that has been terrifying the curious-minded around the world since its inception, with Mark Hadley and Blue Isle Studios.""")

    horror_game_8 = Product(
        user_id=2, category_id=4,  name='Bendy and the Ink Machine', image_url='https://hb.imgix.net/a8d2640e0b010d9fb169dcb71e5cebac812f35b0.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=05861e390928c53b073568f2827c3efc', price=19.99, description="""Bendy and the Ink Machine™" is a first person puzzle action horror game that begins in the far days past of animation and ends in a very dark future. Play as Henry as he revisits the demons of his past by exploring the abandoned animator's workshop of Joey Drew Studios. With twists and turns around every corner, "Bendy and the Ink Machine" is sure to thrill you... and decimate your childhood.""")

    horror_game_9 = Product(
        user_id=2, category_id=4,  name='Layers of Fear: Masterpiece Edition', image_url='https://hb.imgix.net/89e83f80143781349d0f1fc2df8e100102a299e7.jpg?auto=compress,format&fit=crop&h=353&w=616&s=c3bb81a7dff34d5517c76c88c2fe8533', price=22.99, description="""You take another drink as the canvas looms in front of you. A light flickers dimly in the corner. You’ve created countless pieces of art, but never anything like…this. Why haven’t you done this before? It seems so obvious in retrospect. Your friends, critics, business partners—soon, they’ll all see. But something’s still missing…""")

    horror_game_10 = Product(
        user_id=2, category_id=4,  name='Little Nightmares Complete Edition', image_url='https://hb.imgix.net/6406cc5c675c69ee3d54dba37a813d66c4d2a576.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=5f75cec9d5c61eb7ced21d17ec35a2e2', price=29.99, description="""Do you remember your childhood fears? Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears as you help Six & The Kid escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal!""")

    simulation_game_1 = Product(
        user_id=2, category_id=5,  name='Tabletop Simulator', image_url='https://hb.imgix.net/928701042d49e18b7727bd0cff21c44b67fc3f3d.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=0a539b70097ed452f408320cb562d225', price=9.99, description="""Create your own original games, import custom assets, automate games with scripting, set up complete RPG dungeons, manipulate the physics, create hinges & joints, and of course flip the table when you are losing the game. All with an easy to use system integrated with Steam Workshop. You can do anything you want in Tabletop Simulator. The possibilities are endless!""")

    simulation_game_2 = Product(
        user_id=2, category_id=5,  name='Goat Simulator', image_url='https://hb.imgix.net/98e637558decbb0c5579e24567d234488375593f.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=e280d1e879f361ee23cb379de99ba77c', price=9.99, description="""Goat Simulator is the latest in goat simulation technology, bringing next-gen goat simulation to YOU. You no longer have to fantasize about being a goat, your dreams have finally come true! WASD to write history.""")

    simulation_game_3 = Product(
        user_id=2, category_id=5,  name='Escape Simulator', image_url='https://hb.imgix.net/569e0e6bfb0d2518f53af352011e5143dacd35f4.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6db61b981e3de71eae09fb66944a816d', price=11.99, description="""Escape Simulator is a first-person puzzler you can play solo or in an online co-op. Explore a growing set of highly interactive escape rooms. Move furniture, pick up and examine everything, smash pots and break locks! Supports community-made rooms through the level editor.""")

    simulation_game_4 = Product(
        user_id=2, category_id=5,  name='Unpacking', image_url='https://hb.imgix.net/d1b9b1977e4b4c21822b0f31231f783908a503e2.jpg?auto=compress,format&fit=crop&h=353&w=616&s=b5d0b2569567549b2c5f10b145d5ae4d', price=19.99, description="""Unpacking is a zen game about the familiar experience of pulling possessions out of boxes and fitting them into a new home. Part block-fitting puzzle, part home decoration, you are invited to create a satisfying living space while learning clues about the life you’re unpacking. Over the course of eight house moves, you are given a chance to experience a sense of intimacy with a character you never see and a story you’re never told.""")

    simulation_game_5 = Product(
        user_id=2, category_id=5,  name='Going Medieval', image_url='https://hb.imgix.net/932a91cbec82db79803bb3ace657f46f8cf9d222.jpg?auto=compress,format&fit=crop&h=353&w=616&s=5cea36cccff7bf6e95c9284a59877ad2', price=24.99, description="""In the world of Going Medieval, dark age society is on its knees. At the end of the 14th century, 95 percent of the global population has perished due to rampant plague. Eventually, survivors emerge from society’s ashes, and it’s now up to you to help them settle in a dangerous new land reclaimed by nature. Build your people a home, help shape their lives, and protect them from animals, bandits, and other dangers in a lawless post-calamity age.""")

    simulation_game_6 = Product(
        user_id=2, category_id=5,  name='Stardew Valley', image_url='https://hb.imgix.net/35e1689e7634e948baab56601cd8879f5b06dd7b.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=8a74e6a49b712d241d1dfb99415c4e0a', price=14.99, description="""Stardew Valley is an open-ended country-life game! You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!""")

    simulation_game_7 = Product(
        user_id=2, category_id=5,  name='Factorio', image_url='https://hb.imgix.net/368cd1a0b8a818d31d10ef8f45c17f05e6f8ef78.jpg?auto=compress,format&fit=crop&h=353&w=616&s=45f7c207620518090615e11622f7a7dd', price=30.00, description="""Factorio is a game in which you build and maintain factories. You will be mining resources, researching technologies, building infrastructure, automating production and fighting enemies. In the beginning you will find yourself chopping trees, mining ores and crafting mechanical arms and transport belts by hand, but in short time you can become an industrial powerhouse, with huge solar fields, oil refining and cracking, manufacture and deployment of construction and logistic robots, all for your resource needs. However this heavy exploitation of the planet's resources does not sit nicely with the locals, so you will have to be prepared to defend yourself and your machine empire.""")

    simulation_game_8 = Product(
        user_id=2, category_id=5,  name='House Flipper', image_url='https://hb.imgix.net/dba1c4ea74d7b4a46d8fc77e53ee8e5d7b4c44cc.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=8956182dbacf06eca81dcbc951cdf3fe', price=19.99, description="""House Flipper is a unique chance to become a one-man renovation crew. Buy, repair and remodel devastated houses. Give them a second life and sell them at a profit!""")

    simulation_game_9 = Product(
        user_id=2, category_id=5,  name='Rimworld', image_url='https://hb.imgix.net/5dc28b08c3b6552f6929d90e64e20fdfab513fea.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=5eb1e7857c9566e7a07d624b37738787', price=34.99, description="""RimWorld is a story generator. It’s designed to co-author tragic, twisted, and triumphant stories about imprisoned pirates, desperate colonists, starvation and survival. It works by controlling the “random” events that the world throws at you. Every thunderstorm, pirate raid, and traveling salesman is a card dealt into your story by the AI Storyteller . There are several storytellers to choose from. Randy Random does crazy stuff, Cassandra Classic goes for rising tension, and Phoebe Chillax likes to relax.""")

    simulation_game_10 = Product(
        user_id=2, category_id=5,  name='Powerwash Simulator', image_url='https://hb.imgix.net/1f9ac0150cbfbd654d450305de95205d9ee0353d.jpg?auto=compress,format&fit=crop&h=353&w=616&s=bb48d7956c87f61ea5e7354d5c6664d4', price=19.99, description="""Wash away your worries with the soothing sounds of high-pressure water. Fire up your power washer and blast away every speck of dirt and grime you can find. Build your own power-washing business and unlock new tools, upgrades and more – all with the simple satisfaction of power-washing to a sparkling finish.""")

    fighting_game_1 = Product(
        user_id=2, category_id=6,  name='Absolver', image_url='https://hb.imgix.net/2e22fc7698a59ebb42ffac41976bff8418be790e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=9f25568fbb600c765bd910194dc02edc', price=29.99, description="""In the ruins of the fallen Adal Empire, you awaken with a mysterious mask on your face, and faint recollections of an esoteric ceremony. Freeing you from hunger, thirst, and even death, the mask is the creation of the Guides, the rulers of these lands, who have placed you here to determine whether you are worthy of becoming part of the elite corps of Absolvers. As you wander these forsaken lands, encountering other Prospects like you, you will learn new combat styles, acquire weapons, gear and armor, and build a team of warriors with whom to fight side by side in Arenas of combat.""")

    fighting_game_2 = Product(
        user_id=2, category_id=6,  name='Brawlout', image_url='https://hb.imgix.net/b8e09a332feac22c0b6e7fa9f0f593621add15b5.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=8af2de3ce482242a58b8f48d3f44e898', price=19.99, description="""Brawlout packs a punch with couch and online play modes, blending platform fighter mechanics and traditional fighting game play into a stylish and fluid battle royale. Striking the balance between the growing competitive scene and the genre’s party game roots, Brawlout hopes to cater to the veteran platform fighter, the casual fan and the newcomer looking to make their mark.""")

    fighting_game_3 = Product(
        user_id=2, category_id=6,  name='Gang Beasts', image_url='https://hb.imgix.net/9eab3fa624562fcd576ced0cdc66e3e4d38a6087.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=8a68ba969669f976037b37abef2d8da8', price=19.99, description="""Gang Beasts is a silly multiplayer party game with surly gelatinous characters, brutal slapstick fight sequences, and absurd hazardous environments, set in the mean streets of Beef City. Customise your character and fight local and online enemies in the melee game mode or fight with friends against the gangs of Beef City in the gang game mode.""")

    fighting_game_4 = Product(
        user_id=2, category_id=6,  name='Nidhogg', image_url='https://hb.imgix.net/a1a0322222326bc9a964581fbb50e8a8ecc97449.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=36eb457d76e76b19bb20667ed0773fec', price=9.99, description="""Nidhogg is the epic award-winning fencing tug-of-war, full of graceful acrobatics and clumsy stabs. IRL yelling and excitement may occur, in this ultimate two-player showdown of fast-paced fencing and melee attacks.""")

    fighting_game_5 = Product(
        user_id=2, category_id=6,  name='Skullgirls 2nd Encore', image_url='https://hb.imgix.net/5676a1a4cf7c6fcddb12a602a98009c12af59792.png?auto=compress,format&fit=crop&h=353&w=616&s=1ea0105d396803cc920fee97aaf4da2c', price=24.99, description="""Skullgirls 2nd Encore is a beautiful, fast-paced, and critically acclaimed 2D fighting game that puts players in control of fierce warriors in an extraordinary Dark Deco world. Each of the 14 wildly original characters features unique gameplay mechanics and plenty of personality. Skullgirls is the perfect fighting game for casual and competitive fighting game fans alike. Includes fully voiced story mode, gorgeous animation, and a soundtrack by Michiru Yamane.""")

    fighting_game_6 = Product(
        user_id=2, category_id=6,  name='Punch Club', image_url='https://hb.imgix.net/42e920ca8d98b63d80eef7c17c9406d68b5e340f.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=b959e6b1056d001df00123eb94c1cfa0', price=9.99, description="""Your father was brutally murdered before your eyes. Now you must train hard, eat chicken and punch dudes in the face to earn your place in the Punch Club ranks, and discover who ended your father's life.""")

    fighting_game_7 = Product(
        user_id=2, category_id=6,  name='Them\'s Fightin\' Herds', image_url='https://hb.imgix.net/eb8eeb229439250ed4b9c3d9eee70796a5cbc808.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=2916ef8427ec4bd36db46a081126a3fa', price=14.99, description="""Them’s Fightin’ Herds is an indie fighting game featuring a cast of adorable animals designed by acclaimed cartoon producer Lauren Faust. Beneath the cute and cuddly surface, a serious fighter awaits!""")

    fighting_game_8 = Product(
        user_id=2, category_id=6,  name='Slap City', image_url='https://hb.imgix.net/7779817e6c49f5c39bd19e81db85f788f71fca81.jpg?auto=compress,format&fit=crop&h=353&w=616&s=b8103f4f983b238679ec784eebffad37', price=19.99, description="""Slap City is a Seriously Fun platform fighter with a perfect mix of characters from the Ludosity universe. Play Locally or Online . Slap it hard in Ranked or fast and loose in Slap Ball game mode. We are the original inventors of Clutch Technology .""")

    fighting_game_9 = Product(
        user_id=2, category_id=6,  name='Lethal League Blaze', image_url='https://hb.imgix.net/f1f39e6d1213129a9943f46ddb58df99808773b0.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0bf96a980ff12c779ea571dc2361c54e', price=19.99, description="""Lethal League Blaze is an intense, high speed ball game, with unique characters, outta sight sounds and none of that weak shit. In Shine City, the anti-gravity ball game has long been illegal. The group who kept playing was dubbed the Lethal League. Even now, with their sport pushed underground, players and crews compete in the League for challenge and respect.""")

    fighting_game_10 = Product(
        user_id=2, category_id=6,  name='Roof Rage', image_url='https://hb.imgix.net/2f6c206c8ea307c49e173a04b22fee04856b0393.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a6024dd0c6b811dde7bdb30605fb4a00', price=14.99, description="""It is both a party game and a competitive game for platform fighter's players. The scale and speed of Roof Rage allows you to be creative, always producing new combos and pushing the gameplay a little bit further. With the last 3 characters added since the release, the game now has 11 characters, each one offering a unique playstyle. You can pick and throw roof tiles, catch them, deflect your opponent's projectiles, wave-dash, parry and smash attack for a finishing move. Pick your stage among 11 iconic, cultural inspired, rooftops.""")

    db.session.add(rpg_game_1)
    db.session.add(rpg_game_2)
    db.session.add(rpg_game_3)
    db.session.add(rpg_game_4)
    db.session.add(rpg_game_5)
    db.session.add(rpg_game_6)
    db.session.add(rpg_game_7)
    db.session.add(rpg_game_8)
    db.session.add(rpg_game_9)
    db.session.add(rpg_game_10)

    db.session.add(fps_game_1)
    db.session.add(fps_game_2)
    db.session.add(fps_game_3)
    db.session.add(fps_game_4)
    db.session.add(fps_game_5)
    db.session.add(fps_game_6)
    db.session.add(fps_game_7)
    db.session.add(fps_game_8)
    db.session.add(fps_game_9)
    db.session.add(fps_game_10)

    db.session.add(platformer_game_1)
    db.session.add(platformer_game_2)
    db.session.add(platformer_game_3)
    db.session.add(platformer_game_4)
    db.session.add(platformer_game_5)
    db.session.add(platformer_game_6)
    db.session.add(platformer_game_7)
    db.session.add(platformer_game_8)
    db.session.add(platformer_game_9)
    db.session.add(platformer_game_10)

    db.session.add(horror_game_1)
    db.session.add(horror_game_2)
    db.session.add(horror_game_3)
    db.session.add(horror_game_4)
    db.session.add(horror_game_5)
    db.session.add(horror_game_6)
    db.session.add(horror_game_7)
    db.session.add(horror_game_8)
    db.session.add(horror_game_9)
    db.session.add(horror_game_10)

    db.session.add(simulation_game_1)
    db.session.add(simulation_game_2)
    db.session.add(simulation_game_3)
    db.session.add(simulation_game_4)
    db.session.add(simulation_game_5)
    db.session.add(simulation_game_6)
    db.session.add(simulation_game_7)
    db.session.add(simulation_game_8)
    db.session.add(simulation_game_9)
    db.session.add(simulation_game_10)

    db.session.add(fighting_game_1)
    db.session.add(fighting_game_2)
    db.session.add(fighting_game_3)
    db.session.add(fighting_game_4)
    db.session.add(fighting_game_5)
    db.session.add(fighting_game_6)
    db.session.add(fighting_game_7)
    db.session.add(fighting_game_8)
    db.session.add(fighting_game_9)
    db.session.add(fighting_game_10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
