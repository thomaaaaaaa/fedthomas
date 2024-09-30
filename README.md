# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Thomas Maarse

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface Plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.kaas.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Kaas.nl - Home  
  <img src="images/kaasnl-home.png" width="375px" alt="De homepagina van Kaas.nl">

  #### Screenshot(s) van de tweede pagina (small screen):
  Kaas.nl - Kaaswizard  
  <img src="images/kaaswizard.png" width="375px" alt="De pagina waarop je zelf een Kaasprofiel kan aanmaken.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  - Sommige dingen zijn eigeinlijk niet te zien op de echte site, maar worden wel voorgelezen! Staan er eigenlijk nog als foutje, maar blinde gebruikers krijgen alles mee.
  - De carrouselletjes worden goed voorgelezen! Eerst kon ik er niet echt lekker doorheen navigeren, maar ik deed het verkeerd: toen ik eenmaal op de juiste toetsen drukte, lukte alles perfect.
  - Wel vervelend is: hij leest meteen alle carrouselitems toe! Dat zijn er een hele hoop, dus gaat dat wel even duren. Opzich niet fout, maar wel hinderend voor gebruikers denk ik!
  - de site zit qua accessibility goed in elkaar en is prima te navigeren met de screenreader, maar sommige dingetjes zijn toch niet helemaal handig.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="images/kaasnl-home-analyse.png" width="375px" alt="Breakdown van de hele homepagina">
  <img src="images/kaaswizard-analyse.png" width="375px" alt="Breakdown van de hele Kaaswizard">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het lastigste was vooral de oefeningen in de les: het opfrissen van informatie en vaardigheden die ik eigenlijk was kwijtgeraakt na een tijdje, maar daarom was het juist zo goed om alle oefeingen te doen! Ik kwam niet altijd overal meteen uit, maar ik kon altijd hulp krijgen van de begeleiders of mijn klasgenoten. 
  
  Het maken van de site zelf gaat tot nu toe erg vlot en gemakkelijk, maar misschien is dat omdat ik vooral met HTML bezig ben geweest...

  Tot nu toe ben ik hier met mijn site:
    1. Kale HTML met tekst
      <img src="images/home-kale-html.png" width="375px" alt="De homepagina, met compleet kale HTML.">
  <img src="images/kaaswizard-kale-html.png" width="375px" alt="De kaaswizard, met compleet kale HTML">
    2. HTML met een beetje typografie
      <img src="images/home-kale-css.png" width="375px" alt="Breakdown van de hele homepagina">
  <img src="images/kaaswizard-kale-css.png" width="375px" alt="Breakdown van de hele Kaaswizard">

  De volgende stappen zijn nu:
    3. HTML met typografie en afbeeldingen
    4. HTML met typografie, afbeeldingen, en positionering
    5. HTML met typografie, afbeeldingen, positionering en kleur
    6. HTML met typografie, afbeeldingen, positionering, kleur en interactiviteit


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Thomas     | Braham         | Aya    | Joy        |
  | ---            | ---                | ---          | ---              |
  | Hoe maken we vormen? Met vector of images?  | Hoe zit een Carroussel in elkaar?             | Kloppen onze breakdownschetsen?    | Wat is de beste manier om een video te embedden?    |
  | Hoe maak je een progressiebalk bij een carroussel? | Hoe maak je een hamburgermenu met animatie zonder images te gebruiken? | Waar precies moet je div gebruiken en waar een class? | Is onze HTML zo oké & correct? |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

De vormen op mijn site:
- CSS kan vectoren doen, een divje met border radius!
- Footer heeft backbround, die een border radius

Caroussel
- Een divje met overflow! hoeft niet per se infinite te zijn. interacties zijn wel heel goed om te hebben!
- Kijk voor caroussel op https://css-tricks.com/css-only-carousel/ Geeneens Java voor nodig! Heel veel staat in css tricks, denk om snappen, groeien, etc... De puntjes die meeveranderen zijn... css? java? ff kieken!
- De bolletjes eronder/progressiebalk: javascript!
- Let eerst op css tricks, dan pas kleine details!

Maak het niet te ingewikkeld:
- Blijf zo dicht mogelijk bij de echte site waar het niet echt nodig is om dingen anders te doen, anders is het alleen maar extra werk.
- Doe alles wat kan met sections en articles, alleen div bij vormgeving bijvoorbeeld binnen een article verschillende groepjes! divjes zijn alleen voor technische kant, niet voor de structuur: daar zijn die andere dingies voor.
- Gbruik zo veel mogelijk selectoren, niet classes!!


Als je bij de inspector bij de sources kijkt (of bij internet en gedownload) kan je met heel weinig moeite alle afbeeldingen bij elkaar vinden!!

Aria atribuut: zeggen wat voor ding iets is, voor de screenreader! hoeft niet per se hier, maar het is wel een mogelijk focuspuntje
Hamburgermenu is een unordered list in de Nav!

Wat nu?
In de surface plane dingen toevoegen: 
- loopend dingetje knopje
- golfjes onderin
- aria attributen
- cookies popup
- veranderende header

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


mijn surface level dingetjes:
- loopend dingetje knopje
- golfjes onderin
- aria attributen
- cookie popup
- veranderende header als je scrollt
- soorten carousellen (krimpen en groeien etc)

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Thomas      | Braham          | Aya    | Joy        |
  | ---            | ---                | ---          | ---              |
  | Hoe zorg ik dat mijn header van kleur verandert, als ik voorbij een bepaald punt op mijn pagina ben?  | Hoe krijg ik de pijl van de details element aan de andere kant van de summary?    | hoe zorg ik dat een deel van de header vast blijven tijdnes het scrollen (position: fixed en sticky niet gewerkt)  | en dan ik dat    |
  | Is het echt verkeerd om dingen te positionen met paddings en margins?            | Moest je nou je hele main een class geven, of per element?              | Mijn elementen schuiven naar rechts toe en ik weet niet waar ik een fout heb staan in de code. Alles staat scheef hellup!!!!          | ...              |


  ### Verslag van meeting
Tijdens dit gesprek met de studentassistenten heb ik een aantal handige tips gekregen om verder te werken. Vooral belangrijk is dat we er achter kwamen dat de deadline al om de hoek is! Spannend......

Op een aantal technische dingen werden we gewezen op handige hulpbronnen en technieken, die we zeker gaan toepassen.
Er is nog veel te doen, maar we hebben de tijd! ...hoop ik.
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Mijn website is tot nog toe nog niet zo toegankelijk als ik had gewild omdat ik nog niet ben toegekomen aan het toevoegen van alt-attributen of aria-labels zoals ik van plan was. Ik zal de test  uitvoeren als ik deze dingen eenmaal heb toegevoegd.				

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik vond het leuk om alles in HTML na te maken, en het namaken van de CSS was leuk om mee te puzzelen. Maar het bleef

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Thomas      | Braham         | Aya   | Joy        |
  | ---            | ---                | ---          | ---              |
  | Hoe kan ik het best die gradients doen van de afbeeldingen?  | Moet de carousel direct overeen komen met hoe de website er daadwerkelijk uitziet?             | en ik dit    | Wat vind je van het plan voor de rest van mijn werk?    |
  | Wat is de beste manier om vormen te maken? Met SVG, of met Border Radius? | Hoe los ik alle problemen met rescalability op? | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  Tijdens de meeting kreeg ik antwoord op een aantal van mijn vragen.

  Hoe kan ik het best die gradients doen van de afbeeldingen?
    Gebruik "background-image:linear-gradient( rgb(0 0 0 / 0), rgba(0 0 0 / 1) );" (zie sommetje positioneren)
    Of, met element ::after na de banner, met content:"" en een background met een gradient

  Hoe belangrijk is het dat de carrousellen er hetzelfde uitzien als op de site?
    Niet enorm: bij de fancy gele caroussel bijvoorbeeld het groeien en krimpen zijn niet heel belangrijk maar wel ingewikkeld! Verlies er niet te veel tijd aan. Maar bij de anderen: hoeft niet 100% nauwkeurig, maar als iets makkelijk mee te pakken is, doe het vooral! Kijk in teams, daar staat een handig linkje voor de carrousels. vergeet ook niet de css tricks pagina erover!

  Hoe belangrijk is het gridden van mijn site?
    ENORM! De site is helemaal broken op rescalability. Layout is enorm belangrijk in de beoordeling: met grid en flexbox, zorg dat alles er nog steeds prima uitziet als je het venster van maat verandert. Probeer met het venster te herschalen, kijk wat er breekt, en zorg dat dat prima meeschaalt!

  Hoe maak ik het golfvormpje onderaan mijn site?
     Het kan het best met svg'tje en dan een 'clip path', dat is vrij ingewikkeld en telt als extra surface level punt.
  
  We besproken wat ik nu nog moet doen en stelden een lijstje op:
    1.   Het afmaken van de content en carrouselletjes
    2.   Het fixen van de rescalability
    3.   Het toevoegen van de microinteractie:
              - Hamburgermenu
    4.   Het toevoegen van de surface level dingies
              	- Golfje met clip path
	              - Zoekknopje
	              - Loopend dingie
	              - Header verandert
              	- Extra focus op toegankelijkheid (aria)

  Dat moet wel lukken!

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="images/ss_intro" width="375px" alt="De banner van de homepage.">
  <img src="images/ss_smaaktest" width="375px" alt="Een blok met informatie.">
  <img src="images/ss_smaakprofielbanner" width="375px" alt="De banner van de 2e pagina.">
  <img src="images/ss_smaakprofiel" width="375px" alt="Een section over het samenstellen van een smaakprofiel.">
  
  
  


  ### Dit ging goed/Heb ik geleerd: 
  Wat goed ging is dat ik de site bijna 1 op 1 heb nagemaakt. Ik kon na een tijdje zelf geen onderscheid meer maken tussen de echte en de mijne: dat vond ik heel leuk, en daar ben ik trots op!

  <img src="images/kaasvskaas.png" width="375px" alt="Twee bijna identieke pagina's!">


  ### Dit was lastig/Is niet gelukt:
  Omdat ik het voor de deadline eerst een aantal dagen heel druk had met het vak Vormgeving 2, met een deadline net iets voor deze, had ik uiteindelijk erg kort de tijd over om mijn opdracht af te maken. Dat, gecombineerd met dat ik heel uitgeput ben en ziek begin te worden, en mijn externe monitor (waar ik best afhankelijk van geworden ben tijdens het coderen) stuk is gegaan, had ik enorme moeite om alles op tijd af te krijgen en is dat dus niet gelukt.
  
  Wat mij ook niet goed lukte, is het positioneren op de juiste manier: ik heb heel veel met margins gedaan, met de bedoeling om het later aan te passen en het op de juiste manier te doen, maar daar had ik dus geen tijd meer voor.

  Maar, ik heb hoop dat het toch nog gaat lukken! Ik weet precies wat er moet gebeuren, en met genoeg tijd weet ik zeker dat ik alles goed kan maken bij de herkansing.

    <img src="images/todo.png" width="375px" alt="Mijn overzicht van alles dat ik nog ga aanpassen.">
</details>





## Bronnenlijst

<details open>
1. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties 
2. https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator
3. https://developer.mozilla.org/en-US/docs/Web/CSS/filter 
4. https://codepen.io/teerapuch/pen/vLJXeR
5. https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
6. https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path 
7. https://developer.mozilla.org/en-US/docs/Web/CSS/display
</details>
