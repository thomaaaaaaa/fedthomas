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
  - Hij leest meteen alles voor van de hele site, duurt eventjes.... is dat de bedoeling? want heel veel van deze informatie is niet interessant voor alle gebruikers!
  - Kleurtjes worden goed uitgesproken, maar niet heel specifiek: heel licht grijs-lila wordt gewoon "paars" genoemd
  - Sommige dingetjes zijn heel visuel, maar worden voorgelezen als een eigenlijk lopende tekst. hierdoor ontbreekt de context compleet en worden er vrij random dingen gezegd.
  - De verteller skipt sommige dingen? als ik probeer te navigeren dan slaat hij sommige dingen over.....

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="images/kaasnl-home-analyse.png" width="375px" alt="Breakdown van de hele homepagina">
  <img src="images/kaaswizard-analyse.png" width="375px" alt="Breakdown van de hele Kaaswizard">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="Breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="Breakdown van nog een dynamisch deel">

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

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Thomas      | Braham          | Aya    | Joy        |
  | ---            | ---                | ---          | ---              |
  | Hoe zorg ik dat mijn header van kleur verandert, als ik voorbij een bepaald punt op mijn pagina ben?  | Hoe krijg ik de pijl van de details element aan de andere kant van de summary?    | hoe zorg ik dat een deel van de header vast blijven tijdnes het scrollen (position: fixed en sticky niet gewerkt)  | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | Is het echt verkeerd om dingen te positionen met paddings en margins?            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
