# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Het doel van de app -- Als voorbeeld - Checkbox React Component

In deze app wilden we laten zien waarom de className naar rhc-theme-methode die we gebruiken om het css cross contamination-probleem op te lossen,
niet werkt in componenten die zich in een andere component bevinden, zoals een checkbox. 

Wanneer we twee checkbox gebruiken, krijgen zowel Utrecht als Rhc de extra functies die we hebben toegevoegd en werken ze niet zoals verwacht.
Om dit op te lossen, hebben we een manier nodig om dezelfde benadering/methode in alle componenten te kunnen gebruiken.
Als u advies of een oplossing voor ons heeft, hoor ik dat graag. 

#Link van deze issue: 
https://github.com/nl-design-system/rijkshuisstijl-community/issues/2113

  #TLDR
  Op dit moment is het dat bepaalde RHC componenten styles op Utrecht css classes dat zorgt voor cross contamination wanner je rhc en utrecht op dezelfde pagina gebruikt.
  zie #2110 voor tussentijdse oplossing

  #User Story
  Als afnemer wil ik meerdere organisatie componenten kunnen gebruiken zonder dat ze elkaar beinvloeden.

  Context
  Het helpt met scoping; we kwamen dit tegen in de themes repository. Daar weergeven we componenten van Utrecht met het utrecht-theme en componenten van Rijkshuisstijl Community met het rhc-theme. De styling van beide word geimporteerd. Maar Rijkshuisstijl Community       maakt gebruik van Utrecht componenten en voegt extra styling toe, direct op de utrecht-action-group. Daardoor word deze styling van Rijkshuisstijl Community ook toegepast op de Utrecht componenten.
  Door een rhc-action-group class toe te voegen, kan je styling toevoegen op de utrecht-action-group zonder dat dat effect heeft op het ecosysteem buiten de Rijkshuisstijl Community.
  Nog een voorbeeld, los van de themes repository: als je een website maakt, wil je gebruik maken van componenten uit verschillende organisaties. Dan wil je niet dat de styling van die verschillende organisaties elkaar kapot maken omdat ze op dezelfde classes stylen.

  Indien de gewenste oplossing een class toegevoegd dan moet dit ook bij de frameworks toevoegen in de markup.

  Als ActionGroup uit Utrecht direct in SomeUtrechtComponent in Utrecht word gebruikt, zonder onze interference waar we de ActionGroup toevoegen. Als we dan SomeUtrechtComponent, blijft het probleem bestaan als je leunt op rhc-button-group. Zo zal het ook nooit buiten     je rhc-theme toegepast worden in bijv themes. Echter heb je dan minder controle over waar het toegepast word.      

  Actiepunten
  dit willen we doen per component:

  controleer of er cross contamination voorkomt
  zoja: oplossen, zonee: oplossing opzetten voor toekomst om dit te vermijden
  oplossing: is stijling die de RHC toepast nodig, bijv: heeft component bij de organisatie (bijv utrecht) toevallig tokens voor de overwrites die we doen of zijn er andere oplossingen die ze bieden?
  als de styling wel nog nodig is kunnen we dit toevoegen via RHC tokens die via RHC classes worden toegepast.
