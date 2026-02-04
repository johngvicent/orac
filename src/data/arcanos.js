const arcanosMayores = [
    {
        id: 0,
        nombre: "El Loco",
        image:"/src/assets/cards/00-the-fool.jpg",
        nombreIngles: "The Fool",
        descripcion: "Representa la inocencia, la libertad y el potencial ilimitado. Es el inicio de un viaje espiritual, simbolizando la fe en lo desconocido y la confianza en el universo.",
        significado: "Nuevo comienzo, aventura, fe, inocencia, libertad espiritual"
    },
    {
        id: 1,
        nombre: "El Mago",
        image:"/src/assets/cards/01-the-magician.jpg",
        nombreIngles: "The Magician",
        descripcion: "Simboliza la manifestación, la voluntad y el poder creativo. Representa la capacidad de transformar ideas en realidad usando recursos disponibles.",
        significado: "Manifestación, voluntad, poder creativo, concentración, habilidad"
    },
    {
        id: 2,
        nombre: "La Sacerdotisa",
        image:"/src/assets/cards/02-the-high-priestess.jpg",
        nombreIngles: "The High Priestess",
        descripcion: "Representa la intuición, el misterio y el conocimiento oculto. Simboliza la sabiduría interior, la conexión con lo divino y el equilibrio entre lo consciente y lo inconsciente.",
        significado: "Intuición, misterio, conocimiento oculto, sabiduría interior, equilibrio"
    },
    {
        id: 3,
        nombre: "La Emperatriz",
        image:"/src/assets/cards/03-the empress.jpg",
        nombreIngles: "The Empress",
        descripcion: "Simboliza la fertilidad, la abundancia y la creación. Representa la maternidad, la naturaleza y el poder femenino creativo.",
        significado: "Fertilidad, abundancia, creación, maternidad, naturaleza"
    },
    {
        id: 4,
        nombre: "El Emperador",
        image:"/src/assets/cards/04-the-emperor.jpg",
        nombreIngles: "The Emperor",
        descripcion: "Representa la autoridad, la estructura y el control. Simboliza el liderazgo, la estabilidad y el poder masculino constructivo.",
        significado: "Autoridad, estructura, liderazgo, estabilidad, poder"
    },
    {
        id: 5,
        nombre: "El Papa",
        image:"/src/assets/cards/05-the-hierophant.jpg",
        nombreIngles: "The Hihgh Priest",
        descripcion: "Simboliza la espiritualidad, la enseñanza y la tradición. Representa la guía espiritual, la educación y la conexión con lo sagrado.",
        significado: "Espiritualidad, enseñanza, tradición, guía espiritual, educación"
    },
    {
        id: 6,
        nombre: "Los Enamorados",
        image:"/src/assets/cards/06-the-lovers.jpg",
        nombreIngles: "The Lovers",
        descripcion: "Representa el amor, las elecciones y las relaciones. Simboliza la armonía, las decisiones importantes y la unión de opuestos.",
        significado: "Amor, elecciones, relaciones, armonía, decisiones"
    },
    {
        id: 7,
        nombre: "El Carro",
        image:"/src/assets/cards/07-the-chariot.jpg",
        nombreIngles: "The Chariot",
        descripcion: "Simboliza la victoria, la determinación y el control. Representa el triunfo sobre obstáculos y la dirección hacia metas.",
        significado: "Victoria, determinación, control, triunfo, dirección"
    },
    {
        id: 8,
        nombre: "La Fuerza",
        image:"/src/assets/cards/08-the-strength.jpg",
        nombreIngles: "Strength",
        descripcion: "Representa la fuerza interior, la compasión y el coraje. Simboliza el dominio de las emociones y la paciencia.",
        significado: "Fuerza interior, compasión, coraje, dominio emocional, paciencia"
    },
    {
        id: 9,
        nombre: "El Ermitaño",
        image:"/src/assets/cards/09-the-hermit.jpg",
        nombreIngles: "The Hermit",
        descripcion: "Simboliza la introspección, la búsqueda interior y la sabiduría. Representa la soledad necesaria para el crecimiento espiritual.",
        significado: "Introspección, búsqueda interior, sabiduría, soledad, crecimiento espiritual"
    },
    {
        id: 10,
        nombre: "La Rueda de la Fortuna",
        image:"/src/assets/cards/10-the-wheel-of-fortune.jpg",
        nombreIngles: "Wheel of Fortune",
        descripcion: "Representa el cambio, el ciclo de la vida y el destino. Simboliza los giros del destino y la inevitabilidad del cambio.",
        significado: "Cambio, ciclo de la vida, destino, giros, inevitabilidad"
    },
    {
        id: 11,
        nombre: "La Justicia",
        image:"/src/assets/cards/11-the-justice.jpg",
        nombreIngles: "Justice",
        descripcion: "Simboliza la justicia, el equilibrio y la verdad. Representa el karma, las decisiones justas y la responsabilidad.",
        significado: "Justicia, equilibrio, verdad, karma, responsabilidad"
    },
    {
        id: 12,
        nombre: "El Colgado",
        image:"/src/assets/cards/12-the-hanged-man.jpg",
        nombreIngles: "The Hanged Man",
        descripcion: "Representa la suspensión, la rendición y la perspectiva diferente. Simboliza la pausa necesaria para el cambio de perspectiva.",
        significado: "Suspensión, rendición, perspectiva, pausa, cambio de vista"
    },
    {
        id: 13,
        nombre: "La Muerte",
        image:"/src/assets/cards/13-death.jpg",
        nombreIngles: "Death",
        descripcion: "Simboliza la transformación, el final y el renacimiento. Representa el cambio inevitable y la renovación.",
        significado: "Transformación, final, renacimiento, cambio, renovación"
    },
    {
        id: 14,
        nombre: "La Templanza",
        image:"/src/assets/cards/14-temperance.jpg",
        nombreIngles: "Temperance",
        descripcion: "Representa el equilibrio, la moderación y la armonía. Simboliza la paciencia, la curación y el flujo natural.",
        significado: "Equilibrio, moderación, armonía, paciencia, curación"
    },
    {
        id: 15,
        nombre: "El Diablo",
        image:"/src/assets/cards/15-the-devil.jpg",
        nombreIngles: "The Devil",
        descripcion: "Simboliza la tentación, la materialidad y las ataduras. Representa las ilusiones, los deseos mundanos y la liberación necesaria.",
        significado: "Tentación, materialidad, ataduras, ilusiones, liberación"
    },
    {
        id: 16,
        nombre: "La Torre",
        image:"/src/assets/cards/16-the-tower.jpg",
        nombreIngles: "The Tower",
        descripcion: "Representa la destrucción, la revelación y el despertar. Simboliza cambios repentinos y la ruptura de estructuras falsas.",
        significado: "Destrucción, revelación, despertar, cambios repentinos, ruptura"
    },
    {
        id: 17,
        nombre: "La Estrella",
        image:"/src/assets/cards/17-the-star.jpg",
        nombreIngles: "The Star",
        descripcion: "Simboliza la esperanza, la inspiración y la serenidad. Representa la guía espiritual, la paz interior y la renovación.",
        significado: "Esperanza, inspiración, serenidad, guía espiritual, paz"
    },
    {
        id: 18,
        nombre: "La Luna",
        image:"/src/assets/cards/18-the-moon.jpg",
        nombreIngles: "The Moon",
        descripcion: "Representa la intuición, los sueños y lo inconsciente. Simboliza la ilusión, el misterio y la necesidad de confiar en la intuición.",
        significado: "Intuición, sueños, inconsciente, ilusión, misterio"
    },
    {
        id: 19,
        nombre: "El Sol",
        image:"/src/assets/cards/19-the-sun.jpg",
        nombreIngles: "The Sun",
        descripcion: "Simboliza la claridad, el éxito y la vitalidad. Representa la alegría, la confianza y la realización personal.",
        significado: "Claridad, éxito, vitalidad, alegría, confianza"
    },
    {
        id: 20,
        nombre: "El Juicio",
        image:"/src/assets/cards/20-judgement.jpg",
        nombreIngles: "Judgement",
        descripcion: "Representa el despertar, la evaluación y el renacimiento. Simboliza el llamado a la acción y la transformación espiritual.",
        significado: "Despertar, evaluación, renacimiento, llamado, transformación"
    },
    {
        id: 21,
        nombre: "El Mundo",
        image:"/src/assets/cards/21-the-world.jpg",
        nombreIngles: "The World",
        descripcion: "Simboliza la completitud, la realización y la unidad. Representa el logro de metas, la integración y el ciclo completo.",
        significado: "Completitud, realización, unidad, logro, integración"
    }
]

export default arcanosMayores