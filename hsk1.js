class Progresso {
  static guardar(progreso) {
    localStorage.setItem('progresoChino', JSON.stringify(progreso));
  }

  static cargar() {
    const datos = localStorage.getItem('progresoChino');
    return datos ? JSON.parse(datos) : {};
  }
}

class Frases {
  static lista = [
 { mandarin: "爱", pinyin: "ài", spanish: "amar" },
  { mandarin: "八", pinyin: "bā", spanish: "ocho" },
  { mandarin: "爸爸", pinyin: "bàba", spanish: "papá" },
  { mandarin: "杯子", pinyin: "bēizi", spanish: "taza / vaso" },
  { mandarin: "北京", pinyin: "Běijīng", spanish: "Pekín" },
  { mandarin: "本", pinyin: "běn", spanish: "clasificador para libros" },
  { mandarin: "不", pinyin: "bù", spanish: "no" },
  { mandarin: "菜", pinyin: "cài", spanish: "comida / verdura / plato" },
  { mandarin: "茶", pinyin: "chá", spanish: "té" },
  { mandarin: "吃", pinyin: "chī", spanish: "comer" },
  { mandarin: "出租车", pinyin: "chūzūchē", spanish: "taxi" },
  { mandarin: "打电话", pinyin: "dǎ diànhuà", spanish: "llamar por teléfono" },
  { mandarin: "大", pinyin: "dà", spanish: "grande" },
  { mandarin: "的", pinyin: "de", spanish: "partícula posesiva" },
  { mandarin: "点", pinyin: "diǎn", spanish: "hora / punto" },
  { mandarin: "电脑", pinyin: "diànnǎo", spanish: "computadora" },
  { mandarin: "电视", pinyin: "diànshì", spanish: "televisión" },
  { mandarin: "电影", pinyin: "diànyǐng", spanish: "película" },
  { mandarin: "东西", pinyin: "dōngxi", spanish: "cosa / objeto" },
  { mandarin: "都", pinyin: "dōu", spanish: "todo / todos" },
  { mandarin: "读", pinyin: "dú", spanish: "leer" },
  { mandarin: "对不起", pinyin: "duìbuqǐ", spanish: "lo siento" },
  { mandarin: "多", pinyin: "duō", spanish: "mucho / muchos" },
  { mandarin: "多少", pinyin: "duōshǎo", spanish: "cuánto" },
  { mandarin: "儿子", pinyin: "érzi", spanish: "hijo" },
  { mandarin: "二", pinyin: "èr", spanish: "dos" },
  { mandarin: "饭店", pinyin: "fàndiàn", spanish: "restaurante / hotel" },
  { mandarin: "飞机", pinyin: "fēijī", spanish: "avión" },
  { mandarin: "分钟", pinyin: "fēnzhōng", spanish: "minuto" },
  { mandarin: "高兴", pinyin: "gāoxìng", spanish: "contento / feliz" },
  { mandarin: "个", pinyin: "gè", spanish: "clasificador general" },
  { mandarin: "工作", pinyin: "gōngzuò", spanish: "trabajo / trabajar" },
  { mandarin: "狗", pinyin: "gǒu", spanish: "perro" },
  { mandarin: "汉语", pinyin: "Hànyǔ", spanish: "chino (idioma)" },
  { mandarin: "好", pinyin: "hǎo", spanish: "bueno / bien" },
  { mandarin: "号", pinyin: "hào", spanish: "número" },
  { mandarin: "喝", pinyin: "hē", spanish: "beber" },
  { mandarin: "和", pinyin: "hé", spanish: "y" },
  { mandarin: "很", pinyin: "hěn", spanish: "muy" },
  { mandarin: "后面", pinyin: "hòumiàn", spanish: "detrás" },
  { mandarin: "回", pinyin: "huí", spanish: "volver / regresar" },
  { mandarin: "会", pinyin: "huì", spanish: "saber / poder (habilidad)" },
  { mandarin: "火车站", pinyin: "huǒchēzhàn", spanish: "estación de tren" },
  { mandarin: "几", pinyin: "jǐ", spanish: "cuántos" },
  { mandarin: "家", pinyin: "jiā", spanish: "casa / hogar" },
  { mandarin: "叫", pinyin: "jiào", spanish: "llamarse / llamar" },
  { mandarin: "今天", pinyin: "jīntiān", spanish: "hoy" },
  { mandarin: "九", pinyin: "jiǔ", spanish: "nueve" },
  { mandarin: "开", pinyin: "kāi", spanish: "abrir / encender / conducir" },
  { mandarin: "看", pinyin: "kàn", spanish: "ver / mirar" },
  { mandarin: "看见", pinyin: "kànjiàn", spanish: "ver (con resultado)" },
  { mandarin: "块", pinyin: "kuài", spanish: "clasificador / trozo / yuan" },
  { mandarin: "来", pinyin: "lái", spanish: "venir" },
  { mandarin: "老师", pinyin: "lǎoshī", spanish: "maestro / profesor" },
  { mandarin: "了", pinyin: "le", spanish: "partícula de aspecto / cambio" },
  { mandarin: "冷", pinyin: "lěng", spanish: "frío" },
  { mandarin: "六", pinyin: "liù", spanish: "seis" },
  { mandarin: "妈妈", pinyin: "māma", spanish: "mamá" },
  { mandarin: "吗", pinyin: "ma", spanish: "partícula interrogativa" },
  { mandarin: "买", pinyin: "mǎi", spanish: "comprar" },
  { mandarin: "猫", pinyin: "māo", spanish: "gato" },
  { mandarin: "没", pinyin: "méi", spanish: "no tener / no" },
  { mandarin: "没关系", pinyin: "méiguānxi", spanish: "no importa / está bien" },
  { mandarin: "米饭", pinyin: "mǐfàn", spanish: "arroz cocido" },
  { mandarin: "明天", pinyin: "míngtiān", spanish: "mañana (día siguiente)" },
  { mandarin: "名字", pinyin: "míngzi", spanish: "nombre" }
  ];

  static obtenerAleatoria() {
    const progreso = Progresso.cargar();
    const frasesDisponibles = this.lista.filter(frase => 
      (progreso[frase.mandarin] || 0) < 5
    );
    
    if (frasesDisponibles.length === 0) {
      alert('¡Felicidades mi vida, dominaste todo! 💖');
      return this.lista[0];
    }

    
    return frasesDisponibles[Math.floor(Math.random() * frasesDisponibles.length)];
  }
}