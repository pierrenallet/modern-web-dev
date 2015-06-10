'use strict';

var _ = require('underscore');
var countries = require('./countries');
var directors = require('./directors');

var movies = [{
    "id": 1,
    "title": "A Nous la Liberte",
    "description": "One of the all-time great comedy classics, Rene Clair's A Nous la Liberte is a skillful satire of the industrial revolution and the blind quest for wealth. Deftly integrating lighthearted wit with pointed social criticism, Clair tells the story of an escaped convict who becomes a wealthy industrialist. But when his past returns to upset his carefully laid plans, he and his old cellmate take to the road as tramps.",
    "year": 1932,
    "rating": "NR",
    "directorID": null,
    "countryID": 1,
    "posterName": "ANouslaLiberte.jpg"
}, {
    "id": 2,
    "title": "About Schmidt",
    "description": "When insurance actuary Warren Schmidt (Jack Nicholson) retires and his wife dies, he looks for life's meaning on a road trip to his daughter's (Hope Davis) upcoming wedding to a waterbed salesman (Dermot Mulroney). But Schmidt can't seem to get anything right. En route to the wedding, he shares his life through letters with a Tanzanian boy he's sponsoring for 73 cents a day -- and soon, Schmidt discovers renewed purpose.",
    "year": 2002,
    "rating": "R",
    "directorID": 1,
    "countryID": 2,
    "posterName": "AboutSchmidt.jpg"
}, {
    "id": 3,
    "title": "Absence of Malice",
    "description": "Journalistic ethics come under fire in this newspaper drama in which a novice reporter (Sally Field) at a Miami daily becomes a pawn in the investigation of a liquor distributor (Paul Newman) suspected of being involved in a mob murder. Tragedy and scandal follow in this crime drama written by former reporter Kurt Luedtke that received Oscar nominations for Best Actor (Newman), Best Supporting Actress (Melinda Dillon) and Best Screenplay.",
    "year": 1981,
    "rating": "PG",
    "directorID": 2,
    "countryID": 2,
    "posterName": "AbsenceofMalice.jpg"
}, {
    "id": 4,
    "title": "Adam's Rib",
    "description": "Successful attorney Amanda Bonner (Katharine Hepburn) decides to defend Doris (Judy Holliday), who stands accused of the attempted murder of her husband (Tom Ewell) and his mistress (Jean Hagen), while Bonner's lawyer husband, Adam (Spencer Tracy), signs on as the prosecuting attorney. The sensational trial that ensues finds them sitting at opposing sides of the courtroom -- and the dinner table. George Cukor directs this Oscar-nominated comedy.",
    "year": 1949,
    "rating": "NR",
    "directorID": 3,
    "countryID": 2,
    "posterName": "Adam'sRib.jpg"
}, {
    "id": 5,
    "title": "Adaptation",
    "description": "Charlie Kaufman (Nicolas Cage) is a Los Angeles screenwriter battling enormous feelings of insecurity and impotence as he struggles to adapt <i>The Orchid Thief</i>, a book by Susan Orlean (Meryl Streep), whose main character, John Laroche (Chris Cooper), is searching for love. Add to the mix Charlie's twin brother, Donald (also played by Cage), and you have a surreal, Spike Jonze-directed gem about the search for passion.",
    "year": 2002,
    "rating": "R",
    "directorID": 4,
    "countryID": 2,
    "posterName": "Adaptation.jpg"
}, {
    "id": 6,
    "title": "The Adjuster",
    "description": "Insurance adjuster Noah Render (Elias Koteas) spends all his waking hours serving his clients, from arranging temporary housing to fulfilling their sexual desires. Enter affluent couple Bubba (Maury Chaykin) and Mimi (Gabrielle Rose), who -- under the guise of filming a movie -- con Noah and his wife (Arsin&#x00E9;e Khanijan) into renting out their home. Little does Noah realize that he's about to learn an ironic lesson in this disquieting indie tale.",
    "year": 1991,
    "rating": "R",
    "directorID": 5,
    "countryID": 3,
    "posterName": "TheAdjuster.jpg"
}, {
    "id": 7,
    "title": "The Adventures of Robin Hood",
    "description": "This 1985 animated adaptation of the classic legend follows the brave exploits of Robin Hood, a noble thief (and an ace with a bow and arrow) who steals from the rich to give to the poor. Dwelling deep within the glades of Sherwood Forest, Robin and his band of merry men elude the Sheriff of Nottingham, rescue Maid Marion and thwart wretched Prince John to preserve the throne for England's true king, Richard the Lionhearted.",
    "year": 1938,
    "rating": "NR",
    "directorID": 6,
    "countryID": 2,
    "posterName": "TheAdventuresofRobinHood.jpg"
}, {
    "id": 8,
    "title": "Affliction",
    "description": "Wade Whitehouse (Nick Nolte) is sheriff of a Podunk New Hampshire town, and he's not doing well on the job. Debilitated from years of abuse by his malevolent father (James Coburn), Wade is an abject, drunken failure on the job and family fronts. But when a local businessman is mysteriously killed during a deer hunt, Wade sees the case as a path to redemption. Coburn won the Best Supporting Actor Oscar, and Nolte was nominated for Best Actor.",
    "year": 1998,
    "rating": "R",
    "directorID": 7,
    "countryID": 2,
    "posterName": "Affliction.jpg"
}, {
    "id": 9,
    "title": "The African Queen",
    "description": "Charlie Allnut (Humphrey Bogart), the booze-guzzling, rough-hewn captain of a broken-down East African riverboat, teams with a straitlaced, iron-willed missionary (Katharine Hepburn) to take on a menacing German gunboat during World War I. A classic study in star charisma and pitch-perfect casting, The African Queen was nominated for four Oscars (for actress, actor, director and original screenplay), with Bogart winning a Best Actor statuette.",
    "year": 1952,
    "rating": "NR",
    "directorID": 8,
    "countryID": 2,
    "posterName": "TheAfricanQueen.jpg"
}, {
    "id": 10,
    "title": "L'Age d'Or",
    "description": "Iconoclastic director Luis Bunuel trumpets his trademark critiques of religion and bourgeoisie society in this surrealistic 1930 film that begins as a documentary about scorpions and evolves into a shocking examination of lust. As a nameless man and woman (Gaston Modot and Lya Lys) attempt to consummate their sexual desire, the forces of righteousness continually thwart their passion. Artist Salvador Dali penned the provocative script.",
    "year": 1930,
    "rating": "NR",
    "directorID": 9,
    "countryID": 1,
    "posterName": "L'Aged'Or.jpg"
}, {
    "id": 11,
    "title": "Aguirre, the Wrath of God",
    "description": "",
    "year": 1972,
    "rating": "",
    "directorID": 10,
    "countryID": 4,
    "posterName": "Aguirre,theWrathofGod.jpg"
}, {
    "id": 12,
    "title": "A.I.",
    "description": "",
    "year": 2001,
    "rating": "",
    "directorID": 11,
    "countryID": 2,
    "posterName": "A.I..jpg"
}, {
    "id": 13,
    "title": "Airplane!",
    "description": "In this joke-a-second parody of disaster movies, traumatized former combat pilot Ted Striker (Robert Hays) is forced to land a passenger plane when food poisoning strikes the crew and there's no one else on board who can do the job. In some clever casting, leading dramatic actors Peter Graves, Robert Stack and Leslie Nielsen never betray that they're in on the joke. Multiple viewings are required to catch every gag.",
    "year": 1980,
    "rating": "PG",
    "directorID": 12,
    "countryID": 2,
    "posterName": "Airplane!.jpg"
}, {
    "id": 14,
    "title": "Aladdin",
    "description": "Barry Bostwick stars in this enchanting musical adventure based on the classic fairy tale. A bonny and benevolent genie (Bostwick) befriends the dashing Prince Aladdin, who's enamored of a beautiful princess. But he's facing keen competition from other suitors who also want to marry the pretty royal, a young lady who has ideas of her own. Can the genie grant Aladdin his most fervent wish? Former Monkee Micky Dolenz directs.",
    "year": 1992,
    "rating": "NR",
    "directorID": 13,
    "countryID": 2,
    "posterName": "Aladdin.jpg"
}, {
    "id": 15,
    "title": "Alexander Nevsky",
    "description": "Considered the masterpiece of Russian director Sergei Eisenstein's career, Alexander Nevsky is a commentary on the mounting Soviet resistance to the Third Reich with a historical parallel. Three years after repelling the Swedes, 13th century prince Alexander Nevsky (who some believe represents Stalin in this parable) wages war against German invaders with a vast Russian army. Sergei Prokofiev composed the music.",
    "year": 1939,
    "rating": "NR",
    "directorID": 14,
    "countryID": 5,
    "posterName": "AlexanderNevsky.jpg"
}, {
    "id": 16,
    "title": "Alice Doesn't Live Here Anymore",
    "description": "Ellen Burstyn won an Oscar playing Alice Hyatt, a destitute widow who must find the strength to go on for her young son (Alfred Lutter) in the face of loneliness and fear, in this classic slice of 1970s cinema from director Martin Scorsese. When the pair lands in Tucson, Ariz., Alice takes a job at a diner and meets a customer (Kris Kristofferson) who helps mend her fractured heart. The film spawned the popular TV sitcom \"Alice.\"",
    "year": 1975,
    "rating": "PG",
    "directorID": 15,
    "countryID": 2,
    "posterName": "AliceDoesn'tLiveHereAnymore.jpg"
}, {
    "id": 17,
    "title": "Alice's Restaurant",
    "description": "You can get anything you want at Alice's Restaurant, but the only thing music icon Arlo Guthrie needs is a good Thanksgiving dinner. After he gets his fill, Guthrie's run-in with the law over a trumped-up littering charge leads to a unique way of avoiding the Vietnam War draft. This film by Arthur Penn is based on Guthrie's song \"Alice's Restaurant\" and co-stars James Broderick, Patricia Quinn, Pete Seeger and Lee Hays.",
    "year": 1969,
    "rating": "R",
    "directorID": 16,
    "countryID": 2,
    "posterName": "Alice'sRestaurant.jpg"
}, {
    "id": 18,
    "title": "Aliens",
    "description": "",
    "year": 1986,
    "rating": "",
    "directorID": 17,
    "countryID": 2,
    "posterName": "Aliens.jpg"
}, {
    "id": 19,
    "title": "All About Eve",
    "description": "Writer-director Joseph L. Mankiewicz's sharp script anchors this story about New York City theater life, with Bette Davis playing an aging Broadway diva who employs a starstruck fan (Anne Baxter) as her assistant, only to learn the woman is a conniving upstart. The now-classic All About Eve won Oscars for Best Picture, Best Director (Mankiewicz), Best Screenplay and Best Supporting Actor (George Sanders).",
    "year": 1950,
    "rating": "NR",
    "directorID": 18,
    "countryID": 2,
    "posterName": "AllAboutEve.jpg"
}, {
    "id": 20,
    "title": "All About My Mother",
    "description": "An Oscar winner for Best Foreign Language Film, writer-director Pedro Almodovar's compassionate tribute to women examines the life of Manuela (Cecilia Roth), who leaves Madrid for Barcelona shortly after she witnesses her son's accidental death. Once there, she reunites with an old friend (Antonia San Juan), a pre-op transsexual prostitute, and forms a fast but enduring friendship with a pregnant nun (Penelope Cruz).",
    "year": 1999,
    "rating": "R",
    "directorID": 19,
    "countryID": 1,
    "posterName": "AllAboutMyMother.jpg"
}, {
    "id": 21,
    "title": "All Quiet on the Western Front",
    "description": "Teenage German soldiers pass from idealism to despair in this poignant, Oscar-winning depiction of survival on the front lines, adapted from an anti-war novel by Erich Maria Remarque and banned in a number of countries during wartime. Awarded Best Picture in 1930, the film has lost little of its original impact, with brutal imagery and a peaceful message that also earned director Lewis Milestone an Academy Award for Best Director.",
    "year": 1930,
    "rating": "NR",
    "directorID": 20,
    "countryID": 2,
    "posterName": "AllQuietontheWesternFront.jpg"
}, {
    "id": 22,
    "title": "All That Heaven Allows",
    "description": "Jane Wyman and Rock Hudson star in this supreme example of the glossy Technicolor melodramas of director Douglas Sirk, which were the inspiration for 2002's art-house hit Far from Heaven. Wyman is a repressed widow; Hudson is the virile (and younger) gardener who quotes Thoreau. A scandal ensues when they flaunt their love before their stuffy mid-1950s family and social set.",
    "year": 1956,
    "rating": "NR",
    "directorID": 21,
    "countryID": 2,
    "posterName": "AllThatHeavenAllows.jpg"
}, {
    "id": 23,
    "title": "All the King's Men",
    "description": "Willie Stark (Broderick Crawford) is a model politician -- until he's corrupted by the very system he tries to reform. Based on the cautionary Pulitzer Prize-winning novel, the film was nominated for seven Academy Awards. It won Best Picture, as well as Best Actor and Actress for stars Crawford and Mercedes McCambridge (later the voice of the possessed Regan in The Exorcist). Stark's character is based on Louisiana governor Huey Long. ",
    "year": 1949,
    "rating": "NR",
    "directorID": 22,
    "countryID": 2,
    "posterName": "AlltheKing'sMen.jpg"
}, {
    "id": 24,
    "title": "All the President's Men",
    "description": "The film that launched a thousand journalism school students, All the President's Men chronicles how the work of reporters Bob Woodward (Robert Redford) and Carl Bernstein (Dustin Hoffman) contributed to the public downfall of President Richard M. Nixon. The duo connected a Washington, D.C., hotel break-in with a Nixon \"dirty tricks\" team assigned to discredit Democratic rivals, launching a series of tense events that forced Nixon to resign.",
    "year": 1976,
    "rating": "PG",
    "directorID": 23,
    "countryID": 2,
    "posterName": "AllthePresident'sMen.jpg"
}, {
    "id": 25,
    "title": "Amadeus",
    "description": "F. Murray Abraham earned a Best Actor Oscar for his imperious performance as Antonio Salieri, a mediocre composer whose churlish young rival, Wolfgang Amadeus Mozart (Tom Hulce), wins immortality with his musical genius. Not happy to see his talent eclipsed, Salieri dons a disguise and deviously plots revenge, obsessed with muffling Mozart's maddening laughter. Milos Forman's masterful drama also won Oscars for Best Picture and Best Director.",
    "year": 1984,
    "rating": "R",
    "directorID": 24,
    "countryID": 2,
    "posterName": "Amadeus.jpg"
}, {
    "id": 26,
    "title": "Amarcord",
    "description": "Awarded both a Golden Globe and an Oscar for Best Foreign Film, acclaimed Italian director Frederico Fellini's Amarcord is a richly visual film about Rimini, a traditional seaside village during the uncertainty of Mussolini's fascist rule. Fellini drew from personal experience to bring the small town and all its colorful characters to life in this story about the escapades of a boy on the cusp of becoming a man.",
    "year": 1974,
    "rating": "R",
    "directorID": 25,
    "countryID": 1,
    "posterName": "Amarcord.jpg"
}, {
    "id": 27,
    "title": "Amélie",
    "description": "",
    "year": 2001,
    "rating": "",
    "directorID": 26,
    "countryID": 1,
    "posterName": "Amélie.jpg"
}, {
    "id": 28,
    "title": "America, America",
    "description": "Director Elia Kazan vividly recounts the dramatic life story of his own uncle, who's encouraged by his father to leave their home village in Turkey when oppression of the Greek minority living there becomes more intense. Young Stavros (Stathis Giallelis) travels first to Constantinople, where his family plans eventually to join him. But soon Stavros begins to set his sights on a bolder destination: the distant shores of America.",
    "year": 1963,
    "rating": "NR",
    "directorID": 27,
    "countryID": 2,
    "posterName": null
}, {
    "id": 29,
    "title": "The American Friend",
    "description": "Idealistic German art restorer Jonathan Zimmermann (Bruno Ganz) is dying from a rare blood disease, so to earn money for the family he will be leaving behind, he accepts an offer from cunning American sociopath Tom Ripley (Dennis Hopper) to carry out a high-paying mob it. Zimmermann and Ripley forge an uneasy bond steeped in deceit, corruption and cold-blooded murder -- a partnership that could easily ruin what's left of Zimmerman's life.",
    "year": 1977,
    "rating": "NR",
    "directorID": 28,
    "countryID": 1,
    "posterName": "TheAmericanFriend.jpg"
}, {
    "id": 30,
    "title": "American Graffiti",
    "description": "",
    "year": 1973,
    "rating": "",
    "directorID": 29,
    "countryID": 2,
    "posterName": "AmericanGraffiti.jpg"
}, {
    "id": 31,
    "title": "An American in Paris",
    "description": "Once a struggling painter, opportunistic American artist Jerry Mulligan (Gene Kelly) now lives in the City of Light, enjoying the patronage of a well-heeled, amorous American gallery owner (Nina Foch) -- and swiftly falling for a willowy French street urchin (Leslie Caron). Trouble is, the object of Mulligan's affection also happens to be engaged to a famous French singer (Georges Gu&#x00E9;tary). This tour de force movie musical nabbed seven Oscars.",
    "year": 1951,
    "rating": "NR",
    "directorID": 30,
    "countryID": 2,
    "posterName": "AnAmericaninParis.jpg"
}, {
    "id": 32,
    "title": "The Americanization of Emily",
    "description": "Arthur Hiller helmed this trenchantly funny adaptation of Paddy Chayefsky's script about cynical American Lt. Cmdr. Charlie Madison (James Garner), who wants nothing to do with frontline heroics during the D-Day invasion. But Charlie's carefully laid plans go awry when he falls for British war widow Emily Barham (Julie Andrews), and his commanding officer's mental breakdown leads to Charlie getting selected as the first man to storm Omaha Beach. ",
    "year": 1964,
    "rating": "NR",
    "directorID": 31,
    "countryID": 2,
    "posterName": "TheAmericanizationofEmily.jpg"
}, {
    "id": 33,
    "title": "American Movie",
    "description": "In this documentary that won the Grand Jury Prize at Sundance, director Chris Smith chronicles aspiring filmmaker Mark Borchardt's battle to finish his horror flick Coven despite a lack of just about everything, including money and common sense. Over the course of three years, Smith follows Borchardt's dogged quest, lending encouragement and cash to a motley crew that includes Borchardt's friends, his Uncle Bill and local theater \"talent.\"",
    "year": 1999,
    "rating": "R",
    "directorID": 32,
    "countryID": 2,
    "posterName": "AmericanMovie.jpg"
}, {
    "id": 34,
    "title": "Amores Perros",
    "description": "Alejandro Gonz&#x00E1;lez I&#x00F1;&#x00E1;rritu's internationally acclaimed debut film -- which earned an Oscar nod for Best Foreign Language Film -- recounts three intertwining tales that unfold on the brutal streets of Mexico City. Octavio (Gael Garc&#x00ED;a Bernal) has an obsessive crush on his sister-in-law; Daniel (&#x00C1;lvaro Guerrero) dumps his family for a disturbed supermodel; and El Chivo (Emilio Echevarr&#x00ED;a) cares for a wounded dog while planning an assassination.",
    "year": 2000,
    "rating": "R",
    "directorID": 33,
    "countryID": 9,
    "posterName": "AmoresPerros.jpg"
}, {
    "id": 35,
    "title": "Anastasia",
    "description": "In 1928 Paris, a group of exiled White Russians claims to find Anastasia (Ingrid Bergman, who won a Best Actress Oscar), the only living heir of Czar Nicholas II. The entire Romanoff royal family was executed in 1918, after the Bolsheviks took power. Based on the true story of an infamous hoax in which a woman named Anna Anderson maintained for years (and was believed by many) to be the Russian Crown Princess. Co-stars Yul Brynner.",
    "year": 1956,
    "rating": "NR",
    "directorID": 34,
    "countryID": 2,
    "posterName": "Anastasia.jpg"
}, {
    "id": 36,
    "title": "Anatomy of a Murder",
    "description": "Nominated for seven Oscars, this legal thriller profiles the attempts of country lawyer Paul Biegler (James Stewart) to exonerate Frederick Manion (Ben Gazzara), who's charged with a local barkeep's murder but claims the victim raped his wife (Lee Remick). Employing a temporary insanity defense, Biegler tries to outmaneuver slick celebrity prosecutor Claude Dancer (George C. Scott) but discovers there's more to the case than meets the eye.",
    "year": 1959,
    "rating": "NR",
    "directorID": 35,
    "countryID": 2,
    "posterName": "AnatomyofaMurder.jpg"
}, {
    "id": 37,
    "title": "The Angry Silence",
    "description": "Working man Tom Curtis (Richard Attenborough) is just an average Joe who puts in time at a factory. When his co-worker Travers (Alfred Burke) begins rabble-rousing about conditions at the plant, causing dissension in the ranks, Tom is suspicious of Travers and his methods. After a wildcat strike in which Tom refuses to participate, he's vilified by his fellow workers &#x2026; and even his own wife (Pier Angeli).",
    "year": 1960,
    "rating": "NR",
    "directorID": 36,
    "countryID": 10,
    "posterName": null
}, {
    "id": 38,
    "title": "Anna and the King of Siam",
    "description": "Based on the true story of an English governess who takes a position teaching the King of Siam's children, John Cromwell's lavish production stars Rex Harrison in his screen debut. Recently widowed Anna (Irene Dunne) leaves England for the palace of King Mongkut (Harrison). She clashes with the king despite his instruction to teach the children Western ways, but the two slowly gain a respect for each other that transcends cultural differences.",
    "year": 1946,
    "rating": "NR",
    "directorID": 37,
    "countryID": 2,
    "posterName": "AnnaandtheKingofSiam.jpg"
}, {
    "id": 39,
    "title": "Annie Hall",
    "description": "Woody Allen's iconic romantic comedy won four Oscars, including Best Picture and Best Actress, for its portrayal of the relationship between neurotic writer Alvy Singer (Allen) and quirky aspiring singer Annie Hall (Diane Keaton). Allen's snappy, pop culture-infused dialogue and Keaton's gender-bending fashion sense influenced comedy and style for many years to come. Shelley Duvall, Carol Kane and Christopher Walken also star. ",
    "year": 1977,
    "rating": "PG",
    "directorID": 38,
    "countryID": 2,
    "posterName": "AnnieHall.jpg"
}, {
    "id": 40,
    "title": "The Apartment",
    "description": "C.C. Baxter (Jack Lemmon) has his future mapped out -- all he needs to do is cozy up to the top feeders in the corporate food chain. But his fast track to the executive suite gets short-circuited when he falls for one of the bosses' girlfriends. The Apartment features top-notch performances from Lemmon and Shirley MacLaine and was nominated for 10 Academy Awards, winning five, including Best Picture.",
    "year": 1960,
    "rating": "NR",
    "directorID": 39,
    "countryID": 2,
    "posterName": "TheApartment.jpg"
}, {
    "id": 41,
    "title": "Apocalypse Now",
    "description": "",
    "year": 1979,
    "rating": "",
    "directorID": 40,
    "countryID": 2,
    "posterName": "ApocalypseNow.jpg"
}, {
    "id": 42,
    "title": "Apollo 13",
    "description": "Technical troubles scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell (Tom Hanks) and his crew in director Ron Howard's chronicle of this true-life story, which turns a failed journey into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy. Kevin Bacon, Bill Paxton, Gary Sinise and Ed Harris also star.",
    "year": 1995,
    "rating": "PG",
    "directorID": 41,
    "countryID": 2,
    "posterName": "Apollo13.jpg"
}, {
    "id": 43,
    "title": "The Apostle",
    "description": "When charismatic but troubled Pentecostal preacher Euliss \"Sonny\" Dewey (Robert Duvall) discovers that his wife (Farrah Fawcett) is having an affair, he promptly puts the other man in a coma and flees his home state of Texas for Louisiana. Once there, he takes on a new name, renovates an old church and brings new life to a congregation. Written and directed by Duvall, the film also earned an Oscar nod for Duvall's complex, captivating performance.",
    "year": 1997,
    "rating": "PG-13",
    "directorID": 42,
    "countryID": 2,
    "posterName": "TheApostle.jpg"
}, {
    "id": 44,
    "title": "L'Argent",
    "description": "This timeless drama by filmmaker Robert Bresson examines the heights and depths of humanity and the transformative power of redemption. Deliveryman Yvon (Christian Patey) has his mettle tested when he loses his job and then gets arrested for passing counterfeit cash. Unbeknownst to him, two boys are behind the fake bill. No one believes Yvon is innocent, however, and soon, fighting for justice feels futile. Can he hang onto his morals?",
    "year": 1983,
    "rating": "NR",
    "directorID": 43,
    "countryID": 1,
    "posterName": "L'Argent.jpg"
}, {
    "id": 45,
    "title": "Ashes and Diamonds",
    "description": "Polish actor Zbigniew Cybulski stars as Maciek Chelmicki, a young Resistance fighter at a crossroads: He must decide between living a life of crime or opening his heart and soul to the woman he loves. Directed by Andrzej Wajda, this is the third film in his series about World War II, set in small-town Poland as it's being engulfed by two opposing forces -- one that supports Communism and one that's fighting it to the bitter end. ",
    "year": 1958,
    "rating": "NR",
    "directorID": 44,
    "countryID": 12,
    "posterName": "AshesandDiamonds.jpg"
}, {
    "id": 46,
    "title": "Ashes and Diamonds",
    "description": "This is the last film in the trilogy that began Andrzej Wajda's career as a director. Preceding this wartime drama are Pokolenie (1955) and Kanal (1957). Once again, Wajda presents a strong anti-war statement, this time in the personae of two men who are given orders on the last day of World War II in Poland to murder a leading communist. The orders come from the part of the resistance that opposes the new communist regime. One of Wajda's favorite performers and a friend, Zbigniew Cybulski, plays the man who eventually pulls the trigger and kills the communist leader -- and the results are not what he expected. In 1959, Popiol I Diament won in competition at the British Academy Awards and at the Venice Film Festival.",
    "year": 1958,
    "rating": null,
    "directorID": 44,
    "countryID": 12,
    "posterName": "AshesandDiamonds.jpg"
}, {
    "id": 47,
    "title": "The Asphalt Jungle",
    "description": "Nominated for four Academy Awards and long considered a noir classic, John Huston's heist film follows a band of criminal masterminds (Sam Jaffe, Sterling Hayden and Louis Calhern) as they carry out a million-dollar jewelry-store burglary that will have them set for life. Snatching the loot is easy, but their greed soon leads to double crosses and murder. The film features an early appearance by Marilyn Monroe as a sexy moll.  ",
    "year": 1950,
    "rating": "NR",
    "directorID": 8,
    "countryID": 2,
    "posterName": "TheAsphaltJungle.jpg"
}, {
    "id": 48,
    "title": "L'Atalante",
    "description": "Na&#x00EF;ve village girl Juliette (Dita Parlo) wants to see the world, so she marries Jean (Jean Daste), the captain of the river barge <i>L'Atalante</i>. But their marriage is plagued by conflict early on, especially with the appearance of a handsome traveling entertainer (Gilles Margaritis). Juliette is enthralled with his stories of Paris. Will she choose the Paris lights over her life with Jean? Jean Vigo directs this romantic classic.",
    "year": 1934,
    "rating": "NR",
    "directorID": 45,
    "countryID": 1,
    "posterName": "L'Atalante.jpg"
}, {
    "id": 49,
    "title": "Atlantic City",
    "description": "Longtime low-level mobster Lou (Burt Lancaster) is fading and past his prime -- much like the decaying city in which he lives. He meets and falls for a sexy casino employee named Sally (Susan Sarandon), who needs his help -- and Lou surprises himself by rising to the occasion. Director Louis Malle's richly textured, atmospheric drama was nominated for multiple Oscars and earned numerous critics' awards.",
    "year": 1981,
    "rating": "R",
    "directorID": 46,
    "countryID": 3,
    "posterName": "AtlanticCity.jpg"
}, {
    "id": 50,
    "title": "Au Revoir Les Enfants",
    "description": "As World War II rages on, two students at a boarding school -- the French-Catholic Julien Quintin (Gaspard Manesse) and the Jewish Jean Bonnet (Raphael Fejto) -- form an unlikely friendship in director Louis Malle's powerfully moving drama based on events from his own life. Although the boys begin as adversaries, they soon find common ground, especially when it becomes clear that Jean is merely trying to survive the tyranny of the Nazis.",
    "year": 1988,
    "rating": "PG",
    "directorID": 46,
    "countryID": 1,
    "posterName": "AuRevoirLesEnfants.jpg"
}, {
    "id": 51,
    "title": "L'Avventura",
    "description": "Italian superstar Monica Vitti intrigues as a rich woman vacationing on a resort island in the Mediterranean who goes on a search for a missing friend, an investigation that evolves into a search for love and the meaning of life. As the breakthrough film for Michelangelo Antonioni -- the man who would go on to direct Blow-Up -- this art-house classic was discussed and debated by critics the world over in 1960 and won the Jury Prize at Cannes.",
    "year": 1961,
    "rating": "NR",
    "directorID": 47,
    "countryID": 1,
    "posterName": "L'Avventura.jpg"
}, {
    "id": 52,
    "title": "The Awful Truth",
    "description": "This captivating screwball comedy stars Cary Grant and Irene Dunne as Jerry and Lucy Warriner, a married couple who mistakenly suspect each other of infidelity and file for divorce -- but then go to ridiculous lengths to make each other jealous. Ralph Bellamy is hilarious as Dunne's new suitor, Grant and Dunne have rarely been better, and a scene-stealing pooch provides some hearty laughs. Leo McCarey won an Oscar for his sprightly direction.",
    "year": 1937,
    "rating": "NR",
    "directorID": 48,
    "countryID": 2,
    "posterName": "TheAwfulTruth.jpg"
}, {
    "id": 53,
    "title": "Babette's Feast",
    "description": "Philippa (Hanne Stensgaard) and Martina (Vibeke Hastrup ) turn down a chance to leave their Danish town, instead staying to care for their pastor father and his small church. Thirty-five years later, a French woman (St&#x00E9;phane Audran) seeks refuge, and Philippa and Martina (now Bodil Kjer and Birgitte Federspie) take her in. The feast the woman prepares in gratitude is eclipsed only by her secret in director Gabriel Axel's Oscar-winning drama.",
    "year": 1987,
    "rating": "G",
    "directorID": 49,
    "countryID": 13,
    "posterName": "Babette'sFeast.jpg"
}, {
    "id": 54,
    "title": "Baby Doll",
    "description": "Written by Tennessee Williams, this black comedy tells the story of cotton gin owner Archie (Karl Malden) and his sexy teenage wife (Carroll Baker), who won't consummate the marriage until she turns 20. When Archie battles a rival (Eli Wallach), he could lose his business -- and his bride. Baker earned an Oscar nod, and director Elia Kazan won a Golden Globe for his steamy and, at the time of its release, controversial film.",
    "year": 1956,
    "rating": "R",
    "directorID": 27,
    "countryID": 2,
    "posterName": "BabyDoll.jpg"
}, {
    "id": 55,
    "title": "Back to the Future",
    "description": "In this classic sci-fi adventure from director Robert Zemeckis, eccentric inventor Doc Brown (Christopher Lloyd) turns a DeLorean into a time machine that inadvertently sends his young friend, Marty McFly (Michael J. Fox), 30 years into the past. While stuck in the 1950s, Marty disrupts his parents' destiny and risks throwing the time-space continuum completely out of whack. The only way back to 1985 now is to get mom and dad to pucker up.",
    "year": 1985,
    "rating": "PG",
    "directorID": 50,
    "countryID": 2,
    "posterName": "BacktotheFuture.jpg"
}, {
    "id": 56,
    "title": "The Bad and the Beautiful",
    "description": "Charismatic but ruthless film producer Jonathan Shields (Kirk Douglas) needs a blockbuster after producing three consecutive flops and falling out of favor with the studio. To help him make a comeback, he appeals to three Hollywood heavyweights -- a director (Barry Sullivan), an actress (Lana Turner) and a writer (Dick Powell) -- who owe their success to Shields. Unfortunately, they all hate his guts and have vowed never to work for him again. ",
    "year": 1953,
    "rating": "NR",
    "directorID": 30,
    "countryID": 2,
    "posterName": "TheBadandtheBeautiful.jpg"
}, {
    "id": 57,
    "title": "Bad Day at Black Rock",
    "description": "When John J. Macreedy (Spencer Tracy) steps off the train at the backwater hamlet of Black Rock, he inadvertently opens a Pandora's box of fear and suspicion. He's there to deliver a military award for heroism to a man whose son died earning the medal in World War II. But the town harbors an ugly secret -- and will go to any lengths to keep it in director John Sturges's taut drama. Robert Ryan, Anne Francis, Ernest Borgnine and Lee Marvin co-star. ",
    "year": 1955,
    "rating": "NR",
    "directorID": 51,
    "countryID": 2,
    "posterName": "BadDayatBlackRock.jpg"
}, {
    "id": 58,
    "title": "Badlands",
    "description": "Young garbageman Kit Carruthers (Martin Sheen) and his girlfriend, Holly (Sissy Spacek), kill Holly's father in South Dakota and hit the road on the run from the law. Writer-director Terrence Malick's script (for his feature film debut), based on real murders committed by a couple in 1958, does not judge its characters as they make their way to the Badlands of Montana, leaving a trail of senseless and random murders in their wake.",
    "year": 1973,
    "rating": "PG",
    "directorID": 52,
    "countryID": 2,
    "posterName": "Badlands.jpg"
}, {
    "id": 59,
    "title": "The Baker's Wife",
    "description": "",
    "year": 1940,
    "rating": "",
    "directorID": null,
    "countryID": 1,
    "posterName": "TheBaker'sWife.jpg"
}, {
    "id": 60,
    "title": "Ball of Fire",
    "description": "Gary Cooper plays a serious but lovable English professor working with his colleagues on a dictionary of American slang. When a red-hot nightclub singer (Barbara Stanwyck) on the run from the mob takes refuge in their house, she also finds a place in their hearts. But where there's a ball of fire there's bound to be trouble, and before they know it, the professor and his cohorts are learning a lot about language -- and life. Howard Hawks directs.",
    "year": 1942,
    "rating": "NR",
    "directorID": 53,
    "countryID": 2,
    "posterName": "BallofFire.jpg"
}, {
    "id": 61,
    "title": "The Ballad of Cable Hogue",
    "description": "Abandoned in the desert, prospector Cable Hogue survives his ordeal when he discovers a freshwater spring. Transforming the oasis into a much needed pit stop on the local stagecoach route, the resourceful Hogue sits back to wait for his double-crossing former partners. Jason Robards shines in the title role of this lighthearted Western, a film characterized more by picaresque comedy than by director Sam Peckinpah's signature violence. ",
    "year": 1970,
    "rating": "R",
    "directorID": 54,
    "countryID": 2,
    "posterName": "TheBalladofCableHogue.jpg"
}, {
    "id": 62,
    "title": "Bambi",
    "description": "Disney's golden age of animation is revived with this digital restoration of Bambi, the tale of a wide-eyed fawn who experiences nature's wonders, braves the dangers of the forest and grows to buckhood with help from his friends. Animators restored the film's original hand-rendered animation, bringing beloved characters like Thumper the Rabbit and Flower the Skunk to life, in this special edition that also features a remixed soundtrack.",
    "year": 1942,
    "rating": "G",
    "directorID": 55,
    "countryID": 2,
    "posterName": "Bambi.jpg"
}, {
    "id": 63,
    "title": "The Band Wagon",
    "description": "Washed-up movie star Tony Hunter (Fred Astaire) tries to revive his career on Broadway in this classic musical comedy. Hunter and his talented cohorts encounter all kinds of problems as they try to bring \"Faust\" to the stage. Musical numbers include \"That's Entertainment\" and \"Dancing in the Dark.\" Cyd Charisse, Oscar Levant, Nanette Fabray and Jack Buchanan also star. Extras include commentary by Liza Minnelli and Michael Feinstein. ",
    "year": 1953,
    "rating": "NR",
    "directorID": 30,
    "countryID": 2,
    "posterName": "TheBandWagon.jpg"
}, {
    "id": 64,
    "title": "Bang the Drum Slowly",
    "description": "Bruce Pearson (Robert De Niro) is a dedicated baseball player who's hiding a secret: He has Hodgkin's disease. His only confidante is the team's star pitcher, Henry Wiggin (Michael Moriarty), who covers for him as he faces not only a waning season but a slowly fading life. Vincent Gardenia received an Academy Award nomination for his role as the team's coach in this tearjerker based on Mark Harris's 1950s novel.",
    "year": 1973,
    "rating": "PG",
    "directorID": 56,
    "countryID": 2,
    "posterName": "BangtheDrumSlowly.jpg"
}, {
    "id": 65,
    "title": "The Bank Dick",
    "description": "",
    "year": 1940,
    "rating": "",
    "directorID": 57,
    "countryID": 2,
    "posterName": "TheBankDick.jpg"
}, {
    "id": 66,
    "title": "Barfly",
    "description": "Writer Charles Bukowski's autobiographical account follows the besotted adventures of skid-row writer Henry (Mickey Rourke), who begins a turbulent yet caring relationship with fellow barfly Wanda (Faye Dunaway) that ignites a rocky romance. Enter a literary editor (Alice Krige) who buys one of Henry's stories and tries to get to know the troubled, intriguing man better, in hopes of saving him from self-destruction.",
    "year": 1987,
    "rating": "R",
    "directorID": 58,
    "countryID": 2,
    "posterName": "Barfly.jpg"
}, {
    "id": 67,
    "title": "Barry Lyndon",
    "description": "Based on William Makepeace Thackeray's novel, this gorgeously painted tale yields a slow-moving portrait of a young Irishman (Ryan O'Neal) who moves up the social ladder through soldiering, spying and a marriage to a wealthy countess (Marisa Berenson). Although this Stanley Kubrick-directed film was a box office flop, it was eventually recognized as a masterpiece, winning four Academy Awards (including Best Cinematography).",
    "year": 1975,
    "rating": "PG",
    "directorID": 59,
    "countryID": 10,
    "posterName": "BarryLyndon.jpg"
}, {
    "id": 68,
    "title": "Barton Fink",
    "description": "Idealistic playwright Barton Fink (John Turturro) believes writing should reveal the hopes, dreams and tragedies of the common man. When Hollywood taps him to write a movie, Fink develops severe writer's block and soon falls victim to a strange sequence of events. Unable to combine his deep-seated ethics with Tinseltown's frivolity, the disillusioned and desperate Fink winds up involved in a murder investigation in this Oscar-nominated dramedy.",
    "year": 1991,
    "rating": "R",
    "directorID": 60,
    "countryID": 2,
    "posterName": "BartonFink.jpg"
}, {
    "id": 69,
    "title": "The Battle of Algiers",
    "description": "One of the most influential films in the history of political cinema, Gillo Pontecorvo's The Battle of Algiers focuses on the events of 1957, a key year in Algeria's struggle for independence from France. Shot in the streets of Algiers in documentary style, the film vividly re-creates the tumultuous Algerian uprising against the occupying French. The violence soon escalates on both sides in this war drama that's still astonishingly relevant.",
    "year": 1965,
    "rating": "UR",
    "directorID": 61,
    "countryID": 14,
    "posterName": "TheBattleofAlgiers.jpg"
}, {
    "id": 70,
    "title": "Le Beau Mariage",
    "description": "",
    "year": 1982,
    "rating": "",
    "directorID": 62,
    "countryID": 1,
    "posterName": "LeBeauMariage.jpg"
}, {
    "id": 71,
    "title": "Beautiful People",
    "description": "Writer/director Jasmin Dizdar follows the lives of everyday Londoners who are doing their best to navigate everyday chaos. From Balkan refugees to unexpected pregnancies, from unwanted boyfriends to unwanted legs, these ordinary people find their lives are inexplicably entwined. The outstanding ensemble cast includes Julian Firth, Danny Nussbaum, Charlotte Coleman, Steve Sweeney, Rosalind Ayres and Edward Jewesbury. ",
    "year": 2000,
    "rating": "R",
    "directorID": 63,
    "countryID": 10,
    "posterName": "BeautifulPeople.jpg"
}, {
    "id": 72,
    "title": "Beauty and the Beast",
    "description": "Lost in the woods, a hapless merchant is captured and held prisoner in the castle of a beastlike man (Jean Marais), who vows to kill the merchant unless he's replaced by one of his daughters. The lovely Belle (Josette Day) gives herself up to save her father. But before long, she finds the beauty hiding inside her grotesque captor in this lyrical masterpiece, the most celebrated film of the French director and poet Jean Cocteau.",
    "year": 1947,
    "rating": "NR",
    "directorID": 64,
    "countryID": 2,
    "posterName": "BeautyandtheBeast.jpg"
}, {
    "id": 73,
    "title": "Beauty and the Beast",
    "description": "Beauty And The Beast is widely considered the best animated Disney feature of the studio's 1980s/1990s renewal of the form. Based on the classic French fairy tale, it tells the story of Belle (voiced by Paige O'Hara), an intelligent young woman scorned by her townspeople for being a bookworm, weary of fighting off the advances of the arrogant Gaston (Richard White), and dreaming of escape. When her father gets lost in the woods and captured by the forbidding Beast (Robby Benson), a once-handsome prince turned into a monster by a witch, Belle goes off to rescue him. Taken with her, the Beast agrees to release Belle's father if she agrees to stay with him forever. Initially repulsed, Belle soon finds much to appreciate in the Beast's hidden, tender nature. The Beast's servants -- a clock (David Ogden Stiers), a teapot (Angela Lansbury), and a candlestick (Jerry Orbach) -- see Belle as their salvation: if the Beast and a woman fall in love before his 21st birthday, he will be free from the curse. The songs are first-class, the tale is told with sincerity but not sentimentality, and the characters of Belle and the Beast, complex individuals who defy stereotyping and change over the course of the story, are more three-dimensional than in most live-action movies. The eye-popping animation is beautifully rendered, and Beauty And The Beast certainly deserves its place amongst Disney's animated classics. In 2002, a special 89-minute edition of the film was released in IMAX theaters with the addition of a newly animated song, \"{&\"Human Again.",
    "year": 1991,
    "rating": null,
    "directorID": 64,
    "countryID": 2,
    "posterName": "BeautyandtheBeast.jpg"
}, {
    "id": 74,
    "title": "Bed and Board",
    "description": "In director Francois Truffaut's fourth film about Antoine Doinel, Antoine (Jean-Pierre Leaud) marries Christine (Claude Jade) and labors away at odd jobs. After learning of his impending fatherhood, Doinel sabotages his new happiness by obsessing over a young Japanese woman (Hiroko Berghauer). Truffaut enlivens Doinel's courtyard apartment with the bustle and business of neighbors and pays homage to comic auteur Jacques Tati.",
    "year": 1971,
    "rating": "NR",
    "directorID": 65,
    "countryID": 1,
    "posterName": "BedandBoard.jpg"
}, {
    "id": 75,
    "title": "Beetlejuice",
    "description": "Thanks to an untimely demise via drowning, a young couple (Alec Baldwin and Geena Davis) end up as poltergeists in their New England farmhouse, where they fail to meet the challenge of scaring away the insufferable new owners, who want to make drastic changes. In desperation, the undead newlyweds turn to an expert frightmeister (Michael Keaton), but he's got a diabolical agenda of his own. This dark comedy classic snagged an Oscar for Best Makeup.",
    "year": 1988,
    "rating": "PG",
    "directorID": 66,
    "countryID": 2,
    "posterName": "Beetlejuice.jpg"
}, {
    "id": 76,
    "title": "Before Night Falls",
    "description": "Spanning several decades, this powerful biopic offers a glimpse into the life of famed Cuban poet and novelist Reinaldo Arenas (Javier Bardem), an artist who was vilified for his homosexuality in Fidel Castro's Cuba. Although Arenas finds success as a writer, he must eventually emigrate to New York City to enjoy unfettered creative freedom. Johnny Depp co-stars in two different roles as a transvestite inmate and as a warden.",
    "year": 2000,
    "rating": "R",
    "directorID": 67,
    "countryID": 2,
    "posterName": "BeforeNightFalls.jpg"
}, {
    "id": 77,
    "title": "Before the Rain",
    "description": "Photographer Aleksandar (Rade Serbedzija) is wracked with guilt for having caused a man's death while covering the war in Bosnia. Now, he intends to leave England and his lover (Katrin Cartlidge) for Macedonia in hopes of making amends in the violently unstable country of his birth. Director Milcho Manchevski explores the circle of violence that pervades the Balkans and the way ethnic bloodshed can spill over into more \"civilized\" countries.",
    "year": 1994,
    "rating": "NR",
    "directorID": 68,
    "countryID": 1,
    "posterName": null
}, {
    "id": 78,
    "title": "Being John Malkovich",
    "description": "When puppeteer Craig Schwartz (John Cusack) discovers a door that's, in fact, a portal into actor John Malkovich's brain, he concocts a plot to sell 15-minute excursions into Malkovich's mind -- and the ultimate head trip -- for $200 a pop. Spike Jonze directs this uncommon dramedy from writer Charlie Kaufman, co-starring Cameron Diaz as Craig's wife, Catherine Keener as his co-worker and Malkovich as himself.",
    "year": 1999,
    "rating": "R",
    "directorID": 4,
    "countryID": 10,
    "posterName": "BeingJohnMalkovich.jpg"
}, {
    "id": 79,
    "title": "Being There",
    "description": "In director Hal Ashby's Oscar-winning satire, illiterate gardener Chance (Peter Sellers) is run over by wealthy Eve (Shirley MacLaine) and suddenly becomes educated gent Chauncey Gardiner, thanks to Eve's misunderstanding of his mumbled introduction. Taken in by Eve's family, Chance simply regurgitates what he's heard on TV -- from gardening instructions to economic predictions -- and Washington's political elite hail him as their next star.",
    "year": 1979,
    "rating": "PG",
    "directorID": 69,
    "countryID": 2,
    "posterName": "BeingThere.jpg"
}, {
    "id": 80,
    "title": "Belle de Jour",
    "description": "Wealthy young newlywed S&#x00E9;verine (Catherine Deneuve) loves her husband (Jean Sorel), but can't bring herself to be intimate with him. So to sate her physical desires, she indulges in erotic daydreams, often blurring the line between reality and fantasy. When that isn't enough, she begins frequenting a classy Parisian brothel, working as a prostitute under an assumed name while remaining celibate within her marriage.",
    "year": 1968,
    "rating": "R",
    "directorID": 9,
    "countryID": 1,
    "posterName": "BelledeJour.jpg"
}, {
    "id": 81,
    "title": "Ben-Hur",
    "description": "Forget Cecil B. DeMille's epic live-action version of Wallace's classic tale of the story of Christ, and instead enjoy this animated take on the long-suffering Jewish hero, Judah Ben-Hur. All the set pieces are here -- from Judah's service as a galley slave to his turn as a champion charioteer in Rome and Jerusalem. But most moving of all is Judah's attempt to provide comfort to Jesus on his way to Calvary. ",
    "year": 1959,
    "rating": "NR",
    "directorID": 70,
    "countryID": 2,
    "posterName": "Ben-Hur.jpg"
}, {
    "id": 82,
    "title": "The Best Years of Our Lives",
    "description": "Winning seven Academy Awards (including Best Picture), this classic drama follows three World War II veterans -- Homer (Harold Russell), Al (Fredric March) and Fred (Dana Andrews)  -- as they return to small-town America and try to come to terms with their experiences. Best Supporting Actor Russell, a real veteran who lost his hands in the war, also won an Honorary Oscar \"for bringing hope and courage to his fellow veterans.\"",
    "year": 1946,
    "rating": "NR",
    "directorID": 70,
    "countryID": 2,
    "posterName": "TheBestYearsofOurLives.jpg"
}, {
    "id": 83,
    "title": "Beverly Hills Cop",
    "description": "Tough-talking Detroit cop Axel Foley (Eddie Murphy) heads to the rarified world of Beverly Hills in his beat-up Chevy Nova to investigate a friend's murder. But soon, he realizes he's stumbled onto something much more complicated. Bungling rookie detective Billy Rosewood (Judge Reinhold) joins the fish-out-of-water Axel and shows him the West Los Angeles ropes in director Martin Brest's Academy Award-nominated action comedy.",
    "year": 1984,
    "rating": "R",
    "directorID": 71,
    "countryID": 2,
    "posterName": "BeverlyHillsCop.jpg"
}, {
    "id": 84,
    "title": "The Bicycle Thief",
    "description": "Widely considered a landmark Italian film, Vittorio De Sica's tale of a man who relies on his bicycle to do his job during Rome's post-World War II depression earned a special Oscar for its devastating power. The same day Antonio (Lamberto Maggiorani) gets his vehicle back from the pawnshop, someone steals it, prompting him to search the city in vain with his young son, Bruno (Enzo Staiola). Increasingly, he confronts a looming desperation.",
    "year": 1949,
    "rating": "NR",
    "directorID": 72,
    "countryID": 7,
    "posterName": "TheBicycleThief.jpg"
}, {
    "id": 85,
    "title": "The Big Chill",
    "description": "After years apart, a group of idealistic former college buddies (William Hurt, Kevin Kline, Glenn Close, JoBeth Williams, Mary Kay Place, Tom Berenger and Jeff Goldblum) who've followed divergent paths as adults reunite at the funeral of one of their own, reconnecting and reminiscing while a soundtrack of 1960s hits plays in the background. The ensemble performance in this Oscar-nominated dramatic comedy reflected the period's baby boomer angst.",
    "year": 1983,
    "rating": "R",
    "directorID": 73,
    "countryID": 2,
    "posterName": "TheBigChill.jpg"
}, {
    "id": 86,
    "title": "The Big Clock",
    "description": "In director John Farrow's noir thriller, crime magazine publisher Earl Janoth (Charles Laughton) tries to pin the murder of his own mistress on the magazine's editor, George Stroud (Ray Milland), after he discovers George coming out of the woman's apartment. Things fall into place as all the signs increasingly point to George as the killer, making it that much easier for Earl to set up the editor to take the fall.",
    "year": 1948,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "TheBigClock.jpg"
}, {
    "id": 87,
    "title": "The Big Deal on Madonna Street",
    "description": "",
    "year": 1960,
    "rating": "",
    "directorID": 74,
    "countryID": 7,
    "posterName": "TheBigDealonMadonnaStreet.jpg"
}, {
    "id": 88,
    "title": "The Big Heat",
    "description": "Years on the force have given a burned-out Hong Kong cop (Waise Lee's) violent nightmares, a serious case of self-loathing and nerve damage in his hand severe enough to prevent him from firing his gun. Yet on the eve of his retirement, he's forced to pick up his weapon when a good friend is brutally murdered by drug-smuggling goons, and the thugs responsible begin slaughtering anyone who gets in their way.",
    "year": 1953,
    "rating": "NR",
    "directorID": 75,
    "countryID": 2,
    "posterName": "TheBigHeat.jpg"
}, {
    "id": 89,
    "title": "Big Night",
    "description": "Despite its superb cuisine, an Italian restaurant run by immigrant brothers Primo (Tony Shalhoub) and Secondo (Stanley Tucci) is on the verge of bankruptcy. But the siblings risk everything to save their bistro when they get the chance to cook up a feast for bandleader Louis Prima. This delectable allegory boasts a perfect ensemble cast that includes Ian Holm, Minnie Driver, Isabella Rossellini and Allison Janney.",
    "year": 1996,
    "rating": "R",
    "directorID": 76,
    "countryID": 2,
    "posterName": "BigNight.jpg"
}, {
    "id": 90,
    "title": "The Big Red One",
    "description": "",
    "year": 1980,
    "rating": "",
    "directorID": 77,
    "countryID": 2,
    "posterName": "TheBigRedOne.jpg"
}, {
    "id": 91,
    "title": "The Big Sky",
    "description": "",
    "year": 1952,
    "rating": "",
    "directorID": 53,
    "countryID": 2,
    "posterName": "TheBigSky.jpg"
}, {
    "id": 92,
    "title": "The Big Sleep",
    "description": "A dangerous blackmailer has targeted the Sternwoods, a wealthy family once tucked away in the safety of their Los Angeles mansion. But while private eye Philip Marlowe (Humphrey Bogart) works on the case, he ends up falling for the clan's fiery daughter (Lauren Bacall). Crackling dialogue and the perfect pairing of Bogart and Bacall make this adaptation of Raymond Chandler's novel a timeless classic. Howard Hawks directs.",
    "year": 1946,
    "rating": "NR",
    "directorID": 53,
    "countryID": 2,
    "posterName": "TheBigSleep.jpg"
}, {
    "id": 93,
    "title": "Billy Liar",
    "description": "In life, Billy Fisher (Tom Courtenay) lives at home in Bradford with his parents and works for an undertaker (Leonard Rossiter). But in our hero's rich imagination, he is a military conqueror, a debonair playboy, a brilliant novelist and more. Problems arise when he gets his fantasies mixed up with reality. John Schlesinger's uproarious classic features a masterful comic turn by Courtenay and a charming debut by the luminous Julie Christie.",
    "year": 1963,
    "rating": "NR",
    "directorID": 78,
    "countryID": 10,
    "posterName": "BillyLiar.jpg"
}, {
    "id": 94,
    "title": "Biloxi Blues",
    "description": "In this film version of Neil Simon's play, Eugene Morris Jerome (Matthew Broderick) is drafted and sent to boot camp in Biloxi, Miss., toward the end of World War II. Eugene instantly butts heads with a terribly off-kilter drill sergeant named Toomey (Christopher Walken), whose contemptuous attitude toward Eugene does little to help the new recruit. Meanwhile, Eugene spends his spare time with a local call girl (Park Overall).",
    "year": 1988,
    "rating": "PG-13",
    "directorID": 79,
    "countryID": 2,
    "posterName": "BiloxiBlues.jpg"
}, {
    "id": 95,
    "title": "The Birds",
    "description": "Chic socialite Melanie Daniels (Tippi Hedren) enjoys a passing flirtation with an eligible attorney (Rod Taylor) in a San Francisco pet shop and, on an impulse, follows him to his hometown bearing a gift of lovebirds. But upon her arrival, the  bird population runs amok. Suddenly, the townsfolk face a massive avian onslaught, with the feathered fiends inexplicably attacking people all over Bodega Bay.",
    "year": 1963,
    "rating": "PG-13",
    "directorID": 80,
    "countryID": 2,
    "posterName": "TheBirds.jpg"
}, {
    "id": 96,
    "title": "Birdy",
    "description": " (Matthew Modine) returns from the war in Vietnam mentally shattered and convinced he's a bird. Confined to a military hospital, he sits in his room day after day in silence, emulating a parakeet. His friend Al (Nicolas Cage), also a Vietnam veteran, visits him in his hospital room every day, determined to bring Birdy back to reality and help him deal with the emotional battle wounds of war.",
    "year": 1984,
    "rating": "R",
    "directorID": 81,
    "countryID": 2,
    "posterName": "Birdy.jpg"
}, {
    "id": 97,
    "title": "Black Narcissus",
    "description": "Secular matters consume five missionary nuns who head to the Himalayas to establish an Anglican school. In the meantime, the quintet's leader (Deborah Kerr) must grapple with the envy of one nun (Kathleen Byron), the bitterness of a man (David Farrar) and the cruelty of the elements. The film received Academy Awards for Best Art Direction and Best Cinematography, in part for its Technicolor innovations.",
    "year": 1947,
    "rating": "NR",
    "directorID": 82,
    "countryID": 10,
    "posterName": "BlackNarcissus.jpg"
}, {
    "id": 98,
    "title": "Black Orpheus",
    "description": "This superb retelling of the Orpheus and Eurydice Greek legend is set against Rio de Janeiro's madness during Carnival. Orpheus (Breno Mello), a trolley car conductor, is engaged to Mira (Lourdes de Oliveira) but in love with Eurydice (Marpessa Dawn). A vengeful Mira and Eurydice's ex-lover, costumed as Death, pursue Orpheus and his new paramour through the feverish Carnival night. Black Orpheus earned an Oscar for Best Foreign Language Film.",
    "year": 1959,
    "rating": "NR",
    "directorID": 83,
    "countryID": 18,
    "posterName": "BlackOrpheus.jpg"
}, {
    "id": 99,
    "title": "Black Robe",
    "description": "In 1634, Jesuit missionary Father Laforgue (Lothaire Bluteau) arrives in the Canadian wilderness to convert the Huron and Algonquin Indians to Catholicism. Although the Algonquin chief (August Schellenberg) offers guidance and friendship, Laforgue doesn't endear himself to the natives. On a journey up the St. Lawrence River, a devastating chain of events causes Laforgue to question his beliefs and forever changes the natives' way of life.",
    "year": 1991,
    "rating": "R",
    "directorID": 84,
    "countryID": 19,
    "posterName": "BlackRobe.jpg"
}, {
    "id": 100,
    "title": "Blazing Saddles",
    "description": "Politically incorrect and relentlessly funny, Mel Brooks's take on Hollywood Westerns follows the tortured trail of freed slave Bart, who's elected sheriff of the racist town of Rock Ridge. He must foil a land-grabbing governor (Brooks) with help from a washed-up, pot-smoking gunslinger (Gene Wilder).",
    "year": 1974,
    "rating": "R",
    "directorID": 85,
    "countryID": 2,
    "posterName": "BlazingSaddles.jpg"
}, {
    "id": 101,
    "title": "Bloody Sunday",
    "description": "On Sunday, Jan. 30, 1972, in the Catholic Bogside district of Derry, Northern Ireland, 13 unarmed civilian demonstrators were shot and killed by members of the British Parachute Regiment. Director Paul Greengrass's documentary-style drama -- nominated for an Independent Spirit Award -- depicts the massacre. The event has been blamed for turning peaceful dissent into two decades of civil war and inspiring thousands of young men to join the IRA.",
    "year": 2002,
    "rating": "R",
    "directorID": 86,
    "countryID": 20,
    "posterName": "BloodySunday.jpg"
}, {
    "id": 102,
    "title": "Blow-Up",
    "description": "",
    "year": 1966,
    "rating": "",
    "directorID": 47,
    "countryID": 10,
    "posterName": "Blow-Up.jpg"
}, {
    "id": 103,
    "title": "Blue Collar",
    "description": "",
    "year": 1978,
    "rating": "",
    "directorID": 7,
    "countryID": 2,
    "posterName": "BlueCollar.jpg"
}, {
    "id": 104,
    "title": "Blue Velvet",
    "description": "An innocent man (Kyle MacLachlan) gets mixed up in a small-town murder mystery involving a kinky nightclub chanteuse (Isabella Rossellini) and a kidnapper (Dennis Hopper) with a penchant for snorting helium in this moodily surreal mystery from writer-director David Lynch. One of the most critically acclaimed movies of the 1980s, the film inspired a generation of independent filmmakers by taking a dark look at the lives of everyday Americans. ",
    "year": 1986,
    "rating": "R",
    "directorID": 87,
    "countryID": 2,
    "posterName": "BlueVelvet.jpg"
}, {
    "id": 105,
    "title": "Bob & Carol & Ted & Alice",
    "description": "Paul Mazursky's 1969 classic puts two couples and their relationships under the unforgiving lens of society's microscope in this unflinching examination of marriage. After one liberal group therapy session, Bob (Robert Culp) and his wife, Carol (Natalie Wood), are convinced they're open-minded enough to embrace a no-guilt approach to fidelity. But can they convince their best friends, Ted (Elliott Gould) and Alice (Dyan Cannon), to do the same?",
    "year": 1969,
    "rating": "R",
    "directorID": 88,
    "countryID": 2,
    "posterName": "Bob&Carol&Ted&Alice.jpg"
}, {
    "id": 106,
    "title": "Bob le Flambeur",
    "description": "In Jean-Pierre Melville's intelligent drama, Bob (Roger Duchesne) is a compulsive gambler with a deep well of compassion. He's a father figure to street kids Paolo (Daniel Cauchy) and Anne (Isabelle Corey), and he cares for them as if they were his own. When he runs out of money, the three hatch a plan to rob a Deauville casino. Can they pull off the ultimate heist, or has Bob finally run out of luck?",
    "year": 1955,
    "rating": "PG",
    "directorID": 89,
    "countryID": 1,
    "posterName": "BobleFlambeur.jpg"
}, {
    "id": 107,
    "title": "Body Heat",
    "description": "In a sizzling-hot Florida town, attorney Ned Racine (William Hurt) becomes dangerously involved with the sultry Matty Walker (Kathleen Turner) -- and promptly schemes for a way to get her wealthy, much-older husband out of the picture. Ned's knowledge of legal matters may enable <i>both</i> conspirators to escape scot-free -- and Matty is craftier than anyone ever dreamed. Lawrence Kasdan directs this throwback to the early days of film noir.",
    "year": 1981,
    "rating": "R",
    "directorID": 73,
    "countryID": 2,
    "posterName": "BodyHeat.jpg"
}, {
    "id": 108,
    "title": "Bonnie and Clyde",
    "description": "Serial bank robbers, sometime lovers and folkloric heroes Bonnie Parker (Faye Dunaway) and Clyde Barrow (Warren Beatty) barrel across Depression-ravaged America on a shooting spree that ends in a deadly rain of bullets and tragedy. Directed by Arthur Penn, this stylish and sexy film shattered the mold when it came to crime pictures, layering comedy onto mayhem and youthful criminality. Gene Wilder makes his big-screen debut.",
    "year": 1967,
    "rating": "R",
    "directorID": 16,
    "countryID": 2,
    "posterName": "BonnieandClyde.jpg"
}, {
    "id": 109,
    "title": "Boogie Nights",
    "description": "Director Paul Thomas Anderson's epic about the adult film industry stars Mark Wahlberg as a nightclub busboy who transforms himself into porn king Dirk Diggler and ultimately becomes intoxicated by success, cocaine and lofty aspirations. Set in the 1970s, the film features Oscar-nominated supporting performances by Burt Reynolds as skin-flick auteur Jack Horner and Julianne Moore as a veteran porn icon with maternal instincts.",
    "year": 1997,
    "rating": "R",
    "directorID": 90,
    "countryID": 2,
    "posterName": "BoogieNights.jpg"
}, {
    "id": 110,
    "title": "Born on the Fourth of July",
    "description": "Tom Cruise stars in an Oscar-nominated turn as U.S. Marine Ron Kovic, who returns home from the Vietnam War paralyzed from the chest down. After months of hellish rehabilitation, he finds renewed purpose protesting the war he once proudly fought. The film -- based on Kovic's autobiography of the same name -- earned Oliver Stone an Academy Award for Best Director, and also stars Kyra Sedgwick, Tom Berenger and Frank Whaley.",
    "year": 1989,
    "rating": "R",
    "directorID": 91,
    "countryID": 2,
    "posterName": "BornontheFourthofJuly.jpg"
}, {
    "id": 111,
    "title": "Born Yesterday",
    "description": "Boorish business tycoon Harry Brock (Broderick Crawford) fears that ditsy fianc&#x00E9;e Billie Dawn (Judy Holliday) will prove an embarrassment in the presence of politicos he wants to influence, so he hires a reporter (William Holden) to tutor the ostensibly brainless blonde in the political and social graces. Brock gets more than he bargained for, however, when the journalist transforms Billie into the backroom dealmaker's most formidable foe.",
    "year": 1950,
    "rating": "NR",
    "directorID": 3,
    "countryID": 2,
    "posterName": "BornYesterday.jpg"
}, {
    "id": 112,
    "title": "Le Boucher",
    "description": "",
    "year": 1970,
    "rating": "",
    "directorID": 92,
    "countryID": 1,
    "posterName": "LeBoucher.jpg"
}, {
    "id": 113,
    "title": "Bound for Glory",
    "description": "Frustrated sign painter Woodie Guthrie (David Carradine) leaves his family in Depression-era Texas and heads to California. Work is scarce and hope is even harder to find. But a socially conscious radio performer (Ronny Cox) helps Guthrie bring his music to the masses and inspire generations of Americans. Based on the folk singer's autobiography, the film earned Academy Awards for its lush cinematography and faithful score. ",
    "year": 1976,
    "rating": "PG",
    "directorID": 69,
    "countryID": 2,
    "posterName": "BoundforGlory.jpg"
}, {
    "id": 114,
    "title": "Boys Don't Cry",
    "description": "Based on actual events, director Kimberly Peirce's powerful, often harrowing drama stars Hilary Swank (in an Oscar-winning performance) as Brandon Teena, a transgender young man searching for love and acceptance in a small Midwestern town. But even as he forges a deep connection with local beauty Lana (Chlo&#x00EB; Sevigny), the prejudices of the community threaten to doom the fledgling romance.",
    "year": 1999,
    "rating": "R",
    "directorID": 93,
    "countryID": 2,
    "posterName": "BoysDon'tCry.jpg"
}, {
    "id": 115,
    "title": "Boyz N the Hood",
    "description": "South Central Los Angeles high school student Tre Styles (Cuba Gooding Jr.) struggles to stay straight in a community polluted by drugs, violence and racism, and his cynical, devoted father (Laurence Fishburne) will accept nothing but the best from him. Writer-director John Singleton's dramatic debut effort earned two Academy Award nominations (for Best Director and Best Writing) and launched the film careers of Gooding and Ice Cube.",
    "year": 1991,
    "rating": "R",
    "directorID": 94,
    "countryID": 2,
    "posterName": "BoyzNtheHood.jpg"
}, {
    "id": 116,
    "title": "Brazil",
    "description": "Part social commentary, part outrageous fantasy, Terry Gilliam's black comedy set in an Orwellian future stars Jonathan Pryce as a daydreaming civil servant who, through one bureaucratic error after another, is mistaken for an enemy of the state. By turns grimly disturbing and darkly hilarious, the wildly inventive, visually arresting Oscar-nominated satire co-stars Katherine Helmond and Robert De Niro as a renegade repairman.",
    "year": 1985,
    "rating": "R",
    "directorID": 95,
    "countryID": 10,
    "posterName": "Brazil.jpg"
}, {
    "id": 117,
    "title": "Bread, Love and Dreams",
    "description": "Vittorio De Sica stars as Antonio Carotenuto, a middle-aged police chief dispatched to a sleepy Italian village. With little else to command his attention, the handsome Antonio quickly falls for Frisky, the town bombshell (Gina Lollobrigida). But Antonio is one of many men vying for Frisky's affections -- including Pietro (Robert Risso), a shy young officer on his squad. Luigi Comencini directs this Oscar-nominated romantic comedy.",
    "year": 1954,
    "rating": "NR",
    "directorID": 96,
    "countryID": 7,
    "posterName": null
}, {
    "id": 118,
    "title": "Breaker Morant",
    "description": "",
    "year": 1980,
    "rating": "",
    "directorID": 84,
    "countryID": 19,
    "posterName": "BreakerMorant.jpg"
}, {
    "id": 119,
    "title": "The Breakfast Club",
    "description": "In writer-director John Hughes's seminal 1980s Brat Pack film, the athlete (Emilio Estevez), the brain (Anthony Michael Hall), the criminal (Judd Nelson), the princess (Molly Ringwald) and the basket case (Ally Sheedy) break through the social barriers of high school during Saturday detention. The disparate group clashes at first but begin to bond as they reveal their feelings and find a common enemy in their bully principal (Paul Gleason).",
    "year": 1985,
    "rating": "R",
    "directorID": 97,
    "countryID": 2,
    "posterName": "TheBreakfastClub.jpg"
}, {
    "id": 120,
    "title": "Breaking Away",
    "description": "After graduating from high school, Dave Stohler (Dennis Christopher) dreams of becoming a champion bicyclist. Posing as an exchange student to mask his working-class roots, he frustrates his parents (Paul Dooley and Barbara Barrie) and charms a local college girl (Robyn Douglass). Peter Yates's Oscar-winning coming-of-age drama culminates when Dave gets a chance to leave his past behind and race against the Italian riders he worships.",
    "year": 1979,
    "rating": "PG",
    "directorID": 98,
    "countryID": 2,
    "posterName": "BreakingAway.jpg"
}, {
    "id": 121,
    "title": "Breaking the Waves",
    "description": "The revolutionary Dogma 95 school of filmmaking washed up on American shores with this intense European drama starring Emily Watson as Bess, a na&#x00EF;ve Scotswoman who's convinced that God will heal her paralyzed husband (Stellan Skarsg&#x00E5;rd) if she has sex with other men. Director Lars von Trier shot the film using only available light, handheld cameras and no musical score; the result is a stunning, nakedly emotional film.",
    "year": 1996,
    "rating": "R",
    "directorID": 99,
    "countryID": 13,
    "posterName": "BreakingtheWaves.jpg"
}, {
    "id": 122,
    "title": "Breathless",
    "description": "Jesse (Richard Gere) is a two-bit car thief who's running from the law after murdering a cop in this sexy remake of the 1961 French thriller. As Jesse attempts to flee the country and start a new life, he meets a stunning French college girl (Valerie Kaprisky) in Las Vegas and convinces her to join him in his dash for the Mexican border. Jesse thinks he's finally found the good life, but he quickly realizes he can't escape the past. ",
    "year": 1961,
    "rating": "R",
    "directorID": 100,
    "countryID": 1,
    "posterName": "Breathless.jpg"
}, {
    "id": 123,
    "title": "The Bride Wore Black",
    "description": "Legendary director Fran&#x00E7;ois Truffaut crafted this interpretation of William Irish's suspense-filled novel. Julie Kohler (Jeanne Moreau) is a woman whose revenge skills are tested when her fianc&#x00E9; is brutally murdered by five men. Stoic and focused, Julie decides to track down all five culprits and engineer their demise. Truffaut's Golden Globe-nominated thriller is accompanied by composer Bernard Herrmann's menacing musical score.",
    "year": 1968,
    "rating": "NR",
    "directorID": 65,
    "countryID": 1,
    "posterName": "TheBrideWoreBlack.jpg"
}, {
    "id": 124,
    "title": "The Bridge on the River Kwai",
    "description": "Director David Lean's sweeping epic -- best known for a whistling work theme that became legendary -- is set in a World War II-era Japanese prison camp where British POWs are forced to construct a railway bridge as a morale-building exercise. Yet the real battle of wills is between a \"play by the rules\" British colonel (Alec Guinness) who's dedicated to the project and his American rival (William Holden), who vows to destroy it.",
    "year": 1957,
    "rating": "PG",
    "directorID": 101,
    "countryID": 2,
    "posterName": "TheBridgeontheRiverKwai.jpg"
}, {
    "id": 125,
    "title": "Brief Encounter",
    "description": "In this film based on a Noel Coward play, director David Lean explores the thrill and pain of an illicit romance in 1945 Britain. From a chance meeting on a train platform, a middle-aged doctor (Trevor Howard) and a suburban housewife (Celia Johnson) enter into a quiet yet passionate love affair, knowing there's no possibility for a lasting relationship. The two meet every Thursday at a small caf&#x00E9; at the station to play out their doomed romance.",
    "year": 1946,
    "rating": "NR",
    "directorID": 101,
    "countryID": 10,
    "posterName": "BriefEncounter.jpg"
}, {
    "id": 126,
    "title": "A Brief History of Time",
    "description": "Directed by esteemed documentarian Errol Morris (The Thin Blue Line), this engrossing film focuses on the life and work of world-famous cosmologist Stephen Hawking, who possesses a brilliant mind despite suffering near total paralysis from ALS. Based on his best-selling book, the film focuses partly on his theories and partly on his daily life and interviews with friends and family. The film won the Grand Jury Prize at the Sundance Film Festival.",
    "year": 1992,
    "rating": "NR",
    "directorID": 102,
    "countryID": 10,
    "posterName": "ABriefHistoryofTime.jpg"
}, {
    "id": 127,
    "title": "Bringing Up Baby",
    "description": "Love runs wild for a hapless scientist and an unstoppable heiress in Howard Hawks's classic screwball comedy that ranks high on the American Film Institute's list of the funniest Hollywood films ever made. With her eye on paleontologist David (Cary Grant), heiress Susan (Katharine Hepburn) lures him to her home. But the hilarity begins when Susan's dog steals David's prize dinosaur bone and her pet leopard, Baby, is mistaken for a zoo escapee.",
    "year": 1938,
    "rating": "NR",
    "directorID": 53,
    "countryID": 2,
    "posterName": "BringingUpBaby.jpg"
}, {
    "id": 128,
    "title": "Broadcast News",
    "description": "In James L. Brooks's Oscar-nominated romantic comedy, three ambitious workaholics are set loose in a network TV newsroom, where their professional and personal lives become hopelessly cross-wired. Anchorman Tom (William Hurt) is smooth, handsome and a bit dumb; Jane (Holly Hunter) is his driven, brilliant producer; and Aaron (Albert Brooks) is a seasoned, uncharismatic reporter who can't stand Tom's instant success on-camera or with Jane. ",
    "year": 1987,
    "rating": "R",
    "directorID": 103,
    "countryID": 2,
    "posterName": "BroadcastNews.jpg"
}, {
    "id": 129,
    "title": "Brother's Keeper",
    "description": "Although she quit the police force years ago, Lucinda Pond (Jeanne Tripplehorn) reluctantly returns to assist with a reopened, unsolved serial killer case she had worked on in the past. Following the killer's clues, Lucinda is soon shocked to learn that the murderer is her own brother. Delving deeper into the past, she enlists the aid of an ex-boyfriend (Leland Orser) as she tries to find her brother before he kills again.",
    "year": 1992,
    "rating": "R",
    "directorID": 104,
    "countryID": 2,
    "posterName": "Brother'sKeeper.jpg"
}, {
    "id": 130,
    "title": "The Buddy Holly Story",
    "description": "Oscar nominee Gary Busey does his own singing in this chronicle of the meteoric rise and untimely death of singer-songwriter and rock 'n' roll pioneer Buddy Holly. This biopic (which won an Oscar for Best Adaptation Score) covers Holly's beginnings in Lubbock, Texas, his first hit singles \"Peggy Sue\" and \"That'll Be the Day,\" his marriage and his tumultuous relationship with his backing band, The Crickets.",
    "year": 1978,
    "rating": "PG",
    "directorID": 105,
    "countryID": 2,
    "posterName": "TheBuddyHollyStory.jpg"
}, {
    "id": 131,
    "title": "Bull Durham",
    "description": "The perennially pitiful Durham Bulls ink pitching phenom \"Nuke\" LaLoosh (Tim Robbins), a gifted but undisciplined rookie, in hopes that he'll usher the team to victory. But it's up to seasoned bush-league catcher \"Crash\" Davis (Kevin Costner) to keep him in line. Meanwhile, a winsome groupie (Susan Sarandon) who confers sexual favors on a new player each season chooses Nuke as this year's beneficiary. The problem is, she's more attracted to Crash.",
    "year": 1988,
    "rating": "R",
    "directorID": 106,
    "countryID": 2,
    "posterName": "BullDurham.jpg"
}, {
    "id": 132,
    "title": "Bullitt",
    "description": "Frank Bullitt (Steve McQueen, who serves as the prototype for every movie cop who refuses to play by the book) must babysit a gangster for 48 hours. But when hit men snuff the witness, Bullitt won't be stopped in his quest for vengeance. This classic 1960s thriller earned immortality in part for a memorable 100-mph car-chase sequence that saw two automobiles bottom out their shock absorbers roaring through San Francisco's hills.",
    "year": 1968,
    "rating": "PG",
    "directorID": 98,
    "countryID": 2,
    "posterName": "Bullitt.jpg"
}, {
    "id": 133,
    "title": "Bus Stop",
    "description": "Na&#x00EF;ve young rodeo rider Bo (Don Murray) falls in love with Phoenix-based caf&#x00E9; singer Cherie (Marilyn Monroe), whom he meets on a bus. His intentions are honorable, but his temper and jealous streak are too much for her. When she tries to run away, Bo finds her and forces her to board the bus to his Montana home. When the bus stops at Grace's Diner, their fellow passengers learn that the road ahead is blocked and that Cherie is being kidnapped.",
    "year": 1956,
    "rating": "NR",
    "directorID": 107,
    "countryID": 2,
    "posterName": "BusStop.jpg"
}, {
    "id": 134,
    "title": "Butch Cassidy and the Sundance Kid",
    "description": "Legendary outlaws Butch Cassidy (Paul Newman) and the Sundance Kid (Robert Redford) display their gifts for perfect comedic timing and charisma as they pull off heist after heist in this Academy Award-winning film from director George Roy Hill. To evade a relentless posse, the boys flee to Bolivia, thinking they'll find easier pickings there. But trouble finds the charming desperadoes wherever they go, prompting yet another run.",
    "year": 1969,
    "rating": "PG",
    "directorID": 108,
    "countryID": 2,
    "posterName": "ButchCassidyandtheSundanceKid.jpg"
}, {
    "id": 135,
    "title": "The Butcher Boy",
    "description": "Francie Brady (Eamonn Owens) is an overimaginative boy whose dire home life turns his harmless fantasies into murderous delusions. When his abusive father (Stephen Rea) dies, and his suicidal mother is institutionalized, Francie acts out in homicidal fashion. Disturbing and surreal, director Neil Jordan's adaptation of Patrick McCabe's novel is notable for, among other things, casting controversial singer Sin&#x00E9;ad O'Connor as the Virgin Mary.",
    "year": 1998,
    "rating": "R",
    "directorID": 109,
    "countryID": 20,
    "posterName": "TheButcherBoy.jpg"
}, {
    "id": 136,
    "title": "Bye Bye Brasil",
    "description": "",
    "year": 1980,
    "rating": "",
    "directorID": 110,
    "countryID": 18,
    "posterName": "ByeByeBrasil.jpg"
}, {
    "id": 137,
    "title": "The Earrings of Madame De...",
    "description": "When General Andre de's (Charles Boyer) wife, Louisa (Danielle Darrieux), decides to secretly sell the diamond earrings he gave her on their wedding day to pay off a troubling debt, she inadvertently sets off a chain of events that results in a whirlwind affair with an Italian baron (Vittorio De Sica). Based on the writings of Louise de Vilmorin, this beautifully crafted drama is considered legendary filmmaker Max Ophuls's greatest work.  ",
    "year": 1954,
    "rating": "NR",
    "directorID": 111,
    "countryID": 1,
    "posterName": null
}, {
    "id": 138,
    "title": "Cabaret",
    "description": "A British scribe (Michael York) and his comrades -- including a flamboyant American nightclub entertainer named Sally Bowles (Liza Minnelli) -- chronicle the debauchery and turbulence of prewar Berlin in director Bob Fosse's big-screen adaptation of a musical classic. Existing in a morally ambiguous void, the characters doggedly maintain their facades as the world outside the cabaret gears for war.",
    "year": 1972,
    "rating": "PG",
    "directorID": 112,
    "countryID": 8,
    "posterName": "Cabaret.jpg"
}, {
    "id": 139,
    "title": "The Caine Mutiny",
    "description": "Captain Queeg: madman or misunderstood taskmaster? That's the dilemma facing the first officer (Van Johnson) of the U.S.S. Caine when its stern new captain (Humphrey Bogart) drives the crew to the brink of mutiny. Part sea-going adventure, part courtroom drama, The Caine Mutiny is a tale that manages to be both thrilling and thought-provoking. Bogart shines in one of his last roles.",
    "year": 1954,
    "rating": "NR",
    "directorID": 113,
    "countryID": 2,
    "posterName": "TheCaineMutiny.jpg"
}, {
    "id": 140,
    "title": "California Suite",
    "description": "A quartet of intertwining vignettes chronicles the misadventures of four sets of guests who converge on a posh Beverly Hills hotel on the eve of the Academy Awards. Neil Simon's episodic script profiles a divorced couple in a bitter custody fight; an Academy Award-nominated English actress in town for the Oscars with her gay hubby; a pair of dueling docs; and a man feverishly attempting to explain to his wife when she finds a chippy in his bed.",
    "year": 1978,
    "rating": "PG",
    "directorID": 114,
    "countryID": 2,
    "posterName": "CaliforniaSuite.jpg"
}, {
    "id": 141,
    "title": "Calle 54",
    "description": "Director Fernando Trueba -- a staunch fan of Latin jazz -- gathers his favorite performers from around the world in a recording studio on Manhattan's 54th street and films them as they jam individually and collectively.",
    "year": 2000,
    "rating": "G",
    "directorID": 115,
    "countryID": 1,
    "posterName": "Calle54.jpg"
}, {
    "id": 142,
    "title": "Camelot",
    "description": "In this adaptation of the popular Lerner and Loewe Broadway musical, England's King Arthur (Richard Harris) forms the legendary Knights of the Round Table and marries the fair Guenevere (Vanessa Redgrave). But a plot cooked up by Arthur's illegitimate son Mordred (David Hemmings) to gain control of the throne by pushing together the queen and the much-loved Sir Lancelot (Franco Nero) threatens to topple Arthur's regime.",
    "year": 1967,
    "rating": "G",
    "directorID": 107,
    "countryID": 2,
    "posterName": "Camelot.jpg"
}, {
    "id": 143,
    "title": "Camille",
    "description": "In this late-1930s adaptation of the Alexandre Dumas novel, Greta Garbo shines in the titular role of Camille, a dying courtesan who falls in love with a young nobleman (Robert Taylor) and heroically sacrifices her happiness to prove her love. George Cukor directed this definitive version of the story, which has seen many film adaptations. Co-stars Lionel Barrymore and a villainous Henry Daniell offer strong supporting performances.",
    "year": 1937,
    "rating": "NR",
    "directorID": 3,
    "countryID": 2,
    "posterName": "Camille.jpg"
}, {
    "id": 144,
    "title": "Captains Courageous",
    "description": "Based on a novel by Rudyard Kipling, this classic adventure tale stars Spencer Tracy in an Oscar-winning performance as Manuel, an old salt who fishes spoiled, rich brat Harvey Cheyne (Freddie Bartholomew) out of the drink. When the vessel's skipper (Lionel Barrymore) puts Harvey to work, the boy chafes at the idea. But crusty Manuel takes the lad under his wing and teaches Harvey invaluable life lessons through patience, forgiveness and resolve.",
    "year": 1937,
    "rating": "NR",
    "directorID": 116,
    "countryID": 2,
    "posterName": "CaptainsCourageous.jpg"
}, {
    "id": 145,
    "title": "Carmen Jones",
    "description": "After the beautiful but troublemaking Carmen Jones (Dorothy Dandridge) sets her sights on military pilot-in-training Joe (Harry Belafonte), he leaves his girl, deserts the Army and ultimately kills a man, prompting the couple to flee from justice. But soon, the tragic events they've set in motion come full circle. Otto Preminger directs this Golden Globe-winning adaptation of the stage musical, which in turn is based on Georges Bizet's opera \"Carmen.\"",
    "year": 1954,
    "rating": "NR",
    "directorID": 35,
    "countryID": 2,
    "posterName": "CarmenJones.jpg"
}, {
    "id": 146,
    "title": "Carnal Knowledge",
    "description": "Mike Nichols directs a sterling cast in this trailblazing film, which chronicles the sexual mores and escapades of two college pals -- loathsome misogynist Jonathan (Jack Nicholson) and shy, neurotic Sandy (Art Garfunkel) -- over two decades. Jonathan and Sandy embody a laundry list of emotional dysfunction as they move from one relationship to the next. Candice Bergen, Rita Moreno and Oscar-nominated Ann-Margret co-star as the women in their orbit.",
    "year": 1971,
    "rating": "R",
    "directorID": 79,
    "countryID": 3,
    "posterName": "CarnalKnowledge.jpg"
}, {
    "id": 147,
    "title": "Casablanca",
    "description": "In this Oscar-winning classic, American expat Rick Blaine (Humphrey Bogart) plays host to gamblers, thieves and refugees at his Moroccan nightclub during World War II ... but he never expected Ilsa (Ingrid Bergman) - the woman who broke his heart -- to walk through that door. Ilsa hopes that with Rick's help, she and her fugitive husband (Paul Henreid) can escape to America. But the spark that brought the lovers together still burns brightly.",
    "year": 1942,
    "rating": "PG",
    "directorID": 6,
    "countryID": 2,
    "posterName": "Casablanca.jpg"
}, {
    "id": 148,
    "title": "Cat on a Hot Tin Roof",
    "description": "This 1984 production has Jessica Lange and Tommy Lee Jones taking on Tennessee Williams's much-admired play, with Lange as the seductive but troubled Maggie and Jones as the distant and aptly named Brick. The two have convened with relatives at the home of Big Daddy, Brick's father, who's at death's door. With so much at stake, tempers flare and doubts long buried begin to surface, perhaps never to be banished again.",
    "year": 1958,
    "rating": "NR",
    "directorID": 117,
    "countryID": 2,
    "posterName": "CatonaHotTinRoof.jpg"
}, {
    "id": 149,
    "title": "Catch-22",
    "description": "Capt. Yossarian (Alan Arkin) tries to escape the travesties of World War II by convincing his Air Force commanders that he's crazy. Hilarity ensues -- but so does reality as he watches his close friends (Martin Sheen and Art Garfunkel) die in the ridiculousness of war. Mike Nichols directs this cinematic adaptation of Joseph Heller's scathing black comedy about a small group of flyers in the Mediterranean in 1944.",
    "year": 1970,
    "rating": "R",
    "directorID": 79,
    "countryID": 2,
    "posterName": "Catch-22.jpg"
}, {
    "id": 150,
    "title": "Cavalcade",
    "description": "Clive Brook and Diana Wynyard star under Frank Lloyd's Oscar-winning direction in this nostalgic adaptation of Noel Coward's play. The film follows two English families through love, loss and change during the turbulent period of 1899-1933. From the Boer War through Queen Victoria's death, World War I and the Depression, the upper-class Marryots and working-class Bridges never lose hope. The film also won the Best Picture Oscar.",
    "year": 1933,
    "rating": "NR",
    "directorID": 118,
    "countryID": 2,
    "posterName": "Cavalcade.jpg"
}, {
    "id": 151,
    "title": "The Celebration",
    "description": "Director Thomas Vinterberg's winner of the Jury Prize at the Cannes Film Festival follows a Danish family as they gather for the 60th birthday of the family's patriarch, Helge (Henning Moritzen). But the celebration takes a dark turn following a shocking accusation. All three of Helge's children are present at the party, where it will be revealed quite publicly that son Christian (Ulrich Thomsen) has an axe to grind with the guest of honor.",
    "year": 1998,
    "rating": "R",
    "directorID": 119,
    "countryID": 13,
    "posterName": "TheCelebration.jpg"
}, {
    "id": 152,
    "title": "La Cérémonie",
    "description": "",
    "year": 1996,
    "rating": "",
    "directorID": 92,
    "countryID": 1,
    "posterName": "LaCérémonie.jpg"
}, {
    "id": 153,
    "title": "Chan Is Missing",
    "description": "Two San Francisco taxi drivers -- Jo (Wood Moy) and his glib nephew, Steve (Marc Hayashi) -- take to Chinatown's streets searching for Chan Hung, an intermediary who's vanished with the cash the cabbies gave him to obtain their medallion. Along the way, their odyssey leads them through a world of global politics and domestic disputes. Director Wayne Wang's quirky excursion offers insight into the cultural conflicts confronting Chinese-Americans.",
    "year": 1982,
    "rating": "NR",
    "directorID": 120,
    "countryID": 2,
    "posterName": "ChanIsMissing.jpg"
}, {
    "id": 154,
    "title": "Chariots of Fire",
    "description": "Two very different runners -- hotshot Jewish Cambridge scholar Harold Abrahams (Ben Cross) and rigid Presbyterian missionary Eric Liddell (Ian Charleson) -- compete for the British team in the 1924 Olympics, facing intense pressure and complex personal tests of faith. Hugh Hudson directs this edifying 1981 Best Picture Oscar winner, which is based on a true story. Ian Holm co-stars as Abrahams's mentor, Sam Mussabini.",
    "year": 1981,
    "rating": "PG",
    "directorID": 121,
    "countryID": 10,
    "posterName": "ChariotsofFire.jpg"
}, {
    "id": 155,
    "title": "Charley Varrick",
    "description": "After burglarizing a small-town bank, petty crook Charley Varrick (Walter Matthau) and his motley crew become targets of the mob. Expecting a small score to divide among them, they're shocked to discover a huge sum of money. Once they realize the cash belongs to the mob, Charley and his gang must concoct a plan -- fast! -- to throw the wise guys off their trail, or it's curtains for all of them. Joe Don Baker and Sheree North co-star.",
    "year": 1973,
    "rating": "PG",
    "directorID": 122,
    "countryID": 2,
    "posterName": "CharleyVarrick.jpg"
}, {
    "id": 156,
    "title": "Chicago",
    "description": "Roxie Hart (Ren&#x00E9;e Zellweger) hungers for stardom but ends up in the slammer, where superstar Velma Kelly (Catherine Zeta-Jones) is doing time for shooting her cheating husband, in this Best Picture winner based on the hit Broadway musical of the same name. When Velma's lawyer, notorious Billy Flynn (Richard Gere), makes Roxie a tabloid sensation, he sets up a singing, dancing catfight between the all-too-willing rivals.",
    "year": 2002,
    "rating": "PG-13",
    "directorID": 123,
    "countryID": 2,
    "posterName": "Chicago.jpg"
}, {
    "id": 157,
    "title": "Chicken Run",
    "description": "Greedy farm owner Mrs. Tweedy (voiced by Miranda Richardson) runs her 1950s Yorkshire poultry ranch like a prisoner-of-war camp, pushing the resident chickens ever closer to unrest, in this stop-motion adventure from Aardman Animations. Head chicken Ginger (Julia Sawalha) plots to free the birds from the farm, which will soon morph into a chicken-pot-pie factory. But after several failed attempts, she asks a dashing rooster (Mel Gibson) for help.",
    "year": 2000,
    "rating": "PG",
    "directorID": 124,
    "countryID": 1,
    "posterName": "ChickenRun.jpg"
}, {
    "id": 158,
    "title": "La Chienne",
    "description": "",
    "year": 1931,
    "rating": "",
    "directorID": 125,
    "countryID": 1,
    "posterName": null
}, {
    "id": 159,
    "title": "Chinatown",
    "description": "With a suspicious, porcelain-skinned femme fatale (Faye Dunaway) bankrolling his snooping, private eye J.J. Gittes (Jack Nicholson) uncovers intricate dirty dealings in the Los Angeles waterworks and gets his nose slashed for his trouble. Meanwhile, his financier harbors a nasty family secret. Director Roman Polanski reimagines 1930s Los Angeles with an onionlike story that reveals itself one complex layer at a time in this classic neonoir.",
    "year": 1974,
    "rating": "R",
    "directorID": 126,
    "countryID": 2,
    "posterName": "Chinatown.jpg"
}, {
    "id": 160,
    "title": "Chloë in the Afternoon",
    "description": "",
    "year": 1972,
    "rating": "",
    "directorID": 62,
    "countryID": 1,
    "posterName": "ChloëintheAfternoon.jpg"
}, {
    "id": 161,
    "title": "Chocolat",
    "description": "Blown in by the north wind, an iconoclastic single mother (Oscar nominee Juliette Binoche) and her young daughter move into a peaceful French village and open an uncommon chocolate shop during the height of Lent -- directly across the street from a church. At first, the shop's rich, sensuous desserts scandalize the town. But the villagers (including Judi Dench, Lena Olin and Johnny Depp) soon learn to savor the sweetness.",
    "year": 1988,
    "rating": "PG-13",
    "directorID": 127,
    "countryID": 1,
    "posterName": "Chocolat.jpg"
}, {
    "id": 162,
    "title": "The Cider House Rules",
    "description": "A surrogate son and prot&#x00E9;g&#x00E9; to a kindly physician (Michael Caine) who runs an orphanage in rural Maine, itchy Homer Wells (Tobey Maguire) sets off wide-eyed to see the world -- but cold reality soon intrudes on his youthful idealism and moral certitude. Directed by Lasse Hallstr&#x00F6;m, this earnest coming-of-age drama netted Oscars for John's Irving's screenplay (which he adapted from his 1985 novel) and for Caine's impressive supporting turn.",
    "year": 1999,
    "rating": "PG-13",
    "directorID": 128,
    "countryID": 2,
    "posterName": "TheCiderHouseRules.jpg"
}, {
    "id": 163,
    "title": "The Citadel",
    "description": "",
    "year": 1938,
    "rating": "",
    "directorID": 129,
    "countryID": 10,
    "posterName": "TheCitadel.jpg"
}, {
    "id": 164,
    "title": "Citizen Kane",
    "description": "Orson Welles reinvented movies at the age of 26 with this audacious biography of newspaper baron Charles Foster Kane, which, in essence, was a thinly veiled portrait of publishing magnate William Randolph Hearst. Welles's complex and technically stunning film chronicles Kane's rise from poverty to become one of America's most influential men -- and it's considered one of the best movies ever made.",
    "year": 1941,
    "rating": "PG",
    "directorID": 130,
    "countryID": 2,
    "posterName": "CitizenKane.jpg"
}, {
    "id": 165,
    "title": "Claire's Knee",
    "description": "Part of Eric Rohmer's \"Six Moral Tales\" series, this French film tells the story of Jerome (Jean-Claude Brialy), a cultural attach&#x00E9; enjoying his last holiday before getting married, and his peculiar fetish with a teenage girl. Jerome grows obsessed with Claire but fights his urges by permitting himself the singular pleasure of touching her knee. Rohmer likes his erotica spiced with talky foreplay, and Claire's Knee is no exception.",
    "year": 1971,
    "rating": "NR",
    "directorID": 62,
    "countryID": 1,
    "posterName": "Claire'sKnee.jpg"
}, {
    "id": 166,
    "title": "The Clockmaker",
    "description": "Michel Descombes (Philippe Noiret) is a quiet, unassuming watchmaker who learns from the police that his son Bernard (Sylvain Rougerie) is the primary suspect in a murder case. Realizing he knows very little about his son, Michel sets about investigating Bernard's life to learn what makes him tick. This cinematic thriller based on Georges Simenon's novel was a feature debut for director Bertrand Tavernier.",
    "year": 1973,
    "rating": "NR",
    "directorID": 131,
    "countryID": 1,
    "posterName": "TheClockmaker.jpg"
}, {
    "id": 167,
    "title": "A Clockwork Orange",
    "description": "In this Stanley Kubrick classic based on Anthony Burgess's novel, teenage miscreant Alex DeLarge (Malcolm McDowell) wanders aimlessly amid a bleak, futuristic urban landscape, drinking drugged milk and listening to Beethoven with his fellow \"droogs.\" But he also spends his time stealing, raping and beating innocent people in nihilistic orgies of violence, all in an attempt to get his nightly kicks.",
    "year": 1971,
    "rating": "R",
    "directorID": 59,
    "countryID": 10,
    "posterName": "AClockworkOrange.jpg"
}, {
    "id": 168,
    "title": "Close Encounters of the Third Kind",
    "description": "",
    "year": 1977,
    "rating": "",
    "directorID": 11,
    "countryID": 2,
    "posterName": "CloseEncountersoftheThirdKind.jpg"
}, {
    "id": 169,
    "title": "Close-Up",
    "description": "Blending documentary trial footage with dramatic reenactments, director Abbas Kiarostami depicts the intriguing true story of Hossain Sabzian, a semi-employed Iranian who takes advantage of a family's kindness by claiming to be a famous filmmaker. Starring the actual people involved in this unusual series of events, this fascinating film explores complex themes such as identity, deception and truth.",
    "year": 1990,
    "rating": "NR",
    "directorID": 132,
    "countryID": 22,
    "posterName": "Close-Up.jpg"
}, {
    "id": 170,
    "title": "Clueless",
    "description": "Director Amy Heckerling's fresh adaptation of Jane Austen's novel <i>Emma</i> follows the misadventures of meddlesome Beverly Hills high schooler Cher (Alicia Silverstone), who gets more than she bargained for when she gives a fashion-challenged student (Brittany Murphy) a makeover. Stacey Dash co-stars as Cher's oh-so-stylish best friend in this witty -- and charming -- send-up of the 90210 lifestyle.",
    "year": 1995,
    "rating": "PG-13",
    "directorID": 133,
    "countryID": 2,
    "posterName": "Clueless.jpg"
}, {
    "id": 171,
    "title": "Coal Miner's Daughter",
    "description": "",
    "year": 1980,
    "rating": "",
    "directorID": 134,
    "countryID": 2,
    "posterName": "CoalMiner'sDaughter.jpg"
}, {
    "id": 172,
    "title": "The Color of Money",
    "description": "The Hustler isn't what he used to be in this continuation of the 1961 film: \"Fast\" Eddie Felson (Oscar-winner Paul Newman) has given up pool for life as a liquor salesman. But then he meets Vincent (Tom Cruise), a cocky natural who makes a cue ball crack like a lightning bolt. Eddie takes Vincent under his wing and on the road, but are teacher and student destined to become competitors? Mary Elizabeth Mastrantonio co-stars.",
    "year": 1986,
    "rating": "R",
    "directorID": 15,
    "countryID": 2,
    "posterName": "TheColorofMoney.jpg"
}, {
    "id": 173,
    "title": "Come Back, Little Sheba",
    "description": "Shirley Booth (in her film debut) took home a Best Actress Oscar for her superb performance as Lola Delaney, a maudlin, slovenly housewife whose world is shaken by her recovering alcoholic husband (Burt Lancaster) and pretty young boarder Marie Buckholder (Terry Moore). Marie's presence and her  curiosity about her childless landlords set the story in motion in this vintage tearjerker also starring Richard Jaeckel.",
    "year": 1952,
    "rating": "NR",
    "directorID": 135,
    "countryID": 17,
    "posterName": "ComeBack,LittleSheba.jpg"
}, {
    "id": 174,
    "title": "Coming Home",
    "description": "While her husband is in Vietnam, Sally Hyde (Jane Fonda) volunteers at a veteran's clinic, where she encounters embittered paraplegic Luke Martin (Jon Voight). Feeling progressively disconnected from her spouse, Sally starts an emotional and physical affair with Luke. When Sally's husband returns, however, the trio must contend with a new reality -- and a country that turned its back on America's servicemen. Fonda and Voight each won acting Oscars.",
    "year": 1978,
    "rating": "R",
    "directorID": 69,
    "countryID": 2,
    "posterName": "ComingHome.jpg"
}, {
    "id": 175,
    "title": "The Conformist",
    "description": "When the government orders him to kill a political refugee, Marcello (Jean-Louis Trintignant) agrees -- even though his target is his college mentor. Hence, he is \"the Conformist,\" a man who will do absolutely anything to belong. Bernardo Bertolucci directs this thought-provoking drama set in 1930s fascist Italy, a visually complex character study for which he was nominated an Academy Award for Best Adapted Screenplay.",
    "year": 1970,
    "rating": "UR",
    "directorID": 136,
    "countryID": 1,
    "posterName": "TheConformist.jpg"
}, {
    "id": 176,
    "title": "The Conquest of Everest",
    "description": "",
    "year": 1953,
    "rating": "",
    "directorID": null,
    "countryID": 17,
    "posterName": null
}, {
    "id": 177,
    "title": "Contempt",
    "description": "Director Jean-Luc Godard's cynical take on the world of filmmaking is a poignant commentary about the sacrificial price of art. Screenwriter Paul Javal (Michel Piccoli) must fight many battles to get his version of Homer's <i>Odyssey</i> to the big screen. He's at odds with his conniving producer (Jack Palance) and his egotistical director (Fritz Lang). What's more, his marriage to his beautiful wife Camille (Brigitte Bardot) is also foundering. ",
    "year": 1964,
    "rating": "NR",
    "directorID": 100,
    "countryID": 1,
    "posterName": "Contempt.jpg"
}, {
    "id": 178,
    "title": "The Conversation",
    "description": "Francis Ford Coppola follows The Godfather with this intimate film about an audio surveillance expert (Gene Hackman) who faces a moral quandary when he suspects that a couple whose conversation he's been hired to surreptitiously record will be murdered. The San Francisco-set film features a tremendous supporting cast, including John Cazale and Teri Garr, and was nominated for three Oscars, including Best Picture and Best Screenplay.",
    "year": 1974,
    "rating": "PG",
    "directorID": 40,
    "countryID": 2,
    "posterName": "TheConversation.jpg"
}, {
    "id": 179,
    "title": "Cool Hand Luke",
    "description": "\"What we have here is a failure to communicate.\" Luke Jackson (Paul Newman) is a man who likes to do things his own way, which leads to a world of hurt when he ends up in a Southern prison camp -- and on the wrong side of its warden (Strother Martin). George Kennedy copped an Oscar as a fellow prisoner who tries to break Luke and later comes to revere him. The cast also includes a young Dennis Hopper, Harry Dean Stanton and Joe Don Baker.",
    "year": 1967,
    "rating": "NR",
    "directorID": 137,
    "countryID": 2,
    "posterName": "CoolHandLuke.jpg"
}, {
    "id": 180,
    "title": "The Count of Monte Cristo",
    "description": "In this beautifully photographed rekindling of the classic Alexandre Dumas story. Edmond Dant&#x00E9;s's (Jim Caviezel) life and plans to marry the beautiful Mercedes (Dagmara Dominczyk) are shattered when his best friend, Fernand (Guy Pearce), deceives him. After spending 13 miserable years in prison, Dant&#x00E9;s escapes with the help of a fellow inmate (Richard Harris) and plots his revenge, cleverly insinuating himself into the French nobility.",
    "year": 1934,
    "rating": "PG-13",
    "directorID": 138,
    "countryID": 17,
    "posterName": "TheCountofMonteCristo.jpg"
}, {
    "id": 181,
    "title": "The Country Girl",
    "description": "Once the toast of Broadway, washed-up thespian Frank Elgin (Bing Crosby) drinks himself into oblivion until red-hot director Bernie Dodd (William Holden) attempts to revive his career. An admirer of Elgin, Dodd begs the actor to sober up for the starring role in a new play. Meanwhile, Elgin's domineering wife, Georgie (Grace Kelly), saps her husband of all confidence. Kelly won an Oscar for her role in this adaptation of Clifford Odet's play. ",
    "year": 1954,
    "rating": "NR",
    "directorID": 139,
    "countryID": 2,
    "posterName": "TheCountryGirl.jpg"
}, {
    "id": 182,
    "title": "The Cousins",
    "description": "",
    "year": 1959,
    "rating": "",
    "directorID": 92,
    "countryID": 1,
    "posterName": null
}, {
    "id": 183,
    "title": "The Cranes Are Flying",
    "description": "",
    "year": 1960,
    "rating": "",
    "directorID": 140,
    "countryID": 5,
    "posterName": "TheCranesAreFlying.jpg"
}, {
    "id": 184,
    "title": "Cries and Whispers",
    "description": "The reunion of three sisters (Harriet Andersson, Ingrid Thulin and Liv Ullman), one of whom is dying, leads to painful revelations and long-suppressed emotions in this drama that would become one of the biggest critical triumphs of Swedish auteur Ingmar Bergman's career. Among the few foreign language films to be nominated for the Best Picture Academy Award, the film also won an Oscar for its moody photography. ",
    "year": 1972,
    "rating": "R",
    "directorID": 141,
    "countryID": 23,
    "posterName": "CriesandWhispers.jpg"
}, {
    "id": 185,
    "title": "Crossfire",
    "description": "Wrapped around a taut whodunit, this groundbreaking, Oscar-nominated film from director Edward Dmytryk explores the topic of anti-Semitism. A jaded homicide detective (Robert Young) must get to the bottom of a savage -- and ostensibly motiveless -- killing, with the chief suspect a pie-eyed soldier who fled the scene of the crime. Army Sgt. Peter Keeley (Robert Mitchum) teams with the gumshoe to flush out the murderer in his ranks.",
    "year": 1947,
    "rating": "NR",
    "directorID": 113,
    "countryID": 17,
    "posterName": "Crossfire.jpg"
}, {
    "id": 186,
    "title": "Crumb",
    "description": "Director Terry Zwigoff spent six years compiling this portrait of the underground cartoonist Robert Crumb, an animation cult hero whose characters Fritz the Cat and Mr. Natural became counterculture icons. Candid interviews with Crumb's friends, family and the artist himself render a compelling profile of a tormented man who transcended a harrowing upbringing. The film won the Grand Jury Prize at the Sundance Film Festival.",
    "year": 1994,
    "rating": "R",
    "directorID": 142,
    "countryID": 2,
    "posterName": "Crumb.jpg"
}, {
    "id": 187,
    "title": "Cry, the Beloved Country",
    "description": "Shot in the aftermath of Nelson Mandela's election, this film adaptation of South African author Alan Paton's novel tells the story of two men -- one black, one white -- who must cope with family tragedy in the apartheid era. Rural minister Stephen Kumalo (James Earl Jones) travels to Johannesburg in search of his troubled son, while white landowner James Jarvis (Richard Harris) comes to the city to attend to his activist son's murder.",
    "year": 1952,
    "rating": "PG-13",
    "directorID": 143,
    "countryID": 10,
    "posterName": "Cry,theBelovedCountry.jpg"
}, {
    "id": 188,
    "title": "The Crying Game",
    "description": "",
    "year": 1992,
    "rating": "",
    "directorID": 109,
    "countryID": 10,
    "posterName": "TheCryingGame.jpg"
}, {
    "id": 189,
    "title": "Damn Yankees",
    "description": "America's favorite pastime meets the bright lights of Broadway in this musical about an ordinary Joe (Tab Hunter) whose deal with the devil (Ray Walston) transforms him into a home run hitter for the Washington Senators -- but Joe must cause his team to lose the pennant. When Joe tries to back out of the deal, the devil sends in sexy Lola (Gwen Verdon), who sings \"Whatever Lola Wants\" as she mambos to Bob Fosse's choreography.",
    "year": 1958,
    "rating": "NR",
    "directorID": 144,
    "countryID": 2,
    "posterName": "DamnYankees.jpg"
}, {
    "id": 190,
    "title": "The Damned",
    "description": "Helmed by legendary director Luchino Visconti, The Damned is an allegorical film that parallels the rise and fall of Hitler's Third Reich. The Essenbeck family runs the German steel industry and attempts to gain favor (and maintain its lucrative contracts) by appeasing the Nazis. But infighting occurs as the elder Essenbeck's children battle for control of the company. Stars Dirk Bogarde, Helmut Berger, Helmut Griem and Ingrid Thulin.",
    "year": 1969,
    "rating": "R",
    "directorID": 145,
    "countryID": 7,
    "posterName": "TheDamned.jpg"
}, {
    "id": 191,
    "title": "Dance with a Stranger",
    "description": "Mike Newell directs this gritty thriller, based on a true story, about the last woman to be executed in England -- brothel hostess and former prostitute Ruth Ellis (Miranda Richardson). When she meets the wealthy and enigmatic David Blakely (Rupert Everett), a poisonous romance leads to a life not of happiness, but one of violence and despair. A public house becomes the scene of Ellis's brutal crime, which is punished by hanging.&#x000D;&#x000A;",
    "year": 1985,
    "rating": "R",
    "directorID": 146,
    "countryID": 10,
    "posterName": "DancewithaStranger.jpg"
}, {
    "id": 192,
    "title": "Dangerous Liaisons",
    "description": "Privileged and bored 18-century French aristocrats Marquise de Merteuil (Glenn Close) and Vicomte de Valmont (John Malkovich) entertain themselves by making a bet focusing on the virginal C&#x00E9;cile de Volanges (Uma Thurman) and the virtuous Madame de Tourvel (Michelle Pfeiffer). Directed by Stephen Frears, this Academy Award-winning adaptation of the acclaimed stage play and novel also stars Swoosie Kurtz.",
    "year": 1988,
    "rating": "R",
    "directorID": 147,
    "countryID": 2,
    "posterName": "DangerousLiaisons.jpg"
}, {
    "id": 193,
    "title": "Daniel",
    "description": "In the 1960s, a decade after his American parents are executed as Soviet spies, New York graduate student Daniel (Timothy Hutton) contacts friends and relatives in an effort to understand his parents' deaths and confirm his belief that they were innocent. Meanwhile, he participates in anti-Vietnam War protests. Sidney Lumet directs this tense drama, based on E.L. Doctorow's best-selling novel. Mandy Patinkin and Ellen Barkin co-star.",
    "year": 1983,
    "rating": "R",
    "directorID": 148,
    "countryID": 2,
    "posterName": null
}, {
    "id": 194,
    "title": "Danton",
    "description": "Acting as a metaphor for revolutionary events unfolding in Poland in the early 1980s, this powerful historical drama from legendary Polish filmmaker Andrzej Wajda follows Danton (G&#x00E9;rard Depardieu) and Robespierre (Wojciech Pszoniak), allies in the French Revolution. They now find themselves engaged on opposite sides of the struggle to control the country's future. Danton earned numerous international awards, including a BAFTA.",
    "year": 1983,
    "rating": "PG",
    "directorID": 44,
    "countryID": 1,
    "posterName": null
}, {
    "id": 195,
    "title": "Dark Eyes",
    "description": "",
    "year": 1987,
    "rating": "",
    "directorID": 149,
    "countryID": 7,
    "posterName": "DarkEyes.jpg"
}, {
    "id": 196,
    "title": "Dark Victory",
    "description": "Fast living comes easy for Long Island socialite Judith Traherne (Bette Davis), who counts throwing lavish soirees, enjoying free-flowing booze and raising thoroughbreds among the many pleasures in her hedonistic existence. But a horse-jumping accident forces her to come to terms with her lifestyle -- and mortality -- when a handsome doctor (George Brent) discovers that Judith suffers from a potentially fatal brain tumor. Humphrey Bogart co-stars.",
    "year": 1939,
    "rating": "NR",
    "directorID": 150,
    "countryID": 2,
    "posterName": "DarkVictory.jpg"
}, {
    "id": 197,
    "title": "Darling",
    "description": "Up-and-coming fashion model Darling (Best Actress Oscar winner Julie Christie) burns with ambition. First, she falls hard for married television interviewer Robert (Dirk Bogarde). Next, Darling meets Miles (Laurence Harvey), who knows all the right people in London's swinging '60s film industry. But he's just another stepping stone as Darling scrambles her way to the top. The trouble is, the pinnacle of success can be deceiving.",
    "year": 1965,
    "rating": "NR",
    "directorID": 78,
    "countryID": 10,
    "posterName": "Darling.jpg"
}, {
    "id": 198,
    "title": "David Copperfield",
    "description": "In the first of producer David O. Selznik's classic literary adaptations, Freddie Bartholomew plays David Copperfield, a young man who finds himself buffeted from household to household after his mother dies. George Cukor directs this Oscar-nominated production, which also stars Basil Rathbone as David's stepfather, W.C. Fields as the ever-in-debt Mr. Micawber, Lionel Barrymore, Frank Lawton as the grown-up David and Maureen O'Sullivan.",
    "year": 1935,
    "rating": "NR",
    "directorID": 3,
    "countryID": 2,
    "posterName": "DavidCopperfield.jpg"
}, {
    "id": 199,
    "title": "David Holtzman's Diary",
    "description": "",
    "year": 1968,
    "rating": "",
    "directorID": 151,
    "countryID": 2,
    "posterName": "DavidHoltzman'sDiary.jpg"
}, {
    "id": 200,
    "title": "Dawn of the Dead",
    "description": "Picking up where Night of the Living Dead left off, this classic horror flick from director George A. Romero begins with an undead army of flesh-eating zombies taking over every major city in the United States. Running for their lives, Peter (Ken Foree), Roger (Scott H. Reiniger), Stephen (David Emge) and Frances (Gaylen Ross) find refuge in a remote shopping mall, only to discover they have to fight a motorcycle gang, too.",
    "year": 1979,
    "rating": "NR",
    "directorID": 152,
    "countryID": 2,
    "posterName": "DawnoftheDead.jpg"
}, {
    "id": 201,
    "title": "Day for Night",
    "description": "Francois Truffaut's lavish dramedy about a film production is a case of life imitating art, with Truffaut playing a director and his most important actor in real life (Jean-Pierre Leaud) portraying Jacqueline Bisset's immature co-star. A thrilling sequence set to music by Georges Delerue celebrates the art of filmmaking as seen from an editor's perspective. It's enough to make you want to shoot your own film!",
    "year": 1973,
    "rating": "PG",
    "directorID": 65,
    "countryID": 1,
    "posterName": "DayforNight.jpg"
}, {
    "id": 202,
    "title": "The Day of the Jackal",
    "description": "A French paramilitary group disgusted with Pres. Charles de Gaulle's decision to free French Algeria plans De Gaulle's assassination in this taut political thriller, based on Frederick Forsyth's novel. To carry out their task, the group hires a British hit man known only as \"The Jackal\" (Edward Fox). But soon the plan is uncovered by French police, who send investigator Lebel (Michel Lonsdale) to sniff out the Jackal's trail.",
    "year": 1973,
    "rating": "PG",
    "directorID": 153,
    "countryID": 1,
    "posterName": "TheDayoftheJackal.jpg"
}, {
    "id": 203,
    "title": "The Day the Earth Stood Still",
    "description": "A humanoid envoy (Michael Rennie) from another world lands in Washington, D.C., with a warning to Earth's people to cease their violent behavior. But panic erupts when a nervous soldier shoots the messenger, and his robot companion tries to destroy the capital. A sci-fi hallmark that offers wry commentary on the political climate of the 1950s, this Golden Globe-winning classic is less concerned with special effects than with its potent message.",
    "year": 1951,
    "rating": "G",
    "directorID": 154,
    "countryID": 2,
    "posterName": "TheDaytheEarthStoodStill.jpg"
}, {
    "id": 204,
    "title": "Days of Heaven",
    "description": "Director Terrence Malick's beautifully shot period piece, which won an Oscar for its cinematography, tells the story of Bill (Richard Gere), an early-1900s Chicago steel-mill worker who flees town after accidentally killing a man. In search of a better life, he moves his girlfriend Abby (Brooke Adams) and younger sister to the wheat fields of Texas. But they run into tragedy when a wealthy farmer (Sam Shepard) falls for Abby.",
    "year": 1978,
    "rating": "PG",
    "directorID": 52,
    "countryID": 2,
    "posterName": "DaysofHeaven.jpg"
}, {
    "id": 205,
    "title": "Days of Wine and Roses",
    "description": "Joe Clay (Jack Lemmon), a San Francisco public relations man who likes to drink, meets secretary Kirsten Arnesen (Lee Remick), who happens to be a teetotaler, and it's a saloon mismatch from the get-go. After a whirlwind courtship and marriage, Kirsten is able to keep pace drinkwise with her husband &#x2026; and it's a downward spiral from there in this searing drama (directed by Blake Edwards) based on a TV drama first aired on \"Playhouse 90.\"",
    "year": 1963,
    "rating": "UR",
    "directorID": 155,
    "countryID": 2,
    "posterName": "DaysofWineandRoses.jpg"
}, {
    "id": 206,
    "title": "The Dead",
    "description": "An all-Irish cast (including Donal McCann, Rachael Dowling and Colm Meaney) lends authenticity and gravitas to director John Huston's final film, an elegiac take on a short story by James Joyce (from <i>The Dubliners</i>). After a convivial holiday dinner party (circa 1904), things begin to unravel when a husband and wife address some prickly issues concerning their marriage. The movie stars Huston's daughter, Anjelica, and was scripted by his son, Tony.",
    "year": 1987,
    "rating": "PG",
    "directorID": 8,
    "countryID": 10,
    "posterName": null
}, {
    "id": 207,
    "title": "Dead Calm",
    "description": "The Ingrams -- John (Sam Neill) and Rae (Nicole Kidman) -- set off for an extended sailing trip after their young son dies tragically in a car crash. When they come across another seafarer (Billy Zane) feverishly paddling away from a sinking schooner, they bring him aboard -- and quickly realize he's a murderous sociopath. Masterfully directed by Phillip Noyce, this violent, psychological thriller helped launch Kidman's film career.",
    "year": 1989,
    "rating": "R",
    "directorID": 156,
    "countryID": 19,
    "posterName": "DeadCalm.jpg"
}, {
    "id": 208,
    "title": "Dead End",
    "description": "Dreading the annual family road trip to Grandmother's house for Christmas, Frank (Ray Wise) and his wife (Lin Shaye) opt for an unfamiliar route through the forest. They'll wish they hadn't when they stop to help a mysterious woman who seems to be holding a dead baby. As the bodies pile up, a hearse with an invisible driver arrives to cart away the victims, and those who survive descend into madness.",
    "year": 1937,
    "rating": "R",
    "directorID": 70,
    "countryID": 2,
    "posterName": "DeadEnd.jpg"
}, {
    "id": 209,
    "title": "Dead Man Walking",
    "description": "Scheduled to be put to death for brutally slaying two teens, Matthew Poncelet (Sean Penn) seeks the aid of activist nun Helen Prejean (Susan Sarandon), a death-penalty opponent. She becomes Matthew's spiritual adviser and tries to halt the execution, even though Matthew's professed innocence is dubious. As the execution date draws ever closer, Sister Helen works to save Matthew's soul by getting him to confess -- and to ask divine forgiveness.",
    "year": 1995,
    "rating": "R",
    "directorID": 157,
    "countryID": 2,
    "posterName": "DeadManWalking.jpg"
}, {
    "id": 210,
    "title": "Dead of Night",
    "description": "Ed Begley Jr., Joan Hackett, Anjanette Comer and Patrick Macnee headline this 1977 anthology of chilling horror stories directed by Hollywood veteran Dan Curtis and penned by author Richard Matheson. In \"Second Chances,\" a man's vintage car transports him back in time; \"Bobby\" finds a mother being visited by her dead son; and \"No Such Thing as a Vampire\" centers on a married couple who discover bite marks on their necks.",
    "year": 1946,
    "rating": "NR",
    "directorID": 158,
    "countryID": 24,
    "posterName": "DeadofNight.jpg"
}, {
    "id": 211,
    "title": "Dead Ringers",
    "description": "Jeremy Irons gives a deftly brilliant performance as twin gynecologists -- yes, that's right -- Elliot and Beverly Mantl, who can't help spiraling into madness and addiction when they meet a pill-popping actress (Genevi&#x00E8;ve Bujold) who hopes to have children. David Cronenberg's script and direction mix high-tech camera work with old-fashioned suspense to create a tangible sense of lunacy and compulsion in this psychological thriller.",
    "year": 1988,
    "rating": "R",
    "directorID": 159,
    "countryID": 2,
    "posterName": "DeadRingers.jpg"
}, {
    "id": 212,
    "title": "Death in Venice",
    "description": "Italian legend Luchino Visconti creates a visually stunning adaptation of the Thomas Mann novella about an older gay man, composer Gustav von Aschenbach (Dirk Bogarde), who goes to Venice to escape past loves and professional failures. All his woes are forgotten when he sees an angelic blond Polish boy whom he follows everywhere (without ever approaching). Soon, his life is transformed in ways he could never have imagined. ",
    "year": 1971,
    "rating": "PG",
    "directorID": 145,
    "countryID": 1,
    "posterName": "DeathinVenice.jpg"
}, {
    "id": 213,
    "title": "Death of a Salesman",
    "description": "Dustin Hoffman copped an Emmy for his first-rate performance as embittered traveling salesman Willy Loman, who's forced to dispense with delusions of success and come to grips with his failed career, encroaching senility and a disintegrating family. This impressive made-for-TV production also stars Kate Reid as Willy's long-suffering spouse, Charles Durning as his caring neighbor and John Malkovich as Willy's indignant, unemployed son Biff.",
    "year": 1951,
    "rating": "NR",
    "directorID": 160,
    "countryID": 2,
    "posterName": null
}, {
    "id": 214,
    "title": "Deep End",
    "description": "",
    "year": 1971,
    "rating": "",
    "directorID": 161,
    "countryID": 2,
    "posterName": null
}, {
    "id": 215,
    "title": "The Deer Hunter",
    "description": "In this Oscar-winning epic from director Michael Cimino, a group of working-class friends decides to enlist in the Army during the Vietnam War and finds it to be hellish chaos -- not the noble venture they imagined. Before they left, Steven (John Savage) married his pregnant girlfriend -- and Michael (Robert De Niro) and Nick (Christopher Walken) were in love with the same woman (Meryl Streep). But all three are different men upon their return.",
    "year": 1978,
    "rating": "R",
    "directorID": 162,
    "countryID": 2,
    "posterName": "TheDeerHunter.jpg"
}, {
    "id": 216,
    "title": "The Defiant Ones",
    "description": "Two escaped convicts -- one black (Sidney Poitier), one white (Tony Curtis) and both shackled in the same pair of handcuffs -- battle the elements and each other as they travel Southern back roads eluding the ever-approaching posse. Produced at the peak of racial disharmony, this story of two men with strong prejudices who find common ground was powerful in its time. Nominated for nine Oscars, the film won for Best Screenplay and Best Cinematography.",
    "year": 1958,
    "rating": "NR",
    "directorID": 163,
    "countryID": 2,
    "posterName": "TheDefiantOnes.jpg"
}, {
    "id": 217,
    "title": "Deliverance",
    "description": "Four suburban friends take a canoeing trip down a Georgia river, but what starts as a lighthearted adventure becomes a voyage into the heart of darkness when redneck locals descend on the foursome and force them to kill or be killed. Jon Voight, Burt Reynolds, Ronny Cox and Ned Beatty star in this terrifying, enthralling, existential action epic that earned three Academy Award nominations: Best Picture, Best Director and Best Editing.",
    "year": 1972,
    "rating": "R",
    "directorID": 164,
    "countryID": 2,
    "posterName": "Deliverance.jpg"
}, {
    "id": 218,
    "title": "Desperately Seeking Susan",
    "description": "Roberta (Rosanna Arquette) seeks vicarious thrills through other people's personal ads. But via a jacket, amnesia and mistaken identity, Roberta comes to believe she's Susan (Madonna), a wild Soho vamp wanted by the mob. Dez (Aidan Quinn) falls for \"Susan\" (Roberta); the real Susan has no idea she has a double; and Roberta's husband, Jim (Mark Blum), is thrown for a loop. Director Susan Seidelman's romantic comedy features tons of cameos.",
    "year": 1985,
    "rating": "PG-13",
    "directorID": 165,
    "countryID": 2,
    "posterName": "DesperatelySeekingSusan.jpg"
}, {
    "id": 219,
    "title": "Destry Rides Again",
    "description": "Jimmy Stewart stars as Tom Destry, a tough lawman who doesn't like guns. And that could pose a problem when a saloon owner and a corrupt mayor plan to rob the local cowpokes blind, with the help of crooked waitress Frenchy (Marlene Dietrich). Dietrich hits a career peak with her rendition of \"See What the Boys in the Back Room Will Have.\" When sparks fly between her and Destry, there's no doubt they'll be riding off happily into the sunset.",
    "year": 1939,
    "rating": "NR",
    "directorID": 166,
    "countryID": 2,
    "posterName": "DestryRidesAgain.jpg"
}, {
    "id": 220,
    "title": "Diabolique",
    "description": "The ailing spouse (V&#x00E9;ra Clouzot) and manhandled mistress (Simone Signoret) of a sadistic boarding school headmaster (Paul Meurisse) plan and execute the man's murder -- but their plan goes haywire when the corpse vanishes. Henri-Georges Clouzot directs his real-life wife in this icy, black-and-white masterwork of homicide and Grand Guignol suspense, which ranked No. 49 on the Bravo network's \"100 Scariest Movie Moments.\"",
    "year": 1955,
    "rating": "NR",
    "directorID": 167,
    "countryID": 1,
    "posterName": "Diabolique.jpg"
}, {
    "id": 221,
    "title": "Dial M for Murder",
    "description": "Director Alfred Hitchcock's masterpiece of double-cross and intrigue stars Ray Milland as former tennis champ Tony Wendice, who concocts a plan to kill his rich but unfaithful wife (Grace Kelly), who's embroiled in a liaison with a writer (Robert Cummings). When Tony's plans go awry, he improvises a second act of deceit, but the entire bloody affair turns out to be far messier than he expected. John Williams plays a sly Scotland Yard inspector.",
    "year": 1954,
    "rating": "PG",
    "directorID": 80,
    "countryID": 2,
    "posterName": "DialMforMurder.jpg"
}, {
    "id": 222,
    "title": "Diary of a Chambermaid",
    "description": "This wicked adaption of the Octave Mirbeau novel is classic Luis Bu&#x00F1;uel. Jeanne Moreau is Celestine, a beautiful Parisian domestic who, upon arrival at her new job in provincial 1930s France, entrenches herself in sexual hypocrisy and scandal with Bu&#x00F1;uel regulars Michel Piccoli (as a philandering husband) and Muni (as his l'amour fou).",
    "year": 1964,
    "rating": "UR",
    "directorID": 9,
    "countryID": 1,
    "posterName": "DiaryofaChambermaid.jpg"
}, {
    "id": 223,
    "title": "Diary of a Country Priest",
    "description": "The priest of Ambricourt (Claude Laydu) is a reserved and dedicated young man whose inability to mesh in social situations causes him to feel isolated from the very population he's supposed to be serving. Adding to his troubles are his health problems, which make him unable to carry out his obligations. Growing ill and ever more confused as to what his life really means, the priest is further distanced from his village and from God.",
    "year": 1950,
    "rating": "NR",
    "directorID": 43,
    "countryID": 1,
    "posterName": "DiaryofaCountryPriest.jpg"
}, {
    "id": 224,
    "title": "Die Hard",
    "description": "NYPD cop John McClane's (Bruce Willis) plan to reconcile with his estranged wife, Holly (Bonnie Bedelia), is thrown for a serious loop when minutes after he arrives at her office, the entire building is overtaken by a group of pitiless terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down. This classic John McTiernan actioner launched Willis into superstardom.",
    "year": 1988,
    "rating": "R",
    "directorID": 168,
    "countryID": 2,
    "posterName": "DieHard.jpg"
}, {
    "id": 225,
    "title": "Diner",
    "description": "In 1959 Baltimore, former school chums facing adulthood find solace at the local diner, where the banter between groom-to-be Eddie (Steve Guttenberg), best man Billy (Tim Daly), womanizer Boogie (Mickey Rourke), married Shrevie (Daniel Stern) and quirky Modell (Paul Reiser) ranges from girls to growing old. Ellen Barkin and Kevin Bacon co-star in writer-director Barry Levinson's debut feature, which received an Oscar nod for Best Screenplay.",
    "year": 1982,
    "rating": "R",
    "directorID": 169,
    "countryID": 2,
    "posterName": "Diner.jpg"
}, {
    "id": 226,
    "title": "Dinner at Eight",
    "description": "Director George Cukor takes Edna Ferber and George S. Kaufman's 1932 stage play and makes it his own in this witty film depicting a wily Park Avenue woman's (Billie Burke) attempts to successfully host a dinner party for members of the British high society. But she seems to have forgotten that the other invitees are almost as important as the guests of honor, and the gathering soon takes a bitingly disastrous but ultimately comic turn. ",
    "year": 1933,
    "rating": "NR",
    "directorID": 3,
    "countryID": 2,
    "posterName": "DinneratEight.jpg"
}, {
    "id": 227,
    "title": "The Dirty Dozen",
    "description": "In this Academy Award-winning World War II action flick from director Robert Aldrich (The Longest Yard), a U.S. Army major (Lee Marvin) is handed a near-impossible assignment: Turn a group of conscripted convicts into a crack fighting unit and then send them on a mission to destroy a villa filled with Nazi brass. The \"volunteers\" include Archer J. Maggott (Telly Savalas), Victor Franko (John Cassavetes) and Vernon L. Pinkley (Donald Sutherland).",
    "year": 1967,
    "rating": "NR",
    "directorID": 170,
    "countryID": 10,
    "posterName": "TheDirtyDozen.jpg"
}, {
    "id": 228,
    "title": "Dirty Harry",
    "description": "When a madman dubbed the \"Scorpio Killer\" terrorizes San Francisco, hard-boiled cop Harry Callahan (Clint Eastwood) -- famous for his take-no-prisoners approach to law enforcement -- is tasked with hunting down the psychopath. Harry eventually collars Scorpio in the process of rescuing a kidnap victim, only to see him walk on technicalities. Now, the maverick detective is determined to nail the maniac himself.",
    "year": 1971,
    "rating": "R",
    "directorID": 122,
    "countryID": 2,
    "posterName": "DirtyHarry.jpg"
}, {
    "id": 229,
    "title": "Dirty Rotten Scoundrels",
    "description": "Frank Oz directs this remake of the 1963 Brando vehicle Bedtime Story, with Steve Martin as Freddy, a small-time con man who butts heads with Lawrence (Michael Caine), a successful European swindler working the Riviera. Hoping to get rid of one another, they make a loser-leaves bet to scam the fortunes of a wealthy heiress (Glenne Headly). Watching Martin do his slapstick shtick is hilarious, and the lush French Riviera backdrop is gorgeous. ",
    "year": 1988,
    "rating": "PG",
    "directorID": 171,
    "countryID": 2,
    "posterName": "DirtyRottenScoundrels.jpg"
}, {
    "id": 230,
    "title": "The Discreet Charm of the Bourgeoisie",
    "description": "In Luis Bu&#x00F1;uel's deliciously satiric, Oscar-winning masterpiece, an upper-class sextet (Fernando Rey, Paul Frankeur, Delphine Seyrig, St&#x00E9;phane Audran, Bulle Ogier and Jean-Pierre Cassel) sits down to dinner but never eats, their attempts repeatedly thwarted by a vaudevillian mixture of events both actual and imagined. Perhaps his greatest film, Bu&#x00F1;uel's absurdist view of the upper class is a timeless satire about consumerism and class privilege.",
    "year": 1972,
    "rating": "PG",
    "directorID": 9,
    "countryID": 1,
    "posterName": "TheDiscreetCharmoftheBourgeoisie.jpg"
}, {
    "id": 231,
    "title": "Disraeli",
    "description": "This fascinating dramatization of the life of Benjamin Disraeli stars George Arliss, who collected an Academy Award as Best Actor for his superb portrayal of the British writer turned wily politician. After a liberal adversary stops Disraeli's attempt to buy the Suez Canal from Egypt in 1874, the prime minister hatches a scheme to keep the Russians from beating the Brits to it. But his plan hits a snag when his financial source comes a cropper.",
    "year": 1929,
    "rating": "NR",
    "directorID": 172,
    "countryID": 17,
    "posterName": "Disraeli.jpg"
}, {
    "id": 232,
    "title": "Distant Thunder",
    "description": "A war veteran suffering from post-traumatic stress syndrome reconciles with his estranged son in this emotionally charged drama. After returning from Vietnam, scarred soldier Mark Lambert (John Lithgow) and his army buddies head into the woods to live a life of self-imposed exile. Fifteen years later, Lambert emerges from the forest to search for his son (Ralph Macchio), but the emotional reunion causes Lambert to relive the horrors of war.",
    "year": 1973,
    "rating": "R",
    "directorID": 173,
    "countryID": 25,
    "posterName": null
}, {
    "id": 233,
    "title": "Diva",
    "description": "When 18-year-old Jules (Frederic Andrei) secretly tapes the concert of a superstar diva who refuses to be recorded, he accidentally winds up with another tape that identifies a top mobster involved in an international sex and drug ring. Suddenly, Jules is being chased through the streets of Paris by blackmailers, hit men and the police. Action, arias and assassins all collide in this romantic thriller directed by Jean-Jacques Beineix.",
    "year": 1982,
    "rating": "R",
    "directorID": 174,
    "countryID": 1,
    "posterName": "Diva.jpg"
}, {
    "id": 234,
    "title": "Divorce-Italian Style",
    "description": "",
    "year": 1962,
    "rating": "",
    "directorID": 175,
    "countryID": 7,
    "posterName": null
}, {
    "id": 235,
    "title": "Do the Right Thing",
    "description": "What begins as an uproarious comedy evolves into a provocative, disquieting drama as director Spike Lee chronicles trivial events that bring festering racial tensions to the surface on a sweltering day in a largely black Brooklyn neighborhood. After a number of minor misunderstandings -- and an effort to boycott the local pizza parlor -- a young man (Bill Nunn) lies dead, the pizzeria lies in ashes, and the racial schism is wider than ever.",
    "year": 1989,
    "rating": "R",
    "directorID": 176,
    "countryID": 2,
    "posterName": "DotheRightThing.jpg"
}, {
    "id": 236,
    "title": "Dr. Jekyll and Mr. Hyde",
    "description": "Robert Louis Stevenson's horror classic comes chillingly to life thanks to John Barrymore's stellar turn as virtuous Dr. Jekyll and demonic Mr. Hyde. After the topic of human duality arises at a dinner party, Jekyll becomes fixated on trying to divide the human psyche's two sides: good and evil. Before you can say \"alter ego,\" Jekyll concocts a potion and morphs into Hyde, who plunges into a life of depravity -- punctuated by murder. ",
    "year": 1932,
    "rating": "NR",
    "directorID": 177,
    "countryID": 2,
    "posterName": "Dr.JekyllandMr.Hyde.jpg"
}, {
    "id": 237,
    "title": "Doctor Zhivago",
    "description": "A young physician (Omar Sharif) and his beautiful mistress (Julie Christie) get swept up in the danger and drama of the Bolshevik Revolution in this Oscar-winning epic based on the classic novel by Nobel Prize-winning author Boris Pasternak. The film earned five Academy Awards in all, including statues for Best Art Direction, Best Cinematography, Best Costume Design, Best Score and Best Screenplay. Alec Guinness and Rod Steiger co-star.",
    "year": 1965,
    "rating": "PG-13",
    "directorID": 101,
    "countryID": 10,
    "posterName": "DoctorZhivago.jpg"
}, {
    "id": 238,
    "title": "La Dolce Vita",
    "description": "Federico Fellini's lush and intoxicating masterpiece, La Dolce Vita, is a meditation on the meaning of life and love and stars Marcello Mastroianni as Marcello, a gossip writer who seeks the fleeting excesses and decadence of life and sex. He sleeps with the beautiful Maddalena (Anouk Aimee), alienating and driving his lover, Emma (Yvonne Furneaux), to attempt suicide. When he meets an elusive actress, Sylvia (Anita Ekberg), he dives deep into the abyss.",
    "year": 1961,
    "rating": "NR",
    "directorID": 25,
    "countryID": 1,
    "posterName": "LaDolceVita.jpg"
}, {
    "id": 239,
    "title": "Donnie Brasco",
    "description": "When FBI agent Joe Pistone (Johnny Depp) goes undercover and becomes \"Donnie Brasco\" to infiltrate the Mob, he dangerously starts to identify more and more strongly with the made men he's charged with taking down. Mike Newell directs this fact-based drama that explores the relationship between the hunter and the hunted -- the mobster (Al Pacino) who grooms Brasco as his prot&#x00E9;g&#x00E9;. Anne Heche and Bruno Kirby co-star.",
    "year": 1997,
    "rating": "UR",
    "directorID": 146,
    "countryID": 2,
    "posterName": "DonnieBrasco.jpg"
}, {
    "id": 240,
    "title": "The Dreamlife of Angels",
    "description": "Optimistic wanderer Isa (&#x00C9;lodie Bouchez) lands a job at a dress factory where she forms a close friendship with cynical rebel Marie (Natacha R&#x00E9;gnier). Soon the two become roommates, but when Marie falls into a passionate affair with a cocky young man, the relationship deteriorates. Bouchez and R&#x00E9;gnier both garnered Best Actress honors at the 1998 Cannes Film Festival for their roles in this powerful drama.",
    "year": 1998,
    "rating": "R",
    "directorID": 178,
    "countryID": 1,
    "posterName": "TheDreamlifeofAngels.jpg"
}, {
    "id": 241,
    "title": "Drowning by Numbers",
    "description": "",
    "year": 1991,
    "rating": "",
    "directorID": 179,
    "countryID": 26,
    "posterName": "DrowningbyNumbers.jpg"
}, {
    "id": 242,
    "title": "The Duellists",
    "description": "D'Hubert (Keith Carradine) and Feraud (Harvey Keitel) are officers in Napoleon's army who challenge each other to a series of bloody duels. In the final clash -- which comes after many years of fighting -- D'Hubert finally bests Feraud, but things don't end there. Better keep your powder dry for the explosive finish! Based on a story by Joseph Conrad, The Duellists marks director Ridley Scott's feature debut.",
    "year": 1978,
    "rating": "PG",
    "directorID": 180,
    "countryID": 10,
    "posterName": "TheDuellists.jpg"
}, {
    "id": 243,
    "title": "East of Eden",
    "description": "In this Korean television drama, payback gets way too personal when babies are switched at birth and \"brothers\" realize they're mortal enemies. One is plotting revenge against his father's killer, and the other is revealed to be the son of the murderer. The coming years bring repercussions as family members figure out their true identities in this series starring Song Seung-heon, Yeon Jung Hoon, Lee Dae-hae, Han Ji-hye and Jin-hie Park.",
    "year": 1955,
    "rating": "",
    "directorID": 27,
    "countryID": 2,
    "posterName": "EastofEden.jpg"
}, {
    "id": 244,
    "title": "Eat Drink Man Woman",
    "description": "Distracted by their complicated love lives and secret ambitions, three adult sisters reluctantly humor their widower father (Sihung Lung) by enduring the elaborate, traditional Taiwanese dinners he insists on having every Sunday. Ang Lee directs this charming tale that humorously examines the clash between modernity and tradition within the contemporary Taiwanese family. Yu-Wen Wang, Chien-lien Wu and Kuei-Mei Yang co-star.",
    "year": 1994,
    "rating": "NR",
    "directorID": 181,
    "countryID": 27,
    "posterName": "EatDrinkManWoman.jpg"
}, {
    "id": 245,
    "title": "Eight Men Out",
    "description": "John Cusack and D.B. Sweeney star as disgruntled Chicago White Sox players who agree to lose the World Series for a big payoff in John Sayles's adaptation of Eliot Asinof's account of the 1919 \"Black Sox\" scandal. Owner Charles Comiskey underpays his players despite their talent, leaving the door open for gambling syndicate head Arnold Rothstein to swoop in. Some players have second thoughts, but it might not be enough to save their careers. ",
    "year": 1988,
    "rating": "PG",
    "directorID": 182,
    "countryID": 2,
    "posterName": "EightMenOut.jpg"
}, {
    "id": 246,
    "title": "The English Patient",
    "description": "Adapted from Michael Ondaatje's acclaimed novel set against the backdrop of World War II, Anthony Mingehlla's Oscar-winning drama stars Ralph Fiennes as a horribly burned pilot who recounts a tale of doomed romance to the nurse tending him (Juliette Binoche). As his story is revealed via flashback, so too are secrets about his identity and the depth of his passion for the woman he loved (Kristin Scott Thomas). Willem Dafoe co-stars.",
    "year": 1996,
    "rating": "R",
    "directorID": 183,
    "countryID": 2,
    "posterName": "TheEnglishPatient.jpg"
}, {
    "id": 247,
    "title": "The Family Game",
    "description": "In this eviscerating send-up of the directionless (and soulless) Japanese middle class of the late 20th century, director Yoshimitsu Morita focuses on one four-member family living in extremely close quarters in a Tokyo high-rise. When the parents hire a tutor to coach their youngest son, the whole family ends up learning some lessons at the hands of his instructor in this biting commentary on a money- and class-obsessed society.",
    "year": 1984,
    "rating": "NR",
    "directorID": 184,
    "countryID": 28,
    "posterName": "TheFamilyGame.jpg"
}, {
    "id": 248,
    "title": "Fanny & Alexander",
    "description": "",
    "year": 1983,
    "rating": "",
    "directorID": 141,
    "countryID": 1,
    "posterName": "Fanny&Alexander.jpg"
}, {
    "id": 249,
    "title": "Farewell, My Concubine",
    "description": "",
    "year": 1993,
    "rating": "",
    "directorID": 185,
    "countryID": 29,
    "posterName": "Farewell,MyConcubine.jpg"
}, {
    "id": 250,
    "title": "Far from Heaven",
    "description": "When she finds her husband (Dennis Quaid) with another man, a Connecticut housewife (Julianne Moore) finds herself dealing with infidelity and the racial tension that epitomized the late 1950s at the advent of the Civil Rights movement in America. As a coping mechanism to deal with the emotional turmoil, she develops an unlikely friendship with her African-American gardener (Dennis Haysbert), who's full of sage wisdom.",
    "year": 2002,
    "rating": "PG-13",
    "directorID": 186,
    "countryID": 2,
    "posterName": "FarfromHeaven.jpg"
}, {
    "id": 251,
    "title": "Fargo",
    "description": "Frances McDormand won an Oscar for her turn as pregnant police chief Marge Gunderson -- a serious sleuth who's sharper than her folksy accent suggests -- in this Coen brothers black comedy that also earned the siblings a nod for Best Screenplay. William H. Macy co-stars as a car dealer who conspires with hotheaded kidnappers (Steve Buscemi and Peter Stormare) to kidnap his wife (Kristin Rudr&#x00FC;d) so he can pocket part of the hefty ransom.",
    "year": 1996,
    "rating": "R",
    "directorID": 60,
    "countryID": 2,
    "posterName": "Fargo.jpg"
}, {
    "id": 252,
    "title": "Fast, Cheap & Out of Control",
    "description": "Filmmaker Errol Morris (The Thin Blue Line) interviews four eccentrics -- a wild animal trainer, a topiary gardener, a robot designer and an expert on the naked mole rat -- to examine the narrow boundary that separates madness from sheer genius. This fascinating documentary combines commentary with old movies, cartoons and stock footage to paint a compelling, kaleidoscopic portrait of these four obsessed individuals.",
    "year": 1997,
    "rating": "PG",
    "directorID": 102,
    "countryID": 2,
    "posterName": "Fast,Cheap&OutofControl.jpg"
}, {
    "id": 253,
    "title": "Fast Runner (Atanarjuat)",
    "description": "",
    "year": 2002,
    "rating": "",
    "directorID": 187,
    "countryID": 3,
    "posterName": "FastRunner(Atanarjuat).jpg"
}, {
    "id": 254,
    "title": "Father of the Bride",
    "description": "In this hilarious update of the much-loved Hollywood classic, Steve Martin turns in a winning performance as George Banks, the befuddled father who has a hard time letting go of his daughter (Kimberly Williams) when she unexpectedly announces her plans to wed. Diane Keaton co-stars as George's level-headed wife, Nina, and Martin Short steals his scenes as an off-the-wall wedding consultant.",
    "year": 1950,
    "rating": "PG",
    "directorID": 30,
    "countryID": 17,
    "posterName": "FatheroftheBride.jpg"
}, {
    "id": 255,
    "title": "La Femme Infidèle",
    "description": "",
    "year": 1969,
    "rating": "",
    "directorID": 92,
    "countryID": 1,
    "posterName": "LaFemmeInfidèle.jpg"
}, {
    "id": 256,
    "title": "La Femme Nikita",
    "description": "Internationally acclaimed director Luc Besson delivers the action-packed story of Nikita (Anne Parillaud), a ruthless street junkie whose killer instincts could make her the perfect weapon, in this French film that was remade as Point of No Return in the U.S. Recruited against her will into a secret government organization, Nikita is broken and transformed into a sexy, sophisticated \"lethal weapon.\"",
    "year": 1991,
    "rating": "R",
    "directorID": 188,
    "countryID": 1,
    "posterName": "LaFemmeNikita.jpg"
}, {
    "id": 257,
    "title": "Fist in His Pocket",
    "description": "",
    "year": 1968,
    "rating": "",
    "directorID": 189,
    "countryID": 7,
    "posterName": "FistinHisPocket.jpg"
}, {
    "id": 258,
    "title": "For Whom the Bell Tolls",
    "description": "Expatriate American schoolteacher Robert Jordan (Gary Cooper) fights alongside Communist insurgents during Spain's civil war in this adaptation of Ernest Hemingway's novel. As he waits to carry out his mission of blowing up a bridge behind enemy lines, Robert falls in love -- with Maria (Ingrid Bergman), a peasant girl who's joined the resistance. Katina Paxinou won an Oscar for her supporting role as the guerillas' gritty doyenne.",
    "year": 1943,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "ForWhomtheBellTolls.jpg"
}, {
    "id": 259,
    "title": "The Fortune Cookie",
    "description": "Walter Matthau won an Oscar for his role as Willie Gingrich, a crooked attorney who foresees a financial windfall when Cleveland Browns star \"Boom Boom\" Jackson (Ron Rich) accidentally levels cameraman Harry Hinkle (Jack Lemmon), Gingrich's brother-in-law. Barely hurt, Hinkle is loath to help Gingrich scam the insurance company until he realizes the money might lure back his ex. But a budding rapport with Jackson begins gnawing at his conscience.",
    "year": 1966,
    "rating": "UR",
    "directorID": 39,
    "countryID": 2,
    "posterName": "TheFortuneCookie.jpg"
}, {
    "id": 260,
    "title": "The 400 Blows",
    "description": "After young Antoine (Jean-Pierre L&#x00E9;aud) runs away, life on the streets of Paris leads to nothing but trouble and guilt in this gritty feature film debut from legendary director Fran&#x00E7;ois Truffaut. Though he turns to petty crime to survive, Antoine's remorse often leads him to try to return things he's stolen -- with disastrous results. The film was nominated for a Best Screenplay Oscar and the Palme d'Or at the Cannes Film Festival.",
    "year": 1959,
    "rating": "NR",
    "directorID": 65,
    "countryID": 1,
    "posterName": "The400Blows.jpg"
}, {
    "id": 261,
    "title": "Friendly Persuasion",
    "description": "Jess and Eliza Birdwell (Gary Cooper and Dorothy McGuire) are devoted Quaker parents in Indiana during the height of the Civil War. The Birdwells' religion opposes violence, but as Confederate forces march closer -- looting and burning as they go -- the community prepares a defense. However, the family's nonviolent stance is tested when their son, Josh (Anthony Perkins), decides he wants to fight for the North.",
    "year": 1956,
    "rating": "NR",
    "directorID": 70,
    "countryID": 2,
    "posterName": "FriendlyPersuasion.jpg"
}, {
    "id": 262,
    "title": "The Fugitive",
    "description": "Wrongly convicted of murdering his wife, Dr. Richard Kimble (Harrison Ford) escapes from custody after a ferocious train accident. But as he tries to find the real killer -- a mysterious one-armed man -- gung-ho U.S. Marshal Samuel Gerard (Tommy Lee Jones) is hot on Kimble's trail. Jones bagged an Oscar for his flinty performance in this classic action-thriller, which features one of the grizzliest train wrecks ever put on celluloid.",
    "year": 1947,
    "rating": "PG-13",
    "directorID": null,
    "countryID": 17,
    "posterName": "TheFugitive.jpg"
}, {
    "id": 263,
    "title": "The Full Monty",
    "description": "This raucous English comedy follows a group of unemployed British steel-mill workers who, broke and bored, devise a fabulous scheme to get off the dole: Become male strippers! Soon they're a sensation with the ladies, who encourage the men to show the \"full monty\" (strip down to the skin). This quirky 1997 sleeper is full of character and great humor.",
    "year": 1997,
    "rating": "R",
    "directorID": 190,
    "countryID": 10,
    "posterName": "TheFullMonty.jpg"
}, {
    "id": 264,
    "title": "Gangs of New York",
    "description": "Amid the savage Irish and Italian rivalry that dominated New York City in the mid-1800s, Amsterdam Vallon (Leonardo DiCaprio) hunts down his father's hateful murderer, Bill \"the Butcher\" Cutting (Daniel Day-Lewis). Along the way, Vallon falls for the charms of a streetwise pickpocket (Cameron Diaz). Director Martin Scorsese's riveting epic -- nominated for 10 Oscars -- also stars Jim Broadbent, Liam Neeson, John C. Reilly and Henry Thomas.",
    "year": 2002,
    "rating": "R",
    "directorID": 15,
    "countryID": 2,
    "posterName": "GangsofNewYork.jpg"
}, {
    "id": 265,
    "title": "A Geisha",
    "description": "",
    "year": 1978,
    "rating": "",
    "directorID": 191,
    "countryID": 28,
    "posterName": "AGeisha.jpg"
}, {
    "id": 266,
    "title": "The General",
    "description": "John Boorman won Best Director at the Cannes Film Festival for this chronicle of Ireland's notorious Robin Hood, Martin Cahill (Brendan Gleeson), who was killed by the Irish Republican Army in 1994. Cahill grows from a scrappy boy into an unremorseful adult with a penchant for stealing from the rich. His lifetime nemesis, police inspector Ned Kenny (John Voight), trails Cahill relentlessly as his robberies become increasingly audacious.",
    "year": 1998,
    "rating": "R",
    "directorID": 164,
    "countryID": 20,
    "posterName": "TheGeneral.jpg"
}, {
    "id": 267,
    "title": "Ghost World",
    "description": "Mopey high schooler Enid (Thora Birch) and her equally disaffected friend Rebecca (Scarlett Johansson) play a prank on a lonely, middle-aged man (Steve Buscemi). But when Enid strikes a connection with their victim, her growing fascination with him begins to test the girls' friendship and future. Directed by Terry Zwigoff (Crumb, Bad Santa), the film is based on the cult graphic novel by Daniel Clowes.",
    "year": 2001,
    "rating": "R",
    "directorID": 142,
    "countryID": 8,
    "posterName": "GhostWorld.jpg"
}, {
    "id": 268,
    "title": "The Gleaners and I",
    "description": "Inspired by Jean-Fran&#x00E7;ois Millet's famous painting \"Les Glaneuses,\" filmmaker Agnes Varda strikes out with just a hand-held digital camera in search of the modern equivalent of Millet's grain field gleaners. She finds her quarry at dumpsters, outdoor markets and roadsides across France. Varda's no-holds-barred documentary about scavengers and recyclers is an insouciant treat from beginning to end, with an unexpectedly obtuse perspective.",
    "year": 2001,
    "rating": "NR",
    "directorID": 192,
    "countryID": 1,
    "posterName": "TheGleanersandI.jpg"
}, {
    "id": 269,
    "title": "The Godfather Part II",
    "description": "",
    "year": 1974,
    "rating": "",
    "directorID": 40,
    "countryID": 2,
    "posterName": "TheGodfatherPartII.jpg"
}, {
    "id": 270,
    "title": "The Good, the Bad and the Ugly",
    "description": "While the Civil War rages between the Union and the Confederacy, three men -- a quiet loner (Clint Eastwood), a ruthless hit man and a Mexican bandit -- comb the American Southwest in search of a strongbox containing $200,000 in stolen gold. In his third classic spaghetti Western with Eastwood, director Sergio Leone continues to shake up the genre with stylish photography, a hefty dose of cynicism and an instantly recognizable score.",
    "year": 1968,
    "rating": "R",
    "directorID": 193,
    "countryID": 7,
    "posterName": "TheGood,theBadandtheUgly.jpg"
}, {
    "id": 271,
    "title": "Gosford Park",
    "description": "Director Robert Altman's witty murder mystery won an Oscar for its screenplay, which really takes off when Sir William (Michael Gambon) is found dead soon after his guests arrive for a weekend stay at his English estate. Lady Sylvia (Kristin Scott Thomas), Constance (Maggie Smith) and Ivor (Jeremy Northam) try to make sense of the crime. Meanwhile, gossip flies among the household help (including Helen Mirren, Ryan Phillippe and Clive Owen).",
    "year": 2001,
    "rating": "R",
    "directorID": 194,
    "countryID": 7,
    "posterName": "GosfordPark.jpg"
}, {
    "id": 272,
    "title": "The Grapes of Wrath",
    "description": "In this towering classic of American cinema, common man Tom Joad (Henry Fonda) leads his family on a harrowing journey from the Dust Bowl of Oklahoma to the promise of a better life in California. Based on John Steinbeck's Pulitzer Prize-winning novel and masterfully directed by John Ford, the stirring drama also stars Oscar winner Jane Darwell as Ma Joad and John Carradine as the fallen preacher Casy.",
    "year": 1940,
    "rating": "NR",
    "directorID": 195,
    "countryID": 2,
    "posterName": "TheGrapesofWrath.jpg"
}, {
    "id": 273,
    "title": "Great Expectations",
    "description": "The distinguished David Lean directed this adaptation of Dickens's novel about an uncultured boy thrust into high society by a mysterious benefactor. As a young boy, Pip (Anthony Wager) pines for the unattainable Estella (Jean Simmons), at the behest of Miss Havisham (Martita Hunt). Grown up Pip (John Mills) gets life lessons from roommate Herbert Pocket (Alec Guinness), but even Herbert can't prepare Pip for heartache. ",
    "year": 1947,
    "rating": "NR",
    "directorID": 101,
    "countryID": 24,
    "posterName": "GreatExpectations.jpg"
}, {
    "id": 274,
    "title": "The Great McGinty",
    "description": "To help their candidates win, corrupt politicians recruit bum Dan McGinty (Brian Donlevy) to vote under assumed names -- and he's so good at it that the Boss (Akim Tamiroff) turns him into a puppet mayor and arranges an expedient marriage for him. But thanks to McGintys new wife (Muriel Angelus), he suddenly finds a conscience in this vintage satire from writer-director Preston Sturges, who earned an Oscar for his original screenplay.",
    "year": 1940,
    "rating": "NR",
    "directorID": 196,
    "countryID": 2,
    "posterName": "TheGreatMcGinty.jpg"
}, {
    "id": 275,
    "title": "Green for Danger",
    "description": "Wounded by a Nazi bomber, a postman dies on the operating table in rural England. But was his death accidental or murder? Enter Inspector Cockrill (Alastair Sim), an irrepressibly cheerful Scotland Yard sleuth with a penchant for annoying suspects into revealing hidden motives. An unconventional whodunit from the brilliant team of Sidney Gilliat and Frank Launder, this wartime classic also stars Trevor Howard as one of the suspected doctors.",
    "year": 1947,
    "rating": "NR",
    "directorID": 197,
    "countryID": 24,
    "posterName": "GreenforDanger.jpg"
}, {
    "id": 276,
    "title": "The Gunfighter",
    "description": "",
    "year": 1950,
    "rating": "",
    "directorID": null,
    "countryID": 17,
    "posterName": "TheGunfighter.jpg"
}, {
    "id": 277,
    "title": "Hamlet",
    "description": "The President of the Denmark Corporation has recently been found dead, and his wife has re-married the man suspected of the murder. Nobody is suffering more than her son Hamlet -- who is not only determined to avenge his father's murder but is also in love with the enchanting but forbidden Ophelia. Ethan Hawke stars.",
    "year": 1948,
    "rating": "R",
    "directorID": 198,
    "countryID": 2,
    "posterName": "Hamlet.jpg"
}, {
    "id": 278,
    "title": "Hamlet",
    "description": "William Shakespeare's classic tale is brought to the screen for the third time in ten years in this modernized interpretation. Writer/director Michael Almereyda updates the story to the present day, where Hamlet (Ethan Hawke) is a struggling filmmaker whose personal and familial trials are set against the machinations of a huge production firm called the Denmark Corporation. Joining Hamlet as he seeks revenge for the death of his father and the wedding of his mother to an enemy are Kyle MacLachlan as Claudius, Julia Stiles as Ophelia, Bill Murray as Polonius, Sam Shepard as the ghost of Hamlet's father, Diane Venora as Gertrude, Steve Zahn as Rosencrantz, and Dechen Thurman as Guildenstern.",
    "year": 2000,
    "rating": null,
    "directorID": 198,
    "countryID": 2,
    "posterName": "Hamlet.jpg"
}, {
    "id": 279,
    "title": "Happiness",
    "description": "A bittersweet film that belies its title, Happiness is not for the squeamish, drawing a dark portrait of a supremely dysfunctional family in which each member battles personal demons amid plotlines involving pederasts and masturbation. Stories concern a prank telephone caller (Philip Seymour Hoffman) who's afraid of women and a preternaturally cheerful woman (Jane Adams) who's unable to make a physical connection.",
    "year": 1998,
    "rating": "UR",
    "directorID": 199,
    "countryID": 2,
    "posterName": "Happiness.jpg"
}, {
    "id": 280,
    "title": "Harlan County, USA",
    "description": "",
    "year": 1976,
    "rating": "",
    "directorID": 200,
    "countryID": 17,
    "posterName": "HarlanCounty,USA.jpg"
}, {
    "id": 281,
    "title": "The Heartbreak Kid",
    "description": "While honeymooning with his new wife in Florida, Lenny Cantrow (Charles Grodin) begins to rue his nuptials. When his irksome spouse gets stuck in their hotel room with a nasty sunburn, footloose Lenny meets gorgeous blond coed Kelly (Cybill Shepherd). She soon provides all the incentive he needs to ditch his new bride. But Lenny isn't home free with Kelly -- his hot pursuit of her quickly hits a brick wall of resistance: her loathing father.",
    "year": 1972,
    "rating": "PG",
    "directorID": 201,
    "countryID": 2,
    "posterName": "TheHeartbreakKid.jpg"
}, {
    "id": 282,
    "title": "Heavy Traffic",
    "description": "Combining gritty reality with a feast of eye-popping animation and live-action styles, Ralph Bakshi -- who brought Fritz the Cat to the screen -- presents another wildly entertaining landmark in animation. Michael, a young artist who lives with his neurotic mother and two-timing father, escapes the absurd and often ugly side of life on New York's tough streets by satirizing its rich yet wacky characters in wildly entertaining cartoons. ",
    "year": 1973,
    "rating": "R",
    "directorID": 202,
    "countryID": 2,
    "posterName": "HeavyTraffic.jpg"
}, {
    "id": 283,
    "title": "The Heiress",
    "description": "Dull and plain Catherine (Olivia de Havilland) lives with her emotionally distant father, Dr. Sloper (Ralph Richardson), in 1840s New York. Her days are empty -- filled with little more than needlepoint. Enter handsome Morris Townsend (Montgomery Clift), a dashing social climber with his eye on the spinster's heart and substantial inheritance. William Wyler's Oscar-winning film is an adaptation of the Henry James novel <i>Washington Square</i>.",
    "year": 1949,
    "rating": "NR",
    "directorID": 70,
    "countryID": 17,
    "posterName": "TheHeiress.jpg"
}, {
    "id": 284,
    "title": "Henry Fool",
    "description": "After would-be literary ace and ex-convict Henry Fool (Thomas Jay Ryan) inspires lowly Simon Grim (James Urbaniak) to pen prizewinning poetry, the two lose touch. But their paths cross again when Fool asks Grim to help him flee the country. Filled with eccentric satire and curious characters, writer-director Hal Hartley's film co-stars Parker Posey as Grim's sexually twisted sister, Fay, and Maria Porter as his manic depressive mother.",
    "year": 1998,
    "rating": "R",
    "directorID": 203,
    "countryID": 2,
    "posterName": "HenryFool.jpg"
}, {
    "id": 285,
    "title": "Here Comes Mr. Jordan",
    "description": "Boxer Joe Pendleton (Robert Montgomery) crashes his plane just before a championship fight in this classic fantasy that won Best Story and Screenplay Oscars. Waking in heaven, Joe finds that his spirit has been prematurely snatched from his body. The celestial Mr. Jordan (Claude Rains) sends him back to Earth -- as crooked mogul Bruce Farnsworth. Now, Joe must clean up all of Farnsworth's messes while trying to regain his own career as a boxer.",
    "year": 1941,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "HereComesMr.Jordan.jpg"
}, {
    "id": 286,
    "title": "High and Low (Japan)",
    "description": "",
    "year": 1963,
    "rating": "",
    "directorID": 204,
    "countryID": 28,
    "posterName": "HighandLow(Japan).jpg"
}, {
    "id": 287,
    "title": "High Art",
    "description": "Magazine editor Syd (Radha Mitchell) is stuck in a dreary relationship with her boyfriend (Gabriel Mann) when she befriends her upstairs neighbor Lucy (Ally Sheedy), a well-known photographer whose live-in actress girlfriend (Patricia Clarkson) is struggling with a drug addiction. Lucy fascinates Syd, and the pair hit it off. But when Syd calls on Lucy to do an assignment for the magazine, their friendship soon grows into something much more.",
    "year": 1998,
    "rating": "R",
    "directorID": 205,
    "countryID": 2,
    "posterName": "HighArt.jpg"
}, {
    "id": 288,
    "title": "The Homecoming",
    "description": "In this American Film Theatre adaptation of Harold Pinter's play, Teddy (Michael Jayston) brings his wife, Ruth (Vivien Merchant), home to visit his family, from whom he's been estranged for many years. Teddy's father (Paul Rogers) is a failure, and his uncle (Cyril Cusack) totters at the edge of senility. As if that weren't bad enough, his brothers (Ian Holm and Terence Rigby), are a slimy pimp and a brutish boxer, respectively. ",
    "year": 1973,
    "rating": "PG",
    "directorID": 206,
    "countryID": 2,
    "posterName": "TheHomecoming.jpg"
}, {
    "id": 289,
    "title": "Hoop Dreams",
    "description": "The filmmakers of this groundbreaking documentary meant for it to be a short movie, but wound up weaving a widely celebrated feature-length film spanning years filled with grace and honesty. Meet Arthur Agee and William Gates, two young boys from equally rough Chicago neighborhoods who make use of their prodigious basketball talents to aim for a life outside the ghetto. But strife and setbacks befall them at every turn. Will they succeed?",
    "year": 1994,
    "rating": "PG-13",
    "directorID": 207,
    "countryID": 2,
    "posterName": "HoopDreams.jpg"
}, {
    "id": 290,
    "title": "Hope and Glory",
    "description": "In this Oscar-nominated film set in World War II-era London, the threat of danger from the skies above thrills 7-year-old Billy (Sebastian Rice-Edwards), whose supportive mother (Sarah Miles) tries to keep the family strong as the bombings increase. Although Billy's sister (Sammi Davis) suffers heartbreak and the family home is wrecked, director John Boorman's dramedy manages to limelight the bemusing aspects of everyday life during wartime.",
    "year": 1987,
    "rating": "PG-13",
    "directorID": 164,
    "countryID": 10,
    "posterName": "HopeandGlory.jpg"
}, {
    "id": 291,
    "title": "The Hours",
    "description": "This gripping drama follows the parallel lives of three 20th-century women: the incomparable Virginia Woolf (Nicole Kidman), an unsatisfied 1950s housewife (Julianne Moore), and a modern-day book editor (Meryl Streep) who's losing her former lover to AIDS. Kidman collected a Best Actress Oscar for her role in director Stephen Daldry's adaptation of Michael Cunningham's Pulitzer Prize-winning novel.",
    "year": 2002,
    "rating": "PG-13",
    "directorID": 208,
    "countryID": 2,
    "posterName": "TheHours.jpg"
}, {
    "id": 292,
    "title": "Household Saints",
    "description": "In post-World War II New York, Joseph (Vincent D'Onofrio) wins Catherine (Tracey Ullman) in a pinochle game. They marry and have a daughter, Teresa (Lili Taylor), who becomes a religious zealot as she seeks purity through prayer -- much to the consternation of Teresa's boyfriend (Michael Imperioli) and parents. Director Nancy Savoca's third film is based on Francine Prose's novel of the same name.",
    "year": 1993,
    "rating": "R",
    "directorID": 209,
    "countryID": 2,
    "posterName": "HouseholdSaints.jpg"
}, {
    "id": 293,
    "title": "Husbands and Wives",
    "description": "Director Woody Allen stars with Mia Farrow in his critically acclaimed comedy as a long-married New York couple whose own relationship starts to crumble when their best friends (Sydney Pollack and Judy Davis, in an Oscar-nominated role) announce they're separating. Smoldering resentments and unexpected jealousies soon rise to the surface, erupting in savage humor and hilariously unpredictable reunions.",
    "year": 1992,
    "rating": "R",
    "directorID": 38,
    "countryID": 2,
    "posterName": "HusbandsandWives.jpg"
}, {
    "id": 294,
    "title": "I Know Where I'm Going!",
    "description": "Joan Webster (Wendy Hiller) is a headstrong young woman who travels to the bleak and moody Scottish Hebrides to marry a rich lord. Stranded by stormy weather along the way, Joan meets a handsome and penniless naval officer (Roger Livesey) who threatens to spoil her carefully laid-out life plans in this mythical romance by directors Michael Powell and Emeric Pressburger.",
    "year": 1947,
    "rating": "NR",
    "directorID": 82,
    "countryID": 24,
    "posterName": "IKnowWhereI'mGoing!.jpg"
}, {
    "id": 295,
    "title": "I Remember Mama",
    "description": "Based on John Van Druten's play, director George Stevens's drama gathers the recollections of a Norwegian family relocated to San Francisco -- especially those of Katrin (Barbara Bel Geddes), a novelist who credits her mother, Marta (Irene Dunne), for her and her siblings' success. In spite of poverty and the difficulties of adjusting to a new country, Marta persevered, paving the way for her children's bright future.",
    "year": 1948,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "IRememberMama.jpg"
}, {
    "id": 296,
    "title": "In the Bedroom",
    "description": "Set in a tranquil town on the Maine coast, this character-driven drama tells the story of a couple (Sissy Spacek and Tom Wilkinson, in a pair of stunning performances) whose teenage son (Nick Stahl) is involved in a love affair with a single mother (Marisa Tomei). When the relationship comes to a sudden and tragic end, the boy's parents must face their worst nightmare and embark on a dark and dangerous psychological journey.",
    "year": 2001,
    "rating": "R",
    "directorID": 210,
    "countryID": 2,
    "posterName": "IntheBedroom.jpg"
}, {
    "id": 297,
    "title": "Inherit the Wind",
    "description": "Spencer Tracy (in an Oscar-nominated role) and Fredric March square off as opposing attorneys Henry Drummond and Matthew Harrison Brady, respectively, in this blistering courtroom drama about the famed 1925 \"Scopes Monkey Trial,\" in which a Tennessee teacher was taken to task for teaching Darwinism in the classroom. The film also earned Oscar nods for its editing, screenplay and cinematography. Gene Kelly co-stars as a newspaper reporter.",
    "year": 1960,
    "rating": "NR",
    "directorID": 163,
    "countryID": 2,
    "posterName": "InherittheWind.jpg"
}, {
    "id": 298,
    "title": "The Insider",
    "description": "Nominated for seven Oscars, this thought-provoking thriller from director Michael Mann is based on the true story of a Big Tobacco scientist who exposed industry secrets and the newsman who fought forces that would have squelched the story. When TV producer Lowell Bergman (Al Pacino) coaxes researcher Jeffrey Wigand (Russell Crowe) to speak about his former employer's knowledge of tobacco's harmful qualities, the corporations try to silence them.",
    "year": 1999,
    "rating": "R",
    "directorID": 211,
    "countryID": 2,
    "posterName": "TheInsider.jpg"
}, {
    "id": 299,
    "title": "Internal Affairs",
    "description": "New Los Angeles Police Department internal affairs investigator Sgt. Raymond Avila (Andy Garcia) sets his sights on Dennis Peck (Richard Gere), a suave but corrupt cop who's been involved in police brutality and bribery for years. Peck, however, has his own carefully calculated way of striking back at the detective, starting with Avila's partner and family. The tension builds to a riveting climax under the direction of Mike Figgis.",
    "year": 1990,
    "rating": "R",
    "directorID": 212,
    "countryID": 2,
    "posterName": "InternalAffairs.jpg"
}, {
    "id": 300,
    "title": "It's a Gift",
    "description": "",
    "year": 1935,
    "rating": "",
    "directorID": 213,
    "countryID": 2,
    "posterName": "It'saGift.jpg"
}, {
    "id": 301,
    "title": "Jailhouse Rock",
    "description": "Considered by many fans to be Elvis's best film, Jailhouse Rock tells the story of convict Vince Everett (Elvis Presley), who, while doing time in the clink, learns a thing or two about music from his cellmate and ends up with a hit song. When freed, Vince pursues showbiz and starts his own record company with his girlfriend Peggy (Judy Tyler). But will fame get the best of Vince? Songs include \"Baby, I Don't Care\" and \"Don't Leave Me Now.\"",
    "year": 1957,
    "rating": "NR",
    "directorID": 214,
    "countryID": 2,
    "posterName": "JailhouseRock.jpg"
}, {
    "id": 302,
    "title": "The Jazz Singer",
    "description": "The first feature film to incorporate vocal musical numbers and some dialogue in an era of silent movies, The Jazz Singer stars Al Jolson as the son of a Jewish cantor who experiences conflict when he rejects his family heritage. He becomes a cabaret entertainer but ultimately realizes that he must find a way to balance career and family. The film received an Academy Award nod for writing and won a special Oscar for Technical Achievement. ",
    "year": 1927,
    "rating": "NR",
    "directorID": 215,
    "countryID": 17,
    "posterName": "TheJazzSinger.jpg"
}, {
    "id": 303,
    "title": "Jean de Florette",
    "description": "",
    "year": 1987,
    "rating": "",
    "directorID": 216,
    "countryID": 1,
    "posterName": "JeandeFlorette.jpg"
}, {
    "id": 304,
    "title": "Jerry Maguire",
    "description": "After years of successfully navigating the shark-infested waters of sports management, Jerry Maguire (Oscar nominee Tom Cruise) experiences a crisis of conscience and leaves his high-powered job behind, with one loyal football client (Oscar winner Cuba Gooding Jr.) and a starry-eyed co-worker (Ren&#x00E9;e Zellweger) in tow. An irresistible little boy (Jonathan Lipnicki) adds the icing on the cake to this sweet, heartfelt Best Picture nominee.",
    "year": 1996,
    "rating": "R",
    "directorID": 217,
    "countryID": 2,
    "posterName": "JerryMaguire.jpg"
}, {
    "id": 305,
    "title": "The Judge and the Assassin",
    "description": "",
    "year": 1982,
    "rating": "",
    "directorID": 131,
    "countryID": 1,
    "posterName": "TheJudgeandtheAssassin.jpg"
}, {
    "id": 306,
    "title": "Judgment at Nuremberg",
    "description": "This Academy Award-winning film by Stanley Kramer stars Spencer Tracy as American judge Dan Haywood, who's chosen to guide a 1948 tribunal that's trying Germans suspected of engaging in atrocities during World War II. Against the backdrop of the Cold War, Haywood must obtain justice in a case with raised stakes and mixed emotions. Maximilian Schell co-stars in an Oscar-lauded performance as defense counsel for the Nazi prisoners.",
    "year": 1961,
    "rating": "NR",
    "directorID": 163,
    "countryID": 2,
    "posterName": "JudgmentatNuremberg.jpg"
}, {
    "id": 307,
    "title": "The Killers",
    "description": "",
    "year": 1946,
    "rating": "",
    "directorID": null,
    "countryID": 17,
    "posterName": "TheKillers.jpg"
}, {
    "id": 308,
    "title": "The King of Marvin Gardens",
    "description": "Uptight deejay David Staebler (Jack Nicholson) travels to Atlantic City, N.J., to learn more about an outlandish, get-rich-quick scheme cooked up by his manic brother, Jason (Bruce Dern). Despite David's suspicions, he plays along -- but when the plan's flaws become evident, neither Jason nor his beauty-queen girlfriend (Ellen Burstyn) heed David's protestations. Director Bob Rafelson's evocative drama costars Scatman Crothers.",
    "year": 1972,
    "rating": "R",
    "directorID": 218,
    "countryID": 2,
    "posterName": "TheKingofMarvinGardens.jpg"
}, {
    "id": 309,
    "title": "Knife in the Water",
    "description": "Director Roman Polanski ratchets up the suspense with a story that takes place almost entirely within the confined setting of a sailboat owned by a wealthy journalist and his much younger wife. On their way to the lake for a weekend of sailing, the couple invites a young hitchhiker to join them on their boat. But hostility looms as each man tries to humiliate the other in front of the woman.",
    "year": 1963,
    "rating": "NR",
    "directorID": 126,
    "countryID": 12,
    "posterName": "KnifeintheWater.jpg"
}, {
    "id": 310,
    "title": "L.A. Confidential",
    "description": "In 1950s Los Angeles, three wildly different cops (Guy Pearce, Russell Crowe and Kevin Spacey) form an uneasy alliance to ferret out deep-seated police corruption. But some people will do anything to land their faces in the pages of trashy Hollywood tabloids such as <i>Hush-Hush</i> magazine. A must-see whodunit, Brian Helgeland's script adaptation won an Oscar, as did Kim Basinger for her supporting role as a Veronica Lake look-alike.",
    "year": 1997,
    "rating": "R",
    "directorID": 219,
    "countryID": 2,
    "posterName": "L.A.Confidential.jpg"
}, {
    "id": 311,
    "title": "The Lady Vanishes",
    "description": "Traveling aboard a transcontinental train, young Iris Henderson (Margaret Lockwood) becomes alarmed when an acquaintance, elderly governess Miss Froy (Dame Mae Whitty), suddenly vanishes. Inexplicably, all the other passengers deny having seen the woman. So Iris turns to her lone ally -- handsome music scholar Gilbert Redman (Michael Redgrave) -- for help. As the two search for clues to Froy's disappearance, they uncloak a sinister plot. ",
    "year": 1938,
    "rating": "NR",
    "directorID": 80,
    "countryID": 10,
    "posterName": "TheLadyVanishes.jpg"
}, {
    "id": 312,
    "title": "Ladybird, Ladybird",
    "description": "Ken Loach directs this heartrending story about Maggie (Crissy Rock), a volatile woman trying to overcome the trauma of her abusive childhood and regain custody of her four children, who have been taken into foster care. When Maggie falls in love with Paraguayan refugee Jorge (Vladimir Vega), she feels for the first time that she might have a real future, but her pregnancy leads to more tangles with unfeeling social workers.",
    "year": 1994,
    "rating": "R",
    "directorID": 220,
    "countryID": 10,
    "posterName": "Ladybird,Ladybird.jpg"
}, {
    "id": 313,
    "title": "Lamerica",
    "description": "A couple of Italian con men travel to economically ravaged Albania after the collapse of Communism there, hoping to cash in by setting up a bogus corporation with a senile old man as its CEO. But the plot fails when the elderly chairman wanders away. Now, Fiore (Michele Placido) and his assistant, Gino (Enrico Lo Verso), are on an eye-opening quest through the slums of the nation. Gianni Amelio writes and directs this smart drama. ",
    "year": 1994,
    "rating": "UR",
    "directorID": 221,
    "countryID": 1,
    "posterName": "Lamerica.jpg"
}, {
    "id": 314,
    "title": "The Last Seduction",
    "description": "In a twisted plot, femme fatale Bridget Gregory (Linda Fiorentino), a sexy, savvy hustler, swindles her husband, Clay (Bill Pullman), out of $700,000 in drug money and then runs off to find a new patsy (Peter Berg) who'll help cover her tracks -- by murdering Clay. Fiorentino is mesmerizing -- and enchantingly wicked -- as the cold-blooded beauty who uses men like toys in John Dahl's (Red Rock West) uncommon thriller.",
    "year": 1994,
    "rating": "R",
    "directorID": 222,
    "countryID": 2,
    "posterName": "TheLastSeduction.jpg"
}, {
    "id": 315,
    "title": "The Last Temptation of Christ",
    "description": "Nikos Kazantzakis's landmark novel comes to life in director Martin Scorsese's moving, spiritual and highly controversial film that challenges the Christian notion that Jesus (Willem Dafoe) was both a man and a divine being. With an all-star cast that includes Harvey Keitel, Barbara Hershey, Harry Dean Stanton and David Bowie, the film portrays Jesus as unmistakably human, susceptible to the desires, doubts and temptations that all men face.",
    "year": 1988,
    "rating": "R",
    "directorID": 15,
    "countryID": 2,
    "posterName": "TheLastTemptationofChrist.jpg"
}, {
    "id": 316,
    "title": "The Lavender Hill Mob",
    "description": "Mr. Holland (Alec Guinness) has supervised his bank's bullion run for years. He's fussy and unnecessarily overprotective, but everyone knows he's absolutely trustworthy. And so, on the day the bullion truck is robbed, he's the last person to be suspected. But there's another side to Mr. Holland -- he's also \"Dutch,\" the leader of the titular mob. Ealing Studios writer T.E.B. Clarke won an Oscar for Best Screenplay. Stanley Holloway co-stars.",
    "year": 1951,
    "rating": "NR",
    "directorID": 223,
    "countryID": 10,
    "posterName": "TheLavenderHillMob.jpg"
}, {
    "id": 317,
    "title": "A League of Their Own",
    "description": "Small-town sisters Dottie (Geena Davis) and Kit (Lori Petty) join an all-female baseball league formed after World War II brings pro baseball to a standstill. When their team hits the road with its drunken coach (Tom Hanks), the siblings find troubles and triumphs on and off the field. Rosie O'Donnell and Madonna co-star in director Penny Marshall's funny, sentimental crowd-pleaser inspired by the real-life All-American Pro Girls League.",
    "year": 1992,
    "rating": "PG",
    "directorID": 224,
    "countryID": 2,
    "posterName": "ALeagueofTheirOwn.jpg"
}, {
    "id": 318,
    "title": "Leaving Las Vegas",
    "description": "Oscar winner Nicolas Cage stars in this incisive portrait as an alcoholic Hollywood executive who moves to Las Vegas to drink himself to death and meets a prostitute (Elisabeth Shue) who comes to know and love him, without trying to upset his nihilistic agenda. Cage and Shue mesmerize as a marginalized couple who cling to each other for strength despite the direness of their individual circumstances.",
    "year": 1995,
    "rating": "UR",
    "directorID": 212,
    "countryID": 2,
    "posterName": "LeavingLasVegas.jpg"
}, {
    "id": 319,
    "title": "The Letter",
    "description": "Based on W. Somerset Maugham's novel and directed by William Wyler, this drama stars Bette Davis in one of her nastiest film roles. After shooting Geoffrey (David Newell), Leslie (Davis) tells husband Robert (Herbert Marshall) and their lawyer (James Stephenson) that it was self-defense. But Leslie's case begins to fall apart when a letter reveals that she may have planned the murder, and Geoffrey's widow (Gale Sondergaard) attempts blackmail.",
    "year": 1963,
    "rating": "NR",
    "directorID": 70,
    "countryID": 17,
    "posterName": "TheLetter.jpg"
}, {
    "id": 320,
    "title": "Life With Father",
    "description": "Based on Clarence Day Jr.'s memoirs about growing up with his semi-tyrannical father, this wonderful comedy is truly one of the classics. William Powell stars as Father, a Wall Street broker who likes to think he rules the roost. But when a small crisis over his religious upbringing causes havoc, it becomes clear that it's really his adoring wife (Irene Dunne) and their enterprising children who pull the strings.",
    "year": 1947,
    "rating": "NR",
    "directorID": 6,
    "countryID": 2,
    "posterName": "LifeWithFather.jpg"
}, {
    "id": 321,
    "title": "Like Water for Chocolate",
    "description": "Passionate Tita (Lumi Cavazos) is in love with Pedro (Marco Leonardi), but her controlling mother (Regina Torn&#x00E9;) forbids her from marrying him. So when Pedro marries her sister, Tita throws herself into her cooking -- and discovers she can transfer her emotions through the food she prepares. A feast for the senses, this magical romance from director Alfonso Arau was nominated for an Independent Spirit Award and a Golden Globe.",
    "year": 1992,
    "rating": "R",
    "directorID": 225,
    "countryID": 9,
    "posterName": "LikeWaterforChocolate.jpg"
}, {
    "id": 322,
    "title": "Lili",
    "description": "In this enchanting romance, members of a carnival adopt recently orphaned waif Lili Daurier (Leslie Caron, in an award-winning performance). Infatuated with the troupe's magician -- who thinks of Lili as a child -- the girl takes to conversing with the company's puppets for solace. And in talking to Lili through his marionettes, bitter puppeteer Paul (Mel Ferrer) finds his hardened heart softening in the face of the gamine's ingenuous charms. ",
    "year": 1953,
    "rating": "G",
    "directorID": 226,
    "countryID": 2,
    "posterName": "Lili.jpg"
}, {
    "id": 323,
    "title": "Little Women",
    "description": "Louisa May Alcott's beloved novel comes to life in this sensitive, soulful adaptation. Four sisters (including Winona Ryder, Claire Danes and Kirsten Dunst) and their mother (Susan Sarandon) battle life's vicissitudes in Civil War-era America after their father leaves to join the conflict. Brimming with compelling performances from a strong ensemble cast, Little Women breathes new cinematic life into a revered classic.",
    "year": 1933,
    "rating": "PG",
    "directorID": 227,
    "countryID": 2,
    "posterName": "LittleWomen.jpg"
}, {
    "id": 324,
    "title": "Little Women",
    "description": "Louisa May Alcott's classic novel about a family of women in Civil War-era New England is again brought to the screen in this adaptation. The focus is on the March sisters, four young girls raised by their mother (Susan Sarandon) after their father leaves for battle as part of the Union Army. At the center is Jo March (Winona Ryder), an idiosyncratic would-be writer said to be based on Alcott herself, but the film also focuses on the stories of her sisters -- the more conventional Meg (Trini Alvarado), the innocent Beth (Claire Danes), and the precocious Amy (Kirsten Dunst and Samantha Mathis, who represent Amy at different ages.) The film spans years, following the girls' struggles with life's challenges and illustrating how their family connection remains strong in the face of tragedies large and small. Australian director Gillian Armstrong emphasizes the story's feminist elements, particularly in Jo's journey to independence.",
    "year": 1994,
    "rating": null,
    "directorID": 227,
    "countryID": 2,
    "posterName": "LittleWomen.jpg"
}, {
    "id": 325,
    "title": "Living in Oblivion",
    "description": "This clever comedy takes you through one hellaciously funny day in the life of small-time independent filmmaker Nick Reve (Steve Buscemi), who has one goal: to realize his artistic vision within the confines of an extremely low budget. Unfortunately, Nick keeps encountering a maddening number of obstacles, both real and imagined, that keep him from getting what he wants out of life. Catherine Keener, Dermot Mulroney and James LeGros co-star.",
    "year": 1995,
    "rating": "R",
    "directorID": 228,
    "countryID": 2,
    "posterName": "LivinginOblivion.jpg"
}, {
    "id": 326,
    "title": "Lone Star",
    "description": "When two men discover a human skull and an encrusted badge buried near a small Texas border town, lawman Sam Deeds (Chris Cooper) launches an investigation that reveals a 40-year-old murder in director John Sayles's acclaimed drama. Sam's late father, the former sheriff (Matthew McConaughey, in flashbacks), is a town legend, and Sam's discoveries threaten to tarnish his dad's reputation and touch the lives of nearly everyone in the community.",
    "year": 1996,
    "rating": "R",
    "directorID": 182,
    "countryID": 2,
    "posterName": "LoneStar.jpg"
}, {
    "id": 327,
    "title": "The Longest Day",
    "description": "With four directors and an all-star cast, this Academy Award-winning war epic from producer Darryl F. Zanuck chronicles World War II's harrowing D-Day invasion. Shot on the beaches of Normandy, France, the ambitious film attempts to cover the historic day from all perspectives, focusing on figures from both sides of the conflict. The who's-who ensemble cast is led by John Wayne, Sean Connery, Robert Mitchum and Henry Fonda, just to name a few. ",
    "year": 1962,
    "rating": "G",
    "directorID": 229,
    "countryID": 2,
    "posterName": "TheLongestDay.jpg"
}, {
    "id": 328,
    "title": "The Lost Weekend",
    "description": "Based on Charles R. Jackson's novel, director Billy Wilder's searing, Oscar-winning portrait of an alcoholic follows writer Don Birnem (Ray Milland), whose girlfriend (Jane Wyman) and caring brother (Phillip Terry) leave him alone for the weekend. Aching to drink, Don heads to a bar and goes on a binge that sends him into an alcoholic fog -- complete with petrifying hallucinations and an unnerving stint in a hospital sanitarium. ",
    "year": 1945,
    "rating": "NR",
    "directorID": 39,
    "countryID": 2,
    "posterName": "TheLostWeekend.jpg"
}, {
    "id": 329,
    "title": "Love Affair",
    "description": "While on an ocean cruise, strangers Michel Marnet (Charles Boyer) and Terry McKay (Irene Dunne) are instantly taken with each other. Unfortunately, they're both engaged to other people, so they promise to reunite in six months to see if their passion still burns. En route to the reunion, Terry is crippled in a car accident, heightening the drama of this Oscar-nominated romance.",
    "year": 1939,
    "rating": "NR",
    "directorID": 48,
    "countryID": 2,
    "posterName": "LoveAffair.jpg"
}, {
    "id": 330,
    "title": "A Love in Germany",
    "description": "",
    "year": 1984,
    "rating": "",
    "directorID": 44,
    "countryID": 1,
    "posterName": "ALoveinGermany.jpg"
}, {
    "id": 331,
    "title": "Lovely and Amazing",
    "description": "",
    "year": 2002,
    "rating": "",
    "directorID": 230,
    "countryID": 2,
    "posterName": "LovelyandAmazing.jpg"
}, {
    "id": 332,
    "title": "The Madness of King George",
    "description": "The dementia of King George III -- the English monarch who lost the war to keep the American colonies -- ignites a flurry of political and familial treachery in this comical biopic that earned Nigel Hawthorne and Helen Mirren a pair of Oscar nods. Based on Alan Bennett's play, the film provides insight into the primitive medical practices of the time and co-stars Ian Holm, Rupert Graves and Rupert Everett.",
    "year": 1994,
    "rating": "PG-13",
    "directorID": 231,
    "countryID": 10,
    "posterName": "TheMadnessofKingGeorge.jpg"
}, {
    "id": 333,
    "title": "Major Barbara",
    "description": "George Bernard Shaw's satiric wit proves eternally relevant in this classic adaptation of his exceptional play. Barbara (Wendy Hiller), a stalwart member of the Salvation Army, sharply criticizes her group's sincerity, drawing the ire of her friends. Barbara has become disillusioned by the seeming avarice of her tycoon father (Robert Morley) but eventually sees the error of her ways and even falls in love with a quirky scholar (Rex Harrison).",
    "year": 1941,
    "rating": "NR",
    "directorID": 101,
    "countryID": 24,
    "posterName": "MajorBarbara.jpg"
}, {
    "id": 334,
    "title": "Make Way for Tomorrow",
    "description": "After losing their home to foreclosure, devastated Barkley (Victor Moore) and his wife, Lucy (Beulah Bondi), must part ways because not one of their grown children has room for them both. As the elders try to fit in with their kids' families, they struggle with loneliness. Directed by Leo McCarey and based on a novel by Josephine Lawrence, this moving drama also stars Fay Bainter, Thomas Mitchell and Porter Hall.",
    "year": 1937,
    "rating": "NR",
    "directorID": 48,
    "countryID": 17,
    "posterName": null
}, {
    "id": 335,
    "title": "Malcolm X",
    "description": "Spike Lee's Oscar-nominated drama illuminates the life of black nationalist Malcolm X (Denzel Washington), following him from his early days in prison to his conversion to Islam, marriage to Betty Shabazz (Angela Bassett) and discovery of Elijah Mohammad's (Al Freeman Jr.) Nation of Islam writings. When Malcolm turns his back on the Nation of Islam (following a pilgrimage to Mecca), he becomes a murder target.",
    "year": 1992,
    "rating": "PG-13",
    "directorID": 176,
    "countryID": 2,
    "posterName": "MalcolmX.jpg"
}, {
    "id": 336,
    "title": "The Maltese Falcon",
    "description": "Humphrey Bogart stars as private eye Sam Spade in this Oscar-nominated noir classic that finds the sultry Miss Wonderly (Mary Astor) seeking out protection from a man named Thursby. Spade's partner (Jerome Cowan) takes the case -- but he winds up dead, along with Thursby. Spade's subsequent hunt for the killer leads him into a world of deception and double-crossing, as a trio of criminals searches for a priceless statue known as the Maltese Falcon.",
    "year": 1941,
    "rating": "NR",
    "directorID": 8,
    "countryID": 2,
    "posterName": "TheMalteseFalcon.jpg"
}, {
    "id": 337,
    "title": "Man Hunt",
    "description": "While hunting in the Bavarian Alps, Brit Alan Thorndike (Walter Pidgeon) stumbles upon an opportunity to assassinate Adolph Hitler. But when Thorndike is captured and beaten, he escapes and journeys back to England with the aid of a boy (Roddy McDowall) and a prostitute (Joan Bennett). Ace director Fritz Lang's gripping spy thriller, based on the 1939 novel <i>Rogue Male</i>, also stars Roger Imhof and John Carradine.",
    "year": 1941,
    "rating": "NR",
    "directorID": 75,
    "countryID": 17,
    "posterName": null
}, {
    "id": 338,
    "title": "The Man Who Loved Women",
    "description": "French scientist Bertrand Morane (Charles Denner) has had so many lovers that he has no idea who gave him a sexually transmitted disease. To jog his memory, he begins writing a book about all of his romantic escapades. In the process, he delves into the history of his obsession with the female form and discovers a new love interest with his publisher (Brigitte Fossey). The acclaimed Fran&#x00E7;ois Truffaut directed.",
    "year": 1977,
    "rating": "NR",
    "directorID": null,
    "countryID": 1,
    "posterName": "TheManWhoLovedWomen.jpg"
}, {
    "id": 339,
    "title": "The Man Who Wasn't There",
    "description": "In this black-and-white film noir by Joel Coen and Ethan Coen, Billy Bob Thornton stars as Ed Crane, an aimless barber who's dissatisfied with his life in a small northern California town in the summer of 1949. His wife's (Frances McDormand) infidelity presents Crane with an opportunity for blackmail that he thinks will turn his life around ... but his scheme lays bare even darker secrets that eventually lead to murder. James Gandolfini co-stars.",
    "year": 2001,
    "rating": "R",
    "directorID": 60,
    "countryID": 2,
    "posterName": "TheManWhoWasn'tThere.jpg"
}, {
    "id": 340,
    "title": "Mayerling",
    "description": "Based on the murky historical tale about a suicide pact between Crown Prince Rudolf of Austria and his teenage mistress, Baroness Mary Vetsera, this ballet created by Kenneth MacMillan features the music of composer Franz Liszt. Performed at the Royal Opera House in Covent Garden, London, this lavish 1994 production stars Viviana Durante, Irek Mukhamedov and Lesley Collier. Barry Wordsworth conducts the Orchestra of the Royal Opera House.",
    "year": 1937,
    "rating": "NR",
    "directorID": 34,
    "countryID": 1,
    "posterName": null
}, {
    "id": 341,
    "title": "Mean Streets",
    "description": "In director Martin Scorsese's look at New York City's Little Italy, Charlie (Harvey Keitel) deals with the pressures of working his way up the ranks of a local mob, while coping with his family's disapproval of his epileptic girlfriend (Amy Robinson). Meanwhile, his small-time gambler friend, Johnny Boy (Robert De Niro), threatens to ruin Charlie's reputation with debts to a loan shark. The film marks Scorsese's first teaming with De Niro.",
    "year": 1973,
    "rating": "R",
    "directorID": 15,
    "countryID": 2,
    "posterName": "MeanStreets.jpg"
}, {
    "id": 342,
    "title": "The Memory of Justice",
    "description": "",
    "year": 1976,
    "rating": "",
    "directorID": 232,
    "countryID": 1,
    "posterName": null
}, {
    "id": 343,
    "title": "The Men",
    "description": "Marlon Brando made his stunning cinematic debut in this drama as an ex-soldier physically and emotionally wounded by the menace of war. Laid up at a veteran's hospital, he and the men around him battle the bitterness that threatens to engulf them. Co-starring Richard Erdman and Virginia Farmer, The Men was nominated for an Oscar for Best Writing and was named by the National Board of Review as one of the 10 best films of 1950.",
    "year": 1950,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "TheMen.jpg"
}, {
    "id": 344,
    "title": "The Miracle Worker",
    "description": "A bout with scarlet fever has rendered Helen Keller (Patty Duke) blind, deaf and mute. When her parents can no longer cope with the feral girl's tantrums, they call in inexperienced but innovative teacher Annie Sullivan (Anne Bancroft). Though Helen perceives sign language as a finger game, Annie's unflagging tutelage ultimately awakens in her charge the concept of words. Bancroft (Best Actress) and Duke (Supporting Actress) won Oscars for their work.",
    "year": 1962,
    "rating": "NR",
    "directorID": 16,
    "countryID": 2,
    "posterName": "TheMiracleWorker.jpg"
}, {
    "id": 345,
    "title": "Les Miserables",
    "description": "Adapted from Victor Hugo's classic novel of forgiveness and redemption, this star-studded version of the oft-filmed classic stays faithful to the source material and features stunning location shooting in Paris and Prague. Liam Neeson stars as Jean Valjean, an ex-con trying desperately to live a decent life, with Oscar winner Geoffrey Rush co-starring as Javert, the inspector who has no intention of letting Valjean escape his past.",
    "year": 1935,
    "rating": "PG-13",
    "directorID": null,
    "countryID": 17,
    "posterName": "LesMiserables.jpg"
}, {
    "id": 346,
    "title": "Mister Roberts",
    "description": "A hilarious and heartfelt military comedy-drama co-directed by John Ford and Mervyn LeRoy, Mister Roberts stars Henry Fonda as an officer who's yearning for battle but is stuck in the backwaters of World War II on a noncommissioned Navy ship run by the bullying Capt. Morton (James Cagney). Jack Lemmon enjoys a star-making turn as the freewheeling Ensign Pulver, and William Powell stars as the ship's doctor in his last screen role. ",
    "year": 1955,
    "rating": "NR",
    "directorID": 195,
    "countryID": 2,
    "posterName": "MisterRoberts.jpg"
}, {
    "id": 347,
    "title": "Mrs. Miniver",
    "description": "Greer Garson, Walter Pidgeon, Teresa Wright and Reginald Owen star in this Academy Award-winning drama directed by the acclaimed William Wyler about an English family's efforts to rise above the hardships of war. The patriarch (Pidgeon) faces battle in Dunkirk; an air raid kills a daughter; and a son joins the Royal Air Force. Through it all, Mrs. Miniver (Garson) stands tall, strong, proud and still filled with hope.",
    "year": 1942,
    "rating": "NR",
    "directorID": 70,
    "countryID": 17,
    "posterName": "Mrs.Miniver.jpg"
}, {
    "id": 348,
    "title": "Monsters, Inc.",
    "description": "Pixar pitches another computer-animated classic with this family-friendly tale about the professional scarers of Monsters, Inc., who sneak into children's bedrooms at night to elicit screams that they convert into energy to run their world. Life is fine for top scarer Sulley (John Goodman) and his assistant, Mike (Billy Crystal), until a little girl named Boo accidentally finds her way into the monster world -- and into Sulley's heart.",
    "year": 2001,
    "rating": "G",
    "directorID": 233,
    "countryID": 2,
    "posterName": "Monsters,Inc..jpg"
}, {
    "id": 349,
    "title": "Moonstruck",
    "description": "Cher, Olympia Dukakis and screenwriter John Patrick Shanley each won Oscars for their wonderful work in this slice-of-life comedy about the Italian-American denizens of a Brooklyn neighborhood. Cher's an independent-minded widow who falls in love with a one-handed, misfit baker (Nicolas Cage), much to the chagrin of her betrothed (Danny Aiello). With great performances all around, Moonstruck is <i>bellisima</i>!",
    "year": 1987,
    "rating": "PG",
    "directorID": 234,
    "countryID": 2,
    "posterName": "Moonstruck.jpg"
}, {
    "id": 350,
    "title": "The More the Merrier",
    "description": "During World War II, civil servant Connie Milligan (Jean Arthur) decides to turn the housing shortage in Washington, D.C., to her advantage. But when she rents out her four-room apartment to two men -- aging millionaire Benjamin (Charles Coburn) and young, handsome sergeant Joe (Joel McCrea) -- Connie gets more than she bargained for, including Benjamin taking on the role of matchmaking cupid. George Stevens directs. ",
    "year": 1943,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "TheMoretheMerrier.jpg"
}, {
    "id": 351,
    "title": "The Mortal Storm",
    "description": "",
    "year": 1940,
    "rating": "",
    "directorID": 235,
    "countryID": 17,
    "posterName": null
}, {
    "id": 352,
    "title": "Mother",
    "description": "Niovna (Vera Baranovskaya), a mother caught up in the failed 1905 Russian revolt, finds her son (Nikolai Batalov) and husband (Aleksandr Chistyakov) on opposite sides of a worker's strike. At first she's na&#x00EF;ve to the cause, but Niovna soon discovers the Czarist government's injustices and makes a valiant stand for her people. Director Vsevolod Pudovkin's haunting silent film is based on a story by Maxim Gorky",
    "year": 1996,
    "rating": "NR",
    "directorID": 236,
    "countryID": 2,
    "posterName": "Mother.jpg"
}, {
    "id": 353,
    "title": "The Mouthpiece",
    "description": "",
    "year": 1932,
    "rating": "",
    "directorID": 237,
    "countryID": 17,
    "posterName": null
}, {
    "id": 354,
    "title": "Mulholland Dr.",
    "description": "Writer-director David Lynch weaves another mysteriously complex tale in this story about an amnesiac woman (Laura Harring) who's left stranded on Mulholland Drive and gets taken in by a young newcomer (Naomi Watts) who's moved to Hollywood to pursue her dreams. The two women gradually start to put the pieces of a troubling puzzle together, but the puzzle unravels a dark, sinister plot -- as well as unexpected passions.",
    "year": 2001,
    "rating": "R",
    "directorID": 87,
    "countryID": 1,
    "posterName": "MulhollandDr..jpg"
}, {
    "id": 355,
    "title": "My Darling Clementine",
    "description": "As the enforcer of law in the town of Tombstone, Ariz., Wyatt Earp (Henry Fonda) must balance keeping unruly criminals in line with tracking down and bringing to justice the men who killed his brothers, Morgan (Ward Bond) and Virgil (Tim Holt). With help from Doc Holliday (Victor Mature), with whom he maintains a tepid friendship, Earp's pursuit ultimately involves the history-making confrontation at the OK Corral.",
    "year": 1946,
    "rating": "NR",
    "directorID": 195,
    "countryID": 2,
    "posterName": "MyDarlingClementine.jpg"
}, {
    "id": 356,
    "title": "My Night at Maud's",
    "description": "A devout Catholic (Jean-Louis Trintignant) meets up with a Marxist friend he hasn't seen in 14 years, and both men wind up spending the evening in deep philosophical conversations about love and religion with a young divorcee named Maud (Francoise Fabian). Part of writer-director Eric Rohmer's \"Six Moral Tales\" film series, My Night at Maud's earned Oscar nominations for Best Original Screenplay and Best Foreign Film.",
    "year": 1969,
    "rating": "PG",
    "directorID": 62,
    "countryID": 1,
    "posterName": "MyNightatMaud's.jpg"
}, {
    "id": 357,
    "title": "My 20th Century",
    "description": "",
    "year": 1990,
    "rating": "",
    "directorID": 238,
    "countryID": 3,
    "posterName": "My20thCentury.jpg"
}, {
    "id": 358,
    "title": "Mon Oncle",
    "description": "Jacques Tati plays Monsieur Hulot, a self-absorbed chucklehead wrestling with neoteric gadgetry -- and losing -- in this satirical masterpiece that makes sport of mechanization, class distinctions and modernity. While visiting his sister's surreal, ultra-trendy home, Hulot finds himself incessantly at odds with newfangled contraptions that get the better of him. The tongue-in-cheek French comedy garnered a Best Foreign Language Film Oscar.",
    "year": 1958,
    "rating": "NR",
    "directorID": 239,
    "countryID": 1,
    "posterName": "MonOncle.jpg"
}, {
    "id": 359,
    "title": "Nashville",
    "description": "Countless characters, including Shelley Duvall, Keith Carradine, Ned Beatty and Karen Black, get caught up in a political rally that takes over Nashville in director Robert Altman's sprawling satirical masterpiece about politics and country music. The many fine performances in this mosaic include Lily Tomlin's bored housewife and Henry Gibson's pompous, patriotic country singer. The actors also wrote and performed their own songs. ",
    "year": 1975,
    "rating": "R",
    "directorID": 194,
    "countryID": 2,
    "posterName": "Nashville.jpg"
}, {
    "id": 360,
    "title": "National Lampoon's Animal House",
    "description": "Knowledge is good, but swilling kegs of beer is more fun! Just ask the guys at the Delta House fraternity. Often imitated, but seldom equaled, Animal House spawned a generation of gonzo comedies and launched John Belushi's film career. Dean Wormer (John Vernon) puts the titular frat on double-secret probation, and it's up to Bluto, Flounder, Pinto and the rest of the brothers to get even. This edition includes retrospective featurettes and more.",
    "year": 1978,
    "rating": "R",
    "directorID": 240,
    "countryID": 2,
    "posterName": "NationalLampoon'sAnimalHouse.jpg"
}, {
    "id": 361,
    "title": "Night of the Living Dead",
    "description": "As dead bodies inexplicably return to life and feast on human flesh, young Barbara (Judith O'Dea) joins a group of survivors in a farmhouse hoping to protect themselves from the hordes of advancing zombies. But soon enough, only one person remains. Writer-director George A. Romero's low-budget horror classic continues to inspire heebie-jeebies, in part because of the randomness of the zombies' targets.",
    "year": 1968,
    "rating": "UR",
    "directorID": 152,
    "countryID": 2,
    "posterName": "NightoftheLivingDead.jpg"
}, {
    "id": 362,
    "title": "1900",
    "description": "Bernardo Bertolucci's epic tale follows the lives of two Italian men -- a peasant (Gerard Depardieu) and a landowner (Robert De Niro) -- both born on Jan. 1, 1900. Friends as children, the two become estranged as their differing social status pulls them apart. Their personal conflicts mirror the political events in Italy, as both fascism and socialism gain footholds in the country. Sterling Hayden, Donald Sutherland and Burt Lancaster co-star.",
    "year": 1977,
    "rating": "NR",
    "directorID": 136,
    "countryID": 1,
    "posterName": "1900.jpg"
}, {
    "id": 363,
    "title": "Nobody's Fool",
    "description": "Rosanna Arquette stars as Cassie, a waitress who graduated from the school of hard knocks. After surviving a horrible relationship and giving her baby up for adoption, she's gun-shy about trusting anyone -- until she meets a stagehand named Riley (Eric Roberts). He seems to be a good catch, but will Cassie's doubts cause her to miss her one chance at happiness? Pulitzer Prize winner Beth Henley penned the screenplay for this genial romantic comedy.",
    "year": 1994,
    "rating": "PG-13",
    "directorID": 241,
    "countryID": 2,
    "posterName": "Nobody'sFool.jpg"
}, {
    "id": 364,
    "title": "Notorious",
    "description": "Government agent T.R. Devlin (Cary Grant) recruits American beauty Alicia Huberman (Ingrid Bergman) to spy on her father's influential Nazi friends in this top-notch Alfred Hitchcock espionage thriller that builds to an incredibly suspenseful climax. As part of her cover, Alicia marries one of her father's associates (Claude Rains), but she finds she's falling hopelessly in love with the man who hired her.",
    "year": 1946,
    "rating": "NR",
    "directorID": 80,
    "countryID": 2,
    "posterName": "Notorious.jpg"
}, {
    "id": 365,
    "title": "Now, Voyager",
    "description": "Bridled by an autocratic mother, Charlotte Vale (Bette Davis) borders on a nervous breakdown. But when a psychiatrist (Claude Rains) persuades Charlotte to drastically change her life, she blossoms into a confident, self-possessed woman. Charlotte then takes a voyage, where she falls in love with the unhappily married Jerry (Paul Henreid). Though their romance is doomed, Charlotte finds solace in helping Jerry's emotionally unhinged daughter.",
    "year": 1942,
    "rating": "NR",
    "directorID": 242,
    "countryID": 2,
    "posterName": "Now,Voyager.jpg"
}, {
    "id": 366,
    "title": "Oklahoma!",
    "description": "During Oklahoma's freewheeling territorial days, coquettish Laurey Williams (Shirley Jones) falls for good-natured cowboy Curly McLain (Gordon MacRae). Unfortunately, she also provokes the unwanted affections of brooding hired hand Jud Fry (Rod Steiger). Classic Rodgers and Hammerstein songs abound in this Academy Award-winning musical from director Fred Zinnemann that was adapted for the big screen after a successful Broadway run.",
    "year": 1955,
    "rating": "G",
    "directorID": 153,
    "countryID": 2,
    "posterName": "Oklahoma!.jpg"
}, {
    "id": 367,
    "title": "On the Beach",
    "description": "In this 1959 doomsday classic, a U.S. submarine led by Capt. Dwight Towers (Gregory Peck) surfaces near Melbourne, where the passengers learn that nuclear war has wiped out most of humanity. And it won't be long before radiation kills the Australians as well. The tense drama features standout performances by Peck, Ava Gardner as Towers's lover, Fred Astaire as a guilt-wracked scientist and Anthony Perkins and Donna Anderson as newlyweds.",
    "year": 1959,
    "rating": "NR",
    "directorID": 163,
    "countryID": 2,
    "posterName": "OntheBeach.jpg"
}, {
    "id": 368,
    "title": "One Flew Over the Cuckoo's Nest",
    "description": "While serving time for insanity at a state mental hospital, implacable rabble-rouser Randle Patrick McMurphy (Jack Nicholson) inspires his fellow patients to rebel against the authoritarian rule of head nurse Mildred Ratched (Louise Fletcher). This Milos Forman masterpiece was the first film since It Happened One Night (1934) to take all five major Oscar prizes for picture, director, screenplay, actor (Nicholson) and actress (Fletcher).",
    "year": 1975,
    "rating": "R",
    "directorID": 24,
    "countryID": 2,
    "posterName": "OneFlewOvertheCuckoo'sNest.jpg"
}, {
    "id": 369,
    "title": "One Foot in Heaven",
    "description": "",
    "year": 1941,
    "rating": "",
    "directorID": 242,
    "countryID": 17,
    "posterName": null
}, {
    "id": 370,
    "title": "One Night of Love",
    "description": "Mary Barrett (Grace Moore) is a talented young opera singer who catches the eye of Guilio Monteverdi (Tullio Carminati), a musical legend. Monteverdi becomes her mentor, and the two fall in love during the long hours of rehearsal. However, jealousy makes it impossible for them to admit their true feelings. The film's soundtrack includes several memorable operatic pieces and won the Academy Award for Best Score.",
    "year": 1934,
    "rating": "NR",
    "directorID": 243,
    "countryID": 17,
    "posterName": "OneNightofLove.jpg"
}, {
    "id": 371,
    "title": "One, Two, Three",
    "description": "Director Billy Wilder's Cold War farce comes off at a breakneck pace that will leave your head spinning. C.J. McNamara (James Cagney) is a Coca-Cola executive who travels to Berlin to promote the product on the other side of the Iron Curtain. But he soon learns that his real job is baby-sitting his boss's teenage daughter, Scarlett (Pamela Tiffin), who has secretly married volatile Communist Otto Piffl (Horst Bucholz).",
    "year": 1961,
    "rating": "NR",
    "directorID": 39,
    "countryID": 2,
    "posterName": "One,Two,Three.jpg"
}, {
    "id": 372,
    "title": "Only Angels Have Wings",
    "description": "A macho group of pilots brave the rugged Andes in director Howard Hawks's film about daredevil Geoff Carter's (Cary Grant) air-delivery outfit. Carter's men must be ready to face danger on every flight, so when pilot Barthelmess (Bat McPherson) makes a tragic error, he's cast off by his fellow pilots. Barthelmess's wife, Judith (Rita Hayworth), tries to seduce Geoff, but Geoff is intrigued by stranded showgirl Bonnie Lee (Jean Arthur).",
    "year": 1939,
    "rating": "NR",
    "directorID": 53,
    "countryID": 2,
    "posterName": "OnlyAngelsHaveWings.jpg"
}, {
    "id": 373,
    "title": "The Opposite of Sex",
    "description": "When self-involved, reckless and over-the-top Dedee Truitt (Christina Ricci), a 16-year-old \"actress,\" moves in with her brother, Bill (Martin Donovan), and his lover, Matt (Ivan Sergei), she quickly seduces her way into a gender-bending love triangle. Don Roos (Happy Endings) writes and directs this unpredictable dramedy with witty, original narration; Johnny Galecki, Lisa Kudrow, Lyle Lovett and William Lee Scott co-star.",
    "year": 1998,
    "rating": "R",
    "directorID": 244,
    "countryID": 2,
    "posterName": "TheOppositeofSex.jpg"
}, {
    "id": 374,
    "title": "Ordinary People",
    "description": "Everything is in its proper place in the Jarrett household -- except the past. Mary Tyler Moore scored an Oscar nod for her role as repressed mother Beth Jarrett, whose favorite son has died, leaving her with another (Timothy Hutton) she can barely tolerate. The film also netted four Academy Awards, including Best Picture, Best Director (Robert Redford, in his directorial bow), Best Adapted Screenplay and Best Supporting Actor for young Hutton. ",
    "year": 1980,
    "rating": "R",
    "directorID": 245,
    "countryID": 2,
    "posterName": "OrdinaryPeople.jpg"
}, {
    "id": 375,
    "title": "Othello",
    "description": "Orson Welles's notorious film adaptation of William Shakespeare's play  -- which tied for honors as best film of the year at Cannes in 1952 -- tells the familiar tale of a Moor (Welles) whose jealousy leads to tragedy. Major problems with money, casting and the film's soundtrack left the picture in shambles until it was restored in 1992, resulting in this vastly original, visually stunning take on the Bard as only Welles could create.",
    "year": 1952,
    "rating": "NR",
    "directorID": 130,
    "countryID": 1,
    "posterName": "Othello.jpg"
}, {
    "id": 376,
    "title": "Our Town",
    "description": "Thornton Wilder's Pulitzer Prize-winning play covers the lives and events of two families in a woodsy New Hampshire village from the year 1900 through 1913. In this film adaptation, William Holden and Martha Scott reprise their roles from the Broadway production, playing teenagers who fall in love, marry and bear a child. Throughout, the film hammers home its message about the preciousness of time in people's short lives. ",
    "year": 1940,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "OurTown.jpg"
}, {
    "id": 377,
    "title": "The Overlanders",
    "description": "",
    "year": 1946,
    "rating": "",
    "directorID": 246,
    "countryID": 19,
    "posterName": null
}, {
    "id": 378,
    "title": "Paisan",
    "description": "Set during Italy's liberation near the end of WWII, this compelling compilation of vignettes showcases fascinating encounters between American soldiers and Italian civilians, including a Sicilian prisoner (Carmela Sazio), a young streetwise thief (Alfonsino Pasca) and a prostitute (Maria Michi). Directed by renowned filmmaker Roberto Rossellini, this vividly real docudrama features a mix of professional and nonprofessional actors.",
    "year": 1948,
    "rating": "NR",
    "directorID": 247,
    "countryID": 7,
    "posterName": "Paisan.jpg"
}, {
    "id": 379,
    "title": "The People Vs. Larry Flynt",
    "description": "Notorious pornographer Larry Flynt (Woody Harrelson) carries his free-speech campaign from lowly strip clubs to the U.S. Supreme Court in this Academy Award-nominated film about censorship and the sex industry from director Milos Forman. Blending details of the <i>Hustler</i> publisher's legal battles with scenes from his personal life, the film also examines Flynt's relationships with his lawyer (Edward Norton) and drug-addicted wife (Courtney Love).",
    "year": 1996,
    "rating": "R",
    "directorID": 24,
    "countryID": 2,
    "posterName": "ThePeopleVs.LarryFlynt.jpg"
}, {
    "id": 380,
    "title": "Persona",
    "description": "To achieve more effective treatment, a nurse (Bibi Andersson) and her patient (Liv Ullmann) -- an actress who's lost the power of speech -- check into a private cottage by the sea, where the two isolated women become co-dependent and insanely jealous of each other. It's a case of the cure being worse than the affliction in this black-and-white cinematic classic directed by Swedish master Ingmar Bergman.",
    "year": 1967,
    "rating": "NR",
    "directorID": 141,
    "countryID": 23,
    "posterName": "Persona.jpg"
}, {
    "id": 381,
    "title": "Persuasion",
    "description": "This film adaptation of Jane Austen's last novel follows Anne Elliot, the daughter of a financially troubled aristocratic family, who is persuaded to break her engagement to Frederick Wentworth, a young sea captain of meager means. Years later, money troubles force Anne's father to rent out the family estate to Admiral Croft, and Anne is again thrown into company with Frederick -- who is now rich, successful and perhaps still in love with Anne.",
    "year": 1995,
    "rating": "PG",
    "directorID": 248,
    "countryID": 10,
    "posterName": "Persuasion.jpg"
}, {
    "id": 382,
    "title": "The Philadelphia Story",
    "description": "Socialite Tracy Lord (Katharine Hepburn) prepares to remarry, but her ex (Cary Grant) and a tabloid reporter (Best Supporting Actor Oscar-winner James Stewart) have other ideas as they converge on her home for a fateful visit. The three stars form an incomparable trio in one of the most tantalizing screwball romances ever. And under the direction of George Cukor, this once-urbane Broadway comedy springs to life with precision and wit.",
    "year": 1940,
    "rating": "NR",
    "directorID": 3,
    "countryID": 2,
    "posterName": "ThePhiladelphiaStory.jpg"
}, {
    "id": 383,
    "title": "The Pianist",
    "description": "After more than a decade apart, two sisters (Gail Travers and Macha Grenon) reunite at a childhood friend's piano concert to look back on their teenage years and the often-complicated relationship they shared with their neighborhood piano teacher (Eiji Okuda) -- now a world-famous pianist. Based on the novel by Ann Ireland, this steamy coming-of-age tale is laced with sexual tension and sibling rivalry. ",
    "year": 2002,
    "rating": "NR",
    "directorID": 126,
    "countryID": 1,
    "posterName": "ThePianist.jpg"
}, {
    "id": 384,
    "title": "The Pillow Book",
    "description": "A bizarre mix of carnality and calligraphy, The Pillow Book is a lush foray into the aphrodisiacal pleasures of the flesh and mind. A woman (Vivian Wu) melds her love of life and literature in an unusual fashion -- by seeking a lover who will write on her skin. She eventually leaves her husband for a British man (Ewan McGregor) who will satisfy her needs, but her father's publisher stands in their way. Peter Greenaway directs.",
    "year": 1997,
    "rating": "UR",
    "directorID": 179,
    "countryID": 1,
    "posterName": "ThePillowBook.jpg"
}, {
    "id": 385,
    "title": "Ponette",
    "description": "When her mother dies in a car accident, 4-year-old Ponette (Victoire Thivisol) is left physically and emotionally scarred and in the care of her grief-stricken father. Sent to live with family for a while, Ponette slowly comes to terms with her loss. Thivisol earned a Best Actress award at the Venice Film Festival for her powerful, haunting performance as her character sullenly navigates a world comprised mostly of children's faces.",
    "year": 1997,
    "rating": "NR",
    "directorID": 249,
    "countryID": 1,
    "posterName": "Ponette.jpg"
}, {
    "id": 386,
    "title": "Il Postino (The Postman)",
    "description": "",
    "year": 1994,
    "rating": "",
    "directorID": 250,
    "countryID": 33,
    "posterName": "IlPostino(ThePostman).jpg"
}, {
    "id": 387,
    "title": "Pride and Prejudice",
    "description": "With Laurence Olivier playing the smoldering Mr. Darcy and Greer Garson portraying the strong-willed eldest Bennet daughter intent on landing him, the sparks fly in this lively adaptation of Jane Austen's classic novel. Maureen O'Sullivan, Ann Rutherford, Heather Angel and Marsha Hunt play the other four Bennet sisters -- all of whom their status-conscious mother (Mary Boland) is eager to marry off in this Oscar-winning comedy.",
    "year": 1940,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "PrideandPrejudice.jpg"
}, {
    "id": 388,
    "title": "The Private Life of Henry VIII",
    "description": "Charles Laughton makes the larger-than-life King Henry VIII seem even bigger in a stunning performance that centers on the ruler's romantic life. Acclaimed director Alexander Korda shows a mercurial king who is governed by love, lust and politics. The classic film traces Henry's six marriages, including the tragic story of Catherine Howard, and his disastrous fourth union with Anne of Cleves, played by Laughton's real-life wife, Elsa Lancaster.",
    "year": 1933,
    "rating": "NR",
    "directorID": 251,
    "countryID": 24,
    "posterName": "ThePrivateLifeofHenryVIII.jpg"
}, {
    "id": 389,
    "title": "The Public Enemy",
    "description": "Crime doesn't pay, as James Cagney learns in this vintage Warner Brothers gangster movie that's become a much-imitated classic of the genre. Cagney plays hot-headed Tom Powers, who's on the fast track running illegal hooch during Prohibition. Directed by William A. Wellman, the film is famous for its scene where a ticked-off Cagney smashes his breakfast grapefruit in Mae Clarke's face. Jean Harlow and Joan Blondell co-star.",
    "year": 1931,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "ThePublicEnemy.jpg"
}, {
    "id": 390,
    "title": "Pulp Fiction",
    "description": "A burger-loving hit man (John Travolta), his philosophical partner (Samuel L. Jackson), a drug-addled gangster's moll (Uma Thurman) and a washed-up boxer (Bruce Willis) converge in this sprawling, comedic crime caper fueled by director and co-writer Quentin Tarantino's whip-smart dialogue. Their adventures unfurl in three stories that ingeniously trip back and forth in time, resulting in one of the most audacious and imitated films of the 1990s.",
    "year": 1994,
    "rating": "R",
    "directorID": 252,
    "countryID": 2,
    "posterName": "PulpFiction.jpg"
}, {
    "id": 391,
    "title": "The Purple Rose of Cairo",
    "description": "Stuck in a dead-end job and saddled with an abusive husband, Cecilia (Mia Farrow) depends on the movies for her escape. She sees one picture, The Purple Rose of Cairo, so often that the film's star (Jeff Daniels) walks off the screen and into her life &#x2026; and promptly falls in love with her. Writer-director Woody Allen's touching romantic comedy bagged a Golden Globe for Best Screenplay and was nominated for a host of foreign and critics' awards. ",
    "year": 1985,
    "rating": "PG",
    "directorID": 38,
    "countryID": 2,
    "posterName": "ThePurpleRoseofCairo.jpg"
}, {
    "id": 392,
    "title": "Red",
    "description": "In this meditation on the need for passion and human connection -- the final film in Krzysztof Kieslowski's \"three colors\" trilogy -- an accident brings together two very different people: Valentine (Irene Jacob), a model, and Joseph (Jean-Louis Trintignant), a retired judge. Since love chooses to pair people's heart at random, theirs becomes a fated and deeply improbable, but altogether true, romance.",
    "year": 1994,
    "rating": "R",
    "directorID": 253,
    "countryID": 1,
    "posterName": "Red.jpg"
}, {
    "id": 393,
    "title": "Richard III",
    "description": "Ian McKellen stars in the title role in this visually inventive adaptation of Shakespeare's classic drama, which is set in 1930s England after a civil war has torn the country apart and left the people under fascist rule. Richard plots against his brother, Edward (John Wood), in his quest to usurp the throne, and will stop at nothing in pursuit of his goal. The film received Oscar nominations for art direction and costume design.",
    "year": 1956,
    "rating": "R",
    "directorID": 254,
    "countryID": 10,
    "posterName": "RichardIII.jpg"
}, {
    "id": 394,
    "title": "Roger & Me",
    "description": "In this blistering, satirical documentary, ex-journalist Michael Moore gives a personal account of the tough times in his hometown of Flint, Mich., after the General Motors plant was closed in the mid-1980s. The film revolves around Moore's dogged attempts to gain an interview with Roger Smith, the elusive and well-insulated head of GM and the man responsible for massive layoffs that eliminated more than 30,000 jobs and left the town destitute.",
    "year": 1989,
    "rating": "R",
    "directorID": 255,
    "countryID": 2,
    "posterName": "Roger&Me.jpg"
}, {
    "id": 395,
    "title": "Romeo and Juliet",
    "description": "Leslie Howard and Norma Shearer star in this classic production of Shakespeare's famous romantic tragedy. Although Romeo and Juliet fall deeply in love, the long-standing feud between their families forbids them from marrying. This extravagant film received four Oscar nominations, including Best Picture, and is celebrated for its sumptuous sets and costumes, some of which were inspired by Botticelli paintings.",
    "year": 1936,
    "rating": "NR",
    "directorID": 256,
    "countryID": 7,
    "posterName": "RomeoandJuliet.jpg"
}, {
    "id": 396,
    "title": "Romeo and Juliet",
    "description": "Director Franco Zeffirelli's 1968 version of Shakespeare's Romeo and Juliet was touted at the time of its release (successfully, if the box-office receipts are any indication), as something of a \"youth trip\" movie. This is because Zeffirelli broke the long-standing tradition of casting over-aged, sometimes grey-haired players in the title roles. Seventeen-year-old Leonard Whiting plays Romeo, with 15-year-old Olivia Hussey as Juliet. The youthfulness and inexperience of the leading players works beautifully in the more passionate sequences (some of these breaking further ground by being played in the nude). Among the younger players are Michael York as Tybalt and John McEnery as Mercutio. The duel between Romeo and Tybalt starts out as a harmless, frat-boy exchange of insults, then escalates into tragedy before any of the participants are fully aware of what has happened. Photographed by PASQUALINO DESANTIS on various locations in Italy, Romeo and Juliet was one of the most profitable film adaptations of Shakespeare ever produced. Its most lasting legacy is its popular main theme music, composed by Nino Rota.",
    "year": 1968,
    "rating": null,
    "directorID": 256,
    "countryID": 7,
    "posterName": "RomeoandJuliet.jpg"
}, {
    "id": 397,
    "title": "Ruggles of Red Gap",
    "description": "",
    "year": 1935,
    "rating": "",
    "directorID": 48,
    "countryID": 17,
    "posterName": "RugglesofRedGap.jpg"
}, {
    "id": 398,
    "title": "Rushmore",
    "description": "Wunderkind Max Fischer (Jason Schwartzman), a sophomore at upscale Rushmore Academy and the president of myriad school clubs, sees his world turn topsy-turvy when he's smitten with widowed first-grade teacher Rosemary Cross (Olivia Williams). To win her heart, Max enlists the aid of self-made steel magnate and school benefactor Herman J. Blume (Bill Murray), only to end up vying with the millionaire industrialist for Rosemary's affections.",
    "year": 1998,
    "rating": "R",
    "directorID": 257,
    "countryID": 2,
    "posterName": "Rushmore.jpg"
}, {
    "id": 399,
    "title": "Ruthless People",
    "description": "Unscrupulous Bel-Air millionaire Sam (Danny DeVito) plans to murder his shrewish wife, Barbara (Bette Midler). But when he arrives home to do the deed, he finds she's been kidnapped. The kidnappers (Judge Reinhold and Helen Slater) ask for $500,000 in ransom or they'll kill her. Sam, naturally, believes this to be the answers to his prayers. But Barbara and her kidnappers have other plans. Jim Abrahams, David Zucker and Jerry Zucker co-direct.",
    "year": 1986,
    "rating": "R",
    "directorID": 258,
    "countryID": 2,
    "posterName": "RuthlessPeople.jpg"
}, {
    "id": 400,
    "title": "Salesman",
    "description": "Before delivering Gimme Shelter, cinema verit&#x00E9; filmmakers Charlotte Zwerin and brothers Albert and David Maysles hatched this culturally significant documentary examining the utterly American profession of the traveling salesman. The film follows four reps of the Mid-American Bible Company as they peddle gold-embossed versions of \"the Word\" to families with little interest in fancy scriptures, providing a searing portrait of life on the road.",
    "year": 1969,
    "rating": "NR",
    "directorID": 259,
    "countryID": 2,
    "posterName": "Salesman.jpg"
}, {
    "id": 401,
    "title": "Saturday Night and Sunday Morning",
    "description": "Albert Finney stars as a working-class rebel who spends the week tied to a dead-end factory job and the weekend in a haze of booze and empty affairs. But that all changes when he becomes romantically involved with a beautiful, conventional woman. Now, he must choose between the voice of conscience and a life where settling down could mean settling for less.",
    "year": 1961,
    "rating": "UR",
    "directorID": 260,
    "countryID": 10,
    "posterName": "SaturdayNightandSundayMorning.jpg"
}, {
    "id": 402,
    "title": "Saving Private Ryan",
    "description": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain Tom Hanks and seven men are tasked with penetrating German-held territory and bringing the boy home. Steven Spielberg and cinematographer Janusz Kaminski paint a harrowing picture of the price of war and heroism -- one that netted them Oscars for Best Director and Best Cinematography, respectively.",
    "year": 1998,
    "rating": "R",
    "directorID": 11,
    "countryID": 10,
    "posterName": "SavingPrivateRyan.jpg"
}, {
    "id": 403,
    "title": "The Search",
    "description": "Filmed in Tibet, this appealing drama tells the story of a director who travels through the country with his crew, searching for the perfect actor and actress to portray the leads in his version of a traditional Tibetan opera. Finding anyone capable proves difficult, but eventually, a vocally gifted peasant girl charms the crew, and she joins them on their quest for an actor, insisting they stop to see her ex-boyfriend in a distant town.",
    "year": 1948,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": null
}, {
    "id": 404,
    "title": "Secret Honor",
    "description": "Philip Baker Hall stars as Richard Nixon in this Robert Altman adaptation of a one-man stage play that tracks the former president as his career takes a dive. The film opens in the aftermath of Nixon's resignation after much speculation about his involvement in the Watergate scandal. As the reality of his life and choices begins to set in, Nixon propels himself further into a drunken stupor and lets loose on all his past and present enemies.",
    "year": 1985,
    "rating": "NR",
    "directorID": 194,
    "countryID": 2,
    "posterName": "SecretHonor.jpg"
}, {
    "id": 405,
    "title": "Secrets and Lies",
    "description": "",
    "year": 1996,
    "rating": "",
    "directorID": 261,
    "countryID": 1,
    "posterName": "SecretsandLies.jpg"
}, {
    "id": 406,
    "title": "The Servant",
    "description": "This BAFTA-winning drama stars Dirk Bogarde (awarded Best Actor) as Barrett, a seemingly dedicated manservant hired by dim-witted playboy Tony (played by James Fox). As Barrett earns his master's trust, he plots to take control of Tony's affairs, and soon, the servant becomes the master. Written by acclaimed playwright Harold Pinter, this landmark film was directed by Joseph Losey, in the first of three collaborations between the two.",
    "year": 1963,
    "rating": "NR",
    "directorID": 262,
    "countryID": 10,
    "posterName": "TheServant.jpg"
}, {
    "id": 407,
    "title": "Sexy Beast",
    "description": "Ben Kingsley is unforgettably menacing in this intense crime drama as sociopathic gangster Don Logan, who tries to recruit an ex-partner (Ray Winstone) for a high-stakes heist and won't take no for an answer -- even when the retired criminal refuses. Tension hits a fever pitch as this battle of wills plays out in a story that is as funny as it is terrifying. Kingsley earned an Academy Award nomination for his performance.",
    "year": 2001,
    "rating": "R",
    "directorID": 263,
    "countryID": 6,
    "posterName": "SexyBeast.jpg"
}, {
    "id": 408,
    "title": "Shakespeare in Love",
    "description": "Young Shakespeare (Joseph Fiennes) is forced to stage his latest comedy, \"Romeo and Ethel, the Pirate's Daughter,\" before it's even written. When a lovely noblewoman (Gwyneth Paltrow) auditions for a role, they fall into forbidden love -- and his play finds a new life (and title). As their relationship progresses, Shakespeare's comedy soon transforms into tragedy. This bittersweet romance won seven Oscars, including Best Picture and Best Actress.",
    "year": 1998,
    "rating": "R",
    "directorID": 264,
    "countryID": 2,
    "posterName": "ShakespeareinLove.jpg"
}, {
    "id": 409,
    "title": "Sherman's March",
    "description": "Filmmaker Ross McElwee grew up in the South and always marveled at how the folks there were affected by Union general William Tecumseh Sherman's legacy. Aiming to delve deeper into the region's interest, McElwee revisits the path of the general's march that took down the Confederacy. But the tone of his documentary changes when he learns his girlfriend has left him, causing him to second-guess himself with each woman he meets during the shoot. ",
    "year": 1986,
    "rating": "UR",
    "directorID": 265,
    "countryID": 2,
    "posterName": "Sherman'sMarch.jpg"
}, {
    "id": 410,
    "title": "Ship of Fools",
    "description": "Vivien Leigh, Simone Signoret, Jose Ferrer and Lee Marvin give riveting performances in this Stanley Kramer film adaptation of Katherine Anne Porter's 1962 novel. The compelling story recounts the voyage of a German ship from Mexico to Bremerhaven, Germany, prior to World War II; it's a stormy journey fraught with anti-semitism, unrequited love, xenophobia and dissatisfied lives. The film was Vivien Leigh's final screen appearance.",
    "year": 1965,
    "rating": "NR",
    "directorID": 163,
    "countryID": 2,
    "posterName": "ShipofFools.jpg"
}, {
    "id": 411,
    "title": "Shrek",
    "description": "",
    "year": 2001,
    "rating": "",
    "directorID": 266,
    "countryID": 2,
    "posterName": "Shrek.jpg"
}, {
    "id": 412,
    "title": "The Silent World",
    "description": "Louis Malle co-directed this Oscar-winning documentary with famed oceanographer Jacques Cousteau. The film follows Cousteau and his crew as they embark on an exploratory expedition to map the ocean floor using advanced sonar. Featuring stunning underwater photography, The Silent World also won the Palme d'Or award at the Cannes Film Festival and a Best Foreign Film Award from the National Board of Review.",
    "year": 1956,
    "rating": "NR",
    "directorID": 267,
    "countryID": 1,
    "posterName": null
}, {
    "id": 413,
    "title": "Sitting Pretty",
    "description": "",
    "year": 1948,
    "rating": "",
    "directorID": 268,
    "countryID": 17,
    "posterName": null
}, {
    "id": 414,
    "title": "A Slight Case of Murder",
    "description": "Slyly spoofing his gangster persona in this quirky comedy, Edward G. Robinson stars as Remy Marco, a bootlegger trying to keep his business afloat after Prohibition ends. Trouble is, his foul-tasting beer can't compete in the free market, causing sales to plummet and threatening to put Marco in the poor house. As if that weren't enough, he must also contend with the cops watching his every move -- and four corpses in his vacation home.",
    "year": 1938,
    "rating": "NR",
    "directorID": 269,
    "countryID": 17,
    "posterName": "ASlightCaseofMurder.jpg"
}, {
    "id": 415,
    "title": "The Snake Pit",
    "description": "Olivia de Havilland earned an Oscar nomination for her work in this stark drama as Virginia Cunningham, a married young woman whose idyllic life falls apart when she sinks into a world of psychosis and is eventually placed in an institution. Adapted from Mary Jane Ward's gripping autobiography, Anatole Litvak's portrait of mental illness examines the treatment of mentally unstable patients in the late 1940s and '50s.",
    "year": 1948,
    "rating": "NR",
    "directorID": 34,
    "countryID": 17,
    "posterName": "TheSnakePit.jpg"
}, {
    "id": 416,
    "title": "Spartacus",
    "description": "Stanley Kubrick directed this epic saga based on ancient events, chronicling the birth of a vagabond slave-army led by an ex-gladiator named Spartacus (Kirk Douglas) that threatens the sovereignty of all-mighty Rome. This film has everything, including a wonderfully funny (and Oscar-winning) performance from Peter Ustinov as the cowardly owner of a gladiator school. Laurence Olivier, Charles Laughton, Jean Simmons and Tony Curtis co-star.",
    "year": 1960,
    "rating": "PG-13",
    "directorID": 59,
    "countryID": 2,
    "posterName": "Spartacus.jpg"
}, {
    "id": 417,
    "title": "Spirited Away",
    "description": "During her family's move to the suburbs, Chihiro (voiced by Daveigh Chase) wanders into a magical world where a witch rules -- and those who disobey her are turned into animals. When Chihiro's parents become pigs, she must find a way to help them return to their human form. Adapted from the Japanese original, director Hayao Miyazaki's adventure tale won the Best Animated Feature Oscar for its enchanting story.",
    "year": 2002,
    "rating": "PG",
    "directorID": 270,
    "countryID": 28,
    "posterName": "SpiritedAway.jpg"
}, {
    "id": 418,
    "title": "Stalag 17",
    "description": "For the Allied prisoners of Stalag 17, every escape attempt ends the same way: disaster. Cynical Sgt. Sefton (William Holden, in his Oscar-winning role) thinks they're all fools for trying -- but soon his hectoring starts raising suspicions that there's a German spy among them. Could that spy be him? Director Billy Wilder effortlessly mixes broad comedy and high-tension drama in this World War II classic.",
    "year": 1953,
    "rating": "NR",
    "directorID": 39,
    "countryID": 2,
    "posterName": "Stalag17.jpg"
}, {
    "id": 419,
    "title": "State Fair",
    "description": "When a small-town family of four heads to the Iowa State Fair with their prize pig, they bring home more than just a few blue ribbons. Against a backdrop of colorful characters and musical numbers, Margy (Jeanne Craine) and her brother, Wayne (Dick Haymes), each find sweethearts for the first time. Hit-writing duo Rodgers and Hammerstein provide a captivating score that includes the Oscar-winning \"It Might As Well Be Spring.\"",
    "year": 1933,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": null
}, {
    "id": 420,
    "title": "Stop Making Sense",
    "description": "",
    "year": 1984,
    "rating": "",
    "directorID": 271,
    "countryID": 2,
    "posterName": "StopMakingSense.jpg"
}, {
    "id": 421,
    "title": "The Story of G.I. Joe",
    "description": "Director William A. Wellman's gritty drama centers on Pulitzer Prize-winning war correspondent Ernie Pyle (Burgess Meredith) as he follows an American infantry platoon from North Africa to Italy to report the soldiers' stories from the front lines during World War II. In an Oscar-nominated supporting performance, Robert Mitchum plays the unit's battle-weary but unflinching commanding officer, Capt. Bill Walker.",
    "year": 1945,
    "rating": "NR",
    "directorID": null,
    "countryID": 17,
    "posterName": "TheStoryofG.I.Joe.jpg"
}, {
    "id": 422,
    "title": "Storytelling",
    "description": "Writer-director Todd Solondz (Welcome to the Dollhouse) presents two stories -- \"Fiction\" and \"Non-Fiction\" -- focusing on the racial and sexual tension bubbling in a college writing class and the hidden fractures in a suburban household. Raw, chilling and wrenching in its exploration of how we turn fact into fiction and lies into truth, Storytelling serves as a modern fable for people who don't need happy endings.",
    "year": 2001,
    "rating": "R",
    "directorID": 199,
    "countryID": 2,
    "posterName": "Storytelling.jpg"
}, {
    "id": 423,
    "title": "The Straight Story",
    "description": "When his brother, Lyle (Harry Dean Stanton), falls ill, Iowa farmer Alvin Straight (Oscar nominee Richard Farnsworth) pledges to go to Lyle's side -- despite being unable to drive -- armed with a riding lawnmower for transportation, a tent and unshakable determination. Leaving his mentally challenged daughter (Sissy Spacek) at home, Alvin sets out to cover the 300 miles to his brother's house in a weeks-long journey of healing and remembrance.",
    "year": 1999,
    "rating": "G",
    "directorID": 87,
    "countryID": 1,
    "posterName": "TheStraightStory.jpg"
}, {
    "id": 424,
    "title": "A Streetcar Named Desire",
    "description": "After losing the family plantation to creditors, aging Southern belle Blanche DuBois (Vivien Leigh) travels to New Orleans seeking solace in her sister, Stella (Kim Hunter). Instead, she goes toe-to-toe with Stella's brute of a husband, Stanley (Marlon Brando). Leigh, Hunter and Karl Malden all took home Oscars for their work in this sizzling adaptation of Tennessee Williams's classic rumination on carnal attraction and faded gentility.",
    "year": 1951,
    "rating": "PG",
    "directorID": 27,
    "countryID": 2,
    "posterName": "AStreetcarNamedDesire.jpg"
}, {
    "id": 425,
    "title": "Sunset Boulevard",
    "description": "Running from debt collectors, screenwriter Joe (William Holden) stumbles upon the crumbling mansion of former silent-film star Norma Desmond (Gloria Swanson). As he begins working for Norma, writing a comeback screenplay, their professional relationship evolves into something more. A provocative look inside Hollywood show business, Billy Wilder's classic noir won Academy Awards for Art Direction, Music and Screenplay. ",
    "year": 1950,
    "rating": "NR",
    "directorID": 39,
    "countryID": 2,
    "posterName": "SunsetBoulevard.jpg"
}, {
    "id": 426,
    "title": "The Sweet Hereafter",
    "description": "Director Atom Egoyan's haunting adaptation of Russell Banks's novel follows a grieving mountain community in the wake of a tragic school bus accident that takes the lives of numerous local children. A lawyer (Ian Holm) arrives in town to persuade the survivors to initiate a class-action lawsuit, driving apart the once tight-knit hamlet. Meanwhile, a teen crippled in the crash (Sarah Polley) must choose between mourning and moving on.",
    "year": 1997,
    "rating": "R",
    "directorID": 5,
    "countryID": 3,
    "posterName": "TheSweetHereafter.jpg"
}, {
    "id": 427,
    "title": "Swept Away",
    "description": "When spoiled, wealthy Amber Leighton (Madonna) goes yachting on holiday, she clashes with Giuseppe (Adriano Giannini), a sailor who resents her magisterial behavior. But the two are stuck with each other after they become shipwrecked on a remote island. In this deserted tropical paradise, their roles reverse, and the power shift sends them into a wild, passionate affair. Guy Ritchie (RocknRolla) directs his then-wife in the lead role.",
    "year": 1974,
    "rating": "R",
    "directorID": null,
    "countryID": 7,
    "posterName": "SweptAway.jpg"
}, {
    "id": 428,
    "title": "Swing Time",
    "description": "In this classic musical, Fred Astaire plays Lucky, a gambler who misses his wedding to a young socialite and must come up with $25,000 for another chance with her. But after meeting lovely dance instructor Penny (Ginger Rogers), he forgets about his old flame. Often cited as the best of the 10 Astaire and Rogers movies, <i>Time Magazine</i> named it one of its All-Time 100 Movies. Songs include \"The Way You Look Tonight.\"",
    "year": 1936,
    "rating": "NR",
    "directorID": 272,
    "countryID": 2,
    "posterName": "SwingTime.jpg"
}, {
    "id": 429,
    "title": "Talk to Her",
    "description": "Pedro Almod&#x00F3;var's Oscar-winning drama explores the bond forged between two men under tragic circumstances. When a bullfighting accident sends his girlfriend, Lydia (Rosario Flores), into a coma, Marco (Dar&#x00ED;o Grandinetti) visits her in a clinic where he befriends nurse Benigno (Javier C&#x00E1;mara). Shy and a bit strange, Benigno tirelessly tends to another patient, Alicia (Leonor Watling), a comatose ballet dancer and the object of his obsession.",
    "year": 2002,
    "rating": "R",
    "directorID": 19,
    "countryID": 6,
    "posterName": "TalktoHer.jpg"
}, {
    "id": 430,
    "title": "Taste of Cherry",
    "description": "In Iranian director's Abbas Kiarostami's award-winning drama, Mister Badii (Homayoun Ershadi) drives about Tehran looking for someone to bury him when he commits suicide -- or rescue him if he fails. But it's difficult to find anyone who will help. A taxidermist (Abdolrahman Bagheri) eventually agrees, mostly so he can use the money to care for his sick son. But there's another reason -- he once attempted suicide himself.",
    "year": 1997,
    "rating": "NR",
    "directorID": 132,
    "countryID": 22,
    "posterName": "TasteofCherry.jpg"
}, {
    "id": 431,
    "title": "A Taste of Honey",
    "description": "Young Jo (Rita Tushingham) struggles to survive a series of hard knocks in Tony Richardson's realistic tale of working-class life in 1960s England. Abandoned by her alcoholic mother (Dora Bryan), Jo is taken in by a kindly gay friend (Murray Melvin), who nobly sets about creating an unconventional family when the girl discovers she's pregnant. But plans for a happy home fall apart when Jo's wretched, parasitic mum shows up.",
    "year": 1961,
    "rating": "UR",
    "directorID": 273,
    "countryID": 10,
    "posterName": null
}, {
    "id": 432,
    "title": "10",
    "description": "Writer-director Blake Edwards's celebration of the la dolce vita 1970s stars Dudley Moore as successful but discontented songwriter George Webber, who becomes obsessed after getting a glimpse of the stunning Jenny Miles (Bo Derek, in her film debut) as she's en route to say, \"I do.\" He stalks the honeymooning newlyweds all the way to Acapulco, where, after saving the life of Jenny's new husband, George gets the perfect reward. ",
    "year": 1979,
    "rating": "R",
    "directorID": 155,
    "countryID": 2,
    "posterName": "10.jpg"
}, {
    "id": 433,
    "title": "The Ten Commandments",
    "description": "The story of Moses comes to life in director Cecil B. DeMille's gigantic retelling. As the Egyptian prince turned Prophet of the Jews, Charlton Heston is Biblical fury incarnate, memorably smashing God's stone tablets in the face of his golden calf-worshipping followers. Yul Brynner is the caustic Pharaoh Rameses, who pursues Moses' followers at his own peril.",
    "year": 1956,
    "rating": "G",
    "directorID": 274,
    "countryID": 17,
    "posterName": "TheTenCommandments.jpg"
}, {
    "id": 434,
    "title": "Tender Mercies",
    "description": "Alcoholic drifter Mac Sledge (Robert Duvall) comes into the life of a lonely widow (Tess Harper) and her young son (Allan Hubbard) in the barren flatlands of Texas. But when Mac is revealed to be a once-famous country singer, he must face a painful past and an uncertain future. The new relationships Mac forges inspire him to revive his career in this touching drama co-starring Wilford Brimley, Betty Buckley and Ellen Barkin.",
    "year": 1983,
    "rating": "PG",
    "directorID": 84,
    "countryID": 2,
    "posterName": "TenderMercies.jpg"
}, {
    "id": 435,
    "title": "That Obscure Object of Desire",
    "description": "Adapted from the novel La Femme et le Pantin by Pierre Louys, this Oscar-nominated erotic dark comedy was Luis Bu&#x00F1;uel's final film. The story follows, in flashback, middle-aged Mathieu (Fernando Rey) and his obsession for the much younger, moody Conchita (played by both Carole Bouquet and Angela Molina). The two play a continuous tug-of-war with each other's desires, each trying to outlast the other at their own game. ",
    "year": 1977,
    "rating": "R",
    "directorID": 9,
    "countryID": 1,
    "posterName": "ThatObscureObjectofDesire.jpg"
}, {
    "id": 436,
    "title": "Thelma & Louise",
    "description": "Fed up with her boyfriend, live-wire Arkansas waitress Louise Sawyer (Susan Sarandon) persuades her friend Thelma Dickinson (Geena Davis), a na&#x00EF;ve housewife burdened with a negligent, sexist husband, to hit the road with her for a simple weekend of freedom. But after accidentally killing a man, the two friends wind up outlaws blazing a cathartic trail across America. Callie Khouri won an Academy Award for Best Screenplay. ",
    "year": 1991,
    "rating": "R",
    "directorID": 180,
    "countryID": 2,
    "posterName": "Thelma&Louise.jpg"
}, {
    "id": 437,
    "title": "They Live by Night",
    "description": "",
    "year": 1949,
    "rating": "",
    "directorID": 275,
    "countryID": 2,
    "posterName": null
}, {
    "id": 438,
    "title": "They Won't Forget",
    "description": "",
    "year": 1937,
    "rating": "",
    "directorID": 276,
    "countryID": 17,
    "posterName": null
}, {
    "id": 439,
    "title": "The Thin Red Line",
    "description": "With an all-star cast -- featuring Sean Penn, George Clooney, Nick Nolte and Adrien Brody -- director Terrence Malick's lyrical and beautiful retelling of James Jones's novel about the 1942 battle for Guadalcanal was nominated for seven Oscars. With narration by Pvt. Witt (Jim Cavaziel), the men of C-Company become a tight-knit group as they each individually face the horrors of war to hold onto a key-positioned airfield.",
    "year": 1998,
    "rating": "R",
    "directorID": 52,
    "countryID": 2,
    "posterName": "TheThinRedLine.jpg"
}, {
    "id": 440,
    "title": "The Third Generation",
    "description": "Harry Baer, Hark Bohm, Margit Carstensen and Udo Kier star in Rainer Werner Fassbinder's controversial look at the intersection of terrorism and modern culture, a film made in 1979 that's just as provocative today. Complications arise when a bungling group of radicals takes a prominent businessman as their hostage and their tendencies toward bickering threaten to derail them from their cause. ",
    "year": 1979,
    "rating": "NR",
    "directorID": 277,
    "countryID": 4,
    "posterName": "TheThirdGeneration.jpg"
}, {
    "id": 441,
    "title": "The Third Man",
    "description": "After arriving in post-World War II Vienna, unemployed pulp novelist Holly Martins (Joseph Cotten) learns that his friend Harry (Orson Welles) has died in an accident. Compelled to investigate the death, Holly slowly uncovers startling revelations about Harry's life. Based on a novel by Graham Greene, this classic film noir thriller earned an Academy Award nomination for director Carol Reed and won an Oscar for Best Cinematography. ",
    "year": 1949,
    "rating": "NR",
    "directorID": 278,
    "countryID": 10,
    "posterName": "TheThirdMan.jpg"
}, {
    "id": 442,
    "title": "Thirty Two Short Films About Glenn Gould",
    "description": "",
    "year": 1994,
    "rating": "",
    "directorID": 279,
    "countryID": 3,
    "posterName": "ThirtyTwoShortFilmsAboutGlennGould.jpg"
}, {
    "id": 443,
    "title": "This Sporting Life",
    "description": "Richard Harris won Cannes Film Festival's Best Actor Award for his portrayal of a coal miner who finds success as a professional rugby player, only to discover that his standing in society's rigid hierarchy remains unchanged. Meanwhile, his attempts to love his embittered, widowed landlady only serve to further isolate him in depression and the bleak landscape of industrial northern England. Rachel Roberts co-stars in this acclaimed drama.",
    "year": 1963,
    "rating": "UR",
    "directorID": 280,
    "countryID": 10,
    "posterName": "ThisSportingLife.jpg"
}, {
    "id": 444,
    "title": "Three Days of the Condor",
    "description": "Robert Redford stars as Joe Turner, a New York-based CIA researcher who returns from lunch to find all his co-workers murdered. In the next 72 hours, everyone Turner trusts will try to kill him, in this conspiracy thriller by director Sydney Pollack. Double-crossed and forced to go underground, Turner kidnaps a young woman (Faye Dunaway) and holds her hostage as he unravels the mystery. Max von Sydow and Cliff Robertson co-star.",
    "year": 1975,
    "rating": "R",
    "directorID": 2,
    "countryID": 2,
    "posterName": "ThreeDaysoftheCondor.jpg"
}, {
    "id": 445,
    "title": "Tight Little Island",
    "description": "",
    "year": 1949,
    "rating": "",
    "directorID": 281,
    "countryID": 24,
    "posterName": "TightLittleIsland.jpg"
}, {
    "id": 446,
    "title": "To Kill a Mockingbird",
    "description": "Southern comforts abound in this big-screen adaptation of Harper Lee's novel as lawyer Atticus Finch (Gregory Peck, in an Oscar-winning role) defends an innocent black man (Brock Peters) against rape charges but ends up in a maelstrom of hate and prejudice. Meanwhile, with help from a friend (John Megna), Finch's children, Jem (Phillip Alford) and Scout (Mary Badham), set their sights on making contact with a reclusive neighbor (Robert Duvall).",
    "year": 1962,
    "rating": "NR",
    "directorID": 282,
    "countryID": 2,
    "posterName": "ToKillaMockingbird.jpg"
}, {
    "id": 447,
    "title": "To Live",
    "description": "A bold, energetic masterpiece from Zhang Yimou, the foremost director from China's influential \"fifth generation\" of filmmakers. Continuing his brilliant collaboration with China's best-known actress, Gong Li, Zhang weaves a tapestry of personal and political events, following the struggles of an impoverished husband and wife (Ge You and Li) from their heyday in the 1940s to the hardships that accompanied the Cultural Revolution in the 1960s.",
    "year": 1994,
    "rating": "NR",
    "directorID": 283,
    "countryID": 29,
    "posterName": "ToLive.jpg"
}, {
    "id": 448,
    "title": "Tom Jones",
    "description": "Based on Henry Fielding's novel, this four-time Oscar winner (including Best Picture) also scores points for outrageous comedy. Orphaned as an infant and adopted by Squire Allworthy (George Devine), the devilishly handsome, womanizer Tom (Albert Finney) truly loves only one: Sophie. His adventurous attempts to woo her lead him to London, where a duel with a jealous husband lands Tom in prison, and only the secret of his birth can save his life.",
    "year": 1963,
    "rating": "UR",
    "directorID": 273,
    "countryID": 10,
    "posterName": "TomJones.jpg"
}, {
    "id": 449,
    "title": "Touch of Evil",
    "description": "Narcotics detective Mike Vargas (Charlton Heston) sees his honeymoon cut short when a car crossing the U.S.-Mexico border explodes before his eyes. Vargas forsakes his bride (Janet Leigh) to mount an investigation, but soon locks horns with corpulent Sheriff Hank Quinlan (Orson Welles). The shady cop isn't above planting evidence -- or colluding with the local crime lord -- to keep Vargas from discovering the ugly truth.",
    "year": 1958,
    "rating": "NR",
    "directorID": 130,
    "countryID": 2,
    "posterName": "TouchofEvil.jpg"
}, {
    "id": 450,
    "title": "Toy Story",
    "description": "Cowboy-toy Woody (voiced by Tom Hanks) feels threatened when overblown space ranger Buzz Lightyear (Tim Allen) arrives with a suitcase full of bells and whistles. But both dolls are lost when the family moves -- and finding their way home is only half the adventure. Director John Lasseter won a special Academy Award for this groundbreaking, computer-animated film that also earned Oscar nods for its music and screenplay.",
    "year": 1995,
    "rating": "G",
    "directorID": 284,
    "countryID": 2,
    "posterName": "ToyStory.jpg"
}, {
    "id": 451,
    "title": "Traffic",
    "description": "Steven Soderbergh's Oscar-winning drama intricately weaves three disturbing snapshots of America's drug war. At the forefront are a U.S. drug czar (Michael Douglas) who learns his daughter is an addict and a Mexican cop (Benicio Del Toro in an Oscar-winning role) dealing with a corrupt system. Meanwhile, a wealthy housewife (Catherine Zeta-Jones) whose husband is arrested for dealing must choose to carry on the business or sacrifice her lifestyle.",
    "year": 2000,
    "rating": "R",
    "directorID": 285,
    "countryID": 2,
    "posterName": "Traffic.jpg"
}, {
    "id": 452,
    "title": "The Train",
    "description": "During World War II, a French train engineer (Burt Lancaster) attempts to stop a Nazi-led train from leaving France with valuable works of art stolen from a museum. Lancaster performs all of his own stunts in this action-filled drama from influential from director John Frankenheimer (Birdman of Alcatraz, The Manchurian Candidate). Franklin Coen and Frank Davis received Oscar nominations for the film's original screenplay.",
    "year": 1965,
    "rating": "NR",
    "directorID": 286,
    "countryID": 1,
    "posterName": "TheTrain.jpg"
}, {
    "id": 453,
    "title": "Trainspotting",
    "description": "",
    "year": 1996,
    "rating": "",
    "directorID": 287,
    "countryID": 10,
    "posterName": "Trainspotting.jpg"
}, {
    "id": 454,
    "title": "The Treasure of the Sierra Madre",
    "description": "Wrapped in a classic tale of adventure, this Academy Award winner helmed by John Huston follows a trio of gold prospectors who set out to strike it rich and agree to split the take &#x2026; until paranoia and greed consumes one of them. Delivering superb performances as the three miners are Humphrey Bogart, Tim Holt and Walter Huston, who copped a Best Supporting Actor Oscar while son John scored statuettes for his direction and screenplay.",
    "year": 1948,
    "rating": "NR",
    "directorID": 8,
    "countryID": 2,
    "posterName": "TheTreasureoftheSierraMadre.jpg"
}, {
    "id": 455,
    "title": "Tristana",
    "description": "",
    "year": 1970,
    "rating": "",
    "directorID": 9,
    "countryID": 1,
    "posterName": "Tristana.jpg"
}, {
    "id": 456,
    "title": "The Trouble with Harry",
    "description": "Alfred Hitchcock's second American comedy demonstrates the director's flair for gallows humor. The trouble with Harry is ... he's \"expired,\" and the residents of a quaint New England tourist spot just can't seem to get rid of him. Shirley MacLaine makes her film debut, and that's Jerry Mathers (the Beave himself) as the bewildered boy. See if you can spot Hitchcock in his customary cameo (hint: he's strolling past a limo).",
    "year": 1955,
    "rating": "PG",
    "directorID": 80,
    "countryID": 2,
    "posterName": "TheTroublewithHarry.jpg"
}, {
    "id": 457,
    "title": "Ugetsu",
    "description": "With 16th century Japan's feudal wars as a backdrop, director Kenji Mizoguchi's lyrical masterpiece delivers a profound message about the ephemeral nature of human life. Despite the conflict raging around them, a potter (Masayuki Mori) and a farmer (Saka Ozawa) -- two peasants with visions of grandeur -- journey to the city seeking wealth and glory. But their blind ambition ultimately takes its toll &#x2026; on the families they left behind.",
    "year": 1954,
    "rating": "NR",
    "directorID": 191,
    "countryID": 28,
    "posterName": "Ugetsu.jpg"
}, {
    "id": 458,
    "title": "The Usual Suspects",
    "description": "When five unacquainted scalawags are hauled into a police station to appear in a criminal lineup, they decide to pull off a heist together. The plan gets complicated, however, when they intermix with an underworld kingpin named Keyser S&#x00F6;ze. Gabriel Byrne, Benicio Del Toro, Kevin Pollak, Stephen Baldwin and Oscar-winner Kevin Spacey star in this intricately plotted, critically acclaimed thriller that won another Oscar for Best Screenplay.",
    "year": 1995,
    "rating": "R",
    "directorID": 288,
    "countryID": 2,
    "posterName": "TheUsualSuspects.jpg"
}, {
    "id": 459,
    "title": "Vanya on 42nd Street",
    "description": "Actors Andre Gregory and Wallace Shawn are obsessed with mounting a pared-down stage production of Anton Chekhov's \"Uncle Vanya\" in New York City. The production -- staged for and starring their friends -- is a labor of love. This stirring drama, which was director Louis Malle's final film, also features Julianne Moore, Larry Pine, Brooke Smith, Phoebe Brand, Lynn Cohen and Madhur Jaffrey.",
    "year": 1994,
    "rating": "PG",
    "directorID": 46,
    "countryID": 2,
    "posterName": "Vanyaon42ndStreet.jpg"
}, {
    "id": 460,
    "title": "Vertigo",
    "description": "One of Alfred Hitchcock's darkest and most compelling suspense films tells the story of police detective Scottie Ferguson (James Stewart), who has a crippling fear of heights -- and an all-consuming obsession with a married woman. When an old friend asks him to tail his wife (Kim Novak), Scottie is drawn into a vortex of deceit and murder. But that's only the beginning as a mesmerizing score draws Scottie to the film's haunting final shot.",
    "year": 1958,
    "rating": "PG",
    "directorID": 80,
    "countryID": 2,
    "posterName": "Vertigo.jpg"
}, {
    "id": 461,
    "title": "Viridiana",
    "description": "Before taking her final vows, young nun Viridiana (Silvia Pinal) visits her uncle Don Jaime (Fernando Rey), who's supported her for years. But Jaime, fixated on his niece because of her resemblance to his late wife, sets out to corrupt her. Celebrated surrealist Luis Bu&#x00F1;uel directs this controversial satire, which was banned by the Spanish government for obscenity and blasphemy. Viridiana won the Golden Palm at the Cannes Film Festival.",
    "year": 1962,
    "rating": "NR",
    "directorID": 9,
    "countryID": 9,
    "posterName": "Viridiana.jpg"
}, {
    "id": 462,
    "title": "The Voice of the Turtle",
    "description": "",
    "year": 1947,
    "rating": "",
    "directorID": 242,
    "countryID": 2,
    "posterName": null
}, {
    "id": 463,
    "title": "Waking Life",
    "description": "Director Richard Linklater's mesmerizing animated film follows a young man (Wiley Wiggins) as he floats in and out of philosophical discussions with a succession of eccentrics and passionate thinkers, all the while uncertain whether he's conscious or dreaming. Thanks to each character's oddball charm, the ethereal conversation is as dynamic as the animation, resulting in an innovative film that is by turns droll, disturbing and provocative.",
    "year": 2001,
    "rating": "R",
    "directorID": 289,
    "countryID": 2,
    "posterName": "WakingLife.jpg"
}, {
    "id": 464,
    "title": "A Walk in the Sun",
    "description": "Dana Andrews stars as Sgt. Bill Tyne, an American soldier who leads his platoon through the Italian countryside on a march -- punctuated by sporadic skirmishes -- to capture a Nazi-held farmhouse in this unflinching World War II drama. Between hostilities, the men forge a deep bond as they come to grips with war's capriciousness. The all-male cast includes Richard Conte, John Ireland and Lloyd Bridges. Lewis Milestone directs.",
    "year": 1945,
    "rating": "NR",
    "directorID": 20,
    "countryID": 17,
    "posterName": "AWalkintheSun.jpg"
}, {
    "id": 465,
    "title": "The War Game",
    "description": "Banned by the BBC for being too disturbing, Peter Watkins's documentary-style drama imagines the devastating effects of a nuclear attack on a small town in England -- collateral damage from an all-out war between the U.S.S.R. and the United States. Food supplies dwindle, orphaned children roam the streets, and burn victims die a slow, agonizing death. Despite being a work of fiction, the film won the 1967 Best Documentary Oscar.",
    "year": 1966,
    "rating": "NR",
    "directorID": 290,
    "countryID": 10,
    "posterName": "TheWarGame.jpg"
}, {
    "id": 466,
    "title": "The Warriors",
    "description": "A prominent New York City gang leader named Cyrus (Roger Hill) wants to wage an all-out battle against the police, and as part of his strategy he calls upon Gotham's gangs to set aside their turf wars and come together at a summit. At the meeting, a rival leader kills Cyrus, but a Coney Island gang called the Warriors is wrongly blamed for Cyrus' death. Before you know it, the cops and every gangbanger in town is hot on the Warriors' trail.",
    "year": 1979,
    "rating": "R",
    "directorID": 291,
    "countryID": 2,
    "posterName": "TheWarriors.jpg"
}, {
    "id": 467,
    "title": "Watch on the Rhine",
    "description": "As World War II looms, undercover anti-fascism organizer Kurt Muller (Paul Lukas, in an Oscar-winning turn) moves his wife, Sara (Bette Davis), and family from Europe to America, where Kurt is blackmailed by a Nazi sympathizer and driven to take drastic measures. Based on Lillian Hellman's play and adapted for the screen by her lover, author Dashiell Hammett (<i>The Maltese Falcon</i>), this classic spy drama earned multiple Oscar nominations.",
    "year": 1943,
    "rating": "NR",
    "directorID": 292,
    "countryID": 17,
    "posterName": null
}, {
    "id": 468,
    "title": "The Waterdance",
    "description": "Talented novelist Joel Garcia (Eric Stoltz) ends up in a rehabilitation clinic after a hiking mishap leaves him paralyzed. But adjusting to his situation isn't the only problem: He must also contend with other paraplegics in his ward. There's a bigoted biker (William Forsythe) and a womanizing homeboy (Wesley Snipes), but despite their differences, the men find common ground as they deal with anger, fear, despair and the loss of sexuality.",
    "year": 1991,
    "rating": "R",
    "directorID": 293,
    "countryID": 2,
    "posterName": "TheWaterdance.jpg"
}, {
    "id": 469,
    "title": "Welcome to the Dollhouse",
    "description": "The horrors of junior high are vividly re-created in this darkly comic tale of the painfully awkward Dawn Wiener (Heather Matarazzo), a middle child who must cope with a dreary home life -- and with classmates who mercilessly taunt her. Writer-director Todd Solondz's unflinching look at the nightmare of early adolescence took away prizes at both the Sundance Film Festival and the Independent Spirit Awards.",
    "year": 1996,
    "rating": "R",
    "directorID": 199,
    "countryID": 2,
    "posterName": "WelcometotheDollhouse.jpg"
}, {
    "id": 470,
    "title": "The Well-Digger's Daughter",
    "description": "",
    "year": 1941,
    "rating": "",
    "directorID": null,
    "countryID": 1,
    "posterName": null
}, {
    "id": 471,
    "title": "The Whales of August",
    "description": "Libby (Bette Davis) and Sarah (Lillian Gish), two sisters facing the twilight years, ruminate on the paths they've taken in this fascinating drama showcasing a pair of actresses who've delivered some of cinema's golden moments. Although she's blind, Libby shows not an inch of weakness, even as she's cared for by the more forgiving Sarah. Every August, they await the return of migrating whales that grace the coastal area by their home in Maine. ",
    "year": 1987,
    "rating": "UR",
    "directorID": 280,
    "countryID": 2,
    "posterName": "TheWhalesofAugust.jpg"
}, {
    "id": 472,
    "title": "What's Eating Gilbert Grape",
    "description": "In a backwater Iowa town, Gilbert (Johnny Depp) struggles to take care of his mentally disabled brother, Arnie (Leonardo DiCaprio), and provide for the rest of his family. But after falling for the stranded Becky (Juliette Lewis), Gilbert discovers exciting new possibilities for his life. Co-starring Mary Steenburgen, John C. Reilly and Crispin Glover, this tender drama earned DiCaprio an Oscar nomination for Best Supporting Actor.",
    "year": 1993,
    "rating": "PG-13",
    "directorID": 128,
    "countryID": 2,
    "posterName": "What'sEatingGilbertGrape.jpg"
}, {
    "id": 473,
    "title": "Who Framed Roger Rabbit",
    "description": "",
    "year": 1988,
    "rating": "",
    "directorID": 50,
    "countryID": 10,
    "posterName": "WhoFramedRogerRabbit.jpg"
}, {
    "id": 474,
    "title": "Wild Reeds",
    "description": "Boarding school students in 1960s France explore the consequences of their sexual awakenings against dynamic landscapes and the subtle backdrop of France's war in Algeria in this drama from director Andr&#x00E9; T&#x00E9;chin&#x00E9;. The teenaged Fran&#x00E7;ois (Ga&#x00EB;l Morel) struggles with his newfound sexual attraction for schoolmate Serge (St&#x00E9;phane Rideau), which complicates his platonic friendship with Ma&#x00EF;t&#x00E9; (&#x00C9;lodie Bouchez).",
    "year": 1994,
    "rating": "NR",
    "directorID": 294,
    "countryID": 1,
    "posterName": "WildReeds.jpg"
}, {
    "id": 475,
    "title": "Wild Strawberries",
    "description": "This contemplative Ingmar Bergman film explores the disillusionment of aging physician Isak Borg (Victor Sj&#x00F6;str&#x00F6;m), who begins to reflect on his life while en route to Lund, Sweden, to receive an honorary degree. Along the way, a string of encounters causes him to experience hallucinations that expose his darkest fears, and he realizes that the choices he's made have rendered a life devoid of meaning. Can he find redemption before it's too late?",
    "year": 1959,
    "rating": "NR",
    "directorID": 141,
    "countryID": 23,
    "posterName": "WildStrawberries.jpg"
}, {
    "id": 476,
    "title": "Wilson",
    "description": "",
    "year": 1944,
    "rating": "",
    "directorID": null,
    "countryID": 17,
    "posterName": "Wilson.jpg"
}, {
    "id": 477,
    "title": "Wings of Desire",
    "description": "Wim Wenders won the award for Best Director at the 1987 Cannes Film Festival for this captivating vision about an angel (Bruno Ganz) who falls in love with a beautiful circus performer while drifting unnoticed through West Berlin. Overcome by the girl's beauty, the angel decides he wants to become human. Peter Falk also stars, as himself, and aids the angel in his decision-making process. ",
    "year": 1988,
    "rating": "PG-13",
    "directorID": 28,
    "countryID": 1,
    "posterName": "WingsofDesire.jpg"
}, {
    "id": 478,
    "title": "The World of Apu",
    "description": "Living alone in a tenement above the railway, a grown Apu passes his days reading poetry, playing his wooden flute and looking for work. Although poor and without family, he remains hopeful about his future. After reuniting with a childhood friend, Apu marries the man's cousin. But marital bliss is short-lived, as a terrible tragedy awaits the newfound lovers. This is the third and final film in the renowned Apu trilogy from director Satyajit Ray.",
    "year": 1959,
    "rating": "NR",
    "directorID": 173,
    "countryID": 25,
    "posterName": "TheWorldofApu.jpg"
}, {
    "id": 479,
    "title": "The Yearling",
    "description": "After the Civil War, the Baxter family struggles to eke out an existence. All the children -- except for 11-year-old Jody -- have died, leaving Ma (Jane Wyman) embittered, Jody lonely and Penny (Gregory Peck) working hard. Jody befriends an orphaned fawn, but as the fawn grows, it continually breaks into the small garden that is the family's source of food and money. The choice they face in this award-winning film is potentially tragic.",
    "year": 1983,
    "rating": "G",
    "directorID": 295,
    "countryID": 17,
    "posterName": "TheYearling.jpg"
}, {
    "id": 480,
    "title": "You Can Count On Me",
    "description": "Single mom Sammy Prescott (Laura Linney) is already preoccupied with raising her son (Rory Culkin), who's become sullen -- and curious about his missing dad -- when her wayward brother, Terry (Mark Ruffalo), appears, instantly bonding with the boy and instigating a perilous father-son reunion. Meanwhile, Sammy is embroiled in a half-hearted affair with her new boss (Matthew Broderick). This Oscar-nominated drama won the Sundance Grand Jury Prize.",
    "year": 2000,
    "rating": "R",
    "directorID": 296,
    "countryID": 2,
    "posterName": "YouCanCountOnMe.jpg"
}, {
    "id": 481,
    "title": "You Only Live Once",
    "description": "Joan is a secretary in the public defender's office, and Eddie is her jailed lover. When Eddie is released, they start afresh, but his old ties lure him back to a life of crime -- leading him to make desperate choices to hold on to his freedom.",
    "year": 1937,
    "rating": "NR",
    "directorID": 75,
    "countryID": 17,
    "posterName": "YouOnlyLiveOnce.jpg"
}, {
    "id": 482,
    "title": "Y Tu Mamá También",
    "description": "When rich teenagers Tenoch (Diego Luna) and Julio (Gael Garcia Bernal) meet the alluring, older Luisa (Maribel Verdu) at a wedding, they try to impress her with stories of a road trip to a secret beach, and ultimately convince her to come with them. What follows in director Alfonso Cuaron's Oscar-nominated film -- one of the most talked-about pics of 2002 -- is an escapade involving seduction, conflict and the harsh realities of poverty.",
    "year": 2001,
    "rating": "UR",
    "directorID": 297,
    "countryID": 9,
    "posterName": "YTuMamáTambién.jpg"
}, {
    "id": 483,
    "title": "Zero for Conduct",
    "description": "",
    "year": 1933,
    "rating": "",
    "directorID": 45,
    "countryID": 1,
    "posterName": "ZeroforConduct.jpg"
}];


function validate(movie) {
    if (!movie.title) {
        return { statusCode: 400, error: "A title is required!" };
    }
    if (movie.title.length < 2) {
        return { statusCode: 400, error: "A title should be more that one character!" };
    }
    if (movie.title.length > 80) {
        return { statusCode: 400, error: "The maximum length of a movie title is 80 characters!" };
    }
    if (!movie.description) {
        return { statusCode: 400, error: "A description is required!" };
    }
    if (movie.year < 1867) {
        return { statusCode: 400, error: "That was before movies where invented by William Lincoln!" };
    }
    if (movie.year > new Date().getFullYear()) {
        return { statusCode: 400, error: "Can't be in the future!" };
    }
    if (!movie.directorID) {
        return { statusCode: 400, error: "A director is required!" };
    }
    if (!directors.get(movie.directorID)){
        return { statusCode: 400, error: "The director is not found!" };
    }
    if (!movie.countryID) {
        return { statusCode: 400, error: "A country is required!" };
    }
    if (!countries.get(movie.countryID)) {
        return { statusCode: 400, error: "The country is not found!" };
    }

    return null;
}

module.exports = {
    getAll: function () {
        return movies;
    },
    get: function (id) {
        return _.find(movies, function (p) {
            return p.id === +id;
        });
    },
    save: function (id, movie) {
        var errors = validate(movie);
        
        if (errors) {
            return errors;
        } else {
            id = +id;
            var oldMovie = _.find(movies, function (p) {
                return p.id === id;
            });
            var index = _.indexOf(movies, oldMovie);
            movies[index] = movie;
            return movie;
        }
    }
};
