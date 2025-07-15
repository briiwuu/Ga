document.addEventListener('DOMContentLoaded', () => {
    // Define tus cursos aquí.
    // 'id': un identificador único para el curso (importante para los prerrequisitos)
    // 'nombre': el nombre visible del curso
    // 'tipo': 'Obligatorio' o 'Electivo'
    // 'prerrequisitos': un array de los IDs de los cursos que deben completarse antes de este.
    // 'ciclo': el número del ciclo al que pertenece.
    const cursosData = [
        // Ciclo 1
        { id: 'ADM_NEGOCIOS', nombre: 'ADMINISTRACIÓN PARA LOS NEGOCIOS', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 1 },
        { id: 'CORR_PENS_ECON', nombre: 'CORRIENTES DEL PENSAMIENTO ECONÓMICO', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 1 },
        { id: 'ENGLISH_I', nombre: 'ENGLISH I', tipo: 'Obligatorio', prerrequisitos: ['NIV_INGLES'], ciclo: 1 },
        { id: 'LENG_COM_I', nombre: 'LENGUAJE Y COMUNICACIÓN I', tipo: 'Obligatorio', prerrequisitos: ['NIV_LENG_COM'], ciclo: 1 },
        { id: 'MATEMATICA', nombre: 'MATEMÁTICA', tipo: 'Obligatorio', prerrequisitos: ['NIV_MATEMATICA'], ciclo: 1 },
        { id: 'NIV_INGLES', nombre: 'NIVELACIÓN EN INGLÉS', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 1 },
        { id: 'NIV_LENG_COM', nombre: 'NIVELACIÓN EN LENGUAJE Y COMUNICACIÓN', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 1 },
        { id: 'NIV_MATEMATICA', nombre: 'NIVELACIÓN EN MATEMÁTICA', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 1 },

        // Ciclo 2
        { id: 'ENGLISH_II', nombre: 'ENGLISH II', tipo: 'Obligatorio', prerrequisitos: ['ENGLISH_I'], ciclo: 2 },
        { id: 'LENG_COM_II', nombre: 'LENGUAJE Y COMUNICACIÓN II', tipo: 'Obligatorio', prerrequisitos: ['LENG_COM_I'], ciclo: 2 },
        { id: 'MAT_APLICADA', nombre: 'MATEMÁTICA APLICADA', tipo: 'Obligatorio', prerrequisitos: ['MATEMATICA'], ciclo: 2 },
        { id: 'PRIN_ECONOMIA', nombre: 'PRINCIPIOS DE ECONOMÍA', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 2 },
        { id: 'REAL_NAC_GLOB', nombre: 'REALIDAD NACIONAL Y GLOBALIZACIÓN', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 2 },

        // Ciclo 3
        { id: 'ECON_MAT_APLICADA_I', nombre: 'ECONOMÍA MATEMÁTICA APLICADA I', tipo: 'Obligatorio', prerrequisitos: ['PRIN_ECONOMIA'], ciclo: 3 },
        { id: 'ENGLISH_III', nombre: 'ENGLISH III', tipo: 'Obligatorio', prerrequisitos: ['ENGLISH_II'], ciclo: 3 },
        { id: 'ESTAD_DESC_INF', nombre: 'ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA', tipo: 'Obligatorio', prerrequisitos: ['MATEMATICA'], ciclo: 3 },
        { id: 'FUND_CONT_FIN', nombre: 'FUNDAMENTOS CONTABLES Y FINANCIEROS', tipo: 'Obligatorio', prerrequisitos: ['MATEMATICA'], ciclo: 3 },
        { id: 'MICROECONOMIA', nombre: 'MICROECONOMÍA', tipo: 'Obligatorio', prerrequisitos: ['PRIN_ECONOMIA'], ciclo: 3 },

        // Ciclo 4
        { id: 'ENGLISH_IV', nombre: 'ENGLISH IV', tipo: 'Obligatorio', prerrequisitos: ['ENGLISH_III'], ciclo: 4 },
        { id: 'ESTAD_ECONOMISTAS', nombre: 'ESTADÍSTICA PARA ECONOMISTAS', tipo: 'Obligatorio', prerrequisitos: ['ESTAD_DESC_INF'], ciclo: 4 },
        { id: 'MACROECONOMIA_I', nombre: 'MACROECONOMÍA I', tipo: 'Obligatorio', prerrequisitos: ['MICROECONOMIA'], ciclo: 4 },
        { id: 'REGULACION_ECON', nombre: 'REGULACIÓN ECONÓMICA', tipo: 'Obligatorio', prerrequisitos: ['MICROECONOMIA'], ciclo: 4 },
        { id: 'ETICA_CIUDADANIA', nombre: 'ÉTICA Y CIUDADANÍA', tipo: 'Obligatorio', prerrequisitos: ['REAL_NAC_GLOB'], ciclo: 4 },

        // Ciclo 5
        { id: 'ECONOMETRIA_I', nombre: 'ECONOMETRÍA I', tipo: 'Obligatorio', prerrequisitos: ['MACROECONOMIA_I'], ciclo: 5 },
        { id: 'FUND_LIDER_SOST', nombre: 'FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE', tipo: 'Obligatorio', prerrequisitos: ['ETICA_CIUDADANIA'], ciclo: 5 },
        { id: 'FUND_COMP_DIG', nombre: 'FUNDAMENTOS EN COMPETENCIAS DIGITALES', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 5 },
        { id: 'MARKETING', nombre: 'MARKETING', tipo: 'Obligatorio', prerrequisitos: ['ADM_NEGOCIOS'], ciclo: 5 },
        { id: 'MAT_FINANCIERA', nombre: 'MATEMÁTICA FINANCIERA', tipo: 'Obligatorio', prerrequisitos: ['MAT_APLICADA'], ciclo: 5 },
        { id: 'MET_INV_CIENTIFICA', nombre: 'METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA', tipo: 'Obligatorio', prerrequisitos: ['ESTAD_DESC_INF'], ciclo: 5 },

        // Ciclo 6
        { id: 'ECONOMETRIA_II', nombre: 'ECONOMETRÍA II', tipo: 'Obligatorio', prerrequisitos: ['ECONOMETRIA_I'], ciclo: 6 },
        { id: 'GEST_FINANCIERA_I', nombre: 'GESTIÓN FINANCIERA I', tipo: 'Obligatorio', prerrequisitos: ['MAT_FINANCIERA'], ciclo: 6 },
        { id: 'INV_ANALISIS_MERCADO', nombre: 'INVESTIGACIÓN Y ANÁLISIS DE MERCADO', tipo: 'Obligatorio', prerrequisitos: ['MARKETING'], ciclo: 6 },
        { id: 'MACRO_NEGOCIOS', nombre: 'MACROECONOMÍA Y NEGOCIOS', tipo: 'Obligatorio', prerrequisitos: ['MICROECONOMIA'], ciclo: 6 },
        { id: 'OPORT_NEGOCIOS', nombre: 'OPORTUNIDADES DE NEGOCIOS', tipo: 'Obligatorio', prerrequisitos: ['PRIN_ECONOMIA', 'FUND_CONT_FIN', 'MARKETING'], ciclo: 6 },

        // Ciclo 7
        { id: 'BASES_LEGALES', nombre: 'BASES LEGALES', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 7 },
        { id: 'ECONOMIA_INTERNACIONAL', nombre: 'ECONOMÍA INTERNACIONAL', tipo: 'Obligatorio', prerrequisitos: ['MACROECONOMIA_I'], ciclo: 7 },
        { id: 'INT_TRADE_I', nombre: 'INTERNATIONAL TRADE I: IMPORTS AND EXPORTS', tipo: 'Obligatorio', prerrequisitos: [], ciclo: 7 },
        { id: 'MET_INV_CIENTIFICA_AVANZADA', nombre: 'MÉTODOS DE INVESTIGACIÓN CIENTÍFICA', tipo: 'Obligatorio', prerrequisitos: ['MET_INV_CIENTIFICA', 'ESTAD_ECONOMISTAS'], ciclo: 7 },
        { id: 'PERUVIAN_ECONOMY', nombre: 'PERUVIAN ECONOMY', tipo: 'Obligatorio', prerrequisitos: ['PRIN_ECONOMIA'], ciclo: 7 },

        // Ciclo 8
        { id: 'BANCA_NEGOCIOS', nombre: 'BANCA DE NEGOCIOS', tipo: 'Electivo', prerrequisitos: ['MAT_FINANCIERA'], ciclo: 8 },
        { id: 'BASES_GEST_SOSTENIBILIDAD', nombre: 'BASES PARA LA GESTIÓN ESTRATÉGICA DE LA SOSTENIBILIDAD', tipo: 'Electivo', prerrequisitos: [], ciclo: 8 }, // Asumiendo prerreq. de 80 créditos cumplidos
        { id: 'CM_PLAN_NEGOCIOS', nombre: 'C. M.: PLAN DE NEGOCIOS', tipo: 'Electivo', prerrequisitos: ['OPORT_NEGOCIOS'], ciclo: 8 },
        { id: 'TRANSF_CULT_DIGITAL', nombre: 'CULTURAL TRANSFORMATION FOR DIGITAL TRANSFORMATION', tipo: 'Electivo', prerrequisitos: [], ciclo: 8 }, // Asumiendo prerreq. de 60 créditos cumplidos
        { id: 'ECON_EVAL_PROYECTOS', nombre: 'ECONOMIC EVALUATION OF PROJECTS', tipo: 'Obligatorio', prerrequisitos: ['GEST_FINANCIERA_I'], ciclo: 8 },
        { id: 'IA_GENERATIVA', nombre: 'INTELIGENCIA ARTIFICIAL GENERATIVA', tipo: 'Electivo', prerrequisitos: [], ciclo: 8 }, // Asumiendo prerreq. de 120 créditos cumplidos
        { id: 'INT_FINANCE', nombre: 'INTERNATIONAL FINANCE', tipo: 'Obligatorio', prerrequisitos: ['GEST_FINANCIERA_I'], ciclo: 8 },
        { id: 'INT_TRADE_II', nombre: 'INTERNATIONAL TRADE II: LOGISTICS', tipo: 'Obligatorio', prerrequisitos: ['INT_TRADE_I'], ciclo: 8 },
        { id: 'INV_MERCADOS_INT', nombre: 'INVESTIGACIÓN DE MERCADOS INTERNACIONALES', tipo: 'Electivo', prerrequisitos: ['MARKETING'], ciclo: 8 },
        { id: 'ITALIANO_I', nombre: 'ITALIANO I', tipo: 'Electivo', prerrequisitos: [], ciclo: 8 },
        { id: 'MONETARY_THEORY', nombre: 'MONETARY THEORY', tipo: 'Obligatorio', prerrequisitos: ['MACROECONOMIA_I'], ciclo: 8 },
        { id: 'PORTUGUES_I', nombre: 'PORTUGUÉS I', tipo: 'Electivo', prerrequisitos: [], ciclo: 8 },

        // Ciclo 9
        { id: 'BUSINESS_IOT', nombre: 'BUSINESS AND INTERNET OF THINGS', tipo: 'Electivo', prerrequisitos: [], ciclo: 9 }, // Asumiendo prerreq. de 80 créditos cumplidos
        { id: 'CM_INCUBACION_I', nombre: 'C. M.: INCUBACIÓN I', tipo: 'Electivo', prerrequisitos: ['CM_PLAN_NEGOCIOS'], ciclo: 9 },
        { id: 'CLOUD_BUSINESS', nombre: 'CLOUD BUSINESS', tipo: 'Electivo', prerrequisitos: [], ciclo: 9 }, // Asumiendo prerreq. de 80 créditos cumplidos
        { id: 'DERIVADOS_FINANCIEROS', nombre: 'DERIVADOS FINANCIEROS', tipo: 'Electivo', prerrequisitos: ['GEST_FINANCIERA_I'], ciclo: 9 },
        { id: 'ECONOMIC_POLICY', nombre: 'ECONOMIC POLICY', tipo: 'Obligatorio', prerrequisitos: ['MONETARY_THEORY'], ciclo: 9 },
        { id: 'GEST_EMPREND_SOCIOAMB', nombre: 'GESTIÓN DE EMPRENDIMIENTOS SOCIOAMBIENTALES', tipo: 'Electivo', prerrequisitos: [], ciclo: 9 }, // Asumiendo prerreq. de 100 créditos cumplidos
        { id: 'GEST_EMPRESARIAL_SOST', nombre: 'GESTIÓN EMPRESARIAL SOSTENIBLE', tipo: 'Electivo', prerrequisitos: [], ciclo: 9 }, // Asumiendo prerreq. de 100 créditos cumplidos
        { id: 'GLOBAL_ECONOMY', nombre: 'GLOBAL ECONOMY', tipo: 'Obligatorio', prerrequisitos: ['PRIN_ECONOMIA'], ciclo: 9 },
        { id: 'ITALIANO_II', nombre: 'ITALIANO II', tipo: 'Electivo', prerrequisitos: ['ITALIANO_I'], ciclo: 9 },
        { id: 'PENS_COMPUT_ANALY_DATOS', nombre: 'PENSAMIENTO COMPUTACIONAL Y ANALÍTICA DE DATOS', tipo: 'Electivo', prerrequisitos: ['IA_GENERATIVA'], ciclo: 9 },
        { id: 'PORTUGUES_II', nombre: 'PORTUGUÉS II', tipo: 'Electivo', prerrequisitos: ['PORTUGUES_I'], ciclo: 9 },
        { id: 'RIESGOS_FINANCIEROS', nombre: 'RIESGOS FINANCIEROS', tipo: 'Electivo', prerrequisitos: ['GEST_FINANCIERA_I'], ciclo: 9 },
        { id: 'SEM_INV_ECONOMIA', nombre: 'SEMINARIO DE INVESTIGACIÓN EN ECONOMÍA', tipo: 'Obligatorio', prerrequisitos: ['MET_INV_CIENTIFICA_AVANZADA'], ciclo: 9 },
        { id: 'TECNOLOGIAS_EMERGENTES', nombre: 'TECNOLOGÍAS EMERGENTES', tipo: 'Electivo', prerrequisitos: [], ciclo: 9 }, // Asumiendo prerreq. de 100 créditos cumplidos
        { id: 'TEO_JUEGOS_TOMA_DECIS', nombre: 'TEORÍA DE LOS JUEGOS PARA LA TOMA DE DECISIONES', tipo: 'Obligatorio', prerrequisitos: ['MICROECONOMIA'], ciclo: 9 },

        // Ciclo 10
        { id: 'ANALIS_VIS_DATOS', nombre: 'ANÁLISIS Y VISUALIZACIÓN DE DATOS', tipo: 'Electivo', prerrequisitos: ['PENS_COMPUT_ANALY_DATOS'], ciclo: 10 },
        { id: 'IA_BUSINESS', nombre: 'ARTIFICIAL INTELLIGENCE FOR BUSINESS', tipo: 'Electivo', prerrequisitos: ['CLOUD_BUSINESS', 'BUSINESS_IOT'], ciclo: 10 },
        { id: 'CM_INCUBACION_II', nombre: 'C. M.: INCUBACIÓN II', tipo: 'Electivo', prerrequisitos: ['CM_INCUBACION_I'], ciclo: 10 },
        { id: 'ECON_REC_NAT_MED_AMB', nombre: 'ECONOMIA DE LOS RECURSOS NATURALES Y DEL MEDIO AMBIENTE', tipo: 'Electivo', prerrequisitos: ['MACROECONOMIA_I', 'FUND_LIDER_SOST'], ciclo: 10 },
        { id: 'ECON_CAMBIO_CLIMATICO', nombre: 'ECONOMÍA DEL CAMBIO CLIMATICO', tipo: 'Electivo', prerrequisitos: ['MACROECONOMIA_I', 'FUND_LIDER_SOST'], ciclo: 10 },
        { id: 'ECON_FINANCIERA', nombre: 'ECONOMÍA FINANCIERA', tipo: 'Electivo', prerrequisitos: ['MAT_FINANCIERA'], ciclo: 10 },
        { id: 'ECON_SECT_PROD', nombre: 'ECONOMÍA SECTORIAL Y DE LA PRODUCTIVIDAD', tipo: 'Electivo', prerrequisitos: ['ECONOMIA_INTERNACIONAL'], ciclo: 10 },
        { id: 'GEST_SECTOR_PUBL_SOST', nombre: 'GESTIÓN DEL SECTOR PÚBLICO Y SOCIEDAD CIVIL PARA EL DESARROLLO SOSTENIBLE', tipo: 'Electivo', prerrequisitos: [], ciclo: 10 }, // Asumiendo prerreq. de 100 créditos cumplidos
        { id: 'INV_DES_PATENTES', nombre: 'INVESTIGACIÓN Y DESARROLLO DE PATENTES', tipo: 'Obligatorio', prerrequisitos: ['MET_INV_CIENTIFICA_AVANZADA'], ciclo: 10 },
        { id: 'MACROECONOMIA_II', nombre: 'MACROECONOMÍA II', tipo: 'Electivo', prerrequisitos: ['MACROECONOMIA_I'], ciclo: 10 },
        { id: 'PROYECTO_INTEGRADOR_ECON', nombre: 'PROYECTO INTEGRADOR PARA ECONOMISTAS', tipo: 'Obligatorio', prerrequisitos: ['ECONOMETRIA_II', 'MET_INV_CIENTIFICA_AVANZADA'], ciclo: 10 },
    ];

    let completedCourses = new Set(); // Guarda los IDs de los cursos completados

    const mallaContainer = document.getElementById('malla-container');

    // Agrupa los cursos por ciclo
    const cursosPorCiclo = cursosData.reduce((acc, curso) => {
        if (!acc[curso.ciclo]) {
            acc[curso.ciclo] = [];
        }
        acc[curso.ciclo].push(curso);
        return acc;
    }, {});

    // Función para verificar si un curso está desbloqueado
    function isCourseUnlocked(courseId) {
        const course = cursosData.find(c => c.id === courseId);
        if (!course) return false; // Curso no encontrado

        if (course.prerrequisitos.length === 0) {
            return true; // No tiene prerrequisitos, está desbloqueado
        }

        // Todos los prerrequisitos deben estar completados
        return course.prerrequisitos.every(prereqId => completedCourses.has(prereqId));
    }

    // Renderiza la malla
    function renderMalla() {
        mallaContainer.innerHTML = ''; // Limpia el contenedor
        const ciclosOrdenados = Object.keys(cursosPorCiclo).sort((a, b) => parseInt(a) - parseInt(b));

        ciclosOrdenados.forEach(cicloNum => {
            const cicloDiv = document.createElement('div');
            cicloDiv.classList.add('ciclo');
            cicloDiv.innerHTML = `<h2>Ciclo ${cicloNum}</h2>`;

            cursosPorCiclo[cicloNum].forEach(curso => {
                const cursoDiv = document.createElement('div');
                cursoDiv.classList.add('curso-item');
                cursoDiv.dataset.id = curso.id; // Guarda el ID del curso en el HTML

                if (completedCourses.has(curso.id)) {
                    cursoDiv.classList.add('completed');
                } else if (!isCourseUnlocked(curso.id)) {
                    cursoDiv.classList.add('locked');
                    cursoDiv.title = 'Requiere completar los prerrequisitos'; // Tooltip
                }

                cursoDiv.classList.add(curso.tipo.toLowerCase()); // Para estilos específicos de Obligatorio/Electivo

                cursoDiv.innerHTML = `
                    <span>${curso.nombre}</span>
                    <span class="tag">${curso.tipo.substring(0, 5)}.</span>
                `;

                // Añadir el listener para marcar/desmarcar solo si no está completado
                if (!completedCourses.has(curso.id)) {
                    cursoDiv.addEventListener('click', () => {
                        // Solo permite marcar si está desbloqueado
                        if (isCourseUnlocked(curso.id)) {
                            completedCourses.add(curso.id);
                            // Opcional: Guardar el estado en el almacenamiento local
                            localStorage.setItem('completedCourses', JSON.stringify(Array.from(completedCourses)));
                            renderMalla(); // Volver a renderizar para actualizar el estado
                        } else {
                            alert('Primero debes completar los prerrequisitos de este curso.');
                        }
                    });
                }
                cicloDiv.appendChild(cursoDiv);
            });
            mallaContainer.appendChild(cicloDiv);
        });
    }

    // Cargar cursos completados desde el almacenamiento local al inicio
    const savedCompleted = localStorage.getItem('completedCourses');
    if (savedCompleted) {
        completedCourses = new Set(JSON.parse(savedCompleted));
    }

    renderMalla(); // Renderiza la malla por primera vez
});
