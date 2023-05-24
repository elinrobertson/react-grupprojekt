1. Gå in server mappen och fyll i din Mongo DB Atlas connection string i .env filen.

2. Gå in i server mappen och skapa produkter, fraktsätt samt användare i .rest filen.

3. Gå in i client mappen och initiera ett React/Typescript projekt med hjälp av Vite.
   npm create vite@latest .



Krav för godkänt: 

1.Git & GitHub har använts
2.Projektmappen har en README.md fil - med all information beskriven ovan
3.Uppgiften lämnas in i tid!
4.React Router används
5.En landningssida som visar alla produkter skall finnas
6.Det skall gå att logga in och logga ut. Se info ovan
7.Alla produkter ska vara klickbara och ta användaren till en detaljsida
8.Detaljsidan ska minst innehålla en större bild på produkten, titel, beskrivning, pris samt text i stil med ”I lager”, ”Fåtal i lager” eller ”Ej i lager” beroende på hur många som finns i lager. 
9.Det skall både från landningssidan och detaljsidan gå att lägga till produkten i varukorgen
10.Varukorgen ska alltid synas, tillsammans med en indikator på hur många produkter den innehåller
11.Vid klick på varukorgen skall innehållet och totalbeloppet visas samt en knapp ”Till kassan” som tar användaren till utcheckningssidan
12.Vyn som visas vid klick på kundvagnen skall gå att uppdatera precis på samma sätt som Kundvagnssektionen i utcheckningsflödet
13.Det ska ej gå att komma till utcheckningssidan om kundvagnen är tom
14.Utcheckning - Sektionen ”Kundvagn” ska uppfylla de krav listade ovan
15.Utcheckning - Sektionen ”Dina uppgifter” ska uppfylla de krav listade ovan
16.Utcheckning - Sektionen ”Fraktsätt” ska uppfylla de krav listade ovan
17.Det ska ej gå att placera en order om inte alla formulär i utcheckningen är ifyllda
18.När man placerar en order skall någon slags loader visas innan man ser orderbekräftelsen. 
19.När en order lagts skall en bekräftelse visas med beställda produkter samt ett ordernummer
20.Formulären vid utcheckningen ska gå att automatiskt fyllas i
21.Samtliga fält ska ha valideringsregler
22.Det skall ej gå att lägga samma order två ggr. D v s om man lagt en order och går bakåt skall man inte kunna lägga samma order igen
23.Sidan ska vara fullt responsiv
24.Produkter i varukorgen ska ligga kvar även om man laddar om sidan

Krav för Väl Godkänt

25.Det finns en admin-sida där man kan ändra, lägga till eller ta bort produkter, samt en lista på alla ordrar som lagts där man kan markera en order som ”skickad”.