export const LanguesMixin = {
    data () {
        return {
            langue: "anglais" // anglais // francais
        }
    },
    fr: {
        accueil: "Accueil",
        projet: "Projet",
        contact: "Contact",
        apropos: "À propos",

        nom: "Nom",
        prenom: "Prénom",
        courriel: "Courriel",
        categorie: "Catégorie",  
        emploie: "Emploie",
        information: "Informations",
        autre:"Autre",

        profile: "Mon Profile",
        competence: "Mes compétences",
        formation: "Mes formations",
        projetlabel: "Mes projets",

        portfolio: "Mon PortFolio personnel",
        lecteurdenouvelles: "React project réservation chalet",
        appvoyage: "Angular project réservation voyage",


        bonjour: "Bonjour, je m'appelle Nico Gelinas",
        jesuis: "Je suis développeur",

        texteapropos: "J'ai une passion pour le développement de systèmes intuitifs et conviviales. Je suis spécialisé dans les domaines mobile"
        +"Je préconise le développemnt 'responsive design' qui est indispensable aujourd'hui avec les nombreux formats d'appareils"
        +"mobiles. Je suis en mesure de développer des applications mobiles et prendre en charge les"
        +"applications « back-end » utilisées par les solutions mobiles afin de contrôler l’accès aux données et à divers services."
        +"J’implémente le développement par itération (Agile) me permettant la production d’un meilleur produit livrable."
    },
    an: {
        accueil: "Home",
        projet: "Project",
        contact: "Contact",
        apropos: "About",

        nom: "Lastname",
        prenom: "Firstname",
        courriel: "Email",
        categorie: "Category",
        emploie: "Job",
        information: "Informations",
        autre:"Other",


        profile: "My Profil",
        competence: "My skills",
        formation: "My studies",
        projetlabel: "My projects",

        portfolio: "My personal PortFolio",
        lecteurdenouvelles: "React chalet reservation",
        appvoyage: "Angular travel reservation",

        bonjour: "Hello, I'm Nico Gelinas",
        jesuis: "I am a developer",
        texteapropos:"I have a passion for the development of intuitive and user-friendly systems. I specialize in mobile fields. "
        +"I advocate 'responsive design' development which is essential today with the many formats of mobile devices. "
        +"I am able to develop mobile applications and support back-end applications used by mobile solutions to control "
        +"access to data and various services. I implement iteration development (Agile) allowing me to produce a better deliverable."
    },
    filters : {
        selectLangue: function (value, langue) {
            if (langue === 'francais'){
                let keys= Object.keys(LanguesMixin.fr);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return LanguesMixin.fr[value]
                    }
                }  
            } 
            if (langue === 'anglais'){
                let keys= Object.keys(LanguesMixin.an);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return LanguesMixin.an[value]
                    }
                }    
            }
        },
    }
};