//var GG_DATA_LANG_JP = 0;
//var GG_DATA_LANG_EN = 1;

var GG_DATA_LANG_STR = [
    'ja' // JP
    ,'en' //english
    ,'de' // ドイツ
    ,'fr' //フランス
    ,'es' //スペイン
    ,'pt' //ポルトガル
    ,'it' //イタリア
    ,'pl' // ポーランド 3,000 *
    ,'sv' //スウェーデン   900 *
    ,'fi' //フィンランド    500
    ,'nl' // オランダ 2,000   *
    ,'zh' // 台湾(繁体字)(繁体字)
    ,'nb' //ノルウェー     400
    ,'hu' // ハンガリー    1,000
    ,'cs'//チェコ語      cs-CZ
    ,'da'//デンマーク語 da-DK
    ,'et'//エストニア語 et-EE
    ,'el'//ギリシャ語 el-GR
    ,'hr'//クロアチア語 hr-HR
    ,'lv'//ラトビア語   lv-LV
    ,'lt'//リトアニア語 lt-LT
    ,'ro'//ルーマニア語 ro-RO
    ,'sk'//スロバキア語 sk-SK
    ,'sl'//スロベニア語 sl-SI

];
var GG_DATA_LANG_STR_PATTERN1 = [
    'ja-JP' // JP
    ,'en-US' // en
    ,'en-AU'
    ,'en-GB'
    ,'en-IN'
    ,'de-DE'
    ,'fr-FR'
    ,'fr-CA'
    ,'es-ES'
    ,'es-US'
    ,'pt-BR'
    ,'pt-PT'
    ,'it-IT'
    ,'pl-PL' // *
    ,'sv-SE' // *
    ,'fi-FI'
    ,'nl-NL' // *
    ,'zh-TW'
    ,'nb-NO'
    ,'hu-HU'
    ,'cs-CZ'//チェコ語      cs-CZ
    ,'da-DK'//デンマーク語 da-DK
    ,'et-EE'//エストニア語 et-EE
    ,'el-GR'//ギリシャ語 el-GR
    ,'hr-HR'//クロアチア語 hr-HR
    ,'lv-LV'//ラトビア語   lv-LV
    ,'lt-LT'//リトアニア語 lt-LT
    ,'ro-RO'//ルーマニア語 ro-RO
    ,'sk-SK'//スロバキア語 sk-SK
    ,'sl-SI'//スロベニア語 sl-SI
];

var GG_DATA_LANG_STR_PATTERN2 = [
    0
    ,1
    ,1
    ,1
    ,1
    ,2
    ,3
    ,3
    ,4 //'es-ES'
    ,4 //'es-US'
    ,5 //'pt-BR'
    ,5 //'pt-PT'
    ,6 //'it-IT'
    ,7 //'pl-PL'
    ,8 //'sv-SE'
    ,9 //'fi-FI'
    ,10 //'nl-NL'
    ,11 //'zh-TW'
    ,12 //'nb-NO'
    ,13 //'hu-HU'
    ,14 //'cs-CZ'//チェコ語      cs-CZ
    ,15 //'da-DK'//デンマーク語 da-DK
    ,16 //'et-EE'//エストニア語 et-EE
    ,17 //'el-GR'//ギリシャ語 el-GR
    ,18 //'hr-HR'//クロアチア語 hr-HR
    ,19 //'lv-LV'//ラトビア語   lv-LV
    ,20 //'lt-LT'//リトアニア語 lt-LT
    ,21 //'ro-RO'//ルーマニア語 ro-RO
    ,22 //'sk-SK'//スロバキア語 sk-SK
    ,23 //'sl-SI'//スロベニア語 sl-SI

];


var GG_DATA_DICTTIONARY = {
    // 1
    normal_game: ['通常対戦' // JP
   
	,'Normal competition'   // EN
    ,'den normalen Wettbewerb' // ドイツ
    ,'concurrence normale' //フランス
    ,'competencia normal' //スペイン
    ,'concorrência normal' //ポルトガル
    ,'concorrenza normale' //イタリア
    ,'Normalna konkurencja' // ポーランド
    ,'normal konkurrens' //スウェーデン
,'Normaali kilpailu' //フィンランド語 fi
    ,'normale concurrentie' // オランダ
    ,'正常竞争' // 台湾(繁体字)
,'Normal konkurranse'//ノルウェーnb							
	,'Normál verseny' //ハンガリー語hu						
	,'Normal soutěž' //チェコ語cs					
	,'Normale konkurrence' //デンマーク語da				
	,'Normaalne võistlus' //エストニア語et							
	,'Κανονική λειτουργία του ανταγωνισμού' //ギリシャ語el	
	,'Normalno natjecanje' //クロアチア語hr				
	,'Normal konkurence' //ラトビア語lv						
	,'Normalus konkursas' //リトアリア語lt						
	,'Concurența Normal' //ルーマニア語ro				
	,'Normal súťaž' //スロバキア語sk					
	,'Normalno konkurenca' //スロベニア語sl                  
	]
    // 2
    ,campaign_game: ['キャンペーン' 
      
	,'Campaign'
    ,'Kampagne' // ドイツ
    ,'campagne' //フランス
    ,'campaña' //スペイン
    ,'campanha' //ポルトガル
    ,'campagna' //イタリア
    ,'kampania' // ポーランド
    ,'kampanj' //スウェーデン
    ,'Kampanja' //フィンランド語 fi
    ,'campagne' // オランダ
    ,'運動' // 台湾(繁体字)
    ,'nb' //ノルウェー
    ,'hu' // ハンガリー
    ,'Kampanje'//ノルウェーnb                
	,'Kampány' //ハンガリー語hu              
	,'Kampaň' //チェコ語cs           
	,'Kampagne' //デンマーク語da         
	,'Kampaania' //エストニア語et                    
	,'Καμπάνια' //ギリシャ語el                                        
	,'Kampanja' //クロアチア語hr         
	,'Kampaņas' //ラトビア語lv               
	,'Kampanija' //リトアリア語lt                
	,'Campania' //ルーマニア語ro         
	,'Kampaň' //スロバキア語sk           
	,'Akcije' //スロベニア語sl    
    ]
    // 3
    ,many_enemy: ['大量敵登場'
   
	,'Many Enemy'
    ,'viele Feind' // ドイツ
    ,'Beaucoup Enemy' //フランス
    ,'Muchos Enemigo' //スペイン
    ,'muitos Inimigo' //ポルトガル
    ,'Molti Enemy' //イタリア
    ,'Masowe pojawienie wrogiem' // ポーランド
    ,'Mäss fiende utseende' //スウェーデン
    ,'Monta vihollista' //フィンランド語 fi
    ,'Mass vijandelijke verschijning' // オランダ
    ,'許多敵人' // 台湾(繁体字)
    ,'nb' //ノルウェー
    ,'hu' // ハンガリー
,'Mange Enemy'//ノルウェーnb             
	,'Sok Enemy' //ハンガリー語hu            
	,'Mnozí Enemy' //チェコ語cs      
	,'Mange Enemy' //デンマーク語da      
	,'Paljud Enemy' //エストニア語et                 
	,'Πολλοί Εχθρός' //ギリシャ語el                                 
	,'Mnogi Enemy' //クロアチア語hr      
	,'Daudzi Enemy' //ラトビア語lv           
	,'Daugelis Enemy' //リトアリア語lt           
	,'Mulți Enemy' //ルーマニア語ro      
	,'Mnohí Enemy' //スロバキア語sk      
	,'Veliko Enemy' //スロベニア語sl    
	]
    
    // 4
    ,stroge_enemy: ['強敵登場'
   
	,'Strong Enemy'
    ,'starken Feind' // ドイツ
    ,'forte Enemy' //フランス
    ,'fuerte Enemigo' //スペイン
    ,'forte Inimigo' //ポルトガル
    ,'forte Enemy' //イタリア
    ,'groźny wygląd' // ポーランド
    ,'formidable utseende' //スウェーデン
    ,'Vahva Enemy' //フィンランド語 fi
    ,'formidable verschijning' // オランダ
    ,'強敵' // 台湾(繁体字)
    ,'nb' //ノルウェー
    ,'hu' // ハンガリー
,'Sterk Enemy'//ノルウェーnb             
	,'Erős ellenség' //ハンガリー語hu        
	,'Strong Enemy' //チェコ語cs     
	,'Stærk Enemy' //デンマーク語da      
	,'Tugev Enemy' //エストニア語et                  
	,'Ισχυρή Εχθρός' //ギリシャ語el                                 
	,'Jaka Enemy' //クロアチア語hr       
	,'Strong Enemy' //ラトビア語lv           
	,'Galingo priešo' //リトアリア語lt           
	,'Inamic puternic' //ルーマニア語ro  
	,'Strong Enemy' //スロバキア語sk     
	,'Močna Enemy' //スロベニア語sl
    ]
    
    // 5
    ,game_time: ['ゲーム時間'
 
	,'Game Long'
    ,'Spiel Lange' // ドイツ
    ,'jeu long' //フランス
    ,'Juego largo' //スペイン
    ,'jogo longo' //ポルトガル
    ,'Gioco lungo' //イタリア
    ,'Czas gry' // ポーランド
    ,'Game Time' //スウェーデン
    ,'Game Long' //フィンランド語 fi
    ,'Game Time' // オランダ
    ,'龍遊戲' // 台湾(繁体字)
,'Game Long'//ノルウェーnb               
	,'Game Long' //ハンガリー語hu            
	,'Game Long' //チェコ語cs        
	,'Spillet Long' //デンマーク語da     
	,'Mäng Long ' //エストニア語et                   
	,'Παιχνίδι Long' //ギリシャ語el                                   
	,'Igra Long' //クロアチア語hr        
	,'Game Long' //ラトビア語lv              
	,'Žaidimas Ilgas' //リトアリア語lt           
	,'Joc pe termen lung' //ルーマニア語ro              
	,'Game Long' //スロバキア語sk        
	,'Igra Long' //スロベニア語sl
    ]
    
    // 6
    ,round: ['ラウンド'
        ,'Round'
    ,'Runde' // ドイツ
    ,'tour' //フランス
    ,'redondo' //スペイン
    ,'volta' //ポルトガル
    ,'round' //イタリア
    ,'okrągły' // ポーランド
    ,'runda' //スウェーデン
    ,'Round' //フィンランド語 fi
    ,'rondje' // オランダ
    ,'圓' // 台湾(繁体字)
,'Round'//ノルウェーnb                   
	,'Kerek' //ハンガリー語hu                
	,'Kolo' //チェコ語cs             
	,'Round' //デンマーク語da            
	,'Round' //エストニア語et                        
	,'Γύρος' //ギリシャ語el                                               
	,'Round' //クロアチア語hr            
	,'Round' //ラトビア語lv                  
	,'Apvalus' //リトアリア語lt                  
	,'Round' //ルーマニア語ro            
	,'Koleso' //スロバキア語sk           
	,'Round' //スロベニア語sl
    ]
    
    // 7
    ,hande: ['ハンデ'
             ,'hande'
    ,'hande' // ドイツ
    ,'hande' //フランス
    ,'hande' //スペイン
    ,'hande' //ポルトガル
    ,'hande' //イタリア
    ,'handicap' // ポーランド
    ,'handikapp' //スウェーデン
    ,'Hande' //フィンランド語 fi
    ,'handicap' // オランダ
    ,'喊得' // 台湾(繁体字)
,'Hande'//ノルウェーnb                   
	,'Hande' //ハンガリー語hu                
	,'Hande' //チェコ語cs            
	,'Hande' //デンマーク語da            
	,'hande' //エストニア語et                        
	,'hande' //ギリシャ語el                                                  
	,'Hande' //クロアチア語hr            
	,'Hande' //ラトビア語lv                  
	,'Hande' //リトアリア語lt                    
	,'Hande' //ルーマニア語ro            
	,'Hande' //スロバキア語sk            
	,'Hande' //スロベニア語sl
    ]
    
    // 8
    ,end_turn: [ '終了ターン'
 
	,'End Turn'
        
    ,'Runde beenden' // ドイツ
    ,'Fin du tour' //フランス
    ,'End Turn' //スペイン
    ,'End Turn' //ポルトガル
    ,'Fine turno' //イタリア
    ,'kolej Exit' // ポーランド
    ,'Avsluta tur' //スウェーデン
    ,'End Turn' //フィンランド語 fi
    ,'afrit' // オランダ
    ,'轉完' // 台湾(繁体字)
,'End Turn'//ノルウェーnb                
	,'Kör vége' //ハンガリー語hu             
	,'End Turn' //チェコ語cs         
	,'End Turn' //デンマーク語da         
	,'Käigu lõpp' //エストニア語et                   
	,'Τελειώσει τη σειρά' //ギリシャ語el                       
	,'Kraj Uključite' //クロアチア語hr   
	,'End Turn' //ラトビア語lv               
	,'Pabaiga Įjunkite' //リトアリア語lt         
	,'Turn End' //ルーマニア語ro         
	,'End Turn' //スロバキア語sk         
	,'End Turn' //スロベニア語sl
    ]
    
    // 9
    ,map: [ '地図'
           ,'map'
    ,'Karte' // ドイツ
    ,'carte' //フランス
    ,'mapa' //スペイン
    ,'mapa' //ポルトガル
    ,'carta' //イタリア
    ,'mapa' // ポーランド
    ,'karta' //スウェーデン
    ,'Kartta' //フィンランド語 fi
    ,'kaart' // オランダ
    ,'地圖' // 台湾(繁体字)
,'Kart'//ノルウェーnb                    
	,'térkép' //ハンガリー語hu               
	,'map' //チェコ語cs              
	,'kort' //デンマーク語da             
	,'map' //エストニア語et                          
	,'χάρτη' //ギリシャ語el                                              
	,'karta' //クロアチア語hr            
	,'map' //ラトビア語lv                    
	,'map' //リトアリア語lt                      
	,'harta' //ルーマニア語ro            
	,'Máp' //スロバキア語sk              
	,'map' //スロベニア語sl
    ]
    
    // 10
    ,upper_unit: [
        '上位ユニット'
        ,'Upper Unit'
    ,'obere Einheit' // ドイツ
    ,'Unité supérieure' //フランス
    ,'Unidad Superior' //スペイン
    ,'Unidade superior' //ポルトガル
    ,'Unità superiore' //イタリア
    ,'zespół górny' // ポーランド
    ,'den övre enheten' //スウェーデン
    ,'Yläosa' //フィンランド語 fi
    ,'de bovenste eenheid' // オランダ
    ,'上部單元' // 台湾(繁体字)
,'Upper Unit'//ノルウェーnb              
	,'Felső-Unit' //ハンガリー語hu           
	,'Horní Unit' //チェコ語cs       
	,'Upper Unit' //デンマーク語da       
	,'Upper Unit' //エストニア語et                   
	,'Άνω Μονάδα' //ギリシャ語el                                      
	,'Gornja jedinica' //クロアチア語hr  
	,'Upper Unit' //ラトビア語lv             
	,'Viršutinė vienetai' //リトアリア語lt       
	,'Unitate de Sus' //ルーマニア語ro   
	,'Horná Unit' //スロバキア語sk       
	,'Zgornja Unit' //スロベニア語sl
    ]
    
    // 11
    ,lost_turn: [
         'ロストターン'
        ,'lost turn'
    ,'verlor wiederum' // ドイツ
    ,'perdu son tour' //フランス
    ,'A su vez perdido' //スペイン
    ,'por sua vez, perdeu' //ポルトガル
    ,'turno perso' //イタリア
    ,'utracone kolej' // ポーランド
    ,'förlorat tur' //スウェーデン
    ,'Kadonnut vuoro' //フィンランド語 fi
    ,'verloren turn' // オランダ
    ,'失去了轉' // 台湾(繁体字)
,'Lost turn'//ノルウェーnb               
	,'elveszett fordulat' //ハンガリー語hu   
	,'ztratil obrat' //チェコ語cs    
	,'mistede turn' //デンマーク語da     
	,'kaotas omakorda' //エストニア語et              
	,'χάσει τη σειρά' //ギリシャ語el                               
	,'izgubili red' //クロアチア語hr     
	,'zaudēja kārta' //ラトビア語lv          
	,'prarado posūkis' //リトアリア語lt          
	,'a pierdut rândul său,' //ルーマニア語ro           
	,'Stratil obrat' //スロバキア語sk    
	,'izgubili na vrsti' //スロベニア語sl
    ]
    
    // 12
    ,unit_number:[
        'ユニット数'
        ,'Number of units'
    ,'Anzahl der Einheiten' // ドイツ
    ,'Nombre d\'unités' //フランス
    ,'Número de unidades' //スペイン
    ,'Número de unidades' //ポルトガル
    ,'Numero di unità' //イタリア
    ,'Liczba jednostek' // ポーランド
    ,'antal enheter' //スウェーデン
    ,'Yksiköiden lukumäärä' //フィンランド語 fi
    ,'aantal eenheden' // オランダ
    ,'單位數量' // 台湾(繁体字)
,'Antall enheter'//ノルウェーnb          
	,'Az egységek száma' //ハンガリー語hu    
	,'Počet jednotek' //チェコ語cs   
	,'Antal enheder' //デンマーク語da    
	,'Number üksuste' //エストニア語et               
	,'Αριθμός μονάδων' //ギリシャ語el                             
	,'Broj jedinica' //クロアチア語hr    
	,'Vienību skaits' //ラトビア語lv         
	,'Vienetų skaičius' //リトアリア語lt         
	,'Numărul de unități' //ルーマニア語ro
	,'Počet jednotiek' //スロバキア語sk  
	,'Število enot' //スロベニア語sl
    ]
    
    // 13 
    ,friend_team: [
        '味方'
        ,'ally'
    ,'Verbündete' // ドイツ
    ,'allié' //フランス
    ,'aliado' //スペイン
    ,'aliado' //ポルトガル
    ,'alleato' //イタリア
    ,'sojusznik' // ポーランド
    ,'Ally' //スウェーデン
    ,'Ally' //フィンランド語 fi
    ,'bondgenoot' // オランダ
    ,'盟友' // 台湾(繁体字)
,'Ally'//ノルウェーnb                    
	,'szövetségese' //ハンガリー語hu         
	,'spojenec' //チェコ語cs         
	,'allieret' //デンマーク語da         
	,'liitlane' //エストニア語et                     
	,'σύμμαχος' //ギリシャ語el                                         
	,'saveznik' //クロアチア語hr         
	,'sabiedrotais' //ラトビア語lv           
	,'sąjungininkas' //リトアリア語lt            
	,'aliat' //ルーマニア語ro            
	,'spojenec' //スロバキア語sk         
	,'zaveznik' //スロベニア語sl
    ]
    
    // 14
    ,enemy_team: [
        '敵'
        ,'enemy'
    ,'Feind' // ドイツ
    ,'ennemi' //フランス
    ,'enemigo' //スペイン
    ,'inimigo' //ポルトガル
    ,'nemico' //イタリア
    ,'wróg' // ポーランド
    ,'fiende' //スウェーデン
    ,'Enemy' //フィンランド語 fi
    ,'vijand' // オランダ
    ,'敵人' // 台湾(繁体字)
,'Enemy'//ノルウェーnb                   
	,'ellenség' //ハンガリー語hu             
	,'nepřítel' //チェコ語cs         
	,'fjende' //デンマーク語da           
	,'vaenlane' //エストニア語et                     
	,'εχθρός' //ギリシャ語el                                             
	,'neprijatelj' //クロアチア語hr      
	,'ienaidnieks' //ラトビア語lv            
	,'priešas' //リトアリア語lt                  
	,'dușman' //ルーマニア語ro           
	,'Nepriateľ' //スロバキア語sk        
	,'sovražnik' //スロベニア語sl
    ]
    
    // 15
    ,game_option: [
        'オプション'
        ,'option'
    ,'Option' // ドイツ
    ,'option' //フランス
    ,'opción' //スペイン
    ,'opção' //ポルトガル
    ,'opzione' //イタリア
    ,'Opcje' // ポーランド
    ,'Val' //スウェーデン
    ,'Option' //フィンランド語 fi
    ,'opties' // オランダ
    ,'選項' // 台湾(繁体字)
,'Option'//ノルウェーnb                  
	,'Opció' //ハンガリー語hu                
	,'možnost' //チェコ語cs          
	,'muligheden' //デンマーク語da       
	,'võimalus' //エストニア語et                     
	,'επιλογή' //ギリシャ語el                                          
	,'opcija' //クロアチア語hr           
	,'variants' //ラトビア語lv               
	,'variantas' //リトアリア語lt                
	,'opțiunea' //ルーマニア語ro         
	,'Možnosť' //スロバキア語sk          
	,'opcija' //スロベニア語sl
    ]
    
    // 16
    ,select_team: [
        'チーム選択'
        ,'select team'
    ,'ausgewähltes Team' // ドイツ
    ,'sélectionnez équipe' //フランス
    ,'selecto equipo' //スペイン
    ,'selecione equipe' //ポルトガル
    ,'select squadra' //イタリア
    ,'wybór zespołu' // ポーランド
    ,'Laguttagning' //スウェーデン
    ,'Valitse joukkue' //フィンランド語 fi
    ,'team selectie' // オランダ
    ,'選擇球隊' // 台湾(繁体字)
,'Select team'//ノルウェーnb             
	,'válasszuk csapat' //ハンガリー語hu     
	,'select tým' //チェコ語cs       
	,'Vælg hold' //デンマーク語da        
	,'valige meeskond' //エストニア語et              
	,'εκλεκτή' //ギリシャ語el                                          
	,'odaberite tim' //クロアチア語hr    
	,'izvēlieties komanda' //ラトビア語lv    
	,'rinktinė' //リトアリア語lt                 
	,'Selecteaza echipa' //ルーマニア語ro
	,'Select tím' //スロバキア語sk       
	,'izberite team' //スロベニア語sl
    ]
    
    // 17
    ,select_unit: [
        'ユニット選択'
        ,'select unit'
    ,'Auswahleinheit' // ドイツ
    ,'sélectionnez l\'unité' //フランス
    ,'seleccione la unidad' //スペイン
    ,'selecione unidade' //ポルトガル
    ,'selezionare unità' //イタリア
    ,'wybór jednostki' // ポーランド
    ,'enhet val' //スウェーデン
    ,'Valitse laite' //フィンランド語 fi
    ,'unit selectie' // オランダ
    ,'選擇單位' // 台湾(繁体字)
,'Velg enhet'//ノルウェーnb              
	,'válasszuk egység' //ハンガリー語hu     
	,'Zvolte jednotku' //チェコ語cs  
	,'Vælg enhed' //デンマーク語da       
	,'valige ühik' //エストニア語et                  
	,'Επιλογή μονάδας' //ギリシャ語el                             
	,'odaberite jedinicu' //クロアチア語hr              
	,'izvēlieties vienība' //ラトビア語lv    
	,'pasirinkite vienetas' //リトアリア語lt     
	,'selectați unitatea' //ルーマニア語ro              
	,'Zvoľte jednotku' //スロバキア語sk  
	,'izberite enota' //スロベニア語sl
    ]
    
    // 18
    ,game_time_normal: [
        '通常'
        ,'normal'
        
    ,'normal' // ドイツ
    ,'normal' //フランス
    ,'normal' //スペイン
    ,'normal' //ポルトガル
    ,'normale' //イタリア
    ,'zwykle' // ポーランド
    ,'vanligtvis' //スウェーデン
    ,'Normaali' //フィンランド語 fi
    ,'doorgaans' // オランダ
    ,'通常' // 台湾(繁体字)
,'Normal'//ノルウェーnb                  
	,'normál' //ハンガリー語hu               
	,'normální' //チェコ語cs         
	,'normale' //デンマーク語da          
	,'normaalne' //エストニア語et                    
	,'κανονική' //ギリシャ語el                                        
	,'normalno' //クロアチア語hr         
	,'normāls' //ラトビア語lv                
	,'normalu' //リトアリア語lt                  
	,'normale' //ルーマニア語ro          
	,'Normálne' //スロバキア語sk         
	,'normalno' //スロベニア語sl
    ]
    
    // 19
    ,game_time_short: [
        '短い'
        ,'short'
    ,'kurz' // ドイツ
    ,'court' //フランス
    ,'corto' //スペイン
    ,'baixo' //ポルトガル
    ,'breve' //イタリア
    ,'krótki' // ポーランド
    ,'kort' //スウェーデン
    ,'Lyhyt' //フィンランド語 fi
    ,'kort' // オランダ
    ,'短' // 台湾(繁体字)
,'Short'//ノルウェーnb                   
	,'short' //ハンガリー語hu                
	,'krátký' //チェコ語cs           
	,'short' //デンマーク語da            
	,'lühike' //エストニア語et                       
	,'κοντά»' //ギリシャ語el                                             
	,'kratka' //クロアチア語hr           
	,'īsu' //ラトビア語lv                    
	,'trumpas' //リトアリア語lt                  
	,'scurt' //ルーマニア語ro            
	,'Krátky' //スロバキア語sk           
	,'kratek' //スロベニア語sl
    ]
    
    // 20
    ,game_time_long: [
        '長い'
        ,'long'
    ,'lang' // ドイツ
    ,'longue' //フランス
    ,'largo' //スペイン
    ,'grandes' //ポルトガル
    ,'lungo' //イタリア
    ,'długo' // ポーランド
    ,'lång' //スウェーデン
    ,'Pitkä' //フィンランド語 fi
    ,'lang' // オランダ
    ,'長' // 台湾(繁体字)
,'Long'//ノルウェーnb                    
	,'hosszú' //ハンガリー語hu               
	,'dlouhý' //チェコ語cs           
	,'lang' //デンマーク語da             
	,'pikk' //エストニア語et                         
	,'μακρύ»' //ギリシャ語el                                             
	,'dugo' //クロアチア語hr             
	,'gara' //ラトビア語lv                   
	,'ilgai' //リトアリア語lt                    
	,'lung' //ルーマニア語ro             
	,'Dlhý' //スロバキア語sk             
	,'dolg' //スロベニア語sl
    ]
    
    
    // 21
    ,game_first: [
        '先行'
        ,'first'
    ,'zuerst' // ドイツ
    ,'premier' //フランス
    ,'primero' //スペイン
    ,'primeiro' //ポルトガル
    ,'primo' //イタリア
    ,'poprzedzający' // ポーランド
    ,'föregånde' //スウェーデン
    ,'Ensimmäinen' //フィンランド語 fi
    ,'voorafgaand' // オランダ
    ,'前' // 台湾(繁体字)
,'First'//ノルウェーnb                   
	,'első' //ハンガリー語hu                 
	,'První' //チェコ語cs            
	,'først' //デンマーク語da            
	,'Esimene' //エストニア語et                      
	,'πρώτη' //ギリシャ語el                                              
	,'prvi' //クロアチア語hr             
	,'Pirmais' //ラトビア語lv                
	,'Pirmasis' //リトアリア語lt                 
	,'primul' //ルーマニア語ro           
	,'Prvý' //スロバキア語sk             
	,'prvi' //スロベニア語sl
    ]
    
    // 22
    ,winning: [
        '勝利条件'
        ,'Victory Conditions'
    ,'Siegbedingungen' // ドイツ
    ,'Conditions de victoire' //フランス
    ,'Condiciones de Victoria' //スペイン
    ,'Condições de Vitória' //ポルトガル
    ,'Condizioni di Vittoria' //イタリア
    ,'Warunki zwycięstwa' // ポーランド
    ,'Victory villkor' //スウェーデン
    ,'Victory ehdot' //フィンランド語 fi
    ,'Victory voorwaarden' // オランダ
    ,'勝利條件' // 台湾(繁体字)
,'Victory betingelser'//ノルウェーnb     
	,'Győzelmi feltételek' //ハンガリー語hu  
	,'Victory podmínky' //チェコ語cs 
	,'Victory Betingelser' //デンマーク語da             
	,'Võit tingimused' //エストニア語et              
	,'Προϋποθέσεις νίκη' //ギリシャ語el                          
	,'Uvjeti Victory' //クロアチア語hr   
	,'Victory nosacījumi' //ラトビア語lv                    
	,'Pergalė sąlygos ' //リトアリア語lt         
	,'Condiții de victorie' //ルーマニア語ro            
	,'Victory podmienky' //スロバキア語sk
	,'Victory Pogoji' //スロベニア語sl
    ]
        
    // 23
    ,game: [
        'ゲーム '
        ,'game'
    ,'Spiel' // ドイツ
    ,'jeu' //フランス
    ,'juego' //スペイン
    ,'jogo' //ポルトガル
    ,'gioco' //イタリア
    ,'gra' // ポーランド
    ,'spel' //スウェーデン
    ,'Peli' //フィンランド語 fi
    ,'spel' // オランダ
    ,'遊戲' // 台湾(繁体字)
,'Spillet'//ノルウェーnb                 
	,'játék' //ハンガリー語hu                
	,'hra' //チェコ語cs              
	,'spil' //デンマーク語da             
	,'Mäng' //エストニア語et                         
	,'παιχνίδι' //ギリシャ語el                                        
	,'igra' //クロアチア語hr             
	,'Spēle' //ラトビア語lv                  
	,'Žaidimas' //リトアリア語lt                 
	,'joc' //ルーマニア語ro              
	,'hra' //スロバキア語sk              
	,'Igra' //スロベニア語sl
    ]
    
    // 24
    // menu option
    ,setting: [
        '設定'
        ,'setting'
    ,'Einstellung' // ドイツ
    ,'réglage' //フランス
    ,'ajuste' //スペイン
    ,'cenário' //ポルトガル
    ,'ambiente' //イタリア
    ,'ustawienie' // ポーランド
    ,'inställning' //スウェーデン
    ,'Setting' //フィンランド語 fi
    ,'omgeving' // オランダ
    ,'環境' // 台湾(繁体字)
,'Setting'//ノルウェーnb                 
	,'beállítás' //ハンガリー語hu            
	,'nastavení' //チェコ語cs        
	,'indstilling' //デンマーク語da      
	,'seade' //エストニア語et                        
	,'ρύθμιση' //ギリシャ語el                                          
	,'Postavka' //クロアチア語hr         
	,'iestatījums' //ラトビア語lv            
	,'nustatymas' //リトアリア語lt               
	,'setarea' //ルーマニア語ro          
	,'Nastavenie' //スロバキア語sk       
	,'nastavitev' //スロベニア語sl
    ]
    
    // 25
    ,spped: [
        '速度'
        ,'speed'
    ,'speed' // ドイツ
    ,'vitesse' //フランス
    ,'velocidad' //スペイン
    ,'velocidade' //ポルトガル
    ,'velocità' //イタリア
    ,'prędkość' // ポーランド
    ,'hastighet' //スウェーデン
    ,'Speed' //フィンランド語 fi
    ,'snelheid' // オランダ
    ,'速度' // 台湾(繁体字)
,'Speed'//ノルウェーnb                   
	,'sebesség' //ハンガリー語hu             
	,'rychlost' //チェコ語cs         
	,'fart' //デンマーク語da             
	,'kiirus' //エストニア語et                       
	,'ταχύτητα' //ギリシャ語el                                        
	,'Brzina' //クロアチア語hr           
	,'ātrums' //ラトビア語lv                 
	,'greitis' //リトアリア語lt                  
	,'viteză' //ルーマニア語ro           
	,'Rýchlosť' //スロバキア語sk         
	,'hitrost' //スロベニア語sl
    ]
    // 26
    ,se_audio: [
        'SE音'
        ,'SE sound'
    ,'SE Sound' // ドイツ
    ,'son SE' //フランス
    ,'sonido SE' //スペイン
    ,'som SE' //ポルトガル
    ,'suono SE' //イタリア
    ,'dźwięk SE' // ポーランド
    ,'SE ljud' //スウェーデン
    ,'SE ääni' //フィンランド語 fi
    ,'SE geluid' // オランダ
    ,'SE聲音' // 台湾(繁体字)
,'SE lyd'//ノルウェーnb                  
	,'SE hang' //ハンガリー語hu              
	,'SE zvuk' //チェコ語cs          
	,'SE lyd' //デンマーク語da           
	,'SE heli' //エストニア語et                      
	,'Ήχος SE' //ギリシャ語el                                              
	,'SE zvuk' //クロアチア語hr          
	,'SE skaņas' //ラトビア語lv              
	,'SE garso' //リトアリア語lt                 
	,'Sunet SE' //ルーマニア語ro         
	,'SE zvuk' //スロバキア語sk          
	,'SE zvok' //スロベニア語sl
    ]
        
    //27
    // setting tropy
    ,game_mode: [
        'モード'
        ,'mode'
    ,'Modus' // ドイツ
    ,'mode' //フランス
    ,'modo' //スペイン
    ,'modo' //ポルトガル
    ,'modo' //イタリア
    ,'tryb' // ポーランド
    ,'läge' //スウェーデン
    ,'Mode' //フィンランド語 fi
    ,'mode' // オランダ
    ,'模式' // 台湾(繁体字)
,'Mode'//ノルウェーnb                    
	,'üzemmód' //ハンガリー語hu              
	,'Režim' //チェコ語cs            
	,'tilstand' //デンマーク語da         
	,'režiim' //エストニア語et                       
	,'λειτουργία' //ギリシャ語el                                    
	,'način' //クロアチア語hr            
	,'mode' //ラトビア語lv                   
	,'režimas' //リトアリア語lt                  
	,'modul' //ルーマニア語ro            
	,'Režim' //スロバキア語sk            
	,'način' //スロベニア語sl
    ]
    
    // 28
    // Game End
    ,game_end_win: [
        '勝利'
        ,'Win'
    ,'Sieg' // ドイツ
    ,'victoire' //フランス
    ,'victoria' //スペイン
    ,'ganhar' //ポルトガル
    ,'vittoria' //イタリア
    ,'zwycięstwo' // ポーランド
    ,'Victory' //スウェーデン
    ,'Win' //フィンランド語 fi
    ,'overwinning' // オランダ
    ,'贏' // 台湾(繁体字)
,'Win'//ノルウェーnb                     
	,'Win' //ハンガリー語hu                  
	,'Win' //チェコ語cs              
	,'Vind' //デンマーク語da             
	,'Win' //エストニア語et                          
	,'Νίκη' //ギリシャ語el                                                
	,'Pobijediti' //クロアチア語hr       
	,'Win' //ラトビア語lv                    
	,'Laimėk' //リトアリア語lt                   
	,'Win' //ルーマニア語ro              
	,'Win' //スロバキア語sk              
	,'Zmaga' //スロベニア語sl
    ]
    
    // 29 **************************************
    ,game_end_lost: [
        '敗退'
        ,'Lose'
    ,'verlieren' // ドイツ
    ,'perdre' //フランス
    ,'eliminado' //スペイン
    ,'eliminado' //ポルトガル
    ,'eliminata' //イタリア
    ,'Wyeliminowany' // ポーランド
    ,'utslagen' //スウェーデン
    ,'Lose' //フィンランド語 fi
    ,'geëlimineerd' // オランダ
    ,'淘汰' // 台湾(繁体字)
,'Lose'//ノルウェーnb                    
	,'Elveszít' //ハンガリー語hu             
	,'Lose' //チェコ語cs             
	,'Lose' //デンマーク語da             
	,'Lose' //エストニア語et                         
	,'Ήττα' //ギリシャ語el                                                
	,'Izgubiti' //クロアチア語hr         
	,'Lose' //ラトビア語lv                   
	,'Lose' //リトアリア語lt                     
	,'Pierde' //ルーマニア語ro           
	,'Lose' //スロバキア語sk             
	,'Lose' //スロベニア語sl
    ]
    
    //30
    ,game_end_back_prev_round: [
        '前ラウンド'
        ,'Prev Round'
    ,'zurück Round' // ドイツ
    ,'Précédent ronde' //フランス
    ,'Anterior Ronda' //スペイン
    ,'Voltar redonda' //ポルトガル
    ,'Prev rotonda' //イタリア
    ,'poprzedniej rundzie' // ポーランド
    ,'den föregående omgången' //スウェーデン
    ,'Edellinen kierros' //フィンランド語 fi
    ,'de vorige ronde' // オランダ
    ,'上一個回合' // 台湾(繁体字)
,'Forrige Round'//ノルウェーnb           
	,'Előző forduló' //ハンガリー語hu        
	,'Prev Round' //チェコ語cs       
	,'Forrige runde' //デンマーク語da    
	,'Eelmine voor' //エストニア語et                 
	,'Γύρος Προηγούμενο' //ギリシャ語el                         
	,'Prethodna Okrugli' //クロアチア語hr
	,'Iepriekšējā Round' //ラトビア語lv      
	,'Buvęs turas' //リトアリア語lt              
	,'Anterior Round' //ルーマニア語ro   
	,'Prev Round' //スロバキア語sk       
	,'Prejšnja Round' //スロベニア語sl
    ]
    
    // 31
    ,game_end_back_new_campaign: [
        'ニューキャンペーン'
        ,'New Campaign'
    ,'neue Kampagne' // ドイツ
    ,'nouvelle campagne' //フランス
    ,'Nueva Campaña' //スペイン
    ,'nova campanha' //ポルトガル
    ,'Nuova campagna' //イタリア
    ,'Nowa kampania' // ポーランド
    ,'ny kampanj' //スウェーデン
    ,'Uusi kampanja' //フィンランド語 fi
    ,'nieuwe campagne' // オランダ
    ,'新廣告系列' // 台湾(繁体字)
,'Ny kampanje'//ノルウェーnb             
	,'Új kampány' //ハンガリー語hu           
	,'Nová kampaň' //チェコ語cs      
	,'Ny kampagne' //デンマーク語da      
	,'Uus kampaania' //エストニア語et                
	,'Νέα καμπάνια' //ギリシャ語el                                  
	,'Nova kampanja' //クロアチア語hr    
	,'Jauna kampaņa' //ラトビア語lv          
	,'Nauja kampanija' //リトアリア語lt          
	,'Campanie nouă' //ルーマニア語ro    
	,'Nová kampaň' //スロバキア語sk      
	,'Nova akcija' //スロベニア語sl
    ]
    
    // 32
    ,game_end_canpaign_complete: [
        'キャンペーンクリア'
        ,'Complete'
    ,'komplett' // ドイツ
    ,'complet' //フランス
    ,'completo' //スペイン
    ,'completo' //ポルトガル
    ,'completo' //イタリア
    ,'kompletny' // ポーランド
    ,'komplett' //スウェーデン
    ,'Täydellinen' //フィンランド語 fi
    ,'compleet' // オランダ
    ,'完成' // 台湾(繁体字)
,'Complete'//ノルウェーnb                
	,'Teljes' //ハンガリー語hu               
	,'Complete' //チェコ語cs         
	,'Complete' //デンマーク語da         
	,'Täielik' //エストニア語et                      
	,'Πλήρης' //ギリシャ語el                                             
	,'Cijela' //クロアチア語hr           
	,'Complete' //ラトビア語lv               
	,'Visiškas' //リトアリア語lt                 
	,'Complet' //ルーマニア語ro          
	,'Complete' //スロバキア語sk         
	,'Popolna' //スロベニア語sl
    ]
    
    // 33
    ,game_end_team_complete: [
        'チーム戦クリア'
        ,'Complete'
    ,'komplett' // ドイツ
    ,'complet' //フランス
    ,'completo' //スペイン
    ,'completo' //ポルトガル
    ,'completo' //イタリア
    ,'kompletny' // ポーランド
    ,'komplett' //スウェーデン
    ,'Täydellinen' //フィンランド語 fi
    ,'compleet' // オランダ
    ,'完成' // 台湾(繁体字)
,'Complete'//ノルウェーnb                
	,'Teljes' //ハンガリー語hu               
	,'Complete' //チェコ語cs         
	,'Complete' //デンマーク語da         
	,'Täielik' //エストニア語et                      
	,'Πλήρης' //ギリシャ語el                                             
	,'Cijela' //クロアチア語hr           
	,'Complete' //ラトビア語lv               
	,'Visiškas' //リトアリア語lt                 
	,'Complet' //ルーマニア語ro          
	,'Complete' //スロバキア語sk         
	,'Popolna' //スロベニア語sl
    ]
    
    // 34
    ,game_end_mvp: [
        'MVP'
        ,'MVP'
    ,'MVP' // ドイツ
    ,'MVP' //フランス
    ,'MVP' //スペイン
    ,'MVP' //ポルトガル
    ,'MVP' //イタリア
    ,'MVP' // ポーランド
    ,'MVP' //スウェーデン
    ,'MVP' //フィンランド語 fi
    ,'MVP' // オランダ
    ,'MVP' // 台湾(繁体字)
,'MVP'//ノルウェーnb                     
	,'MVP' //ハンガリー語hu                  
	,'MVP' //チェコ語cs              
	,'MVP' //デンマーク語da              
	,'MVP' //エストニア語et                          
	,'MVP' //ギリシャ語el                                                    
	,'MVP' //クロアチア語hr              
	,'MVP' //ラトビア語lv                    
	,'MVP' //リトアリア語lt                      
	,'MVP' //ルーマニア語ro              
	,'MVP' //スロバキア語sk              
	,'MVP' //スロベニア語sl
    ]
        
    // 35 
    ,game_end_unit_list_born: [
        '召喚'
        ,'Summons'
    ,'Vorladung' // ドイツ
    ,'sommation' //フランス
    ,'citación' //スペイン
    ,'convocação' //ポルトガル
    ,'convocazione' //イタリア
    ,'wezwanie' // ポーランド
    ,'kallelse' //スウェーデン
    ,'Kutsu' //フィンランド語 fi
    ,'dagvaarding' // オランダ
    ,'傳票' // 台湾(繁体字)
,'Innkalling'//ノルウェーnb              
	,'Idézés' //ハンガリー語hu               
	,'Předvolání' //チェコ語cs       
	,'Indkaldelse' //デンマーク語da      
	,'Kutse' //エストニア語et                        
	,'Κλήτευση' //ギリシャ語el                                        
	,'Poziv' //クロアチア語hr            
	,'Pavēste' //ラトビア語lv                
	,'Šaukimas' //リトアリア語lt                 
	,'Convocarea' //ルーマニア語ro       
	,'Predvolanie' //スロバキア語sk      
	,'Poziv' //スロベニア語sl
    ]
    
    // 36
    ,game_end_unit_list_level: [
        'レベル'
        ,'Level'
    ,'Höhe' // ドイツ
    ,'niveau' //フランス
    ,'nivel' //スペイン
    ,'nível' //ポルトガル
    ,'livello' //イタリア
    ,'poziom' // ポーランド
    ,'nivå' //スウェーデン
    ,'Taso' //フィンランド語 fi
    ,'niveau' // オランダ
    ,'級別' // 台湾(繁体字)
,'Niva'//ノルウェーnb                    
	,'A szint' //ハンガリー語hu              
	,'Level' //チェコ語cs            
	,'Niveau' //デンマーク語da           
	,'Tase' //エストニア語et                         
	,'Επίπεδο' //ギリシャ語el                                          
	,'Razina' //クロアチア語hr           
	,'Level' //ラトビア語lv                  
	,'Lygis' //リトアリア語lt                    
	,'Nivel' //ルーマニア語ro            
	,'Level' //スロバキア語sk            
	,'Raven' //スロベニア語sl
    ]
    
    //37
    ,game_end_unit_list_exp: [
        '経験値'
        ,'Exp'
    ,'exp' // ドイツ
    ,'exp' //フランス
    ,'exp' //スペイン
    ,'exp' //ポルトガル
    ,'exp' //イタリア
    ,'exp' // ポーランド
    ,'exp' //スウェーデン
    ,'fi' //フィンランド
    ,'Exp' //フィンランド語 fi
    ,'exp' // 台湾(繁体字)
,'Exp'//ノルウェーnb                     
	,'Profi' //ハンガリー語hu                
	,'Exp' //チェコ語cs              
	,'Exp' //デンマーク語da              
	,'Väga hea' //エストニア語et                     
	,'ΛΗΞΗ' //ギリシャ語el                                               
	,'Exp' //クロアチア語hr              
	,'Exp' //ラトビア語lv                    
	,'Exp' //リトアリア語lt                      
	,'Exp' //ルーマニア語ro              
	,'Exp' //スロバキア語sk              
	,'Exp' //スロベニア語sl
    ]
    
    //38
    ,game_end_unit_list_done: [
        '操作'
        ,'operation'
    ,'Betrieb' // ドイツ
    ,'opération' //フランス
    ,'Operación' //スペイン
    ,'operação' //ポルトガル
    ,'operazione' //イタリア
    ,'operacja' // ポーランド
    ,'Funktion' //スウェーデン
    ,'toiminta' //フィンランド語 fi
    ,'operatie' // オランダ
    ,'操作' // 台湾(繁体字)
	,'operasjon'//ノルウェーnb           
	,'Működés' //ハンガリー語hu             

	,'Provoz' //チェコ語cs         
	,'betjening' //デンマーク語da      
	,'Operation' //エストニア語et                   
	,'λειτουργία' //ギリシャ語el                                      
	,'Rad' //クロアチア語hr        
	,'darbība' //ラトビア語lv             
	,'darbība' //リトアリア語lt               
	,'operație' //ルーマニア語ro       
	,'prevádzka' //スロバキア語sk        	
	,'delovanje' //スロベニア語sl
    ]
    
    //39
    // unit list
    ,unit_start: [
        'スタート'
        ,'Start'
    ,'Start' // ドイツ
    ,'début' //フランス
    ,'comienzo' //スペイン
    ,'começo' //ポルトガル
    ,'inizio' //イタリア
    ,'początek' // ポーランド
    ,'start' //スウェーデン
    ,'Start' //フィンランド語 fi
    ,'begin' // オランダ
    ,'開始' // 台湾(繁体字)
,'Start'//ノルウェーnb                                   
,'Start' //ハンガリー語hu               
	,'Spustit' //チェコ語cs          
	,'Start' //デンマーク語da            
	,'Start' //エストニア語et                        
	,'Έναρξη' //ギリシャ語el                                            
	,'Početak' //クロアチア語hr          
	,'Start' //ラトビア語lv                  
	,'Pradėti' //リトアリア語lt                  
	,'Start' //ルーマニア語ro            
	,'Spustiť' //スロバキア語sk          
	,'Začni' //スロベニア語sl
    ]
    
    //40
    ,unit_create: [
        '生成'
        ,'Create'
    ,'schaffen' // ドイツ
    ,'créer' //フランス
    ,'crear' //スペイン
    ,'Crio' //ポルトガル
    ,'creare' //イタリア
    ,'tworzyć' // ポーランド
    ,'Skapa' //スウェーデン
    ,'Luo' //フィンランド語 fi
    ,'creëren' // オランダ
    ,'創建' // 台湾(繁体字)
,'Opprett'//ノルウェーnb                 
	,'Create' //ハンガリー語hu               
	,'Vytvořit' //チェコ語cs         
	,'Opret' //デンマーク語da            
	,'Loo' //エストニア語et                          
	,'Δημιουργία' //ギリシャ語el                                    
	,'Stvaranje' //クロアチア語hr        
	,'Izveidot' //ラトビア語lv               
	,'Sukurti' //リトアリア語lt                  
	,'Creare' //ルーマニア語ro           
	,'Vytvoriť' //スロバキア語sk         
	,'Ustvari' //スロベニア語sl
    ]
    //41
    ,unit_change: [
        '移籍'
        ,'Transfers'
    ,'Transfers' // ドイツ
    ,'transferts' //フランス
    ,'Transferencias' //スペイン
    ,'transferencias' //ポルトガル
    ,'Trasferimenti' //イタリア
    ,'Transfery' // ポーランド
    ,'överföringar' //スウェーデン
    ,'Siirrot' //フィンランド語 fi
    ,'transfers' // オランダ
    ,'轉會' // 台湾(繁体字)
,'Transfer'//ノルウェーnb                
	,'Átigazolások' //ハンガリー語hu         
	,'Převody' //チェコ語cs          
	,'Overførsler' //デンマーク語da      
	,'Ülekanded' //エストニア語et                    
	,'Μεταφορές' //ギリシャ語el                                       
	,'Transferi' //クロアチア語hr        
	,'Pārskaitījumi' //ラトビア語lv          
	,'Pervedimai' //リトアリア語lt               
	,'Transferuri' //ルーマニア語ro      
	,'Prevody' //スロバキア語sk          
	,'Prenosi' //スロベニア語sl
    ]
    //42
    // graph
    ,graph_sum_hitpoint: [
        '合計ヒットポイント'
        ,'Sum Hitpoint'
    ,'Sum Hitpoint' // ドイツ
    ,'somme Repères' //フランス
    ,'suma Hitpoint' //スペイン
    ,'soma Hitpoint' //ポルトガル
    ,'Somma Hitpoint' //イタリア
    ,'suma Hitpoint' // ポーランド
    ,'som hitpoint' //スウェーデン
    ,'Summa Hitpoint' //フィンランド語 fi
    ,'som hitpoint' // オランダ
    ,'總命中率' // 台湾(繁体字)
,'Sum Hitpoint'//ノルウェーnb            
	,'Sum Hitpoint' //ハンガリー語hu         
	,'Sum Hitpoint' //チェコ語cs     
	,'Sum Hitpoint' //デンマーク語da     
	,'Summa Hitpoint' //エストニア語et               
	,'Άθροισμα Hitpoint' //ギリシャ語el                               
	,'Sum Hitpoint' //クロアチア語hr     
	,'Sum Hitpoint' //ラトビア語lv           
	,'Suma Hitpoint' //リトアリア語lt            
	,'Suma Hitpoint' //ルーマニア語ro    
	,'Sum hitpointov' //スロバキア語sk   
	,'Sum Hitpoint' //スロベニア語sl
    ]
    
    //43
    ,graph_area_point: [
     '取得エリアポイント'
    ,'Acquisition area point' // en
    ,'Acquisition Sehenswürdigkeit' // de ドイツ
    ,'Point de la zone d\'acquisition' // fr フランス
    ,'Punto de área de adquisición' // el スペイン
    ,'Punto de área de adquisición...' // pt ポルトガル
    ,'Punto area di acquisizione' // itイタリア
    ,'Temperatura powierzchni Nabycie' // ポーランド 3,000 *
    ,'Inhämtningsområde punkt' // スウェーデン   900 *
    ,'Hankinta alue kohta' //フィンランド    500
	// 10
    ,'Overname bezienswaardigheid' // オランダ 2,000   *
    ,'購置面積點' // 台湾(繁体字)(繁体字)
    ,'Oppkjøpet severdighet' // ノルウェー     400
    ,'Beszerzési terület pont' // ハンガリー    1,000
    ,'Beszerzési terület pont' // チェコ語      cs-CZ
    ,'Erhvervelse attraktioner' // デンマーク語 da-DK
    ,'Acquisition ala punkti' // エストニア語 et-EE
    ,'Σημείο περιοχή Απόκτηση' // ギリシャ語 el-GR
    ,'Stjecanje područje točka' // クロアチア語 hr-HR
    ,'Acquisition platība punkts' // ラトビア語   lv-LV
	// 20
    ,'Įsigijimo plotas taškas' // リトアニア語 lt-LT
    ,'Punct de zona de achiziție' // ルーマニア語 ro-RO
    ,'Akvizícia oblasť bod' // スロバキア語 sk-SK
    ,'Območje Pridobitev točka' // スロベニア語 sl-SI
    ]
    
    //44
    ,graph_sum_fatigue: [
        '疲労合計'
        ,'Sum Fatigue'
    ,'Sum Fatigue' // ドイツ
    ,'somme fatigue' //フランス
    ,'suma Fatiga' //スペイン
    ,'soma Fadiga' //ポルトガル
    ,'Somma Fatica' //イタリア
    ,'suma Zmęczenie' // ポーランド
    ,'Sum Trötthet' //スウェーデン
    ,'Summa Väsymys' //フィンランド語 fi
    ,'som Vermoeidheid' // オランダ
    ,'總和疲勞' // 台湾(繁体字)
,'Sum Fatigue'//ノルウェーnb             
	,'Sum fáradtság' //ハンガリー語hu        
	,'Sum únava' //チェコ語cs        
	,'Sum Træthed' //デンマーク語da      
	,'Summa Väsimus' //エストニア語et                
	,'Άθροισμα Κόπωση' //ギリシャ語el                            
	,'Sum Umor' //クロアチア語hr         
	,'Sum noguruma' //ラトビア語lv           
	,'Suma Nuovargis' //リトアリア語lt           
	,'Suma Oboseala' //ルーマニア語ro    
	,'Sum únava' //スロバキア語sk        
	,'Sum utrujenost' //スロベニア語sl
    ]
    
    //45
    ,graph_damage: [
     '総和ダメージ'
    ,'The total damage'
    ,'der Gesamtschaden' // de ドイツ
    ,'le total des dommages' // fr フランス
    ,'El daño total' // el スペイン
    ,'o prejuízo total' // pt ポルトガル
    ,'il danno totale' // itイタリア
    ,'szkody' // ポーランド 
    ,'den totala skadan' // スウェーデン
    ,'vahinkojen kokonaismäärä' // フィンランド
	// 10
    ,'de totale schade' // オランダ
    ,'總傷害' // 台湾(繁体字)(繁体字)
    ,'den totale skaden' // ノルウェー
    ,'a teljes kár' // ハンガリー
    ,'celková škoda' // チェコ語      cs-CZ
    ,'den samlede skade' // デンマーク語 da-DK
    ,'kogu kahju' // エストニア語 et-EE
    ,'το σύνολο των ζημιών' // ギリシャ語 el-GR
    ,'ukupna šteta' // クロアチア語 hr-HR
    ,'kopējie zaudējumi' // ラトビア語   lv-LV
	// 20
    ,'bendras žala' // リトアニア語 lt-LT
    ,'Valoarea totală a daunelor' // ルーマニア語 ro-RO
    ,'Celková škoda' // スロバキア語 sk-SK
    ,'celotna škoda' // スロベニア語 sl-SI
    ]
    
    //46
    ,graph_average_level: [
        '平均レベル'
        ,'Average Level'
    ,'Durchschnittsniveau' // ドイツ
    ,'Niveau moyen' //フランス

    ,'Nivel promedio' //スペイン
    ,'Nivel promedio' //ポルトガル
    ,'Livello medio' //イタリア
    ,'Średni poziom' // ポーランド
    ,'genomsnittlig nivå' //スウェーデン
    ,'keskimääräinen taso' //フィンランド語 fi
    ,'gemiddeld niveau' // オランダ
    ,'平均水平' // 台湾(繁体字)

	,'Gjennomsnittlig nivå'//ノルウェーnb                
	,'átlagos szint' //ハンガリー語hu            
	,'průměrná úroveň' //チェコ語cs        
	,'gennemsnitlige niveau' //デンマーク語da        
	,'Keskmine tase' //エストニア語et                   
	,'Μέση Επίπεδο' //ギリシャ語el                                      
	,'prosječna razina' //クロアチア語hr       
	,'vidējais līmenis' //ラトビア語lv              
	,'Vidutinis lygis' //リトアリア語lt               

	,'Nivelul mediu' //ルーマニア語ro        
	,'priemerná úroveň' //スロバキア語sk        
	,'Average Level' //スロベニア語sl
    ]
    
    //47
    ,graph_average_position: [
        '平均マップ位置'
        ,'Average Position'
    ,'durchschnittliche Position' // ドイツ
    ,'Position moyenne' //フランス
    ,'Posición Promedio' //スペイン
    ,'Posição média' //ポルトガル
    ,'Posizione media' //イタリア
    ,'Średnia pozycja' // ポーランド
    ,'Genomsnittlig position' //スウェーデン
    ,'Keskimääräinen sijainti' //フィンランド語 fi
    ,'gemiddeld Positie' // オランダ
    ,'平均排名' // 台湾(繁体字)
,'Gjennomsnittlig plassering'//ノルウェーnb             
,'Átlagos pozíció' //ハンガリー語hu      
	,'Průměrná pozice' //チェコ語cs  
	,'Gennemsnitlig Position' //デンマーク語da          
	,'Keskmine seisukoht' //エストニア語et           
	,'Μέση θέση' //ギリシャ語el                                        
	,'Prosječni položaj' //クロアチア語hr
	,'Vidējā pozīcija' //ラトビア語lv        
	,'Vidutinė pozicija' //リトアリア語lt        
	,'Poziția medie' //ルーマニア語ro    
	,'Priemerná pozícia' //スロバキア語sk
	,'Povprečni položaj' //スロベニア語sl
    ]
    
    //48
    ,graph_sum_point: [
        '攻撃・防御・回復合計ポイント'
        ,'Sum Attack/Defence/Recovery'
    ,'Sum Angriff / Abwehr / Wiederherstellung' // ドイツ
    ,'Somme Attaque / Défense / Récupération' //フランス
    ,'Ataque Suma / Defensa / Recuperación' //スペイン
    ,'Soma Ataque / Defesa / Recuperação' //ポルトガル
    ,'Somma Attacco / Difesa / Recupero' //イタリア
    ,'Suma Atak / Obrona / Odzyskiwanie' // ポーランド
    ,'Sum Attack / Försvar / Återhämtning' //スウェーデン
    ,'Sum Attack / Puolustus / Recovery' //フィンランド語 fi
    ,'Som Attack / Defensie / Recovery' // オランダ
    ,'總和攻擊/防禦/恢復' // 台湾(繁体字)
,'Sum angrep / forsvar / Recovery'//ノルウェーnb        
,'Sum támadás / védelem / Recovery' //ハンガリー語hu    
,'Součet Útok / Obrana / obnovy' //チェコ語cs   
,'Sum Attack / Forsvar / Recovery' //デンマーク語da 
,'Summa Attack / kaitseminister / Recovery' //エストニア語et   
 ,'Άθροισμα Επίθεση / Άμυνα / αποκατάστασης' //ギリシャ語el 
  ,'Sum napad / obrana / Recovery' //クロアチア語hr   
  ,'Sum Attack / Aizsardzība / Recovery' //ラトビア語lv  
   ,'Suma ataka / gynybos / utilizavimas' //リトアリア語lt     
   ,'Suma Atac / Apărare / Recovery' //ルーマニア語ro  
   ,'Súčet Útok / Obrana / obnovy' //スロバキア語sk    
   ,'Sum napad / obrambo / Recovery' //スロベニア語sl
    ]
    
    //49
    ,next: [
        '次'
        ,'Next'
    ,'Nächster' // ドイツ
    ,'suivant' //フランス
    ,'siguiente' //スペイン
    ,'Next' //ポルトガル
    ,'Il Prossimo' //イタリア
    ,'następny' // ポーランド
    ,'nästa' //スウェーデン
    ,'Next' //フィンランド語 fi
    ,'volgende' // オランダ
    ,'下一個' // 台湾(繁体字)
,'Neste'//ノルウェーnb                   
	,'Következő' //ハンガリー語hu            
	,'Next' //チェコ語cs             
	,'Næste' //デンマーク語da            
	,'Järgmine' //エストニア語et                     
	,'Επόμενο' //ギリシャ語el                                          
	,'Sljedeći' //クロアチア語hr         
	,'Next' //ラトビア語lv                   
	,'Kitas' //リトアリア語lt                    
	,'Următorul' //ルーマニア語ro        
	,'Next' //スロバキア語sk             
	,'Next' //スロベニア語sl
    ]
    
    //50
    ,team: [
        'チーム'
        ,'team'
    ,'team' // ドイツ
    ,'équipe' //フランス
    ,'equipo' //スペイン
    ,'equipe' //ポルトガル
    ,'squadra' //イタリア
    ,'zespół' // ポーランド
    ,'lag' //スウェーデン
    ,'Team' //フィンランド語 fi
    ,'team' // オランダ
    ,'團隊' // 台湾(繁体字)
,'Team'//ノルウェーnb                    
	,'csapat' //ハンガリー語hu               
	,'tým' //チェコ語cs              
	,'hold' //デンマーク語da             
	,'meeskond' //エストニア語et                     
	,'η \'ομάδα' //ギリシャ語el                                          
	,'tim' //クロアチア語hr              
	,'komanda' //ラトビア語lv                
	,'Komanda' //リトアリア語lt                  
	,'echipa' //ルーマニア語ro           
	,'Tím' //スロバキア語sk              
	,'team' //スロベニア語sl
    ]
    
    //51
    ,menu_new: [
        'ニューゲーム'
        ,'new'
    ,'neu' // ドイツ
    ,'nouveau' //フランス
    ,'nuevo' //スペイン
    ,'novo' //ポルトガル
    ,'nuovo' //イタリア
    ,'Nowa gra' // ポーランド
    ,'nytt spel' //スウェーデン
    ,'Uusi' //フィンランド語 fi
    ,'nieuw spel' // オランダ
    ,'新' // 台湾(繁体字)
,'Ny'//ノルウェーnb                      
	,'új' //ハンガリー語hu                   
	,'nové' //チェコ語cs             
	,'nye' //デンマーク語da              
	,'uued' //エストニア語et                         
	,'νέα' //ギリシャ語el                                                  
	,'Novi' //クロアチア語hr             
	,'jauno' //ラトビア語lv                  
	,'nauja' //リトアリア語lt                    
	,'noi' //ルーマニア語ro              
	,'Nové' //スロバキア語sk             
	,'nova' //スロベニア語sl
    ]
    // 52
    ,menu_load: [
        'ロードゲーム'
        ,'load'
    ,'laden' // ドイツ
    ,'charge' //フランス
    ,'carga' //スペイン
    ,'carregar' //ポルトガル
    ,'caricare' //イタリア
    ,'Gry drogowe' // ポーランド
    ,'Road Games' //スウェーデン
    ,'Kuorma' //フィンランド語 fi
    ,'road Games' // オランダ
    ,'加載' // 台湾(繁体字)
,'Load'//ノルウェーnb                    
	,'rakomány' //ハンガリー語hu             
	,'náklad' //チェコ語cs           
	,'belastning' //デンマーク語da       
	,'koormus' //エストニア語et                      
	,'φορτίο' //ギリシャ語el                                            
	,'opterećenje' //クロアチア語hr      
	,'krava' //ラトビア語lv                  
	,'apkrova' //リトアリア語lt                  
	,'a incarca' //ルーマニア語ro        
	,'náklad' //スロバキア語sk           
	,'obremenitev' //スロベニア語sl
    ]
    // 53
    ,select_load_game: [
        'ロードデータ選択'
        ,'select load data'
    ,'Wählen Lastdaten' // ドイツ
    ,'sélectionnez les données de charge' //フランス
    ,'seleccione los datos de carga' //スペイン
    ,'selecione os dados de carga' //ポルトガル
    ,'selezionare i dati di carico' //イタリア
    ,'Wybór danych obciążenia' // ポーランド
    ,'Lastdataurval' //スウェーデン
    ,'Valitse kuorma data' //フィンランド語 fi
    ,'Load data selectie' // オランダ
    ,'選擇加載數據' // 台湾(繁体字)
,'Select load data'//ノルウェーnb        
	,'ki a terhelési adatok' //ハンガリー語hu
	,'vyberte údaje náklad' //チェコ語cs            
	,'Vælg load data' //デンマーク語da   
	,'valige koormuse andmed' //エストニア語et       
	,'επιλέξτε τα δεδομένα φορτίου' //ギリシャ語el     
	,'odaberite podaci opterećenje' //クロアチア語hr    
	,'izvēlieties slodze dati' //ラトビア語lv
	,'pasirinkite apkrovos duomenis' //リトアリア語lt           
	,'date de sarcină, selectați' //ルーマニア語ro      
	,'Vyberte údaje náklad' //スロバキア語sk            
	,'izberite podatke obremenitev' //スロベニア語sl
    ]
    
    // 54
    ,date: [
        '日時'
        ,'date'
    ,'Datum' // ドイツ
    ,'date' //フランス
    ,'fecha' //スペイン
    ,'encontro' //ポルトガル
    ,'data' //イタリア
    ,'Data' // ポーランド
    ,'datum' //スウェーデン
    ,'Päivä' //フィンランド語 fi
    ,'datum' // オランダ
    ,'日期' // 台湾(繁体字)
,'Date'//ノルウェーnb                    
	,'date' //ハンガリー語hu                 
	,'datum' //チェコ語cs            
	,'date' //デンマーク語da             
	,'kuupäev' //エストニア語et                      
	,'ημερομηνία' //ギリシャ語el                                    
	,'Datum' //クロアチア語hr            
	,'datums' //ラトビア語lv                 
	,'data' //リトアリア語lt                     
	,'data' //ルーマニア語ro             
	,'Dátum' //スロバキア語sk            
	,'datum' //スロベニア語sl
    ]
    
    // 55
    ,turn: [
        'ターン'
        ,'turn'
    ,'wende' // ドイツ
    ,'tour' //フランス
    ,'giro' //スペイン
    ,'vez' //ポルトガル
    ,'turno' //イタリア
    ,'kolej' // ポーランド    
    ,'sväng' //スウェーデン
    ,'Turn' //フィンランド語 fi
    ,'beurt' // オランダ
    ,'轉' // 台湾(繁体字)
,'Turn'//ノルウェーnb                    
	,'kapcsolja' //ハンガリー語hu            
	,'otočit se' //チェコ語cs        
	,'slå' //デンマーク語da              
	,'keerata' //エストニア語et                      
	,'γυρίσει' //ギリシャ語el                                          
	,'red' //クロアチア語hr              
	,'savukārt' //ラトビア語lv               
	,'įjungti' //リトアリア語lt                  
	,'rândul său,' //ルーマニア語ro      
	,'Otočiť' //スロバキア語sk           
	,'obrnejo' //スロベニア語sl
    ]

    // 56
    ,create_unit: [
        'ユニット生成'
        ,'Create Unit'
    ,'erstellen Einheit' // ドイツ
    ,'Créer Unité' //フランス
    ,'crear Unidad' //スペイン
    ,'Criar unidade' //ポルトガル
    ,'Creare Unità' //イタリア
    ,'generacji urządzenie' // ポーランド
    ,'enhet generationen' //スウェーデン
    ,'Luo yksikkö' //フィンランド語 fi
    ,'productie-eenheid' // オランダ
    ,'創建單位' // 台湾(繁体字)
,'Lag Unit'//ノルウェーnb                
	,'Create Unit' //ハンガリー語hu          
	,'Vytvořit Unit' //チェコ語cs    
	,'Opret Unit' //デンマーク語da       
	,'Loo Unit' //エストニア語et                     
	,'Δημιουργία Μονάδας' //ギリシャ語el                       
	,'Stvaranje jedinicu' //クロアチア語hr              
	,'Izveidot vienība' //ラトビア語lv       
	,'Sukurti vienetas' //リトアリア語lt         
	,'Crearea Unitate' //ルーマニア語ro  
	,'Vytvoriť Unit' //スロバキア語sk    
	,'Ustvarjanje enota' //スロベニア語sl
    ]
    
    // 57
    ,ok: [
        '確認'
        ,'ok'
    ,'ok' // ドイツ
    ,'ok' //フランス
    ,'ok' //スペイン
    ,'ok' //ポルトガル
    ,'ok' //イタリア
    ,'ok' // ポーランド
    ,'ok' //スウェーデン
    ,'Ok' //フィンランド語 fi
    ,'ok' // オランダ
    ,'行' // 台湾(繁体字)
,'Ok'//ノルウェーnb                      
	,'oké' //ハンガリー語hu                  
	,'Dobře' //チェコ語cs            
	,'ok' //デンマーク語da                              
	,'Okei' //エストニア語et                        
	,'Εντάξει' //ギリシャ語el                                          
	,'u redu' //クロアチア語hr           
	,'labi' //ラトビア語lv                   
	,'Gerai' //リトアリア語lt                    
	,'Bine' //ルーマニア語ro             
	,'OK' //スロバキア語sk               
	,'v redu' //スロベニア語sl
    ]
    // 58
    ,menu_result: [
        'ゲームコンプリート'
        ,'Game Complete'
    ,'Spiel Komplett' // ドイツ
    ,'jeu Complet' //フランス
    ,'Juego completo' //スペイン
    ,'jogo completo' //ポルトガル
    ,'completa il gioco' //イタリア
    ,'gra pełna' // ポーランド
    ,'spel Komplett' //スウェーデン
    ,'Game Complete' //フィンランド語 fi
    ,'spel Compleet' // オランダ
    ,'遊戲完整' // 台湾(繁体字)
,'Game Complete'//ノルウェーnb           
	,'Game Complete' //ハンガリー語hu        
	,'Game Complete' //チェコ語cs    
	,'Spillet Complete' //デンマーク語da 
	,'Mäng Complete' //エストニア語et                
	,'Το παιχνίδι ολοκληρώθηκε' //ギリシャ語el           
	,'Igra Cijela' //クロアチア語hr      
	,'Game Complete' //ラトビア語lv          
	,'Žaidimas Užbaigti' //リトアリア語lt        
	,'Joc complet' //ルーマニア語ro      
	,'Game Complete' //スロバキア語sk    
	,'Game Complete' //スロベニア語sl
    ]

    // 59
    ,team_game: [
        'チーム戦'
        ,'Team Game'
    ,'Teamspiel' // ドイツ
    ,'jeu de l\'équipe' //フランス
    ,'juego de equipo' //スペイン
    ,'jogo de equipe' //ポルトガル
    ,'gioco di squadra' //イタリア
    ,'gra zespołowa' // ポーランド
    ,'lagspel' //スウェーデン
    ,'Team Game' //フィンランド語 fi
    ,'teamspel' // オランダ
    ,'團隊遊戲' // 台湾(繁体字)
,'Team Game'//ノルウェーnb               
	,'Csapatjáték' //ハンガリー語hu          
	,'Týmová hra' //チェコ語cs       
	,'Team Game' //デンマーク語da        
	,'Team Game' //エストニア語et                    
	,'ΟΜΑΔΙΚΟ ΠΑΙΧΝΙΔΙ' //ギリシャ語el                        
	,'Momčad igra' //クロアチア語hr      
	,'Team Game' //ラトビア語lv              
	,'Komanda Žaidimo' //リトアリア語lt          
	,'Echipa de joc' //ルーマニア語ro    
	,'Tímová hra' //スロバキア語sk       
	,'Team Game' //スロベニア語sl
    ]
    // 60
    ,setting_option: [
    'オプション設定' // JP
    ,'Option' //english
    ,'Option' // ドイツ
    ,'option' //フランス
    ,'Opción' //スペイン
    ,'opção' //ポルトガル
    ,'opzione' //イタリア
    ,'opcja' // ポーランド 3,000 *
    ,'alternativ' //スウェーデン   900 *
    ,'vaihtoehto' //フィンランド    500
    ,'optie' // オランダ 2,000   *
    ,'選項' // 台湾(繁体字)(繁体字)
    ,'alternativ' //ノルウェー     400
    ,'Opció' // ハンガリー    1,000
    ,'volba'//チェコ語      cs-CZ
    ,'option'//デンマーク語 da-DK
    ,'Valik'//エストニア語 et-EE
    ,'επιλογή'//ギリシャ語 el-GR
    ,'izbor'//クロアチア語 hr-HR
    ,'Option'//ラトビア語   lv-LV
    ,'variantas'//リトアニア語 lt-LT
    ,'opțiune'//ルーマニア語 ro-RO
    ,'Voľba'//スロバキア語 sk-SK
    ,'možnost'//スロベニア語 sl-SI
    ]

    // 61
    ,new_or_load: [
    'ニュー or ロード' // JP
    ,'New or Load' //english
    ,'Neue oder Last' // ドイツ
    ,'Ou charger' //フランス
    ,'Nuevo o de carga' //スペイン
    ,'Novo ou carga' //ポルトガル
    ,'Nuovo o del carico' //イタリア
    ,'Nowe lub obciążenia' // ポーランド 3,000 *
    ,'Ny eller Load' //スウェーデン   900 *
    ,'Uudet tai Load' //フィンランド    500
    ,'Nieuwe of Load' // オランダ 2,000   *
    ,'新的或負載' // 台湾(繁体字)(繁体字)
    ,'Ny eller Load' //ノルウェー     400
    ,'Új vagy betöltése' // ハンガリー    1,000
    ,'Nové nebo Load'//チェコ語      cs-CZ
    ,'Nyt eller Load'//デンマーク語 da-DK
    ,'Uus või Load'//エストニア語 et-EE
    ,'Νέα ή φορτίου'//ギリシャ語 el-GR
    ,'Novi ili Umetanje'//クロアチア語 hr-HR
    ,'Jauns vai Load'//ラトビア語   lv-LV
    ,'Nauji arba apkrova'//リトアニア語 lt-LT
    ,'Noi sau de încărcare'//ルーマニア語 ro-RO
    ,'Nové alebo Load'//スロバキア語 sk-SK
    ,'Nova ali Load'//スロベニア語 sl-SI
    ]


    // 62 
    ,unit_list: [
    'ユニットリスト' // JP
    ,'Unit List' //english
    ,'Geräteliste' // ドイツ
    ,'Liste de l\'unité' //フランス
    ,'lista de Unidad' //スペイン
    ,'lista de unidades' //ポルトガル
    ,'lista unità' //イタリア
    ,'lista urządzenie' // ポーランド 3,000 *
    ,'enhet lista' //スウェーデン   900 *
    ,'yksikkö lista' //フィンランド    500
    ,'lijst unit' // オランダ 2,000   *
    ,'單位名單' // 台湾(繁体字)(繁体字)
    ,'Unit liste' //ノルウェー     400
    ,'egység lista' // ハンガリー    1,000
    ,'seznam Unit'//チェコ語      cs-CZ
    ,'enhed liste'//デンマーク語 da-DK
    ,'Unit nimekirja'//エストニア語 et-EE
    ,'μονάδα λίστα'//ギリシャ語 el-GR
    ,'popis jedinica'//クロアチア語 hr-HR
    ,'Unit saraksts'//ラトビア語   lv-LV
    ,'Vieneto sąrašas'//リトアニア語 lt-LT
    ,'lista unitate'//ルーマニア語 ro-RO
    ,'zoznam Unit'//スロバキア語 sk-SK
    ,'Seznam enota'//スロベニア語 sl-SI
    ]

    // 63 move
    ,graph_move_distance: [
     '総和移動距離' // JP
    ,'The total travel distance' // en
    ,'Die Gesamtfahrstrecke' // de ドイツ
    ,'La distance totale de Voyage' // fr フランス
    ,'La distancia total de viaje' // el スペイン
    ,'A distância total de viagem' // pt ポルトガル
    ,'La distanza totale percorsa' // itイタリア
    ,'Całkowita odległość podróży' // ポーランド 3,000 *
    ,'Den totala reseavståndet' // スウェーデン   900 *
    ,'Yhteensä kohteeseen' //フィンランド    500
	// 10
    ,'De totale reisafstand' // オランダ 2,000   *
    ,'總行程距離' // 台湾(繁体字)(繁体字)
    ,'Den totale reiseavstanden' // ノルウェー     400
    ,'A teljes utazási távolság' // ハンガリー    1,000
    ,'Celková cestovní vzdálenost' // チェコ語      cs-CZ
    ,'Den samlede rejseafstand' // デンマーク語 da-DK
    ,'Kogu teekonna pikkust' // エストニア語 et-EE
    ,'Η συνολική απόσταση ταξιδίου' // ギリシャ語 el-GR
    ,'Ukupna udaljenost putovanja' // クロアチア語 hr-HR
    ,'Kopējais ceļojuma attālums' // ラトビア語   lv-LV
	// 20
    ,'Bendras kelionės atstumas' // リトアニア語 lt-LT
    ,'Distanța totală de călătorie' // ルーマニア語 ro-RO
    ,'Celková cestovná vzdialenosť' // スロバキア語 sk-SK
    ,'Skupno potovanje razdalja' // スロベニア語 sl-SI
    ]

    // 64 do unit number
    ,graph_do_unit_number: [
    '操作可能ユニット数' // JP
    ,'Operation possible number of units' //english
    ,'Betrieb möglich Anzahl der Einheiten' // ドイツ
    ,'Opération nombre possible d\'unités' //フランス
    
    ,'Operación posible número de unidades' //スペイン
    ,'Operação número possível de unidades' //ポルトガル
    ,'Funzionamento possibile numero di unità' //イタリア
    ,'Operacja możliwa liczba jednostek' // ポーランド 3,000 *
    ,'Operation möjliga antal enheter' //スウェーデン   900 *
    ,'Käyttö mahdollinen lukumäärä' //フィンランド    500
    ,'Bediening mogelijk aantal eenheden' // オランダ 2,000   *
    ,'單位工作盡可能多' // 台湾(繁体字)(繁体字)
    ,'Drift mulig antall enheter' //ノルウェー     400
    ,'Működés lehetséges darabszám' // ハンガリー    1,000
    ,'Provoz možný počet jednotek'//チェコ語      cs-CZ
    ,'Operation mulige antal enheder'//デンマーク語 da-DK
    ,'Operation võimalik ühikute arv'//エストニア語 et-EE
    ,'Λειτουργία δυνατό αριθμό μονάδων'//ギリシャ語 el-GR
    ,'Rad mogući broj jedinica'//クロアチア語 hr-HR
    ,'Darbība iespējams vienību skaits'//ラトビア語   lv-LV
    ,'Darbība iespējams vienību skaits'//リトアニア語 lt-LT
    ,'Funcționarea număr posibil de unități'//ルーマニア語 ro-RO
    ,'Prevádzka možný počet jednotiek'//スロバキア語 sk-SK
    ,'Delovanje možno število enot'//スロベニア語 sl-SI
    ]

    // 65 recovery
    ,graph_recovery: [
     '総和回復量' // ja
    ,'The total recovery amount' // en
    ,'Die Gesamtwiederfindung Menge' // de ドイツ
    ,'Le montant total à récupérer' // fr フランス
    ,'La cantidad total de recuperación' // el スペイン
    ,'O montante total a recuperar' // pt ポルトガル
    ,'L\'importo totale recupero' // itイタリア
    ,'Łączna kwota odzysku' // ポーランド 3,000 *
    ,'Det sammanlagda återbetalningsbeloppet' // スウェーデン   900 *
    ,'Takaisin perittävää kokonaismäärää' //フィンランド    500
	// 10
    ,'Het totale herstel bedrag' // オランダ 2,000   *
    ,'總回收量' // 台湾(繁体字)(繁体字)
    ,'Den totale gjenvinningen mengde' // ノルウェー     400
    ,'A teljes gyógyulás összege' // ハンガリー    1,000
    ,'Celková částka zotavení' // チェコ語      cs-CZ
    ,'Af det samlede beløb' // デンマーク語 da-DK
    ,'Kogu taastamise summa' // エストニア語 et-EE
    ,'Το συνολικό ποσό ανάκτησης' // ギリシャ語 el-GR
    ,'Ukupan iznos za oporavak' // クロアチア語 hr-HR
    ,'Kopējais atgūšana summa' // ラトビア語   lv-LV
	// 20
    ,'Bendras išieškojimo suma' // リトアニア語 lt-LT
    ,'Suma totală de recuperare' // ルーマニア語 ro-RO
    ,'Celková suma zotavenie' // スロバキア語 sk-SK
    ,'Skupna količina okrevanje' // スロベニア語 sl-SI
    ]

    // 66
    ,game_end_back_new_team: [
     'ニューチームゲーム'
    ,'New team game' // en
    ,'Neue Team-Spiel' // de ドイツ
    ,'Nouveau jeu d\'équipe' // fr フランス
    ,'Nuevo juego de equipo' // el スペイン
    ,'Novo jogo de equipe' // pt ポルトガル
    ,'Nuovo gioco di squadra' // itイタリア
    ,'Nowa gra zespołowa' // ポーランド 3,000 *
    ,'Ny lagspel' // スウェーデン   900 *
    ,'Uusi joukkuepeli' //フィンランド    500
	// 10
    ,'Nieuwe team spel' // オランダ 2,000   *
    ,'新隊比賽' // 台湾(繁体字)(繁体字)
    ,'New lagspill' // ノルウェー     400
    ,'Új csapatjáték' // ハンガリー    1,000
    ,'Nová týmová hra' // チェコ語      cs-CZ
    ,'Nyt hold spil' // デンマーク語 da-DK
    ,'New meeskonnamäng' // エストニア語 et-EE
    ,'Νέο ομαδικό παιχνίδι' // ギリシャ語 el-GR
    ,'Nova momčad igra' // クロアチア語 hr-HR
    ,'Jauna komandu spēle' // ラトビア語   lv-LV
	// 20
    ,'Nauja komandinis žaidimas' // リトアニア語 lt-LT
    ,'Nou joc de echipa' // ルーマニア語 ro-RO
    ,'Nová tímová hra' // スロバキア語 sk-SK
    ,'Nova ekipa igra' // スロベニア語 sl-SI
    ]

//    // 67         // <- change
//    ,friend_team: [ // <- change
//     '味方チーム' // ja
//    ,'Ally team' // en
//    ,'Ally-Team' // de ドイツ
//    ,'Ally équipe' // fr フランス
//    ,'equipo de Ally' // el スペイン
//    ,'equipe Ally' // pt ポルトガル
//    ,'squadra alleato' // itイタリア
//    ,'Zespół Ally' // ポーランド 3,000 *
//    ,'Ally laget' // スウェーデン   900 *
//    ,'Ally joukkue' //フィンランド    500
	// 10
//    ,'Ally joukkue' // オランダ 2,000   *
//    ,'盟友團隊' // 台湾(繁体字)(繁体字)
//    ,'Ally-teamet' // ノルウェー     400
//    ,'Ally csapat' // ハンガリー    1,000
//    ,'Ally tým' // チェコ語      cs-CZ
//    ,'Ally hold' // デンマーク語 da-DK
//    ,'Ally meeskond' // エストニア語 et-EE
//    ,'σύμμαχος της ομάδας' // ギリシャ語 el-GR
//    ,'Ally tim' // クロアチア語 hr-HR
//    ,'Ally komanda' // ラトビア語   lv-LV
	// 20
//    ,'Ally komanda' // リトアニア語 lt-LT
//    ,'echipa Ally' // ルーマニア語 ro-RO
//    ,'Ally tím' // スロバキア語 sk-SK
//    ,'Ally team' // スロベニア語 sl-SI
//    ]

    // 67         // <- change
    ,enemy_team: [ // <- change
     '敵' // ja
    ,'enemy' // en
    ,'Feind' // de ドイツ
    ,'ennemi' // fr フランス
    ,'Enemigo' // el スペイン
    ,'inimigo' // pt ポルトガル
    ,'nemico' // itイタリア
    ,'wróg' // ポーランド 3,000 *
    ,'fiende' // スウェーデン   900 *
    ,'vihollinen' //フィンランド    500
	// 10
    ,'vijand' // オランダ 2,000   *
    ,'敵人' // 台湾(繁体字)(繁体字)
    ,'Enemy' // ノルウェー     400
    ,'ellenség' // ハンガリー    1,000
    ,'nepřítel' // チェコ語      cs-CZ
    ,'Enemy' // デンマーク語 da-DK
    ,'vaenlane' // エストニア語 et-EE
    ,'εχθρός' // ギリシャ語 el-GR
    ,'neprijateljski' // クロアチア語 hr-HR
    ,'ienaidnieks' // ラトビア語   lv-LV
	// 20
    ,'priešas' // リトアニア語 lt-LT
    ,'dușman' // ルーマニア語 ro-RO
    ,'nepriateľ' // スロバキア語 sk-SK
    ,'Enemy' // スロベニア語 sl-SI
    ]
    
    // 68         // <- change
    ,statistical_data: [ // <- change
     '統計データ' // ja
    ,'Statistical data' // en
    ,'statistische Daten' // de ドイツ
    ,'données statistiques' // fr フランス
    ,'datos estadísticos' // el スペイン
    ,'Os dados estatísticos' // pt ポルトガル
    ,'dati statistici' // itイタリア
    ,'dane statystyczne' // ポーランド 3,000 *
    ,'Statistisk information' // スウェーデン   900 *
    ,'Tilastotiedot' //フィンランド    500
	// 10
    ,'statistische gegevens' // オランダ 2,000   *
    ,'統計數據' // 台湾(繁体字)(繁体字)
    ,'Statistiske data' // ノルウェー     400
    ,'statisztikai adatok' // ハンガリー    1,000
    ,'Statistické údaje' // チェコ語      cs-CZ
    ,'statistiske data' // デンマーク語 da-DK
    ,'Statistilised andmed' // エストニア語 et-EE
    ,'Τα στατιστικά στοιχεία' // ギリシャ語 el-GR
    ,'Statistički podaci' // クロアチア語 hr-HR
    ,'Statistika' // ラトビア語   lv-LV
	// 20
    ,'Statistiniai duomenys' // リトアニア語 lt-LT
    ,'De date statistice' // ルーマニア語 ro-RO
    ,'štatistické údaje' // スロバキア語 sk-SK
    ,'Statistični podatki' // スロベニア語 sl-SI
    ]

    // 69         // <- change
    ,statistical_all_exp: [ // <- change
     '全経験値' // ja
    ,'All experience' // en
    ,'Alle Erfahrung' // de ドイツ
    ,'Toutes les expériences' // fr フランス
    ,'Toda experiencia' // el スペイン
    ,'Toda experiência' // pt ポルトガル
    ,'Tutte le esperienze' // itイタリア
    ,'Wszystko doświadczenia' // ポーランド 3,000 *
    ,'All erfarenhet' // スウェーデン   900 *
    ,'Kaikki kokemus' //フィンランド    500
	// 10
    ,'Alle ervaring' // オランダ 2,000   *
    ,'所有體驗' // 台湾(繁体字)(繁体字)
    ,'All erfaring' // ノルウェー     400
    ,'Minden tapasztalat' // ハンガリー    1,000
    ,'Veškeré zkušenosti' // チェコ語      cs-CZ
    ,'Alle erfaringer' // デンマーク語 da-DK
    ,'Kõik kogemused' // エストニア語 et-EE
    ,'Όλα εμπειρία' // ギリシャ語 el-GR
    ,'Sva iskustva' // クロアチア語 hr-HR
    ,'Visi pieredze' // ラトビア語   lv-LV
	// 20
    ,'Visi patirtis' // リトアニア語 lt-LT
    ,'Toate experiență' // ルーマニア語 ro-RO
    ,'Všetky skúsenosti' // スロバキア語 sk-SK
    ,'Vse izkušnje' // スロベニア語 sl-SI
    ]
    // 70         // <- change
    ,statistical_all_damage_give: [ // <- change
     '全与ダメージ' // ja
    ,'All given damage' // en
    ,'Alle angegebenen Schäden' // de ドイツ
    ,'Tout compte tenu des dommages' // fr フランス
    ,'Todo el daño dado' // el スペイン
    ,'Tudo dada danos' // pt ポルトガル
    ,'Tutti data danni' // itイタリア
    ,'Wszelkie podane szkody' // ポーランド 3,000 *
    ,'Alla given skada' // スウェーデン   900 *
    ,'Kaikki annetaan vahingot' //フィンランド    500
	// 10
    ,'Alle gegeven schade' // オランダ 2,000   *
    ,'所有給定的損傷' // 台湾(繁体字)(繁体字)
    ,'All gitt skader' // ノルウェー     400
    ,'Minden adott károkat' // ハンガリー    1,000
    ,'Všechny vzhledem k poškození' // チェコ語      cs-CZ
    ,'Alle givet skader' // デンマーク語 da-DK
    ,'Kõik antud kahju' // エストニア語 et-EE
    ,'Όλα δεδομένη βλάβη' // ギリシャ語 el-GR
    ,'Svi navedeni štete' // クロアチア語 hr-HR
    ,'Visi dota zaudējumi' // ラトビア語   lv-LV
	// 20
    ,'Visi teikiama žala' // リトアニア語 lt-LT
    ,'Toate daunele dat' // ルーマニア語 ro-RO
    ,'Všetky vzhľadom k poškodeniu' // スロバキア語 sk-SK
    ,'Vse zaradi poškodbe' // スロベニア語 sl-SI
    ]
    // 71         // <- change
    ,statistical_all_damage_receive: [ // <- change
     '全被ダメージ' // ja
    ,'All the damage' // en
    ,'Alle der Schaden' // de ドイツ
    ,'Tous les dégâts' // fr フランス
    ,'Todo el daño' // el スペイン
    ,'Todos os danos' // pt ポルトガル
    ,'Tutti i danni' // itイタリア
    ,'Wszystkie uszkodzenia' // ポーランド 3,000 *
    ,'Alla skador' // スウェーデン   900 *
    ,'Kaikki vahingot' //フィンランド    500
	// 10
    ,'Alle schade' // オランダ 2,000   *
    ,'所有的傷害' // 台湾(繁体字)(繁体字)
    ,'Alle skadene' // ノルウェー     400
    ,'Az összes kárt' // ハンガリー    1,000
    ,'Všechny škody' // チェコ語      cs-CZ
    ,'Alle de skader' // デンマーク語 da-DK
    ,'Kõik kahju' // エストニア語 et-EE
    ,'Όλη η ζημιά' // ギリシャ語 el-GR
    ,'Sve štete' // クロアチア語 hr-HR
    ,'Visi zaudējumi' // ラトビア語   lv-LV
	// 20
    ,'Visa žala' // リトアニア語 lt-LT
    ,'Toate daunele' // ルーマニア語 ro-RO
    ,'Všetky škody' // スロバキア語 sk-SK
    ,'Vsa škoda' // スロベニア語 sl-SI
    ]
    // 72         // <- change
    ,statistical_all_move_distance: [ // <- change
     '全移動距離' // ja
    ,'Total travel distance' // en
    ,'Gesamtverfahrweg' // de ドイツ
    ,'La distance totale de Voyage' // fr フランス
    ,'Distancia total de viaje' // el スペイン
    ,'Distância total de viagem' // pt ポルトガル
    ,'Totale distanza da percorrere' // itイタリア
    ,'Całkowity dystans podróży' // ポーランド 3,000 *
    ,'Total reseavståndet' // スウェーデン   900 *
    ,'Yhteensä kohteeseen' //フィンランド    500
	// 10
    ,'Totale reisafstand' // オランダ 2,000   *
    ,'總行程距離' // 台湾(繁体字)(繁体字)
    ,'Total reiseavstanden' // ノルウェー     400
    ,'Összes utazási távolság' // ハンガリー    1,000
    ,'Celková cestovní vzdálenost' // チェコ語      cs-CZ
    ,'Samlet rejseafstand' // デンマーク語 da-DK
    ,'Kokku teekonna pikkust' // エストニア語 et-EE
    ,'Συνολική απόσταση ταξιδιού' // ギリシャ語 el-GR
    ,'Ukupna udaljenost putovanja' // クロアチア語 hr-HR
    ,'Kopējais ceļojuma attālums' // ラトビア語   lv-LV
	// 20
    ,'Iš viso kelionės atstumas' // リトアニア語 lt-LT
    ,'Distanța totală de călătorie' // ルーマニア語 ro-RO
    ,'Celková cestovná vzdialenosť' // スロバキア語 sk-SK
    ,'Skupaj potovanje razdalja' // スロベニア語 sl-SI
    ]
    // 73         // <- change
    ,statistical_all_recovery: [ // <- change
     '全回復量' // ja
    ,'All recovery amount' // en
    ,'Alle Rückgewinnungsmenge' // de ドイツ
    ,'Tout montant du recouvrement' // fr フランス
    ,'Toda cantidad de recuperación' // el スペイン
    ,'Tudo valor de recuperação' // pt ポルトガル
    ,'Tutti importo recupero' // itイタリア
    ,'Wszystkie kwoty odzysku' // ポーランド 3,000 *
    ,'Alla återvinningsvärdet' // スウェーデン   900 *
    ,'Kaikki elpyminen määrä' //フィンランド    500
	// 10
    ,'Alle herstel hoeveelheid' // オランダ 2,000   *
    ,'所有回收量' // 台湾(繁体字)(繁体字)
    ,'All utvinning beløp' // ノルウェー     400
    ,'Minden helyreállítási összege' // ハンガリー    1,000
    ,'Všechny výše zotavení' // チェコ語      cs-CZ
    ,'Alle opsving beløb' // デンマーク語 da-DK
    ,'Kõik taastamise summa' // エストニア語 et-EE
    ,'Όλα ποσό ανάκτησης' // ギリシャ語 el-GR
    ,'Sve iznos oporavak' // クロアチア語 hr-HR
    ,'Visas atgūšana summa' // ラトビア語   lv-LV
	// 20
    ,'Visi išieškojimo suma' // リトアニア語 lt-LT
    ,'Toate sumă de recuperare' // ルーマニア語 ro-RO
    ,'Všetky vyššie zotavenie' // スロバキア語 sk-SK
    ,'Vse znesek izterjave' // スロベニア語 sl-SI
    ]
    // 74         // <- change
    ,statistical_all_area_point: [ // <- change
     '全エリアポイント' // ja
    ,'All area point' // en
    ,'All Sehenswürdigkeit' // de ドイツ
    ,'Tout point de la zone' // fr フランス
    ,'Todo punto de la zona' // el スペイン
    ,'Todos ponto área' // pt ポルトガル
    ,'Tutto punto zona' // itイタリア
    ,'Wszystko wskazuje obszar' // ポーランド 3,000 *
    ,'Alla områden punkt' // スウェーデン   900 *
    ,'Kaikki alue kohta' //フィンランド    500
	// 10
    ,'Alle bezienswaardigheid' // オランダ 2,000   *
    ,'所有區域點' // 台湾(繁体字)(繁体字)
    ,'All severdighet' // ノルウェー     400
    ,'Minden területen pont' // ハンガリー    1,000
    ,'Všechny oblast bod' // チェコ語      cs-CZ
    ,'Alle attraktioner' // デンマーク語 da-DK
    ,'Kõik piirkonna punkti' // エストニア語 et-EE
    ,'Όλες σημείο περιοχή' // ギリシャ語 el-GR
    ,'Sve područje točka' // クロアチア語 hr-HR
    ,'Viss apgabals punkts' // ラトビア語   lv-LV
	// 20
    ,'Visi plotas taškas' // リトアニア語 lt-LT
    ,'Toate punct zonă' // ルーマニア語 ro-RO
    ,'Všetky oblasť bod' // スロバキア語 sk-SK
    ,'Vse območje točka' // スロベニア語 sl-SI
    ]
    // 75         // <- change
    ,statistical_all_units: [ // <- change
     '総ユニット数' // ja
    ,'The total number of units' // en
    ,'Die Gesamtzahl der Einheiten' // de ドイツ
    ,'Le nombre total d\'unités' // fr フランス
    ,'El número total de unidades' // el スペイン
    ,'O número total de unidades' // pt ポルトガル
    ,'Il numero totale di unità' // itイタリア
    ,'Łączna liczba jednostek' // ポーランド 3,000 *
    ,'Det totala antalet enheter' // スウェーデン   900 *
    ,'Yksiköiden kokonaismäärä' //フィンランド    500
	// 10
    ,'Het totale aantal eenheden' // オランダ 2,000   *
    ,'的單元的總數' // 台湾(繁体字)(繁体字)
    ,'Det totale antall enheter' // ノルウェー     400
    ,'Az összes egység száma' // ハンガリー    1,000
    ,'Celkový počet jednotek' // チェコ語      cs-CZ
    ,'Det samlede antal enheder' // デンマーク語 da-DK
    ,'Kogu ühikute arv' // エストニア語 et-EE
    ,'Ο συνολικός αριθμός των μονάδων' // ギリシャ語 el-GR
    ,'Ukupan broj jedinica' // クロアチア語 hr-HR
    ,'Kopējais vienību skaits' // ラトビア語   lv-LV
	// 20
    ,'Bendras skaičius vienetų' // リトアニア語 lt-LT
    ,'Numărul total de unități' // ルーマニア語 ro-RO
    ,'Celkový počet jednotiek' // スロバキア語 sk-SK
    ,'Skupno število enot' // スロベニア語 sl-SI
    ]
    // 76         // <- change
    ,statistical_all_fatigue: [ // <- change
     '全疲労' // ja
    ,'All fatigue' // en
    ,'alle Müdigkeit' // de ドイツ
    ,'tous fatigue' // fr フランス
    ,'Toda la fatiga' // el スペイン
    ,'Todos fadiga' // pt ポルトガル
    ,'tutto fatica' // itイタリア
    ,'wszystko zmęczenie' // ポーランド 3,000 *
    ,'alla trötthet' // スウェーデン   900 *
    ,'kaikki väsymys' //フィンランド    500
	// 10
    ,'alle vermoeidheid' // オランダ 2,000   *
    ,'所有疲勞' // 台湾(繁体字)(繁体字)
    ,'all tretthet' // ノルウェー     400
    ,'minden fáradtság' // ハンガリー    1,000
    ,'Všechny únava' // チェコ語      cs-CZ
    ,'alle træthed' // デンマーク語 da-DK
    ,'Kõik väsimus' // エストニア語 et-EE
    ,'Όλα κόπωση' // ギリシャ語 el-GR
    ,'Sve umor' // クロアチア語 hr-HR
    ,'Visas nogurums' // ラトビア語   lv-LV
	// 20
    ,'Visi nuovargis' // リトアニア語 lt-LT
    ,'toate oboseală' // ルーマニア語 ro-RO
    ,'všetky únava' // スロバキア語 sk-SK
    ,'vse utrujenost' // スロベニア語 sl-SI
    ]

    // 77         // <- change
    ,statistical_all_recovery_fatigue: [ // <- change
     '全疲労回復量' // ja
    ,'All fatigue recovery amount' // en
    ,'Alle Müdigkeit Rückgewinnungsmenge' // de ドイツ
    ,'Tout montant de récupération de la fatigue' // fr フランス
    ,'Toda cantidad recuperación de la fatiga' // el スペイン
    ,'Todos montante de recuperação de fadiga' // pt ポルトガル
    ,'Tutti importo recupero fatica' // itイタリア
    ,'Wszystkie kwoty odzysku zmęczenie' // ポーランド 
    ,'All trötthet återvinningsvärdet' // スウェーデン
    ,'Kaikki väsymys elpyminen määrä' // フィンランド
	// 10
    ,'Alle vermoeidheid herstel hoeveelheid' // オランダ
    ,'所有的疲勞恢復量' // 台湾(繁体字)(繁体字)
    ,'All tretthet utvinning beløp' // ノルウェー
    ,'Minden fáradtságot helyreállítási összege' // ハンガリー
    ,'Všechny výše únava zotavení' // チェコ語      cs-CZ
    ,'Alle træthed opsving beløb' // デンマーク語 da-DK
    ,'Kõik väsimus taastamise summa' // エストニア語 et-EE
    ,'Όλα ποσό ανάκτησης κόπωση' // ギリシャ語 el-GR
    ,'Sve količina umora oporavak' // クロアチア語 hr-HR
    ,'Visi nogurums atgūšana summa' // ラトビア語   lv-LV
	// 20
    ,'Visi nuovargis išieškojimo suma' // リトアニア語 lt-LT
    ,'Toate sumă de recuperare oboseala' // ルーマニア語 ro-RO
    ,'Všetky vyššie únava zotavenie' // スロバキア語 sk-SK
    ,'Vse znesek utrujenost okrevanje' // スロベニア語 sl-SI
    ]

    // 78         // <- change
    ,statistical_average_sum_attack_point: [ // <- change
     '平均合計攻撃ポイント' // ja
    ,'' // en
    ,'' // de ドイツ
    ,'' // fr フランス
    ,'' // el スペイン
    ,'' // pt ポルトガル
    ,'' // itイタリア
    ,'' // ポーランド 
    ,'' // スウェーデン
    ,'' // フィンランド
	// 10
    ,'' // オランダ
    ,'' // 台湾(繁体字)(繁体字)
    ,'' // ノルウェー
    ,'' // ハンガリー
    ,'' // チェコ語      cs-CZ
    ,'' // デンマーク語 da-DK
    ,'' // エストニア語 et-EE
    ,'' // ギリシャ語 el-GR
    ,'' // クロアチア語 hr-HR
    ,'' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'' // ルーマニア語 ro-RO
    ,'' // スロバキア語 sk-SK
    ,'' // スロベニア語 sl-SI
    ]

    // 79         // <- change
    ,statistical_average_sum_defence_point: [ // <- change
     '平均合計防御ポイント' // ja
    ,'' // en
    ,'' // de ドイツ
    ,'' // fr フランス
    ,'' // el スペイン
    ,'' // pt ポルトガル
    ,'' // itイタリア
    ,'' // ポーランド 
    ,'' // スウェーデン
    ,'' // フィンランド
	// 10
    ,'' // オランダ
    ,'' // 台湾(繁体字)(繁体字)
    ,'' // ノルウェー
    ,'' // ハンガリー
    ,'' // チェコ語      cs-CZ
    ,'' // デンマーク語 da-DK
    ,'' // エストニア語 et-EE
    ,'' // ギリシャ語 el-GR
    ,'' // クロアチア語 hr-HR
    ,'' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'' // ルーマニア語 ro-RO
    ,'' // スロバキア語 sk-SK
    ,'' // スロベニア語 sl-SI
    ]

    // 80         // <- change
    ,statistical_average_sum_move_point: [ // <- change
     '平均合計移動ポイント' // ja
    ,'' // en
    ,'' // de ドイツ
    ,'' // fr フランス
    ,'' // el スペイン
    ,'' // pt ポルトガル
    ,'' // itイタリア
    ,'' // ポーランド 
    ,'' // スウェーデン
    ,'' // フィンランド
	// 10
    ,'' // オランダ
    ,'' // 台湾(繁体字)(繁体字)
    ,'' // ノルウェー
    ,'' // ハンガリー
    ,'' // チェコ語      cs-CZ
    ,'' // デンマーク語 da-DK
    ,'' // エストニア語 et-EE
    ,'' // ギリシャ語 el-GR
    ,'' // クロアチア語 hr-HR
    ,'' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'' // ルーマニア語 ro-RO
    ,'' // スロバキア語 sk-SK
    ,'' // スロベニア語 sl-SI
    ]

    // 81         // <- change
    ,statistical_average_sum_recovery_point: [ // <- change
     '平均合計回復ポイント' // ja
    ,'' // en
    ,'' // de ドイツ
    ,'' // fr フランス
    ,'' // el スペイン
    ,'' // pt ポルトガル
    ,'' // itイタリア
    ,'' // ポーランド 
    ,'' // スウェーデン
    ,'' // フィンランド
	// 10
    ,'' // オランダ
    ,'' // 台湾(繁体字)(繁体字)
    ,'' // ノルウェー
    ,'' // ハンガリー
    ,'' // チェコ語      cs-CZ
    ,'' // デンマーク語 da-DK
    ,'' // エストニア語 et-EE
    ,'' // ギリシャ語 el-GR
    ,'' // クロアチア語 hr-HR
    ,'' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'' // ルーマニア語 ro-RO
    ,'' // スロバキア語 sk-SK
    ,'' // スロベニア語 sl-SI
    ]

    // 82         // <- change
    ,statistical_average_sum_max_hitpoint: [ // <- change
     '平均合計最大ヒットポイント' // ja
    ,'' // en
    ,'' // de ドイツ
    ,'' // fr フランス
    ,'' // el スペイン
    ,'' // pt ポルトガル
    ,'' // itイタリア
    ,'' // ポーランド 
    ,'' // スウェーデン
    ,'' // フィンランド
	// 10
    ,'' // オランダ
    ,'' // 台湾(繁体字)(繁体字)
    ,'' // ノルウェー
    ,'' // ハンガリー
    ,'' // チェコ語      cs-CZ
    ,'' // デンマーク語 da-DK
    ,'' // エストニア語 et-EE
    ,'' // ギリシャ語 el-GR
    ,'' // クロアチア語 hr-HR
    ,'' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'' // ルーマニア語 ro-RO
    ,'' // スロバキア語 sk-SK
    ,'' // スロベニア語 sl-SI
    ]

    // 83         // <- change
    ,game_end_order: [ // <- change
     '順位' // ja
    ,'Ranking' // en
    ,'Ranking' // de ドイツ
    ,'Classement' // fr フランス
    ,'Clasificación' // el スペイン
    ,'Ranking' // pt ポルトガル
    ,'ranking' // itイタリア
    ,'ranking' // ポーランド 
    ,'ranking' // スウェーデン
    ,'sijoitus' // フィンランド
	// 10
    ,'ranking' // オランダ
    ,'排行' // 台湾(繁体字)(繁体字)
    ,'Rangering' // ノルウェー
    ,'Ranglista' // ハンガリー
    ,'Žebříček' // チェコ語      cs-CZ
    ,'Ranking' // デンマーク語 da-DK
    ,'Edetabel' // エストニア語 et-EE
    ,'Κατάταξη' // ギリシャ語 el-GR
    ,'Poredak' // クロアチア語 hr-HR
    ,'Ranking' // ラトビア語   lv-LV
	// 20
    ,'Reitingas' // リトアニア語 lt-LT
    ,'Clasament' // ルーマニア語 ro-RO
    ,'rebríček' // スロバキア語 sk-SK
    ,'Uvrstitve' // スロベニア語 sl-SI
    ]


    // 84         // <- change
    ,game_end_unit_type: [ // <- change
     'タイプ' // ja
    ,'type' // en
    ,'Art' // de ドイツ
    ,'type' // fr フランス
    ,'escribe' // el スペイン
    ,'tipo' // pt ポルトガル
    ,'tipo' // itイタリア
    ,'rodzaj' // ポーランド 
    ,'typ' // スウェーデン
    ,'tyyppi' // フィンランド
	// 10
    ,'type' // オランダ
    ,'類型' // 台湾(繁体字)(繁体字)
    ,'type' // ノルウェー
    ,'típus' // ハンガリー
    ,'typ' // チェコ語      cs-CZ
    ,'type' // デンマーク語 da-DK
    ,'tüüp' // エストニア語 et-EE
    ,'τύπος' // ギリシャ語 el-GR
    ,'tip' // クロアチア語 hr-HR
    ,'tips' // ラトビア語   lv-LV
	// 20
    ,'tipas' // リトアニア語 lt-LT
    ,'tip' // ルーマニア語 ro-RO
    ,'typ' // スロバキア語 sk-SK
    ,'tip' // スロベニア語 sl-SI
    ]

    // 85         // <- change
    ,recode_game: [ // <- change
     '試合' // ja
    ,'game' // en
    ,'Match' // de ドイツ
    ,'match' // fr フランス
    ,'Partido' // el スペイン
    ,'fósforo' // pt ポルトガル
    ,'partita' // itイタリア
    ,'mecz' // ポーランド 
    ,'match' // スウェーデン
    ,'ottelu' // フィンランド
	// 10
    ,'wedstrijd' // オランダ
    ,'賽事' // 台湾(繁体字)(繁体字)
    ,'Match' // ノルウェー
    ,'mérkőzés' // ハンガリー
    ,'zápas' // チェコ語      cs-CZ
    ,'match' // デンマーク語 da-DK
    ,'Match' // エストニア語 et-EE
    ,'Αγώνα' // ギリシャ語 el-GR
    ,'Usporedi' // クロアチア語 hr-HR
    ,'mačs' // ラトビア語   lv-LV
	// 20
    ,'Varžybos' // リトアニア語 lt-LT
    ,'meci' // ルーマニア語 ro-RO
    ,'zápas' // スロバキア語 sk-SK
    ,'Match' // スロベニア語 sl-SI
    ]

    // 86         // <- change
    ,recode_percentage: [ // <- change
     '勝率' // ja
    ,'Winning percentage' // en
    ,'Gewinnwahrscheinlichkeit' // de ドイツ
    ,'pourcentage de victoires' // fr フランス
    ,'porcentaje de victorias' // el スペイン
    ,'porcentagem de vitórias' // pt ポルトガル
    ,'percentuale di vincita' // itイタリア
    ,'odsetek zwycięstw' // ポーランド 
    ,'vinnande procentsats' // スウェーデン
    ,'voittavan prosenttiosuus' // フィンランド
	// 10
    ,'winnende percentage' // オランダ
    ,'勝率' // 台湾(繁体字)(繁体字)
    ,'vinnende prosentandel' // ノルウェー
    ,'nyerési aránya' // ハンガリー
    ,'Vítězné procento' // チェコ語      cs-CZ
    ,'vindende procent' // デンマーク語 da-DK
    ,'võitnud protsendi' // エストニア語 et-EE
    ,'ποσοστό νίκης' // ギリシャ語 el-GR
    ,'Pobjednički postotak' // クロアチア語 hr-HR
    ,'uzvarot procents' // ラトビア語   lv-LV
	// 20
    ,'laimėti procentais' // リトアニア語 lt-LT
    ,'Victorie procent' // ルーマニア語 ro-RO
    ,'víťazné percento' // スロバキア語 sk-SK
    ,'Uspešen odstotek' // スロベニア語 sl-SI
    ]
    // 87         // <- not use
    ,game_end_total: [ 
     '合計' // ja
    ,'' // en
    ,'' // de ドイツ
    ,'' // fr フランス
    ,'' // el スペイン
    ,'' // pt ポルトガル
    ,'' // itイタリア
    ,'' // ポーランド 
    ,'' // スウェーデン
    ,'' // フィンランド
	// 10
    ,'' // オランダ
    ,'' // 台湾(繁体字)(繁体字)
    ,'' // ノルウェー
    ,'' // ハンガリー
    ,'' // チェコ語      cs-CZ
    ,'' // デンマーク語 da-DK
    ,'' // エストニア語 et-EE
    ,'' // ギリシャ語 el-GR
    ,'' // クロアチア語 hr-HR
    ,'' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'' // ルーマニア語 ro-RO
    ,'' // スロバキア語 sk-SK
    ,'' // スロベニア語 sl-SI
    ]
    // 88         // <- change
    ,game_recode_title: [ // <- change
     '成績' // ja
    ,'Performance' // en
    ,'Leistung' // de ドイツ
    ,'Performance' // fr フランス
    ,'Rendimiento' // el スペイン
    ,'desempenho' // pt ポルトガル
    ,'performance' // itイタリア
    ,'wydajność' // ポーランド 
    ,'prestanda' // スウェーデン
    ,'suorituskyky' // フィンランド
	// 10
    ,'prestatie' // オランダ
    ,'演出' // 台湾(繁体字)(繁体字)
    ,'ytelse' // ノルウェー
    ,'Teljesítmény' // ハンガリー
    ,'představení' // チェコ語      cs-CZ
    ,'ydeevne' // デンマーク語 da-DK
    ,'Performance' // エストニア語 et-EE
    ,'επιδόσεις' // ギリシャ語 el-GR
    ,'performanse' // クロアチア語 hr-HR
    ,'sniegums' // ラトビア語   lv-LV
	// 20
    ,'Veiklos' // リトアニア語 lt-LT
    ,'performanță' // ルーマニア語 ro-RO
    ,'Predstavenie' // スロバキア語 sk-SK
    ,'Uspešnost' // スロベニア語 sl-SI
    ]
    // 89         // <- change
    ,level_up: [ // <- change
     'レベルアップ' // ja
    ,'Level up' // en
    ,'ausgleichen' // de ドイツ
    ,'niveau supérieur' // fr フランス
    ,'Subir de nivel' // el スペイン
    ,'nível máximo' // pt ポルトガル
    ,'Level up' // itイタリア
    ,'poziom wyżej' // ポーランド 
    ,'nivå upp' // スウェーデン
    ,'Level up' // フィンランド
	// 10
    ,'niveau omhoog' // オランダ
    ,'墊平' // 台湾(繁体字)(繁体字)
    ,'nivå opp' // ノルウェー
    ,'Egy szinttel feljebb' // ハンガリー
    ,'vyrovnat' // チェコ語      cs-CZ
    ,'niveau op' // デンマーク語 da-DK
    ,'tase üles' // エストニア語 et-EE
    ,'επίπεδο έως' // ギリシャ語 el-GR
    ,'na višu razinu' // クロアチア語 hr-HR
    ,'līmeni uz augšu' // ラトビア語   lv-LV
	// 20
    ,'lygiu aukštyn' // リトアニア語 lt-LT
    ,'nivelul de sus' // ルーマニア語 ro-RO
    ,'vyrovnať' // スロバキア語 sk-SK
    ,'raven navzgor' // スロベニア語 sl-SI
    ]
    // 90         // <- change
    ,set_dialog: [ // <- change
     'ダイアログ' // ja
    ,'dialog' // en
    ,'Dialog' // de ドイツ
    ,'dialogue' // fr フランス
    ,'diálogo' // el スペイン
    ,'diálogo' // pt ポルトガル
    ,'dialogo' // itイタリア
    ,'Dialog' // ポーランド 
    ,'Dialog' // スウェーデン
    ,'dialogi' // フィンランド
	// 10
    ,'dialoog' // オランダ
    ,'對話框' // 台湾(繁体字)(繁体字)
    ,'Dialog' // ノルウェー
    ,'Dialog' // ハンガリー
    ,'Dialog' // チェコ語      cs-CZ
    ,'dialog' // デンマーク語 da-DK
    ,'Dialog' // エストニア語 et-EE
    ,'Διάλογος' // ギリシャ語 el-GR
    ,'Dijalog' // クロアチア語 hr-HR
    ,'Dialog' // ラトビア語   lv-LV
	// 20
    ,'dialogas' // リトアニア語 lt-LT
    ,'dialog' // ルーマニア語 ro-RO
    ,'dialóg' // スロバキア語 sk-SK
    ,'pogovorno' // スロベニア語 sl-SI
    ]
    // 91         // <- change
    ,statistical_start_all_hitpoint: [ // <- change
     '開始時ヒットポイント' // ja
    ,'At the start of hit points' // en
    ,'Zu Beginn der Trefferpunkte' // de ドイツ
    ,'Au début de points de vie' // fr フランス
    ,'Al inicio de puntos de golpe' // el スペイン
    ,'No início de pontos de vida' // pt ポルトガル
    ,'All\'inizio di punti ferita' // itイタリア
    ,'Na początku punktów wytrzymałości' // ポーランド 
    ,'I början av träffpunkter' // スウェーデン
    ,'Alussa osumapisteet' // フィンランド
	// 10
    ,'Aan het begin van de hit points' // オランダ
    ,'在較高的命中率開始' // 台湾(繁体字)(繁体字)
    ,'Ved starten av poeng' // ノルウェー
    ,'Elején találati pont' // ハンガリー
    ,'Na začátku životů' // チェコ語      cs-CZ
    ,'Ved starten af hit points' // デンマーク語 da-DK
    ,'Alguses elupunkt' // エストニア語 et-EE
    ,'Κατά την έναρξη των σημείων hit' // ギリシャ語 el-GR
    ,'Na početku hit bodova' // クロアチア語 hr-HR
    ,'Sākoties hit punktiem' // ラトビア語   lv-LV
	// 20
    ,'Tuo hit kiekis pradžios' // リトアニア語 lt-LT
    ,'La începutul hitpoints' // ルーマニア語 ro-RO
    ,'Na začiatku životov' // スロバキア語 sk-SK
    ,'Na začetku hit točk' // スロベニア語 sl-SI
    ]
    // 92         // <- change
    ,statistical_create_uinit_all_hitpoint: [ // <- change
     '生成ヒットポイント' // ja
    ,'Generation hitpoints' // en
    ,'Generation Trefferpunkte' // de ドイツ
    ,'Génération de points de vie' // fr フランス
    ,'Generación de puntos de golpe' // el スペイン
    ,'Geração de pontos de vida' // pt ポルトガル
    ,'Generazione punti ferita' // itイタリア
    ,'Generacja punktów obrażeń' // ポーランド 
    ,'Generation träffpoäng' // スウェーデン
    ,'Generation osumapisteet' // フィンランド
	// 10
    ,'Generation schade' // オランダ
    ,'代命中點' // 台湾(繁体字)(繁体字)
    ,'Generation helsepoeng' // ノルウェー
    ,'Generation találatok' // ハンガリー
    ,'Generace životů' // チェコ語      cs-CZ
    ,'Generation hit points' // デンマーク語 da-DK
    ,'Generation tabas punktid' // エストニア語 et-EE
    ,'Γενιά χτύπησε σημεία' // ギリシャ語 el-GR
    ,'Generacija hit bodova' // クロアチア語 hr-HR
    ,'Generation hit punkti' // ラトビア語   lv-LV
	// 20
    ,'Karta gyvybės taškų' // リトアニア語 lt-LT
    ,'Generație a lovit puncte' // ルーマニア語 ro-RO
    ,'generácia životov' // スロバキア語 sk-SK
    ,'Generation hit točk' // スロベニア語 sl-SI
    ]
    // 93         // <- change
    ,menu_hitpoint: [ // <- change
     'ヒットポイント' // ja
    ,'Hitpoint' // en
    ,'hit Punkt' // de ドイツ
    ,'point de Hit' // fr フランス
    ,'punto de llegada' // el スペイン
    ,'ponto de vida' // pt ポルトガル
    ,'punto hit' // itイタリア
    ,'punkt hit' // ポーランド 
    ,'hit punkt' // スウェーデン
    ,'hit kohta' // フィンランド
	// 10
    ,'hit punt' // オランダ
    ,'命中點' // 台湾(繁体字)(繁体字)
    ,'hit punkt' // ノルウェー
    ,'hit pont' // ハンガリー
    ,'hit bod' // チェコ語      cs-CZ
    ,'Hit point' // デンマーク語 da-DK
    ,'Tulemus punkti' // エストニア語 et-EE
    ,'σημείο χτύπημα' // ギリシャ語 el-GR
    ,'Hit točka' // クロアチア語 hr-HR
    ,'Rezultāts punkts' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'punct lovit' // ルーマニア語 ro-RO
    ,'hit bod' // スロバキア語 sk-SK
    ,'hit točka' // スロベニア語 sl-SI
    ]
    // 94         // <- change
    ,menu_cancel_pattern: [ // <- change
     'キャンセル' // ja
    ,'Cancel' // en
    ,'Stornierung' // de ドイツ
    ,'annulation' // fr フランス
    ,'cancelación' // el スペイン
    ,'cancelamento' // pt ポルトガル
    ,'cancellazione' // itイタリア
    ,'anulowanie' // ポーランド 
    ,'avbokning' // スウェーデン
    ,'peruutus' // フィンランド
	// 10
    ,'annulering' // オランダ
    ,'消除' // 台湾(繁体字)(繁体字)
    ,'Avbestillings' // ノルウェー
    ,'törlés' // ハンガリー
    ,'zrušení' // チェコ語      cs-CZ
    ,'Annullering' // デンマーク語 da-DK
    ,'tühistamine' // エストニア語 et-EE
    ,'ακύρωση' // ギリシャ語 el-GR
    ,'poništenje' // クロアチア語 hr-HR
    ,'atcelšana' // ラトビア語   lv-LV
	// 20
    ,'atšaukimas' // リトアニア語 lt-LT
    ,'anulare' // ルーマニア語 ro-RO
    ,'zrušenie' // スロバキア語 sk-SK
    ,'Odpoved' // スロベニア語 sl-SI
    ]
    // 95         // <- change
    ,xxxx_xxxx: [ // <- change
     '' // ja
    ,'' // en
    ,'' // de ドイツ
    ,'' // fr フランス
    ,'' // el スペイン
    ,'' // pt ポルトガル
    ,'' // itイタリア
    ,'' // ポーランド 
    ,'' // スウェーデン
    ,'' // フィンランド
	// 10
    ,'' // オランダ
    ,'' // 台湾(繁体字)(繁体字)
    ,'' // ノルウェー
    ,'' // ハンガリー
    ,'' // チェコ語      cs-CZ
    ,'' // デンマーク語 da-DK
    ,'' // エストニア語 et-EE
    ,'' // ギリシャ語 el-GR
    ,'' // クロアチア語 hr-HR
    ,'' // ラトビア語   lv-LV
	// 20
    ,'' // リトアニア語 lt-LT
    ,'' // ルーマニア語 ro-RO
    ,'' // スロバキア語 sk-SK
    ,'' // スロベニア語 sl-SI
    ]
};
