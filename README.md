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
  <img src="readme-images/kaasnl-home.png" width="375px" alt="De homepagina van Kaas.nl">

  #### Screenshot(s) van de tweede pagina (small screen):
  Kaas.nl - Kaaswizard  
  <img src="readme-images/kaaswizard.png" width="375px" alt="De pagina waarop je zelf een Kaasprofiel kan aanmaken.">
 
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
  <img src="readme-images/kaasnl-home-analyse.png" width="375px" alt="Breakdown van de hele homepagina">
  <img src="readme-images/kaaswizard-analyse.png" width="375px" alt="Breakdown van de hele Kaaswizard">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het lastigste was vooral de oefeningen in de les: het opfrissen van informatie en vaardigheden die ik eigenlijk was kwijtgeraakt na een tijdje, maar daarom was het juist zo goed om alle oefeingen te doen! Ik kwam niet altijd overal meteen uit, maar ik kon altijd hulp krijgen van de begeleiders of mijn klasgenoten. 
  
  Het maken van de site zelf gaat tot nu toe erg vlot en gemakkelijk, maar misschien is dat omdat ik vooral met HTML bezig ben geweest...

  Tot nu toe ben ik hier met mijn site:
    1. Kale HTML met tekst
      <img src="readme-images/home-kale-html.png" width="375px" alt="De homepagina, met compleet kale HTML.">
  <img src="readme-images/kaaswizard-kale-html.png" width="375px" alt="De kaaswizard, met compleet kale HTML">
    2. HTML met een beetje typografie
      <img src="readme-images/home-kale-css.png" width="375px" alt="Breakdown van de hele homepagina">
  <img src="readme-images/kaaswizard-kale-css.png" width="375px" alt="Breakdown van de hele Kaaswizard">

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
  <img src="readme-images/ss_intro.png" width="375px" alt="De banner van de homepage.">
  <img src="readme-images/ss_smaaktest.png" width="375px" alt="Een blok met informatie.">
  <img src="readme-images/ss_smaakprofielbanner.png" width="375px" alt="De banner van de 2e pagina.">
  <img src="readme-images/ss_smaakprofiel.png" width="375px" alt="Een section over het samenstellen van een smaakprofiel.">
  
  
  


  ### Dit ging goed/Heb ik geleerd: 
  Wat goed ging is dat ik de site bijna 1 op 1 heb nagemaakt. Ik kon na een tijdje zelf geen onderscheid meer maken tussen de echte en de mijne: dat vond ik heel leuk, en daar ben ik trots op!

  <img src="readme-images/kaasvskaas.png" width="375px" alt="Twee bijna identieke pagina's!">


  ### Dit was lastig/Is niet gelukt:
  Omdat ik het voor de deadline eerst een aantal dagen heel druk had met het vak Vormgeving 2, met een deadline net iets voor deze, had ik uiteindelijk erg kort de tijd over om mijn opdracht af te maken. Dat, gecombineerd met dat ik heel uitgeput ben en ziek begin te worden, en mijn externe monitor (waar ik best afhankelijk van geworden ben tijdens het coderen) stuk is gegaan, had ik enorme moeite om alles op tijd af te krijgen en is dat dus niet gelukt.
  
  Wat mij ook niet goed lukte, is het positioneren op de juiste manier: ik heb heel veel met margins gedaan, met de bedoeling om het later aan te passen en het op de juiste manier te doen, maar daar had ik dus geen tijd meer voor.

  Maar, ik heb hoop dat het toch nog gaat lukken! Ik weet precies wat er moet gebeuren, en met genoeg tijd weet ik zeker dat ik alles goed kan maken bij de herkansing.

<img src="readme-images/todo.png" width="375px" alt="Mijn overzicht van alles dat ik nog ga aanpassen.">
</details>


## Werken aan herkansing (week 6+)
<details>
  <summary>Het proces na het beoordelingsgesprek.</summary>
	
	Omdat ik mijn eerste poging niet had gehaald - wat compleet begrijpelijk was aangezien er nog veel ontbrak aan mijn site, werkte ik zelfstandig verder aan de verbeterde versie voor bij de herkansing. Aan de hand van mijn overzichtje van wat er allemaal nog moest ging ik aan de slag met het oplappen van mijn werk.

 Het bleek nog lastig te zijn, aangezien de dingen die nog moesten gebeuren, ook de lastigste dingen bleken te zijn. Ik schoot niet heel erg op, maar gelukkig was er een 2e feedbackronde, waar ik goed kon gaan zitten met Danny en ik het plan nog een keer kon doorlopen. Voor het gesprek stelde ik een lijst met vragen op, die ik aanvulde aan de hand van de antwoorden die ik kreeg. Uiteindelijk had ik de volgende lijst:

  ### Vragenlijst:
Hoe zat het precies met de gradients op de afbeeldingen?
-	“Geit in valley of fire” afbeelding in de positioneren-oefening 1 van week 3
-	Je kan ook een background-image gradient kunnen geven aan de div waar de content in zit, en dan de div het juiste formaat geven

In hoeveel detail moet de Aria? Is dat ingewikkeld nu of niet, kan ik beter iets anders doen?
-	Gebruik ze nuttig! Bijv bij menu en iconen, er is geen grens, maar bedenk zelf waar het nuttig is voor de toegankelijkheid. 

Welke DLO-opdracht of bron is het best voor het fixen van de rondschuifrescalability?
-	Doe flexbox voor dingen die centreerd moet blijven, doe absolute voor dingen die op een plek moeten blijven
-	Bij de knopjes: maak een 

Code zo netjes genoeg?
-	Yes!!!!!!

Waren de knopjes bij de carousselletjes nou echt belangrijk of was dat een ander surface plane ding geweest? 
-	De carrouselletjes zijn goed genoeg zo! Maar zorg dat bij de caroussel er genoeg ruimte aan de zijkant zit!
DLO Hamburger voorbeeld werkt niet?
-	Zet m op mobiel !!!!!!!!!
-	Vorige keer: “overflow hidden op body in js (met nieuwe class) zodat je het menu kan scrollen! 2x nav?”
-	Op de body van de originele pagina moet er over
Hoe moet het met de hamburger qua aria? Die moet niet meteen voorgelezen worden toch? Kunnen we even een stappenplannetje opstellen daarvoor?
1.	Maak het knopje klikbaar
2.	Zorg dat het menu met -100vw opzij staat (met “transform -100%”), doe dat met een class “menuhidden”
3.	Zorg dat het menu dan ook op hidden staat, zodat de screenreader het niet gaat voorlezen!
4.	Er wordt op het knopje geklikt.
5.	Transform -100% gaat naar Transform 0% (op het menu dat er al is), door de class te togglen met classlist.toggle menuhidden
6.	Zet “overflow hidden” op de body (met een “no-scroll” class)
7.	Als er op het kruisje wordt geklikt togglet hij nog eens, en gaat de class op de body weg om te zorgen dat er weer gescrolld kan worden


Hiermee kon ik goed verder werken. Aan de hand van een paar extra online bronnen en de hulp van klasgenoten, schoot ik goed op en kwam ik dichter en dichter bij een uiteindelijke versie! Om te checken of ik alles goed had gedaan, doorliep ik ook nog een keer de accessibility-test.

## Toegankelijkheidstest 2/2 (week 6+)
<details>
  <summary>De tweede toegankelijkheidstest.</summary>
## Afronden (week 6+)

Nu ik zeker weet dat alles klopt en goed in elkaar zit, ben ik klaar voor het herkansingsgesprek! Het was nog flink wat werk, maar achteraf gezien ook wel weer leuk - het was een flinke puzzel, maar wel een puzzel die ik uiteindelijk op heb kunnen lossen.


## Bronnenlijst
<details open>
1. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties 
2. https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator
3. https://developer.mozilla.org/en-US/docs/Web/CSS/filter 
4. https://codepen.io/teerapuch/pen/vLJXeR
5. https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
6. https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path 
7. https://developer.mozilla.org/en-US/docs/Web/CSS/display
8. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
9. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
10. https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
11. https://bennettfeely.com/clippy/
12. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#example_a_mobile_navigation_menu
13. Opdrachten uit DLO
14. Mijn eigen werk van het vak Inleiding Programmeren
opdracht op dlo
eigen werk van Inleiding Programmeren
</details>
