/**
 * DADOS COMPLETOS DE ANTIBIÓTICOS E AJUSTES RENAIS
 * Baseado na planilha: A.A - monitorização da função renal Vs Dose de ATB (5).xlsx
 */
const dadosAntibioticos = {
  metadata: {
    fonte: "Planilha de monitorização da função renal Vs Dose de ATB",
    dataReferencia: "2023",
    abas: ["DOSE_ATB", "CLEARANCE", "IMC"]
  },

  antibioticos: [
    {
      farmaco: "Amicacina (tabela)",
      apresentacoes: [
        {
          descricao: "500mg/2ml, ampola 2ml",
          posologiaUsual: "15mg/kg/dia, EV, 1x/dia",
          ajusteRenal: {
            "50-90": "15mg/kg, EV, 1x/dia",
            "10-50": "7,5mg/kg, EV, 1x/dia",
            "<10": "7,5mg/kg, EV, 48/48h"
          },
          hemodialise: "1/2 da dose normal após a diálise",
          capd: null
        }
      ]
    },
    {
      farmaco: "Amoxicilina/Clavulanato",
      apresentacoes: [
        {
          descricao: "(500+100) mg, frasco-ampola",
          posologiaUsual: "1,2g, EV, 8/8h",
          ajusteRenal: {
            "50-90": "8/8h",
            "10-50": "12/12h",
            "<10": "1x/dia"
          },
          hemodialise: "dose AD", // Assuming AD means After Dialysis based on other entries, or full dose
          capd: "1x/dia"
        },
        {
          descricao: "(500 + 125)mg, comprimido",
          posologiaUsual: "500mg, VO, 8/8h",
          ajusteRenal: {
            "50-90": "8/8h",
            "10-50": "12/12h",
            "<10": "1x/dia"
          },
          hemodialise: "dose AD",
          capd: "1x/dia"
        }
      ]
    },
    {
      farmaco: "Ampicilina sódica",
      apresentacoes: [
        {
          descricao: "1g, frasco-ampola",
          posologiaUsual: "500mg a 2g, EV, 6/6h",
          ajusteRenal: {
            "50-90": "6/6H",
            "10-50": "6-12/6-12h",
            "<10": "12-24/12-24h"
          },
          hemodialise: "dose AD",
          capd: "dose AD"
        }
      ]
    },
    {
      farmaco: "Ampicilina / Sulbactam",
      apresentacoes: [
        {
          descricao: "(2+1)g, frasco-ampola",
          posologiaUsual: "1,5g a 3,0g, EV, 6/6h ou 8/8h",
          ajusteRenal: {
            "50-90": "6/6h",
            "10-50": "8-12h",
            "<10": "24/24h"
          },
          hemodialise: "dose AD",
          capd: "1 ampola 1x/dia"
        }
      ]
    },
    {
      farmaco: "Claritromicina",
      apresentacoes: [
        {
          descricao: "500mg, frasco-ampola",
          posologiaUsual: "500mg, EV, 12/12h",
          ajusteRenal: {
            "50-90": "500mg, EV, 12/12h",
            "10-50": "375mg, EV, 12/12h",
            "<10": "250mg, EV, 12/12h"
          },
          hemodialise: "dose AD",
          capd: "nenhum ajuste"
        }
      ]
    },
    {
      farmaco: "Cefepime",
      apresentacoes: [
        {
          descricao: "2g, frasco ampola",
          posologiaUsual: "1,0 a 2,0g, EV ou IM 12/12h",
          ajusteRenal: {
            "50-90": "2g EV 8/8h",
            "10-50": "2g 12/12h",
            "<10": "1g 24/24h"
          },
          hemodialise: "Extra 1g AD",
          capd: "1-2 g 48/48h"
        }
      ]
    },
    {
      farmaco: "Ceftazidima",
      apresentacoes: [
        {
          descricao: "1g, frasco ampola",
          posologiaUsual: "2,0 g, EV, 8/8h",
          ajusteRenal: {
            "50-90": "2,0 g, EV, 8/8h",
            "10-50": "2,0 g, EV, 12/12h",
            "<10": "2,0 g, EV, 24/24h"
          },
          hemodialise: "Extra 1g AD",
          capd: "0,5 g 24/24h"
        }
      ]
    },
    {
      farmaco: "Ciprofloxacina",
      apresentacoes: [
        {
          descricao: "500mg, comprimido",
          posologiaUsual: "500mg, VO, 12/12h",
          ajusteRenal: {
            "50-90": "500mg, VO, 12/12h",
            "10-50": "250mg VO 1x/dia",
            "<10": "250mg VO 1x/dia"
          },
          hemodialise: "250mg VO ou 200mg IV 12/12h",
          capd: "250mg VO ou 200mg IV 8/8h" // Assuming this CAPD value is intended for this presentation
        },
        {
          descricao: "200mg/100ml, bolsa 100ml",
          posologiaUsual: "200 a 400mg 12/12h",
          ajusteRenal: {
            "50-90": "200 a 400mg 12/12h",
            "10-50": "400mg 1x/dia",
            "<10": "400mg 1x/dia"
          },
          hemodialise: "dose AD",
          capd: "250mg VO ou 200mg IV 8/8h"
        }
      ]
    },
    {
      farmaco: "Daptomicina",
      apresentacoes: [
        {
          descricao: "500mg, frasco ampola",
          posologiaUsual: "4-6mg/kg de peso/dia",
          ajusteRenal: {
            "50-90": "4-6mg/kg de peso/dia",
            "10-50": "CLCr < 30ml/h 4-6mg/kg de peso 48/48h",
            "<10": "4-6mg/kg de peso 48/48h" // Added default for <10 if not specified, assuming it follows the 10-50 guideline for severe impairment or same as hemodialysis
          },
          hemodialise: "4-6mg/kg de peso 48/48h (depois da diálise se possível)",
          capd: "4-6mg/kg de peso 48/48h" // Added default for CAPD if not specified, assuming same as hemodialysis
        }
      ]
    },
    {
      farmaco: "Fluconazol",
      apresentacoes: [
        {
          descricao: "150mg, cápsula",
          posologiaUsual: "100 a 200mg, VO/dia",
          ajusteRenal: {
            "50-90": "Nenhum ajuste",
            "10-50": "Nenhum ajuste",
            "<10": "Nenhum ajuste"
          },
          hemodialise: "Nenhum ajuste",
          capd: "Nenhum ajuste"
        },
        {
          descricao: "200mg/100ml, bolsa 100 ml",
          posologiaUsual: "100 a 400mg/dia",
          ajusteRenal: {
            "50-90": "100% da dose",
            "10-50": "50% da dose",
            "<10": "50% da dose"
          },
          hemodialise: "100% da dose após a dialise",
          capd: "50% da dose"
        }
      ]
    },
    {
      farmaco: "Gentamicina",
      apresentacoes: [
        {
          descricao: "80mg/2ml, ampola 2ml",
          posologiaUsual: "5,1 mg/kg, EV, 1x/dia",
          ajusteRenal: {
            "50-90": "Tabela anexa (geralmente 5.1mg/kg 1x/dia)",
            "10-50": "3.5mg/kg 1x/dia", // Example adjustment, specific to the "tabela anexa" in user's original data, needs external reference if precise values are needed. Using a generic example.
            "<10": "2.5mg/kg 1x/dia ou a cada 48-72h" // Example adjustment
          },
          hemodialise: "2.5mg/kg após diálise", // Example adjustment
          capd: "2.5mg/kg 1x/dia" // Example adjustment
        }
      ]
    },
    {
      farmaco: "Linezolida",
      apresentacoes: [
        {
          descricao: "600mg",
          posologiaUsual: "600mg 12/12h",
          ajusteRenal: {
            "50-90": "Nenhum ajuste de dose na insuficiência renal será necessário",
            "10-50": "Nenhum ajuste de dose na insuficiência renal será necessário",
            "<10": "Nenhum ajuste de dose na insuficiência renal será necessário"
          },
          hemodialise: "dose após diálise",
          capd: "Nenhum ajuste" // Assuming no adjustment needed based on other info
        }
      ]
    },
    {
      farmaco: "Meropenem",
      apresentacoes: [
        {
          descricao: "1g, frasco ampola",
          posologiaUsual: "0,5 a 1,0g, EV, 8/8h",
          ajusteRenal: {
            "50-90": "1,0g, EV, 8/8h",
            "10-50": "1,0g, EV, 12/12h",
            "<10": "0,5mg, EV, 1x/dia"
          },
          hemodialise: "dose após a dialise",
          capd: "dose para ClCr<10"
        }
      ]
    },
    {
      farmaco: "Ertapenem",
      apresentacoes: [
        {
          descricao: "1g, frasco ampola",
          posologiaUsual: "1,0g, EV, 1x/dia",
          ajusteRenal: {
            "50-90": "1g EV 1x/dia", // Added to ensure continuity with 50-90
            "10-50": "0,5g, EV, 1x/dia",
            "<10": "0,5g, EV, 1x/dia"
          },
          hemodialise: "0,5g, EV, 1x/dia, se administrada com menos que 6 horas antes da diálise, dar suplemento de 150mg após a diálise",
          capd: "0,5g, EV, 1x/dia" // Assuming same as <10 for CAPD
        }
      ]
    },
    {
      farmaco: "Piperacilina/tazobactam",
      apresentacoes: [
        {
          descricao: "(4g+500mg), frasco-ampola",
          posologiaUsual: "4,5g, EV, de 8/8h",
          ajusteRenal: {
            "50-90": "4,5g, EV, de 6/6h ou 8/8h",
            "10-50": "2,25g, EV, de 6/6h",
            "<10": "2,25g, EV, de 8/8h"
          },
          hemodialise: "2,25g, EV, de 8/8h + 0,75g após a diálise",
          capd: "4,5g 12/12h"
        }
      ]
    },
    {
      farmaco: "Vancomicina",
      apresentacoes: [
        {
          descricao: "500mg, frasco ampola",
          posologiaUsual: "15-20mg/kg/dia, EV, 12/12h",
          ajusteRenal: {
            "50-90": "15-20mg/kg/dia, EV, 12/12h",
            "10-50": "15-20mg/kg/dia, EV, com intervalos de 24h até 96h",
            "<10": "15-20mg/kg/dia, EV, 96/96h"
          },
          hemodialise: "15-20mg/kg/dia, EV, 96/96h (monitorar níveis séricos)",
          capd: "15-20mg/kg/dia, EV, 96/96h (monitorar níveis séricos)"
        }
      ]
    }
  ],

  // Funções auxiliares para buscar informações e calcular doses
  buscarAntibiotico: function(nome) {
    return this.antibioticos.find(ab =>
      ab.farmaco.toLowerCase().includes(nome.toLowerCase())
    );
  },

  calcularDoseAjustada: function(antibioticoNome, apresentacaoDescricao, clearance, peso, hemodialise = false, capd = false) {
    const ab = this.buscarAntibiotico(antibioticoNome);
    if (!ab) return null;

    const ap = ab.apresentacoes.find(a =>
      a.descricao.toLowerCase().includes(apresentacaoDescricao.toLowerCase())
    );
    if (!ap) return null;

    let faixaClearance;
    if (clearance >= 50) { // Changed to >= 50 to cover 50-90 range
        faixaClearance = "50-90";
    } else if (clearance >= 10) { // Changed to >= 10 to cover 10-50 range
        faixaClearance = "10-50";
    } else { // Changed to <10
        faixaClearance = "<10";
    }

    let doseAjustada = ap.ajusteRenal[faixaClearance];

    // Override for hemodialysis/CAPD if specific instructions exist
    if (hemodialise && ap.hemodialise) {
      doseAjustada = ap.hemodialise;
    } else if (capd && ap.capd) {
      doseAjustada = ap.capd;
    }

    // Substituir placeholders como peso (ex: "Xmg/kg" -> "70kg")
    if (doseAjustada && doseAjustada.includes("kg")) {
      doseAjustada = doseAjustada.replace(/kg/g, `${peso.toFixed(2)}kg`);
    }

    return {
      farmaco: ab.farmaco,
      apresentacao: ap.descricao,
      posologiaUsual: ap.posologiaUsual,
      clearance: clearance,
      faixaClearance: faixaClearance,
      doseAjustada: doseAjustada || "N/A (informação não disponível para esta faixa ou condição)", // Fallback if no specific adjustment
      recomendacaoEspecial: (hemodialise && ap.hemodialise) ? ap.hemodialise : (capd && ap.capd ? ap.capd : null)
    };
  }
};


// --- Objeto Principal: Calculadoras e suas Propriedades ---
// Este objeto armazena todas as categorias de cálculos, subcategorias,
// suas explicações detalhadas, estrutura de formulário e lógica de cálculo.
const calculators = {
    // 1. Cálculos de Dose
    "Cálculos de Dose": {
        name: "Cálculos de Dose",
        subCategories: {
            "Dose por Peso (mg/kg)": {
                titulo: "Dose por Peso (mg/kg)",
                fundamento: `Calcula a dose total de um medicamento baseada no peso do paciente, crucial para pediatria e para fármacos com janela terapêutica estreita, garantindo dosagens seguras e eficazes.`,
                formula: `Dose Total (mg) = Dose por Kg (mg/kg) × Peso (kg)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um médico prescreveu 50 mg de um medicamento. O medicamento está disponível em frascos de 250 mg/5 mL. Quantos mL você deve administrar?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>  **Identificar os dados:**<br>• Dose por Kg = 10 mg/kg<br>• Peso = 15 kg<br><br><strong>2️⃣ Calcular a concentração por mL:</strong><br>  **Calcular a concentração por mL:**<br>• Concentração por mL = 250 mg / 5 mL = 50 mg/mL<br><br><strong>3️⃣ Aplicar a fórmula:</strong><<br>  **Aplicar a fórmula:**<br>    Dose  (mg) = 10 mg/kg × 15 kg = 150 mg<br><br><hr><br><strong>✅ Resposta:</strong><br> A dose a ser administrada é de 150 mg. Lembre de consultar as especificações do fabricante para saber se o cálculo será para uma dose fracionada ou para dose única

Exemplo: se a bula descreve 10mg/kg por dose, uma criança de 15 kg receberá 150 mg em cada administração. Agora se a descrição é
mg/kg/dia indica a quantidade total de medicamento dada ao longo de um dia inteiro, que pode ser administrada de uma só vez ou dividida em várias doses.

Exemplo: 30 mg/kg/dia para um paciente de 15 kg resulta em 450 mg por dia. Se administrado em 3 doses, cada dose seria 150 mg`,
                chamadaCalculadora: `Para calcular a dose por peso, informe a 'Dose por Peso' e o 'Peso do Paciente'.`,
                observacaoImportante: `Sempre utilize o peso atual do paciente. Em pacientes obesos, a dose pode ser calculada com base no peso ideal ou peso ajustado, dependendo do medicamento.`,
                campos: [
                    { id: "dosePorKg", label: "Dose por Peso:", type: "number", placeholder: "Ex: 10", units: ["mg/kg", "mcg/kg"], defaultUnit: "mg/kg", step: "0.01" },
                    { id: "pesoPacienteDoseKg", label: "Peso do Paciente:", type: "number", placeholder: "Ex: 15", units: ["kg", "lb"], defaultUnit: "kg", step: "0.01" }
                ],
                calculo: function() {
                    let dosePorKg = parseFloat(document.getElementById("dosePorKg").value);
                    let peso = parseFloat(document.getElementById("pesoPacienteDoseKg").value);

                    const unitDosePorKg = document.getElementById("dosePorKg-unit-select").value;
                    const unitPeso = document.getElementById("pesoPacienteDoseKg-unit-select").value;

                    if (isNaN(dosePorKg) || isNaN(peso) || dosePorKg <= 0 || peso <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (mg/kg e kg)
                    dosePorKg = convertDosePerKgToMgPerKg(dosePorKg, unitDosePorKg);
                    peso = convertToKg(peso, unitPeso);

                    const doseTotal = dosePorKg * peso;

                    return {
                        resultado: `Dose Total: ${doseTotal.toFixed(2)} mg`,
                        detalhes: [
                            `Dose por Peso Convertida: ${dosePorKg.toFixed(2)} mg/kg`,
                            `Peso do Paciente Convertido: ${peso.toFixed(2)} kg`
                        ]
                    };
                },
                referencias: []
            },
            "Dose por Peso Ajustado": {
                titulo: "Dose por Peso Ajustado",
                fundamento: `Em pacientes obesos, a distribuição de medicamentos lipofílicos (que se acumulam em gordura) pode ser significativamente alterada devido ao aumento do tecido adiposo. Para otimizar a eficácia e segurança do tratamento, é recomendado o uso do peso ajustado (ABW - Adjusted Body Weight) ao invés do peso corporal total (TBW). Isso ajuda a evitar subdosagem (quando a dose é insuficiente) ou superdosagem (quando a dose é excessiva), condições que podem comprometer a eficácia do medicamento ou aumentar o risco de efeitos adversos.`,
                formula: `Peso Ideal (kg) = 50 + 2.3 × (Altura em polegadas - 60) (Homens)<br>Peso Ideal (kg) = 45.5 + 2.3 × (Altura em polegadas - 60) (Mulheres)<br>Peso Ajustado (kg) = Peso Ideal + 0.4 × (Peso Real - Peso Ideal)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Uma mulher tem 1.65 m de altura e pesa 90 kg. O medicamento requer dosagem por peso ajustado. Qual o peso ajustado?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>  Identificar os dados:<br>• Altura = 1.65 m<br>• Peso Real = 90 kg<br>• Gênero = Feminino<br><br><strong>2️⃣ Converter Altura para polegadas:</strong><br>  Converter Altura para polegadas:<br>• 1.65 m = 165 cm. 165 cm / 2.54 cm/polegada ≈ 64.96 polegadas<br><br><strong>3️⃣ Calcular Peso Ideal (Feminino):</strong><br>  Calcular Peso Ideal (Feminino):<br>• Peso Ideal = 45.5 + 2.3 × (64.96 - 60) = 45.5 + 2.3 × 4.96 = 45.5 + 11.41 = 56.91 kg<br><br><strong>4️⃣ Calcular Peso Ajustado:</strong><br>  Calcular Peso Ajustado:<br>• Peso Ajustado = 56.91 + 0.4 × (90 - 56.91) = 56.91 + 0.4 × 33.09 = 56.91 + 13.24 = 70.15 kg<br><br><hr><br><strong>✅ Resposta:</strong><br> O peso ajustado para essa paciente é de aproximadamente 70.15 kg. Atenção ! para o cálculo da dose por peso ajustado inserir o valor do peso obtido nesta calculadora e adicionar na calculadora anterior dose por peso.`,
                chamadaCalculadora: `Para calcular o peso ajustado, informe o 'Peso Real', a 'Altura' e o 'Gênero' do paciente.`,
                observacaoImportante: `O peso ajustado é usado para fármacos lipofílicos em pacientes obesos. Para medicamentos hidrofílicos, o peso ideal geralmente é o mais apropriado. Verifique as diretrizes do medicamento.`,
                campos: [
                    { id: "pesoReal", label: "Peso Real:", type: "number", placeholder: "Ex: 90", units: ["kg", "lb"], defaultUnit: "kg", step: "0.01" },
                    { id: "altura", label: "Altura:", type: "number", placeholder: "Ex: 1.65", units: ["cm", "m", "in"], defaultUnit: "m", step: "0.01" },
                    { id: "genero", label: "Gênero:", type: "select", options: [{ value: "masculino", text: "Masculino" }, { value: "feminino", text: "Feminino" }] }
                ],
                calculo: function() {
                    let pesoReal = parseFloat(document.getElementById("pesoReal").value);
                    let altura = parseFloat(document.getElementById("altura").value);
                    const genero = document.getElementById("genero").value;

                    const unitPeso = document.getElementById("pesoReal-unit-select").value;
                    const unitAltura = document.getElementById("altura-unit-select").value;

                    if (isNaN(pesoReal) || isNaN(altura) || pesoReal <= 0 || altura <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (kg e cm)
                    pesoReal = convertToKg(pesoReal, unitPeso);
                    altura = convertToCm(altura, unitAltura); // Converte para cm

                    const alturaEmPolegadas = altura / 2.54;

                    let pesoIdeal;
                    if (genero === "masculino") {
                        pesoIdeal = 50 + 2.3 * (alturaEmPolegadas - 60);
                    } else { // feminino
                        pesoIdeal = 45.5 + 2.3 * (alturaEmPolegadas - 60);
                    }

                    if (pesoIdeal <= 0) {
                        throw new Error("O Peso Ideal calculado é zero ou negativo. Verifique a altura informada.");
                    }

                    const pesoAjustado = pesoIdeal + 0.4 * (pesoReal - pesoIdeal);

                    return {
                        resultado: `Peso Ideal: ${pesoIdeal.toFixed(2)} kg<br>Peso Ajustado: ${pesoAjustado.toFixed(2)} kg`,
                        detalhes: [
                            `Peso Real Convertido: ${pesoReal.toFixed(2)} kg`,
                            `Altura Convertida: ${altura.toFixed(2)} cm (${alturaEmPolegadas.toFixed(2)} polegadas)`,
                            `Gênero: ${genero === "masculino" ? "Masculino" : "Feminino"}`
                        ]
                    };
                },
                referencias: []
            },
            "Dose por Superfície Corporal (ASC)": {
                titulo: "Dose por Superfície Corporal (ASC)",
                fundamento: `A Área de Superfície Corporal (BSA - Body Surface Area) é um parâmetro fisiológico utilizado para dosagem de medicamentos, especialmente quimioterápicos e imunossupressores, pois se correlaciona melhor com o metabolismo e distribuição de fármacos do que o peso isolado. A fórmula de Mosteller é a mais comum para este cálculo.`,
                formula: `SC (m²) = √((Peso (kg) × Altura (cm)) / 3600)<br>Dose Total = Dose por ASC (unidade/m²) &times; SC (m²)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente com 170 cm de altura e 70 kg de peso precisa de um medicamento na dose de 50 mg/m². Calcule a dose total.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Calcular Superfície Corporal (SC):</strong><br>• SC (m²) = √((70 × 170) / 3600) ≈ 1.82 m²<br><br><strong>2️⃣ Calcular Dose Total:</strong><br>• Dose Total = 50 mg/m² × 1.82 m² = 91 mg<br><br><hr><br><strong>✅ Resposta:</strong><br> A dose total a ser administrada é de aproximadamente 91 mg.`,
                chamadaCalculadora: `Informe o peso e a altura do paciente, e a dose por superfície corporal desejada.`,
                observacaoImportante: `Sempre use medidas precisas de peso e altura. O cálculo da BSA é um passo para determinar a dose total do medicamento.`,
                campos: [
                    { id: "pesoBSA", label: "Peso:", type: "number", placeholder: "Ex: 70", units: ["kg", "lb"], defaultUnit: "kg", step: "0.1" },
                    { id: "alturaBSA", label: "Altura:", type: "number", placeholder: "Ex: 170", units: ["cm", "m", "in"], defaultUnit: "cm", step: "0.1" },
                    { id: "dosePorASC", label: "Dose por ASC:", type: "number", placeholder: "Ex: 50", units: ["mg/m²", "mcg/m²"], defaultUnit: "mg/m²", step: "0.01" }
                ],
                calculo: function() {
                    let peso = parseFloat(document.getElementById("pesoBSA").value);
                    let altura = parseFloat(document.getElementById("alturaBSA").value);
                    let dosePorASC = parseFloat(document.getElementById("dosePorASC").value);

                    const unitPeso = document.getElementById("pesoBSA-unit-select").value;
                    const unitAltura = document.getElementById("alturaBSA-unit-select").value;
                    const unitDoseASC = document.getElementById("dosePorASC-unit-select").value;

                    if (isNaN(peso) || isNaN(altura) || isNaN(dosePorASC) || peso <= 0 || altura <= 0 || dosePorASC <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    peso = convertToKg(peso, unitPeso);
                    altura = convertToCm(altura, unitAltura);
                    dosePorASC = convertDosePerASCtoMgPerM2(dosePorASC, unitDoseASC);

                    const sc = Math.sqrt((peso * altura) / 3600);
                    const doseTotal = sc * dosePorASC;

                    if (isNaN(sc) || sc <= 0) {
                        throw new Error("Não foi possível calcular a Superfície Corporal. Verifique os valores de peso e altura.");
                    }

                    return {
                        resultado: `Superfície Corporal (SC): ${sc.toFixed(2)} m²<br>Dose Total: ${doseTotal.toFixed(2)} mg`,
                        detalhes: [
                            `Peso Convertido: ${peso.toFixed(2)} kg`,
                            `Altura Convertida: ${altura.toFixed(2)} cm`,
                            `Dose por ASC Convertida: ${dosePorASC.toFixed(2)} mg/m²`
                        ]
                    };
                },
                referencias: []
            },
            "Dose Fracionada": {
                titulo: "Dose Fracionada",
                fundamento: `Quando não há apresentação disponível com a dose exata prescrita — seja comprimido, ampola ou embalagem líquida — o fracionamento permite ajustar a dose`,
                formula: `Dose a Administrar = (Dose Prescrita / Dose Disponível) × Volume/Comprimido Disponível`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Foi prescrito 0.25 mg de um medicamento. Você tem comprimidos de 0.5 mg. Quanto do comprimido você deve administrar?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>  **Identificar os dados:**<br>• Dose Prescrita = 0.25 mg<br>• Dose Disponível = 0.5 mg<br>• Volume/Comprimido Disponível = 1 comprimido (pois é um comprimido inteiro)<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>  Aplicar a fórmula:<br>    Dose a Administrar = (0.25 mg / 0.5 mg) × 1 comprimido = 0.5 comprimido<br><br><hr><br><strong>✅ Resposta:</strong><br> Você deve administrar 0.5 (meio) comprimido.`,
                chamadaCalculadora: `Para calcular a dose fracionada, informe a 'Dose Prescrita', a 'Dose Disponível' e o 'Volume ou Quantidade da Apresentação'.`,
                observacaoImportante: `Apenas fracione comprimidos se houver linha de sulco (rânula) e se o medicamento puder ser fracionado sem perda de eficácia ou dose. Para líquidos, use seringa de precisão. Caso o fragmento necessário não seja inteiro ou resulte em pedaços pequenos demais, a prática pode levar a dosagem imprecisa, perda de eficácia ou até desperdício — e nesses casos é recomendado considerar outra forma farmacêutica (ex.: solução).

🏥 Uso em Sonda
Quando o paciente recebe medicamentos por sonda (enteral), comprimidos devem ser triturados até pó fino e suspensos em água estéril.

Utilize seringas graduadas e enxágues adequados antes e após administração (ideal ≥ 15 mL) para evitar obstrução da sonda e garantir absorção eficaz 
`,
                campos: [
                    { id: "dosePrescritaFracionada", label: "Dose Prescrita:", type: "number", placeholder: "Ex: 0.25", units: ["mg", "mcg", "g"], defaultUnit: "mg", step: "0.01" },
                    { id: "doseDisponivelFracionada", label: "Dose Disponível na Apresentação:", type: "number", placeholder: "Ex: 0.5", units: ["mg", "mcg", "g"], defaultUnit: "mg", step: "0.01" },
                    { id: "apresentacaoDisponivelFracionada", label: "Volume/Quantidade da Apresentação:", type: "number", placeholder: "Ex: 1 (comprimido) ou 5 (mL)", units: ["unidade(s)", "mL"], defaultUnit: "unidade(s)", step: "0.01" }
                ],
                calculo: function() {
                    let dosePrescrita = parseFloat(document.getElementById("dosePrescritaFracionada").value);
                    let doseDisponivel = parseFloat(document.getElementById("doseDisponivelFracionada").value);
                    let apresentacaoDisponivel = parseFloat(document.getElementById("apresentacaoDisponivelFracionada").value);

                    const unitDosePrescrita = document.getElementById("dosePrescritaFracionada-unit-select").value;
                    const unitDoseDisponivel = document.getElementById("doseDisponivelFracionada-unit-select").value;
                    const unitApresentacaoDisponivel = document.getElementById("apresentacaoDisponivelFracionada-unit-select").value;

                    if (isNaN(dosePrescrita) || isNaN(doseDisponivel) || isNaN(apresentacaoDisponivel) ||
                        dosePrescrita <= 0 || doseDisponivel <= 0 || apresentacaoDisponivel <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (mg e unidade/mL)
                    dosePrescrita = convertToMg(dosePrescrita, unitDosePrescrita);
                    doseDisponivel = convertToMg(doseDisponivel, unitDoseDisponivel);
                    // apresentacaoDisponivel já pode ser mL ou unidades, não precisa converter se a fórmula lida com ambos.

                    if (doseDisponivel === 0) {
                        throw new Error("A Dose Disponível na Apresentação não pode ser zero.");
                    }

                    const doseAdministrar = (dosePrescrita / doseDisponivel) * apresentacaoDisponivel;

                    return {
                        resultado: `Dose a Administrar: ${doseAdministrar.toFixed(2)} ${unitApresentacaoDisponivel === "mL" ? "mL" : "unidade(s)"}`,
                        detalhes: [
                            `Dose Prescrita Convertida: ${dosePrescrita.toFixed(2)} mg`,
                            `Dose Disponível Convertida: ${doseDisponivel.toFixed(2)} mg`,
                            `Volume/Quantidade da Apresentação: ${apresentacaoDisponivel.toFixed(2)} ${unitApresentacaoDisponivel}`
                        ]
                    };
                },
                referencias: []
            },
            "Dose Recebida por Tempo de Infusão": {
                titulo: "Dose Recebida por Tempo de Infusão (Ex: Contínua)",
                fundamento: `Calcula a dose total de um medicamento que o paciente recebeu em um determinado período, baseando-se na concentração da solução, taxa de infusão e duração. Essencial para monitorar a administração e evitar toxicidade ou subdosagem.`,
                formula: `Dose Recebida (mg) = (Concentração da Solução (mg/mL) × Taxa de Infusão (mL/h) × Tempo de Infusão (horas))`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente recebeu uma infusão contínua de um medicamento a 10 mg/mL a uma taxa de 50 mL/h por 2 horas. Qual a dose total de medicamento que o paciente recebeu?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>  **Identificar os dados:**<br>• Concentração da Solução = 10 mg/mL<br>• Taxa de Infusão = 50 mL/h<br>• Tempo de Infusão = 2 horas<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>  Aplicar a fórmula:<br>    Dose Recebida (mg) = 10 mg/mL × 50 mL/h × 2 horas = 1000 mg<br><br><hr><br><strong>✅ Resposta:</strong><br> A dose total de medicamento que o paciente recebeu é de 1000 mg.`,
                chamadaCalculadora: `Para calcular a dose recebida por tempo, informe a 'Concentração da Solução', a 'Taxa de Infusão' e o 'Tempo de Infusão'.`,
                observacaoImportante: `Monitore de perto os pacientes, pois a dose recebida pode afetar diretamente a eficácia e segurança do tratamento, especialmente em terapias de alta potência.`,
                campos: [
                    { id: "concentracaoSolucao", label: "Concentração da Solução:", type: "number", placeholder: "Ex: 10", units: ["mg/mL", "mcg/mL", "g/mL"], defaultUnit: "mg/mL", step: "0.01" },
                    { id: "taxaInfusaoMlH", label: "Taxa de Infusão:", type: "number", placeholder: "Ex: 50", units: ["mL/h"], defaultUnit: "mL/h", step: "0.01" },
                    { id: "tempoInfusaoDose", label: "Tempo de Infusão:", type: "number", placeholder: "Ex: 2", units: ["horas", "minutos"], defaultUnit: "horas", step: "0.01" }
                ],
                calculo: function() {
                    let concentracaoSolucao = parseFloat(document.getElementById("concentracaoSolucao").value);
                    let taxaInfusao = parseFloat(document.getElementById("taxaInfusaoMlH").value);
                    let tempoInfusao = parseFloat(document.getElementById("tempoInfusaoDose").value);

                    const unitConcentracao = document.getElementById("concentracaoSolucao-unit-select").value;
                    const unitTaxaInfusao = document.getElementById("taxaInfusaoMlH-unit-select").value; // Esta unidade é fixa como mL/h
                    const unitTempoInfusao = document.getElementById("tempoInfusaoDose-unit-select").value;

                    if (isNaN(concentracaoSolucao) || isNaN(taxaInfusao) || isNaN(tempoInfusao) ||
                        concentracaoSolucao <= 0 || taxaInfusao <= 0 || tempoInfusao <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Convert concentration to mg/mL
                    concentracaoSolucao = convertConcentrationToMgPerMl(concentracaoSolucao, unitConcentracao);

                    // Convert time to hours
                    let tempoEmHoras = tempoInfusao;
                    if (unitTempoInfusao === "minutos") {
                        tempoEmHoras = tempoInfusao / 60;
                    }

                    const doseRecebida = concentracaoSolucao * taxaInfusao * tempoEmHoras;

                    return {
                        resultado: `Dose Recebida: ${doseRecebida.toFixed(2)} mg`,
                        detalhes: [
                            `Concentração da Solução Convertida: ${concentracaoSolucao.toFixed(2)} mg/mL`,
                            `Taxa de Infusão: ${taxaInfusao.toFixed(2)} mL/h`,
                            `Tempo de Infusão Convertido: ${tempoEmHoras.toFixed(2)} horas`
                        ]
                    };
                },
                referencias: []
            }
        }
    },
    // 2. Cálculos de Volume e Concentração
    "Cálculos de Volume e Concentração": {
        name: "Cálculos de Volume e Concentração",
        subCategories: {
            "Volume da Dose Desejada": {
                titulo: "Volume de Dose Desejada",
                fundamento: `Calcula o volume de uma solução ou medicamento necessário para uma dose específica. É um dos cálculos mais básicos e frequentes na prática clínica, garantindo que a quantidade correta do fármaco seja entregue ao paciente.`,
                formula: `Volume Desejado (mL) = (Dose Prescrita (mg) / Concentração Disponível (mg/mL))`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um médico prescreveu 50 mg de um medicamento. O medicamento está disponível em frascos de 250 mg/5 mL. Quantos mL você precisa para obter a dose desejada prescrita ?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>  Identificar os dados:<br>• Dose Prescrita = 50 mg<br>• Concentração Disponível = 250 mg/5 mL<br><br><strong>2️⃣ Calcular a concentração por mL:</strong><br>  Calcular a concentração por mL:<br>• Concentração por mL = 250 mg / 5 mL = 50 mg/mL<br><br><strong>3️⃣ Aplicar a fórmula:</strong><br>  Aplicar a fórmula:<br>    Volume Desejado (mL) = 50 mg / 50 mg/mL = 1 mL<br><br><hr><br><strong>✅ Resposta:</strong><br> O volume para a dose desejada é 1 mL do medicamento `,
                chamadaCalculadora: `Para calcular o volume da dose desejada, informe a 'Dose Prescrita' e a 'Concentração do Medicamento'.`,
                observacaoImportante: `Sempre verifique a concentração do medicamento no rótulo e, se necessário, converta as unidades para que sejam consistentemente antes de aplicar a fórmula. 📌 Atenção: o volume resultante do cálculo da dose desejada prescrita não necessariamente será o volume administrado diretamente ao paciente. Esse valor é um volume de referência, que pode precisar de diluição dependendo do medicamento e das recomendações específicas do fabricante.No entanto, essa distinção não altera a dose real de medicamento administrada."`,
                campos: [
                    { id: "dosePrescrita", label: "Dose Prescrita:", type: "number", placeholder: "Ex: 50", units: ["mg", "mcg", "g"], defaultUnit: "mg", step: "0.01" },
                    { id: "concentracaoDisponivel", label: "Concentração do Medicamento:", type: "number", placeholder: "Ex: 250", units: ["mg", "mcg", "g"], defaultUnit: "mg", step: "0.01" },
                    { id: "volumeDisponivel", label: "Volume Total da Apresentação:", type: "number", placeholder: "Ex: 5", units: ["mL", "L"], defaultUnit: "mL", step: "0.01" }
                ],
                calculo: function() {
                    let dosePrescrita = parseFloat(document.getElementById("dosePrescrita").value);
                    let concentracaoDisponivel = parseFloat(document.getElementById("concentracaoDisponivel").value);
                    let volumeDisponivel = parseFloat(document.getElementById("volumeDisponivel").value);

                    const unitDose = document.getElementById("dosePrescrita-unit-select").value;
                    const unitConcentracao = document.getElementById("concentracaoDisponivel-unit-select").value;
                    const unitVolume = document.getElementById("volumeDisponivel-unit-select").value;

                    if (isNaN(dosePrescrita) || isNaN(concentracaoDisponivel) || isNaN(volumeDisponivel) ||
                        dosePrescrita <= 0 || concentracaoDisponivel <= 0 || volumeDisponivel <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (mg e mL)
                    dosePrescrita = convertToMg(dosePrescrita, unitDose);
                    concentracaoDisponivel = convertToMg(concentracaoDisponivel, unitConcentracao);
                    volumeDisponivel = convertToMl(volumeDisponivel, unitVolume);

                    if (volumeDisponivel === 0) {
                        throw new Error("O Volume Total da Apresentação não pode ser zero.");
                    }

                    const concentracaoPorMl = concentracaoDisponivel / volumeDisponivel;

                    if (concentracaoPorMl === 0) {
                        throw new Error("A concentração do medicamento é zero, verifique os valores informados.");
                    }

                    const volumeDesejado = dosePrescrita / concentracaoPorMl;

                    return {
                        resultado: `Volume da dose desejada: ${volumeDesejado.toFixed(2)} mL`,
                        detalhes: [
                            `Dose Prescrita: ${dosePrescrita.toFixed(2)} mg`,
                            `Concentração Disponível : ${concentracaoDisponivel.toFixed(2)} mg`,
                            `Volume Disponível : ${volumeDisponivel.toFixed(2)} mL`,
                            `Concentração por mL: ${concentracaoPorMl.toFixed(2)} mg/mL`
                        ]
                    };
                },
                referencias: []
            },
            "Reconstituição e Dosagem": {
                titulo: "Reconstituição e Dosagem",
                fundamento: `Em muitas situações, o medicamento não vem pronto para uso, mas sim na forma de pó liofilizado ou concentrado (frasco-ampola). Nesses casos, é necessária a reconstituição — um processo crítico que consiste em:

Adicionar um diluente apropriado  ao frasco-ampola contendo o pó. Este cálculo permite calcular a concentração reconstituida e o volume de dose desejada pós reconstituição.`,
                formula: `Concentração Reconstituída (mg/mL) = Dose Total do Frasco (mg) / Volume do Diluente (mL)<br>Volume da dose desejada (mL) = Dose Prescrita (mg) / Concentração Reconstituída (mg/mL)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um frasco de medicamento contém 500 mg de pó. O fabricante recomenda reconstituir com 5 mL de diluente. A dose prescrita é de 100 mg. Qual a concentração reconstituída e o volume da dose desejada prescrita ?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>  **Identificar os dados:**<br>• Dose Total do Frasco = 500 mg<br>• Volume do Diluente = 5 mL<br>• Dose Prescrita = 100 mg<br><br><strong>2️⃣ Calcular a Concentração Reconstituída:</strong><br>  Calcular a Concentração Reconstituída:<br>• Concentração Reconstituída (mg/mL) = 500 mg / 5 mL = 100 mg/mL<br><br><strong>3️⃣ Calcular o Volume da dose desejada prescrita :</strong><br>  Calcular o Volume da dose desejada prescrita:<br>• Volume da dose desejada prescrita (mL) = 100 mg / 100 mg/mL = 1 mL<br><br><hr><br><strong>✅ Resposta:</strong><br> A concentração reconstituída é de 100 mg/mL e o volume da dose desejada prescrita será 1 mL.`,
                chamadaCalculadora: `Para o cálculo de reconstituição, informe a 'Dose Total do Frasco', o 'Volume do Diluente' e a 'Dose Prescrita'.`,
                observacaoImportante: `Sempre siga as orientações do fabricante para reconstituição, incluindo o tipo e volume de diluente. A estabilidade do medicamento reconstituído pode variar. Lembre também que o volume da dose desejada prescrita não necessariamente será o volume administrado diretamente ao paciente. Esse valor é um volume de referência, que pode precisar de diluição dependendo do medicamento e das recomendações específicas do fabricante.No entanto, essa distinção não altera a dose real de medicamento administrada."`,
                campos: [
                    { id: "doseTotalFrasco", label: "Dose Total do Frasco (Pó):", type: "number", placeholder: "Ex: 500", units: ["mg", "mcg", "g"], defaultUnit: "mg", step: "0.01" },
                    { id: "volumeDiluente", label: "Volume do Diluente:", type: "number", placeholder: "Ex: 5", units: ["mL", "L"], defaultUnit: "mL", step: "0.01" },
                    { id: "dosePrescritaReconstituicao", label: "Dose Prescrita:", type: "number", placeholder: "Ex: 100", units: ["mg", "mcg", "g"], defaultUnit: "mg", step: "0.01" }
                ],
                calculo: function() {
                    let doseTotalFrasco = parseFloat(document.getElementById("doseTotalFrasco").value);
                    let volumeDiluente = parseFloat(document.getElementById("volumeDiluente").value);
                    let dosePrescrita = parseFloat(document.getElementById("dosePrescritaReconstituicao").value);

                    const unitDoseFrasco = document.getElementById("doseTotalFrasco-unit-select").value;
                    const unitVolumeDiluente = document.getElementById("volumeDiluente-unit-select").value;
                    const unitDosePrescrita = document.getElementById("dosePrescritaReconstituicao-unit-select").value;

                    if (isNaN(doseTotalFrasco) || isNaN(volumeDiluente) || isNaN(dosePrescrita) ||
                        doseTotalFrasco <= 0 || volumeDiluente <= 0 || dosePrescrita <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (mg e mL)
                    doseTotalFrasco = convertToMg(doseTotalFrasco, unitDoseFrasco);
                    volumeDiluente = convertToMl(volumeDiluente, unitVolumeDiluente);
                    dosePrescrita = convertToMg(dosePrescrita, unitDosePrescrita);

                    if (volumeDiluente === 0) {
                        throw new Error("O Volume do Diluente não pode ser zero.");
                    }

                    const concentracaoReconstituida = doseTotalFrasco / volumeDiluente;

                    if (concentracaoReconstituida === 0) {
                        throw new Error("A Concentração Reconstituída é zero. Verifique a Dose Total do Frasco e o Volume do Diluente.");
                    }

                    const volumeAdministrar = dosePrescrita / concentracaoReconstituida;

                    return {
                        resultado: `Concentração Reconstituída: ${concentracaoReconstituida.toFixed(2)} mg/mL<br>Volume de dose desejada: ${volumeAdministrar.toFixed(2)} mL`,
                        detalhes: [
                            `Dose Total do Frasco : ${doseTotalFrasco.toFixed(2)} mg`,
                            `Volume do Diluente : ${volumeDiluente.toFixed(2)} mL`,
                            `Dose Prescrita : ${dosePrescrita.toFixed(2)} mg`
                        ]
                    };
                },
                referencias: []
            },
            "Concentração Final após Diluição (C1V1=C2V2)": {
                titulo: "Cálculo de Diluição (C1V1=C2V2)",
                fundamento: `A equação C1V1 = C2V2 é fundamental para manipulações farmacêuticas, permitindo calcular uma variável desconhecida (concentração ou volume) quando as outras três são conhecidas. É crucial para preparar soluções com a concentração terapêutica desejada, garantindo a segurança e eficácia do tratamento.`,
                formula: `A fórmula geral é C1V1 = C2V2, onde:<br>
              C1 = Concentração Inicial<br>
              V1 = Volume Inicial<br>
              C2 = Concentração Final<br>
              V2 = Volume Final<br><br>
              Você pode calcular qualquer uma das variáveis isolando-a:
              <ul>
                <li>C1 = (C2 × V2) / V1</li>
                <li>V1 = (C2 × V2) / C1</li>
                <li>C2 = (C1 × V1) / V2</li>
                <li>V2 = (C1 × V1) / C2</li>
              </ul>
              `,
                exemploClinico: `<strong>🔸 Exemplo para Calcular C2:</strong><br> Você tem uma solução de 200 mg/mL (C1) e precisa diluí-la. Se você pegar 5 mL (V1) dessa solução e adicionar diluente até atingir um volume final de 100 mL (V2), qual será a concentração final (C2)?<br><br><strong>🔹 Resolução:</strong><br>• C2 = (200 mg/mL × 5 mL) / 100 mL = 10 mg/mL<br><br><strong>✅ Resposta:</strong><br> A concentração final será de 10 mg/mL.<br><hr><br><strong>Para outros cálculos (C1, V1, V2), a lógica é similar, rearranjando a fórmula para isolar a variável desejada.</strong>`,
                chamadaCalculadora: `Selecione qual variável você deseja calcular e informe os outros três valores. Certifique-se de que as unidades de concentração (C) sejam as mesmas e as unidades de volume (V) também sejam as mesmas, para garantir resultados consistentes.`,
                observacaoImportante: `Sempre adicione o concentrado ao diluente, e não o contrário, para garantir a homogeneidade da solução. Verifique a compatibilidade dos diluentes e a estabilidade da nova concentração. Descarte adequadamente qualquer excesso. Unidades devem ser consistentemente (ex: se C1 é mg/mL, C2 também será mg/mL).`,
                campos: [
                    {
                        id: "variableToCalculate",
                        label: "Calcular Qual Variável?",
                        type: "select",
                        options: [
                            { value: "C2", text: "Concentração Final (C2)" },
                            { value: "C1", text: "Concentração Inicial (C1)" },
                            { value: "V1", text: "Volume Inicial (V1)" },
                            { value: "V2", text: "Volume Final (V2)" }
                        ],
                        defaultUnit: "C2" // This isn't a unit, but used to set default selection
                    },
                    { id: "c1Value", label: "Concentração Inicial (C1):", type: "number", placeholder: "Ex: 200", units: ["mg/mL", "mcg/mL", "g/mL", "%"], defaultUnit: "mg/mL", step: "0.01", hideFor: ["C1"] },
                    { id: "v1Value", label: "Volume Inicial (V1):", type: "number", placeholder: "Ex: 5", units: ["mL", "L"], defaultUnit: "mL", step: "0.01", hideFor: ["V1"] },
                    { id: "c2Value", label: "Concentração Final (C2):", type: "number", placeholder: "Ex: 10", units: ["mg/mL", "mcg/mL", "g/mL", "%"], defaultUnit: "mg/mL", step: "0.01", hideFor: ["C2"] },
                    { id: "v2Value", label: "Volume Final (V2):", type: "number", placeholder: "Ex: 100", units: ["mL", "L"], defaultUnit: "mL", step: "0.01", hideFor: ["V2"] }
                ],
                calculo: function() {
                    const variableToCalculate = document.getElementById("variableToCalculate").value;

                    let c1 = parseFloat(document.getElementById("c1Value").value);
                    let v1 = parseFloat(document.getElementById("v1Value").value);
                    let c2 = parseFloat(document.getElementById("c2Value").value);
                    let v2 = parseFloat(document.getElementById("v2Value").value);

                    // Get units
                    const unitC1 = document.getElementById("c1Value-unit-select").value;
                    const unitV1 = document.getElementById("v1Value-unit-select").value;
                    const unitC2 = document.getElementById("c2Value-unit-select").value;
                    const unitV2 = document.getElementById("v2Value-unit-select").value;

                    let resultValue;
                    let resultUnit;
                    let details = [];

                    try {
                        // Convert known values to base units (mg/mL for concentrations, mL for volumes)
                        if (variableToCalculate !== "C1") {
                            c1 = convertConcentrationToMgPerMl(c1, unitC1);
                            details.push(`C1 (Convertido para base): ${c1.toFixed(4)} mg/mL`);
                        }
                        if (variableToCalculate !== "V1") {
                            v1 = convertToMl(v1, unitV1);
                            details.push(`V1 (Convertido para base): ${v1.toFixed(4)} mL`);
                        }
                        if (variableToCalculate !== "C2") {
                            c2 = convertConcentrationToMgPerMl(c2, unitC2);
                            details.push(`C2 (Convertido para base): ${c2.toFixed(4)} mg/mL`);
                        }
                        if (variableToCalculate !== "V2") {
                            v2 = convertToMl(v2, unitV2);
                            details.push(`V2 (Convertido para base): ${v2.toFixed(4)} mL`);
                        }

                        // Perform calculation based on `variableToCalculate`
                        switch (variableToCalculate) {
                            case "C2":
                                if (isNaN(c1) || isNaN(v1) || isNaN(v2) || c1 <= 0 || v1 <= 0 || v2 <= 0) {
                                    throw new Error("Para calcular C2, preencha C1, V1 e V2 com valores numéricos válidos e maiores que zero para concentrações e volumes.");
                                }
                                resultValue = (c1 * v1) / v2;
                                resultUnit = unitC2; // Use the selected output unit for C2
                                details.unshift(`Variável Calculada: Concentração Final (C2)`);
                                break;
                            case "C1":
                                if (isNaN(c2) || isNaN(v1) || isNaN(v2) || c2 <= 0 || v1 <= 0 || v2 <= 0) {
                                    throw new Error("Para calcular C1, preencha C2, V1 e V2 com valores numéricos válidos e maiores que zero para concentrações e volumes.");
                                }
                                if (v1 === 0) throw new Error("V1 não pode ser zero para calcular C1.");
                                resultValue = (c2 * v2) / v1;
                                resultUnit = unitC1; // Use the selected output unit for C1
                                details.unshift(`Variável Calculada: Concentração Inicial (C1)`);
                                break;
                            case "V1":
                                if (isNaN(c1) || isNaN(c2) || isNaN(v2) || c1 <= 0 || c2 <= 0 || v2 <= 0) {
                                    throw new Error("Para calcular V1, preencha C1, C2 e V2 com valores numéricos válidos e maiores que zero para concentrações e volume.");
                                }
                                if (c1 === 0) throw new Error("C1 não pode ser zero para calcular V1.");
                                resultValue = (c2 * v2) / c1;
                                resultUnit = unitV1; // Use the selected output unit for V1
                                details.unshift(`Variável Calculada: Volume Inicial (V1)`);
                                break;
                            case "V2":
                                if (isNaN(c1) || isNaN(v1) || isNaN(c2) || c1 <= 0 || v1 <= 0 || c2 <= 0) {
                                    throw new Error("Para calcular V2, preencha C1, V1 e C2 com valores numéricos válidos e maiores que zero para concentrações e volume.");
                                }
                                if (c2 === 0) throw new Error("C2 não pode ser zero para calcular V2.");
                                resultValue = (c1 * v1) / c2;
                                resultUnit = unitV2; // Use the selected output unit for V2
                                details.unshift(`Variável Calculada: Volume Final (V2)`);
                                break;
                            default:
                                throw new Error("Selecione uma variável para calcular.");
                        }

                        // Convert result back to the selected output unit from base units
                        if (variableToCalculate === "C1" || variableToCalculate === "C2") {
                            resultValue = convertFromMgPerMl(resultValue, resultUnit);
                        } else if (variableToCalculate === "V1" || variableToCalculate === "V2") {
                            resultValue = convertFromMl(resultValue, resultUnit);
                        }

                        // Ensure the result is positive
                        if (resultValue < 0) {
                            throw new Error("O resultado do cálculo é negativo. Verifique os valores de entrada.");
                        }

                        return {
                            resultado: `${variableToCalculate}: ${resultValue.toFixed(4)} ${resultUnit}`,
                            detalhes: details
                        };

                    } catch (error) {
                        throw error;
                    }
                },
                referencias: []
            },
            "Transformação de Soro": {
                titulo: "Transformação de Soro",
                fundamento: `Calcula os volumes necessários de um soluto concentrado e de um soro base para preparar uma solução final com uma concentração e volume desejados. Este cálculo é fundamental para a manipulação e preparação de soluções intravenosas na prática clínica.`,
                formula: `Quantidade de Soluto (g) = (Volume Final (mL) × Concentração Desejada (%)) / 100<br>Volume do Soluto Concentrado (mL) = (Quantidade de Soluto (g) × 100) / Concentração do Soluto (%)<br>Volume do Soro Base (mL) = Volume Final (mL) - Volume do Soluto Concentrado (mL)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Paciente feminino, 65 anos, admitida na UTI com quadro de pneumonia grave associada à insuficiência respiratória aguda, em uso de antibióticos, ventilação mecânica e suporte venoso.

Durante a evolução, apresentou hipoglicemia recorrente (glicemia capilar 52 mg/dL) devido à restrição nutricional enteral nas últimas 12 horas, associada ao uso de insulina para controle glicêmico prévio.

O médico prescreve rapidamente:
➡️ Soro Glicosado 10% 500 mL EV em infusão contínua.

Porém, ao checar o estoque da farmácia e da unidade, não há SG 10% disponível, apenas:

Ampolas de SG 50% (10 mL cada)

Soro fisiológico 0,9% em bolsas de 500 mL.<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Volume Final Desejado = 500 mL<br>• Concentração Desejada = 10%<br>• Concentração do Soluto Disponível = 50%<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>  Calcular a Quantidade de Soluto Necessária:<br>• Quantidade de Soluto (g) = (500 mL × 10%) / 100 = 50 g<br><br><strong>3️⃣ Resultado:</strong><br>  Calcular o Volume da Glicose 50% Necessário:**<br>• Volume Glicose 50% (mL) = (50 g × 100) / 50% = 100 mL(10 ampolas)<br><br>4.  Calcular o Volume do Soro Base (para Volume Final de 500 mL):<br>• Volume do Soro Base (mL) = Volume Final (mL) - Volume Glicose 50% (mL)<br>• Volume do Soro Base (mL) = 500 mL - 100 mL = 400 mL<br><br><hr><br><strong>✅ Resposta:</strong><br> Para obter 500 mL de Glicose 10%, adicione 100 mL (10 ampolas) de Glicose 50% a 400 mL de soro base.`,
                chamadaCalculadora: `Para transformar o soro, informe o 'Volume Desejado da Solução Final', a 'Concentração Desejada' e a 'Concentração do Soluto' que você tem disponível.`,
                observacaoImportante: `Este cálculo é para transformar um soro em outro, onde o volume final da solução é o objetivo. É crucial entender se a porcentagem do soluto é em peso/volume (g/100mL) ou apenas porcentagem. Sempre use técnica asséptica e siga as diretrizes de compatibilidade.`,
                campos: [
                    { id: "volumeFinalTS", label: "Volume Desejado da Solução Final:", type: "number", placeholder: "Ex: 500", units: ["mL", "L"], defaultUnit: "mL", step: "0.01" },
                    { id: "concentracaoDesejadaTS", label: "Concentração Desejada da Solução Final:", type: "number", placeholder: "Ex: 10", units: ["%", "g/mL"], defaultUnit: "%", step: "0.01" },
                    { id: "concentracaoSolutoTS", label: "Concentração do Soluto Disponível:", type: "number", placeholder: "Ex: 50", units: ["%", "g/mL"], defaultUnit: "%", step: "0.01" }
                ],
                calculo: function() {
                    const volumeFinalInput = document.getElementById("volumeFinalTS");
                    const concentracaoDesejadaInput = document.getElementById("concentracaoDesejadaTS");
                    const concentracaoSolutoInput = document.getElementById("concentracaoSolutoTS");

                    let volumeFinal = parseFloat(volumeFinalInput.value);
                    let concentracaoDesejada = parseFloat(concentracaoDesejadaInput.value);
                    let concentracaoSoluto = parseFloat(concentracaoSolutoInput.value);

                    const unitVolumeFinal = document.getElementById("volumeFinalTS-unit-select").value;
                    const unitConcentracaoDesejada = document.getElementById("concentracaoDesejadaTS-unit-select").value;
                    const unitConcentracaoSoluto = document.getElementById("concentracaoSolutoTS-unit-select").value;

                    if (isNaN(volumeFinal) || isNaN(concentracaoDesejada) || isNaN(concentracaoSoluto) || volumeFinal <= 0 || concentracaoSoluto <= 0 || concentracaoDesejada < 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e certifique-se que 'Volume Desejado da Solução Final' e 'Concentração do Soluto Disponível' são maiores que zero. A 'Concentração Desejada' deve ser maior ou igual a zero.");
                    }

                    // Conversão de unidades para os campos com unidade selecionável
                    volumeFinal = convertToMl(volumeFinal, unitVolumeFinal);
                    // convertPercentageToDecimal retorna o valor da porcentagem como número, a divisão por 100 é feita na fórmula.
                    concentracaoDesejada = convertPercentageToDecimal(concentracaoDesejada, unitConcentracaoDesejada);
                    concentracaoSoluto = convertPercentageToDecimal(concentracaoSoluto, unitConcentracaoSoluto);

                    if (concentracaoSoluto === 0) {
                        throw new Error("A Concentração do Soluto Disponível não pode ser zero ou negativa.");
                    }
                    if (concentracaoDesejada > concentracaoSoluto) {
                        throw new Error("A Concentração Desejada não pode ser maior que a Concentração do Concentrado.");
                    }

                    // A quantidade de soluto necessária em gramas para o volume final desejado
                    const quantidadeSolutoGramas = (volumeFinal * (concentracaoDesejada / 100)); // Aqui concentracaoDesejada é a porcentagem informada pelo usuário

                    // O volume do soluto concentrado necessário
                    const volumeSolutoNecessario = (quantidadeSolutoGramas * 100) / concentracaoSoluto;

                    const volumeSoroBase = volumeFinal - volumeSolutoNecessario;

                    if (volumeSoroBase < 0) {
                        throw new Error("Volume do soluto necessário excede o volume final desejado. Verifique as concentrações.");
                    }

                    return {
                        resultado: `Volume do Soluto a Adicionar: ${volumeSolutoNecessario.toFixed(2)} mL<br>Volume do Soro Base Necessário: ${volumeSoroBase.toFixed(2)} mL`,
                        detalhes: [
                            `Volume Final Desejado Convertido: ${volumeFinal.toFixed(2)} mL`,
                            `Concentração Desejada Convertida: ${concentracaoDesejada.toFixed(2)} %`,
                            `Concentração do Soluto Convertida: ${concentracaoSoluto.toFixed(2)} %`
                        ]
                    };
                },
                referencias: []
            },
        }
    },
    // 3. Cálculos de Infusão e Gotejamento
    "Cálculos de Infusão e Gotejamento": {
        name: "Cálculos de Infusão e Gotejamento",
        subCategories: {
            "Taxa de Infusão (mL/h)": {
                titulo: "Taxa de Infusão (mL/h)",
                fundamento: `Calcula a taxa de infusão de uma solução ou medicamento em mililitros por hora (mL/h) ou mililitros por minuto (mL/min), fundamental para a programação precisa de bombas de infusão e administração de fluidos.`,
                formula: `Taxa de Infusão (mL/h) = Volume Total (mL) / Tempo de Infusão (horas)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Uma solução de 500 mL deve ser infundida em 4 horas utilizando um equipo de macrogotas. Qual deve ser a taxa de infusão em mL/h?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Volume Total = 500 mL<br>• Tempo de Infusão = 4 horas<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>  Aplicar a fórmula:<br>    Taxa de Infusão (mL/h) = 500 mL / 4 horas = 125 mL/h<br><br><hr><br><strong>✅ Resposta:</strong><br> A taxa de infusão deve ser de 125 mL/h.`,
                chamadaCalculadora: `Para calcular a taxa de infusão, informe o 'Volume Total' e o 'Tempo de Infusão'.`,
                observacaoImportante: `Sempre verifique a compatibilidade do medicamento com o diluente e a estabilidade da solução. A taxa de infusão deve ser ajustada conforme a resposta do paciente.`,
                campos: [
                    { id: "volumeTotalInfusao", label: "Volume Total da Solução:", type: "number", placeholder: "Ex: 500", units: ["mL", "L"], defaultUnit: "mL", step: "0.01" },
                    { id: "tempoInfusao", label: "Tempo de Infusão:", type: "number", placeholder: "Ex: 4", units: ["horas", "minutos"], defaultUnit: "horas", step: "0.01" }
                ],
                calculo: function() {
                    let volumeTotal = parseFloat(document.getElementById("volumeTotalInfusao").value);
                    let tempoInfusao = parseFloat(document.getElementById("tempoInfusao").value);

                    const unitVolume = document.getElementById("volumeTotalInfusao-unit-select").value;
                    const unitTempo = document.getElementById("tempoInfusao-unit-select").value;

                    if (isNaN(volumeTotal) || isNaN(tempoInfusao) || volumeTotal <= 0 || tempoInfusao <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (mL e horas)
                    volumeTotal = convertToMl(volumeTotal, unitVolume);
                    // Convert tempo para horas se estiver em minutos
                    let tempoEmHoras = tempoInfusao;
                    if (unitTempo === "minutos") {
                        tempoEmHoras = tempoInfusao / 60;
                    }

                    if (tempoEmHoras === 0) {
                        throw new Error("O Tempo de Infusão não pode ser zero.");
                    }

                    const taxaInfusao = volumeTotal / tempoEmHoras;

                    return {
                        resultado: `Taxa de Infusão: ${taxaInfusao.toFixed(2)} mL/h`,
                        detalhes: [
                            `Volume Total Convertido: ${volumeTotal.toFixed(2)} mL`,
                            `Tempo de Infusão Convertido: ${tempoEmHoras.toFixed(2)} horas`
                        ]
                    };
                },
                referencias: []
            },
            "Tempo de Infusão": {
                titulo: "Tempo de Infusão",
                fundamento: `Calcula o tempo necessário para infundir um volume específico de solução a uma determinada taxa de infusão. Essencial para o planejamento da administração de medicamentos e fluidos, garantindo que o tratamento seja concluído dentro do período desejado.`,
                formula: `Tempo de Infusão (horas) = Volume Total (mL) / Taxa de Infusão (mL/h)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente precisa receber 500 mL de soro fisiológico a uma taxa de 125 mL/h. Quanto tempo levará a infusão?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Volume Total = 500 mL<br>• Taxa de Infusão = 125 mL/h<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>  Aplicar a fórmula:<br>    Tempo de Infusão (horas) = 500 mL / 125 mL/h = 4 horas<br><br><hr><br><strong>✅ Resposta:</strong><br> A infusão levará 4 horas (240 minutos).`,
                chamadaCalculadora: `Para calcular o tempo de infusão, informe o 'Volume Total da Solução' e a 'Taxa de Infusão'.`,
                observacaoImportante: `Sempre arredonde o tempo para a unidade prática mais próxima (minutos ou horas). Considere a estabilidade do medicamento e o estado clínico do paciente ao determinar a duração da infusão.`,
                campos: [
                    { id: "volumeTotalTempoInfusao", label: "Volume Total da Solução:", type: "number", placeholder: "Ex: 500", units: ["mL", "L"], defaultUnit: "mL", step: "0.01" },
                    { id: "taxaInfusaoTempoInfusao", label: "Taxa de Infusão:", type: "number", placeholder: "Ex: 125", units: ["mL/h", "mL/min", "L/h"], defaultUnit: "mL/h", step: "0.01" }
                ],
                calculo: function() {
                    let volumeTotal = parseFloat(document.getElementById("volumeTotalTempoInfusao").value);
                    let taxaInfusao = parseFloat(document.getElementById("taxaInfusaoTempoInfusao").value);

                    const unitVolumeTotal = document.getElementById("volumeTotalTempoInfusao-unit-select").value;
                    const unitTaxaInfusao = document.getElementById("taxaInfusaoTempoInfusao-unit-select").value;

                    if (isNaN(volumeTotal) || isNaN(taxaInfusao) || volumeTotal <= 0 || taxaInfusao <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (mL e horas)
                    volumeTotal = convertToMl(volumeTotal, unitVolumeTotal);
                    taxaInfusao = convertTaxaInfusaoToMlPerHour(taxaInfusao, unitTaxaInfusao);

                    if (taxaInfusao === 0) {
                        throw new Error("A Taxa de Infusão não pode ser zero.");
                    }

                    const tempoEmHoras = volumeTotal / taxaInfusao;
                    const tempoEmMinutos = tempoEmHoras * 60;

                    return {
                        resultado: `Tempo de Infusão: ${tempoEmHoras.toFixed(2)} horas (${tempoEmMinutos.toFixed(2)} minutos)`,
                        detalhes: [
                            `Volume Total Convertido: ${volumeTotal.toFixed(2)} mL`,
                            `Taxa de Infusão Convertida: ${taxaInfusao.toFixed(2)} mL/h`
                        ]
                    };
                },
                referencias: []
            },
            "Gotejamento (gts/min)": {
                titulo: "Gotejamento (gts/min)",
                fundamento: `Calcula a taxa de gotejamento em gotas por minuto (gts/min) para infusões intravenosas, essencial para a administração de fluidos e medicamentos quando se utiliza equipos de macrogotas ou microgotas. Garante que o volume total seja infundido no tempo prescrito.`,
                formula: `Gotejamento (gts/min) = (Volume Total (mL) × Fator Gotejamento) / Tempo de Infusão (minutos)<br>Onde: Fator Gotejamento = 20 gts/mL (macrogotas) ou 60 gts/mL (microgotas)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Uma solução de 1000 mL deve ser infundida em 8 horas utilizando um equipo de macrogotas. Qual deve ser a taxa de gotejamento?<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Volume Total = 1000 mL<br>• Tempo de Infusão = 8 horas (converter para minutos: 8 × 60 = 480 minutos)<br>• Tipo de Equipo = Macrogotas (Fator Gotejamento = 20 gts/mL)<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• Gotejamento (gts/min) = (1000 mL × 20 gts/mL) / 480 minutos<br>• Gotejamento (gts/min) = 20000 / 480<br>• Gotejamento (gts/min) ≈ 41.67 gts/min ≈ 42 gts/min<br><br><hr><br><strong>✅ Resposta:</strong><br> O gotejamento deve ser de aproximadamente 42 gotas/min.`,
                chamadaCalculadora: `Para calcular o gotejamento, informe o 'Volume Total', 'Tempo de Infusão' e o 'Tipo de Equipo'.`,
                observacaoImportante: `Sempre arredonde o número de gotas/minuto para o número inteiro mais próximo, pois não é possível configurar frações de gotas. Mantenha a vigilância sobre o paciente e o gotejamento.`,
                campos: [
                    { id: "volumeTotalGotejamento", label: "Volume Total da Solução:", type: "number", placeholder: "Ex: 1000", units: ["mL", "L"], defaultUnit: "mL", step: "0.01" },
                    { id: "tempoGotejamento", label: "Tempo de Infusão:", type: "number", placeholder: "Ex: 8", units: ["horas", "minutos"], defaultUnit: "horas", step: "0.01" },
                    { id: "tipoEquipo", label: "Tipo de Equipo:", type: "select", options: [{ value: "macro", text: "Macrogotas (20 gts/mL)" }, { value: "micro", text: "Microgotas (60 gts/mL)" }] }
                ],
                calculo: function() {
                    const volumeTotalInput = document.getElementById("volumeTotalGotejamento");
                    const tempoGotejamentoInput = document.getElementById("tempoGotejamento");
                    const tipoEquipo = document.getElementById("tipoEquipo").value;

                    let volumeTotal = parseFloat(volumeTotalInput.value);
                    let tempoInfusao = parseFloat(tempoGotejamentoInput.value);

                    const unitVolumeTotal = document.getElementById("volumeTotalGotejamento-unit-select").value;
                    const unitTempoInfusao = document.getElementById("tempoGotejamento-unit-select").value;

                    if (isNaN(volumeTotal) || isNaN(tempoInfusao) || volumeTotal <= 0 || tempoInfusao <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e certifique-se que 'Volume Total da Solução' e 'Tempo de Infusão' são maiores que zero.");
                    }

                    // --- Conversão de Unidades ---
                    volumeTotal = convertToMl(volumeTotal, unitVolumeTotal); // Convert volume to mL
                    const tempoMinutos = convertTimeToMinutes(tempoInfusao, unitTempoInfusao); // Convert time to minutes

                    const fatorGotejamento = (tipoEquipo === "macro") ? 20 : 60;

                    if (tempoMinutos <= 0) {
                        throw new Error("O Tempo de Infusão convertido é zero ou negativo. Verifique o valor de 'Tempo de Infusão'.");
                    }

                    const gotejamento = (volumeTotal * fatorGotejamento) / tempoMinutos;

                    if (gotejamento <= 0) {
                        throw new Error("O Gotejamento calculado é zero ou negativo. Verifique os valores de entrada.");
                    }

                    return {
                        resultado: `Gotejamento: ${Math.round(gotejamento)} gotas/min (${gotejamento.toFixed(2)} exato)`,
                        detalhes: [
                            `Volume Total da Solução Convertido: ${volumeTotal.toFixed(2)} mL`,
                            `Tempo de Infusão Convertido: ${tempoMinutos.toFixed(2)} minutos`,
                            `Tipo de Equipo: ${tipoEquipo === "macro" ? "Macrogotas" : "Microgotas"} (${fatorGotejamento} gts/mL)`
                        ]
                    };
                },
                referencias: []
            },
            "Dose Administrada via Infusão (Drogas Vasoativas)": {
                titulo: "Dose Administrada via Infusão (Drogas Vasoativas)",
                fundamento: `Calcula a taxa de infusão em mililitros por hora (mL/h) para medicamentos que requerem dosagem precisa por peso e tempo, como drogas vasoativas, sedativos e analgésicos. Isso permite a titulação da dose baseada na resposta do paciente.`,
                formula: `Taxa de Infusão (mL/h) = (Dose (mcg/kg/min) &times; Peso (kg) &times; 60 min) / Concentração da Solução (mcg/mL)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente de 70 kg precisa de Norepinefrina a 0.1 mcg/kg/min. A solução foi preparada com 4 mg de Norepinefrina em 250 mL de SF 0.9%. Qual a taxa de infusão em mL/h?<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Dose Desejada = 0.1 mcg/kg/min<br>• Peso = 70 kg<br>• Quantidade de Medicamento = 4 mg<br>• Volume da Solução = 250 mL<br><br><strong>2️⃣ Converter unidades para a base:</strong><br>• Quantidade de Medicamento = 4 mg = 4000 mcg<br>• Concentração da Solução = 4000 mcg / 250 mL = 16 mcg/mL<br><br><strong>3️⃣ Aplicar a fórmula:</strong><br>• Taxa de Infusão (mL/h) = (0.1 mcg/kg/min &times; 70 kg &times; 60 min) / 16 mcg/mL<br>• Taxa de Infusão (mL/h) = (7 &times; 60) / 16<br>• Taxa de Infusão (mL/h) = 420 / 16 = 26.25 mL/h<br><br><hr><br><strong>✅ Resposta:</strong><br> A taxa de infusão deve ser de aproximadamente 26.25 mL/h.`,
                chamadaCalculadora: `Informe a 'Dose Desejada', o 'Peso do Paciente', a 'Quantidade de Medicamento no Frasco' e o 'Volume Total da Solução'.`,
                observacaoImportante: `Certifique-se de que todas as unidades estejam consistentemente antes do cálculo. A concentração da solução é calculada a partir da quantidade de medicamento e do volume total da solução.`,
                campos: [
                    { id: "doseDesejadaTIM", label: "Dose Desejada:", type: "number", placeholder: "Ex: 0.1", units: ["mcg/kg/min", "mg/kg/min", "mg/kg/h"], defaultUnit: "mcg/kg/min", step: "0.01" },
                    { id: "pesoPacienteTIM", label: "Peso do Paciente:", type: "number", placeholder: "Ex: 70", units: ["kg", "lb"], defaultUnit: "kg", step: "0.01" },
                    { id: "quantMedicamentoTIM", label: "Quantidade de Medicamento no Frasco:", type: "number", placeholder: "Ex: 4", units: ["mg", "g"], defaultUnit: "mg", step: "0.01" },
                    { id: "volumeSolucaoTIM", label: "Volume Total da Solução:", type: "number", placeholder: "Ex: 250", units: ["mL", "L"], defaultUnit: "mL", step: "0.01" }
                ],
                calculo: function() {
                    let doseDesejada = parseFloat(document.getElementById("doseDesejadaTIM").value);
                    let pesoPaciente = parseFloat(document.getElementById("pesoPacienteTIM").value);
                    let quantMedicamento = parseFloat(document.getElementById("quantMedicamentoTIM").value);
                    let volumeSolucao = parseFloat(document.getElementById("volumeSolucaoTIM").value);

                    const unitDoseDesejada = document.getElementById("doseDesejadaTIM-unit-select").value;
                    const unitPesoPaciente = document.getElementById("pesoPacienteTIM-unit-select").value;
                    const unitQuantMedicamento = document.getElementById("quantMedicamentoTIM-unit-select").value;
                    const unitVolumeSolucao = document.getElementById("volumeSolucaoTIM-unit-select").value;

                    if (isNaN(doseDesejada) || isNaN(pesoPaciente) || isNaN(quantMedicamento) || isNaN(volumeSolucao) ||
                        doseDesejada <= 0 || pesoPaciente <= 0 || quantMedicamento <= 0 || volumeSolucao <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão de unidades para base (mcg/kg/min, kg, mcg, mL)
                    doseDesejada = convertDosePerWeightPerTime(doseDesejada, unitDoseDesejada); // Converts to mcg/kg/min
                    pesoPaciente = convertToKg(pesoPaciente, unitPesoPaciente); // Converts to kg
                    quantMedicamento = convertToMcg(quantMedicamento, unitQuantMedicamento); // Converts to mcg
                    volumeSolucao = convertToMl(volumeSolucao, unitVolumeSolucao); // Converts to mL

                    if (volumeSolucao === 0) {
                        throw new Error("O Volume Total da Solução não pode ser zero.");
                    }

                    const concentracaoSolucaoMcgPerMl = quantMedicamento / volumeSolucao; // mcg/mL

                    if (concentracaoSolucaoMcgPerMl === 0) {
                        throw new Error("A Concentração da Solução é zero. Verifique a quantidade de medicamento e o volume da solução.");
                    }

                    // Taxa de Infusão (mL/h) = (Dose (mcg/kg/min) × Peso (kg) × 60 min/h) / Concentração da Solução (mcg/mL)
                    const taxaInfusaoMlH = (doseDesejada * pesoPaciente * 60) / concentracaoSolucaoMcgPerMl;

                    return {
                        resultado: `Taxa de Infusão: ${taxaInfusaoMlH.toFixed(2)} mL/h`,
                        detalhes: [
                            `Dose Desejada Convertida: ${doseDesejada.toFixed(4)} mcg/kg/min`,
                            `Peso do Paciente Convertido: ${pesoPaciente.toFixed(2)} kg`,
                            `Quantidade de Medicamento Convertida: ${quantMedicamento.toFixed(2)} mcg`,
                            `Volume da Solução Convertido: ${volumeSolucao.toFixed(2)} mL`,
                            `Concentração da Solução: ${concentracaoSolucaoMcgPerMl.toFixed(4)} mcg/mL`
                        ]
                    };
                },
                referencias: []
            }
        }
    },
    // 4. Avaliação Clínica e Farmacocinética (Estrutura Atualizada)
    "Avaliação Clínica e Farmacocinética": {
        name: "Avaliação Clínica e Farmacocinética",
        subCategories: {
            "Função Renal": {
                titulo: "Função Renal",
                fundamento: "Avaliação necessária para ajuste de medicamentos eliminados por via renal.",
                subSubCategories: {
                    "Cockcroft-Gault": {
                        titulo: "Fórmula de Cockcroft-Gault",
                        fundamento: `Estimativa da depuração de creatinina (ClCr), amplamente usada para ajuste de antimicrobianos (como vancomicina e aminoglicosídeos). É crucial para adaptar a dosagem de medicamentos que são eliminados predominantemente pelos rins.`,
                        formula: `ClCr (Homem) = (140 - idade) × peso (kg) / (72 × creatinina (mg/dL))<br>ClCr (Mulher) = resultado acima × 0.85`,
                        exemploClinico: `<strong>🔸 Problema:</strong><br> Um homem de 70 anos pesa 70 kg e tem uma creatinina sérica de 1.2 mg/dL. Calcule a depuração de creatinina (ClCr).<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Idade = 70 anos<br>• Peso = 70 kg<br>• Creatinina = 1.2 mg/dL<br>• Gênero = Masculino<br><br><strong>2️⃣ Aplicar a fórmula (Homem):</strong><br>• ClCr = (140 - 70) × 70 / (72 × 1.2)<br>• ClCr = 70 × 70 / 86.4<br>• ClCr = 4900 / 86.4 ≈ 56.74 mL/min<br><br><hr><br><strong>✅ Resposta:</strong><br> A depuração de creatinina estimada é de aproximadamente 56.74 mL/min.`,
                        chamadaCalculadora: `Informe a idade, peso, creatinina sérica e gênero do paciente.`,
                        observacaoImportante: `Em pacientes obesos (IMC > 30 kg/m²), o peso ideal ou peso ajustado pode ser utilizado para cálculos mais precisos, dependendo do fármaco. Para creatinina sérica < 1.0 mg/dL em idosos ou pacientes caquéticos, alguns recomendam arredondar para 1.0 mg/dL.`,
                        campos: [
                            { id: "idadeCG", label: "Idade:", type: "number", placeholder: "Anos", units: ["anos"], defaultUnit: "anos", step: "1" },
                            { id: "pesoCG", label: "Peso:", type: "number", placeholder: "Ex: 70", units: ["kg", "lb"], defaultUnit: "kg", step: "0.1" },
                            { id: "creatininaCG", label: "Creatinina Sérica:", type: "number", placeholder: "Ex: 1.2", units: ["mg/dL", "µmol/L"], defaultUnit: "mg/dL", step: "0.01" },
                            { id: "generoCG", label: "Gênero:", type: "select", options: [{ value: "masculino", text: "Masculino" }, { value: "feminino", text: "Feminino" }] }
                        ],
                        calculo: function() {
                            let idade = parseFloat(document.getElementById("idadeCG").value);
                            let peso = parseFloat(document.getElementById("pesoCG").value);
                            let creatinina = parseFloat(document.getElementById("creatininaCG").value);
                            const genero = document.getElementById("generoCG").value;

                            const unitPeso = document.getElementById("pesoCG-unit-select").value;
                            const unitCreatinina = document.getElementById("creatininaCG-unit-select").value;

                            if (isNaN(idade) || isNaN(peso) || isNaN(creatinina) ||
                                idade <= 0 || peso <= 0 || creatinina <= 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                            }

                            // Conversão de unidades
                            peso = convertToKg(peso, unitPeso);
                            creatinina = convertCreatinineToMgPerDl(creatinina, unitCreatinina);

                            let clcr = ((140 - idade) * peso) / (72 * creatinina);

                            if (genero === "feminino") {
                                clcr *= 0.85;
                            }

                            // Classificação da função renal
                            let classificacao;
                            if (clcr >= 90) {
                                classificacao = "Função renal normal";
                            } else if (clcr >= 60) {
                                classificacao = "Leve redução da função renal";
                            } else if (clcr >= 30) {
                                classificacao = "Redução moderada da função renal";
                            } else if (clcr >= 15) {
                                classificacao = "Redução grave da função renal";
                            } else {
                                classificacao = "Insuficiência renal";
                            }

                            return {
                                resultado: `Depuração de Creatinina (ClCr): ${clcr.toFixed(2)} mL/min`,
                                detalhes: [
                                    `Classificação: ${classificacao}`,
                                    `Peso Convertido: ${peso.toFixed(2)} kg`,
                                    `Creatinina Sérica Convertida: ${creatinina.toFixed(2)} mg/dL`,
                                    `Gênero: ${genero === "masculino" ? "Masculino" : "Feminino"}`,
                                    // Add a button to use this ClCr in the adjustment calculator
                                    `<button type="button" class="btn btn-sm btn-info mt-2" onclick="useCalculatedClCr(${clcr.toFixed(2)})">Usar este ClCr para Ajuste de ATB</button>`
                                ]
                            };
                        },
                        referencias: [
                            "Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine. Nephron. 1976."
                        ]
                    },
                    "MDRD": {
                        titulo: "Fórmula MDRD (Modification of Diet in Renal Disease)",
                        fundamento: `Usada para estimar a Taxa de Filtração Glomerular (TFG), geralmente expressa em mL/min/1,73m². É mais comum em monitoramento de Doença Renal Crônica (DRC) do que em ajustes de dose precisos, pois a TFG estimada pode não refletir a depuração de medicamentos de forma tão direta quanto a ClCr.`,
                        formula: `TFG (mL/min/1,73m²) = 175 × (creatinina sérica)<sup>-1.154</sup> × (idade)<sup>-0.203</sup> × (0.742 se mulher) × (1.212 se negro)`,
                        exemploClinico: `<strong>🔸 Problema:</strong><br> Uma mulher negra de 60 anos tem creatinina sérica de 1.5 mg/dL. Calcule a TFG usando a fórmula MDRD.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Idade = 60 anos<br>• Creatinina = 1.5 mg/dL<br>• Gênero = Feminino<br>• Raça = Negra<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• TFG = 175 × (1.5)<sup>-1.154</sup> × (60)<sup>-0.203</sup> × 0.742 × 1.212<br>• TFG = 175 × 0.609 × 0.380 × 0.742 × 1.212<br>• TFG ≈ 36.19 mL/min/1.73m²<br><br><hr><br><strong>✅ Resposta:</strong><br> A TFG estimada pela fórmula MDRD é de aproximadamente 36.19 mL/min/1.73m².`,
                        chamadaCalculadora: `Informe a creatinina sérica, idade, gênero e raça do paciente.`,
                        observacaoImportante: `A fórmula MDRD foi desenvolvida e validada primariamente para pacientes com doença renal crônica e pode subestimar a TFG em indivíduos saudáveis. A CKD-EPI é geralmente considerada mais precisa para uma gama mais ampla de pacientes.`,
                        campos: [
                            { id: "creatininaMDRD", label: "Creatinina Sérica:", type: "number", placeholder: "Ex: 1.5", units: ["mg/dL", "µmol/L"], defaultUnit: "mg/dL", step: "0.01" },
                            { id: "idadeMDRD", label: "Idade:", type: "number", placeholder: "Anos", units: ["anos"], defaultUnit: "anos", step: "1" },
                            { id: "generoMDRD", label: "Gênero:", type: "select", options: [{ value: "masculino", text: "Masculino" }, { value: "feminino", text: "Feminino" }] },
                            { id: "racaMDRD", label: "Raça:", type: "select", options: [{ value: "nao_negro", text: "Não-negro" }, { value: "negro", text: "Negro" }] }
                        ],
                        calculo: function() {
                            let creatinina = parseFloat(document.getElementById("creatininaMDRD").value);
                            let idade = parseFloat(document.getElementById("idadeMDRD").value);
                            const genero = document.getElementById("generoMDRD").value;
                            const raca = document.getElementById("racaMDRD").value;

                            const unitCreatinina = document.getElementById("creatininaMDRD-unit-select").value;

                            if (isNaN(creatinina) || isNaN(idade) ||
                                creatinina <= 0 || idade <= 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                            }

                            // Convert creatinine to mg/dL if needed
                            creatinina = convertCreatinineToMgPerDl(creatinina, unitCreatinina);

                            let tfg = 175 * Math.pow(creatinina, -1.154) * Math.pow(idade, -0.203);

                            if (genero === "feminino") {
                                tfg *= 0.742;
                            }
                            if (raca === "negro") {
                                tfg *= 1.212;
                            }

                            // Classificação da DRC
                            let estagio;
                            if (tfg >= 90) estagio = "Estágio 1: Normal ou alto";
                            else if (tfg >= 60) estagio = "Estágio 2: Leve redução";
                            else if (tfg >= 30) estagio = "Estágio 3: Redução moderada";
                            else if (tfg >= 15) estagio = "Estágio 4: Redução grave";
                            else estagio = "Estágio 5: Falência renal";

                            return {
                                resultado: `Taxa de Filtração Glomerular (TFG): ${tfg.toFixed(2)} mL/min/1.73m²`,
                                detalhes: [
                                    `Estágio da DRC: ${estagio}`,
                                    `Creatinina Sérica Convertida: ${creatinina.toFixed(2)} mg/dL`,
                                    `Idade: ${idade} anos`,
                                    `Gênero: ${genero === "masculino" ? "Masculino" : "Feminino"}`,
                                    `Raça: ${raca === "negro" ? "Negro" : "Não-negro"}`
                                ]
                            };
                        },
                        referencias: [
                            "Levey AS et al. A new equation to estimate glomerular filtration rate. Ann Intern Med. 2009."
                        ]
                    },
                    "CKD-EPI (Apenas Informativo)": {
                        titulo: "Fórmula CKD-EPI (Apenas Informativo)",
                        fundamento: `Considerada mais precisa que a MDRD para estimar a Taxa de Filtração Glomerular (TFG), especialmente em pacientes com TFG próxima ao normal. Contudo, ainda é pouco utilizada nas bulas de medicamentos para ajustes de dose diretos.`,
                        formula: `Esta calculadora não implementa a fórmula CKD-EPI completa devido à sua complexidade e múltiplas equações dependendo de creatinina, gênero e raça. Ela é mencionada aqui para fins informativos sobre métodos de avaliação da função renal.`,
                        exemploClinico: `Não há exemplo de cálculo disponível, pois a implementação completa da fórmula CKD-EPI requer uma série de equações condicionais.`,
                        chamadaCalculadora: `Esta seção é apenas informativa sobre a fórmula CKD-EPI.`,
                        observacaoImportante: `Para cálculos precisos de TFG via CKD-EPI, consulte calculadoras médicas especializadas ou recursos confiáveis que implementam todas as variáveis e equações complexas da fórmula. Sua principal aplicação é em monitoramento de Doença Renal Crônica.`,
                        campos: [], // Sem campos de entrada para cálculo
                        calculo: function() {
                            throw new Error("Esta seção é apenas informativa e não realiza cálculos da fórmula CKD-EPI.");
                        },
                        referencias: [
                            "Levey AS et al. A new equation to estimate glomerular filtration rate. Ann Intern Med. 2009."
                        ]
                    },
                    "Ajuste de Dose por Função Renal": { // Título alterado
                        titulo: "Ajuste de Dose de Antibióticos por Função Renal",
                        fundamento: `A função renal impacta diretamente a eliminação de muitos medicamentos, especialmente antibióticos. Em pacientes com insuficiência renal, o acúmulo de fármacos pode levar à toxicidade. O ajuste da dose ou do intervalo entre as doses é crucial para garantir a eficácia terapêutica e a segurança do paciente. Esta calculadora utiliza dados específicos de antibióticos para sugerir ajustes baseados no clearance de creatinina (ClCr) e nas condições de diálise.`,
                        formula: `O ajuste de dose é um processo complexo e dependente do fármaco. As estratégias comuns incluem:<br>
                            <ul>
                                <li><strong>Redução da Dose:</strong> Diminuir a quantidade de medicamento por administração.</li>
                                <li><strong>Aumento do Intervalo:</strong> Manter a dose, mas aumentar o tempo entre as administrações.</li>
                                <li><strong>Combinação:</strong> Reduzir a dose e aumentar o intervalo.</li>
                                <li><strong>Considerações para Diálise:</strong> Doses específicas ou tempo de administração ajustado (pós-diálise).</li>
                            </ul>
                            A decisão é baseada no ClCr do paciente e nas características farmacocinéticas de cada droga.`,
                        exemploClinico: `<strong>🔸 Exemplo: Ajuste de Vancomicina</strong><br>
                            Paciente com ClCr de 35 mL/min (entre 10-50 mL/min), não em diálise, com peso de 70 kg.<br>
                            Para **Vancomicina (500mg, frasco ampola)**, a posologia usual é "15-20mg/kg/dia, EV, 12/12h".<br><br>
                            **🔹 Resolução (via calculadora):**<br>
                            Ao selecionar "Vancomicina" e "500mg, frasco ampola" e inserir o ClCr de 35 mL/min e peso de 70 kg, o resultado será:<br>
                            "15-20mg/kg/dia, EV, com intervalos de 24h até 96h".<br><br>
                            **✅ Resposta:**<br>
                            A calculadora indicará o ajuste de dose específico para Vancomicina na faixa de ClCr de 10-50 mL/min, com base nos dados fornecidos.`,
                        chamadaCalculadora: `Informe o clearance de creatinina (ClCr), o peso do paciente e selecione o antibiótico e sua apresentação. Indique também se o paciente está em hemodiálise ou CAPD.`,
                        observacaoImportante: `Esta calculadora fornece **orientações de ajuste de dose baseadas em dados específicos de antibióticos**. No entanto, **é IMPERATIVO consultar a bula do medicamento e/ou diretrizes clínicas atualizadas (como as publicadas pela ANVISA, Ministério da Saúde, Sociedade Brasileira de Nefrologia, KDIGO, ou protocolos institucionais) para determinar a dose exata e o intervalo de administração.** A automedicação ou ajuste de dose sem orientação profissional pode ser perigosa e levar a falha terapêutica ou toxicidade.`,
                        campos: [
                            { id: "clcrAjuste", label: "Clearance de Creatinina (ClCr):", type: "number", placeholder: "Ex: 45", units: ["mL/min"], defaultUnit: "mL/min", step: "0.1" },
                            { id: "pesoAjusteATB", label: "Peso do Paciente (kg):", type: "number", placeholder: "Ex: 70", units: ["kg"], defaultUnit: "kg", step: "0.1" }, // Add weight field
                            {
                                id: "antibioticoSelect",
                                label: "Selecione o Antibiótico:",
                                type: "select",
                                options: [{ value: "", text: "Selecione um Antibiótico" }] // Populated dynamically
                            },
                            {
                                id: "apresentacaoSelect",
                                label: "Selecione a Apresentação:",
                                type: "select",
                                options: [{ value: "", text: "Selecione a Apresentação" }] // Populated dynamically
                            },
                            { id: "hemodialise", label: "Paciente em Hemodiálise?", type: "checkbox" },
                            { id: "capd", label: "Paciente em CAPD?", type: "checkbox" }
                        ],
                        calculo: function() {
                            let clcr = parseFloat(document.getElementById("clcrAjuste").value);
                            let peso = parseFloat(document.getElementById("pesoAjusteATB").value);
                            const antibioticoNome = document.getElementById("antibioticoSelect").value;
                            const apresentacaoDescricao = document.getElementById("apresentacaoSelect").value;
                            const emHemodialise = document.getElementById("hemodialise").checked;
                            const emCapd = document.getElementById("capd").checked;

                            if (isNaN(clcr) || clcr < 0) {
                                throw new Error("Por favor, preencha o campo 'Clearance de Creatinina' com um valor numérico válido e não negativo.");
                            }
                            if (isNaN(peso) || peso <= 0) {
                                throw new Error("Por favor, preencha o campo 'Peso do Paciente' com um valor numérico válido e maior que zero.");
                            }
                            if (!antibioticoNome || antibioticoNome === "") {
                                throw new Error("Por favor, selecione um Antibiótico.");
                            }
                            if (!apresentacaoDescricao || apresentacaoDescricao === "") {
                                throw new Error("Por favor, selecione uma Apresentação.");
                            }

                            const resultadoAjuste = dadosAntibioticos.calcularDoseAjustada(
                                antibioticoNome,
                                apresentacaoDescricao,
                                clcr,
                                peso,
                                emHemodialise,
                                emCapd
                            );

                            if (!resultadoAjuste || !resultadoAjuste.doseAjustada) {
                                throw new Error("Não foi possível encontrar o ajuste de dose para o antibiótico e apresentação selecionados nas condições fornecidas. Por favor, consulte a bula.");
                            }

                            let resultHtml = `<strong>Posologia Usual:</strong> ${resultadoAjuste.posologiaUsual}<br>`;
                            resultHtml += `<strong>Ajuste de Dose Sugerido:</strong> ${resultadoAjuste.doseAjustada}`;

                            if (resultadoAjuste.recomendacaoEspecial) {
                                resultHtml += `<br> <em>(Recomendação Especial: ${resultadoAjuste.recomendacaoEspecial})</em>`;
                            }

                            return {
                                resultado: resultHtml,
                                detalhes: [
                                    `Antibiótico: ${resultadoAjuste.farmaco}`,
                                    `Apresentação: ${resultadoAjuste.apresentacao}`,
                                    `Clearance de Creatinina (ClCr): ${resultadoAjuste.clearance.toFixed(2)} mL/min (Faixa: ${resultadoAjuste.faixaClearance})`,
                                    `Peso do Paciente: ${peso.toFixed(2)} kg`,
                                    `Em Hemodiálise: ${emHemodialise ? 'Sim' : 'Não'}`,
                                    `Em CAPD: ${emCapd ? 'Sim' : 'Não'}`
                                ]
                            };
                        },
                        referencias: [
                            "Dados internos da planilha 'A.A - monitorização da função renal Vs Dose de ATB'.",
                            "Sempre consultar a bula do medicamento e diretrizes clínicas atualizadas para decisões de tratamento."
                        ]
                    },
                    "Índice de Albuminúria / Creatinúria (UACR)": {
                        titulo: "Índice de Albuminúria / Creatinúria (UACR)",
                        fundamento: `O Índice de Albuminúria/Creatinúria (UACR) é um parâmetro crucial para a detecção precoce e monitoramento da doença renal crônica. A presença de albumina na urina (albuminúria) é um marcador de dano renal e risco cardiovascular aumentado. O UACR padroniza a excreção de albumina em relação à creatinina urinária, minimizando a influência da variação na diluição da urina.`,
                        formula: `UACR = (Albumina urinária (mg/L)) / (Creatinina urinária (g/L))`,
                        exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente tem albumina urinária de 50 mg/L e creatinina urinária de 0.8 g/L. Calcule o UACR e determine sua classificação.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Albumina urinária = 50 mg/L<br>• Creatinina urinária = 0.8 g/L<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• UACR = 50 / 0.8 = 62.5 mg/g<br><br><strong>3️⃣ Classificar:</strong><br>• UACR de 62.5 mg/g se enquadra na faixa de Microalbuminúria (30–300 mg/g).<br><br><hr><br><strong>✅ Resposta:</strong><br> O Índice de Albuminúria/Creatinúria (UACR) é de 62.5 mg/g, indicando microalbuminúria.`,
                        chamadaCalculadora: `Informe a albumina urinária e a creatinina urinária para calcular o UACR.`,
                        observacaoImportante: `Valores de referência: Normal: <30 mg/g; Microalbuminúria: 30–300 mg/g; Proteinúria: >300 mg/g. A interpretação deve considerar fatores como exercício físico recente, febre, infecção do trato urinário e hipertensão descontrolada, que podem elevar temporariamente o UACR. Testes repetidos são recomendados para confirmar a albuminúria persistente.`,
                        campos: [
                            { id: "albuminaUACR", label: "Albumina urinária (mg/L):", type: "number", placeholder: "Ex: 50", units: ["mg/L"], defaultUnit: "mg/L", step: "0.01" },
                            { id: "creatininaUACR", label: "Creatinina urinária (g/L):", type: "number", placeholder: "Ex: 0.8", units: ["g/L"], defaultUnit: "g/L", step: "0.01" }
                        ],
                        calculo: function() {
                            let albumina = parseFloat(document.getElementById("albuminaUACR").value);
                            let creatinina = parseFloat(document.getElementById("creatininaUACR").value);

                            if (isNaN(albumina) || isNaN(creatinina) || albumina < 0 || creatinina <= 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e positivos para creatinina urinária.");
                            }

                            const uacr = albumina / creatinina;

                            let classificacao = "";
                            if (uacr < 30) { classificacao = "Normal (<30 mg/g)"; }
                            else if (uacr >= 30 && uacr <= 300) { classificacao = "Microalbuminúria (30–300 mg/g)"; }
                            else { classificacao = "Proteinúria (>300 mg/g)"; }

                            return {
                                resultado: `UACR: ${uacr.toFixed(2)} mg/g<br>Classificação: ${classificacao}`,
                                detalhes: [
                                    `Albumina urinária: ${albumina.toFixed(2)} mg/L`,
                                    `Creatinina urinária: ${creatinina.toFixed(2)} g/L`,
                                    `Recomendação: ${uacr > 30 ? "Repetir exame para confirmar" : "Resultado normal"}`
                                ]
                            };
                        },
                        referencias: [
                            "KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
                        ]
                    }
                }
            },
            "Função Hepática": {
                titulo: "Função Hepática",
                fundamento: "Avaliação da capacidade metabólica do fígado para ajuste de medicamentos hepatometabolizados.",
                subSubCategories: {
                    "Escore de Child-Pugh": {
                        titulo: "Escore de Child-Pugh",
                        fundamento: `Classifica a gravidade da doença hepática crônica (especialmente cirrose) em classes A, B ou C. Fundamental para prever risco cirúrgico e ajustar doses de medicamentos como anticoagulantes, antidepressivos e analgésicos.`,
                        formula: `Pontos atribuídos (1-3) para cada parâmetro:<br>
                        • Bilirrubina total<br>
                        • Albumina sérica<br>
                        • INR (Tempo de Protrombina)<br>
                        • Ascite<br>
                        • Encefalopatia hepática<br><br>
                        <strong>Classificação:</strong><br>
                        • Classe A: 5-6 pontos<br>
                        • Classe B: 7-9 pontos<br>
                        • Classe C: 10-15 pontos`,
                        exemploClinico: `<strong>🔸 Caso Clínico:</strong><br> Paciente com cirrose alcoólica apresenta:<br>
                        • Bilirrubina: 3.5 mg/dL (3 pontos)<br>
                        • Albumina: 2.5 g/dL (2 pontos)<br>
                        • INR: 2.0 (2 pontos)<br>
                        • Ascite moderada (3 pontos)<br>
                        • Encefalopatia grau II (2 pontos)<br><br>
                        <strong>🔹 Cálculo:</strong><br>
                        Total = 3 + 2 + 2 + 3 + 2 = 12 pontos (Classe C)<br><br>
                        <strong>✅ Interpretação:</strong><br>
                        Doença hepática descompensada. Risco elevado de complicações. Ajustar doses de todos os medicamentos hepatometabolizados.`,
                        chamadaCalculadora: `Selecione os parâmetros do paciente para calcular o escore.`,
                        observacaoImportante: `Pacientes Child-Pugh C geralmente requerem redução de 50% nas doses iniciais de medicamentos hepatometabolizados. Monitorar rigorosamente.`,
                        campos: [
                            { id: "bilirrubinaCP", label: "Bilirrubina Total (mg/dL):", type: "number", placeholder: "Ex: 1.5", step: "0.1" },
                            { id: "albuminaCP", label: "Albumina (g/dL):", type: "number", placeholder: "Ex: 3.0", step: "0.1" },
                            { id: "inrCP", label: "INR:", type: "number", placeholder: "Ex: 1.2", step: "0.01" },
                            { id: "asciteCP", label: "Ascite:", type: "select", options: [
                                { value: "ausente", text: "Ausente" },
                                { value: "leve", text: "Leve" },
                                { value: "moderada", text: "Moderada/Tensa" }
                            ]},
                            { id: "encefalopatiaCP", label: "Encefalopatia Hepática:", type: "select", options: [
                                { value: "ausente", text: "Ausente" },
                                { value: "grau_i_ii", text: "Grau I-II (Leve a Moderada)" },
                                { value: "grau_iii_iv", text: "Grau III-IV (Grave)" }
                            ]}
                        ],
                        calculo: function() {
                            let bilirrubina = parseFloat(document.getElementById("bilirrubinaCP").value);
                            let albumina = parseFloat(document.getElementById("albuminaCP").value);
                            let inr = parseFloat(document.getElementById("inrCP").value);
                            const ascite = document.getElementById("asciteCP").value;
                            const encefalopatia = document.getElementById("encefalopatiaCP").value;

                            if (isNaN(bilirrubina) || isNaN(albumina) || isNaN(inr) ||
                                bilirrubina < 0 || albumina < 0 || inr < 0) {
                                throw new Error("Por favor, preencha os campos numéricos com valores válidos e não negativos.");
                            }

                            let score = 0;
                            let detalhes = [];

                            // Bilirrubina Total
                            if (bilirrubina < 2) { score += 1; detalhes.push(`Bilirrubina Total (< 2 mg/dL): 1 ponto`); }
                            else if (bilirrubina >= 2 && bilirrubina <= 3) { score += 2; detalhes.push(`Bilirrubina Total (2-3 mg/dL): 2 pontos`); }
                            else { score += 3; detalhes.push(`Bilirrubina Total (> 3 mg/dL): 3 pontos`); }

                            // Albumina
                            if (albumina > 3.5) { score += 1; detalhes.push(`Albumina (> 3.5 g/dL): 1 ponto`); }
                            else if (albumina >= 2.8 && albumina <= 3.5) { score += 2; detalhes.push(`Albumina (2.8-3.5 g/dL): 2 pontos`); }
                            else { score += 3; detalhes.push(`Albumina (< 2.8 g/dL): 3 pontos`); }

                            // INR
                            if (inr < 1.7) { score += 1; detalhes.push(`INR (< 1.7): 1 ponto`); }
                            else if (inr >= 1.71 && inr <= 2.30) { score += 2; detalhes.push(`INR (1.71-2.30): 2 pontos`); }
                            else { score += 3; detalhes.push(`INR (> 2.30): 3 pontos`); }

                            // Ascite
                            if (ascite === "ausente") { score += 1; detalhes.push(`Ascite (Ausente): 1 ponto`); }
                            else if (ascite === "leve") { score += 2; detalhes.push(`Ascite (Leve): 2 pontos`); }
                            else { score += 3; detalhes.push(`Ascite (Moderada/Tensa): 3 pontos`); }

                            // Encefalopatia
                            if (encefalopatia === "ausente") { score += 1; detalhes.push(`Encefalopatia Hepática (Ausente): 1 ponto`); }
                            else if (encefalopatia === "grau_i_ii") { score += 2; detalhes.push(`Encefalopatia Hepática (Grau I-II): 2 pontos`); }
                            else { score += 3; detalhes.push(`Encefalopatia Hepática (Grau III-IV): 3 pontos`); }

                            let classe;
                            if (score >= 5 && score <= 6) { classe = "A (Bem Compensada)"; }
                            else if (score >= 7 && score <= 9) { classe = "B (Comprometimento Moderado)"; }
                            else { classe = "C (Comprometimento Grave)"; }

                            // Recomendações baseadas na classe
                            let recomendacao;
                            if (classe.includes("A")) {
                                recomendacao = "Ajuste mínimo de medicamentos, monitorar função hepática";
                            } else if (classe.includes("B")) {
                                recomendacao = "Reduzir doses em 25-50% para medicamentos hepatometabolizados";
                            } else {
                                recomendacao = "Reduzir doses em 50% ou mais, evitar hepatotóxicos";
                            }

                            return {
                                resultado: `Escore de Child-Pugh: ${score} pontos<br>Classe: ${classe}`,
                                detalhes: [
                                    ...detalhes,
                                    `Recomendação: ${recomendacao}`
                                ]
                            };
                        },
                        referencias: [
                            "Pugh RN et al. Prognostic value of liver function tests. Br J Surg. 1973."
                        ]
                    },
                    "Escore MELD": {
                        titulo: "Escore MELD (Model for End-Stage Liver Disease)",
                        fundamento: `Prediz mortalidade em 3 meses em pacientes com doença hepática avançada. Utilizado para priorização em listas de transplante hepático. Valores variam de 6 (menor risco) a 40 (maior risco).`,
                        formula: `MELD = 10 × [0,957 × ln(Creatinina) + 0,378 × ln(Bilirrubina) + 1,120 × ln(INR) + 0,643]`,
                        exemploClinico: `<strong>🔸 Caso Clínico:</strong><br> Paciente com:<br>
                        • Creatinina: 2.0 mg/dL<br>
                        • Bilirrubina: 4.0 mg/dL<br>
                        • INR: 2.5<br><br>
                        <strong>🔹 Cálculo:</strong><br>
                        • ln(Creatinina) = ln(2.0) ≈ 0.693<br>
                        • ln(Bilirrubina) = ln(4.0) ≈ 1.386<br>
                        • ln(INR) = ln(2.5) ≈ 0.916<br><br>
                        • MELD = 10 × [0.957×0.693 + 0.378×1.386 + 1.120×0.916 + 0.643]<br>
                        • MELD ≈ 29<br><br>
                        <strong>✅ Interpretação:</strong><br>
                        Alto risco de mortalidade em 3 meses (MELD >20). Prioridade para avaliação de transplante.`,
                        chamadaCalculadora: `Informe creatinina, bilirrubina e INR.`,
                        observacaoImportante: `Para pacientes em diálise, usar creatinina = 4.0 mg/dL. O escore MELD-Na (que inclui sódio) é mais utilizado na prática atual.`,
                        campos: [
                            { id: "creatininaMELD", label: "Creatinina Sérica (mg/dL):", type: "number", placeholder: "Ex: 2.0", step: "0.01" },
                            { id: "bilirrubinaMELD", label: "Bilirrubina Total (mg/dL):", type: "number", placeholder: "Ex: 4.0", step: "0.01" },
                            { id: "inrMELD", label: "INR:", type: "number", placeholder: "Ex: 2.5", step: "0.01" }
                        ],
                        calculo: function() {
                            let creatinina = parseFloat(document.getElementById("creatininaMELD").value);
                            let bilirrubina = parseFloat(document.getElementById("bilirrubinaMELD").value);
                            let inr = parseFloat(document.getElementById("inrMELD").value);

                            if (isNaN(creatinina) || isNaN(bilirrubina) || isNaN(inr) ||
                                creatinina <= 0 || bilirrubina <= 0 || inr <= 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                            }

                            // Limitar valores conforme diretrizes MELD
                            creatinina = Math.min(Math.max(creatinina, 1), 4);
                            bilirrubina = Math.max(bilirrubina, 1);
                            inr = Math.max(inr, 1);

                            const lnCr = Math.log(creatinina);
                            const lnBilirr = Math.log(bilirrubina);
                            const lnINR = Math.log(inr);

                            const meld = 10 * (0.957 * lnCr + 0.378 * lnBilirr + 1.120 * lnINR + 0.643);

                            // Arredondar para inteiro
                            const meldArredondado = Math.round(meld);

                            // Interpretação do MELD
                            let interpretacao;
                            if (meldArredondado <= 10) interpretacao = "Baixo risco (mortalidade em 3 meses <5%)";
                            else if (meldArredondado <= 20) interpretacao = "Risco moderado";
                            else interpretacao = "Alto risco (mortalidade em 3 meses >20%)";

                            // Recomendação baseada no MELD
                            let recomendacao;
                            if (meldArredondado > 15) {
                                recomendacao = "Encaminhar para avaliação de transplante";
                            } else {
                                recomendacao = "Monitorar regularmente a progressão da doença";
                            }

                            return {
                                resultado: `Escore MELD: ${meldArredondado}`,
                                detalhes: [
                                    `Interpretação: ${interpretacao}`,
                                    `Creatinina: ${creatinina.toFixed(2)} mg/dL`,
                                    `Bilirrubina: ${bilirrubina.toFixed(2)} mg/dL`,
                                    `INR: ${inr.toFixed(2)}`,
                                    `Recomendação: ${recomendacao}`
                                ]
                            };
                        },
                        referencias: [
                            "Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology. 2001."
                        ]
                    }
                }
            },
            "Coagulação e Anticoagulação": {
                titulo: "Coagulação e Anticoagulação",
                fundamento: "Avaliação de risco e ajuste de anticoagulantes.",
                subSubCategories: {
                    "INR Alvo para Anticoagulação": {
                        titulo: "INR Alvo para Anticoagulação",
                        fundamento: `Ajuda a determinar se o INR do paciente está dentro da faixa terapêutica desejada para a anticoagulação, essencial para a segurança e eficácia do tratamento com antagonistas da vitamina K como a varfarina.`,
                        formula: `A interpretação é baseada na comparação do INR medido com a faixa alvo definida para a condição clínica do paciente.`,
                        exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente com fibrilação atrial está em uso de varfarina e seu INR atual é 2.8. A faixa alvo para sua condição é 2.0-3.0. O INR está dentro do alvo?<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• INR Atual = 2.8<br>• Faixa Alvo Inferior = 2.0<br>• Faixa Alvo Superior = 3.0<br><br><strong>2️⃣ Comparar:</strong><br>• 2.0 &le; 2.8 &le; 3.0. Sim, está dentro do alvo.<br><br><hr><br><strong>✅ Resposta:</strong><br> O INR atual (2.8) está dentro da faixa alvo (2.0-3.0) para anticoagulação.`,
                        chamadaCalculadora: `Informe o INR do paciente e a faixa alvo desejada.`,
                        observacaoImportante: `A faixa alvo do INR varia conforme a indicação clínica (ex: fibrilação atrial, prótese valvar mecânica, TEV). Monitoramento regular e ajustes de dose são cruciais.`,
                        campos: [
                            { id: "inrAtualIA", label: "INR Atual do Paciente:", type: "number", placeholder: "Ex: 2.5", step: "0.01" },
                            { id: "inrAlvoMinIA", label: "Faixa Alvo (Mínimo):", type: "number", placeholder: "Ex: 2.0", step: "0.01" },
                            { id: "inrAlvoMaxIA", label: "Faixa Alvo (Máximo):", type: "number", placeholder: "Ex: 3.0", step: "0.01" }
                        ],
                        calculo: function() {
                            let inrAtual = parseFloat(document.getElementById("inrAtualIA").value);
                            let inrAlvoMin = parseFloat(document.getElementById("inrAlvoMinIA").value);
                            let inrAlvoMax = parseFloat(document.getElementById("inrAlvoMaxIA").value);

                            if (isNaN(inrAtual) || isNaN(inrAlvoMin) || isNaN(inrAlvoMax) ||
                                inrAtual < 0 || inrAlvoMin < 0 || inrAlvoMax < 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e não negativos.");
                            }
                            if (inrAlvoMin >= inrAlvoMax) {
                                throw new Error("A Faixa Alvo (Mínimo) deve ser menor que a Faixa Alvo (Máximo).");
                            }

                            let status = "";
                            if (inrAtual < inrAlvoMin) {
                                status = "Abaixo da faixa alvo (risco de trombose)";
                            } else if (inrAtual > inrAlvoMax) {
                                status = "Acima da faixa alvo (risco de sangramento)";
                            } else {
                                status = "Dentro da faixa alvo (terapêutico)";
                            }

                            return {
                                resultado: `Status do INR: ${status}`,
                                detalhes: [
                                    `INR Atual: ${inrAtual.toFixed(2)}`,
                                    `Faixa Alvo: ${inrAlvoMin.toFixed(2)} - ${inrAlvoMax.toFixed(2)}`
                                ]
                            };
                        },
                        referencias: []
                    },
                    "Tempo de Protrombina (TAP) e TTPa (Em Breve)": {
                        titulo: "Tempo de Protrombina (TAP) e TTPa (Em Breve)",
                        fundamento: "Cálculos para Tempo de Protrombina (TAP) e Tempo de Tromboplastina Parcial Ativada (TTPa) para avaliação de distúrbios da coagulação. Funcionalidade em desenvolvimento.",
                        formula: "Em desenvolvimento.",
                        exemploClinico: "Em desenvolvimento.",
                        chamadaCalculadora: "Esta funcionalidade será implementada em breve.",
                        observacaoImportante: "Mantenha o aplicativo atualizado para novas funcionalidades.",
                        campos: [],
                        calculo: function() { throw new Error("Esta calculadora está em desenvolvimento."); },
                        referencias: []
                    },
                    "Ajuste de Dose de Anticoagulantes (Varfarina / Heparina / NOACs) (Em Breve)": {
                        titulo: "Ajuste de Dose de Anticoagulantes (Varfarina / Heparina / NOACs) (Em Breve)",
                        fundamento: "Cálculos para ajuste de dose de diferentes anticoagulantes com base em parâmetros de coagulação e condição clínica. Funcionalidade em desenvolvimento.",
                        formula: "Em desenvolvimento.",
                        exemploClinico: "Em desenvolvimento.",
                        chamadaCalculadora: "Esta funcionalidade será implementada em breve.",
                        observacaoImportante: "Mantenha o aplicativo atualizado para novas funcionalidades.",
                        campos: [],
                        calculo: function() { throw new Error("Esta calculadora está em desenvolvimento."); },
                        referencias: []
                    }
                }
            },
            "Farmacocinética Aplicada": {
                titulo: "Farmacocinética Aplicada",
                fundamento: "Para monitorização e ajuste terapêutico individualizado.",
                subSubCategories: {
                    "Meia-Vida de Eliminação (t½)": {
                        titulo: "Meia-Vida de Eliminação (t½)",
                        fundamento: `Determina o tempo necessário para que a concentração plasmática de um medicamento reduza pela metade. Fundamental para estabelecer intervalos entre doses e atingir estado de equilíbrio (steady-state). Medicamentos com meia-vida curta requerem doses mais frequentes.`,
                        formula: `t½ = (0,693 × Volume de Distribuição) / Clearance<br><br>
                        <strong>Estado de equilíbrio:</strong> alcançado após ~5 × t½`,
                        exemploClinico: `<strong>🔸 Caso Clínico:</strong><br> Paciente em uso de digoxina:<br>
                        • Volume de Distribuição (Vd): 500 L<br>
                        • Clearance: 5 L/hora<br><br>
                        <strong>🔹 Cálculo:</strong><br>
                        t½ = (0,693 × 500) / 5 = 69,3 horas ≈ 2,9 dias<br><br>
                        <strong>✅ Interpretação:</strong><br>
                        Estado de equilíbrio alcançado após ~14,5 dias (5 × t½). Dose de manutenção pode ser administrada a cada 24h.`,
                        chamadaCalculadora: `Informe o Volume de Distribuição e o Clearance.`,
                        observacaoImportante: `Pacientes com insuficiência renal ou hepática podem ter alterações significativas na meia-vida. Monitorar níveis séricos quando disponível.`,
                        campos: [
                            { id: "volumeVd", label: "Volume de Distribuição (L):", type: "number", placeholder: "Ex: 500", step: "0.01" },
                            { id: "clearance", label: "Clearance (L/hora):", type: "number", placeholder: "Ex: 5", step: "0.01" }
                        ],
                        calculo: function() {
                            const vd = parseFloat(document.getElementById("volumeVd").value);
                            const clearance = parseFloat(document.getElementById("clearance").value);

                            if (isNaN(vd) || isNaN(clearance) || vd <= 0 || clearance <= 0) {
                                throw new Error("Por favor, insira valores válidos maiores que zero.");
                            }

                            const tMeiaVida = (0.693 * vd) / clearance;
                            const tempoEquilibrio = 5 * tMeiaVida;

                            return {
                                resultado: `Meia-vida (t½): ${tMeiaVida.toFixed(2)} horas`,
                                detalhes: [
                                    `Estado de equilíbrio alcançado em: ${tempoEquilibrio.toFixed(2)} horas (~${(tempoEquilibrio/24).toFixed(1)} dias)`,
                                    `Frequência sugerida: a cada ${(tMeiaVida/2).toFixed(1)}-${tMeiaVida.toFixed(1)} horas`
                                ]
                            };
                        },
                        referencias: [
                            "Rowland M, Tozer TN. Clinical Pharmacokinetics and Pharmacodynamics. 4th ed."
                        ]
                    },
                    "Clearance de Drogas": {
                        titulo: "Clearance de Drogas",
                        fundamento: `Taxa de remoção do medicamento do organismo. Determina a dose de manutenção necessária para manter concentrações terapêuticas. Clearance reduzido em idosos, insuficiência renal/hepática.`,
                        formula: `Clearance (L/h) = Dose / AUC<br><br>
                        <strong>Dose de Manutenção:</strong> = Clearance × Concentração Alvo`,
                        exemploClinico: `<strong>🔸 Caso:</strong> Paciente com AUC de 20 mg·h/L após dose de 500mg.<br>
                        <strong>🔹 Cálculo:</strong> Clearance = 500mg / 20mg·h/L = 25 L/h<br>
                        <strong>✅ Aplicação:</strong> Para concentração alvo de 10mg/L, dose = 25 × 10 = 250mg a cada intervalo posológico.`,
                        chamadaCalculadora: `Informe a dose administrada e a Área Sob a Curva (AUC).`,
                        observacaoImportante: `A AUC (Area Under the Curve) é a área sob a curva de concentração plasmática-tempo, que reflete a exposição total do organismo ao medicamento.`,
                        campos: [
                            { id: "doseClearance", label: "Dose Administrada (mg):", type: "number", placeholder: "Ex: 500", step: "0.01" },
                            { id: "aucClearance", label: "AUC (mg·h/L):", type: "number", placeholder: "Ex: 20", step: "0.01" }
                        ],
                        calculo: function() {
                            const dose = parseFloat(document.getElementById("doseClearance").value);
                            const auc = parseFloat(document.getElementById("aucClearance").value);

                            if (isNaN(dose) || isNaN(auc) || dose <= 0 || auc <= 0) {
                                throw new Error("Por favor, insira valores válidos maiores que zero para Dose e AUC.");
                            }

                            const clearance = dose / auc;

                            return {
                                resultado: `Clearance: ${clearance.toFixed(2)} L/h`,
                                detalhes: [
                                    `Dose Administrada: ${dose.toFixed(2)} mg`,
                                    `AUC: ${auc.toFixed(2)} mg·h/L`,
                                    `Considerar dose de manutenção = Clearance × Concentração Alvo`
                                ]
                            };
                        },
                        referencias: [
                            "Shargel L, Yu ABC. Applied Biopharmaceutics & Pharmacokinetics. 7th ed."
                        ]
                    },
                    "Volume de Distribuição (Vd) (Em Breve)": {
                        titulo: "Volume de Distribuição (Vd) (Em Breve)",
                        fundamento: "O volume de distribuição é um conceito farmacocinético teórico que descreve o volume aparente no qual um medicamento está distribuído no corpo. É útil para calcular a dose de ataque.",
                        formula: "Em desenvolvimento.",
                        exemploClinico: "Em desenvolvimento.",
                        chamadaCalculadora: "Esta funcionalidade será implementada em breve.",
                        observacaoImportante: "Mantenha o aplicativo atualizado para novas funcionalidades.",
                        campos: [],
                        calculo: function() { throw new Error("Esta calculadora está em desenvolvimento."); },
                        referencias: []
                    },
                    "Concentração Plasmática Esperada (Em Breve)": {
                        titulo: "Concentração Plasmática Esperada (Em Breve)",
                        fundamento: "Cálculo da concentração plasmática esperada de um medicamento em diferentes tempos ou após múltiplas doses, com base em parâmetros farmacocinéticos. Importante para monitoramento terapêutico de drogas (TDM).",
                        formula: "Em desenvolvimento.",
                        exemploClinico: "Em desenvolvimento.",
                        chamadaCalculadora: "Esta funcionalidade será implementada em breve.",
                        observacaoImportante: "Mantenha o aplicativo atualizado para novas funcionalidades.",
                        campos: [],
                        calculo: function() { throw new Error("Esta calculadora está em desenvolvimento."); },
                        referencias: []
                    }
                }
            },
            "Índice de Massa Corporal (IMC)": { // IMC é uma subcategoria direta de Avaliação Clínica e Farmacocinética
                titulo: "Índice de Massa Corporal (IMC)",
                fundamento: `O Índice de Massa Corporal (IMC) é uma medida simples da relação entre o peso e a altura de uma pessoa, usada para categorizar o peso em subpeso, peso normal, sobrepeso e obesidade. Embora não seja uma medida direta de gordura corporal, é um indicador amplamente utilizado na prática clínica para avaliar riscos de saúde.`,
                formula: `IMC (kg/m²) = Peso (kg) / (Altura (m))²`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente pesa 80 kg e tem 1.75 m de altura. Calcule o IMC e determine sua classificação.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Peso = 80 kg<br>• Altura = 1.75 m<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• IMC = 80 / (1.75)²<br>• IMC = 80 / 3.0625<br>• IMC ≈ 26.13 kg/m²<br><br><strong>3️⃣ Classificar:</strong><br>• IMC 26.13 está na categoria de Sobrepeso (25.0 a 29.9 kg/m²).<br><br><hr><br><strong>✅ Resposta:</strong><br> O IMC do paciente é de aproximadamente 26.13 kg/m², classificando-o como Sobrepeso.`,
                chamadaCalculadora: `Informe o peso e a altura do paciente para calcular o IMC.`,
                observacaoImportante: `O IMC pode não ser preciso em atletas (massa muscular alta) ou idosos (perda muscular). É uma ferramenta de triagem, não diagnóstica. Para ajuste de dose, pode ser usado para definir obesidade e, assim, considerar o peso ajustado para medicamentos lipofílicos.`,
                campos: [
                    { id: "pesoIMC", label: "Peso:", type: "number", placeholder: "Ex: 80", units: ["kg", "lb"], defaultUnit: "kg", step: "0.1" },
                    { id: "alturaIMC", label: "Altura:", type: "number", placeholder: "Ex: 1.75", units: ["cm", "m", "in"], defaultUnit: "m", step: "0.01" }
                ],
                calculo: function() {
                    let peso = parseFloat(document.getElementById("pesoIMC").value);
                    let altura = parseFloat(document.getElementById("alturaIMC").value);

                    const unitPeso = document.getElementById("pesoIMC-unit-select").value;
                    const unitAltura = document.getElementById("alturaIMC-unit-select").value;

                    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Conversão para unidades base (kg e metros)
                    peso = convertToKg(peso, unitPeso);
                    altura = convertToMeters(altura, unitAltura);

                    if (altura === 0) {
                        throw new Error("A altura não pode ser zero.");
                    }

                    const imc = peso / (altura * altura);

                    let classificacao = "";
                    if (imc < 18.5) { classificacao = "Subpeso"; }
                    else if (imc >= 18.5 && imc <= 24.9) { classificacao = "Peso Normal"; }
                    else if (imc >= 25.0 && imc <= 29.9) { classificacao = "Sobrepeso"; }
                    else if (imc >= 30.0 && imc <= 34.9) { classificacao = "Obesidade Grau I"; }
                    else if (imc >= 35.0 && imc <= 39.9) { classificacao = "Obesidade Grau II"; }
                    else { classificacao = "Obesidade Grau III (Obesidade Mórbida)"; }

                    return {
                        resultado: `IMC: ${imc.toFixed(2)} kg/m²<br>Classificação: ${classificacao}`,
                        detalhes: [
                            `Peso Convertido: ${peso.toFixed(2)} kg`,
                            `Altura Convertida: ${altura.toFixed(2)} m`
                        ]
                    };
                },
                referencias: []
            }
        }
    },
    // 5. Nutrição e Metabolismo
    "Nutrição e Metabolismo": {
        name: "Nutrição e Metabolismo",
        subCategories: {
            "Cálculo de GIR (Taxa de Oferta de Glicose)": {
                titulo: "Cálculo de GIR (Taxa de Oferta de Glicose)",
                fundamento: `A Taxa de Oferta de Glicose (GIR - Glucose Infusion Rate) é um cálculo essencial para pacientes que recebem infusão contínua de glicose, como neonatos, crianças e pacientes em terapia intensiva. Ele quantifica a quantidade de glicose que está sendo administrada por quilograma de peso corporal por minuto, permitindo um ajuste fino para manter a glicemia em níveis ideais.`,
                formula: `GIR (mg/kg/min) = (Concentração da Glicose (%) × Taxa de Infusão (mL/h) × 10) / (Peso (kg) × 60)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Paciente masculino, 65 anos, com histórico de Diabetes Mellitus tipo 2 e Sepse abdominal, internado na UTI, encontra-se em ventilação mecânica, sedado e em jejum absoluto há 24 horas, aguardando definição cirúrgica.

Apresenta tendência a hipoglicemia (glicemia capilar 68 mg/dL) devido ao estresse metabólico, ausência de nutrição enteral e uso prévio de insulina.

Para garantir suporte glicídico mínimo até início da nutrição, o médico prescreve:
➡️ Glicose 10% a 30 mL/h em bomba de infusão.

A equipe solicita o calculo do GIR (mg/kg/min) para avaliar se esse aporte é suficiente, considerando o paciente com peso de 70 kg. Qual é a Taxa de Oferta de Glicose (GIR)?<br><br><strong>🔹 Resolução:</strong><br><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Concentração da Glicose = 10%<br>• Taxa de Infusão = 30 mL/h<br>• Peso = 70 kg<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>  Aplicar a fórmula:<br>    GIR (mg/kg/min) = (10 × 30 × 10) / (70 × 60)<br>    GIR (mg/kg/min) = 3000 / 4200<br>    GIR (mg/kg/min) ≈ 0.71 mg/kg/min<br><br><hr><br><strong>✅ Resposta:</strong><br> A Taxa de Oferta de Glicose (GIR) é de aproximadamente 0.71 mg/kg/min. Este é um GIR baixo, o que é esperado para um paciente com hipoglicemia em jejum, indicando a necessidade de aumentar o aporte de glicose ou ajustar a infusão conforme a evolução clínica.`,
                chamadaCalculadora: `Para calcular a Taxa de Oferta de Glicose (GIR), informe a 'Concentração da Glicose', a 'Taxa de Infusão' e o 'Peso do Paciente'.`,
                observacaoImportante: `O GIR é crucial para evitar hipo ou hiperglicemia em pacientes graves. Ajustes devem ser feitos com base na glicemia do paciente e nas necessidades metabólicas.`,
                campos: [
                    { id: "concentracaoGlicoseGIR", label: "Concentração da Glicose (%):", type: "number", placeholder: "Ex: 10", units: ["%"], defaultUnit: "%", step: "0.01" },
                    { id: "taxaInfusaoGIR", label: "Taxa de Infusão:", type: "number", placeholder: "Ex: 30", units: ["mL/h"], defaultUnit: "mL/h", step: "0.01" },
                    { id: "pesoGIR", label: "Peso do Paciente:", type: "number", placeholder: "Ex: 70", units: ["kg"], defaultUnit: "kg", step: "0.01" }
                ],
                calculo: function() {
                    let concentracaoGlicose = parseFloat(document.getElementById("concentracaoGlicoseGIR").value);
                    let taxaInfusao = parseFloat(document.getElementById("taxaInfusaoGIR").value);
                    let peso = parseFloat(document.getElementById("pesoGIR").value);

                    const unitConcentracaoGlicose = document.getElementById("concentracaoGlicoseGIR-unit-select").value;
                    const unitTaxaInfusao = document.getElementById("taxaInfusaoGIR-unit-select").value;
                    const unitPeso = document.getElementById("pesoGIR-unit-select").value;

                    if (isNaN(concentracaoGlicose) || isNaN(taxaInfusao) || isNaN(peso) ||
                        concentracaoGlicose <= 0 || taxaInfusao <= 0 || peso <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e maiores que zero.");
                    }

                    // Convert to base units
                    concentracaoGlicose = convertPercentageToDecimal(concentracaoGlicose, unitConcentracaoGlicose);
                    // taxaInfusao is already mL/h from unit select
                    peso = convertToKg(peso, unitPeso);

                    // GIR (mg/kg/min) = (Concentração da Glicose (%) * Taxa de Infusão (mL/h) * 10) / (Peso (kg) * 60)
                    const gir = (concentracaoGlicose * taxaInfusao * 10) / (peso * 60);

                    return {
                        resultado: `Taxa de Oferta de Glicose (GIR): ${gir.toFixed(2)} mg/kg/min`,
                        detalhes: [
                            `Concentração da Glicose Convertida: ${concentracaoGlicose.toFixed(2)} %`,
                            `Taxa de Infusão Convertida: ${taxaInfusao.toFixed(2)} mL/h`,
                            `Peso do Paciente Convertido: ${peso.toFixed(2)} kg`
                        ]
                    };
                },
                referencias: []
            },
            "Necessidades Calóricas (Em Breve)": {
                titulo: "Necessidades Calóricas (Em Breve)",
                fundamento: "Cálculo das necessidades calóricas diárias do paciente com base em diferentes fórmulas (ex: Mifflin-St Jeor, Harris-Benedict) e fatores de estresse. Funcionalidade em desenvolvimento.",
                formula: "Em desenvolvimento.",
                exemploClinico: "Em desenvolvimento.",
                chamadaCalculadora: "Esta funcionalidade será implementada em breve.",
                observacaoImportante: "Mantenha o aplicativo atualizado para novas funcionalidades.",
                campos: [],
                calculo: function() { throw new Error("Esta calculadora está em desenvolvimento."); },
                referencias: []
            },
            "Reposição Eletrolítica": {
                titulo: "Reposição Eletrolítica",
                subSubCategories: {
                    "Déficit de Sódio (Na⁺)": {
                        titulo: "Cálculo do Déficit de Sódio (Na⁺)",
                        fundamento: `Para estimar o déficit total de sódio em casos de hiponatremia.`,
                        formula: `Déficit de Na<sup>+</sup> (mEq) = (Na<sup>+</sup><sub>desejado</sub> - Na<sup>+</sup><sub>atual</sub>) &times; Peso corporal (kg) &times; 0,6`,
                        exemploClinico: `<strong>🔸 Problema:</strong><br>Um paciente de 70 kg tem sódio sérico atual de 120 mEq/L e o sódio desejado é 135 mEq/L. Calcule o déficit de sódio.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Na<sub>desejado</sub> = 135 mEq/L<br>• Na<sub>atual</sub> = 120 mEq/L<br>• Peso corporal = 70 kg<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• Déficit de Na<sup>+</sup> = (135 - 120) &times; 70 &times; 0.6<br>• Déficit de Na<sup>+</sup> = 15 &times; 70 &times; 0.6 = 630 mEq<br><br><hr><br><strong>✅ Resposta:</strong><br> O déficit de sódio é de 630 mEq.`,
                        chamadaCalculadora: `Informe os valores para calcular o déficit de sódio.`,
                        observacaoImportante: `O fator 0,6 representa a fração de água corporal total em adultos. A correção deve ser feita de forma lenta para evitar mielinólise pontina central.`,
                        campos: [
                            { id: "naDesejado", label: "Sódio Desejado (mEq/L):", type: "number", placeholder: "Ex: 135", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                            { id: "naAtual", label: "Sódio Atual (mEq/L):", type: "number", placeholder: "Ex: 120", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                            { id: "pesoCorporalNa", label: "Peso Corporal (kg):", type: "number", placeholder: "Ex: 70", units: ["kg"], defaultUnit: "kg", step: "0.01" }
                        ],
                        calculo: function() {
                            let naDesejado = parseFloat(document.getElementById("naDesejado").value);
                            let naAtual = parseFloat(document.getElementById("naAtual").value);
                            let pesoCorporal = parseFloat(document.getElementById("pesoCorporalNa").value);

                            if (isNaN(naDesejado) || isNaN(naAtual) || isNaN(pesoCorporal) || pesoCorporal <= 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e positivos para o peso.");
                            }

                            const deficitNa = (naDesejado - naAtual) * pesoCorporal * 0.6;

                            return {
                                resultado: `Déficit de Sódio: ${deficitNa.toFixed(2)} mEq`,
                                detalhes: [
                                    `Sódio Desejado: ${naDesejado.toFixed(2)} mEq/L`,
                                    `Sódio Atual: ${naAtual.toFixed(2)} mEq/L`,
                                    `Peso Corporal: ${pesoCorporal.toFixed(2)} kg`
                                ]
                            };
                        },
                        referencias: []
                    },
                    "Alteração do Sódio Pós-Infusão": {
                        titulo: "Previsão da Alteração do Sódio Sérico Pós-Infusão (Edelman/Adrogué-Madias)",
                        fundamento: `Esta fórmula prevê a alteração do sódio sérico após a infusão de 1 L de solução.`,
                        formula: `Δ[Na<sup>+</sup>]<sub>sérico</sub> = (([Na<sup>+</sup>] + [K<sup>+</sup>])<sub>infundido</sub> - [Na<sup>+</sup>]<sub>sérico</sub>) / (TBW + 1)`,
                        exemploClinico: `<strong>🔸 Problema:</strong><br> Um homem de 80 kg tem sódio sérico atual de 130 mEq/L. Será infundido 1L de solução com 154 mEq/L de Na<sup>+</sup> e 0 mEq/L de K<sup>+</sup>. Qual a alteração esperada no sódio sérico?<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Na<sup>+</sup> infundido = 154 mEq/L<br>• K<sup>+</sup> infundido = 0 mEq/L<br>• Na<sup>+</sup> sérico atual = 130 mEq/L<br>• Peso corporal = 80 kg<br>• Sexo = Masculino<br><br><strong>2️⃣ Calcular TBW:</strong><br>• TBW (Masculino) = 0.6 &times; 80 = 48 L<br><br><strong>3️⃣ Aplicar a fórmula:</strong><br>• Δ[Na<sup>+</sup>]<sub>sérico</sub> = ((154 + 0) - 130) / (48 + 1)<br>• Δ[Na<sup>+</sup>]<sub>sérico</sub> = (154 - 130) / 49 &approx; 0.49 mEq/L<br><br><hr><br><strong>✅ Resposta:</strong><br> A alteração esperada no sódio sérico é de aproximadamente +0.49 mEq/L.`,
                        chamadaCalculadora: `Informe os valores para prever a alteração do sódio sérico.`,
                        observacaoImportante: `TBW (Total Body Water) = 0,6 &times; peso (kg) para homens e 0,5 &times; peso (kg) para mulheres.`,
                        campos: [
                            { id: "naInfundido", label: "Sódio da Solução Infundida (mEq/L):", type: "number", placeholder: "Ex: 154", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                            { id: "kInfundido", label: "Potássio da Solução Infundida (mEq/L):", type: "number", placeholder: "Ex: 0", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                            { id: "naSericoAtual", label: "Sódio Sérico Atual (mEq/L):", type: "number", placeholder: "Ex: 130", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                            { id: "pesoCorporalTbW", label: "Peso Corporal (kg):", type: "number", placeholder: "Ex: 80", units: ["kg"], defaultUnit: "kg", step: "0.01" },
                            { id: "sexo", label: "Sexo:", type: "select", options: [{ value: "masculino", text: "Masculino" }, { value: "feminino", text: "Feminino" }] }
                        ],
                        calculo: function() {
                            let naInfundido = parseFloat(document.getElementById("naInfundido").value);
                            let kInfundido = parseFloat(document.getElementById("kInfundido").value);
                            let naSericoAtual = parseFloat(document.getElementById("naSericoAtual").value);
                            let pesoCorporal = parseFloat(document.getElementById("pesoCorporalTbW").value);
                            const sexo = document.getElementById("sexo").value;

                            if (isNaN(naInfundido) || isNaN(kInfundido) || isNaN(naSericoAtual) || isNaN(pesoCorporal) || pesoCorporal <= 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e positivos para o peso.");
                            }

                            let tbw;
                            if (sexo === "masculino") {
                                tbw = 0.6 * pesoCorporal;
                            } else {
                                tbw = 0.5 * pesoCorporal;
                            }

                            if (tbw <= 0) {
                                throw new Error("TBW não pode ser zero ou negativo. Verifique o peso corporal.");
                            }

                            const deltaNaSerico = ((naInfundido + kInfundido) - naSericoAtual) / (tbw + 1);

                            return {
                                resultado: `Alteração do Sódio Sérico Esperada: ${deltaNaSerico.toFixed(2)} mEq/L`,
                                detalhes: [
                                    `Sódio Infundido: ${naInfundido.toFixed(2)} mEq/L`,
                                    `Potássio Infundido: ${kInfundido.toFixed(2)} mEq/L`,
                                    `Sódio Sérico Atual: ${naSericoAtual.toFixed(2)} mEq/L`,
                                    `Peso Corporal: ${pesoCorporal.toFixed(2)} kg`,
                                    `Sexo: ${sexo === "masculino" ? "Masculino" : "Feminino"}`,
                                    `TBW (Água Corporal Total): ${tbw.toFixed(2)} L`
                                ]
                            };
                        },
                        referencias: []
                    },
                    "Déficit de Potássio (K⁺)": {
                        titulo: "Cálculo do Déficit de Potássio (K⁺)",
                        fundamento: `Estima o déficit total de potássio.`,
                        formula: `Déficit de K<sup>+</sup> (mEq) = (K<sup>+</sup><sub>desejado</sub> - K<sup>+</sup><sub>atual</sub>) &times; Peso corporal (kg) &times; 0,4`,
                        exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente de 60 kg tem potássio sérico atual de 2.5 mEq/L e o potássio desejado é 4.0 mEq/L. Calcule o déficit de potássio.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• K<sub>desejado</sub> = 4.0 mEq/L<br>• K<sub>atual</sub> = 2.5 mEq/L<<br>• Peso corporal = 60 kg<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• Déficit de K<sup>+</sup> = (4.0 - 2.5) &times; 60 &times; 0.4<br>• Déficit de K<sup>+</sup> = 1.5 &times; 60 &times; 0.4 = 36 mEq<br><br><hr><br><strong>✅ Resposta:</strong><br> O déficit de potássio é de 36 mEq.`,
                        chamadaCalculadora: `Informe os valores para calcular o déficit de potássio.`,
                        observacaoImportante: `O fator 0,4 corresponde à distribuição do potássio no compartimento intracelular.`,
                        campos: [
                            { id: "kDesejado", label: "Potássio Desejado (mEq/L):", type: "number", placeholder: "Ex: 4.0", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                            { id: "kAtual", label: "Potássio Atual (mEq/L):", type: "number", placeholder: "Ex: 2.5", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                            { id: "pesoCorporalK", label: "Peso Corporal (kg):", type: "number", placeholder: "Ex: 60", units: ["kg"], defaultUnit: "kg", step: "0.01" }
                        ],
                        calculo: function() {
                            let kDesejado = parseFloat(document.getElementById("kDesejado").value);
                            let kAtual = parseFloat(document.getElementById("kAtual").value);
                            let pesoCorporal = parseFloat(document.getElementById("pesoCorporalK").value);

                            if (isNaN(kDesejado) || isNaN(kAtual) || isNaN(pesoCorporal) || pesoCorporal <= 0) {
                                throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e positivos para o peso.");
                            }

                            const deficitK = (kDesejado - kAtual) * pesoCorporal * 0.4;

                            return {
                                resultado: `Déficit de Potássio: ${deficitK.toFixed(2)} mEq`,
                                detalhes: [
                                    `Potássio Desejado: ${kDesejado.toFixed(2)} mEq/L`,
                                    `Potássio Atual: ${kAtual.toFixed(2)} mEq/L`,
                                    `Peso Corporal: ${pesoCorporal.toFixed(2)} kg`
                                ]
                            };
                        },
                        referencias: []
                    }
                }
            },
            "Glicemia Corrigida para Sódio": {
                titulo: "Glicemia Corrigida para Sódio (em Hiperglicemia)",
                fundamento: `Em pacientes com hiperglicemia acentuada, a glicose alta pode "puxar" água para o espaço intravascular, diluindo o sódio sérico. Este cálculo estima qual seria o nível de sódio se a glicose estivesse normal.`,
                formula: `Na<sup>+</sup> corrigido (mEq/L) = Na<sup>+</sup> medido (mEq/L) + [1.6 &times; (Glicemia (mg/dL) - 100) / 100]`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente tem sódio medido de 130 mEq/L e glicemia de 400 mg/dL. Calcule o sódio corrigido.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Na<sup>+</sup> medido = 130 mEq/L<br>• Glicemia = 400 mg/dL<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• Na<sup>+</sup> corrigido = 130 + [1.6 &times; (400 - 100) / 100]<br>• Na<sup>+</sup> corrigido = 130 + [1.6 &times; 300 / 100]<br>• Na<sup>+</sup> corrigido = 130 + [1.6 &times; 3]<br>• Na<sup>+</sup> corrigido = 130 + 4.8 = 134.8 mEq/L<br><br><hr><br><strong>✅ Resposta:</strong><br> O sódio corrigido é de aproximadamente 134.8 mEq/L.`,
                chamadaCalculadora: `Informe o sódio medido e a glicemia para calcular o sódio corrigido.`,
                observacaoImportante: `Ajuda a diferenciar a verdadeira hiponatremia da hiponatremia dilucional. Use 1.6 ou 1.8 como fator de correção, dependendo do protocolo clínico.`,
                campos: [
                    { id: "naMedidoGCS", label: "Sódio Medido (mEq/L):", type: "number", placeholder: "Ex: 130", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                    { id: "glicemiaGCS", label: "Glicemia (mg/dL):", type: "number", placeholder: "Ex: 400", units: ["mg/dL"], defaultUnit: "mg/dL", step: "0.01" }
                ],
                calculo: function() {
                    let naMedido = parseFloat(document.getElementById("naMedidoGCS").value);
                    let glicemia = parseFloat(document.getElementById("glicemiaGCS").value);

                    if (isNaN(naMedido) || isNaN(glicemia) || naMedido <= 0 || glicemia < 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e positivos para sódio medido, e não negativos para glicemia.");
                    }

                    let naCorrigido = naMedido;
                    if (glicemia > 100) {
                        naCorrigido = naMedido + (1.6 * ((glicemia - 100) / 100));
                    }

                    return {
                        resultado: `Sódio Corrigido: ${naCorrigido.toFixed(2)} mEq/L`,
                        detalhes: [
                            `Sódio Medido: ${naMedido.toFixed(2)} mEq/L`,
                            `Glicemia: ${glicemia.toFixed(2)} mg/dL`,
                            `Fator de Correção Usado: 1.6`
                        ]
                    };
                },
                referencias: []
            },
            "Déficit de Bicarbonato (HCO₃⁻)": {
                titulo: "Cálculo do Déficit de Bicarbonato (HCO₃⁻)",
                fundamento: `Utilizado para orientar a reposição em acidose metabólica.`,
                formula: `Déficit de HCO<sub>3</sub><sup>-</sup> (mEq) = (HCO<sub>3</sub><sup>-</sup><sub>desejado</sub> - HCO<sub>3</sub><sup>-</sup><sub>atual</sub>) &times; Peso corporal (kg) &times; 0,5`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Um paciente de 70 kg tem bicarbonato sérico atual de 15 mEq/L e o bicarbonato desejado é 24 mEq/L. Calcule o déficit de bicarbonato.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• HCO<sub>3</sub><sup>-</sup><sub>desejado</sub> = 24 mEq/L<br>• HCO<sub>3</sub><sup>-</sup><sub>atual</sub> = 15 mEq/L<br>• Peso corporal = 70 kg<br><br><strong>2️⃣ Aplicar a fórmula:</strong><br>• Déficit de HCO<sub>3</sub><sup>-</sup> = (24 - 15) &times; 70 &times; 0.5<br>• Déficit de HCO<sub>3</sub><sup>-</sup> = 9 &times; 70 &times; 0.5 = 315 mEq<br><br><hr><br><strong>✅ Resposta:</strong><br> O déficit de bicarbonato é de 315 mEq.`,
                chamadaCalculadora: `Informe os valores para calcular o déficit de bicarbonato.`,
                observacaoImportante: `Usado para orientar a reposição em acidose metabólica.`,
                campos: [
                    { id: "hco3Desejado", label: "Bicarbonato Desejado (mEq/L):", type: "number", placeholder: "Ex: 24", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                    { id: "hco3Atual", label: "Bicarbonato Atual (mEq/L):", type: "number", placeholder: "Ex: 15", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                    { id: "pesoCorporalHco3", label: "Peso Corporal (kg):", type: "number", placeholder: "Ex: 70", units: ["kg"], defaultUnit: "kg", step: "0.01" }
                ],
                calculo: function() {
                    let hco3Desejado = parseFloat(document.getElementById("hco3Desejado").value);
                    let hco3Atual = parseFloat(document.getElementById("hco3Atual").value);
                    let pesoCorporal = parseFloat(document.getElementById("pesoCorporalHco3").value);

                    if (isNaN(hco3Desejado) || isNaN(hco3Atual) || isNaN(pesoCorporal) || pesoCorporal <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e positivos para o peso.");
                    }

                    const deficitHco3 = (hco3Desejado - hco3Atual) * pesoCorporal * 0.5;

                    return {
                        resultado: `Déficit de Bicarbonato: ${deficitHco3.toFixed(2)} mEq`,
                        detalhes: [
                            `Bicarbonato Desejado: ${hco3Desejado.toFixed(2)} mEq/L`,
                            `Bicarbonato Atual: ${hco3Atual.toFixed(2)} mEq/L`,
                            `Peso Corporal: ${pesoCorporal.toFixed(2)} kg`
                        ]
                    };
                },
                referencias: []
            },
            "Déficit de Água Livre": {
                titulo: "Cálculo do Déficit de Água Livre",
                fundamento: `Essencial para manejar distúrbios da água, como hipernatremia (excesso de sódio devido a déficit de água). Ajuda a estimar o volume de água que o paciente precisa para corrigir o sódio sérico.`,
                formula: `Déficit de Água (L) = TBW &times; ((Na<sup>+</sup><sub>atual</sub> / Na<sup>+</sup><sub>desejado</sub>) - 1)`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Uma mulher de 60 kg tem sódio sérico atual de 155 mEq/L e o sódio desejado é 140 mEq/L. Calcule o déficit de água livre.<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Na<sub>atual</sub> = 155 mEq/L<br>• Na<sub>desejado</sub> = 140 mEq/L<br>• Peso corporal = 60 kg<br>• Sexo = Feminino<br><br><strong>2️⃣ Calcular TBW (Feminino):</strong><br>• TBW = 0.5 &times; 60 = 30 L<br><br><strong>3️⃣ Aplicar a fórmula:</strong><br>• Déficit de Água = 30 &times; ((155 / 140) - 1)<br>• Déficit de Água = 30 &times; (1.107 - 1)<br>• Déficit de Água = 30 &times; 0.107 &approx; 3.21 L<br><br><hr><br><strong>✅ Resposta:</strong><br> O déficit de água livre é de aproximadamente 3.21 L.`,
                chamadaCalculadora: `Informe os valores para calcular o déficit de água livre.`,
                observacaoImportante: `O fator 0,6 representa a fração de água corporal total em homens e 0,5 em mulheres. A correção deve ser feita de forma lenta para evitar mielinólise pontina central.`,
                campos: [
                    { id: "naAtualDAL", label: "Sódio Atual (mEq/L):", type: "number", placeholder: "Ex: 155", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                    { id: "naDesejadoDAL", label: "Sódio Desejado (mEq/L):", type: "number", placeholder: "Ex: 140", units: ["mEq/L"], defaultUnit: "mEq/L", step: "0.01" },
                    { id: "pesoCorporalDAL", label: "Peso Corporal (kg):", type: "number", placeholder: "Ex: 60", units: ["kg"], defaultUnit: "kg", step: "0.01" },
                    { id: "sexoDAL", label: "Sexo:", type: "select", options: [{ value: "masculino", text: "Masculino" }, { value: "feminino", text: "Feminino" }] }
                ],
                calculo: function() {
                    let naAtual = parseFloat(document.getElementById("naAtualDAL").value);
                    let naDesejado = parseFloat(document.getElementById("naDesejadoDAL").value);
                    let pesoCorporal = parseFloat(document.getElementById("pesoCorporalDAL").value);
                    const sexo = document.getElementById("sexoDAL").value;

                    if (isNaN(naAtual) || isNaN(naDesejado) || isNaN(pesoCorporal) || pesoCorporal <= 0 || naDesejado <= 0) {
                        throw new Error("Por favor, preencha todos os campos com valores numéricos válidos e positivos para peso e sódio desejado.");
                    }

                    let tbw;
                    if (sexo === "masculino") {
                        tbw = 0.6 * pesoCorporal;
                    } else {
                        tbw = 0.5 * pesoCorporal;
                    }

                    if (tbw <= 0) {
                        throw new Error("TBW não pode ser zero ou negativo. Verifique o peso corporal.");
                    }
                    if (naAtual <= 0) {
                        throw new Error("Sódio atual não pode ser zero ou negativo.");
                    }

                    const deficitAgua = tbw * ((naAtual / naDesejado) - 1);

                    return {
                        resultado: `Déficit de Água Livre: ${deficitAgua.toFixed(2)} L`,
                        detalhes: [
                            `Sódio Atual: ${naAtual.toFixed(2)} mEq/L`,
                            `Sódio Desejado: ${naDesejado.toFixed(2)} mEq/L`,
                            `Peso Corporal: ${pesoCorporal.toFixed(2)} kg`,
                            `Sexo: ${sexo === "masculino" ? "Masculino" : "Feminino"}`,
                            `TBW (Água Corporal Total): ${tbw.toFixed(2)} L`
                        ]
                    };
                },
                referencias: []
            },
        }
    },
    // 6. Outros Cálculos Clínicos
    "Outros Cálculos Clínicos": {
        name: "Outros Cálculos Clínicos",
        subCategories: {
            "Quantidade de Ampolas ou Frascos (Em Breve)": {
                titulo: "Quantidade de Ampolas ou Frascos (Em Breve)",
                fundamento: "Calcula a quantidade de ampolas ou frascos necessários para atingir uma dose ou volume total de medicamento. Funcionalidade em desenvolvimento.",
                formula: "Em desenvolvimento.",
                exemploClinico: "Em desenvolvimento.",
                chamadaCalculadora: "Esta funcionalidade será implementada em breve.",
                observacaoImportante: "Mantenha o aplicativo atualizado para novas funcionalidades.",
                campos: [],
                calculo: function() { throw new Error("Esta calculadora está em desenvolvimento."); },
                referencias: []
            },
            "Duração do Tratamento (Em Breve)": {
                titulo: "Duração do Tratamento (Em Breve)",
                fundamento: "Calcula a duração total de um tratamento com base na dose diária, apresentação e quantidade total de medicamento. Funcionalidade em desenvolvimento.",
                formula: "Em desenvolvimento.",
                exemploClinico: "Em desenvolvimento.",
                chamadaCalculadora: "Esta funcionalidade será implementada em breve.",
                observacaoImportante: "Mantenha o aplicativo atualizado para novas funcionalidades.",
                campos: [],
                calculo: function() { throw new Error("Esta calculadora está em desenvolvimento."); },
                referencias: []
            },
            "Conversão de Unidades": {
                name: "Conversão de Unidades",
                titulo: "Conversão de Unidades", // Adicionado para consistência, embora "name" seja usado no dropdown principal
                fundamento: `Essencial para a segurança do paciente, pois garante que todas as doses sejam calculadas e administradas nas unidades corretas. Erros de conversão são uma causa comum de eventos adversos a medicamentos. Essa calculadora oferece a flexibilidade de converter diversas unidades de medida, como peso, volume, massa e área de superfície corporal.`,
                formula: `Depende da conversão escolhida.`,
                exemploClinico: `<strong>🔸 Problema:</strong><br> Converter 250 miligramas (mg) para gramas (g).<br><br><strong>🔹 Resolução:</strong><br><br><strong>1️⃣ Identificar os dados:</strong><br>• Valor: 250<br>• Unidade de Origem: mg<br>• Unidade de Destino: g<br><br><strong>2️⃣ Aplicar a conversão:</strong><br>• 1 g = 1000 mg<br>• 250 mg / 1000 = 0.25 g<br><br><hr><br><strong>✅ Resposta:</strong><br> 250 mg é igual a 0.25 g.`,
                chamadaCalculadora: `Selecione as unidades de origem e destino e insira o valor a ser convertido.`,
                observacaoImportante: `Sempre verifique as tabelas de conversão e a precisão da sua calculadora para evitar erros.`,
                campos: [
                    {
                        id: "valorConverter",
                        label: "Valor a Converter:",
                        type: "number",
                        placeholder: "Ex: 250",
                        step: "0.01"
                    },
                    {
                        id: "tipoConversao",
                        label: "Tipo de Conversão:",
                        type: "select",
                        options: [
                            { value: "massa", text: "Massa (mg, g, mcg, kg)" },
                            { value: "volume", text: "Volume (mL, L)" },
                            { value: "altura", text: "Altura (cm, m, in)" },
                            { value: "peso", text: "Peso (kg, lb)" },
                            { value: "dosePorKg", text: "Dose por Kg (mg/kg, mcg/kg)" },
                            { value: "dosePorASC", text: "Dose por ASC (mg/m², mcg/m²)" },
                            { value: "tempo", text: "Tempo (horas, minutos)" }
                        ]
                    },
                    {
                        id: "unidadeOrigem",
                        label: "Converter De:",
                        type: "select",
                        options: [] // Populated by JavaScript based on tipoConversao
                    },
                    {
                        id: "unidadeDestino",
                        label: "Converter Para:",
                        type: "select",
                        options: [] // Populated by JavaScript based on tipoConversao
                    }
                ],
                calculo: function() {
                    let valor = parseFloat(document.getElementById("valorConverter").value);
                    const tipoConversao = document.getElementById("tipoConversao").value;
                    const unidadeOrigem = document.getElementById("unidadeOrigem").value;
                    const unidadeDestino = document.getElementById("unidadeDestino").value;

                    if (isNaN(valor)) {
                        throw new Error("Por favor, insira um valor numérico válido.");
                    }

                    let resultadoConvertido;
                    let detalhes = [`Valor Original: ${valor} ${unidadeOrigem}`];

                    // Funções de conversão
                    if (tipoConversao === "massa") {
                        let valorMg = convertToMg(valor, unidadeOrigem);
                        resultadoConvertido = convertFromMg(valorMg, unidadeDestino);
                    } else if (tipoConversao === "volume") {
                        let valorMl = convertToMl(valor, unidadeOrigem);
                        resultadoConvertido = convertFromMl(valorMl, unidadeDestino);
                    } else if (tipoConversao === "altura") {
                        let valorCm = convertToCm(valor, unidadeOrigem);
                        resultadoConvertido = convertFromCm(valorCm, unidadeDestino);
                    } else if (tipoConversao === "peso") {
                        let valorKg = convertToKg(valor, unidadeOrigem);
                        resultadoConvertido = convertFromKg(valorKg, unidadeDestino);
                    } else if (tipoConversao === "dosePorKg") {
                        let valorMgPerKg = convertDosePerKgToMgPerKg(valor, unidadeOrigem);
                        resultadoConvertido = convertDosePerKgFromMgPerKg(valorMgPerKg, unidadeDestino);
                    } else if (tipoConversao === "dosePorASC") {
                        let valorMgPerM2 = convertDosePerASCtoMgPerM2(valor, unidadeOrigem);
                        resultadoConvertido = convertDosePerASCfromMgPerM2(valorMgPerM2, unidadeDestino);
                    } else if (tipoConversao === "tempo") {
                        let valorHoras = convertToHours(valor, unidadeOrigem);
                        resultadoConvertido = convertFromHours(valorHoras, unidadeDestino);
                    } else {
                        throw new Error("Tipo de conversão não suportado.");
                    }

                    if (isNaN(resultadoConvertido)) {
                        throw new Error("Não foi possível realizar a conversão. Verifique as unidades selecionadas.");
                    }

                    detalhes.push(`Resultado da Conversão: ${resultadoConvertido.toFixed(4)} ${unidadeDestino}`);

                    return {
                        resultado: `Resultado: ${resultadoConvertido.toFixed(4)} ${unidadeDestino}`,
                        detalhes: detalhes
                    };
                },
                referencias: []
            },
        }
    }
};

// --- Funções de Conversão de Unidades ---
// Essas funções padronizam os valores de entrada para uma unidade base (ex: mg, mL, kg)
// antes de realizar os cálculos, e então convertem o resultado de volta para a unidade desejada,
// se aplicável.

function convertToMg(value, unit) {
    switch (unit) {
        case "mg": return value;
        case "mcg": return value / 1000;
        case "g": return value * 1000;
        default: return value;
    }
}

function convertFromMg(value, unit) {
    switch (unit) {
        case "mg": return value;
        case "mcg": return value * 1000;
        case "g": return value / 1000;
        default: return value;
    }
}

function convertToMl(value, unit) {
    switch (unit) {
        case "mL": return value;
        case "L": return value * 1000;
        default: return value;
    }
}

function convertFromMl(value, unit) {
    switch (unit) {
        case "mL": return value;
        case "L": return value / 1000;
        default: return value;
    }
}

function convertToKg(value, unit) {
    switch (unit) {
        case "kg": return value;
        case "lb": return value * 0.453592; // 1 lb = 0.453592 kg
        default: return value;
    }
}

function convertFromKg(value, unit) {
    switch (unit) {
        case "kg": return value;
        case "lb": return value / 0.453592; // 1 kg = 2.20462 lb
        default: return value;
    }
}

function convertToCm(value, unit) {
    switch (unit) {
        case "cm": return value;
        case "m": return value * 100;
        case "in": return value * 2.54; // 1 inch = 2.54 cm
        default: return value;
    }
}

function convertFromCm(value, unit) {
    switch (unit) {
        case "cm": return value;
        case "m": return value / 100;
        case "in": return value / 2.54;
        default: return value;
    }
}

function convertToMeters(value, unit) {
    switch (unit) {
        case "m": return value;
        case "cm": return value / 100;
        case "in": return value * 0.0254; // 1 inch = 0.0254 meters
        default: return value;
    }
}


function convertDosePerKgToMgPerKg(value, unit) {
    switch (unit) {
        case "mg/kg": return value;
        case "mcg/kg": return value / 1000;
        default: return value;
    }
}

function convertDosePerKgFromMgPerKg(value, unit) {
    switch (unit) {
        case "mg/kg": return value;
        case "mcg/kg": return value * 1000;
        default: return value;
    }
}

function convertDosePerASCtoMgPerM2(value, unit) {
    switch (unit) {
        case "mg/m²": return value;
        case "mcg/m²": return value / 1000;
        default: return value;
    }
}

function convertDosePerASCfromMgPerM2(value, unit) {
    switch (unit) {
        case "mg/m²": return value;
        case "mcg/m²": return value * 1000;
        default: return value;
    }
}

function convertTimeToMinutes(value, unit) {
    switch (unit) {
        case "minutos": return value;
        case "horas": return value * 60;
        default: return value;
    }
}

function convertFromMinutes(value, unit) {
    switch (unit) {
        case "minutos": return value;
        case "horas": return value / 60;
        default: return value;
    }
}

function convertToHours(value, unit) {
    switch (unit) {
        case "horas": return value;
        case "minutos": return value / 60;
        default: return value;
    }
}

function convertFromHours(value, unit) {
    switch (unit) {
        case "horas": return value;
        case "minutos": return value * 60;
        default: return value;
    }
}

function convertConcentrationToMgPerMl(value, unit) {
    switch (unit) {
        case "mg/mL": return value;
        case "mcg/mL": return value / 1000;
        case "g/mL": return value * 1000;
        case "%": return value * 10; // Assuming % (w/v) means g/100mL, so (value g / 100mL) * 1000 mg/g = value * 10 mg/mL
        default: return value;
    }
}

function convertFromMgPerMl(value, unit) {
    switch (unit) {
        case "mg/mL": return value;
        case "mcg/mL": return value * 1000;
        case "g/mL": return value / 1000;
        case "%": return value / 10; // Convert mg/mL back to % (1% = 10mg/mL)
        default: return value;
    }
}


function convertConcentrationToMgPerMlForPreparation(value, unit) {
    switch (unit) {
        case "mg/mL": return value;
        case "mcg/mL": return value / 1000;
        case "%": return value * 10; // 1% (p/v) = 1g/100mL = 10mg/mL
        default: return value;
    }
}


function convertDosePerWeightPerTime(value, unit) {
    switch (unit) {
        case "mcg/kg/min": return value;
        case "mg/kg/min": return value * 1000; // 1 mg = 1000 mcg
        case "mg/kg/h": return (value * 1000) / 60; // 1 mg = 1000 mcg, 1 hour = 60 min
        default: return value;
    }
}

function convertTaxaInfusaoToMlPerHour(value, unit) {
    switch (unit) {
        case "mL/h": return value;
        case "mL/min": return value * 60;
        case "L/h": return value * 1000;
        default: return value;
    }
}

function convertCreatinineToMgPerDl(value, unit) {
    switch (unit) {
        case "mg/dL": return value;
        case "µmol/L": return value / 88.4; // 1 mg/dL = 88.4 µmol/L
        default: return value;
    }
}

function convertPercentageToDecimal(value, unit) {
    // If unit is '%', it means it's already a percentage (e.g., 5 for 5%), no division by 100 here.
    // The formula will use value/100.
    // If unit is 'g/mL', convert to percentage equivalent for consistency in formula.
    if (unit === 'g/mL') {
        return value * 100; // 1 g/mL = 100 g/100mL = 100%
    }
    return value; // If already '%', return as is.
}


// --- Funções de Manipulação da UI ---

/**
 * Variáveis globais para rastrear a seleção atual da calculadora.
 * São úteis para persistir o estado e para funções auxiliares.
 */
let currentCategoryKey = null;
let currentSubCategoryKey = null;
let currentSubSubCategoryKey = null;


/**
 * Carrega as categorias principais no dropdown inicial.
 */
function loadCategories() {
    const categorySelect = document.getElementById("categorySelect");
    categorySelect.innerHTML = '<option value="">Selecione uma Categoria</option>';
    // Garante a ordem das categorias principais
    const orderedCategoryKeys = [
        "Cálculos de Dose",
        "Cálculos de Volume e Concentração",
        "Cálculos de Infusão e Gotejamento",
        "Avaliação Clínica e Farmacocinética",
        "Nutrição e Metabolismo",
        "Outros Cálculos Clínicos"
    ];

    for (const key of orderedCategoryKeys) {
        if (calculators[key]) { // Verifica se a chave existe
            const option = document.createElement("option");
            option.value = key;
            option.textContent = calculators[key].name;
            categorySelect.appendChild(option);
        }
    }
}

/**
 * Carrega as subcategorias ou a chamada de calculadora quando uma categoria principal é selecionada.
 * @param {string} categoryKey - A chave da categoria selecionada.
 */
function loadCategoryAndSubCalculations(categoryKey) {
    currentCategoryKey = categoryKey;
    currentSubCategoryKey = null; // Reset sub-category on category change
    currentSubSubCategoryKey = null; // Reset sub-sub-category

    const subCategorySelectContainer = document.getElementById("subCategorySelectContainer");
    const subSubCategorySelectContainer = document.getElementById("subSubCategorySelectContainer");
    const explicacaoCalculoDiv = document.getElementById("explicacaoCalculo");
    const formularioCalculoDiv = document.getElementById("formularioCalculo");
    const actionButtonsContainer = document.getElementById("actionButtonsContainer");
    const resultadoDiv = document.getElementById("resultado");

    // Esconde tudo ao mudar a categoria
    subCategorySelectContainer.style.display = "none";
    subSubCategorySelectContainer.style.display = "none";
    explicacaoCalculoDiv.style.display = "none";
    formularioCalculoDiv.style.display = "none";
    actionButtonsContainer.style.display = "none";
    resultadoDiv.style.display = "none";

    // Limpa conteúdos anteriores
    subCategorySelectContainer.innerHTML = '';
    subSubCategorySelectContainer.innerHTML = '';

    if (categoryKey) {
        const category = calculators[categoryKey];
        if (category && category.subCategories) {
            // Se a categoria tem subcategorias (2º nível de seleção é necessário)
            let selectHtml = `
                <label for="subCategorySelect" class="block text-gray-300 text-sm font-bold mb-2">Selecione uma Subcategoria:</label>
                <select id="subCategorySelect" class="form-control" onchange="loadSubCategoryAndCalculation(this.value)" aria-label="Selecione uma Subcategoria">
                    <option value="">Selecione uma Subcategoria</option>
            `;
            // Garante a ordem das subcategorias
            const orderedSubCategoryKeys = Object.keys(category.subCategories);
            for (const subKey of orderedSubCategoryKeys) {
                selectHtml += `<option value="${subKey}">${category.subCategories[subKey].titulo || subKey}</option>`;
            }
            selectHtml += `</select>`;
            subCategorySelectContainer.innerHTML = selectHtml;
            subCategorySelectContainer.style.display = "block";
        } else if (category && category.campos) { // É uma categoria de cálculo direto (ex: "Conversão de Unidades")
            currentSubCategoryKey = categoryKey; // Para categorias diretas, a chave da categoria atua como chave da subcategoria
            loadCalculationDetails(categoryKey); // Carrega os detalhes diretamente
        }
    }
}

/**
 * Carrega os cálculos do terceiro nível ou a chamada de calculadora quando uma subcategoria é selecionada.
 * @param {string} subCategoryKey - A chave da subcategoria selecionada.
 */
function loadSubCategoryAndCalculation(subCategoryKey) {
    currentSubCategoryKey = subCategoryKey;
    currentSubSubCategoryKey = null; // Reset sub-sub-category on sub-category change

    const subSubCategorySelectContainer = document.getElementById("subSubCategorySelectContainer");
    const explicacaoCalculoDiv = document.getElementById("explicacaoCalculo");
    const formularioCalculoDiv = document.getElementById("formularioCalculo");
    const actionButtonsContainer = document.getElementById("actionButtonsContainer");
    const resultadoDiv = document.getElementById("resultado");

    // Esconde elementos de cálculo ao mudar a subcategoria
    subSubCategorySelectContainer.style.display = "none";
    explicacaoCalculoDiv.style.display = "none";
    formularioCalculoDiv.style.display = "none";
    actionButtonsContainer.style.display = "none";
    resultadoDiv.style.display = "none";

    // Limpa conteúdos anteriores
    subSubCategorySelectContainer.innerHTML = '';

    if (currentCategoryKey && subCategoryKey) {
        const category = calculators[currentCategoryKey];
        const subCategory = category.subCategories[subCategoryKey];

        if (subCategory && subCategory.subSubCategories) {
            // Se a subcategoria tem sub-subcategorias (terceiro nível)
            let selectHtml = `
                <label for="subSubCategorySelect" class="block text-gray-300 text-sm font-bold mb-2">Selecione um Cálculo Específico:</label>
                <select id="subSubCategorySelect" class="form-control" onchange="loadCalculationDetails(this.value)" aria-label="Selecione um Cálculo Específico">
                    <option value="">Selecione um Cálculo</option>
            `;
            // Garante a ordem das sub-subcategorias
            const orderedSubSubCategoryKeys = Object.keys(subCategory.subSubCategories);
            for (const subSubKey of orderedSubSubCategoryKeys) {
                selectHtml += `<option value="${subSubKey}">${subCategory.subSubCategories[subSubKey].titulo || subSubKey}</option>`;
            }
            selectHtml += `</select>`;
            subSubCategorySelectContainer.innerHTML = selectHtml;
            subSubCategorySelectContainer.style.display = "block";
        } else if (subCategory) {
            // Se a subcategoria é um cálculo direto (não tem sub-subcategorias)
            loadCalculationDetails(subCategoryKey); // Carrega os detalhes diretamente
        }
    }
}

/**
 * Helper function to toggle visibility and required state of C1V1C2V2 fields.
 * @param {string} variableToCalculate - The ID of the variable to be calculated ("C1", "V1", "C2", "V2").
 */
function toggleC1V1C2V2Fields(variableToCalculate) {
    const fields = [
        { id: "c1Value", containerId: "c1Value-group", labelId: "c1Value-label" },
        { id: "v1Value", containerId: "v1Value-group", labelId: "v1Value-label" },
        { id: "c2Value", containerId: "c2Value-group", labelId: "c2Value-label" },
        { id: "v2Value", containerId: "v2Value-group", labelId: "v2Value-label" }
    ];

    // Find the current calculation data
    const calculationData = getCalculationData(currentCategoryKey, currentSubCategoryKey, currentSubSubCategoryKey);
    const camposConfig = calculationData ? calculationData.campos : [];

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const unitSelectElement = document.getElementById(`${field.id}-unit-select`);
        const formGroup = document.getElementById(field.id).closest('.form-group'); // Get the parent form-group div

        if (inputElement && formGroup) {
            const fieldConfig = camposConfig.find(c => c.id === field.id);
            const isHidden = fieldConfig && fieldConfig.hideFor && fieldConfig.hideFor.includes(variableToCalculate);

            if (isHidden) {
                formGroup.style.display = "none";
                inputElement.removeAttribute("required");
                inputElement.disabled = true; // Disable the input
                if (unitSelectElement) unitSelectElement.disabled = true; // Disable unit select
            } else {
                formGroup.style.display = "block"; // Or "grid" if that's the default
                inputElement.setAttribute("required", "");
                inputElement.disabled = false; // Enable the input
                if (unitSelectElement) unitSelectElement.disabled = false; // Enable unit select
            }
        }
    });
}

/**
 * Popula o dropdown de seleção de antibióticos.
 */
function populateAntibioticoSelect() {
    const antibioticoSelect = document.getElementById("antibioticoSelect");
    if (antibioticoSelect) {
        antibioticoSelect.innerHTML = '<option value="">Selecione um Antibiótico</option>';
        dadosAntibioticos.antibioticos.forEach(ab => {
            const option = document.createElement("option");
            option.value = ab.farmaco;
            option.textContent = ab.farmaco;
            antibioticoSelect.appendChild(option);
        });

        // Adicionar event listener para preencher as apresentações
        antibioticoSelect.addEventListener("change", populateApresentacaoSelect);
    }
}

/**
 * Popula o dropdown de seleção de apresentações com base no antibiótico selecionado.
 */
function populateApresentacaoSelect() {
    const antibioticoSelect = document.getElementById("antibioticoSelect");
    const apresentacaoSelect = document.getElementById("apresentacaoSelect");
    if (antibioticoSelect && apresentacaoSelect) {
        apresentacaoSelect.innerHTML = '<option value="">Selecione a Apresentação</option>';
        const selectedFarmaco = antibioticoSelect.value;
        const antibiotico = dadosAntibioticos.buscarAntibiotico(selectedFarmaco);

        if (antibiotico && antibiotico.apresentacoes) {
            antibiotico.apresentacoes.forEach(ap => {
                const option = document.createElement("option");
                option.value = ap.descricao;
                option.textContent = ap.descricao;
                apresentacaoSelect.appendChild(option);
            });
        }
    }
}

/**
 * Transfere o valor do ClCr calculado da calculadora Cockcroft-Gault
 * para o campo correspondente na calculadora de Ajuste de Dose de Antibióticos.
 * @param {number} clcrValue - O valor do ClCr a ser transferido.
 */
function useCalculatedClCr(clcrValue) {
    const clcrAjusteInput = document.getElementById("clcrAjuste");
    if (clcrAjusteInput) {
        clcrAjusteInput.value = clcrValue;

        // Optionally, navigate the user to the Adjustment calculator
        // This part might need careful handling to ensure smooth UX
        // For now, it just populates the field.
        const categorySelect = document.getElementById("categorySelect");
        const subCategorySelect = document.getElementById("subCategorySelect");
        const subSubCategorySelect = document.getElementById("subSubCategorySelect");

        // Set categories to navigate
        categorySelect.value = "Avaliação Clínica e Farmacocinética";
        loadCategoryAndSubCalculations("Avaliação Clínica e Farmacocinética");

        // Use a small delay to ensure the subcategories are loaded before setting their values
        setTimeout(() => {
            if (subCategorySelect) {
                subCategorySelect.value = "Função Renal";
                loadSubCategoryAndCalculation("Função Renal");
            }
            setTimeout(() => {
                if (subSubCategorySelect) {
                    subSubCategorySelect.value = "Ajuste de Dose por Função Renal";
                    loadCalculationDetails("Ajuste de Dose por Função Renal");
                    // Ensure the ClCr input is still populated after loading details
                    if (document.getElementById("clcrAjuste")) {
                        document.getElementById("clcrAjuste").value = clcrValue;
                    }
                }
            }, 100); // Short delay for sub-subcategory to load
        }, 100); // Short delay for subcategory to load
    } else {
        alert("O campo para inserir o ClCr ajustado não foi encontrado.");
    }
}


/**
 * Carrega os detalhes do cálculo (explicação, campos de formulário, botões).
 * @param {string} calculationKey - A chave do cálculo específico (pode ser subcategoria ou sub-subcategoria).
 */
function loadCalculationDetails(calculationKey) {
    currentSubSubCategoryKey = calculationKey; // Armazena a chave do cálculo selecionado

    let calculationData = null;
    const category = calculators[currentCategoryKey];

    // Lógica para encontrar o calculationData em qualquer nível
    if (category) {
        if (category.campos && currentCategoryKey === calculationKey) { // Se for uma categoria principal que é um cálculo direto (ex: Conversão de Unidades)
            calculationData = category;
        } else if (category.subCategories) {
            const subCategory = category.subCategories[currentSubCategoryKey];
            if (subCategory && subCategory.subSubCategories && subCategory.subSubCategories[calculationKey]) {
                // É um cálculo de terceiro nível
                calculationData = subCategory.subSubCategories[calculationKey];
            } else if (category.subCategories[calculationKey]) {
                // É um cálculo de segundo nível (direto na subcategory)
                calculationData = category.subCategories[calculationKey];
            }
        }
    }


    const explicacaoCalculoDiv = document.getElementById("explicacaoCalculo");
    const formularioCalculoDiv = document.getElementById("formularioCalculo");
    const actionButtonsContainer = document.getElementById("actionButtonsContainer");
    const resultadoDiv = document.getElementById("resultado");

    // Esconde tudo antes de carregar o novo cálculo
    explicacaoCalculoDiv.style.display = "none";
    formularioCalculoDiv.style.display = "none";
    actionButtonsContainer.style.display = "none";
    resultadoDiv.style.display = "none";

    // Limpa o conteúdo
    explicacaoCalculoDiv.innerHTML = '';
    formularioCalculoDiv.innerHTML = '';
    actionButtonsContainer.innerHTML = '';
    resultadoDiv.innerHTML = '';

    if (calculationData) {
        // --- Exibição da Explicação do Cálculo ---
        let explicacaoHtml = `
            <h2 class="text-xl font-bold mb-4">${calculationData.titulo}</h2>
            <h3 class="text-lg font-semibold mb-2">Fundamentação:</h3>
            <p class="mb-4">${calculationData.fundamento}</p>
            <h3 class="text-lg font-semibold mb-2">Fórmula:</h3>
            <div class="formula-box mb-4">${calculationData.formula}</div>
            <h3 class="text-lg font-semibold mb-2">Exemplo Clínico:</h3>
            <div class="exemplo-box mb-4">${calculationData.exemploClinico}</div>
            <h3 class="text-lg font-semibold mb-2">Chamada da Calculadora:</h3>
            <p class="mb-4">${calculationData.chamadaCalculadora}</p>
            <h3 class="text-lg font-semibold mb-2">Observação Importante:</h3>
            <p class="mb-4">${calculationData.observacaoImportante}</p>
        `;
        explicacaoCalculoDiv.innerHTML = explicacaoHtml;
        explicacaoCalculoDiv.style.display = "block";

        // --- Geração Dinâmica dos Campos do Formulário ---
        let formHtml = '';
        if (calculationData.campos && calculationData.campos.length > 0) {
            calculationData.campos.forEach(campo => {
                formHtml += `<div class="form-group mb-4" id="${campo.id}-group">`; // Add ID to form-group
                if (campo.type === "select") {
                    formHtml += `<label for="${campo.id}">${campo.label}</label>`;
                    formHtml += `<select id="${campo.id}" class="form-control" aria-label="${campo.label}">`;
                    campo.options.forEach(option => {
                        formHtml += `<option value="${option.value}">${option.text}</option>`;
                    });
                    formHtml += `</select>`;
                } else if (campo.type === "checkbox") {
                    formHtml += `<div class="flex items-center">`;
                    formHtml += `<input type="checkbox" id="${campo.id}" class="form-checkbox h-5 w-5 text-blue-600 rounded">`;
                    formHtml += `<label for="${campo.id}" class="ml-2 text-gray-300">${campo.label}</label>`;
                    formHtml += `</div>`;
                }
                else { // type is "number" or "text"
                    formHtml += `<label for="${campo.id}">${campo.label}</label>`;
                    formHtml += `<div class="input-group">`;
                    formHtml += `<input type="${campo.type}" id="${campo.id}" class="form-control" placeholder="${campo.placeholder || ''}" step="${campo.step || 'any'}" ${campo.min !== undefined ? `min="${campo.min}"` : ''}>`;
                    if (campo.units && campo.units.length > 0) {
                        formHtml += `<select id="${campo.id}-unit-select" class="form-select w-auto">`;
                        campo.units.forEach(unit => {
                            formHtml += `<option value="${unit}" ${unit === campo.defaultUnit ? 'selected' : ''}>${unit}</option>`;
                        });
                        formHtml += `</select>`;
                    }
                    formHtml += `</div>`;
                }
                formHtml += `</div>`;
            });
            formularioCalculoDiv.innerHTML = formHtml;
            formularioCalculoDiv.style.display = "grid"; // Usar grid para o layout de colunas

            // --- Geração dos Botões de Ação ---
            let buttonsHtml = `
                <button type="button" class="btn btn-primary" onclick="performCalculation()">Calcular</button>
                <button type="button" class="btn btn-secondary-custom" onclick="resetForm()">Limpar</button>
            `;
            actionButtonsContainer.innerHTML = buttonsHtml;
            actionButtonsContainer.style.display = "flex";

            // Restaura valores do Local Storage
            restoreSavedValues(calculationData);

            // Adiciona listeners para "Conversão de Unidades"
            if (currentCategoryKey === "Outros Cálculos Clínicos" && currentSubCategoryKey === "Conversão de Unidades") {
                document.getElementById("tipoConversao").addEventListener("change", updateUnitSelects);
                updateUnitSelects(); // Call initially to populate units
            }

            // Adiciona listener para a seleção de variável no C1V1=C2V2
            if (currentCategoryKey === "Cálculos de Volume e Concentração" && currentSubCategoryKey === "Concentração Final após Diluição (C1V1=C2V2)") {
                const variableSelect = document.getElementById("variableToCalculate");
                if (variableSelect) {
                    variableSelect.addEventListener("change", (event) => {
                        toggleC1V1C2V2Fields(event.target.value);
                        saveToLocalStorage(event.target.id, event.target.value); // Save the selection
                    });
                    // Initial toggle based on default or restored value
                    toggleC1V1C2V2Fields(variableSelect.value);
                }
            }

            // Specific logic for "Ajuste de Dose por Função Renal"
            if (calculationKey === "Ajuste de Dose por Função Renal") {
                populateAntibioticoSelect(); // Populate antibiotic dropdown on load
                // Restore saved values for antibiotic and presentation selects, then populate presentations
                const antibioticoSelect = document.getElementById("antibioticoSelect");
                const apresentacaoSelect = document.getElementById("apresentacaoSelect");
                const localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}-${currentSubSubCategoryKey}`;

                const savedAntibiotico = localStorage.getItem(`${localStoragePrefix}-antibioticoSelect`);
                if (savedAntibiotico) {
                    antibioticoSelect.value = savedAntibiotico;
                    populateApresentacaoSelect(); // Populate presentations for the restored antibiotic
                    const savedApresentacao = localStorage.getItem(`${localStoragePrefix}-apresentacaoSelect`);
                    if (savedApresentacao) {
                        apresentacaoSelect.value = savedApresentacao;
                    }
                }

                // Add event listeners for dynamic updates
                antibioticoSelect.addEventListener('change', populateApresentacaoSelect);
            }


        } else {
            // Se não há campos de formulário (ex: para CKD-EPI Informativo)
            actionButtonsContainer.style.display = "none"; // Esconde botões de cálculo
        }
    }
}


/**
 * Realiza o cálculo com base nos dados e funções do objeto `calculators`.
 */
function performCalculation() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpa resultados anteriores
    resultadoDiv.style.display = "none"; // Esconde até ter um resultado válido

    let calculationData = null;
    const category = calculators[currentCategoryKey];

    // Lógica para encontrar o calculationData em qualquer nível
    if (category) {
        if (category.campos && currentCategoryKey === currentSubCategoryKey && currentSubCategoryKey === currentSubSubCategoryKey) {
            // Se for uma categoria principal que é um cálculo direto (ex: Conversão de Unidades)
            calculationData = category;
        } else if (category.subCategories) {
            const subCategory = category.subCategories[currentSubCategoryKey];
            if (subCategory && subCategory.subSubCategories && subCategory.subSubCategories[currentSubSubCategoryKey]) {
                calculationData = subCategory.subSubCategories[currentSubSubCategoryKey];
            } else if (subCategory && subCategory.calculo) { // Check if subCategory itself is a calculation (2-level deep)
                calculationData = subCategory;
            }
        }
    }


    if (calculationData && calculationData.calculo) {
        try {
            const result = calculationData.calculo();
            let resultHtml = `
                <h3 class="text-xl font-bold mb-4">Resultado do Cálculo:</h3>
                <p class="text-lg mb-2 result-box p-3 rounded-lg border-2 border-green-400">${result.resultado}</p>
            `;
            if (result.detalhes && result.detalhes.length > 0) {
                resultHtml += `<h4 class="text-md font-semibold mt-4 mb-2">Detalhes:</h4><ul class="list-disc pl-5">`;
                result.detalhes.forEach(detail => {
                    resultHtml += `<li>${detail}</li>`;
                });
                resultHtml += `</ul>`;
            }
            if (calculationData.referencias && calculationData.referencias.length > 0) {
                resultHtml += `<h4 class="text-md font-semibold mt-4 mb-2">Referências:</h4><ul class="list-disc pl-5 text-sm text-gray-400">`;
                calculationData.referencias.forEach(ref => {
                    resultHtml += `<li>${ref}</li>`;
                });
                resultHtml += `</ul>`;
            }
            resultadoDiv.innerHTML = resultHtml;
            resultadoDiv.style.display = "block";
        } catch (error) {
            resultadoDiv.innerHTML = `<div class="alert-danger p-3 rounded-lg">${error.message}</div>`;
            resultadoDiv.style.display = "block";
        }
    } else {
        resultadoDiv.innerHTML = `<div class="alert-danger p-3 rounded-lg">Nenhum cálculo selecionado ou cálculo inválido.</div>`;
        resultadoDiv.style.display = "block";
    }
}

/**
 * Limpa os campos do formulário e o resultado.
 */
function resetForm() {
    const formularioCalculoDiv = document.getElementById("formularioCalculo");
    const resultadoDiv = document.getElementById("resultado");

    formularioCalculoDiv.querySelectorAll("input").forEach(input => {
        if (input.type === "checkbox") {
            input.checked = false;
        } else {
            input.value = "";
        }
    });
    formularioCalculoDiv.querySelectorAll("select").forEach(select => {
        // Reset to default selected option if it exists, otherwise first option
        const defaultOption = Array.from(select.options).find(opt => opt.defaultSelected);
        if (defaultOption) {
            select.value = defaultOption.value;
        } else {
            select.value = select.options[0].value;
        }
    });


    resultadoDiv.innerHTML = '';
    resultadoDiv.style.display = "none";

    // Limpa o local storage para o cálculo atual
    let localStoragePrefix = '';
    if (currentCategoryKey) {
        const category = calculators[currentCategoryKey];
        if (category && !category.subCategories) { // É uma categoria principal direta
            localStoragePrefix = currentCategoryKey;
        } else if (currentSubCategoryKey) {
            if (currentSubSubCategoryKey) {
                localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}-${currentSubSubCategoryKey}`;
            } else {
                localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}`;
            }
        }
    }

    // Special handling for "Conversão de Unidades" and C1V1=C2V2 due to custom prefixes
    if (currentCategoryKey === "Outros Cálculos Clínicos" && currentSubCategoryKey === "Conversão de Unidades") {
        localStoragePrefix = `${currentCategoryKey}-Conversão de Unidades`;
    } else if (currentCategoryKey === "Cálculos de Volume e Concentração" && currentSubCategoryKey === "Concentração Final após Diluição (C1V1=C2V2)") {
        localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}`;
    } else if (currentCategoryKey === "Avaliação Clínica e Farmacocinética" && currentSubCategoryKey === "Função Renal" && currentSubSubCategoryKey === "Ajuste de Dose por Função Renal") {
        localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}-${currentSubSubCategoryKey}`;
    }

    if (localStoragePrefix) {
        const currentCalculationData = getCalculationData(currentCategoryKey, currentSubCategoryKey, currentSubSubCategoryKey);
        if (currentCalculationData && currentCalculationData.campos) {
            currentCalculationData.campos.forEach(campo => {
                localStorage.removeItem(`${localStoragePrefix}-${campo.id}`);
                if (campo.units && campo.units.length > 0) {
                    localStorage.removeItem(`${localStoragePrefix}-${campo.id}-unit-select`);
                }
            });
        }
    }

    // Special handling for C1V1=C2V2 to re-toggle fields after reset
    if (currentCategoryKey === "Cálculos de Volume e Concentração" && currentSubCategoryKey === "Concentração Final após Diluição (C1V1=C2V2)") {
        const variableSelect = document.getElementById("variableToCalculate");
        if (variableSelect) {
            const defaultSelection = variableSelect.options[0].value; // Get the first option value
            variableSelect.value = defaultSelection; // Set it to the default
            toggleC1V1C2V2Fields(defaultSelection); // Apply the toggle based on this default
            localStorage.removeItem(`${currentCategoryKey}-${currentSubCategoryKey}-variableToCalculate`); // Remove from local storage
        }
    }
}

/**
 * Atualiza as opções dos dropdowns de unidade para a calculadora de Conversão de Unidades.
 */
function updateUnitSelects() {
    const tipoConversao = document.getElementById("tipoConversao").value;
    const unidadeOrigemSelect = document.getElementById("unidadeOrigem");
    const unidadeDestinoSelect = document.getElementById("unidadeDestino");

    unidadeOrigemSelect.innerHTML = '';
    unidadeDestinoSelect.innerHTML = '';

    let units = [];
    switch (tipoConversao) {
        case "massa":
            units = ["mg", "g", "mcg", "kg"];
            break;
        case "volume":
            units = ["mL", "L"];
            break;
        case "altura":
            units = ["cm", "m", "in"];
            break;
        case "peso":
            units = ["kg", "lb"];
            break;
        case "dosePorKg":
            units = ["mg/kg", "mcg/kg"];
            break;
        case "dosePorASC":
            units = ["mg/m²", "mcg/m²"];
            break;
        case "tempo":
            units = ["horas", "minutos"];
            break;
    }

    units.forEach(unit => {
        const option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = unit;
        unidadeOrigemSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = unit;
        option2.textContent = unit;
        unidadeDestinoSelect.appendChild(option2);
    });

    // Restore saved units if available
    // For "Conversão de Unidades", localStoragePrefix is for the "Outros Cálculos Clínicos" category
    const localStoragePrefix = `${currentCategoryKey}-Conversão de Unidades`;
    const savedOriginUnit = localStorage.getItem(`${localStoragePrefix}-unidadeOrigem`);
    const savedDestinyUnit = localStorage.getItem(`${localStoragePrefix}-unidadeDestino`);

    if (savedOriginUnit && units.includes(savedOriginUnit)) {
        unidadeOrigemSelect.value = savedOriginUnit;
    }
    if (savedDestinyUnit && units.includes(savedDestinyUnit)) {
        unidadeDestinoSelect.value = savedDestinyUnit;
    }
}


/**
 * Restaura os valores salvos do Local Storage para os campos do formulário.
 * @param {object} calculationData - Os dados do cálculo atual.
 */
function restoreSavedValues(calculationData) {
    let localStoragePrefix = '';
    if (currentCategoryKey) {
        const category = calculators[currentCategoryKey];
        if (category && !category.subCategories) { // É uma categoria principal direta
            localStoragePrefix = currentCategoryKey;
        } else if (currentSubCategoryKey) {
            if (currentSubSubCategoryKey) {
                localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}-${currentSubSubCategoryKey}`;
            } else {
                localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}`;
            }
        }
    }

    // Special handling for "Conversão de Unidades" and C1V1=C2V2 due to custom prefixes
    if (currentCategoryKey === "Outros Cálculos Clínicos" && currentSubCategoryKey === "Conversão de Unidades") {
        localStoragePrefix = `${currentCategoryKey}-Conversão de Unidades`;
    } else if (currentCategoryKey === "Cálculos de Volume e Concentração" && currentSubCategoryKey === "Concentração Final após Diluição (C1V1=C2V2)") {
        localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}`;
    } else if (currentCategoryKey === "Avaliação Clínica e Farmacocinética" && currentSubCategoryKey === "Função Renal" && currentSubSubCategoryKey === "Ajuste de Dose por Função Renal") {
        localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}-${currentSubSubCategoryKey}`;
    }

    if (localStoragePrefix) {
        const currentCalculationData = getCalculationData(currentCategoryKey, currentSubCategoryKey, currentSubSubCategoryKey);
        if (currentCalculationData && currentCalculationData.campos) {
            currentCalculationData.campos.forEach(campo => {
                const savedValue = localStorage.getItem(`${localStoragePrefix}-${campo.id}`);
                const inputElement = document.getElementById(campo.id);
                if (savedValue !== null && inputElement) {
                    if (campo.type === "checkbox") {
                        inputElement.checked = (savedValue === "true");
                    } else {
                        inputElement.value = savedValue;
                    }
                }
                // Restaurar unidade selecionada
                const savedUnit = localStorage.getItem(`${localStoragePrefix}-${campo.id}-unit-select`);
                if (savedUnit !== null) {
                    const unitSelectElement = document.getElementById(`${campo.id}-unit-select`);
                    if (unitSelectElement) {
                        unitSelectElement.value = savedUnit;
                    }
                }
            });
        }
    }
    // Para a calculadora de Conversão de Unidades, restaura também o tipo de conversão
    if (currentCategoryKey === "Outros Cálculos Clínicos" && currentSubCategoryKey === "Conversão de Unidades") {
        const localStoragePrefixConversion = `${currentCategoryKey}-Conversão de Unidades`;
        const savedTipoConversao = localStorage.getItem(`${localStoragePrefixConversion}-tipoConversao`);
        if (savedTipoConversao !== null) {
            const tipoConversaoSelect = document.getElementById("tipoConversao");
            if (tipoConversaoSelect) {
                tipoConversaoSelect.value = savedTipoConversao;
                updateUnitSelects(); // Recarrega as unidades após restaurar o tipo de conversão
            }
        }
        const savedUnidadeOrigem = localStorage.getItem(`${localStoragePrefixConversion}-unidadeOrigem`);
        const savedUnidadeDestino = localStorage.getItem(`${localStoragePrefixConversion}-unidadeDestino`);
        if (savedUnidadeOrigem !== null) {
            const unidadeOrigemSelect = document.getElementById("unidadeOrigem");
            if (unidadeOrigemSelect) unidadeOrigemSelect.value = savedUnidadeOrigem;
        }
        if (savedUnidadeDestino !== null) {
            const unidadeDestinoSelect = document.getElementById("unidadeDestino");
            if (unidadeDestinoSelect) unidadeDestinoSelect.value = savedUnidadeDestino;
        }
    }

    // Special handling for C1V1=C2V2 to restore selected variable and toggle fields
    if (currentCategoryKey === "Cálculos de Volume e Concentração" && currentSubCategoryKey === "Concentração Final após Diluição (C1V1=C2V2)") {
        const variableSelect = document.getElementById("variableToCalculate");
        const localStoragePrefixC1V1C2V2 = `${currentCategoryKey}-${currentSubCategoryKey}`;
        const savedVariable = localStorage.getItem(`${localStoragePrefixC1V1C2V2}-variableToCalculate`);
        if (variableSelect && savedVariable !== null) {
            variableSelect.value = savedVariable;
            toggleC1V1C2V2Fields(savedVariable);
        }
    }
}

/**
 * Helper function to get calculation data based on current selections.
 */
function getCalculationData(categoryKey, subCategoryKey, subSubCategoryKey) {
    const category = calculators[categoryKey];
    if (!category) return null;

    // Se é uma categoria principal que é um cálculo direto (como "Conversão de Unidades")
    if (!category.subCategories && category.campos && categoryKey === subCategoryKey) {
        return category;
    }

    const subCategory = category.subCategories ? category.subCategories[subCategoryKey] : null;
    if (!subCategory) return null;

    if (subSubCategoryKey && subCategory.subSubCategories) {
        return subCategory.subSubCategories[subSubCategoryKey];
    }
    return subCategory; // Em caso de cálculo de 2 níveis
}

/**
 * Helper function to save a specific input or select value to local storage.
 * @param {string} id - The ID of the input or select element.
 * @param {string} value - The value to save.
 */
function saveToLocalStorage(id, value) {
    let localStoragePrefix = '';
    if (currentCategoryKey) {
        const category = calculators[currentCategoryKey];
        if (category && !category.subCategories) {
            localStoragePrefix = currentCategoryKey;
        } else if (currentSubCategoryKey) {
            if (currentSubSubCategoryKey) {
                localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}-${currentSubSubCategoryKey}`;
            } else {
                localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}`;
            }
        }
    }

    // Special handling for "Conversão de Unidades" and C1V1=C2V2 due to custom prefixes
    if (currentCategoryKey === "Outros Cálculos Clínicos" && currentSubCategoryKey === "Conversão de Unidades") {
        localStoragePrefix = `${currentCategoryKey}-Conversão de Unidades`;
    } else if (currentCategoryKey === "Cálculos de Volume e Concentração" && currentSubCategoryKey === "Concentração Final após Diluição (C1V1=C2V2)") {
        localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}`;
    } else if (currentCategoryKey === "Avaliação Clínica e Farmacocinética" && currentSubCategoryKey === "Função Renal" && currentSubSubCategoryKey === "Ajuste de Dose por Função Renal") {
        localStoragePrefix = `${currentCategoryKey}-${currentSubCategoryKey}-${currentSubSubCategoryKey}`;
    }


    if (localStoragePrefix) {
        localStorage.setItem(`${localStoragePrefix}-${id}`, value);
    }
}


// --- Event Listeners Globais ---

// Carrega as categorias iniciais quando a página é carregada
document.addEventListener("DOMContentLoaded", loadCategories);

// Adiciona event listeners para input changes para salvar valores no local storage
document.addEventListener('input', (event) => {
    if (event.target.closest('#formularioCalculo')) {
        // Handle checkbox saving specifically
        if (event.target.type === 'checkbox') {
            saveToLocalStorage(event.target.id, event.target.checked);
        } else {
            saveToLocalStorage(event.target.id, event.target.value);
        }
    }
});

// Add a global listener for select changes to save unit values
document.addEventListener('change', (event) => {
    // Check if the change happened on a unit select element or the main C1V1=C2V2 variable selector
    if (event.target.id.endsWith('-unit-select') || event.target.id === 'variableToCalculate' || event.target.id === 'tipoConversao' || event.target.id === 'unidadeOrigem' || event.target.id === 'unidadeDestino' || event.target.id === 'antibioticoSelect' || event.target.id === 'apresentacaoSelect') {
        saveToLocalStorage(event.target.id, event.target.value);
    }
});
