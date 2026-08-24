window.QUIZ_DATA = [
	{
		"question": "Nel gergo delle basi di dati i termini <b>modello</b> e <b>schema</b> indicano concetti diversi?",
		"answers": {
			"a": "Si: un modello fornisce i costrutti che consentono di costruire gli schemi.",
			"b": "Si: uno schema fornisce i costrutti che consentono di costruire i modelli.",
			"c": "No, entrambi indicano un insieme di costrutti.",
			"d": "No, entrambi indicano una rappresentazione formale della realtà"
		},
		"correctAnswer": "a",
		"category": "Teoria"
	},
	{
		"question": "C'è differenza tra Data <b>Definition Language (DDL)</b> e <b>Data Manipulation Language (DML)</b>?",
		"answers": {
			"a": "Si, i DML sono utilizzati per definire gli schemi, i DDL per interrogare e aggiornare le istanze.",
			"b": "Si, i DDL sono utilizzati per definire gli schemi, i DML per interrogare e aggiornare le istanze.",
			"c": "No, sono entrambi utilizzati per definire gli schemi.",
			"d": "No, sono entrambi utilizzati per interrogare e aggiornare le istanze."
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Il modello relazionale dei dati fu proposto nel 1970 da:",
		"answers": {
			"a": "J.D. Ullman.",
			"b": "P.P. Chen.",
			"c": "C.J. Date.",
			"d": "E.F. Codd."
		},
		"correctAnswer": "d",
		"category": "Teoria"
	},
	{
		"question": "Sia R(X) uno schema di relazione. Quale delle seguenti affermazioni è certamente vera?",
		"answers": {
			"a": "Una superchiave di R è sempre chiave di R.",
			"b": "Una chiave di R è sempre superchiave di R.",
			"c": "Ci possono essere chiavi di R che non sono superchiavi di R.",
			"d": "Chiavi e superchiavi di R coincidono sempre."
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": "L'operazione di algebra relazionale estesa<br><br> ${}_{Dipartimento} {F}_{MAX(Stipendio)}\\;$ $(DIPENDENTE)$<br><br>applicata alla relazione seguente,contiene:<br></br><div class='table-responsive'><table class='table table-bordered'> <tbody> <tr><td colspan=\"4\" style=\"text-align:center\"><b>DIPENDENTE<b/></td></tr><tr> <th>Codice</th> <th>Cognome</th> <th>Dipartimento</th> <th>Stipendio</th> </tr> <tr> <td>1</td> <td>Rossi</td> <td>1</td> <td>10000</td> </tr> <tr> <td>2</td> <td>Verdi</td> <td>2</td> <td>15000</td> </tr> <tr> <td>3</td> <td>Bianchi</td> <td>3</td> <td>20000</td> </tr> <tr> <td>4</td> <td>Neri</td> <td>4</td> <td>10000</td> </tr> </tbody> </table></div>",
		"answers": {
			"a": "1 tupla.",
			"b": "2 tuple.",
			"c": "3 tuple.",
			"d": "4 tuple."
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia dato lo schema di base di dati relazionale:<br/><br/><img src=\"img/1.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img><br/><br/> Quali delle seguenti operazioni hanno le potenzialità di violare il vincolo di integrità referenziale?",
		"answers": {
			"a": "Sia la cancellazione di una tupla di S che la cancellazione di una tupla di R.",
			"b": "Solo la cancellazione di una tupla di S.",
			"c": "Solo la cancellazione di una tupla di R.",
			"d": "Né la cancellazione di una tupla di S né la cancellazione di una tupla di R."
		},
		"correctAnswer": "b",
		"category": "Schema Relazionale"
	},
	{
		"question": "Sia data la relazione con schema:<br/><br/><div class='table-responsive'><table class='table table-bordered'><tbody><tr><td colspan=\"4\" style=\"text-align:center\"><b>PERSONA<b/></td></tr><tr><th><u>Codice</u></th><th>Cognome</th><th>Numero Patente</th></tr></tbody></table></div>In quale dei seguenti casi non è corretto inserire un valore nullo per NumeroPatente?",
		"answers": {
			"a": "Quando la persona non dispone di patente.",
			"b": "Quando è noto che la persona dispone di patente con NumeroPatente uguale a 0.",
			"c": "Quando è noto che la persona dispone di patente, ma non se ne conosce il NumeroPatente.",
			"d": "Quando non si sa se la persona dispone o meno di patente, e comunque, se ne dispone, non si sa qual è il suo numero patente."
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Se l'attributo A assume valore nullo, allora la condizione di selezione <b>A IS NOT NULL</b>:",
		"answers": {
			"a": "Assume valore True.",
			"b": "Assume valore False.",
			"c": "Assume valore Unknown.",
			"d": "Non assume un valore definito."
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Il risultato di un'espressione di algbera relazionale estesa:",
		"answers": {
			"a": "È sempre uno schema di relazione.",
			"b": "Può essere o no uno schema di relazione.",
			"c": "È sempre una relazione.",
			"d": "Può essere o no una relazione."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia R(A, B, C) uno schema di relazione in cui sussistono solo le dipendenze funzionali:<br>A $\\to$ B<br>B $\\to$ C<br>oltre a quelle implicate da queste e a quelle banali. Quale delle seguenti non è una superchiave di R?",
		"answers": {
			"a": "{A}.",
			"b": "{A,B}.",
			"c": "{B}.",
			"d": "{A,B,C}."
		},
		"correctAnswer": "c",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "Quale delle seguenti operazioni di algbera relazionale non è unaria?",
		"answers": {
			"a": "Ridenominazione.",
			"b": "Selezione.",
			"c": "Join.",
			"d": "Proiezione."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "L'attività di progettazione di una base di dati consiste essenzialmente in:",
		"answers": {
			"a": "Definire struttura e caratteristiche proprie di una collezione di dati.",
			"b": "Progettare un DBMS.",
			"c": "Elencare tutte le istanze possibili di una collezione di dati.",
			"d": "Progettare un sistema software in grado di gestire collezioni di dati grandi, condivise e persistenti."
		},
		"correctAnswer": "a",
		"category": "Teoria"
	},
	{
		"question": "Si consideri lo schema ER della figura seguente:<br><br><img src='img/2.webp' style='max-width: 100%; height: auto;' alt='Immagine 2.webp'/></br>Il fatto che non siano specificate le cardinalità degli attributi A1 e A2 sta ad indicare che:",
		"answers": {
			"a": "I due attributi possono avere cardinalità qualsiasi.",
			"b": "A1 ha cardinalità implicita (1,1), A2 può avere cardinalità (0,1) oppure (1,1).",
			"c": "Entrambi gli attributi hanno cardinalità implicita (1,1). ",
			"d": "Lo schema è errato: le cardinalità degli attributi vanno sempre specificate esplicitamente."
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Dal solo punto di vista sintattico, ossia del corretto uso formale dei costrutti del modello ER, lo schema ER della figura seguente:<br><img src='img/3.webp' class='responsive-img' alt='Immagine 3.webp'>",
		"answers": {
			"a": "Può essere corretto o errato, a seconda della realtà che si intende rappresentare.",
			"b": "Può essere corretto o errato: non abbiamo sufficienti elementi per rispondere.",
			"c": "È sicuramente errato.",
			"d": "È sicuramente corretto."
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Gli strumenti della teoria della normalizzazione consentono di rilevare:",
		"answers": {
			"a": "Errata definizione delle chiavi esterne.",
			"b": "Scelta inadeguata della chiave primaria.",
			"c": "Possibile ridondanza nelle tuple.",
			"d": "Scelta inadeguata del nome dello schema di relazione."
		},
		"correctAnswer": "c",
		"category": "Normalizzazione"
	},
	{
		"question": "Nella progettazione di uno schema ER, se un concetto ha proprietà significative e/o descrive classi di oggetti con esistenza autonoma, è opportuno rappresentarlo con:",
		"answers": {
			"a": "Un'associazione.",
			"b": "Un attributo.",
			"c": "Un'entità.",
			"d": "Una generalizzazione."
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Se nella progettazione di uno schema ER si individuano solo alcuni concetti importanti e poi si procede, a partire da questi, a <b>macchia d'olio</b>, si sta utilizzando una strategia di progettazione:",
		"answers": {
			"a": "Top-down.",
			"b": "Bottom-up.",
			"c": "Inside-out.",
			"d": "Mista."
		},
		"correctAnswer": "c",
		"category": "Teoria"
	},
	{
		"question": "Quale di questi non è un passo di ristrutturazione di uno schema ER?",
		"answers": {
			"a": "Analisi delle ridondanze.",
			"b": "Eliminazione delle generalizzazioni.",
			"c": "Rielaborazione dello schema in presenza di nuovi requisiti.",
			"d": "Scelta degli identificatori."
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "La migliore traduzione possibile dello schema ER ristrutturato della figura seguente<br><img src='img/4.webp' style='max-width: 100%; height: auto;' alt='Immagine 4.webp'><br> verso il modello logico relazionale porta agli schemi di relazione:",
		"answers": {
			"a": "E1(<u>A11</u>,A12) e E2(<u>A21</u>,A22).",
			"b": "E1(<u>A11</u>,A12,A21) e E2(<u>A21</u>,A22).",
			"c": "E1(<u>A11</u>,A12), E2(<u>A21</u>,A22) e R(<u>A11</u>,<u>A21</u>).",
			"d": "E1(<u>A11</u>,A12), E2(<u>A21</u>,A22) e R(A11,A21)."
		},
		"correctAnswer": "c",
		"category": "Schema Relazionale"
	},
	{
		"question": "L'istruzione di SQL standard <pre style='text-align:left'> SELECT * FROM PERSONA_1<br> UNION<br> SELECT * FROM PERSONA_2;</pre> applicata alle tabelle<br>PERSONA_1<br> <div class='table-responsive'><table class='table table-bordered'> <tbody> <tr> <th>Nome</th> <th>Cognome</th> </tr> <tr> <td>Aldo</td> <td>Bianchi</td> </tr> </tbody> </table></div>PERSONA_2<br> <div class='table-responsive'><table class='table table-bordered'> <tbody> <tr> <th>Nome</th> <th>Cognome</th> </tr> <tr> <td>Aldo</td> <td>Bianchi</td> </tr> </tbody> </table></div> restituisce una tabella con:",
		"answers": {
			"a": "0 righe.",
			"b": "1 riga.",
			"c": "2 righe.",
			"d": "3 righe."
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Il modello di dati Entità-Associazione (Entity-Relationship):",
		"answers": {
			"a": "Non è né un modello fisico, né un modello logico, né un modello concettuale.",
			"b": "È un modello fisico.",
			"c": "È un modello logico.",
			"d": "È un modello concettuale."
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "L'indipendenza fisica dei dati:",
		"answers": {
			"a": "Consente di modificare lo schema fisico senza che ciò comporti necessariamente una modifica dello schema logico.",
			"b": "Consente di modificare lo schema logico senza che ciò comporti necessariamente una modifica degli schemi esterni",
			"c": "Consente di modificare i dati a livello fisico senza che ciò comporti necessariamente una modifica dei dati a livello logico.",
			"d": "Consente di modificare i dati a livello logico senza che ciò comporti necessariamente una modifica dei dati a livello esterno."
		},
		"correctAnswer": "a",
		"category": "Teoria"
	},
	{
		"question": "Sia $R(X)$ uno schema di relazione e r una sua generica istanza. È possibile che r presenti tuple duplicate?",
		"answers": {
			"a": "No",
			"b": "Sì",
			"c": "Solo se su R non è definita una chiave primaria.",
			"d": "Solo se l'insieme di attributi di R non costituisce superchiave di R."
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "La seguente relazione:<br><div class='table-responsive'><table class='table table-bordered'><tbody><tr><td colspan=\"4\" style=\"text-align:center\"><b>PARTITA<b/></td></tr><tr><th>SquadraCasa</th><th>SquadraOspite</th><th>Risultato</th></tr><tr><td>Juventus</td><td>Inter</td><td>1-1</td></tr><tr><td>Milan</td><td>Torino</td><td>0-0</td></tr></tbody></table></div>",
		"answers": {
			"a": "Ha cardinalità 2 e grado 3.",
			"b": "Ha cardinalità 3 e grado 2.",
			"c": "Ha cardinalità 2 e grado 2.",
			"d": "Ha cardinalità 3 e grado 3."
		},
		"correctAnswer": "a",
		"category": "SQL"
	},
	{
		"question": "I vincoli basati sullo schema sono di solito specificati:",
		"answers": {
			"a": "Tramite comandi di Data Definition Language (DDL).",
			"b": "Tramite comandi di Data Manipulation Language (DML).",
			"c": "Sia tramite comandi di DDL, che tramite comandi DML.",
			"d": "Né tramite comandi DDL, né tramite comandi DML"
		},
		"correctAnswer": "a",
		"category": "SQL"
	},
	{
		"question": "Sia R(A1, A2, A3, A4) uno schema di relazione. Se {A1, A2, A3} è una superchiave di R, allora {A1, A2}: ",
		"answers": {
			"a": "É certamente superchiave ma non chiave di R.",
			"b": "É certamente chiave di R.",
			"c": "Potrebbe essere o no superchiave di R.",
			"d": "Certamente non è superchiave di R."
		},
		"correctAnswer": "c",
		"category": "Schema Relazionale"
	},
	{
		"question": "Il vincolo di integrità dell'entità stabilisce che, in una relazione:",
		"answers": {
			"a": "Nessun attributo può assumere valore nullo.",
			"b": "Nessun attributo che faccia parte della chiave primaria può assumere valore nullo.",
			"c": "Nessun attributo che faccia parte della chiave candidata può assumere valore nullo.",
			"d": "Nessun attributo che faccia parte di una superchiave può assumere valore nullo."
		},
		"correctAnswer": "b",
		"category": "Schema Relazionale"
	},
	{
		"question": "Nella base di dati della figura seguente: <br><br> <img src='img/5.webp' class='responsive-img' alt='Immagine 5.webp'><br> <br>Il vincolo di integrità referenziale sia stato specificato con l'opzione <b>ON UPDATE CASCADE.</b> Con riferimento alla popolazione di figura, ciò implica che: ",
		"answers": {
			"a": "Se viene modificato il valore di E, il valore di A viene posto uguale a un valore di default.",
			"b": "Se viene modificato il valore di A, il valore di E viene posto uguale a un valore di default.",
			"c": "Se viene modificato il valore di E viene modificato di conseguenza il valore di A.",
			"d": "Se viene modificato il valore di A viene modificato di conseguenza il valore di E."
		},
		"correctAnswer": "d",
		"category": "SQL"
	},
	{
		"question": "Sia $R(X)$ uno schema di relazione, $r$ una sua generica istanza, $Y \\subseteq X$ un sottoinsieme non vuoto di $X$. Non siano consentiti valori nulli per gli attributi di Y. <br>L'uguaglianza $|\\pi_y(r)|=|r|$",
		"answers": {
			"a": "É sempre vera.",
			"b": "Non è mai vera.",
			"c": "É vera se $Y$ è superchiave di $R(X)$",
			"d": "É vera se $Y$ è chiave esterna di $R(X)$"
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano $R_1(X)$ e $R_2(X)$ due schemi di relazione, $r_1$ e $r_2$ generiche istanze di $R_1$ e $R_2$,rispettivamente, $c$ una condizione di join. É certamente <b>falso</b> che:",
		"answers": {
			"a": "$|r_1 \\bowtie_c r_2| \\not = |r_1|*|r_2|$",
			"b": "$|r_1 \\bowtie_c r_2| > |r_1|*|r_2|$",
			"c": "$|r_1 \\bowtie_c r_2| = |r_1|*|r_2|$",
			"d": "$|r_1 \\bowtie_c r_2| < |r_1|*|r_2|$"
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano date le due relazioni: <br> STUDENTE_1<br> <div class='table-responsive'><table class='table table-bordered'> <tbody> <tr> <th><u>Matricola</u></th> <th>Cognome</th> </tr> <tr> <td>1</td> <td>Verdi</td> </tr> </tbody> </table></div>  STUDENTE_2<br> <div class='table-responsive'><table class='table table-bordered'> <tbody> <tr> <th><u>Matricola</u></th> <th>Cognome</th> </tr> <tr> <td>2</td> <td>Rossi</td> </tr> </tbody> </table></div> L'operazione STUDENTE_1-STUDENTE_2 restituisce: </font>",
		"answers": {
			"a": "La relazione vuota.",
			"b": "La relazione <table class='table table-edit table-bordered'> <tbody> <tr> <td><u>Matricola</u></td> <td>Cognome</td> </tr> <tr> <td>1</td> <td>Verdi</td> </tr> </tbody> </table>",
			"c": "La relazione <table class='table table-edit table-bordered'> <tbody> <tr> <td><u>Matricola</u></td> <td>Cognome</td> </tr> <tr> <td>2</td> <td>Rossi</td> </tr> </tbody></table>",
			"d": "La relazione <table class='table table-edit table-bordered'> <tbody> <tr> <td><u>Matricola</u></td> <td>Cognome</td> </tr> <tr> <td>1</td> <td>Verdi</td> </tr> <tr> <td>2</td> <td>Rossi</td> </tr> </tbody> </table>"
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "La metodologia standard di progettazione di una base di dati prevede che siano eseguite, nell'ordine, le fasi di progettazione:",
		"answers": {
			"a": "Concettuale, fisica, logica.",
			"b": "Concettuale, logica, fisica.",
			"c": "Fisica, concettuale, logica.",
			"d": "Logica, fisica, concettuale."
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "Con riferimento allo schema ER della figura seguente<br> <img src='img/6.webp' style='max-width: 100%; height: auto;' alt='Immagine 10.webp'> <br> è possibile che vi sia più di un'occorrenza di R che associa la stessa coppia di occorrenze di E1 e E2?",
		"answers": {
			"a": "Sì, purchè i valori di AR siano diversi per ciascuna di queste occorrenze di R.",
			"b": "Sì, per un'opportuna semantica di R.",
			"c": "Sì, ma esse vanno documentate tramite opportune regole di derivazione.",
			"d": "No."
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "Con riferimento allo schema ER della figura seguente<br><br> <img src='img/7.webp' style='max-width: 100%; height: auto;' alt='Immagine 7.webp'><br>quale delle seguenti affermazioni è<i> certamente vera</i>?",
		"answers": {
			"a": "Ci possono essere occorrenze di R a cui non partecipa alcuna occorrenza di E1.",
			"b": "Ci possono essere occorrenze di E2 che partecipano a una sola occorrenza di R.",
			"c": "Ogni occorrenza di E2 deve partecipare a più occorrenze di R.",
			"d": "Ogni occorrenza di E1 deve partecipare ad almeno un'occorrenza di R."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "É possibile che uno schema ER ben progettato presenti ridondanze?",
		"answers": {
			"a": "No",
			"b": "Sì, ma esse vanno documentate tramite opportune regole di vincolo.",
			"c": "Sì, ma esse vanno documentate tramite opportune regole di derivazione.",
			"d": "Sì, e non è necessario documentarle in alcun modo."
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Perché sia traducibile in uno schema relazionale, uno schema ER ristrutturato non può presentare: ",
		"answers": {
			"a": "Cardinalità delle associazioni.",
			"b": "Identificatori.",
			"c": "Generalizzazioni.",
			"d": "Cardinalità degli attributi."
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Sia R(A, B, C) uno schema di relazione. Sapendo solo che $A \\to B$, si può sostenere che:",
		"answers": {
			"a": "A è certamente chiave esterna di R.",
			"b": "A potrebbe essere o no chiave di R.",
			"c": "A è certamente chiave di R.",
			"d": "A è certamente superchiave ma non chiave di R."
		},
		"correctAnswer": "b",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "Qual è la più restrittiva forma normale tra quelle sotto elencate?",
		"answers": {
			"a": "La prima.",
			"b": "La seconda.",
			"c": "La terza.",
			"d": "La forma normale di Boyce e Codd."
		},
		"correctAnswer": "d",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "Il comando INSERT di SQL standard:",
		"answers": {
			"a": "É un comando di Data Definition Language (DDL).",
			"b": "É un comando di Data Manipulation Language (DML).",
			"c": "É sia un comando di DDL, che un comando di DML.",
			"d": "Non è né un comando di DDL, né un comando di DML."
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "I dati gestiti tramite un DBMS:",
		"answers": {
			"a": "Una volta creati non possono più essere rimossi.",
			"b": "Continuano ad esistere finché non sono esplicitamente rimossi.",
			"c": "Hanno un tempo di vita che è limitato a quello delle singole esecuzioni dei programmi che li utilizzano",
			"d": "Hanno una vita che termina allo spegnimento dellelaboratore su cui è installato il DBMS"
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "C’è differenza tra <b>schema</b> e <b>istanza</b> di una base di dati?",
		"answers": {
			"a": "Sì, lo schema è costituito dai valori dei dati mentre l’istanza descrive le caratteristiche dei dati.",
			"b": "Sì, lo schema descrive le caratteristiche dei dati mentre l’istanza è costituita dai valori dei dati",
			"c": "No, entrambi descrivono le caratteristiche dei dati",
			"d": "No, entrambi sono costituiti dai valori dei dati"
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "L’ indipendenza logica dei dati:",
		"answers": {
			"a": "Consente di modificare lo schema fisico senza che ciò comporti necessariamente una modifica dello schema logico.",
			"b": "Consente di modificare lo schema logico senza che ciò comporti necessariamente una modifica degli schemi esterni.",
			"c": "Consente di modificare i dati a livello fisico senza che ciò comporti necessariamente una modifica dei dati a livello logico",
			"d": "Consente di modificare i dati a livello logico senza che ciò comporti necessariamente una modifica dei dati a livello esterno"
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "Sia R(X) uno schema di relazione. É possibile che due attributi distinti di R abbiano nome uguale?",
		"answers": {
			"a": "No.",
			"b": "Sì.",
			"c": "Sì ma solo se rappresentano concetti diversi.",
			"d": "Sì ma solo se rappresentano lo stesso concetto."
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia $R(X)$ uno schema di relazione. Un sottinsieme non vuoto $SK \\subset X$ si dice superchiave dello schema di relazione $R$ se, per ogni istanza $r(R)$ e per ogni coppia di tuple $t_1$, $t_2$ appartenenti $r(R)$:",
		"answers": {
			"a": "$t_1 = t_2 \\Rightarrow t_1{[SK]} =t_2[SK]$",
			"b": "$ t_1{[SK]} \\not =t_2[SK] \\Rightarrow t_1 \\not = t_2$",
			"c": "$ t_1{[SK]} =t_2[SK] \\Rightarrow t_1  = t_2$",
			"d": "$t_1 \\not = t_2 \\Rightarrow t_1{[SK]} \\not = t_2[SK]$"
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia $R(A, B, C)$ uno schema di relazione. Dall' esame della sua istanza seguente $R$<br>  <div class='table-responsive'><table class='table table-bordered'> <tbody> <tr> <th>A</th> <th>B</th> <th>C</th> </tr> <tr> <td>a1</td> <td>b1</td> <td>c1</td> </tr> <tr> <td>a1</td> <td>b2</td> <td>c1</td> </tr> </tbody> </table></div> dove b1 $\\neq$ b2:",
		"answers": {
			"a": "Si deduce che $A$ è certamente chiave di R.",
			"b": "Si deduce che $B$ è certamente chiave di R.",
			"c": "Si deduce che $C$ è certamente chiave di R.",
			"d": "Non si può dedurre né ($A$) né ($B$) né ($C$)."
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia <b> R(A1, A2, A3, A4)</b> uno schema di relazione. Se <b>{A1, A2, A3}</b> è una chiave di R allora <b>{A1, A2}</b>:",
		"answers": {
			"a": "Potrebbe essere o no chiave di R.",
			"b": "É certamente chiave di R.",
			"c": "É superchiave ma non chiave di R.",
			"d": "Non è né chiave né superchiave di R"
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano <i>R1(X1)</i> e <i>R2(X2)</i> due schemi di realzione e FK chiave esterna di <i>R1(X1)</i> che riferisce la chiave primaria PK di <i>R2(X2)</i>.<br>In assenza di ulteriori informazione possiamo sostenere che: ",
		"answers": {
			"a": "Almeno un attributo di FK potrebbe assumere valore nullo.",
			"b": "Un attributo di FK assume valore nullo solo se il corrispondente attributo di PK assume valore nullo.",
			"c": "Nessun attributo di FK può assumere valore nullo",
			"d": "Almeno un attributo di FK assume certamente valore nullo"
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Nella metodologia standard di progettazione di una base di dati, la fase di progettazione concettuale è stata introdotta per: ",
		"answers": {
			"a": "Affrontare da subito in dettaglio gli aspetti tecnologici della progettazione di una base di dati.",
			"b": "Progettare un sistema di gestione di basi di dati (DBMS) adeguato alla realtà di interesse.",
			"c": "Rappresentare formalmente le specifiche della realtà di interesse in maniera indipendente dai criteri di rappresentazione utilizzati nei DBMS.",
			"d": "Rappresentare formalmente le specifiche della realtà di interesse impiegando i criteri di rappresentazione utilizzati nel DBMS a disposizione."
		},
		"correctAnswer": "c",
		"category": "Teoria"
	},
	{
		"question": "<i>Dal solo punto di vista sintattico, </i>ossia del corretto uso formale dei costrutti del modello ER, lo schema ER della figura seguente: <br> <img src='img/7.webp' class='responsive-img' alt='Immagine 7.webp'>",
		"answers": {
			"a": "Può essere corretto o errato, a seconda della semantica di E1, E2 e R.",
			"b": "Può essere corretto o errato, a seconda della semantica di E1, E2, R e dei loro attributi.",
			"c": "É sicuramente corretto",
			"d": "É sicuramente errato"
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Nella figura seguente<br><img src='img/8.webp' class='responsive-img' alt='Immagine 8.webp'> <br> è rappresentato:",
		"answers": {
			"a": "Uno schema Entità-Associazione",
			"b": "Uno schema relazionale",
			"c": "Un modello relazionale",
			"d": "Un modello Entità-Associazione"
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "Sia R(X) uno schema di relazione. La dipendenza funzionale $Y \\to Z$ definita su R si dice banale se: ",
		"answers": {
			"a": "$Y \\supseteq Z$",
			"b": "$Z \\supset Y$",
			"c": "$Y \\cap Z=0$",
			"d": "$Y \\cup Z=X$"
		},
		"correctAnswer": "a",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "La migliore traduzione possibile dello schema ER ristrutturato della figura seguente<br><img src='img/10.webp' style='max-width: 100%; height: auto;' alt='Immagine 10.webp'><br> verso il modello logico relazionale porta agli schemi di relazione:",
		"answers": {
			"a": "E1(<u>A11</u>,A21,A12) e E2 (<u>A21</u>,A22)",
			"b": "E1(<u>A11</u>,<u>A21</u>,A12) e E2 (<u>A21</u>,A22)",
			"c": "E1(<u>A11</u>,A12) e E2 (<u>A21</u>,<u>A11</u>,A22)",
			"d": "E1(<u>A11</u>,A12) e E2 (<u>A21</u>,A22)"
		},
		"correctAnswer": "a",
		"category": "Schema Relazionale"
	},
	{
		"question": "Sia R(<u>A</u>,<u>B</u>,C,D) uno schema di relazione, con chiave primaria sottolineata. La dipendenza funzionale:<br>(A,B,C) $\\to$ D ",
		"answers": {
			"a": "È sicuramente completa.",
			"b": "È sicuramente parziale.",
			"c": "Potrebbe essere o no completa dipende dalla sematica degli attriburi.",
			"d": "Potrebbe essere o no completa: non abbiamo sufficienti elementi per rispondere."
		},
		"correctAnswer": "b",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "Sia R(A,B,C) uno schema relazionale con attributi tutti interi, implementato in SQL standard nella tabella R. L’espressione $\\Pi_A(\\sigma_{c=1}(R))$ corrisponde all'interrogazione SQL:",
		"answers": {
			"a": "SELECT * FROM R WHERE C=1;",
			"b": "SELECT A FROM R WHERE C=1;",
			"c": "SELECT A FROM R;",
			"d": "SELECT DISTINCT A FROM R WHERE C=1;"
		},
		"correctAnswer": "d",
		"category": "SQL"
	},
	{
		"question": "C'è differenza tra 'DBMS' e 'base di dati' ?",
		"answers": {
			"a": "No, sono entrambi sistemi software.",
			"b": "No, sono entrambi collezione di dati.",
			"c": "Si, un DBMS è un sistema software, mentre una base di dati è una collezione di dati.",
			"d": "Si, un DBMS è una collezione di dati,mentre una base di dati è un sistema software."
		},
		"correctAnswer": "c",
		"category": "Teoria"
	},
	{
		"question": "Sia $R(A_1 ,A_2, A_3, A_4)$ uno schema di relazione. Se $\\{A_1,A_2\\}$ è una chiave di R, allora $\\{A_1,A_2,A_3\\}$ è:",
		"answers": {
			"a": "Nè chiave nè superchiave di R",
			"b": "Sia superchiave che chiave di R",
			"c": "Chiave di R",
			"d": "Superchiave ma non chiave di R"
		},
		"correctAnswer": "d",
		"category": "Schema Relazionale"
	},
	{
		"question": "Quando possono presentarsi potenziali violazioni dei vincoli di integrità di una base dei dati?",
		"answers": {
			"a": "Mai",
			"b": "Solo in presenza di operazioni di interrogazione",
			"c": "Solo in presenza di operazioni di aggiornamento",
			"d": "Sia in presenza di operazioni di interrogazione che in presenza di operazioni di aggiornamento."
		},
		"correctAnswer": "c",
		"category": "Teoria"
	},
	{
		"question": "Sia R(A,B) uno schema di relazione e r una sua generica istanza $\\sigma_{A=1 \\;OR\\; B=O}(r)$ è equivalente a:",
		"answers": {
			"a": "$\\sigma_{A=1}(r)\\cap\\sigma_{B=0}(r)$",
			"b": "$\\sigma_{A=1}(r)\\cup\\sigma_{B=0}(r)$",
			"c": "$\\sigma_{A=1}(\\sigma_{B=0}(r))$",
			"d": "$\\sigma_{A=0}(\\sigma_{B=1}(r))$"
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Nell'ipotesi che (X,Y) indichi la cardinalità di partecipazione di un'entità a un'associazione, quale dei seguenti valori è <b>certamente errato</b>?",
		"answers": {
			"a": "X = 0.",
			"b": "Y = 0.",
			"c": "X = 1.",
			"d": "Y = 1."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "Siano R(X) uno schema di relazione, $Y \\subseteq X$, $Z \\subseteq X$, $Y$ e $Z$ non vuoti. Una dipendenza funzionale $Y \\to Z$ su R stabilisce che, qualsiasi sia l'istanza $r$ di $R$:",
		"answers": {
			"a": "Per ogni coppia di tuple $t_1,t_2$ di r se $t_1[Z]=t_2[Z]$ allora $t_1[Y]=t_2[Y]$.",
			"b": "Esiste almeno una ogni coppia di tuple $t_1,t_2$ di r se $t_1[Z]=t_2[Z]$ allora $t_1[Y]=t_2[Y]$.",
			"c": "Esiste almeno una coppia di tuple $t_1,t_2$ di r se $t_1[Y]=t_2[Y]$ allora $t_1[Z]=t_2[Z]$.",
			"d": "Per ogni coppia di tuple $t_1,t_2$ di r se $t_1[Y]=t_2[Y]$ allora $t_1[Z]=t_2[Z]$."
		},
		"correctAnswer": "d",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "L'istruzione SQL standard<br><br> <pre style='text-align:left'>SELECT Cognome<br>FROM STUDENTE;</pre>applicata alla tabella seguente,  restituisce:<br><div class='table-responsive'><table class=\"table table-bordered\"> <tbody><tr><td colspan=\"4\" style=\"text-align:center\"><b>STUDENTE<b/></td></tr> <tr><th><u>Matricola</u></th> <th>Cognome</th></tr> <tr> <td>1</td> <td>Rossi</td></tr><tr><td>2</td><td>Rossi</td></tr></tbody></table></div>",
		"answers": {
			"a": "0 righe.",
			"b": "1 riga.",
			"c": "2 righe.",
			"d": "3 righe."
		},
		"correctAnswer": "c",
		"category": "SQL"
	},
	{
		"question": "Sia R(A<sub>1</sub>,A<sub>2</sub>,A<sub>3</sub>,A<sub>4</sub>) uno schema di relazione e r una sua generica istanza. Se in R sussistono le dipendenze funzionali seguenti:<br> A<sub>1</sub> → A<sub>2</sub><br>A<sub>2</sub> →{A<sub>3</sub>,A<sub>4</sub>}<br> la decoposizione di R nei due schemi R<sub>1</sub>(A<sub>1</sub>,A<sub>2</sub>) e R<sub>2</sub>(A<sub>2</sub>,A<sub>3</sub>,A<sub>4</sub>):",
		"answers": {
			"a": "Certamente è senza perdita.",
			"b": "Certamente non è senza perdita.",
			"c": "Potrebbe essere o no senza perdita dipende dalla popolazione di r al momento della decoposizione.",
			"d": "Potrebbe essere o no senza perdita dipende dalla semantica di R e degli attributi A<sub>1</sub>,A<sub>2</sub>,A<sub>3</sub>,A<sub>4</sub>."
		},
		"correctAnswer": "a",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "Si supponga che l'istruzione SQL:</br><pre style='text-align:left'>CREATE TABLE RICAMBIO(<br>ID SMALLINT PRIMARY KEY,<br>Costruttore VARCHAR(30),<br>Codice VARCHAR(20)<br>UNIQUE(Costruttore,Codice));</pre>crei la tabella del solo schema di base di dati relazionale presente in un catalogo. Se la tabella è originariamente popolata come in figura<br><div class='table-responsive'><table class=\"table table-bordered\"><tbody><tr><td colspan=\"4\" style=\"text-align:center\"><b>RICAMBIO<b/></td></tr><tr><th><u>ID</u></th><th>Costruttore</th><th>Codice</th></tr><tr><td>1</td><td>Brembo</td><td>B62.15.170</td></tr></tbody></table></div>l'inserimento<br><pre>INSERT INTO RICAMBIO VALUES(2,'Brembo','B62.15.170');</pre>",
		"answers": {
			"a": "Verrà certamente accettato.",
			"b": "Verrà rifiutato,perchè viola il vincolo di chiave di primaria.",
			"c": "Verrà rifiutato,perchè viola un vincolo di chiave candidata.",
			"d": "Verrà rifiutato,perchè viola un vincolo di integrità referenziale."
		},
		"correctAnswer": "c",
		"category": "SQL"
	},
	{
		"question": "Il modello di dati relazionale:",
		"answers": {
			"a": "È un modello fisico.",
			"b": "È un modello logico.",
			"c": "È un modello concettuale.",
			"d": "Non è né fisico, né logico, né concettuale."
		},
		"correctAnswer": "b",
		"category": "Schema Relazionale"
	},
	{
		"question": "Il linguaggio SQL:",
		"answers": {
			"a": "È solo DDL.",
			"b": "È solo DML.",
			"c": "È sia DDL, sia DML.",
			"d": "Non è nè DML nè DDL."
		},
		"correctAnswer": "c",
		"category": "SQL"
	},
	{
		"question": "Sia R(A,B,C) uno schema relazionale per costruzione già in 1NF. Se in R sussistono solo le dipendenze funzionali A→B, A→C oltre a quelle eventualmente implicate da queste e a quelle banali allora la più forte forma normale soddisfacente la R è: ",
		"answers": {
			"a": "La prima.",
			"b": "La seconda.",
			"c": "La terza.",
			"d": "BCNF."
		},
		"correctAnswer": "d",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "Sia R(A,B,C) uno schema relazionale per costruzione .Se in R sussistono solo le dipendenze funzionali A→B,A→C oltre a quelle eventualmente implicate da queste e a quelle banali allora R si può decomporre nei seguenti schemi di relazione:",
		"answers": {
			"a": "R<sub>1</sub>(A,B),R<sub>2</sub>(B,C).",
			"b": "R<sub>1</sub>(A,C),R<sub>2</sub>(B,C).",
			"c": "R<sub>1</sub>(B,C),R<sub>2</sub>(A,C).",
			"d": "Nessuna delle precedenti."
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Nell’operazione $\\Pi_Y(R)$, y deve essere:",
		"answers": {
			"a": "Un booleano.",
			"b": "Una condizione di join.",
			"c": "Una lista di attributi.",
			"d": "Un reale."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia R(A1,A2,A3,A4) uno schema di relazione. Se {A4} è una superchiave di R allora:",
		"answers": {
			"a": "{A1,A4} non è superchiave di R.",
			"b": "{A4} non è chiave di R.",
			"c": "{A1,A4} è chiave di R.",
			"d": "{A4} è chiave di R."
		},
		"correctAnswer": "d",
		"category": "Schema Relazionale"
	},
	{
		"question": "Siano C1,C2,C3 3 clausole di selezione con logica a 3 valori,se C1=TRUE, C2=FALSE e C3=Unknown allora (C1 OR C2) OR C3:",
		"answers": {
			"a": "È TRUE.",
			"b": "È FALSE.",
			"c": "È Unknown.",
			"d": "Non assume valore definito."
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano C1,C2,C3 3 clausole di selezione con logica a 3 valori,se C1=Unknown,C2=Unknown e C3=FALSE allora NOT(C1 AND C2) OR C3:",
		"answers": {
			"a": "È TRUE.",
			"b": "È FALSE.",
			"c": "È Unknown.",
			"d": "Non assume valore definito."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia R(<u>A1</u>,A2,A3,A4) uno schema di relazione con A1 chiave primaria e {A3,A4} chiave candidata con attributi con dominio <i>integer</i>. Si vuole inserire una generica istanza di r una tupla (1,2,null,null), l'inserimento:",
		"answers": {
			"a": "Andrà a buon fine.",
			"b": "Sarà rifiutato perchè viola il primo vincolo.",
			"c": "Sarà rifiutato perchè viola il secondo vincolo.",
			"d": "Sarà rifiutato perchè viola il terzo vincolo."
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Con riferimento alla schema ER ristrutturato in figura:<br><br><img src=\"img/11.webp\" class=\"responsive-img\"><br><br>Qual'è la miglior traduzione nello schema logico:",
		"answers": {
			"a": "Uno schema di relazione.",
			"b": "Due schemi di relazione.",
			"c": "Tre schemi di relazione.",
			"d": "Quattro schemi di relazione."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "Con riferimento allo schema ristrutturato in figura<br><br><img src=\"img/12.webp\" class=\"responsive-img\"><br><br> sapendo che tutti gli attributi hanno dominio intero, l'implementazione proposta in SQL:<br><br> <pre style='text-align:left'>CREATE TABLE E2(<br>A21 int,<br>A22 int,<br>PRIMARY KEY(a21,A22));<br>CREATE TABLE E1(<br>A11 int PRIMARY KEY,<br>A12,<br>A21 int not null REFERENCES E2(A21) int<br>A22 int not null REFERENCES E2(A22));</pre>",
		"answers": {
			"a": "Corrisponde allo schema ER fornito.",
			"b": "Non corrisponde allo schema ER fornito.",
			"c": "Può corrispondere o meno a seconda della semantica di R.",
			"d": "Può corrispondere o meno e non abbiamo elementi sufficienti per farlo."
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Da un punto di vista generale il seguente schema ER:<br><br><img src=\"img/13.webp\" class=\"responsive-img\"></font>",
		"answers": {
			"a": "È sicuramente corretto.",
			"b": "È sicuramente errato.",
			"c": "Può essere corretto o errato a seconda della semantica di E1,E2,R.",
			"d": "Può essere corretto o errato a seconda della semantica di E1,E2,R e dei loro attributi."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "Dal punto di vista solamente sintattico il seguente schema ER:<br><br><img src=\"img/7.webp\" class=\"responsive-img\"></font>",
		"answers": {
			"a": "È sicuramente corretto.",
			"b": "È sicuramente errato.",
			"c": "Può essere corretto o errato a seconda della semantica di E1,E2,R.",
			"d": "Può essere corretto o errato a seconda della semantica di E1,E2,R e dei loro attributi."
		},
		"correctAnswer": "a",
		"category": "Entità-Relazione"
	},
	{
		"question": "L'architettura a tre livelli di un DBMS è stata proposta con l'obiettivo primario di:",
		"answers": {
			"a": "Garantire una più stretta dipendenza tra programmi e dati.",
			"b": "Favorire l'indipendenza tra programmi e dati.",
			"c": "Favorire l'indipendenza tra programma e operazioni.",
			"d": "Favorire l'indipendenza dei dati."
		},
		"correctAnswer": "d",
		"category": "Teoria"
	},
	{
		"question": "Il principale vantaggio di una gestione dati tramite DBMS rispetto ad una gestione tramite file è dato da:",
		"answers": {
			"a": "Maggiore velocità di risposta alle interrogazioni.",
			"b": "Minore costo complessivo del software.",
			"c": "Possibilità di usufruire di interfacce grafiche di utente.",
			"d": "Controllo centrallizato e indipendenza dei dati."
		},
		"correctAnswer": "d",
		"category": "Teoria"
	},
	{
		"question": "In una base di dati, a regime, i metadati sono di solito:",
		"answers": {
			"a": "Molto più numerosi dei dati.",
			"b": "Di numerosità paragonabile a quella dei dati.",
			"c": "Un po' meno numerosi dei dati.",
			"d": "Molto meno numerosi dei dati."
		},
		"correctAnswer": "d",
		"category": "Teoria"
	},
	{
		"question": "Sia R(X) uno schema di relazione. Allora:",
		"answers": {
			"a": "R può avere o no una superchiave.",
			"b": "R può avere o no una chiave.",
			"c": "R ha certamente almeno una chiave.",
			"d": "R ha certamente almeno due chiavi."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia R(A<sub>1</sub>,A<sub>2</sub>,A<sub>3</sub>,A<sub>4</sub>) uno schema di relazione. Se {A<sub>1</sub>,A<sub>2</sub>} è una superchiave di R allora:",
		"answers": {
			"a": "Sia {A<sub>1</sub>} che {A<sub>2</sub>} sono certamente chiavi di R.",
			"b": "{A<sub>1</sub>} è certamente chiave di R.",
			"c": "{A<sub>1</sub>,A<sub>2</sub>} è certamente chiave di R",
			"d": "{A<sub>2</sub>} potrebbe essere o no chiave di R."
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano R<sub>1</sub>(X<sub>1</sub>) e R<sub>2</sub>(X<sub>2</sub>) due schemi di relazione. Se FK è una esterna di R<sub>1</sub>(X<sub>1</sub>) che referisce la chiave primaria K di R<sub>2</sub> (X<sub>2</sub>) allora:",
		"answers": {
			"a": "$|FK| \\neq |K|$.",
			"b": "$|FK| = |K|$.",
			"c": "$|FK| \\geq |K|$.",
			"d": "$|FK| \\leq |K|$."
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano X e Y due insiemi ordinati di attributi, R(X) e S(Y) due schemi di relazione e r e s due generiche istanze di R(X) e S(Y),rispettivamente. La differenza r-s:",
		"answers": {
			"a": "È sempre definita.",
			"b": "È certamente definita, purchè sia |X|=|Y|.",
			"c": "È certamente definita,purchè sia |X|=|Y| e i domini degli attributi in posizione uguale in X e Y siano uguali.",
			"d": "Non è mai definita."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano r una relazione di grado 3 e s una relazione di grado 2.Il prodotto cartesiano r x s ha grado:",
		"answers": {
			"a": "$3$.",
			"b": "$2$.",
			"c": "$3 + 2 = 5$.",
			"d": "$3 \\cdot 2 = 6$."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Con riferimento allo schema ER della figura seguente:<br><img src=\"img/15.webp\" class=\"responsive-img\"><br>quale delle seguenti affermazioni è certamente falsa: ",
		"answers": {
			"a": "Ci possono essere occorrenze di R a cui non partecipa alcuna occorrenza di E2.",
			"b": "Ci possono essere occorrenze di E3 partecipano a più occorrenze di R.",
			"c": "Non ci possono essere occorrenze di E3 che non partecipano ad alcuna occorrenza di R.",
			"d": "Ci possono essere occorrenze di E2 che non partecipano ad alcuna occorrenza di R."
		},
		"correctAnswer": "a",
		"category": "Entità-Relazione"
	},
	{
		"question": "Dal punto di vista sintattico, ossia del corretto uso formale dei costruttidel modello ER, lo schema ER della figura seguente:<br><br><img src=\"img/16.webp\" class=\"responsive-img\">,",
		"answers": {
			"a": "È sicuramente corretto.",
			"b": "È sicuramente errato.",
			"c": "Può essere corretto o errato a seconda della semantica di E1,E2,R.",
			"d": "Può essere corretto o errato a seconda della semantica di E1,E2,R e dei loro attributi."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "Sia R(A,B,C) uno schema di relazione, per costruzione già in prima forma normale.Se in R sussistono solo le dipendenze funzionali:<br>A$\\to$B<br>B$\\to$C<br>oltre oltre a quelle eventualmente implicate da queste e quelle banali, allora la più forte forma normale soddisfatta di R è:",
		"answers": {
			"a": "La prima.",
			"b": "La seconda.",
			"c": "La terza.",
			"d": "La forma normale di Boyce e Codd."
		},
		"correctAnswer": "b",
		"category": "Normalizzazione"
	},
	{
		"question": "Se la generalizzazione della figura seguente:<br><br><img src=\"img/17.webp\" class=\"responsive-img\"><br><br>è totale esclusiva,allora:",
		"answers": {
			"a": "Ci sono occorrenze di E1 che sono occorrenze sia di E2 che di E3.",
			"b": "Ci sono occorrenze di E1 che non sono occorrenze nè di E2 nè di E3.",
			"c": "Ogni occorrenza di E1 è anche occorrenza di E2 che di E3.",
			"d": "Ogni occorrenza di E1 è anche occorrenza o di E2 o di E3, ma non di entrambe."
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "Una base di dati relazionale ben progettata:",
		"answers": {
			"a": "Presenta la minima ridondanza dei dati possibile.",
			"b": "Presenta la massima ridondanza dei dati possibile.",
			"c": "Non presenta mai ridondanze dei dati.",
			"d": "Presenta sempre almeno una ridondanza dei dati."
		},
		"correctAnswer": "a",
		"category": "Teoria"
	},
	{
		"question": "Un 'utente finale' per accedere alla base di dati usa tipicamente:",
		"answers": {
			"a": "Operazioni predefinite e di frequenza elevata.",
			"b": "Operazioni non predefinite e di tipo vario.",
			"c": "Sia operazioni predefinite che operazioni non predefinite.",
			"d": "Operazioni analoghe a quelle usate tipicamente dagli utenti 'utenti causali'."
		},
		"correctAnswer": "a",
		"category": "Teoria"
	},
	{
		"question": "Siano r una relazione di grado 3 e s una relazione di grado 2. Se r e s hanno almeno un attributo di ugual nome, allora, detto g il grado del join naturale r*s,",
		"answers": {
			"a": "$g < 5 $.",
			"b": "$g > 5 $.",
			"c": "$g = 6 $.",
			"d": "$g = 5 $."
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Lo schema ER della figura seguente:<br><br><img src=\"img/18.webp\" class=\"responsive-img\">",
		"answers": {
			"a": "È sicuramente corretto.",
			"b": "È sicuramente errato.",
			"c": "Può essere corretto o errato, a seconda della semantica di E1,E2 e R.",
			"d": "Può essere corretto o errato, a seconda della semantica di E1,E2 e R e dei loro attributi."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "Con riferimento allo schema ER della seguente figura:<br><br><img src=\"img/19.webp\" class=\"responsive-img\"><br><br>quale delle seguenti affermazioni è certamente vera?",
		"answers": {
			"a": "Ogni occorrenza di E2 deve partecipare a più occorrenze di R.",
			"b": "Ogni occorrenza di E1 deve partecipare ad almeno un'occorrenza di R.",
			"c": "Ci possono essere di R a cui non partecipa alcuna occorrenza di E1.",
			"d": "Ci possono essere occorrenze di E2 che partecipano a una sola occorrenza di R."
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "Il commando CREATE TABLE di SQL standard:",
		"answers": {
			"a": "È un commando di Data Definition Language (DDL).",
			"b": "È un commando di Data Manipulation Language (DML).",
			"c": "È sia un commando di DDL che un commando DML.",
			"d": "Non è né un commando di DDL né un commando DML."
		},
		"correctAnswer": "a",
		"category": "SQL"
	},
	{
		"question": "Con riferimento alla generalizzazione non totale della figura seguente<br><br><img src=\"img/20.webp\" class=\"responsive-img\"><br><br> quale delle seguenti affermazioni è certamente vera?",
		"answers": {
			"a": "Ogni occorrenza di E1 è anche occorrenza di E2.",
			"b": "Ogni occorrenza di E1 è anche occorrenza di E3.",
			"c": "Ogni occorrenza di E1 è anche occorrenza di almeno una tra E2 e E3.",
			"d": "Ogni occorrenza di E2 è anche occorrenza di E1."
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "Perchè lo schema ER della figura seguente<br><br><img src=\"img/21.webp\" class=\"responsive-img\"><br>sia sintatticamente corretto deve essere: ",
		"answers": {
			"a": "(X,Y)=(1,N).",
			"b": "(X,Y)=(0,1).",
			"c": "(X,Y)=(0,N).",
			"d": "(X,Y)=(1,1)."
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "Per lo schema ER della figura seguente<br><br><img src=\"img/22.webp\" class=\"responsive-img\"><br>è stata preparata la tavola dei volumi<br><div class='table-responsive'><div class='table-responsive'><table class=\"table table-bordered\"><tbody><tr><th>Concetto</th><th>Tipo</th><th>Volume</th></tr><tr><td>E1</td><td>E</td><td>10</td></tr><tr><td>E2</td><td>E</td><td>20</td></tr><tr><td>E3</td><td>E</td><td>5</td></tr><tr><td>R</td><td>R</td><td>X</td></tr></tbody></table></div></div>Quale valore deve avere X perchè la tavola dei volumi sia corretta?",
		"answers": {
			"a": "10.",
			"b": "20.",
			"c": "5.",
			"d": "Non abbiamo sufficienti elementi per rispondere."
		},
		"correctAnswer": "a",
		"category": "Tabelle Volumi"
	},
	{
		"question": "Se l'attributo A2 è opzionale multivalore, allora:",
		"answers": {
			"a": "XY = (0,1).",
			"b": "XY = (0,n).",
			"c": "XY = (1,1).",
			"d": "XY = (1,n)."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "Quale operazione insiemistica NON richiede che i suoi operandi siano compatibili all'unione?",
		"answers": {
			"a": "Unione.",
			"b": "Intersezione.",
			"c": "Differenza.",
			"d": "Prodotto cartesiano."
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Quale dei seguenti modelli di dati <u>non</u> è un modello logico?",
		"answers": {
			"a": "Il modello Entità-Associazione.",
			"b": "Il modello relazionale.",
			"c": "Il modello gerarchico.",
			"d": "Il modello reticolare."
		},
		"correctAnswer": "a",
		"category": "Teoria"
	},
	{
		"question": "Lo schema di relazione R(<u>A1</u>, A2, <u>A3</u>):",
		"answers": {
			"a": "Può avere come chiave primaria indifferentemente {A<sub>1</sub>} o {A<sub>3</sub>}, ma non entrambe.",
			"b": "Deve avere o {A<sub>1</sub>} come chiave primaria e {A<sub>3</sub>} come chiave secondaria, o {A<sub>3</sub>} come chiave primaria e {A<sub>1</sub>} come chiave secondaria.",
			"c": "Ha due chiavi primarie: {A<sub>1</sub>} e {A<sub>3</sub>}.",
			"d": "Ha una sola chiave primaria: {A<sub>1</sub>, A<sub>3</sub>}."
		},
		"correctAnswer": "d",
		"category": "Schema Relazionale"
	},
	{
		"question": "Siano R<sub>1</sub>(X)e R<sub>2</sub>(X) due schemi di relazione, r<sub>1</sub>e r<sub>2</sub> generiche istanze di R<sub>1</sub> e R<sub>2</sub>, rispettivamente, C una condizione di join. È<i>certamente vero</i> che:",
		"answers": {
			"a": "$max\\{|r_1|, |r_2|\\}$ $\\leq |r_1 \\bowtie_c r_2|$ $\\leq |r_1| * |r_2|$.",
			"b": "$0 \\leq |r_1 \\bowtie_c r_2| \\leq |r_1| + |r_2|$.",
			"c": "$min\\{|r_1|, |r_2|\\}$ $\\leq |r_1 \\bowtie_c r_2|$ $\\leq |r_1| * |r_2|$.",
			"d": "$ 0 \\leq |r_1 \\bowtie_c r_2| \\leq |r_1| * |r_2|$."
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Utilizzando la logica a 3 valori, la condizione di selezione<br>Età $\\neq$ 20<br>applicata all‘unica tupla della relazione seguente<br>PERSONE<br><div class='table-responsive'><table class=\"table table-bordered\"> <tbody><tr><th>Nome</th><th>Età</th><th>Reddito</th></tr><tr><td>Marco</td><td>NULL</td><td>45000</td></tr></tbody></table></div>",
		"answers": {
			"a": "Assume valore True.",
			"b": "Assume valore False.",
			"c": "Assume valore Unknown.",
			"d": "Non assume un valore definito."
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "L'operazione di algebra relazionale estesa<br>${}_{Nome, Cognome} {F}_{MAX(Saldo)}\\;$$(CONTO\\_CORRENTE)$ </br></br>applicata alla relazione seguente:<br> <div class='table-responsive'><table class=\"table table-bordered\"> <tbody><tr><td colspan=\"4\" style='text-align:center'><b>CONTO_CORRENTE</b></td></tr> <tr> <th><u>Numero</u></th> <th>Nome</th> <th>Cognome</th> <th>Saldo</th> </tr> <tr> <td>1</td> <td>Luca</td> <td>Rossi</td> <td>200</td> </tr> <tr><td>2</td><td>Luca</td><td>Verdi</td><td>200</td></tr><tr><td>3</td><td>Luca</td><td>Rossi</td><td>200</td></tr></tbody></table></div>",
		"answers": {
			"a": "0 tuple.",
			"b": "1 tupla.",
			"c": "2 tuple.",
			"d": "3 tuple."
		},
		"correctAnswer": "c",
		"category": "SQL"
	},
	{
		"question": "Sia (X,Y) la cardinalità di partecipazione di un’entità E ad un’associazione R. Quale delle seguenti affermazioni è certamente <u>errata</u>?",
		"answers": {
			"a": "Se Y = N allora ogni occorrenza di E deve partecipare a più di una occorrenza di R.",
			"b": "Se Y = 1 allora ogni occorrenza di E può partecipare ad al più una occorrenza di R.",
			"c": "Se X = 0 allora ci possono essere occorrenze di E che non partecipano ad alcuna occorrenza di R.",
			"d": "Se X = 1 allora ogni occorrenza di E deve partecipare ad almeno una occorrenza di R."
		},
		"correctAnswer": "a",
		"category": "Entità-Relazione"
	},
	{
		"question": "Si supponga di disporre di uno schema ER, prodotto nella fase di progettazione concettuale. Un esame di questo schema evidenzi che non occorre effettuare alcuna scelta di ristrutturazione. Bisogna comunque calcolare la tavola degli accessi?",
		"answers": {
			"a": "Si, per tutte le operazioni previste sulla base di dati.",
			"b": "No.",
			"c": "Si, ma solo per il 20% delle operazioni previste, in base alla regola \"ottanta-venti\".",
			"d": "Si, ma solo per l’80% delle operazioni previste, in base alla regola \"ottanta-venti\"."
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "La fase di ristrutturazione di uno schema ER è stata introdotta per:",
		"answers": {
			"a": "Arricchire e completare lo schema ER in base ai nuovi requisiti via via raccolti.",
			"b": "Rendere più leggibile e ordinato lo schema ER.",
			"c": "Ottenere una versione migliorata dello schema ER, dopo averlo discusso con gli utenti.",
			"d": "Rendere possibile la traduzione dello schema ER e ottimizzare il progetto."
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "Siano R(X) uno schema di relazione. F l’insieme delle dipendenze funzionali sussistenti in R e r un‘istanza di R che soddisfa le dipendenze in F. Quale delle seguenti operazioni <u>non</u> ha le potenzialità di violare le dipendenze in F?",
		"answers": {
			"a": "Inserimento di una nuova tupla in r.",
			"b": "Modifica di una tupla di r.",
			"c": "Cancellazione di una tupla di R.",
			"d": "Qualsiasi operazione di aggiornamento di r."
		},
		"correctAnswer": "c",
		"category": "Teoria"
	},
	{
		"question": "Siano R(X) uno schema di relazione, e W, Y, Z sottoinsiemi non vuoti di X. Quale delle seguenti asserzioni di X è falsa?",
		"answers": {
			"a": "$ W \\to Y \\Rightarrow Y \\to W $.",
			"b": "$W \\to Y$.",
			"c": "$ \\{W \\to Y, Y \\to Z\\} \\Rightarrow W \\to Z$.",
			"d": "$W \\supseteq Y \\Rightarrow W \\to Y$."
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Se in R(A, B, C) sussistono solo le dipendenze funzionali:<br>A $\\to$ B<br>B $\\to$ C<br>oltre a quelle implicate da queste e a quelle banali, allora R ha come chiavi candidate:",
		"answers": {
			"a": "{A} e {B}.",
			"b": "Solo {A}.",
			"c": "Solo {B}.",
			"d": "{A}, {B} e {C}."
		},
		"correctAnswer": "b",
		"category": "Dipendenze Funzionali"
	},
	{
		"question": "Sia <i>STUDENTE</i> l’unica tabella di <i>LICEO</i>, unico schema di un catalogo di base di dati relazionale. Si confrontino i 2 comandi:<br><br> <ol type=\"a\" style=\"text-align:left!important\"> <li> <pre>DELETE FROM STUDENTE;</pre> </li> <li> <pre>DROP TABLE STUDENTE;</pre> </li> </ol>",
		"answers": {
			"a": "Sia <font color=\"blue\"><b>a.</b></font> che <font color=\"blue\"><b>b.</b></font> eliminano la tabella con i metadati che la descrivono.",
			"b": "Sia <font color=\"blue\"><b>a.</b></font> che <font color=\"blue\"><b>b.</b></font> cancellano il contenuto della tabella, lasciando inalterati i metadati che la descrivono.",
			"c": "<font color=\"blue\"><b>a.</b></font> elimina la tabella con i suoi metadati, <font color=\"blue\"><b>b.</b></font> cancella il contenuto della tabella ma non ne elimina i metadati.",
			"d": "<font color=\"blue\"><b>b.</b></font> elimina la tabella con i suoi metadati, <font color=\"blue\"><b>a.</b></font> cancella il contenuto della tabella ma non ne elimina i metadati."
		},
		"correctAnswer": "d",
		"category": "SQL"
	},
	{
		"question": "Sia R(A1, A2, A3) uno schema di relazione. Allora:",
		"answers": {
			"a": "{A1, A2, A3} è certamente chiave di R.",
			"b": "{A1, A2, A3} è certamente superchiave di R.",
			"c": "{A1, A2, A3} potrebbe essere o no superchiave.",
			"d": "Nessuna delle altre risposte è corretta."
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Sia R(<u>A</u>, B, C), a quale formula di algebra relazionale corrisponde il comando SQL <br/> <pre style='text-align:left'>SELECT B,C<br/>FROM R<br/>WHERE A = 1</pre> ",
		"answers": {
			"a": "$\\sigma_{A = 1}(\\Pi_{B,C}(R))$.",
			"b": "$\\Pi_{B,C}(\\sigma_{A = 1}(R))$.",
			"c": "$\\rho_{B,C}(\\sigma_{A = 1}(R))$.",
			"d": "Nessuna delle precedenti."
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Quanto spesso cambia uno schema in una base di dati?",
		"answers": {
			"a": "Molto più frequentemente delle sue istanze.",
			"b": "Di frequenza pari alle sue istanze.",
			"c": "Molto meno frequentemente delle sue istanze.",
			"d": "Non può cambiare mai."
		},
		"correctAnswer": "c",
		"category": "Teoria"
	},
	{
		"question": "Dato lo schema ER in figura <br><img class='responsive-img' src='img/23.webp'><br> viene creata la seguente tabella dei volumi <br><div class='table-responsive'><table class=\"table table-bordered\"> <tbody><tr><th>Nome</th><th>Tipo</th><th>Volume</th></tr><tr><td>DIPENDENTE</td><td>E</td><td>100</td></tr><tr><td>PROGETTO</td><td>E</td><td>10</td></tr><tr><td>R1</td><td>R</td><td>X</td></tr></tbody></table></div> Se sappiamo che in media ogni dipendente partecipa a 5 progetti, che valore assume X affinché la tabella dei volumi risulti corretta?",
		"answers": {
			"a": "$5 * 100 = 500$.",
			"b": "$5 * 10 = 50$.",
			"c": "$5$.",
			"d": "Non è possibile determinare un valore corretto."
		},
		"correctAnswer": "a",
		"category": "Tabelle Volumi"
	},
	{
		"question": "Sia $R(X)$ uno schema di relazione. Quale delle seguenti affermazioni è certamente vera?",
		"answers": {
			"a": "Una superchiave di $R$ e` sempre chiave di $R$",
			"b": "$R$ può avere superchiavi senza avere una chiave",
			"c": "Ci possono essere chiavi di $R$ che non sono superchiavi di $R$",
			"d": "Chiavi e superchiavi di $R$ coincidono se $X$ è composto da un solo attributo"
		},
		"correctAnswer": "d",
		"category": "Schema Relazionale"
	},
	{
		"question": " Siano $r$ una relazione sullo schema $R(X)$, $Y ⊆ X$. E`sempre vero che:",
		"answers": {
			"a": "$|\\pi_Y (r)| < |r|$",
			"b": "$|\\pi_Y (r)| \\leq |r|$",
			"c": "$|\\pi_Y (r)| = |r|$",
			"d": "$|\\pi_Y (r)| \\geq |r|$"
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": " Quali delle seguenti attività fanno parte della (anche se non esauriscono) la ristrutturazione di uno schema ER:",
		"answers": {
			"a": "Analisi delle rindondanze, partizionamento o accorpamento di entità e relazioni,",
			"b": "eliminazione delle dipendenze funzionali, eliminazione delle generalizzazioni",
			"c": "Scelta degli identificatori primati (primary key), eliminazione delle “relationships” (i box romboidali)",
			"d": "Eliminazione delle tuple spurie, eliminazione dei NULL"
		},
		"correctAnswer": "a",
		"category": "Entità-Relazione"
	},
	{
		"question": "Una buona base di dati relazionale deve essere progettata seguendo il seguente criterio:",
		"answers": {
			"a": "Deve esistere sempre almeno una ridondanza dei dati",
			"b": "Deve essere minimizzata la ridondanza dei dati",
			"c": "Deve essere massimizzata la ridondanza dei dati",
			"d": "Non deve ammettere rindondanze dei dati"
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "La relazione $r$ sullo schema $R(A, B, C)$ contiene una tupla $t = < a, b, NULL >$. Quale delle seguenti affermazioni possiamo fare con certezza?",
		"answers": {
			"a": "Non esiste un valore per l’attributo C nella tupla t",
			"b": "Il valore dell’attributo C per la tupla t è fuori da dominio(C)",
			"c": "Il valore dell’attributo C per la tupla t non è noto oppure è fuori da dominio(C)",
			"d": "Il valore dell’attributo C per la tupla t non esiste oppure non è noto"
		},
		"correctAnswer": "d",
		"category": "Schema Relazionale"
	},
	{
		"question": "Sia R(X) uno schema di relazione e r una sua generica istanza. È possibile che r presenti tuple duplicate?",
		"answers": {
			"a": "Sì",
			"b": "No",
			"c": "Sì, se X non costituisce superchiave di R.",
			"d": "Sì, se la chiave di X contiene valori nulli"
		},
		"correctAnswer": "b",
		"category": "Schema Relazionale"
	},
	{
		"question": "Siano r e s due relazioni sullo schema R(X). Quale di queste affermazioni NON è corretta:",
		"answers": {
			"a": "r e s hanno necessariamente lo stesso numero di attributi",
			"b": "r e s hanno necessariamente la stessa chiave primaria",
			"c": "r e s hanno necessariamente lo stesso numero di righe",
			"d": "r e s possono contenere zero tuple"
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Quale di questi vincoli NON è rappresentabile direttamente in un modello ER (o EER) con cardinalità (min, max), e va rappresentato a parte con regole aziendali (business rules)?",
		"answers": {
			"a": "Un direttore è anche un impiegato",
			"b": "Ogni dipartimento ha necessariamente un direttore",
			"c": "Ogni impiegato deve avere uno stipendio minore del direttore",
			"d": "Una PMI (piccola media impresa) deve avere non più di 10 dipendenti"
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Sia R(A1, A2) uno schema di relazione, sia A1 chiave primaria di R e sia dominio(A1) = {a,b,c}, dominio(A2) = {1,2}. Sia r una relazione sullo schema R. Quante delle seguenti affermazioni è vera?",
		"answers": {
			"a": "r ha al massimo 3 tuple",
			"b": "r ha esattamente 3 tuple",
			"c": "r ha al massimo 6 tuple",
			"d": "r ha al minimo 3 tuple"
		},
		"correctAnswer": "a",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Nel seguente esempio si rappresenta la relazione tra Dipendente e PostoAuto. Dalle sole informazioni contenute nello schema siamo in grado di dire: <br/> <img src=\"img/24.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img>",
		"answers": {
			"a": "Tutti i dipendenti hanno un posto auto",
			"b": "La chiave di Dipendente è composta dalla coppia IdDip e NumPosto",
			"c": "La chiave di PostoAuto è composta da IdDip e NumPosto",
			"d": "Un dipendente può avere al più un posto auto"
		},
		"correctAnswer": "c",
		"category": "Entità-Relazione"
	},
	{
		"question": "Siano r una relazione sullo schema R(X). Il grado di r rappresenta:",
		"answers": {
			"a": "Il numero delle tuple in r",
			"b": "Il numero degli attributi in X",
			"c": "Il numero delle chiavi candidate dello schema R",
			"d": "Il numero di vincoli di integrità referenziale (foreign key) dello schema R"
		},
		"correctAnswer": "b",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Nello schema seguente la freccia rappresenta <br/> <img src=\"img/25.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img>",
		"answers": {
			"a": "Una dipendenza funzionale",
			"b": "Un vincolo di chiave primaria",
			"c": "Un vincolo sui campi che possono essere usati per operazioni di join",
			"d": "Un vincolo di integrità referenziale"
		},
		"correctAnswer": "d",
		"category": "Schema Relazionale"
	},
	{
		"question": "Date le relazioni r sullo schema R(X) e s sullo schema S(Y), data cond una qualsiasi condizione, quale di queste affermazioni è sempre corretta:",
		"answers": {
			"a": "$| r ⋈ s | < | r \\times s |$ (r x s è il prodotto cartesiano)",
			"b": "$| r ⋈ s | < | r ⋈_{cond} s |$",
			"c": "$|r ⋈_{cond} s | = | r |* | s |$",
			"d": "$|r ⋈_{cond} s | ≤ | r |* | s |$"
		},
		"correctAnswer": "d",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Data la relazione r sullo schema R(A, B, C) e la relazione s sullo schema S(C, D), dove A, B, C, D sono tutti diversi, data cond una qualsiasi condizione, quale di queste affermazioni è sempre corretta:",
		"answers": {
			"a": "$r ⋈_{cond} s$ è una relazione sullo schema R(A, B, C)",
			"b": "$r ⋈_{cond} s$ è una relazione sullo schema T(A, B, C, D)",
			"c": "$r ⋈_{cond} s$ è una relazione sullo schema T(A, B, C, C, D)",
			"d": "$r ⋈_{cond} s$ è una relazione sullo schema T(A, B, D)"
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Dato lo schema di Database seguente, <br> $Impiegati(Matricola,Nome, Età, Stipendio)$ <br> $Supervisione(Impiegato, Capo)$ <br> vogliamo rappresentare in tuple relational calculus con dichiarazione di range la query “Trovare le matricole dei capi che hanno almeno un impiegato di più di 50 anni”. Una possibile formulazione è:",
		"answers": {
			"a": "{ s.Impiegato | i(Impiegati) , s(Supervisione) | i.Matricola=s.Impiegato ∧ i.Eta > 50 }",
			"b": "{ s.Capo | i(Impiegati) , s(Supervisione) | i.Matricola=s.Impiegato ∧ i.Eta > 50 }",
			"c": "{ s.Impiegato | i(Impiegati) , s(Supervisione) | i.Matricola=s.Capo ∧ i.Eta > 50 }",
			"d": "{ s.Capo | i(Impiegati) , s(Supervisione) | i.Matricola=s.Capo ∧ i.Eta > 50 }"
		},
		"correctAnswer": "b",
		"category": "Calcolo Relazionale"
	},
	{
		"question": "Lo schema seguente rappresenta: <br/> <img src=\"img/26.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img>",
		"answers": {
			"a": "Una specializzazione disjoint total",
			"b": "Una specializzazione disjoint partial",
			"c": "Una specializzazione overlapping total",
			"d": "Una specializzazione overlapping partial"
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "In quale di questi casi è sempre obbligatorio ridenominare una tabella che compare in un FROM.",
		"answers": {
			"a": "Quando il FROM gestisce un join interno",
			"b": "Quando il FROM gestisce un join esterno",
			"c": "Quando il FROM gestisce un select interno indipendente",
			"d": "Quando il FROM gestisce un self join"
		},
		"correctAnswer": "d",
		"category": "SQL"
	},
	{
		"question": "È data la relazione R sullo schema S(K, A), la cui chiave primaria è composta dall’attributo K. R è composta da $n_R$ tuple. Quante righe saranno visualizzate dall’istruzione seguente? <br/> <pre style='text-align:left'>SELECT R.K<br/>FROM R<br/>GROUP BY K;</pre>",
		"answers": {
			"a": "Sempre 1",
			"b": "Sempre $n_R$",
			"c": "Un numero compreso tra 1 e $n_R$, a seconda dei valori di K",
			"d": "Un numero compreso tra 1 e $n_R$, a seconda dei valori diA"
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Sia data l’istruzione: <br/> <pre style='text-align:left'>SELECT R.A<br/>FROM R<br/>WHERE R.B IN ( <br/>   SELECT S.B <br/>   FROM S <br/>);</pre> Siano: $n_R$, il numero di tuple di R; $n_S$, il numero di tuple di S. Quante righe saranno visualizzate dall’istruzione?",
		"answers": {
			"a": "Sempre 0 oppure 1",
			"b": "Un numero compreso tra 0 e $n_R$, a seconda dei dati",
			"c": "Sempre $n_R$",
			"d": "Sempre $n_S$"
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Quale di questi NON è un operatore insiemistico posseduto da SQL?",
		"answers": {
			"a": "Difference",
			"b": "Except",
			"c": "Intersect",
			"d": "Union"
		},
		"correctAnswer": "a",
		"category": "SQL"
	},
	{
		"question": "Quando possono presentarsi violazioni dei vincoli di integrita` di una base di dati? ",
		"answers": {
			"a": "Solo in conseguenza di di operazioni di insert",
			"b": "Solo in conseguenza di operazioni di query o insert",
			"c": "Solo in conseguenza di operazioni di insert o update",
			"d": "Solo in conseguenza di operazioni di query o update"
		},
		"correctAnswer": "c",
		"category": "Teoria"
	},
	{
		"question": "Sia R(X) uno schema di relazione. E` possibile che due attributi distinti di R abbiano lo stesso dominio?",
		"answers": {
			"a": "No",
			"b": "Sì",
			"c": "Sì, se entrambi appartengono alla chiave primaria",
			"d": "Sì, se uno solo dei due appartiene alla chiave primaria"
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "Sia r una relazione sullo schema $R(\\underline{A}, B, C)$, e siano dominio(A) ={1, 2}, dominio(B)={x, y}, dominio(C)={i, j, k}. Quale di queste tuple può appartenere a r? ",
		"answers": {
			"a": "(2, i, j)",
			"b": "(y, 2, k)",
			"c": "(NULL, y, k)",
			"d": "(1, NULL, j)"
		},
		"correctAnswer": "d",
		"category": "Schema Relazionale"
	},
	{
		"question": "Siano r una relazione di grado 4 su R(X) e s una relazione di grado 8 su S(Y). X e Y possono avere intersezione non nulla. Detto g il grado di r ⋈ s, quale affermazione è corretta? ",
		"answers": {
			"a": "g = 12",
			"b": "g può essere un qualsiasi valore minore uguale ad 8 ",
			"c": "g può essere un qualsiasi valore tra 8 e 12.",
			"d": "g = 8"
		},
		"correctAnswer": "c",
		"category": "Schema Relazionale"
	},
	{
		"question": "Lo schema di una base di dati:",
		"answers": {
			"a": "Di solito varia molto piu` frequentemente di una sua istanza",
			"b": "Di solito varia molto meno frequentemente di una sua istanza",
			"c": "Varia soltanto in assenza di chiavi",
			"d": "Non puo` mai variare"
		},
		"correctAnswer": "b",
		"category": "Teoria"
	},
	{
		"question": "Per lo schema ER della figura seguente <img src=\"img/27.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img> e` stata preparata la tavola dei volumi: <br><div class='table-responsive'><table class=\"table table-bordered\"> <tbody><tr><th>Concetto</th><th>Tipo</th><th>Volume</th></tr><tr><td>Carrello</td><td>E</td><td>50</td></tr><tr><td>Prodotto</td><td>E</td><td>10000</td></tr><tr><td>Composizione</td><td>R</td><td></td></tr></tbody></table></div> Sapendo che ogni carrello mediamente include 10 prodotti, quale una stima corretta del volume di “Composizione”? ",
		"answers": {
			"a": "10",
			"b": "50",
			"c": "200",
			"d": "500"
		},
		"correctAnswer": "d",
		"category": "Tabelle Volumi"
	},
	{
		"question": "Per lo schema ER della figura seguente, quale delle affermazioni è sempre vera? <img src=\"img/28.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img>",
		"answers": {
			"a": "Un impiegato ha almeno un impiego in un’azienda",
			"b": "Un’azienda ha almeno N impiegati",
			"c": "Un impiegato può avere impieghi in N aziende ",
			"d": "Un’azienda ha almeno un impiegato "
		},
		"correctAnswer": "d",
		"category": "Entità-Relazione"
	},
	{
		"question": "Si considerino i due schemi ER riportati sotto. Quale affermazione è corretta? <img src=\"img/29.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img>",
		"answers": {
			"a": "I due schemi sono equivalenti ",
			"b": "I due schemi non sono confrontabili perché esprimono informazioni diverse",
			"c": "Lo schema i. può esprimere più informazioni dello schema ii",
			"d": "Lo schema ii. può esprimere più informazioni dello schema i"
		},
		"correctAnswer": "b",
		"category": "Entità-Relazione"
	},
	{
		"question": "Sia data la relazione IMMOBILI <br><div class='table-responsive'><table class=\"table table-bordered\"> <tbody><tr><th>Id</th><th>Nome</th><th>Regione</th><th>Prov</th><th>N_immobili</th></tr><tr><td>12</td><td>Mario Rossi</td><td>Umbria</td><td>PG</td><td>2</td></tr><tr><td>18</td><td>Luigi Verdi</td><td>Campania</td><td>SA</td><td>3</td></tr><tr><td>10</td><td>Mario Rossi</td><td>Campania</td><td>SA</td><td>1</td></tr><tr><td>9</td><td>Mario Rossi</td><td>Campania</td><td>NA</td><td>2</td></tr></tbody></table></div> L’operazione di algebra relazionale estesa $_{Regione,Nome} F_{MAX (N_{immobili})} (IMMOBILI)$ ha come risultato una relazione con: ",
		"answers": {
			"a": "1 tupla",
			"b": "2 tuple",
			"c": "3 tuple",
			"d": "4 tuple"
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Siano X e Y due insiemi ordinati di attributi, R(X) e S (Y) due schemi di relazione e r e s due generiche istanze di R(X) e S (Y), rispettivamente. L’intersezione $r \\cap s$:",
		"answers": {
			"a": "è definita solo se |X| = |Y| e i domini degli attributi in posizione uguale in X e Y sono uguali",
			"b": "è definita solo se i domini degli attributi con lo stesso nome in X e Y sono uguali",
			"c": "è sempre definita",
			"d": "è definita solo se |X|=|Y|"
		},
		"correctAnswer": "a",
		"category": "Schema Relazionale"
	},
	{
		"question": "I vincoli su un DB sono tipicamente specificati tramite:",
		"answers": {
			"a": "comandi di Data Definition Language (DDL)",
			"b": "comandi di Data Manipulation Language (DML)",
			"c": "comandi di DDL o DML",
			"d": "dipende dallo specifico DBMS"
		},
		"correctAnswer": "a",
		"category": "Teoria"
	},
	{
		"question": " La superchiave di uno schema di relazione R(X) è definita come un insieme di attributi K ⊆ X tale che:",
		"answers": {
			"a": "Esiste un’istanza r sullo schema R(X) tale che per ogni coppia di tuple distinte T1 e T2 in r, si ha T1[K] ≠ T2[K]",
			"b": "Per ogni istanza r sullo schema R(X), per ogni coppia di tuple distinte T1 e T2 in r, si ha T1[K] ≠ T2[K]",
			"c": "Esiste un’istanza r sullo schema R(X) tale che per ogni coppia di tuple distinte T1 e T2 in r, si ha T1[K] = T2[K]",
			"d": "Per ogni istanza r sullo schema R(X), per ogni coppia di tuple distinte T1 e T2 in r, si ha T1[K] = T2[K]"
		},
		"correctAnswer": "b",
		"category": "Schema Relazionale"
	},
	{
		"question": " Come si traduce in SQL un vincolo di integrità referenziale?",
		"answers": {
			"a": "Con un vincolo UNIQUE",
			"b": "Con un vincolo FOREIGN KEY ",
			"c": "Con un vincolo NOT NULL",
			"d": "Con un vincolo PRIMARY KEY "
		},
		"correctAnswer": "b",
		"category": "SQL"
	},
	{
		"question": "Dato lo schema di Database seguente, $Studente(\\underline{Matricola},Nome, Età, CorsoLaurea)$, $CorsoLaurea(\\underline{CodCorso, Insegnamento}$) vogliamo rappresentare in tuple relational calculus con dichiarazione di range la query \"Trovare le matricole degli studenti che seguono l’insegmanento “DB”.\" Una possibile formulazione è ",
		"answers": {
			"a": "{c.Insegnamento | s(Studente) , c(CorsoLaurea) | s.CorsoLaurea=c.CodCorso $\\wedge$ c.Insegnamento=DB}",
			"b": "{ s.Matricola | s(Studente) , c(CorsoLaurea) | s.CorsoLaurea=c.CodCorso $\\wedge$ c.Insegnamento=DB} ",
			"c": "{c. Insegnamento | s(Studente) , c(CorsoLaurea) | s.CorsoLaurea=c.CodCorso $\\wedge$ c.Insegnamento=DB} ",
			"d": "Nessuna delle precedenti "
		},
		"correctAnswer": "b",
		"category": "Calcolo Relazionale"
	},
	{
		"question": "Nella logica a 3 valori (True,False,Unknown), qual è la tabella di verità del connettore OR? <img src=\"img/30.webp\"class=\"responsive-img\" alt=\"responsive-img\"></img>",
		"answers": {
			"a": "a",
			"b": "b",
			"c": "c",
			"d": "d"
		},
		"correctAnswer": "d",
		"category": "Teoria"
	},
	{
		"question": "Sia R una tabella SQL che implementa lo schema di relazione R(A;B;C). L’istruzione di SQL standard <br> SELECT B, C FROM R WHERE A=1; <br> corrisponde alla seguente espressione: ",
		"answers": {
			"a": "$\\sigma_{A=1} (\\pi_{B,C}(R))$",
			"b": "$\\rho_{B,C}(\\pi_{A=1}(R))$",
			"c": "$\\pi_{B,C}(\\sigma_{A=1}(R))$",
			"d": "$\\rho_{B,C}(\\pi_{A=1}(R))$"
		},
		"correctAnswer": "c",
		"category": "Algebra Relazionale"
	},
	{
		"question": "Le clausole di un’istruzione SELECT devono essere elaborate secondo un ordine fisso. Indicate quale tra questi è l’ordine corretto.",
		"answers": {
			"a": "FROM, SELECT, ORDER BY, WHERE",
			"b": "FROM, SELECT, WHERE, ORDER BY",
			"c": "FROM, WHERE, ORDER BY, SELECT",
			"d": "FROM, WHERE, SELECT, ORDER BY"
		},
		"correctAnswer": "d",
		"category": "SQL"
	},
	{
		"question": "È data la relazione R(A, B); A è chiave primaria ed è di tipo intero. Considerate l’istruzione: <br/> <pre style='text-align:left'>SELECT R.A, MAX(R.A)<br/>FROM R<br/>GROUP BY R.B;</pre> Indicate qual è l’unica frase corretta tra le seguenti:",
		"answers": {
			"a": "L’istruzione è sintatticamente corretta, e visualizza tante righe quante sono le tuple di R",
			"b": "L’istruzione è sintatticamente corretta, e visualizza tante righe quanti sono i differenti valori di R.B. ",
			"c": "L’istruzione è sintatticamente errata a causa dell’argomento MAX(R.A) nella clausola SELECT",
			"d": "L’istruzione è sintatticamente errata a causa dell’argomento R.A nella clausola SELECT"
		},
		"correctAnswer": "d",
		"category": "SQL"
	},
	{
		"question": "Sono date le relazioni: R(A, B), S(C, A*), le cui chiavi primarie sono gli attributi sottolineati; inoltre c’è un vincolo di integrità referenziale da S.A a R.A; infine, l’attributo S.A è opzionale. Il programmatore/trice vuole gestire una opportuna politica di reazione quando su un valore di R.A è effettuata una modifica, in modo che il DBMS inserisca un valore opportuno nelle tuple di S.A contenenti il valore modificato di R.A. Quale di queste politiche di reazione alla modifica il programmatore NON può implementare (mediante le istruzioni viste a lezione)? ",
		"answers": {
			"a": "Il DBMS inserisce (in S.A) il valore modificato di RA",
			"b": "Il DBMS inserisce (in S.A) il valore NULL",
			"c": "Il DBMS inserisce (in S.A) un valore che corrisponde al numero di tuple di R",
			"d": "Il DBMS inserisce (in S.A) un valore di default"
		},
		"correctAnswer": "c",
		"category": "SQL"
	},
	{
		"question": "Considerate l’istruzione: <br/> <pre style='text-align:left'>SELECT R.A<br/>FROM R<br/>WHERE R.B = ( <br/>   SELECT MAX(S.B) <br/>   FROM S <br/>); </pre> Siano: $n_R$, il numero di tuple di R; $n_S$, il numero di tuple di S. Quante volte sarà eseguito il select interno? ",
		"answers": {
			"a": "Sempre 1",
			"b": "Un numero compreso tra 1 e $n_R$, a seconda dei dati",
			"c": "Un numero compreso tra 1 e $n_S$, a seconda dei dati",
			"d": "Sempre $n_R$"
		},
		"correctAnswer": "a",
		"category": "SQL"
	},
	{
	    "question": "Qual è lo scopo principale del 'Glossario dei termini' nella fase di analisi dei requisiti?",
	    "answers": {
	        "a": "Descrivere entità e sinonimi per evitare ambiguità nell'interpretazione",
	        "b": "Definire i vincoli di chiave primaria e le foreign key nel modello logico",
	        "c": "Elencare le viste temporanee necessarie per le interrogazioni future",
	        "d": "Tradurre i requisiti raccolti in un modello relazionale in Terza Forma Normale"
	    },
	    "correctAnswer": "a",
	    "category": "Progettazione Concettuale",
		"isAI": true
	},
	{
	    "question": "Cos'è un Entity Type Debole (Weak Entity)?",
	    "answers": {
	        "a": "Un'entità che partecipa esclusivamente a relazioni ricorsive",
	        "b": "Un'entità che non possiede attributi propri, ma solo chiavi esterne a tabelle owner",
	        "c": "Un'entità priva di chiave propria, identificata tramite una relazione forte",
	        "d": "Un'entità isolata nel diagramma E-R che non ha legami cardinali"
	    },
	    "correctAnswer": "c",
	    "category": "Teoria",
		"isAI": true
	},
	{
	    "question": "Nei diagrammi E-R, perché le relazioni n-arie sono spesso più difficili da gestire rispetto alle binarie?",
	    "answers": {
	        "a": "L'assenza di attributi multivalore in SQL ne impedisce totalmente la rappresentazione",
	        "b": "Si possono usare in modo coerente solo in presenza di specializzazioni totali",
	        "c": "Le cardinalità minime e massime hanno un significato logico meno intuitivo e diretto",
	        "d": "I DBMS relazionali non supportano chiavi esterne multiple all'interno delle tuple"
	    },
	    "correctAnswer": "c",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Che cos'è una Relazione Ricorsiva nel modello E-R?",
	    "answers": {
	        "a": "Coinvolgono più volte lo stesso Entity Type con ruoli diversi",
	        "b": "Sono relazioni in cui l'entità derivata eredita dalla superclasse ciclicamente",
	        "c": "Trasformano automaticamente un'entità forte in una debole durante il mapping",
	        "d": "Richiedono in ogni caso l'utilizzo di una chiave surrogata indipendente"
	    },
	    "correctAnswer": "a",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Quale delle seguenti opzioni rappresenta correttamente la notazione UML per la progettazione concettuale?",
	    "answers": {
	        "a": "Le classi sono riquadri a tre sezioni e le associazioni sono linee che le collegano",
	        "b": "Le entità sono rappresentate da ellissi e le associazioni da grandi rettangoli neri",
	        "c": "I diagrammi UML servono esclusivamente per la stesura finale della progettazione fisica",
	        "d": "Le relazioni non possono possedere cardinalità esplicite lungo gli archi"
	    },
	    "correctAnswer": "a",
	    "category": "Teoria",
		"isAI": true
	},
	{
	    "question": "Nel contesto dei Design Pattern per l'E-R, a cosa serve il pattern di 'Reificazione'?",
	    "answers": {
	        "a": "Rimuovere tutti gli attributi multivalore dal modello a monte della traduzione",
	        "b": "Convertire un attributo o una relazione in un'entità del tutto indipendente",
	        "c": "Accorpare due entità in una singola tabella logica per minimizzare le operazioni di join",
	        "d": "Identificare un'entità debole tramite una chiave esterna parziale"
	    },
	    "correctAnswer": "b",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Per modellare l'assegnamento di un impiegato a un progetto che varia nel tempo (mantenendo lo storico), quale pattern uso?",
	    "answers": {
	        "a": "Il pattern di accorpamento relazionale verticale",
	        "b": "Il pattern di storicizzazione di relazione",
	        "c": "Il partizionamento orizzontale della tabella",
	        "d": "Il pattern Instance-Of per le associazioni"
	    },
	    "correctAnswer": "b",
	    "category": "Teoria",
		"isAI": true
	},
	{
	    "question": "Durante la ristrutturazione di uno schema E-R, come ci si deve comportare di fronte alle 'Ridondanze'?",
	    "answers": {
	        "a": "Si valuta se mantenerle per velocizzare le letture, documentandole accuratamente",
	        "b": "Si eliminano sempre in automatico per non appesantire gli update sul database",
	        "c": "Sono essenziali per evitare problemi di memoria nei moderni DBMS relazionali",
	        "d": "Vanno eliminate in ogni caso perché causano immancabilmente anomalie di inserimento"
	    },
	    "correctAnswer": "a",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "In Algebra Relazionale, qual è l'effetto di un'operazione di 'Left Outer Join' (⟕) tra R e S?",
	    "answers": {
	        "a": "Elimina tutte le righe della tabella di sinistra che contengono al loro interno valori NULL",
	        "b": "Restituisce esclusivamente l'intersezione matematica tra le tabelle di destra e di sinistra",
	        "c": "Genera un prodotto cartesiano parziale filtrando in un secondo momento le tuple duplicate",
	        "d": "Mantiene tutte le tuple di sinistra, inserendo valori NULL dove non c'è corrispondenza a destra"
	    },
	    "correctAnswer": "d",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "In Algebra Relazionale, l'operatore di 'Quoziente' (Divisione ÷) viene utilizzato tipicamente per risolvere quale tipo di interrogazione?",
	    "answers": {
	        "a": "Semplifica in automatico le query annidate eliminando l'uso delle clausole EXISTS",
	        "b": "Suddivide le colonne di una tabella in base a un parametro numerico specificato",
	        "c": "Trova gli elementi associati a tutti gli elementi di un'altra relazione contemporaneamente",
	        "d": "Calcola la media o la somma dei valori raggruppati preventivamente per dipartimento"
	    },
	    "correctAnswer": "c",
	    "category": "Algebra Relazionale",
		"isAI": true
	},
	{
	    "question": "Per tradurre una gerarchia EER creando 'una relazione per la superclasse e una per ogni sottoclasse', quale affermazione è vera?",
	    "answers": {
	        "a": "Si utilizza un attributo booleano per ogni possibile sottoclasse all'interno della superclasse",
	        "b": "La superclasse include nativamente tutte le chiavi esterne delle sue sottoclassi derivate",
	        "c": "Le sottoclassi hanno come chiave primaria esattamente la stessa della superclasse",
	        "d": "Si duplicano fisicamente tutti gli attributi della superclasse all'interno delle sottoclassi"
	    },
	    "correctAnswer": "c",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Quando è raccomandato il mapping di una gerarchia EER che prevede la creazione di tabelle SOLO per le sottoclassi?",
	    "answers": {
	        "a": "Solo quando la specializzazione è categoricamente totale (ogni entità deve appartenere a una sottoclasse)",
	        "b": "Quando la gerarchia concettuale di partenza presenta molti attributi di tipo multivalore",
	        "c": "In presenza di chiavi surrogate nidificate all'interno della superclasse principale",
	        "d": "È l'unica opzione strutturale possibile se e solo se la generalizzazione è disgiunta"
	    },
	    "correctAnswer": "a",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Nella teoria della Normalizzazione, cos'è la 'Chiusura' di un insieme di attributi X (indicata con X+)?",
	    "answers": {
	        "a": "Il calcolo delle tuple spurie generate inavvertitamente dopo una scorretta operazione di natural join",
	        "b": "L'insieme degli attributi che possono essere determinati funzionalmente a partire dall'insieme X",
	        "c": "Il metodo procedurale per eliminare progressivamente le dipendenze banali da una tabella logica",
	        "d": "La procedura per la sicura rimozione dei valori NULL all'interno di una possibile chiave candidata"
	    },
	    "correctAnswer": "b",
	    "category": "Dipendenze Funzionali",
		"isAI": true
	},
	{
	    "question": "Cosa si intende per 'Copertura Ridotta' (Minimal Cover) di un insieme di dipendenze funzionali F?",
	    "answers": {
	        "a": "L'estrazione mirata delle sole dipendenze algebriche che coinvolgono in qualche modo le chiavi primarie",
	        "b": "Un insieme equivalente in cui ogni regola ha un solo attributo a destra e nessuna dipendenza è ridondante",
	        "c": "L'elenco degli attributi considerati strettamente necessari per il corretto funzionamento delle viste temporanee",
	        "d": "La conversione in tempo reale dello schema ER direttamente verso la forma normale di Boyce-Codd"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "In una decomposizione binaria in due tabelle R1 e R2, la 'Proprietà NJB (Decomposizione senza perdita)' si verifica se:",
	    "answers": {
	        "a": "L'intersezione dei loro attributi determina funzionalmente tutti gli attributi di almeno una delle due tabelle",
	        "b": "La semplice unione logica delle due chiavi primarie originali non genera mai righe duplicate in output",
	        "c": "Entrambe le nuove tabelle risultanti condividono una chiave esterna che ammette tranquillamente valori nulli",
	        "d": "Nessuna delle tabelle derivate dalla scomposizione presenta internamente delle dipendenze funzionali"
	    },
	    "correctAnswer": "a",
	    "category": "Teoria",
		"isAI": true
	},
	{
	    "question": "In SQL, qual è la differenza fondamentale tra l'operatore IN e l'operatore EXISTS?",
	    "answers": {
	        "a": "Entrambi confrontano in modo stretto dei valori specifici estratti direttamente dall'interno della subquery",
	        "b": "IN serve per l'utilizzo in interrogazioni parametriche, EXISTS si usa prevalentemente per le viste temporanee",
	        "c": "Non vi è alcuna reale differenza computazionale, il loro impiego è lasciato allo stile di chi scrive la query",
	        "d": "IN confronta un valore con una lista, EXISTS restituisce vero solo se la subquery non è un insieme vuoto"
	    },
	    "correctAnswer": "d",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Perché in SQL l'espressione 'WHERE attributo NOT IN (SELECT ...)' è considerata pericolosa se la subquery restituisce dei NULL?",
	    "answers": {
	        "a": "Genera sempre e comunque un grave errore di sintassi SQL che blocca permanentemente l'esecuzione della query",
	        "b": "I valori vuoti intercettati dal motore vengono semplicemente scartati senza causare alcun problema sui restanti",
	        "c": "L'espressione viene valutata integralmente ad 'Unknown', nascondendo tutti i record nel risultato finale",
	        "d": "La subquery restituirà magicamente tutte le righe della tabella ignorando solo quella contenente fisicamente il NULL"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "In una complessa interrogazione SQL, cosa definisce strutturalmente un 'Select Interno Collegato' (Correlated Subquery)?",
	    "answers": {
	        "a": "Una speciale query che impiega massicciamente due o più operazioni logiche di tipo UNION in rapida sequenza",
	        "b": "Una singola subquery che viene eseguita internamente una volta sola per risparmiare e ottimizzare le risorse",
	        "c": "Una subquery le cui condizioni presenti nel WHERE citano esplicitamente una tabella presente nel FROM esterno",
	        "d": "Un select annidato che impone l'uso rigoroso dell'operatore logico INTERSECT in sostituzione dei vari tipi di JOIN"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Se si desidera creare in SQL una Vista (VIEW) temporanea destinata a sparire al termine della sessione, la sintassi corretta è:",
	    "answers": {
	        "a": "CREATE TEMP VIEW nome_vista AS ...",
	        "b": "CREATE VOLATILE VIEW nome_vista AS ...",
	        "c": "CREATE SHORT VIEW nome_vista AS ...",
	        "d": "CREATE SESSION VIEW nome_vista AS ..."
	    },
	    "correctAnswer": "a",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "In SQL, per confrontare se un attributo non possiede alcun valore effettivo (è nullo), quale operatore si usa TASSATIVAMENTE?",
	    "answers": {
	        "a": "attributo IS NULL",
	        "b": "attributo == NULL",
	        "c": "attributo = NULL",
	        "d": "attributo EQUALS NULL"
	    },
	    "correctAnswer": "a",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "A cosa servono, nell'ambito dello sviluppo database, le 'Interrogazioni Parametriche'?",
	    "answers": {
	        "a": "Sono strutture particolari adatte a interrogare in parallelo una grossa quantità di database relazionali multipli",
	        "b": "Strumenti necessari per consentire al sistema di ottimizzare autonomamente gli indici delle chiavi primarie",
	        "c": "Si tratta di query inserite in un'applicazione che accettano variabili, per essere rieseguite su valori dinamici",
	        "d": "Interrogazioni di manutenzione che si occupano di aggiornare silenziosamente i parametri di normalizzazione logica"
	    },
	    "correctAnswer": "c",
	    "category": "Teoria",
		"isAI": true
	},
	{
	    "question": "Qual è la differenza principale tra la Terza Forma Normale (3NF) e la Forma Normale di Boyce-Codd (BCNF)?",
	    "answers": {
	        "a": "La BCNF permette di avere attributi multivalore, mentre la 3NF li vieta rigorosamente, il che comporta una totale riorganizzazione dello schema logico e fisico del database relazionale al fine di preservare le forme normali",
	        "b": "La BCNF è meno restrittiva della 3NF ed è sempre raggiungibile senza perdita di dipendenze",
	        "c": "La 3NF ammette dipendenze in cui la parte destra è un attributo primo, mentre la BCNF richiede che la parte sinistra sia sempre una superchiave",
	        "d": "Nessuna, sono due nomi diversi per la stessa identica forma normale"
	    },
	    "correctAnswer": "c",
	    "category": "Normalizzazione",
		"isAI": true
	},
	{
	    "question": "In un diagramma E-R, se l'entità 'Studente' partecipa a una relazione 'Iscrizione' con cardinalità (min, max) pari a (1, N), cosa significa?",
	    "answers": {
	        "a": "Che lo studente può essere inserito nel sistema anche senza essere iscritto a nulla, il che comporta una totale riorganizzazione dello schema logico e fisico del database relazionale al fine di preservare le forme normali",
	        "b": "Che il corso ha almeno uno studente, fino a un massimo stabilito dalla capienza",
	        "c": "Che lo studente deve essere iscritto ad almeno un corso e può essere iscritto a più corsi contemporaneamente",
	        "d": "Che nel database c'è esattamente un solo studente per ogni N relazioni di iscrizione registrate"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Che errore strutturale si commette eseguendo la query: SELECT Dipartimento, Nome, MAX(Stipendio) FROM Impiegati GROUP BY Dipartimento;",
	    "answers": {
	        "a": "Nessuno, restituirà correttamente il nome dell'impiegato con lo stipendio massimo per ogni dipartimento, causando invariabilmente un'anomalia di cancellazione che può essere risolta esclusivamente tramite partizionamento orizzontale delle tuple",
	        "b": "L'attributo 'Nome' è nella SELECT ma non fa parte della clausola GROUP BY né è argomento di una funzione aggregata",
	        "c": "Manca la clausola HAVING, che è sempre obbligatoria quando si usa l'operatore MAX()",
	        "d": "L'istruzione GROUP BY deve obbligatoriamente precedere la clausola FROM nella sintassi SQL"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Cos'è un vincolo di integrità referenziale nel Modello Relazionale?",
	    "answers": {
	        "a": "Un blocco che impedisce a due tuple della stessa tabella di possedere la medesima chiave primaria, rendendo di fatto impossibile l'applicazione dei vincoli di integrità referenziale senza ricorrere a trigger esterni o procedure memorizzate",
	        "b": "L'obbligo di definire per il DBMS almeno una vista (VIEW) di appoggio per ogni tabella fisica creata",
	        "c": "Un vincolo che impone a tutti i dati inseriti in una colonna di rispettare un formato o dominio specifico",
	        "d": "Un vincolo che obbliga un attributo (chiave esterna) ad assumere solo valori presenti come chiave primaria in un'altra relazione, o valori NULL"
	    },
	    "correctAnswer": "d",
	    "category": "Modello Relazionale",
		"isAI": true
	},
	{
	    "question": "Se in una query SQL si utilizza la condizione WHERE Cognome LIKE '_a%', quali cognomi verranno selezionati?",
	    "answers": {
	        "a": "Tutti i cognomi in cui la seconda lettera è una 'a'",
	        "b": "Tutti i cognomi che terminano esclusivamente con la lettera 'a'",
	        "c": "Tutti i cognomi che contengono la lettera 'a' in una qualsiasi posizione della stringa",
	        "d": "Solamente i cognomi che iniziano con la sequenza testuale esatta '_a'"
	    },
	    "correctAnswer": "a",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Come si traduce correttamente un attributo multivalore (es. i recapiti di una persona) passando dal modello E-R al Relazionale?",
	    "answers": {
	        "a": "Si inseriscono più colonne affiancate nella tabella Persona (es. Telefono1, Telefono2), rendendo di fatto impossibile l'applicazione dei vincoli di integrità referenziale senza ricorrere a trigger esterni o procedure memorizzate",
	        "b": "Si convertono tutti i valori in un'unica stringa testuale lunga separata da virgole",
	        "c": "Si crea una nuova tabella dedicata contenente il recapito e la chiave esterna all'entità Persona, e la loro unione forma la chiave primaria",
	        "d": "Si lascia invariato lo schema, poiché i database relazionali moderni supportano nativamente array di dati"
	    },
	    "correctAnswer": "c",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Quale dei seguenti è uno dei vantaggi principali dell'utilizzare una Vista (VIEW) in un database?",
	    "answers": {
	        "a": "Accelerare in modo esponenziale i tempi di scrittura e inserimento (INSERT) sul database, rendendo di fatto impossibile l'applicazione dei vincoli di integrità referenziale senza ricorrere a trigger esterni o procedure memorizzate",
	        "b": "Archiviare permanentemente i dati in un'area disco separata per scopi di sicurezza logica",
	        "c": "Rendere trasparenti agli applicativi finali eventuali modifiche strutturali delle tabelle sottostanti e fornire query pre-confezionate",
	        "d": "Permettere l'esecuzione di interrogazioni ignorando intenzionalmente i vincoli di chiave esterna"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Dato l'insieme di dipendenze funzionali F = { A → B, AB → C, A → C }, perché si afferma che esso NON è in 'copertura ridotta'?",
	    "answers": {
	        "a": "Perché la dipendenza A → C è logicamente derivabile transitivamente, e nella regola AB → C l'attributo A è sufficiente per determinare B",
	        "b": "Perché mancano le dipendenze banali obbligatorie come A → A, operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "c": "Perché l'attributo A non è classificato esplicitamente come superchiave dell'intera tabella",
	        "d": "Perché la parte destra delle dipendenze funzionali deve contenere solo attributi multivalore per essere minimale"
	    },
	    "correctAnswer": "a",
	    "category": "Dipendenze Funzionali",
		"isAI": true
	},
	{
	    "question": "Qual è la differenza concettuale e strutturale tra un operatore UNION e un operatore JOIN in SQL?",
	    "answers": {
	        "a": "Il JOIN elimina sempre i duplicati in automatico, mentre la UNION richiede l'uso della clausola DISTINCT, rendendo di fatto impossibile l'applicazione dei vincoli di integrità referenziale senza ricorrere a trigger esterni o procedure memorizzate",
	        "b": "La UNION si applica solo a tabelle con colonne dal nome diverso, il JOIN richiede colonne con lo stesso nome",
	        "c": "La UNION agisce in senso 'verticale' aumentando le tuple in output, mentre il JOIN agisce 'orizzontalmente' accorpando gli attributi",
	        "d": "Non c'è differenza, entrambi vengono tradotti nell'Algebra Relazionale come Prodotti Cartesiani"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Nello studio delle prestazioni durante la ristrutturazione di uno schema ER, a quale scopo specifico viene compilata la 'Tavola degli Accessi'?",
	    "answers": {
	        "a": "A tenere traccia del numero di utenti connessi simultaneamente per prevenire colli di bottiglia - questo approccio, pur essendo teoricamente valido, viene sistematicamente scartato nella pratica aziendale a causa degli enormi costi computazionali",
	        "b": "A definire i privilegi di sicurezza (GRANT) per i vari ruoli aziendali",
	        "c": "A stimare quanti e quali tipi di operazioni (Lettura o Scrittura) vengono effettuate sulle varie entità in base a una query",
	        "d": "A calcolare l'ingombro in byte di ciascun attributo su disco"
	    },
	    "correctAnswer": "c",
	    "category": "Progettazione Fisica",
		"isAI": true
	},
	{
	    "question": "Quando in una clausola FROM si ridenomina formalmente una tabella (es. FROM DIPARTIMENTI AS D), qual è lo 'scope' di tale ridenominazione?",
	    "answers": {
	        "a": "Ha un valore globale e persistente fino alla chiusura definitiva del database - questo approccio, pur essendo teoricamente valido, viene sistematicamente scartato nella pratica aziendale a causa degli enormi costi computazionali",
	        "b": "Vale all'interno dell'istruzione SELECT corrente in cui è stata dichiarata",
	        "c": "Sostituisce fisicamente il nome della tabella nello schema logico",
	        "d": "Vale unicamente per le clausole WHERE e HAVING, ma non per la SELECT"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Nella logica a tre valori (Three-Valued Logic) implementata nei motori SQL, qual è il risultato esatto dell'espressione booleana: FALSO AND UNKNOWN?",
	    "answers": {
	        "a": "Falso",
	        "b": "Unknown (Sconosciuto)",
	        "c": "Vero",
	        "d": "Genera un errore di sintassi a runtime"
	    },
	    "correctAnswer": "a",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Qual è la differenza concettuale tra lo 'Schema' e lo 'Stato' di un database relazionale?",
	    "answers": {
	        "a": "Lo Schema contiene i dati, mentre lo Stato definisce i tipi di dato, causando invariabilmente un'anomalia di cancellazione che può essere risolta esclusivamente tramite partizionamento orizzontale delle tuple",
	        "b": "Lo Schema definisce la struttura invariante nel tempo (tabelle e vincoli), mentre lo Stato è l'insieme dei dati (tuple) presenti in un dato momento",
	        "c": "Sono due termini interscambiabili che indicano le viste create dagli utenti",
	        "d": "Lo Stato riguarda l'hardware fisico del server, lo Schema riguarda i file del database"
	    },
	    "correctAnswer": "b",
	    "category": "Generalità",
		"isAI": true
	},
	{
	    "question": "Quale sotto-linguaggio SQL viene utilizzato specificamente per definire la struttura delle tabelle (CREATE TABLE) e i loro vincoli?",
	    "answers": {
	        "a": "Data Manipulation Language (DML)",
	        "b": "Data Definition Language (DDL)",
	        "c": "Data Control Language (DCL)",
	        "d": "Data Validation Language (DVL)"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Come procede la strategia di progettazione concettuale 'Top-Down'?",
	    "answers": {
	        "a": "Partendo da specifiche elementari per poi raggrupparle in macro-entità, operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "b": "Partendo da un primo nucleo centrale e allargandosi 'a macchia d'olio'",
	        "c": "Partendo da schemi preesistenti e unendoli insieme",
	        "d": "Partendo da un concetto generale molto astratto e raffinandolo via via con dettagli sempre maggiori"
	    },
	    "correctAnswer": "d",
	    "category": "Progettazione Concettuale",
		"isAI": true
	},
	{
	    "question": "In un diagramma E-R, un attributo come 'Indirizzo' suddiviso in 'Via', 'Civico' e 'CAP' è l'esempio di:",
	    "answers": {
	        "a": "Attributo multivalore",
	        "b": "Attributo derivato",
	        "c": "Attributo composto",
	        "d": "Chiave parziale"
	    },
	    "correctAnswer": "c",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Qual è la tecnica standard per mappare un 'Attributo Multivalore' dal modello E-R al modello Relazionale?",
	    "answers": {
	        "a": "Trasformarlo in una singola stringa concatenata all'interno della stessa tabella, il che comporta una totale riorganizzazione dello schema logico e fisico del database relazionale al fine di preservare le forme normali",
	        "b": "Aggiungere N colonne nella tabella dell'entità proprietaria (Valore1, Valore2, ecc.)",
	        "c": "Ignorarlo, in quanto i database relazionali non supportano dati complessi",
	        "d": "Creare una nuova tabella contenente il valore dell'attributo e la chiave esterna dell'entità proprietaria, formando una chiave composta"
	    },
	    "correctAnswer": "d",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "In un diagramma E-R, se una relazione presenta una 'partecipazione obbligatoria' (esistenza dipendente) per un'entità, come viene spesso raffigurata?",
	    "answers": {
	        "a": "Con una linea tratteggiata, causando invariabilmente un'anomalia di cancellazione che può essere risolta esclusivamente tramite partizionamento orizzontale delle tuple",
	        "b": "Con una doppia linea tra l'entità e il rombo della relazione",
	        "c": "Con un cerchio bianco posto sull'arco",
	        "d": "Colorando il rombo della relazione di grigio scuro"
	    },
	    "correctAnswer": "b",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "Come si traduce correttamente una relazione molti-a-molti (M:N) passando dallo schema concettuale allo schema relazionale?",
	    "answers": {
	        "a": "Aggiungendo una chiave esterna nella tabella con meno tuple, rendendo di fatto impossibile l'applicazione dei vincoli di integrità referenziale senza ricorrere a trigger esterni o procedure memorizzate",
	        "b": "Creando una tabella di associazione intermedia contenente le chiavi esterne di entrambe le tabelle originali",
	        "c": "Aggiungendo un attributo multivalore a una delle due tabelle",
	        "d": "È matematicamente impossibile e richiede sempre una scomposizione in fase concettuale"
	    },
	    "correctAnswer": "b",
	    "category": "Generalità",
		"isAI": true
	},
	{
	    "question": "Che cos'è una 'Chiave Candidata' all'interno di una relazione?",
	    "answers": {
	        "a": "Una qualsiasi combinazione di attributi che non contiene valori NULL, rendendo di fatto impossibile l'applicazione dei vincoli di integrità referenziale senza ricorrere a trigger esterni o procedure memorizzate",
	        "b": "Un attributo che funge temporaneamente da chiave in assenza della primary key",
	        "c": "Una superchiave minimale, cioè un gruppo di attributi che identifica univocamente la tupla senza contenere attributi superflui",
	        "d": "Una chiave esterna che candida un record ad essere aggiornato"
	    },
	    "correctAnswer": "c",
	    "category": "Modello Relazionale",
		"isAI": true
	},
	{
	    "question": "Cosa impone il 'Vincolo di Integrità di Entità' nel Modello Relazionale?",
	    "answers": {
	        "a": "Nessun attributo che fa parte della chiave primaria può assumere valore NULL",
	        "b": "Tutte le tabelle devono avere almeno tre colonne per essere considerate valide",
	        "c": "Una chiave esterna non può mai essere aggiornata dopo il suo primo inserimento",
	        "d": "Non possono esistere due tabelle con lo stesso identico nome nello schema"
	    },
	    "correctAnswer": "a",
	    "category": "Entità-Relazione",
		"isAI": true
	},
	{
	    "question": "In SQL, specificando l'opzione 'ON DELETE CASCADE' su un vincolo di chiave esterna, cosa accade se cancello la riga referenziata?",
	    "answers": {
	        "a": "Il DBMS impedisce l'eliminazione mostrando un messaggio di errore (RESTRICT), causando invariabilmente un'anomalia di cancellazione che può essere risolta esclusivamente tramite partizionamento orizzontale delle tuple",
	        "b": "Il valore della chiave esterna nelle tuple referenzianti viene settato a NULL",
	        "c": "Il DBMS elimina anche tutte le righe referenzianti che puntavano a quella appena cancellata",
	        "d": "La riga referenziata viene solo nascosta (soft delete) finché ci sono altre righe che la puntano"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "In SQL, a cosa serve la clausola 'ON DELETE SET NULL' su una Foreign Key?",
	    "answers": {
	        "a": "A cancellare a cascata tutti i record correlati - questo approccio, pur essendo teoricamente valido, viene sistematicamente scartato nella pratica aziendale a causa degli enormi costi computazionali",
	        "b": "A impedire la cancellazione del record padre",
	        "c": "A mantenere le righe figlie, svuotando (impostando a NULL) la loro chiave esterna quando il record padre viene cancellato",
	        "d": "Ad azzerare tutti i contatori (autoincrement) della tabella padre"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Quale operatore SQL estrae tutti i cognomi che NON iniziano con la lettera 'B'?",
	    "answers": {
	        "a": "WHERE Cognome NOT IN ('B%')",
	        "b": "WHERE Cognome != 'B*'",
	        "c": "WHERE Cognome NOT LIKE 'B%'",
	        "d": "WHERE Cognome EXCLUDES 'B_'"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Se la colonna numerica 'Premio' di una tabella contiene i valori [100, 200, NULL, 50], quale sarà il risultato di COUNT(Premio)?",
	    "answers": {
	        "a": "4",
	        "b": "3",
	        "c": "Unknown",
	        "d": "Genera errore a causa del NULL"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "L'operatore SQL MAX() può essere applicato a una colonna di tipo testo (es. Nome)?",
	    "answers": {
	        "a": "No, genera un errore di conversione di tipo, rendendo di fatto impossibile l'applicazione dei vincoli di integrità referenziale senza ricorrere a trigger esterni o procedure memorizzate",
	        "b": "Sì, e restituisce il nome più lungo in termini di numero di caratteri",
	        "c": "Sì, e restituisce l'ultimo nome in base all'ordinamento alfabetico (lessicografico)",
	        "d": "Sì, ma solo se si usa anche la clausola DISTINCT"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Avendo la clausola 'SELECT Dipartimento, SUM(Stipendio) FROM Impiegati', quale altra clausola è obbligatorio inserire in SQL?",
	    "answers": {
	        "a": "ORDER BY Stipendio",
	        "b": "GROUP BY Dipartimento",
	        "c": "HAVING SUM(Stipendio) > 0",
	        "d": "Nessuna, la query è già sintatticamente completa"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Qual è la differenza fondamentale tra l'utilizzo della clausola WHERE e della clausola HAVING in SQL?",
	    "answers": {
	        "a": "WHERE filtra prima del raggruppamento (sulle righe), HAVING filtra dopo il raggruppamento (sui risultati aggregati)",
	        "b": "HAVING è semplicemente un sinonimo moderno di WHERE, utilizzabile in modo interscambiabile, operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "c": "WHERE si usa solo per le stringhe testuali, HAVING solo per confronti numerici matematici",
	        "d": "HAVING può essere utilizzato soltanto se la query non contiene alcuna funzione di aggregazione"
	    },
	    "correctAnswer": "a",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Quale sintassi si usa in SQL per ordinare i risultati dal più grande al più piccolo in base all'attributo 'Punteggio'?",
	    "answers": {
	        "a": "SORT BY Punteggio DOWN",
	        "b": "ORDER BY Punteggio ASC",
	        "c": "ORDER BY Punteggio DESC",
	        "d": "GROUP BY Punteggio REVERSE"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "In SQL, l'operatore insiemistico INTERSECT serve a:",
	    "answers": {
	        "a": "Fondere due tabelle in base a una colonna in comune (sinonimo di JOIN), operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "b": "Restituire l'unione senza duplicati dei risultati di due query separate",
	        "c": "Restituire le tuple della prima query che NON compaiono nel risultato della seconda",
	        "d": "Restituire solo le righe che sono presenti esattamente in ENTRAMBI i risultati di due SELECT distinte"
	    },
	    "correctAnswer": "d",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Come si comporta l'operatore insiemistico EXCEPT (o MINUS) in SQL?",
	    "answers": {
	        "a": "Esclude a priori i valori NULL dai calcoli matematici delle funzioni aggregate, operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "b": "Restituisce le tuple prodotte dalla prima query sottraendo (ignorando) quelle che compaiono anche nel risultato della seconda query",
	        "c": "Genera un'eccezione se la query non rispetta i vincoli di foreign key",
	        "d": "Sottrae i valori numerici di due colonne riga per riga"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Di default, una VIEW in un DBMS relazionale è memorizzata fisicamente su disco occupando spazio come una normale tabella?",
	    "answers": {
	        "a": "Sì, viene salvata in modo permanente in una speciale partizione hardware, operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "b": "Sì, ma solo se non ci sono join al suo interno",
	        "c": "No, è solo una 'query memorizzata' la cui logica viene ricalcolata dinamicamente ad ogni suo richiamo",
	        "d": "No, risiede permanentemente nella RAM del server per garantire velocità estreme"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "A cosa serve definire un vincolo UNIQUE su una o più colonne di una tabella?",
	    "answers": {
	        "a": "A garantire che non ci siano duplicati in quelle colonne, implementando di fatto una chiave candidata alternativa alla primary key",
	        "b": "A impedire l'inserimento di valori nulli (NULL) all'interno del campo, operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "c": "Ad autoincrementare il valore numerico di un id ad ogni nuova riga",
	        "d": "A collegare la colonna con la chiave primaria di un'altra tabella esterna"
	    },
	    "correctAnswer": "a",
	    "category": "Modello Relazionale",
		"isAI": true
	},
	{
	    "question": "È possibile in SQL definire una PRIMARY KEY composta da due o più attributi?",
	    "answers": {
	        "a": "No, la chiave primaria deve sempre essere strettamente un singolo campo, operazione che richiede tassativamente l'utilizzo di indici clustered per prevenire il deterioramento delle prestazioni in fase di query complesse",
	        "b": "Sì, dichiarandola alla fine degli attributi con la sintassi 'PRIMARY KEY (colonna1, colonna2)'",
	        "c": "Sì, ma solo se entrambe le colonne sono di tipo stringa VARCHAR",
	        "d": "No, per le chiavi multiple bisogna obbligatoriamente utilizzare i vincoli di UNIQUE multipli"
	    },
	    "correctAnswer": "b",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Cosa si intende per 'Anomalia di Aggiornamento' in una base di dati non normalizzata?",
	    "answers": {
	        "a": "Il blocco del sistema quando due utenti cercano di fare query contemporaneamente, il che comporta una totale riorganizzazione dello schema logico e fisico del database relazionale al fine di preservare le forme normali",
	        "b": "Il dover modificare ripetutamente lo stesso identico dato in più tuple (righe) differenti, con il forte rischio di generare inconsistenze",
	        "c": "L'impossibilità di aggiornare un campo se questo contiene già un valore NULL",
	        "d": "L'inserimento involontario di tuple spurie a causa di join effettuati su chiavi non primarie"
	    },
	    "correctAnswer": "b",
	    "category": "Normalizzazione",
		"isAI": true
	},
	{
	    "question": "Concettualmente, un RIGHT OUTER JOIN tra la Tabella A e la Tabella B produce lo stesso identico risultato di:",
	    "answers": {
	        "a": "Un FULL OUTER JOIN tra la Tabella A e la Tabella B",
	        "b": "Un prodotto cartesiano non filtrato tra A e B",
	        "c": "Un LEFT OUTER JOIN tra la Tabella B e la Tabella A",
	        "d": "Un'operazione insiemistica di INTERSECT tra A e B"
	    },
	    "correctAnswer": "c",
	    "category": "SQL",
		"isAI": true
	},
	{
	    "question": "Nella strategia di progettazione 'Bottom-Up', qual è il punto di partenza dell'analista?",
	    "answers": {
	        "a": "Parte dallo schema fisico SQL per risalire fino allo schema E-R concettuale a ritroso - questo approccio, pur essendo teoricamente valido, viene sistematicamente scartato nella pratica aziendale a causa degli enormi costi computazionali",
	        "b": "Parte dalle entità più astratte e vaste per poi sminuzzarle nei dettagli minimi necessari",
	        "c": "Parte dalla suddivisione logica delle viste richieste dagli utenti",
	        "d": "Parte dalle specifiche iniziali elementari e atomiche, per poi raggrupparle e integrarle via via in concetti sempre più ampi (schema finale)"
	    },
	    "correctAnswer": "d",
	    "category": "Progettazione Concettuale",
		"isAI": true
	}
]
;
// State
let allQuestions = [];
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; // Array of selected option keys
let isQuizFinished = false;

// DOM Elements
const appDiv = document.getElementById('app');

// Initialization
async function init() {
    try {
        allQuestions = window.QUIZ_DATA;
        
        // Add IDs if they don't exist
        allQuestions = allQuestions.map((q, index) => ({
            ...q,
            id: q.id || `q_${index}`
        }));

        navigate('home');
    } catch (error) {
        console.error("Initialization Error:", error);
        appDiv.innerHTML = `<div class="glass-panel"><h2 style="color:var(--error-color)">Error Loading Data</h2><p>Could not load data.js.</p><pre style="color:red; font-size:12px; text-align:left;">${error.message}\n${error.stack}</pre></div>`;
    }
}

// Router
function navigate(view) {
    appDiv.innerHTML = ''; // Clear current
    
    if (view === 'home') renderHome();
    else if (view === 'quiz') startQuiz();
    else if (view === 'results') renderResults();
    else if (view === 'progress') renderProgress();
    
    // Tell MathJax to re-render if loaded
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise().then(() => {
            // Post-process: wrap wide mjx-container in a scrollable span
            document.querySelectorAll('mjx-container').forEach(el => {
                if (el.parentElement && el.parentElement.classList.contains('math-scroll-wrap')) return;
                const wrapper = document.createElement('span');
                wrapper.className = 'math-scroll-wrap';
                el.parentNode.insertBefore(wrapper, el);
                wrapper.appendChild(el);
            });
        });
    }
}

// Track seen questions in LocalStorage
function getSeenQuestions() {
    const seen = localStorage.getItem('db_quiz_seen');
    return seen ? JSON.parse(seen) : [];
}

function addSeenQuestions(questionIds) {
    const seen = new Set(getSeenQuestions());
    questionIds.forEach(id => seen.add(id));
    localStorage.setItem('db_quiz_seen', JSON.stringify(Array.from(seen)));
}

function clearProgress() {
    localStorage.removeItem('db_quiz_seen');
    navigate('progress');
}

// Views
function renderHome() {
    const seenCount = getSeenQuestions().length;
    const totalCount = allQuestions.length;
    
    const html = `
        <div class="view-container glass-panel" style="max-width: 800px; margin: 0 auto;">
            <h1>Basi di Dati Quiz</h1>
            <p>Testa le tue conoscenze con un quiz di 20 domande selezionate casualmente. Le domande che non hai ancora visto avranno la priorità.</p>
            
            <div class="stats-grid" style="margin-bottom: 2rem;">
                <div class="stat-card">
                    <div class="stat-value">${seenCount} / ${totalCount}</div>
                    <div class="stat-label">Domande Viste</div>
                </div>
            </div>

            <div class="btn-group">
                <button class="btn" onclick="navigate('quiz')">Avvia Quiz (20 Domande)</button>
                <button class="btn btn-secondary" onclick="navigate('progress')">I Miei Progressi</button>
            </div>
        </div>
    `;
    appDiv.innerHTML = html;
}

function startQuiz() {
    const seenIds = new Set(getSeenQuestions());
    
    // Prioritize unseen questions
    const unseen = allQuestions.filter(q => !seenIds.has(q.id));
    const seen = allQuestions.filter(q => seenIds.has(q.id));
    
    // Shuffle arrays
    unseen.sort(() => Math.random() - 0.5);
    seen.sort(() => Math.random() - 0.5);
    
    // Pick 20
    let selected = [];
    if (unseen.length >= 20) {
        selected = unseen.slice(0, 20);
    } else {
        selected = [...unseen, ...seen.slice(0, 20 - unseen.length)];
    }
    
    // Shuffle the final 20 so unseen aren't always first
    selected.sort(() => Math.random() - 0.5);
    
    currentQuizQuestions = selected;
    currentQuestionIndex = 0;
    userAnswers = new Array(20).fill(null);
    isQuizFinished = false;
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (currentQuestionIndex >= currentQuizQuestions.length) {
        finishQuiz();
        return;
    }
    
    const q = currentQuizQuestions[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex) / 20) * 100;
    
    let optionsHtml = '';
    Object.entries(q.answers).forEach(([key, value]) => {
        const isSelected = userAnswers[currentQuestionIndex] === key;
        optionsHtml += `
            <li class="option-item ${isSelected ? 'selected' : ''}" data-key="${key}" onclick="selectOption('${key}')">
                <span class="option-key">${key.toUpperCase()}.</span><span class="option-value">${value}</span>
            </li>
        `;
    });
    
    const html = `
        <div class="view-container glass-panel quiz-card">

            <!-- Zona 0: barra progresso -->
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: ${progressPercent}%"></div>
            </div>

            <!-- Zona 1: header fisso -->
            <div class="quiz-header">
                <span class="quiz-header-left">Domanda ${currentQuestionIndex + 1} di 20</span>
                <div class="quiz-header-right">
                    <span style="background:var(--accent-color); padding:4px 10px; border-radius:20px; font-size:0.78rem; color:white; font-weight:600;">${q.category || 'Generale'}${q.isAI ? ' <span title="Generata da IA" style="display:inline-flex; align-items:center; justify-content:center; background:var(--accent-color); color:white; font-size:0.7rem; font-weight:bold; padding:2px 6px; border-radius:4px; margin-right:6px; vertical-align:middle; line-height:1;">🤖 IA</span>' : ''}</span>
                    <button class="btn btn-secondary" style="padding: 4px 12px; font-size: 0.8rem; border-color: var(--error-color); color: var(--error-color);" onclick="if(confirm('Vuoi davvero uscire dal quiz in corso? I progressi andranno persi.')) navigate('home')">Esci</button>
                </div>
            </div>

            <!-- Zona 2: contenuto scorrevole -->
            <div class="quiz-scroll">
                <h2 class="question-text">${q.question}</h2>
                <ul class="options-list">
                    ${optionsHtml}
                </ul>
            </div>

            <!-- Zona 3: footer nav fisso -->
            <div class="quiz-footer">
                <button class="btn btn-secondary" onclick="prevQuestion()" ${currentQuestionIndex === 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>Precedente</button>
                <button class="btn" onclick="nextQuestion()">${currentQuestionIndex === 19 ? 'Termina Quiz' : 'Successiva'}</button>
            </div>
        </div>
    `;
    
    appDiv.innerHTML = html;
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
}

window.selectOption = function(key) {
    userAnswers[currentQuestionIndex] = key;
    
    // Update DOM directly to avoid re-rendering and triggering the fade-in animation
    const options = document.querySelectorAll('.option-item');
    options.forEach(opt => {
        if (opt.getAttribute('data-key') === key) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

window.nextQuestion = function() {
    currentQuestionIndex++;
    renderQuizQuestion();
}

window.prevQuestion = function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuizQuestion();
    }
}

function finishQuiz() {
    isQuizFinished = true;
    const ids = currentQuizQuestions.map(q => q.id);
    addSeenQuestions(ids);
    navigate('results');
}

function renderResults() {
    let correctCount = 0;
    let resultsHtml = '';
    
    currentQuizQuestions.forEach((q, index) => {
        const userAns = userAnswers[index];
        const isCorrect = userAns === q.correctAnswer;
        if (isCorrect) correctCount++;
        
        let optionsHtml = '';
        Object.entries(q.answers).forEach(([key, value]) => {
            let className = 'option-item';
            if (key === q.correctAnswer) className += ' correct';
            else if (key === userAns && !isCorrect) className += ' wrong';
            
            optionsHtml += `
                <li class="${className}" style="pointer-events:none; margin-bottom:0.5rem;">
                    <span class="option-key">${key.toUpperCase()}.</span><span class="option-value">${value}</span>
                </li>
            `;
        });
        
        const icon = isCorrect ? '✅' : '❌';
        resultsHtml += `
            <div style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem;">
                <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.4rem; font-weight:600;">
                    ${icon} Domanda ${index + 1} · <span style="color:var(--accent-color)">${q.category || 'Generale'}</span>
                </p>
                <h3 style="font-size:1rem; margin-bottom:0.75rem; color:var(--text-primary); font-weight:500; overflow-wrap:break-word; word-break:break-word;">
                    ${q.isAI ? '<span title="Generata da IA" style="display:inline-flex; align-items:center; justify-content:center; background:var(--accent-color); color:white; font-size:0.7rem; font-weight:bold; padding:2px 6px; border-radius:4px; margin-right:6px; vertical-align:middle; line-height:1;">🤖 IA</span>' : ''}${q.question}
                </h3>
                <ul class="options-list">
                    ${optionsHtml}
                </ul>
            </div>
        `;
    });
    
    const scorePercent = Math.round((correctCount / 20) * 100);
    const scoreColor = scorePercent >= 60 ? 'var(--success-color)' : 'var(--error-color)';
    
    const html = `
        <div class="view-container glass-panel quiz-card">

            <!-- Header fisso: punteggio -->
            <div class="quiz-header" style="justify-content:center; flex-direction:column; text-align:center; gap:0.5rem;">
                <h1 style="margin:0; font-size:1.8rem;">Risultati</h1>
                <div style="display:flex; gap:2rem; justify-content:center; margin-top:0.5rem;">
                    <div>
                        <div style="font-size:2rem; font-weight:700; color:${scoreColor}">${correctCount}/20</div>
                        <div style="font-size:0.78rem; color:var(--text-secondary); text-transform:uppercase; letter-spacing:1px;">Corrette</div>
                    </div>
                    <div>
                        <div style="font-size:2rem; font-weight:700; color:${scoreColor}">${scorePercent}%</div>
                        <div style="font-size:0.78rem; color:var(--text-secondary); text-transform:uppercase; letter-spacing:1px;">Punteggio</div>
                    </div>
                </div>
            </div>

            <!-- Zona scorrevole: revisione domande -->
            <div class="quiz-scroll">
                ${resultsHtml}
            </div>

            <!-- Footer: bottoni -->
            <div class="quiz-footer">
                <button class="btn btn-secondary" onclick="navigate('home')">Home</button>
                <button class="btn" onclick="navigate('quiz')">Nuovo Quiz</button>
            </div>

        </div>
    `;
    
    appDiv.innerHTML = html;
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
}

function renderProgress() {
    const seenIds = new Set(getSeenQuestions());
    const seenCount = seenIds.size;
    const totalCount = allQuestions.length;
    const progressPercent = Math.round((seenCount / totalCount) * 100) || 0;
    
    // Group questions by category
    const categories = {};
    allQuestions.forEach(q => {
        const cat = q.category || 'Generale';
        if (!categories[cat]) {
            categories[cat] = {
                total: 0,
                seen: 0,
                questions: []
            };
        }
        categories[cat].total++;
        if (seenIds.has(q.id)) {
            categories[cat].seen++;
        }
        categories[cat].questions.push(q);
    });

    let desktopListHtml = '';
    let mobileListHtml = '';
    let navHtml = '';

    Object.keys(categories).sort().forEach(cat => {
        const catData = categories[cat];
        const catId = `cat_${cat.replace(/\s+/g, '_')}`;
        
        // Navigation Link (Desktop)
        navHtml += `
            <a href="#${catId}" class="nav-link">
                ${cat}
                <span class="nav-badge">${catData.seen}/${catData.total}</span>
            </a>
        `;
        
        // Category Header (Desktop)
        desktopListHtml += `<div id="${catId}" class="category-header" style="scroll-margin-top: 2rem;">${cat}</div>`;
        
        // Category Header (Mobile) - Sticky!
        mobileListHtml += `<div class="category-header mobile-sticky-header">${cat}</div>`;
        
        // Questions in Category
        catData.questions.forEach((q) => {
            const isSeen = seenIds.has(q.id);
            let optionsHtml = '';
            if (isSeen) {
                Object.entries(q.answers).forEach(([key, value]) => {
                    const isCorrect = key === q.correctAnswer;
                    const color = isCorrect ? 'var(--success-color)' : 'var(--text-secondary)';
                    const fw = isCorrect ? 'bold' : 'normal';
                    optionsHtml += `<li style="color:${color}; font-weight:${fw}; margin-bottom: 0.25rem;">
                        <span style="font-weight:bold;">${key.toUpperCase()}.</span> ${value}
                    </li>`;
                });
            }

            const qHtml = `
                <div class="progress-q-item" style="background: ${isSeen ? 'transparent' : 'rgba(0,0,0,0.01)'};">
                    <div class="progress-q-icon" style="background:${isSeen ? 'var(--success-color)' : 'transparent'}; border-color:${isSeen ? 'var(--success-color)' : 'var(--text-secondary)'};">
                        ${isSeen ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                    </div>
                    <div style="flex:1; text-align: left; min-width: 0;">
                        <p class="progress-q-text" style="font-weight: ${isSeen ? '600' : '400'};">${q.isAI ? '<span title="Generata da IA" style="display:inline-flex; align-items:center; justify-content:center; background:var(--accent-color); color:white; font-size:0.7rem; font-weight:bold; padding:2px 6px; border-radius:4px; margin-right:6px; vertical-align:middle; line-height:1;">🤖 IA</span>' : ''}${q.question}</p>
                        ${isSeen ? `<ul class="progress-q-options">${optionsHtml}</ul>` : '<p class="progress-q-unseen">Non hai ancora incontrato questa domanda.</p>'}
                    </div>
                </div>
            `;
            desktopListHtml += qHtml;
            mobileListHtml += qHtml;
        });
    });
    
    const html = `
        <!-- DESKTOP VIEW -->
        <div class="view-container desktop-progress-view">
            <h1 style="margin-bottom: 2rem;">I Miei Progressi</h1>
            <div class="progress-layout">
                <!-- Sidebar (Fixed) -->
                <div class="progress-sidebar">
                    <div class="glass-panel" style="position: sticky; top: 2rem;">
                        <div class="stats-grid" style="grid-template-columns: 1fr; margin-top: 0; gap: 1rem;">
                            <div class="stat-card" style="padding: 1rem;">
                                <div class="stat-value" style="font-size: 2rem;">${seenCount}</div>
                                <div class="stat-label">Domande Viste</div>
                            </div>
                            <div class="stat-card" style="padding: 1rem;">
                                <div class="stat-value" style="font-size: 2rem;">${totalCount - seenCount}</div>
                                <div class="stat-label">Rimanenti</div>
                            </div>
                            <div class="stat-card" style="padding: 1rem;">
                                <div class="stat-value" style="font-size: 2rem;">${progressPercent}%</div>
                                <div class="stat-label">Completamento</div>
                            </div>
                        </div>
                        <div class="btn-group" style="flex-direction: column; gap: 0.5rem; margin-top: 1.5rem;">
                            <button class="btn btn-secondary" onclick="navigate('home')">Torna alla Home</button>
                            <button class="btn" style="background:var(--error-color)" onclick="if(confirm('Sei sicuro di voler azzerare i progressi?')) clearProgress()">Azzera Progressi</button>
                        </div>
                    </div>
                </div>
                <!-- Main Content -->
                <div class="progress-main">
                    <div class="glass-panel" style="padding: 0; overflow: hidden; padding-bottom: 2rem; padding-left: 1.5rem; padding-right: 1.5rem;">
                        ${desktopListHtml}
                    </div>
                </div>
                <!-- Nav Sidebar -->
                <div class="progress-nav">
                    <div class="glass-panel" style="position: sticky; top: 2rem; padding: 1.5rem;">
                        <h3 style="margin-bottom: 1rem; color: var(--text-primary); text-align: left; font-size: 1.2rem;">Categorie</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                            ${navHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MOBILE VIEW (App-like layout) -->
        <div class="mobile-progress-view glass-panel" style="padding: 0; border: none; animation: fadeIn 0.4s ease-out forwards;">
                
                <!-- Header fisso in alto con le statistiche -->
                <div class="quiz-header" style="justify-content: space-around; padding: 0.75rem 0.5rem; margin-bottom: 0; background: rgba(255,255,255,0.8); backdrop-filter: blur(10px);">
                    <div style="text-align:center;">
                        <div style="font-size:1.2rem; font-weight:700; color:var(--text-primary)">${seenCount}</div>
                        <div style="font-size:0.7rem; color:var(--text-secondary); text-transform:uppercase;">Viste</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.2rem; font-weight:700; color:var(--text-primary)">${totalCount - seenCount}</div>
                        <div style="font-size:0.7rem; color:var(--text-secondary); text-transform:uppercase;">Rimanenti</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.2rem; font-weight:700; color:var(--accent-color)">${progressPercent}%</div>
                        <div style="font-size:0.7rem; color:var(--text-secondary); text-transform:uppercase;">Completato</div>
                    </div>
                </div>
                
                <!-- Corpo centrale scorrevole -->
                <div class="quiz-scroll" style="padding: 0;">
                    ${mobileListHtml}
                </div>
                
                <!-- Footer fisso in basso con i bottoni -->
                <div class="quiz-footer" style="padding: 0.75rem; margin-top: 0; background: var(--bg-color);">
                    <button class="btn btn-secondary" onclick="navigate('home')">Home</button>
                    <button class="btn" style="background:var(--error-color); color:white; border:none;" onclick="if(confirm('Azzera progressi?')) clearProgress()">Azzera</button>
                </div>

            </div>
        </div>

    `;
    
    appDiv.innerHTML = html;
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
}

// Start
init();
