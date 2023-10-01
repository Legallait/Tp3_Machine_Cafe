/*
export const ingredient = [
    {
        title: "Eau",
        quantity: 200
    },
    {
        title: "Lait",
        quantity: 50
    },
    {
        title: "Grains de café",
        quantity: 15
    },

    ]
*/

 export const Cafe = [
     {
         QteEau: 0,
         QteLait : 0,
         QteGrain : 0,
         QteTasse: 0,
         PrixRecup : 0
     },
     {
         title :"Expresso",
         QteEauUni : 250,
         QteGrainsUni : 16,
         PrixUni : 4,
     },
     {
         title : "Latte",
         QteEauUni: 350,
         QteLaitUni : 75,
         QteGrainsUni : 12,
         PrixUni : 6,
     },
     {
        title : "Cappuccino",
         QteEauUni: 200,
         QteLaitUni: 100,
         QteGrainsUni: 12,
         PrixUni : 6,
     }
 ]

export const etapes  = [
    {
        title :"Commence à faire le café",
        duration: 500
    },
    {
        title:"Mouds les grains de café" ,
        duration: 1000
    },
    {
        title:"Fait chauffer l'eau",
        duration: 1000
    },
    {
        title:"Infuse les grains de café moulus",
        duration: 2000
    },
    {
        title:"Verse le café dans une tasse",
        duration: 1000
    },
    {
        title:"Ajoute un peu de lait dans la tasse",
        duration: 1000
    },
    {
        title:"Le café est terminé.",
        duration: 500
    }
]