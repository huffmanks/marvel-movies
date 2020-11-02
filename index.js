// Data
const movies = [
  {
    id: "JerVrbLldXw",
    title: "Captain America: The First Avenger",
    image:
      "https://image.tmdb.org/t/p/original/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    summary:
      "It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.",
    year: 2011,
    rating: 6.9,
    runtime: "2h 4m",
  },
  {
    id: "Z1BCujX3pw8",
    title: "Captain Marvel",
    image:
      "https://image.tmdb.org/t/p/original/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    summary:
      "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.",
    year: 2019,
    rating: 6.9,
    runtime: "2h 5m",
  },
  {
    id: "8ugaeA-nMTc",
    title: "Iron Man",
    image:
      "https://image.tmdb.org/t/p/original/wceJWXt0neJ0biXKOajMoAz2vaY.jpg",
    summary:
      "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
    year: 2008,
    rating: 7.9,
    runtime: "2h 6m",
  },
  {
    id: "BoohRoVA9WQ",
    title: "Iron Man 2",
    image:
      "https://image.tmdb.org/t/p/original/1NHEyFPxKnsLdMuDVPy6AI7GRmE.jpg",
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and &ldquo;Rhodey&rdquo; Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    year: 2010,
    rating: "7.0",
    runtime: "2h 4m",
  },
  {
    id: "xbqNb2PFKKA",
    title: "The Incredible Hulk",
    image:
      "https://image.tmdb.org/t/p/original/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
    summary:
      "Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).",
    year: 2008,
    rating: 6.7,
    runtime: "2h 15m",
  },
  {
    id: "JOddp-nlNvQ",
    title: "Thor",
    image:
      "https://image.tmdb.org/t/p/original/jWnbuXuzMIl3FDIs0qY9ZdDPxCl.jpg",
    summary:
      "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
    year: 2011,
    rating: "7.0",
    runtime: "1h 55m",
  },
  {
    id: "eOrNdBpGMv8",
    title: "The Avengers",
    image: "https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    summary:
      "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's &ldquo;dream team&rdquo; are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
    year: 2012,
    rating: "8.0",
    runtime: "2h 24m",
  },
  {
    id: "Ke1Y3P9D0Bc",
    title: "Iron Man 3",
    image:
      "https://image.tmdb.org/t/p/original/mt6ppX4nzTMU0e7lpixawyVK500.jpg",
    summary:
      "Plagued with worry and insomnia since saving New York from destruction, Tony Stark (Robert Downey Jr.), now, is more dependent on the suits that give him his Iron Man persona -- so much so that every aspect of his life is affected, including his relationship with Pepper (Gwyneth Paltrow). After a malevolent enemy known as the Mandarin (Ben Kingsley) reduces his personal world to rubble, Tony must rely solely on instinct and ingenuity to avenge his losses and protect the people he loves.",
    year: 2013,
    rating: 7.2,
    runtime: "2h 11m",
  },
  {
    id: "npvJ9FTgZbM",
    title: "Thor: Dark World",
    image:
      "https://image.tmdb.org/t/p/original/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    summary:
      "In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth.",
    year: 2013,
    rating: 6.9,
    runtime: "1h 52m",
  },
  {
    id: "tbayiPxkUMM",
    title: "Captain America: Winter Soldier",
    image:
      "https://image.tmdb.org/t/p/original/wxwt0pLxFZwKzy7pAu8WixadwqO.jpg",
    summary:
      "After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America (Chris Evans), lives in the nation's capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow (Scarlett Johansson) and a new ally, the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.",
    year: 2014,
    rating: 7.7,
    runtime: "2h 16m",
  },
  {
    id: "d96cjJhvlMA",
    title: "Guardians of the Galaxy",
    image:
      "https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    summary:
      "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
    year: 2014,
    rating: "8.0",
    runtime: "2h 5m",
  },
  {
    id: "wUn05hdkhjM",
    title: "Guardians of the Galaxy Vol. 2",
    image:
      "https://image.tmdb.org/t/p/original/kxtZpFfR0RMModlRHTFIuEPEH2O.jpg",
    summary:
      "Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. As the Guardians try to escape, the mystery of Peter's parentage is revealed.",
    year: 2017,
    rating: 7.6,
    runtime: "2h 18m",
  },
  {
    id: "JAUoeqvedMo",
    title: "Avengers: Age of Ultron",
    image:
      "https://image.tmdb.org/t/p/original/dsZUpJ6ml5dQpI7vBdscveCv4aB.jpg",
    summary:
      "When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.",
    year: 2015,
    rating: 7.3,
    runtime: "2h 22m",
  },
  {
    id: "pWdKf3MneyI",
    title: "Ant-Man",
    image:
      "https://image.tmdb.org/t/p/original/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    summary:
      "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.",
    year: 2015,
    rating: 7.3,
    runtime: "1h 58m",
  },
  {
    id: "dKrVegVI0Us",
    title: "Captain America: Civil War",
    image:
      "https://image.tmdb.org/t/p/original/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    summary:
      "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.",
    year: 2016,
    rating: 7.8,
    runtime: "2h 28m",
  },
  {
    id: "39udgGPyYMg",
    title: "Spider-Man: Homecoming",
    image:
      "https://image.tmdb.org/t/p/original/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    summary:
      "Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
    year: 2017,
    rating: 7.4,
    runtime: "2h 13m",
  },
  {
    id: "HSzx-zryEgM",
    title: "Doctor Strange",
    image:
      "https://image.tmdb.org/t/p/original/8Ffo5Yh6OQo1fdyFnSSHkHcSn7O.jpg",
    summary:
      "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
    year: 2016,
    rating: 7.5,
    runtime: "1h 55m",
  },
  {
    id: "xjDjIWPwcPU",
    title: "Black Panther",
    image:
      "https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    summary:
      "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    year: 2018,
    rating: 7.3,
    runtime: "2h 15m",
  },
  {
    id: "ue80QwXMRHg",
    title: "Thor: Ragnarok",
    image:
      "https://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    summary:
      "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
    year: 2017,
    rating: 7.9,
    runtime: "2h 10m",
  },
  {
    id: "6ZfuNTqbHE8",
    title: "Avengers: Infinity War",
    image:
      "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    summary:
      "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
    year: 2018,
    rating: 8.4,
    runtime: "2h 40m",
  },
  {
    id: "UUkn-enk2RU",
    title: "Ant-Man and The Wasp",
    image:
      "https://image.tmdb.org/t/p/original/gMEtbUQGgUHwdo8d4ZpdOer3Nxu.jpg",
    summary:
      "Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don the Ant-Man suit and fight alongside the Wasp. The urgent mission soon leads to secret revelations from the past as the dynamic duo finds itself in an epic battle against a powerful new enemy.",
    year: 2018,
    rating: 7.1,
    runtime: "2h 5m",
  },
  {
    id: "TcMBFSGVi1c",
    title: "Avengers: Endgame",
    image:
      "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    summary:
      "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    year: 2019,
    rating: 8.4,
    runtime: "3h 2m",
  },
  {
    id: "Nt9L1jCKGnE",
    title: "Spider-Man: Far From Home",
    image: "https://image.tmdb.org/t/p/original/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    summary:
      "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.",
    year: 2019,
    rating: 7.5,
    runtime: "2h 9m",
  },
];
// End Data

// Create movie boxes
const container = document.createElement("div");
container.classList.add("container");

movies.forEach((movie, i) => {
  const movieBox = document.createElement("div");
  movieBox.classList.add("movie-box");
  movieBox.innerHTML = `
    <div class="movie-content">
      <div class="movie-front">
        <img src="${movies[i].image}" alt="" />
      </div>
      <div class="movie-back">
        <h3>${movies[i].title}</h3>
        <div class="subtitle">
          <span class="rating">${movies[i].rating}</span>
          <span class="runtime">${movies[i].runtime}</span>
          <button id="${movies[i].id}" class="modal-link">Trailer</button>
        </div>
        <div>${movies[i].summary}</div>
      </div>
    </div>
    `;
  container.appendChild(movieBox);
  document.body.appendChild(container);
});

// Modal
const modal = document.getElementById("modal");
const youtube = document.getElementById("youtube");
const modalLinks = document.querySelectorAll(".modal-link");
modalLinks.forEach((modalLink) => {
  modalLink.addEventListener("click", (e) => {
    const trigger = e.target;
    const modalId = trigger.getAttribute("id");
    youtube.setAttribute("src", `https://www.youtube.com/embed/${modalId}`);
    modal.classList.add("visible");
  });
});

// Close Modal
const close = document.querySelector(".close");
close.addEventListener("click", () => {
  modal.classList.remove("visible");
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("visible");
  }
});
