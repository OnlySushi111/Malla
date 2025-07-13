// Estructura de los ramos
const ramos = [
  { nombre: "Anatomía", semestre: 1, abre: ["Fisiología", "Ciclo Vital", "Cuidados de Enfermería I"] },
  { nombre: "Introducción a ciencias básicas", semestre: 1, abre: ["Fisiología", "Microbiología", "Introducción a la Metodología de la Investigación Cuantitativa", "Administración General y en Salud"] },
  { nombre: "Bioquímica y biología celular", semestre: 1, abre: ["Microbiología", "Fisiología"] },
  { nombre: "Antropología filosófica del cuidado", semestre: 1, abre: ["Salud y Sociedad Contemporánea", "Fundamentos de Enfermería"] },
  { nombre: "Psicología del Desarrollo", semestre: 1, abre: ["Ciclo Vital"] },
  { nombre: "Identidad personal", semestre: 1 },
  { nombre: "Microbiología", semestre: 2, abre: ["Fisiología", "Cuidados de Enfermería I", "Farmacología Clínica para Enfermería", "Fisiopatología"] },
  { nombre: "Salud y Sociedad Contemporánea", semestre: 2, abre: ["Educación para la Salud", "Enfermería Ambiental"] },
  { nombre: "Prevención de Infecciones Asociadas a la Atención en Salud", semestre: 2, abre: ["Cuidados de Enfermería I"] },
  { nombre: "Fundamentos de Enfermería", semestre: 2, abre: ["Educación para la Salud", "Administración General y en Salud", "Enfermería Ambiental"] },
  { nombre: "Introducción al pensamiento filosófico", semestre: 2 },
  { nombre: "Inglés I", semestre: 2, abre: ["Inglés II"] },
  { nombre: "Comunicación Efectiva", semestre: 2 },
  { nombre: "Fisiología", semestre: 3, abre: ["Farmacología Clínica para Enfermería", "Fisiopatología", "Cuidados de Enfermería II"] },
  { nombre: "Ciclo vital", semestre: 3, abre: ["Cuidados de Enfermería en la Mujer y Recién Nacido"] },
  { nombre: "Cuidados de Enfermería I", semestre: 3, abre: ["Cuidados de Enfermería II"] },
  { nombre: "Introducción a la Metodología de la Investigación Cuantitativa", semestre: 3, abre: ["Estadística y Bioestadística"] },
  { nombre: "Educación para la Salud", semestre: 3, abre: ["Enfermería Ambiental"] },
  { nombre: "Apreciación de los Lenguajes Artísticos", semestre: 3 },
  { nombre: "Inglés II", semestre: 3, abre: ["Inglés III"] },
  { nombre: "Farmacología Clínica para Enfermería", semestre: 4, abre: ["Cuidados de Enfermería del Adulto Médico Quirúrgico", "Cuidados de Enfermería en la Mujer y Recién Nacido"] },
  { nombre: "Fisiopatología", semestre: 4, abre: ["Cuidados de Enfermería del Adulto Médico Quirúrgico", "Cuidados de Enfermería en la Mujer y Recién Nacido"] },
  { nombre: "Cuidados de Enfermería II", semestre: 4, abre: ["Cuidados de Enfermería del Adulto Médico Quirúrgico", "Cuidados de Enfermería en la Mujer y Recién Nacido"] },
  { nombre: "Estadística y Bioestadística", semestre: 4, abre: ["Epidemiología y Salud Pública"] },
  { nombre: "Administración General y en Salud", semestre: 4, abre: ["Epidemiología y Salud Pública", "Informática para Enfermería I"] },
  { nombre: "Inglés III", semestre: 4 },
  { nombre: "Enfermería Ambiental", semestre: 5, abre: ["Introducción a la metodología de la Investigación Cualitativa"] },
  { nombre: "Cuidados de Enfermería del Adulto Médico Quirúrgico", semestre: 5, abre: ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"] },
  { nombre: "Cuidados de Enfermería en la Mujer y Recién Nacido", semestre: 5, abre: ["Cuidados de Enfermería en el Niño y Adolescente"] },
  { nombre: "Epidemiología y Salud Pública", semestre: 5, abre: ["Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Gestión de Calidad y Acreditación en salud", "Enfermería Basada en Evidencia"] },
  { nombre: "Informática para Enfermería I", semestre: 5, abre: ["Informática para Enfermería II"] },
  { nombre: "Ética General", semestre: 5 },
  { nombre: "Cuidados de Enfermería en Salud Mental", semestre: 6, abre: ["Bioética", "Cuidados Paliativos Universales", "Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Cuidados de Enfermería en Situación de Urgencia"] },
  { nombre: "Cuidados de Enfermería en la Persona Mayor", semestre: 6, abre: ["Bioética", "Cuidados Paliativos Universales", "Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Cuidados de Enfermería en Situación de Urgencia"] },
  { nombre: "Introducción a la metodología de la Investigación Cualitativa", semestre: 6, abre: ["Enfermería Basada en Evidencia"] },
  { nombre: "Informática para Enfermería II", semestre: 6, abre: ["Gestión de Calidad y Acreditación en salud"] },
  { nombre: "Persona y Trascendencia", semestre: 6 },
  { nombre: "Bioética", semestre: 7, abre: ["Internado de Enfermería I", "Internado de Enfermería II"] },
  { nombre: "Cuidados Paliativos Universales", semestre: 7, abre: ["Cuidados de Enfermería en Salud Familiar y Comunitaria II"] },
  { nombre: "Cuidados de Enfermería en Salud Familiar y Comunitaria I", semestre: 7, abre: ["Cuidados de Enfermería en Salud Familiar y Comunitaria II"] },
  { nombre: "Cuidados de Enfermería en el Niño y Adolescente", semestre: 7, abre: ["Cuidados de Enfermería en Salud Familiar y Comunitaria II"] },
  { nombre: "Gestión de Calidad y Acreditación en salud", semestre: 7, abre: ["Internado de Enfermería I", "Internado de Enfermería II"] },
  { nombre: "Liderazgo en Salud", semestre: 7 },
  { nombre: "Cuidados de Enfermería en Situación de Urgencia", semestre: 8, abre: ["Internado de Enfermería I", "Internado de Enfermería II"] },
  { nombre: "Cuidados de Enfermería en Salud Familiar y Comunitaria II", semestre: 8, abre: ["Internado de Enfermería I", "Internado de Enfermería II"] },
  { nombre: "Enfermería Basada en Evidencia", semestre: 8, abre: ["Internado de Enfermería I", "Internado de Enfermería II"] },
  { nombre: "Internado de Enfermería I", semestre: 9 },
  { nombre: "Internado de Enfermería II", semestre: 10 },
];

// Estado actual
let estado = {};

function crearMalla() {
  const malla = document.getElementById("malla");
  const columnas = {};

  ramos.forEach(ramo => {
    if (!columnas[ramo.semestre]) {
      const col = document.createElement("div");
      col.className = "semestre";
      col.innerHTML = `<h2>${ramo.semestre}° Semestre</h2>`;
      columnas[ramo.semestre] = col;
      malla.appendChild(col);
    }

    const btn = document.createElement("div");
    btn.className = "ramo bloqueado";
    btn.innerText = ramo.nombre;
    btn.setAttribute("data-nombre", ramo.nombre);

    if (!ramo.abre && !tieneRequisitos(ramo.nombre)) {
      btn.classList.remove("bloqueado");
    }

    btn.onclick = () => aprobarRamo(ramo.nombre);

    columnas[ramo.semestre].appendChild(btn);
  });
}

function tieneRequisitos(nombre) {
  return ramos.some(r => (r.abre || []).includes(nombre));
}

function aprobarRamo(nombre) {
  if (estado[nombre]) return;

  const elemento = document.querySelector(`[data-nombre="${nombre}"]`);
  if (elemento.classList.contains("bloqueado")) return;

  elemento.classList.add("aprobado");
  estado[nombre] = true;

  // Desbloquear ramos que dependían de este
  ramos.forEach(r => {
    if ((r.abre || []).includes(nombre)) return;

    const dependientes = r.abre || [];
    if (dependientes.includes(nombre)) {
      const bloqueado = document.querySelector(`[data-nombre="${r.nombre}"]`);
      if (bloqueado && bloqueado.classList.contains("bloqueado")) {
        const requisitos = ramos.filter(r2 => (r2.abre || []).includes(r.nombre));
        const cumplidos = requisitos.every(rq => estado[rq.nombre]);
        if (cumplidos) {
          bloqueado.classList.remove("bloqueado");
        }
      }
    }
  });

  // Desbloquear ramos abiertos por este
  ramos.forEach(r => {
    const requisitos = ramos.filter(r2 => (r2.abre || []).includes(r.nombre));
    const todosAprobados = requisitos.every(req => estado[req.nombre]);

    const bloqueado = document.querySelector(`[data-nombre="${r.nombre}"]`);
    if (bloqueado && todosAprobados) {
      bloqueado.classList.remove("bloqueado");
    }
  });
}

crearMalla();
