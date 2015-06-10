'use strict';

var _ = require('underscore');

var directors = [{
    "id": 1,
    "name": "Alexander Payne"
}, {
    "id": 2,
    "name": "Sydney Pollack"
}, {
    "id": 3,
    "name": "George Cukor"
}, {
    "id": 4,
    "name": "Spike Jonze"
}, {
    "id": 5,
    "name": "Atom Egoyan"
}, {
    "id": 6,
    "name": "Michael Curtiz"
}, {
    "id": 7,
    "name": "Paul Schrader"
}, {
    "id": 8,
    "name": "John Huston"
}, {
    "id": 9,
    "name": "Luis Bunuel"
}, {
    "id": 10,
    "name": "Werner Herzog"
}, {
    "id": 11,
    "name": "Steven Spielberg"
}, {
    "id": 12,
    "name": "Jim Abrahams"
}, {
    "id": 13,
    "name": "John Musker"
}, {
    "id": 14,
    "name": "Sergei Eisenstein"
}, {
    "id": 15,
    "name": "Martin Scorsese"
}, {
    "id": 16,
    "name": "Arthur Penn"
}, {
    "id": 17,
    "name": "James Cameron"
}, {
    "id": 18,
    "name": "Joseph L. Mankiewicz"
}, {
    "id": 19,
    "name": "Pedro Almodovar"
}, {
    "id": 20,
    "name": "Lewis Milestone"
}, {
    "id": 21,
    "name": "Douglas Sirk"
}, {
    "id": 22,
    "name": "Robert Rossen"
}, {
    "id": 23,
    "name": "Alan J. Pakula"
}, {
    "id": 24,
    "name": "Milos Forman"
}, {
    "id": 25,
    "name": "Federico Fellini"
}, {
    "id": 26,
    "name": "Jean-Pierre Jeunet"
}, {
    "id": 27,
    "name": "Elia Kazan"
}, {
    "id": 28,
    "name": "Wim Wenders"
}, {
    "id": 29,
    "name": "George Lucas"
}, {
    "id": 30,
    "name": "Vincente Minnelli"
}, {
    "id": 31,
    "name": "Arthur Hiller"
}, {
    "id": 32,
    "name": "Chris Smith"
}, {
    "id": 33,
    "name": "Alejandro Gonzalez Inarritu"
}, {
    "id": 34,
    "name": "Anatole Litvak"
}, {
    "id": 35,
    "name": "Otto Preminger"
}, {
    "id": 36,
    "name": "Guy Green"
}, {
    "id": 37,
    "name": "John Cromwell"
}, {
    "id": 38,
    "name": "Woody Allen"
}, {
    "id": 39,
    "name": "Billy Wilder"
}, {
    "id": 40,
    "name": "Francis Ford Coppola"
}, {
    "id": 41,
    "name": "Ron Howard"
}, {
    "id": 42,
    "name": "Robert Duvall"
}, {
    "id": 43,
    "name": "Robert Bresson"
}, {
    "id": 44,
    "name": "Andrzej Wajda"
}, {
    "id": 45,
    "name": "Jean Vigo"
}, {
    "id": 46,
    "name": "Louis Malle"
}, {
    "id": 47,
    "name": "Michelangelo Antonioni"
}, {
    "id": 48,
    "name": "Leo McCarey"
}, {
    "id": 49,
    "name": "Gabriel Axel"
}, {
    "id": 50,
    "name": "Robert Zemeckis"
}, {
    "id": 51,
    "name": "John Sturges"
}, {
    "id": 52,
    "name": "Terrence Malick"
}, {
    "id": 53,
    "name": "Howard Hawks"
}, {
    "id": 54,
    "name": "Sam Peckinpah"
}, {
    "id": 55,
    "name": "James Algar"
}, {
    "id": 56,
    "name": "John D. Hancock"
}, {
    "id": 57,
    "name": "Edward F. Cline"
}, {
    "id": 58,
    "name": "Barbet Schroeder"
}, {
    "id": 59,
    "name": "Stanley Kubrick"
}, {
    "id": 60,
    "name": "Joel Coen"
}, {
    "id": 61,
    "name": "Gillo Pontecorvo"
}, {
    "id": 62,
    "name": "Eric Rohmer"
}, {
    "id": 63,
    "name": "Jasmin Dizdar"
}, {
    "id": 64,
    "name": "Kirk Wise"
}, {
    "id": 65,
    "name": "Francois Truffaut"
}, {
    "id": 66,
    "name": "Tim Burton"
}, {
    "id": 67,
    "name": "Julian Schnabel"
}, {
    "id": 68,
    "name": "Milcho Manchevski"
}, {
    "id": 69,
    "name": "Hal Ashby"
}, {
    "id": 70,
    "name": "William Wyler"
}, {
    "id": 71,
    "name": "Martin Brest"
}, {
    "id": 72,
    "name": "Vittorio De Sica"
}, {
    "id": 73,
    "name": "Lawrence Kasdan"
}, {
    "id": 74,
    "name": "Mario Monicelli"
}, {
    "id": 75,
    "name": "Fritz Lang"
}, {
    "id": 76,
    "name": "Campbell Scott"
}, {
    "id": 77,
    "name": "Samuel Fuller"
}, {
    "id": 78,
    "name": "John Schlesinger"
}, {
    "id": 79,
    "name": "Mike Nichols"
}, {
    "id": 80,
    "name": "Alfred Hitchcock"
}, {
    "id": 81,
    "name": "Alan Parker"
}, {
    "id": 82,
    "name": "Michael Powell"
}, {
    "id": 83,
    "name": "Marcel Camus"
}, {
    "id": 84,
    "name": "Bruce Beresford"
}, {
    "id": 85,
    "name": "Mel Brooks"
}, {
    "id": 86,
    "name": "Paul Greengrass"
}, {
    "id": 87,
    "name": "David Lynch"
}, {
    "id": 88,
    "name": "Paul Mazursky"
}, {
    "id": 89,
    "name": "Jean-Pierre Melville"
}, {
    "id": 90,
    "name": "Paul Thomas Anderson"
}, {
    "id": 91,
    "name": "Oliver Stone"
}, {
    "id": 92,
    "name": "Claude Chabrol"
}, {
    "id": 93,
    "name": "Kimberly Peirce"
}, {
    "id": 94,
    "name": "John Singleton"
}, {
    "id": 95,
    "name": "Terry Gilliam"
}, {
    "id": 96,
    "name": "Luigi Comencini"
}, {
    "id": 97,
    "name": "John Hughes"
}, {
    "id": 98,
    "name": "Peter Yates"
}, {
    "id": 99,
    "name": "Lars von Trier"
}, {
    "id": 100,
    "name": "Jean-Luc Godard"
}, {
    "id": 101,
    "name": "David Lean"
}, {
    "id": 102,
    "name": "Errol Morris"
}, {
    "id": 103,
    "name": "James L. Brooks"
}, {
    "id": 104,
    "name": "Joe Berlinger"
}, {
    "id": 105,
    "name": "Steve Rash"
}, {
    "id": 106,
    "name": "Ron Shelton"
}, {
    "id": 107,
    "name": "Joshua Logan"
}, {
    "id": 108,
    "name": "George Roy Hill"
}, {
    "id": 109,
    "name": "Neil Jordan"
}, {
    "id": 110,
    "name": "Carlos Diegues"
}, {
    "id": 111,
    "name": "Max Ophuls"
}, {
    "id": 112,
    "name": "Bob Fosse"
}, {
    "id": 113,
    "name": "Edward Dmytryk"
}, {
    "id": 114,
    "name": "Herbert Ross"
}, {
    "id": 115,
    "name": "Fernando Trueba"
}, {
    "id": 116,
    "name": "Victor Fleming"
}, {
    "id": 117,
    "name": "Richard Brooks"
}, {
    "id": 118,
    "name": "Frank Lloyd"
}, {
    "id": 119,
    "name": "Thomas Vinterberg"
}, {
    "id": 120,
    "name": "Wayne Wang"
}, {
    "id": 121,
    "name": "Hugh Hudson"
}, {
    "id": 122,
    "name": "Don Siegel"
}, {
    "id": 123,
    "name": "Rob Marshall"
}, {
    "id": 124,
    "name": "Nick Park"
}, {
    "id": 125,
    "name": "Jean Renoir"
}, {
    "id": 126,
    "name": "Roman Polanski"
}, {
    "id": 127,
    "name": "Claire Denis"
}, {
    "id": 128,
    "name": "Lasse HallstrÃ¶m"
}, {
    "id": 129,
    "name": "King Vidor"
}, {
    "id": 130,
    "name": "Orson Welles"
}, {
    "id": 131,
    "name": "Bertrand Tavernier"
}, {
    "id": 132,
    "name": "Abbas Kiarostami"
}, {
    "id": 133,
    "name": "Amy Heckerling"
}, {
    "id": 134,
    "name": "Michael Apted"
}, {
    "id": 135,
    "name": "Daniel Mann"
}, {
    "id": 136,
    "name": "Bernardo Bertolucci"
}, {
    "id": 137,
    "name": "Stuart Rosenberg"
}, {
    "id": 138,
    "name": "Rowland V. Lee"
}, {
    "id": 139,
    "name": "George Seaton"
}, {
    "id": 140,
    "name": "Mikhail Kalatozov"
}, {
    "id": 141,
    "name": "Ingmar Bergman"
}, {
    "id": 142,
    "name": "Terry Zwigoff"
}, {
    "id": 143,
    "name": "Zoltan Korda"
}, {
    "id": 144,
    "name": "George Abbott"
}, {
    "id": 145,
    "name": "Luchino Visconti"
}, {
    "id": 146,
    "name": "Mike Newell"
}, {
    "id": 147,
    "name": "Stephen Frears"
}, {
    "id": 148,
    "name": "Sidney Lumet"
}, {
    "id": 149,
    "name": "Nikita Mikhalkov"
}, {
    "id": 150,
    "name": "Edmund Goulding"
}, {
    "id": 151,
    "name": "Jim McBride"
}, {
    "id": 152,
    "name": "George Romero"
}, {
    "id": 153,
    "name": "Fred Zinnemann"
}, {
    "id": 154,
    "name": "Robert Wise"
}, {
    "id": 155,
    "name": "Blake Edwards"
}, {
    "id": 156,
    "name": "Phillip Noyce"
}, {
    "id": 157,
    "name": "Tim Robbins"
}, {
    "id": 158,
    "name": "Basil Dearden"
}, {
    "id": 159,
    "name": "David Cronenberg"
}, {
    "id": 160,
    "name": "Laslo Benedek"
}, {
    "id": 161,
    "name": "Jerzy Skolimowski"
}, {
    "id": 162,
    "name": "Michael Cimino"
}, {
    "id": 163,
    "name": "Stanley Kramer"
}, {
    "id": 164,
    "name": "John Boorman"
}, {
    "id": 165,
    "name": "Susan Seidelman"
}, {
    "id": 166,
    "name": "George Marshall"
}, {
    "id": 167,
    "name": "Henri-Georges Clouzot"
}, {
    "id": 168,
    "name": "John McTiernan"
}, {
    "id": 169,
    "name": "Barry Levinson"
}, {
    "id": 170,
    "name": "Robert Aldrich"
}, {
    "id": 171,
    "name": "Frank Oz"
}, {
    "id": 172,
    "name": "Alfred E. Green"
}, {
    "id": 173,
    "name": "Satyajit Ray"
}, {
    "id": 174,
    "name": "Jean-Jacques Beineix"
}, {
    "id": 175,
    "name": "Pietro Germi"
}, {
    "id": 176,
    "name": "Spike Lee"
}, {
    "id": 177,
    "name": "Rouben Mamoulian"
}, {
    "id": 178,
    "name": "Erick Zonca"
}, {
    "id": 179,
    "name": "Peter Greenaway"
}, {
    "id": 180,
    "name": "Ridley Scott"
}, {
    "id": 181,
    "name": "Ang Lee"
}, {
    "id": 182,
    "name": "John Sayles"
}, {
    "id": 183,
    "name": "Anthony Minghella"
}, {
    "id": 184,
    "name": "Yoshimitsu Morita"
}, {
    "id": 185,
    "name": "Chen Kaige"
}, {
    "id": 186,
    "name": "Todd Haynes"
}, {
    "id": 187,
    "name": "Zacharias Kunuk"
}, {
    "id": 188,
    "name": "Luc Besson"
}, {
    "id": 189,
    "name": "Marco Bellocchio"
}, {
    "id": 190,
    "name": "Peter Cattaneo"
}, {
    "id": 191,
    "name": "Kenji Mizoguchi"
}, {
    "id": 192,
    "name": "Agnes Varda"
}, {
    "id": 193,
    "name": "Sergio Leone"
}, {
    "id": 194,
    "name": "Robert Altman"
}, {
    "id": 195,
    "name": "John Ford"
}, {
    "id": 196,
    "name": "Preston Sturges"
}, {
    "id": 197,
    "name": "Sidney Gilliat"
}, {
    "id": 198,
    "name": "Michael Almereyda"
}, {
    "id": 199,
    "name": "Todd Solondz"
}, {
    "id": 200,
    "name": "Barbara Kopple"
}, {
    "id": 201,
    "name": "Elaine May"
}, {
    "id": 202,
    "name": "Ralph Bakshi"
}, {
    "id": 203,
    "name": "Hal Hartley"
}, {
    "id": 204,
    "name": "Akira Kurosawa"
}, {
    "id": 205,
    "name": "Lisa Cholodenko"
}, {
    "id": 206,
    "name": "Peter Hall"
}, {
    "id": 207,
    "name": "Steve James"
}, {
    "id": 208,
    "name": "Stephen Daldry"
}, {
    "id": 209,
    "name": "Nancy Savoca"
}, {
    "id": 210,
    "name": "Todd Field"
}, {
    "id": 211,
    "name": "Michael Mann"
}, {
    "id": 212,
    "name": "Mike Figgis"
}, {
    "id": 213,
    "name": "Norman Z. McLeod"
}, {
    "id": 214,
    "name": "Richard Thorpe"
}, {
    "id": 215,
    "name": "Alan Crosland"
}, {
    "id": 216,
    "name": "Claude Berri"
}, {
    "id": 217,
    "name": "Cameron Crowe"
}, {
    "id": 218,
    "name": "Bob Rafelson"
}, {
    "id": 219,
    "name": "Curtis Hanson"
}, {
    "id": 220,
    "name": "Ken Loach"
}, {
    "id": 221,
    "name": "Gianni Amelio"
}, {
    "id": 222,
    "name": "John Dahl"
}, {
    "id": 223,
    "name": "Charles Crichton"
}, {
    "id": 224,
    "name": "Penny Marshall"
}, {
    "id": 225,
    "name": "Alfonso Arau"
}, {
    "id": 226,
    "name": "Charles Walters"
}, {
    "id": 227,
    "name": "Gillian Armstrong"
}, {
    "id": 228,
    "name": "Tom DiCillo"
}, {
    "id": 229,
    "name": "Ken Annakin"
}, {
    "id": 230,
    "name": "Nicole Holofcener"
}, {
    "id": 231,
    "name": "Nicholas Hytner"
}, {
    "id": 232,
    "name": "Marcel Ophuls"
}, {
    "id": 233,
    "name": "Pete Docter"
}, {
    "id": 234,
    "name": "Norman Jewison"
}, {
    "id": 235,
    "name": "Frank Borzage"
}, {
    "id": 236,
    "name": "Albert Brooks"
}, {
    "id": 237,
    "name": "Elliott Nugent"
}, {
    "id": 238,
    "name": "Ildiko Enyedi"
}, {
    "id": 239,
    "name": "Jacques Tati"
}, {
    "id": 240,
    "name": "John Landis"
}, {
    "id": 241,
    "name": "Robert Benton"
}, {
    "id": 242,
    "name": "Irving Rapper"
}, {
    "id": 243,
    "name": "Victor Schertzinger"
}, {
    "id": 244,
    "name": "Donald Roos"
}, {
    "id": 245,
    "name": "Robert Redford"
}, {
    "id": 246,
    "name": "Harry Watt"
}, {
    "id": 247,
    "name": "Roberto Rossellini"
}, {
    "id": 248,
    "name": "Roger Michell"
}, {
    "id": 249,
    "name": "Jacques Doillon"
}, {
    "id": 250,
    "name": "Michael Radford"
}, {
    "id": 251,
    "name": "Alexander Korda"
}, {
    "id": 252,
    "name": "Quentin Tarantino"
}, {
    "id": 253,
    "name": "Krzysztof Kieslowski"
}, {
    "id": 254,
    "name": "Laurence Olivier"
}, {
    "id": 255,
    "name": "Michael Moore"
}, {
    "id": 256,
    "name": "Franco Zeffirelli"
}, {
    "id": 257,
    "name": "Wes Anderson"
}, {
    "id": 258,
    "name": "Jerry Zucker"
}, {
    "id": 259,
    "name": "David Maysles"
}, {
    "id": 260,
    "name": "Karel Reisz"
}, {
    "id": 261,
    "name": "Mike Leigh"
}, {
    "id": 262,
    "name": "Joseph Losey"
}, {
    "id": 263,
    "name": "Jonathan Glazer"
}, {
    "id": 264,
    "name": "John Madden"
}, {
    "id": 265,
    "name": "Ross McElwee"
}, {
    "id": 266,
    "name": "Andrew Adamson"
}, {
    "id": 267,
    "name": "Jacques-Yves Cousteau"
}, {
    "id": 268,
    "name": "Walter Lang"
}, {
    "id": 269,
    "name": "Lloyd Bacon"
}, {
    "id": 270,
    "name": "Hayao Miyazaki"
}, {
    "id": 271,
    "name": "Jonathan Demme"
}, {
    "id": 272,
    "name": "George Stevens"
}, {
    "id": 273,
    "name": "Tony Richardson"
}, {
    "id": 274,
    "name": "Cecil B. DeMille"
}, {
    "id": 275,
    "name": "Nicholas Ray"
}, {
    "id": 276,
    "name": "Mervyn LeRoy"
}, {
    "id": 277,
    "name": "Rainer Werner Fassbinder"
}, {
    "id": 278,
    "name": "Carol Reed"
}, {
    "id": 279,
    "name": "FranÃ§ois Girard"
}, {
    "id": 280,
    "name": "Lindsay Anderson"
}, {
    "id": 281,
    "name": "Alexander MacKendrick"
}, {
    "id": 282,
    "name": "Robert Mulligan"
}, {
    "id": 283,
    "name": "Zhang Yimou"
}, {
    "id": 284,
    "name": "John Lasseter"
}, {
    "id": 285,
    "name": "Steven Soderbergh"
}, {
    "id": 286,
    "name": "John Frankenheimer"
}, {
    "id": 287,
    "name": "Danny Boyle"
}, {
    "id": 288,
    "name": "Bryan Singer"
}, {
    "id": 289,
    "name": "Richard Linklater"
}, {
    "id": 290,
    "name": "Peter Watkins"
}, {
    "id": 291,
    "name": "Walter Hill"
}, {
    "id": 292,
    "name": "Herman Shumlin"
}, {
    "id": 293,
    "name": "Neal Jimenez"
}, {
    "id": 294,
    "name": "Andre Techine"
}, {
    "id": 295,
    "name": "Clarence Brown"
}, {
    "id": 296,
    "name": "Kenneth Lonergan"
}, {
    "id": 297,
    "name": "Alfonso Cuaron"
}];

module.exports = {
    getAll: function () {
        return _.sortBy(directors, function (c) {
            return c.name;
        });
    },
    get: function (id) {
        id = +id;
        return _.find(directors, function (p) {
            return p.id === id;
        });
    }
};
