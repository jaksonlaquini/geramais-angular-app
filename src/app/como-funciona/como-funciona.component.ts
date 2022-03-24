import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.css'],
})
export class ComoFuncionaComponent implements OnInit {
  perguntasFrequentes: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.perguntasFrequentes = [
      {
        id: 1,
        pergunta: '1- A energia Solar funciona em dias chuvosos?',
        resposta: `Sim! Mesmo em períodos que o dia não está ensolarado, os painéis fotovoltaicos conseguem funcionar. Isso porque, a conversão de eletricidade das placas se dá por meio da radiação do sol, e não pela temperatura que está fazendo no momento.
          Ou seja, você não precisa se preocupar, pois em qualquer ocasião será possível produzir a energia para o funcionamento dos aparelhos na sua residência ou empresa. Em situações extremas, como aquelas em que nos deparamos com chuvas por períodos prolongados ou quando há uma alta quantidade de nuvens no céu, é possível que os raios de sol não consigam atingir a superfície dos painéis fotovoltaicos como de costume. Nesses momentos, o que acontece é uma diminuição no nível de energia que será gerada no dia.
          `,
      },
      {
        id: 2,
        pergunta: '2- Qual é a validade dos créditos de energia solar?',
        resposta:
          'Toda a energia constituída a mais pelo sistema de energia solar fotovoltaica, que é injetada na rede da distribuidora, será “emprestada” para a distribuidora. Assim, será gerado um “crédito” de energia para você. Este crédito tem validade de no máximo 60 meses.',
      },
      {
        id: 3,
        pergunta:
          '3- Como realizo a transferência dos créditos de energia solar?',
        resposta: `O Autoconsumo Remoto permite ao consumidor gerar energia em uma unidade e utilizar o excedente para compensar outras contas, desde que de mesma titularidade e dentro da área de concessão de uma mesma distribuidora.
          Desta maneira, pode-se gerar energia em uma casa de campo e compensar na conta no apartamento. As empresas também podem, por exemplo, gerar energia em uma filial e aproveitar os créditos na sede. Cabe notar, o Autoconsumo Remoto pode envolver múltiplas unidades consumidoras. Assim, uma empresa que tenha várias filiais pode se beneficiar dos créditos em todas elas.
         `,
      },
      {
        id: 4,
        pergunta:
          '4- Se acabar a energia da rua, meu sistema continua funcionando?',
        resposta: `Depende, isso porque, existe sim a possibilidade de ter energia, mesmo quando há algum problema no fornecimento da concessionária. Para que isso aconteça, o sistema instalado deverá ser o off-grid.
          O off-grid utiliza baterias, então se ocorrer a queda de energia, seu sistema funcionará, sem problema algum.
          Atualmente o sistema mais utilizado é o on-grid, que é conectado à rede de energia elétrica da concessionária. Com isso, se faltar energia, o sistema todo também ficará sem funcionar.
          Isso acontece por medida de segurança, quando há necessidade de manutenção na rede elétrica da concessionária, é necessário que o sistema desligue, pois se não, ele continuaria gerando energia e injetando-a na rede elétrica, colocando em perigo a vida dos profissionais que realizam a manutenção da rede.
          `,
      },
      {
        id: 5,
        pergunta:
          '5- A concessionária cobra alguma taxa para trocar o relógio?',
        resposta:
          'Os custos para a troca do medidor e instalação são por conta da concessionária. Contudo, se o consumidor estiver irregular em relação à sua instalação, o custeio da adequação será de sua responsabilidade.',
      },
      {
        id: 6,
        pergunta: '6- Como funciona o relógio bidirecional?',
        resposta:
          'O medidor de energia bidirecional é um componente do sistema fotovoltaico que tem a função de medir o consumo de energia elétrica. Ele funciona registrando a energia consumida da concessionária (chamada de direta), e registrando a energia injetada na rede da concessionária (chamada de reversa).',
      },
      {
        id: 7,
        pergunta: '7- Vou zerar minha conta com energia solar?',
        resposta: `Não, infelizmente a maioria das Distribuidoras de energia irão lhe cobrar um mínimo para estar conectado na rede. Além disso, tem a taxa de iluminação pública que é cobrado na conta também, mas você consegue reduzir em até 95% o que você paga na conta de luz com o seu Gerador de Energia Solar.
          De acordo com a Resolução Normativa N°414, de 09 de Setembro de 2010, artigo 98 as distribuidoras podem lhe cobrar o custo de disponibilidade de acordo com o inciso abaixo:
          I – 30KWh em R$ para quem tem conexão monofásica (2 Condutores)
          II – 50kWh em R$ para quem tem conexão bifásica (3 condutores)
          III – 100kWh em R$ para quem tem conexão trifásica
          `,
      },
      {
        id: 8,
        pergunta: '8- Quanto tempo demora para instalar energia solar?',
        resposta: `Em média são necessários de 20 a 60 dias para que o sistema fotovoltaico esteja instalado e já funcionando. Isso porque, para a instalação do equipamento despende de 1 a 7 dias, variando conforme a quantidade de placas e local de instalação. Além disso, existem os prazos para emitir parecer (até 15 dias corridos) e para a concessionária realizar a vistoria e trocar o medidor (até 14 dias úteis). `,
      },
    ];
  }
}
