(function () {
  const n = Utils.number;
  const t = Utils.text;
  const money = Utils.money;
  const dec = Utils.decimal;
  const lines = Utils.lines;

  window.EXERCISES = [
    {
      id: 'FACCAT 05', title: 'Antecessor', category: 'Operadores Aritméticos',
      description: 'Leia um valor e mostre o seu antecessor.',
      run: function faccat05() {
        const valor = n('Digite um número:');
        return `Antecessor de ${valor}: ${valor - 1}`;
      }
    },
    {
      id: 'FACCAT 06', title: 'Área do retângulo', category: 'Operadores Aritméticos',
      description: 'Leia base e altura e calcule a área de um retângulo.',
      run: function faccat06() {
        const base = n('Base do retângulo:');
        const altura = n('Altura do retângulo:');
        return `Área = ${dec(base * altura)}`;
      }
    },
    {
      id: 'FACCAT 07', title: 'Idade em dias', category: 'Operadores Aritméticos',
      description: 'Converta uma idade informada em anos, meses e dias para o total aproximado em dias, considerando 365 dias por ano e 30 por mês.',
      run: function faccat07() {
        const anos = n('Anos:', { integer: true, min: 0 });
        const meses = n('Meses:', { integer: true, min: 0 });
        const dias = n('Dias:', { integer: true, min: 0 });
        const total = anos * 365 + meses * 30 + dias;
        return `Idade aproximada em dias: ${total}`;
      }
    },
    {
      id: 'FACCAT 08', title: 'Percentuais de votos', category: 'Operadores Aritméticos',
      description: 'Calcule o percentual de votos brancos, nulos e válidos em relação ao total de eleitores.',
      run: function faccat08() {
        const total = n('Total de eleitores:', { integer: true, min: 1 });
        const brancos = n('Votos brancos:', { integer: true, min: 0 });
        const nulos = n('Votos nulos:', { integer: true, min: 0 });
        const validos = n('Votos válidos:', { integer: true, min: 0 });
        return lines([
          `Brancos: ${dec(brancos / total * 100)}%`,
          `Nulos: ${dec(nulos / total * 100)}%`,
          `Válidos: ${dec(validos / total * 100)}%`
        ]);
      }
    },
    {
      id: 'FACCAT 09', title: 'Reajuste salarial', category: 'Operadores Aritméticos',
      description: 'Leia o salário atual e o percentual de reajuste e mostre o novo salário.',
      run: function faccat09() {
        const salario = n('Salário atual:', { min: 0 });
        const percentual = n('Percentual de reajuste:', { min: 0 });
        const novo = salario + salario * percentual / 100;
        return `Novo salário: ${money(novo)}`;
      }
    },
    {
      id: 'FACCAT 10', title: 'Custo final de um carro', category: 'Operadores Aritméticos',
      description: 'Calcule o preço ao consumidor somando 28% de distribuidor e 45% de impostos ao custo de fábrica.',
      run: function faccat10() {
        const fabrica = n('Custo de fábrica do carro:', { min: 0 });
        const consumidor = fabrica + fabrica * 0.28 + fabrica * 0.45;
        return `Custo final ao consumidor: ${money(consumidor)}`;
      }
    },
    {
      id: 'FACCAT 11', title: 'Salário do vendedor', category: 'Operadores Aritméticos',
      description: 'Some salário fixo, comissão por carro vendido e 5% sobre o valor total das vendas.',
      run: function faccat11() {
        const carros = n('Quantidade de carros vendidos:', { integer: true, min: 0 });
        const totalVendas = n('Valor total das vendas:', { min: 0 });
        const salarioFixo = n('Salário fixo:', { min: 0 });
        const comissaoCarro = n('Comissão fixa por carro vendido:', { min: 0 });
        const salarioFinal = salarioFixo + carros * comissaoCarro + totalVendas * 0.05;
        return `Salário final: ${money(salarioFinal)}`;
      }
    },
    {
      id: 'FACCAT 12', title: 'Fahrenheit para Celsius', category: 'Horizontalização',
      description: 'Converta uma temperatura em Fahrenheit para Celsius.',
      run: function faccat12() {
        const f = n('Temperatura em Fahrenheit:');
        const c = (f - 32) * 5 / 9;
        return `${dec(f)} °F = ${dec(c)} °C`;
      }
    },
    {
      id: 'FACCAT 13', title: 'Média ponderada', category: 'Horizontalização',
      description: 'Calcule a média de três notas usando pesos 2, 3 e 5.',
      run: function faccat13() {
        const n1 = n('Nota 1:', { min: 0, max: 10 });
        const n2 = n('Nota 2:', { min: 0, max: 10 });
        const n3 = n('Nota 3:', { min: 0, max: 10 });
        const media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
        return `Média final: ${dec(media)}`;
      }
    },
    {
      id: 'FACCAT 14', title: 'Maior que 10', category: 'Seleção e Operadores Relacionais',
      description: 'Informe se o valor digitado é maior que 10.',
      run: function faccat14() {
        const valor = n('Digite um valor:');
        return valor > 10 ? 'É MAIOR QUE 10!' : 'NÃO É MAIOR QUE 10!';
      }
    },
    {
      id: 'FACCAT 15', title: 'Positivo ou negativo', category: 'Seleção e Operadores Relacionais',
      description: 'Informe se um valor é positivo ou negativo, considerando zero como positivo.',
      run: function faccat15() {
        const valor = n('Digite um valor:');
        return valor >= 0 ? 'POSITIVO' : 'NEGATIVO';
      }
    },
    {
      id: 'FACCAT 16', title: 'Compra de maçãs', category: 'Seleção e Operadores Relacionais',
      description: 'Maçãs custam R$ 1,30 abaixo de 12 unidades e R$ 1,00 a partir de 12 unidades.',
      run: function faccat16() {
        const qtd = n('Quantidade de maçãs:', { integer: true, min: 0 });
        const preco = qtd < 12 ? 1.30 : 1.00;
        return lines([`Preço unitário: ${money(preco)}`, `Total: ${money(qtd * preco)}`]);
      }
    },
    {
      id: 'FACCAT 17', title: 'Média e aprovação', category: 'Seleção e Operadores Relacionais',
      description: 'Calcule a média de duas avaliações e informe se o aluno foi aprovado com média maior ou igual a 6.',
      run: function faccat17() {
        const nota1 = n('Nota da 1ª avaliação:', { min: 0, max: 10 });
        const nota2 = n('Nota da 2ª avaliação:', { min: 0, max: 10 });
        const media = (nota1 + nota2) / 2;
        return lines([`Média: ${dec(media)}`, media >= 6 ? 'APROVADO' : 'NÃO APROVADO']);
      }
    },
    {
      id: 'FACCAT 18', title: 'Pode votar?', category: 'Seleção e Operadores Relacionais',
      description: 'Leia o ano atual e o ano de nascimento e informe se a pessoa pode votar no ano informado.',
      run: function faccat18() {
        const atual = n('Ano atual:', { integer: true, min: 1 });
        const nascimento = n('Ano de nascimento:', { integer: true, min: 1, max: atual });
        const idade = atual - nascimento;
        return lines([`Idade: ${idade} anos`, idade >= 16 ? 'PODERÁ VOTAR ESTE ANO' : 'NÃO PODERÁ VOTAR ESTE ANO']);
      }
    },
    {
      id: 'FACCAT 19', title: 'Maior entre dois valores', category: 'Seleção e Operadores Relacionais',
      description: 'Leia dois valores e apresente o maior.',
      run: function faccat19() {
        const a = n('Primeiro valor:');
        const b = n('Segundo valor:');
        if (a === b) return 'Os valores são iguais.';
        return `Maior valor: ${a > b ? a : b}`;
      }
    },
    {
      id: 'FACCAT 20', title: 'Dois valores em ordem crescente', category: 'Seleção e Operadores Relacionais',
      description: 'Leia dois valores e mostre-os do menor para o maior.',
      run: function faccat20() {
        const a = n('Primeiro valor:');
        const b = n('Segundo valor:');
        return `Ordem crescente: ${Math.min(a, b)}, ${Math.max(a, b)}`;
      }
    },
    {
      id: 'FACCAT 21', title: 'Duração de uma partida de xadrez', category: 'Seleção e Operadores Relacionais',
      description: 'Calcule a duração em horas, considerando que a partida pode terminar no dia seguinte e dura no máximo 24 horas.',
      run: function faccat21() {
        const inicio = n('Hora de início (0 a 23):', { integer: true, min: 0, max: 23 });
        const fim = n('Hora de fim (0 a 23):', { integer: true, min: 0, max: 23 });
        const duracao = fim > inicio ? fim - inicio : 24 - inicio + fim;
        return `Duração da partida: ${duracao} hora(s)`;
      }
    },
    {
      id: 'FACCAT 22', title: 'Salário com horas extras', category: 'Seleção e Operadores Relacionais',
      description: 'Considere 160 horas mensais normais e acréscimo de 50% na hora extra.',
      run: function faccat22() {
        const horas = n('Horas trabalhadas no mês:', { min: 0 });
        const valorHora = n('Salário por hora:', { min: 0 });
        const normais = Math.min(horas, 160);
        const extras = Math.max(0, horas - 160);
        const salario = normais * valorHora + extras * valorHora * 1.5;
        return lines([`Horas normais: ${dec(normais)}`, `Horas extras: ${dec(extras)}`, `Salário total: ${money(salario)}`]);
      }
    },
    {
      id: 'FACCAT 23', title: 'Peso ideal — versão corrigida', category: 'Seleção e Operadores Relacionais',
      description: 'Execute a lógica corrigida do algoritmo: leia nome, altura e sexo; depois calcule o peso ideal conforme a fórmula indicada.',
      run: function faccat23() {
        const nome = t('Nome:');
        const altura = n('Altura em metros:', { min: 0.1 });
        const sexo = t('Sexo (M/F):').toUpperCase();
        if (!['M', 'F'].includes(sexo)) return 'Sexo inválido. Use M ou F.';
        const pesoIdeal = sexo === 'M' ? 72.7 * altura - 58 : 62.1 * altura - 44.7;
        return `${nome}: peso ideal aproximado = ${dec(pesoIdeal)} kg`;
      }
    },
    {
      id: 'FACCAT 24', title: 'Comissão por faixa de vendas', category: 'Seleção e Operadores Relacionais',
      description: 'Calcule 3% de comissão até R$ 1.500 e 5% sobre a parte que ultrapassar esse valor.',
      run: function faccat24() {
        const salario = n('Salário fixo:', { min: 0 });
        const vendas = n('Total de vendas:', { min: 0 });
        let comissao;
        if (vendas <= 1500) {
          comissao = vendas * 0.03;
        } else {
          comissao = 1500 * 0.03 + (vendas - 1500) * 0.05;
        }
        return lines([`Comissão: ${money(comissao)}`, `Salário total: ${money(salario + comissao)}`]);
      }
    },
    {
      id: 'FACCAT 25', title: 'Saldo da conta', category: 'Seleção e Operadores Relacionais',
      description: 'Calcule saldo atual = saldo - débito + crédito e informe se ele é positivo ou negativo.',
      run: function faccat25() {
        const conta = t('Número da conta:');
        const saldo = n('Saldo atual informado:');
        const debito = n('Débito:', { min: 0 });
        const credito = n('Crédito:', { min: 0 });
        const atual = saldo - debito + credito;
        return lines([`Conta: ${conta}`, `Saldo calculado: ${money(atual)}`, atual >= 0 ? 'Saldo Positivo' : 'Saldo Negativo']);
      }
    },
    {
      id: 'FACCAT 26', title: 'Controle de estoque', category: 'Seleção e Operadores Relacionais',
      description: 'Compare o estoque atual com a média entre estoque máximo e mínimo e decida se é necessário comprar.',
      run: function faccat26() {
        const atual = n('Quantidade atual em estoque:', { min: 0 });
        const max = n('Quantidade máxima:', { min: 0 });
        const min = n('Quantidade mínima:', { min: 0 });
        const media = (max + min) / 2;
        return lines([`Quantidade média: ${dec(media)}`, atual >= media ? 'Não efetuar compra' : 'Efetuar compra']);
      }
    },
    {
      id: 'FACCAT 27', title: 'Positivo, negativo ou zero', category: 'Seleção Aninhada ou Concatenada',
      description: 'Classifique um número como positivo, negativo ou zero.',
      run: function faccat27() {
        const valor = n('Digite um valor:');
        if (valor > 0) return 'POSITIVO';
        if (valor < 0) return 'NEGATIVO';
        return 'ZERO';
      }
    },
    {
      id: 'FACCAT 28', title: 'Maior entre três valores', category: 'Seleção Aninhada ou Concatenada',
      description: 'Leia três valores e apresente o maior.',
      run: function faccat28() {
        const a = n('Valor A:');
        const b = n('Valor B:');
        const c = n('Valor C:');
        return `Maior valor: ${Math.max(a, b, c)}`;
      }
    },
    {
      id: 'FACCAT 29', title: 'Soma dos dois maiores', category: 'Seleção Aninhada ou Concatenada',
      description: 'Leia três valores e some os dois maiores.',
      run: function faccat29() {
        const valores = [n('Valor A:'), n('Valor B:'), n('Valor C:')];
        valores.sort((a, b) => b - a);
        return `Soma dos dois maiores: ${valores[0] + valores[1]}`;
      }
    },
    {
      id: 'FACCAT 30', title: 'Três valores em ordem crescente', category: 'Seleção Aninhada ou Concatenada',
      description: 'Leia três valores e apresente-os em ordem crescente.',
      run: function faccat30() {
        const valores = [n('Valor A:'), n('Valor B:'), n('Valor C:')];
        valores.sort((a, b) => a - b);
        return `Ordem crescente: ${valores.join(', ')}`;
      }
    },
    {
      id: 'FACCAT 31', title: 'Verificação de triângulo', category: 'Seleção Aninhada ou Concatenada',
      description: 'Leia três lados e verifique se cada lado é menor que a soma dos outros dois.',
      run: function faccat31() {
        const a = n('Lado A:', { min: 0 });
        const b = n('Lado B:', { min: 0 });
        const c = n('Lado C:', { min: 0 });
        const forma = a < b + c && b < a + c && c < a + b;
        return forma ? 'Os valores FORMAM um triângulo.' : 'Os valores NÃO FORMAM um triângulo.';
      }
    },
    {
      id: 'FACCAT 32', title: 'Resultado de uma partida', category: 'Seleção Aninhada ou Concatenada',
      description: 'Leia os nomes dos times e seus gols; mostre o vencedor ou EMPATE.',
      run: function faccat32() {
        const time1 = t('Nome do primeiro time:');
        const gols1 = n(`Gols de ${time1}:`, { integer: true, min: 0 });
        const time2 = t('Nome do segundo time:');
        const gols2 = n(`Gols de ${time2}:`, { integer: true, min: 0 });
        if (gols1 === gols2) return `Placar: ${time1} ${gols1} x ${gols2} ${time2}\nEMPATE`;
        return `Placar: ${time1} ${gols1} x ${gols2} ${time2}\nVencedor: ${gols1 > gols2 ? time1 : time2}`;
      }
    },
    {
      id: 'FACCAT 33', title: 'Comparação entre dois números', category: 'Seleção Aninhada ou Concatenada',
      description: 'Mostre se os números são iguais, se o primeiro é maior ou se o segundo é maior.',
      run: function faccat33() {
        const a = n('Primeiro valor:');
        const b = n('Segundo valor:');
        if (a === b) return 'Números iguais';
        if (a > b) return 'Primeiro é maior';
        return 'Segundo maior';
      }
    },
    {
      id: 'FACCAT 34', title: 'Classificação por Z', category: 'Seleção Aninhada ou Concatenada',
      description: 'Calcule Z = (X × Y) + 5 e classifique a resposta como A, B ou C conforme os limites do exercício.',
      run: function faccat34() {
        const x = n('Valor de X:');
        const y = n('Valor de Y:');
        const z = x * y + 5;
        let resposta;
        if (z <= 0) resposta = 'A';
        else if (z <= 100) resposta = 'B';
        else resposta = 'C';
        return `Z = ${z}\nResposta = ${resposta}`;
      }
    },
    {
      id: 'FACCAT 35', title: 'Posto de combustíveis', category: 'Seleção Aninhada ou Concatenada',
      description: 'Calcule o valor a pagar considerando preço e desconto por tipo de combustível e quantidade de litros.',
      run: function faccat35() {
        const litros = n('Quantidade de litros:', { min: 0 });
        const tipo = t('Tipo de combustível (A = álcool, G = gasolina):').toUpperCase();
        let preco, desconto;
        if (tipo === 'A') {
          preco = 2.90;
          desconto = litros <= 20 ? 0.03 : 0.05;
        } else if (tipo === 'G') {
          preco = 3.30;
          desconto = litros <= 20 ? 0.04 : 0.06;
        } else {
          return 'Tipo de combustível inválido.';
        }
        const bruto = litros * preco;
        const total = bruto - bruto * desconto;
        return lines([`Valor bruto: ${money(bruto)}`, `Desconto: ${dec(desconto * 100)}%`, `Valor a pagar: ${money(total)}`]);
      }
    },
    {
      id: 'FACCAT 36', title: 'Idades de homens e mulheres', category: 'Seleção Aninhada ou Concatenada',
      description: 'Some a idade do homem mais velho com a mulher mais nova e multiplique a idade do homem mais novo pela mulher mais velha.',
      run: function faccat36() {
        const h1 = n('Idade do homem 1:', { integer: true, min: 0 });
        const h2 = n('Idade do homem 2:', { integer: true, min: 0 });
        const m1 = n('Idade da mulher 1:', { integer: true, min: 0 });
        const m2 = n('Idade da mulher 2:', { integer: true, min: 0 });
        const homemVelho = Math.max(h1, h2);
        const homemNovo = Math.min(h1, h2);
        const mulherVelha = Math.max(m1, m2);
        const mulherNova = Math.min(m1, m2);
        return lines([
          `Soma: ${homemVelho} + ${mulherNova} = ${homemVelho + mulherNova}`,
          `Produto: ${homemNovo} × ${mulherVelha} = ${homemNovo * mulherVelha}`
        ]);
      }
    },
    {
      id: 'FACCAT 37', title: 'Fruteira', category: 'Seleção Aninhada ou Concatenada',
      description: 'Calcule o preço de morangos e maçãs por faixa de peso e aplique 10% de desconto quando o peso total passar de 8 kg ou o valor passar de R$ 25.',
      run: function faccat37() {
        const kgMorango = n('Quilos de morango:', { min: 0 });
        const kgMaca = n('Quilos de maçã:', { min: 0 });
        const precoMorango = kgMorango <= 5 ? 2.50 : 2.20;
        const precoMaca = kgMaca <= 5 ? 1.80 : 1.50;
        const bruto = kgMorango * precoMorango + kgMaca * precoMaca;
        const kgTotal = kgMorango + kgMaca;
        const desconto = kgTotal > 8 || bruto > 25 ? bruto * 0.10 : 0;
        return lines([
          `Peso total: ${dec(kgTotal)} kg`,
          `Valor bruto: ${money(bruto)}`,
          `Desconto: ${money(desconto)}`,
          `Valor a pagar: ${money(bruto - desconto)}`
        ]);
      }
    },
    {
      id: 'FACCAT 38', title: 'Validação de usuário e senha', category: 'Seleção Aninhada ou Concatenada',
      description: 'Valide o código 1234 e, se correto, a senha 9999.',
      run: function faccat38() {
        const codigo = n('Código do usuário:', { integer: true });
        if (codigo !== 1234) return 'Usuário inválido!';
        const senha = n('Senha:', { integer: true });
        if (senha !== 9999) return 'senha incorreta';
        return 'Acesso permitido';
      }
    },
    {
      id: 'FACCAT 39', title: 'Expressões lógicas', category: 'Operadores Lógicos',
      description: 'Avalie as expressões considerando A = verdadeiro, B = verdadeiro e C = falso.',
      run: function faccat39() {
        const A = true;
        const B = true;
        const C = false;
        const xor = (x, y) => Boolean(x) !== Boolean(y);
        const a = (A && B) || xor(A, B);
        const b = (A || B) && (A && C);
        const c = A || xor(C && B, A && !B);
        return lines([
          `A = ${A}, B = ${B}, C = ${C}`,
          `a) (A e B) ou (A xou B) = ${a}`,
          `b) (A ou B) e (A e C) = ${b}`,
          `c) A ou C e B xou A e não B = ${c}`
        ]);
      }
    }
  ];
})();
